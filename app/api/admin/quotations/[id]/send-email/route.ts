import { NextResponse } from "next/server";
import { getSession } from "@/lib/session";
import { getQuotation, updateQuotationStatus } from "@/lib/quotations";
import { logEmail } from "@/lib/leads";
import { quotationReadyEmail, isEmailConfigured, sendEmail, senderFor } from "@/lib/email";
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

  const quotation = await getQuotation(id);
  if (!quotation) {
    return NextResponse.json({ ok: false, error: "Quotation not found." }, { status: 404 });
  }
  if (!quotation.clientEmail) {
    return NextResponse.json(
      { ok: false, error: "This quotation has no client email address." },
      { status: 400 }
    );
  }
  if (!isEmailConfigured()) {
    return NextResponse.json(
      { ok: false, error: "Email is not configured (set RESEND_API_KEY and FROM_EMAIL)." },
      { status: 503 }
    );
  }

  const viewUrl = `${siteConfig.url}/quote/${quotation.publicToken}`;
  const { subject, html } = quotationReadyEmail(quotation, viewUrl);

  try {
    await sendEmail({ to: quotation.clientEmail, subject, html, ...senderFor() });

    if (quotation.status === "Draft") {
      await updateQuotationStatus(id, "Sent").catch((e) =>
        console.error("[admin] update status to Sent failed:", e)
      );
    }

    try {
      await logEmail({
        leadId: quotation.leadId ?? undefined,
        subject,
        message: `Quotation ${quotation.quoteNumber} sent: ${viewUrl}`,
        sentTo: quotation.clientEmail,
      });
    } catch (logErr) {
      console.error("[admin] quotation email log failed:", logErr);
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[admin] quotation email send failed:", err);
    return NextResponse.json({ ok: false, error: "Failed to send email." }, { status: 500 });
  }
}
