import { createHash, timingSafeEqual } from "node:crypto";
import { NextResponse } from "next/server";
import { leadSchema } from "@/lib/leadSchema";
import { createLead } from "@/lib/leads";
import { isSupabaseConfigured } from "@/lib/supabase";
import { sendEmail } from "@/lib/email";
import { ptasAdminLeadEmail, ptasClientLeadEmail } from "@/lib/email-ptas";
import { INTAKE_SITES, type IntakeSite } from "@/lib/lead-sources";

/**
 * POST /api/leads/intake — server-to-server lead intake for other websites.
 *
 * The original site keeps using the public `/api/leads` endpoint, which this
 * file does not change. This endpoint is for trusted servers only:
 *
 * - **Auth:** `Authorization: Bearer <token>`, compared in constant time
 *   against each site's server-only token env var. The matching token — not
 *   anything in the body — decides which website the lead came from, and that
 *   value is written to `source_site`. Fails closed when no token is set.
 * - **Same contract:** the body is validated with the original `leadSchema`
 *   and saved with the original `createLead()`, into the same `public.leads`
 *   table. Unknown keys (including any attempt to send `source_site`) are
 *   stripped by the schema.
 * - **Rate limit:** the original policy (5 requests / minute) keyed per site
 *   and per *customer* IP. The customer IP comes from `x-client-ip`, which is
 *   only read after the caller has authenticated.
 * - **Duplicates:** best-effort per-instance idempotency on the caller's
 *   `Idempotency-Key` (the website's enquiry reference). On Cloudflare
 *   Workers memory is per isolate, so this is NOT durable across instances
 *   and does not guarantee that a duplicate can never be stored.
 * - **Honesty:** if the CRM database is not configured, this endpoint returns
 *   503 instead of pretending the lead was saved.
 */

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const WINDOW_MS = 60_000;
const MAX_REQUESTS = 5;
const hits = new Map<string, { count: number; resetAt: number }>();

const IDEMPOTENCY_TTL_MS = 30 * 60_000;
const seen = new Map<string, { state: "pending" | "done"; leadId?: string; expiresAt: number }>();

function digest(value: string): Buffer {
  return createHash("sha256").update(value).digest();
}

/** Constant-time match of the presented bearer token against each site's token. */
function authenticate(request: Request): IntakeSite | null | "unconfigured" {
  const configured = INTAKE_SITES.filter((s) => (process.env[s.tokenEnv] ?? "").length >= 32);
  if (configured.length === 0) return "unconfigured";

  const header = request.headers.get("authorization") ?? "";
  const match = /^Bearer\s+(\S+)$/i.exec(header);
  if (!match) return null;
  const presented = digest(match[1]);

  let found: IntakeSite | null = null;
  for (const site of configured) {
    // Compare against every configured site so timing does not reveal which one matched.
    if (timingSafeEqual(presented, digest(process.env[site.tokenEnv]!))) found = site;
  }
  return found;
}

function rateLimited(key: string): boolean {
  const now = Date.now();
  const entry = hits.get(key);
  if (!entry || now > entry.resetAt) {
    hits.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  entry.count += 1;
  return entry.count > MAX_REQUESTS;
}

function clientIp(request: Request): string {
  const value = request.headers.get("x-client-ip")?.trim() ?? "";
  return /^[0-9a-fA-F:.]{3,64}$/.test(value) ? value : "unknown";
}

function idempotencyKey(request: Request, site: IntakeSite): string | null {
  const value = request.headers.get("idempotency-key")?.trim() ?? "";
  return /^[A-Za-z0-9_-]{6,64}$/.test(value) ? `${site.id}:${value}` : null;
}

function sweepSeen(now: number) {
  for (const [key, entry] of seen) if (entry.expiresAt < now) seen.delete(key);
}

export async function POST(request: Request) {
  const site = authenticate(request);
  if (site === "unconfigured") {
    console.error("[leads/intake] no intake token configured — refusing request");
    return NextResponse.json({ ok: false, error: "Intake is not configured." }, { status: 503 });
  }
  if (!site) {
    return NextResponse.json({ ok: false, error: "Unauthorized." }, { status: 401 });
  }

  const ip = clientIp(request);
  if (rateLimited(`${site.id}:${ip}`)) {
    return NextResponse.json(
      { ok: false, error: "Too many requests. Please try again shortly." },
      { status: 429 }
    );
  }

  const now = Date.now();
  sweepSeen(now);
  const key = idempotencyKey(request, site);
  if (key) {
    const previous = seen.get(key);
    if (previous?.state === "done") {
      return NextResponse.json({ ok: true, id: previous.leadId, duplicate: true });
    }
    if (previous?.state === "pending") {
      return NextResponse.json(
        { ok: false, error: "This request is already being processed." },
        { status: 409 }
      );
    }
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const parsed = leadSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "Validation failed.", issues: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  if (!isSupabaseConfigured()) {
    console.error("[leads/intake] Supabase not configured — lead NOT saved", { site: site.id });
    return NextResponse.json(
      { ok: false, error: "The CRM is not available. Please try again later." },
      { status: 503 }
    );
  }

  if (key) seen.set(key, { state: "pending", expiresAt: now + IDEMPOTENCY_TTL_MS });

  let lead;
  try {
    lead = await createLead(parsed.data, { sourceSite: site.id });
  } catch (err) {
    if (key) seen.delete(key);
    console.error("[leads/intake] failed to save lead:", err);
    return NextResponse.json(
      { ok: false, error: "Could not save the request. Please try again." },
      { status: 500 }
    );
  }

  if (key) seen.set(key, { state: "done", leadId: lead.id, expiresAt: now + IDEMPOTENCY_TTL_MS });

  // Notifications — non-fatal, exactly like /api/leads: a saved lead is never
  // lost because an email failed.
  const siteFrom = process.env[site.fromEnv] || undefined;
  const siteUrl = process.env[site.siteUrlEnv] || null;
  const adminTo = process.env.ADMIN_EMAIL;
  try {
    if (adminTo) {
      const { subject, html } = ptasAdminLeadEmail(lead);
      await sendEmail({ to: adminTo, subject, html, replyTo: lead.email ?? undefined, from: siteFrom });
    }
  } catch (err) {
    console.error("[leads/intake] admin email failed:", err instanceof Error ? err.message : err);
  }
  try {
    if (lead.email) {
      if (siteFrom) {
        const { subject, html } = ptasClientLeadEmail(lead, siteUrl);
        await sendEmail({ to: lead.email, subject, html, replyTo: adminTo ?? undefined, from: siteFrom });
      } else {
        // No verified sender for this brand yet: do not send a customer email
        // from another brand's address.
        console.warn(`[leads/intake] ${site.fromEnv} not set — customer acknowledgement skipped`);
      }
    }
  } catch (err) {
    console.error("[leads/intake] customer email failed:", err instanceof Error ? err.message : err);
  }

  return NextResponse.json({ ok: true, id: lead.id });
}
