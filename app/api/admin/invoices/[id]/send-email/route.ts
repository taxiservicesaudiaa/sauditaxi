import { NextResponse } from "next/server";
import { getSession } from "@/lib/session";
import { getInvoice } from "@/lib/invoices";
import { logEmail } from "@/lib/leads";
import { invoiceReadyEmail, isEmailConfigured, sendEmail, senderFor } from "@/lib/email";
import { siteConfig } from "@/lib/site";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!(await getSession())) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }
  const { id } = await params;

  const invoice = await getInvoice(id);
  if (!invoice) {
    return NextResponse.json({ ok: false, error: "Invoice not found." }, { status: 404 });
  }
  if (!invoice.clientEmail) {
    return NextResponse.json(
      { ok: false, error: "This invoice has no client email address." },
      { status: 400 }
    );
  }
  if (!isEmailConfigured()) {
    return NextResponse.json(
      { ok: false, error: "Email is not configured (set RESEND_API_KEY and FROM_EMAIL)." },
      { status: 503 }
    );
  }

  const viewUrl = `${siteConfig.url}/invoice/${invoice.publicToken}`;
  const { subject, html } = invoiceReadyEmail(invoice, viewUrl);

  try {
    await sendEmail({ to: invoice.clientEmail, subject, html, ...senderFor() });
    try {
      await logEmail({
        leadId: invoice.leadId ?? undefined,
        subject,
        message: `Invoice ${invoice.invoiceNumber} sent: ${viewUrl}`,
        sentTo: invoice.clientEmail,
      });
    } catch (logErr) {
      console.error("[admin] invoice email log failed:", logErr);
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[admin] invoice email send failed:", err);
    return NextResponse.json({ ok: false, error: "Failed to send email." }, { status: 500 });
  }
}
