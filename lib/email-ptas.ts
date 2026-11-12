import type { Lead } from "@/lib/leads";
import { detailRows, esc } from "@/lib/email";

/**
 * Lead emails for leads that arrive from the KSA Rehla Transfers
 * website through `/api/leads/intake`.
 *
 * Kept in a separate file on purpose: the original site's templates in
 * `lib/email.ts` are not touched. The trip-details table is the same
 * `detailRows()` the original lead emails use, so both websites report a
 * lead identically; only the branding around it differs.
 *
 * The customer email makes no claims the new website does not make itself:
 * no fixed price, no 24/7 support, no WhatsApp number (none is published for
 * this brand yet).
 */

export const PTAS_BRAND = "KSA Rehla Transfers";

// KSA Rehla Transfers palette (palm, ink, sand, brass) as hex for
// email clients, which do not support oklch.
const PALM = "#1f5a45";
const INK = "#16241f";
const SAND = "#f4f1ea";
const BRASS = "#b8913f";

function ptasShell(title: string, bodyHtml: string, siteUrl: string | null): string {
  const site = siteUrl
    ? `<a href="${esc(siteUrl)}" style="color:${BRASS};text-decoration:none">${esc(
        siteUrl.replace(/^https?:\/\//, "")
      )}</a>`
    : "";
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>${esc(title)}</title>
<style>
  @media only screen and (max-width: 600px) {
    .email-container { width: 100% !important; border-radius: 0 !important; }
    .email-padding { padding: 16px !important; }
    .detail-table td { display: block !important; width: 100% !important; padding: 4px 12px !important; }
    .detail-label { color: #999 !important; font-size: 12px !important; text-transform: uppercase; }
  }
</style>
</head>
<body style="margin:0;padding:0;background:${SAND};font-family:Arial,Helvetica,sans-serif">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${SAND};padding:24px 0">
    <tr>
      <td align="center">
        <table role="presentation" class="email-container" width="600" cellpadding="0" cellspacing="0" style="width:600px;max-width:600px;margin:0 auto;background:#ffffff;border-radius:14px;overflow:hidden;border:1px solid #e4e0d6">
          <tr>
            <td style="background:${PALM};padding:20px 24px" align="center">
              <p style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:22px;color:#ffffff">${esc(PTAS_BRAND)}</p>
            </td>
          </tr>
          <tr>
            <td class="email-padding" style="padding:24px">
              <h1 style="margin:0 0 12px;font-size:20px;color:${INK}">${esc(title)}</h1>
              ${bodyHtml}
            </td>
          </tr>
          <tr>
            <td style="padding:16px 24px;background:${SAND};color:#6b7570;font-size:12px">
              ${esc(PTAS_BRAND)} · Private transfers across Saudi Arabia${site ? ` · ${site}` : ""}
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

/** Internal notification to ADMIN_EMAIL. The website is named first. */
export function ptasAdminLeadEmail(lead: Lead): { subject: string; html: string } {
  const submitted = new Date(lead.createdAt).toLocaleString("en-GB");
  const subject = `New lead — Website: ${PTAS_BRAND}`;
  const html = ptasShell(
    "New lead received",
    `<p style="margin:0 0 16px;padding:10px 12px;background:${SAND};border-left:4px solid ${BRASS};color:${INK};font-weight:700">
       Website: ${esc(PTAS_BRAND)}
     </p>
     <p style="color:#444;margin:0 0 16px">A new quote request was submitted on ${esc(submitted)}.
       This lead is in the same CRM as Saudi Private Transfers leads.</p>
     <table class="detail-table" style="width:100%;border-collapse:collapse;font-size:14px">${detailRows(lead)}</table>`,
    null
  );
  return { subject, html };
}

/** Acknowledgement to the customer, branded for the new website. */
export function ptasClientLeadEmail(
  lead: Lead,
  siteUrl: string | null
): { subject: string; html: string } {
  const subject = `We received your quote request — ${PTAS_BRAND}`;
  const html = ptasShell(
    "We received your quote request",
    `<p style="color:#444;margin:0 0 16px">Thank you for contacting ${esc(PTAS_BRAND)}. We have received your journey details. Our team will review them and reply with a written quotation. Nothing is booked and no payment is taken until you accept a quotation.</p>
     <p style="color:#444;margin:0 0 8px;font-weight:600">Your journey details:</p>
     <table class="detail-table" style="width:100%;border-collapse:collapse;font-size:14px">${detailRows(lead, { includeSource: false })}</table>
     <p style="color:#444;margin:16px 0 0">You can reply to this email if anything needs correcting.</p>`,
    siteUrl
  );
  return { subject, html };
}
