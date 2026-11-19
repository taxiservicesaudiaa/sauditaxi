import { NextResponse } from "next/server";
import { getQuotationByToken, updateQuotationStatusByToken } from "@/lib/quotations";
import {
  sendEmail,
  quotationAcceptedClientEmail,
  quotationAcceptedAdminEmail,
  quotationDeclinedAdminEmail,
  senderFor,
} from "@/lib/email";
import { siteConfig } from "@/lib/site";
import { logEmail } from "@/lib/leads";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(
  request: Request,
  { params }: { params: Promise<{ token: string }> }
) {
  const { token } = await params;

  let body: { action?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const action = body.action;
  if (action !== "accept" && action !== "decline") {
    return NextResponse.json(
      { ok: false, error: "Invalid action. Must be 'accept' or 'decline'." },
      { status: 400 }
    );
  }

  const quotation = await getQuotationByToken(token);
  if (!quotation) {
    return NextResponse.json({ ok: false, error: "Quotation not found." }, { status: 404 });
  }

  const newStatus = action === "accept" ? "Accepted" : "Declined";
  const updatedQuotation = await updateQuotationStatusByToken(token, newStatus);

  // Owner notifications go to the booking@ mailbox (owner, Nov 2026).
  const adminEmail = siteConfig.bookingEmail;
  // Booking emails go out from booking@, and customer replies come back to it.
  const bookingSender = senderFor();

  if (action === "accept") {
    // 1. Send confirmation email to Customer
    if (updatedQuotation.clientEmail) {
      try {
        const { subject, html } = quotationAcceptedClientEmail(updatedQuotation);
        await sendEmail({
          to: updatedQuotation.clientEmail,
          subject,
          html,
          from: bookingSender.from,
          replyTo: bookingSender.replyTo,
        });

        if (updatedQuotation.leadId) {
          await logEmail({
            leadId: updatedQuotation.leadId,
            subject,
            message: `Quotation ${updatedQuotation.quoteNumber} accepted by client.`,
            sentTo: updatedQuotation.clientEmail,
          }).catch((err) => console.error("[quote action] lead log failed:", err));
        }
      } catch (err) {
        console.error("[quote action] failed sending acceptance email to client:", err);
      }
    }

    // 2. Send notification email to Admin
    if (adminEmail) {
      try {
        const { subject, html } = quotationAcceptedAdminEmail(updatedQuotation);
        await sendEmail({
          to: adminEmail,
          subject,
          html,
          from: bookingSender.from,
          replyTo: updatedQuotation.clientEmail ?? undefined,
        });
      } catch (err) {
        console.error("[quote action] failed sending acceptance email to admin:", err);
      }
    }
  } else if (action === "decline") {
    // Send notification email to Admin
    if (adminEmail) {
      try {
        const { subject, html } = quotationDeclinedAdminEmail(updatedQuotation);
        await sendEmail({
          to: adminEmail,
          subject,
          html,
          from: bookingSender.from,
          replyTo: updatedQuotation.clientEmail ?? undefined,
        });
      } catch (err) {
        console.error("[quote action] failed sending decline email to admin:", err);
      }
    }
  }

  return NextResponse.json({
    ok: true,
    status: updatedQuotation.status,
    message: action === "accept"
      ? "Quotation accepted successfully."
      : "Quotation declined.",
  });
}
