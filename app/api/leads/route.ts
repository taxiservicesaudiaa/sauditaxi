import { NextResponse } from "next/server";
import { leadSchema } from "@/lib/leadSchema";
import { createLead, type Lead } from "@/lib/leads";
import { isSupabaseConfigured } from "@/lib/supabase";
import { siteConfig } from "@/lib/site";
import { adminLeadEmail, clientLeadEmail, sendEmail, senderFor } from "@/lib/email";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Very small in-memory rate limiter (per server instance): 5 requests / minute / IP.
const WINDOW_MS = 60_000;
const MAX_REQUESTS = 5;
const hits = new Map<string, { count: number; resetAt: number }>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = hits.get(ip);
  if (!entry || now > entry.resetAt) {
    hits.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  entry.count += 1;
  return entry.count > MAX_REQUESTS;
}

export async function POST(request: Request) {
  console.log("[leads] POST /api/leads called");
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  if (rateLimited(ip)) {
    return NextResponse.json(
      { ok: false, error: "Too many requests. Please try again shortly." },
      { status: 429 }
    );
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

  const input = parsed.data;

  // 1) Save the lead (degrade gracefully if Supabase isn't configured yet).
  let lead: Lead;
  if (isSupabaseConfigured()) {
    try {
      lead = await createLead(input);
    } catch (err) {
      console.error("[leads] failed to save lead:", err);
      return NextResponse.json(
        { ok: false, error: "Could not save your request. Please try again." },
        { status: 500 }
      );
    }
  } else {
    console.warn("[leads] Supabase not configured — lead not persisted.");
    const now = new Date().toISOString();
    lead = {
      id: "unsaved",
      status: "New",
      createdAt: now,
      updatedAt: now,
      fullName: input.fullName ?? null,
      email: input.email ?? null,
      phone: input.phone ?? null,
      pickupLocation: input.pickupLocation ?? null,
      dropoffLocation: input.dropoffLocation ?? null,
      date: input.date ?? null,
      time: input.time ?? null,
      passengers: input.passengers ?? null,
      luggage: input.luggage ?? null,
      vehicleType: input.vehicleType ?? null,
      flightNumber: input.flightNumber ?? null,
      message: input.message ?? null,
      sourcePage: input.sourcePage ?? null,
      serviceType: input.serviceType ?? null,
    };
  }

  // 2) Notify admin + client (non-fatal — never block a saved lead on email).
  try {
    // Owner notifications go straight to the owner's inbox (ADMIN_EMAIL), sent from
    // booking@/info@. Routing them to booking@ made them pass through ImprovMX back to
    // the same Gmail, which Gmail treats as a forwarding loop and drops or spam-folds.
    const adminTo = process.env.ADMIN_EMAIL || siteConfig.bookingEmail;
    // info@ for Contact-page enquiries, booking@ for quote requests.
    const sender = senderFor(lead.serviceType);
    console.log("[leads] preparing to send emails", { adminEmailPresent: Boolean(adminTo), clientEmailPresent: Boolean(lead.email) });
    if (adminTo) {
      const { subject, html } = adminLeadEmail(lead);
      console.log("[leads] sending admin email to", adminTo);
      await sendEmail({ to: adminTo, subject, html, replyTo: lead.email ?? undefined, from: sender.from });
    }
    if (lead.email) {
      const { subject, html } = clientLeadEmail(lead);
      console.log("[leads] sending client email to", lead.email);
      // Sent from, and replied to, booking@ or info@ so the conversation stays in that mailbox.
      await sendEmail({ to: lead.email, subject, html, from: sender.from, replyTo: sender.replyTo });
    }
  } catch (err) {
    console.error("[leads] email send failed:", err instanceof Error ? err.stack : err);
  }

  return NextResponse.json({ ok: true, id: lead.id });
}
