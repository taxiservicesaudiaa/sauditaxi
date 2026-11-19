import { NextResponse } from "next/server";
import { getSession } from "@/lib/session";
import { getLead, logEmail } from "@/lib/leads";
import { customClientEmail, isEmailConfigured, sendEmail, senderFor } from "@/lib/email";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!(await getSession())) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }
  const { id } = await params;

  let body: { subject?: string; message?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const subject = (body.subject ?? "").trim();
  const message = (body.message ?? "").trim();
  if (!subject || !message) {
    return NextResponse.json(
      { ok: false, error: "Subject and message are required." },
      { status: 400 }
    );
  }

  const lead = await getLead(id);
  if (!lead) {
    return NextResponse.json({ ok: false, error: "Lead not found." }, { status: 404 });
  }
  if (!lead.email) {
    return NextResponse.json(
      { ok: false, error: "This lead has no email address." },
      { status: 400 }
    );
  }

  if (!isEmailConfigured()) {
    return NextResponse.json(
      { ok: false, error: "Email is not configured (set RESEND_API_KEY and FROM_EMAIL)." },
      { status: 503 }
    );
  }

  try {
    const sender = senderFor(lead.serviceType);
    await sendEmail({ to: lead.email, subject, html: customClientEmail(subject, message), from: sender.from, replyTo: sender.replyTo });
    // Best-effort email log; don't fail the request if logging fails.
    try {
      await logEmail({ leadId: lead.id, subject, message, sentTo: lead.email });
    } catch (logErr) {
      console.error("[admin] email log failed:", logErr);
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[admin] email send failed:", err);
    return NextResponse.json({ ok: false, error: "Failed to send email." }, { status: 500 });
  }
}
