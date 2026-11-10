import { Resend } from "resend";
import type { Lead } from "@/lib/leads";
import type { Invoice } from "@/lib/invoices";
import type { Quotation } from "@/lib/quotations";
import { siteConfig, whatsappLink } from "@/lib/site";

export function isEmailConfigured(): boolean {
  return Boolean(process.env.RESEND_API_KEY && process.env.FROM_EMAIL);
}

interface SendArgs {
  to: string;
  subject: string;
  html: string;
  replyTo?: string;
  /**
   * Sender override for another website's emails (e.g. PTAS_FROM_EMAIL).
   * Omitted by every existing caller, which keeps sending from FROM_EMAIL.
   */
  from?: string;
}

/**
 * Send an email via Resend. Returns { skipped: true } when Resend isn't
 * configured so the rest of the flow (saving the lead) still succeeds in dev.
 */
export async function sendEmail({ to, subject, html, replyTo, from }: SendArgs) {
  if (!isEmailConfigured()) {
    console.warn("[email] Resend not configured — skipping send to", to);
    return { skipped: true as const };
  }

  console.log("[email] sendEmail called", { to, subject, hasReplyTo: Boolean(replyTo) });
  console.log("[email] env status", {
    resendApiKeyPresent: Boolean(process.env.RESEND_API_KEY),
    fromEmailPresent: Boolean(process.env.FROM_EMAIL),
    adminEmailPresent: Boolean(process.env.ADMIN_EMAIL),
  });

  const resend = new Resend(process.env.RESEND_API_KEY);

  // Resend's SDK does NOT throw on API errors — it returns { data, error }.
  // We must inspect `error` explicitly, otherwise failures pass silently.
  const { data, error } = await resend.emails.send({
    from: from ?? process.env.FROM_EMAIL!,
    to,
    subject,
    html,
    replyTo,
  });

  if (error) {
    console.error("[email] send failed", { to, subject, error });
    throw new Error(error.message ?? "Resend send failed");
  }

  console.log("[email] send success", { to, id: data?.id });
  return { id: data?.id ?? null, skipped: false as const };
}

const ESC: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
};
export function esc(value: unknown): string {
  return String(value ?? "").replace(/[&<>"']/g, (c) => ESC[c]);
}

export function detailRows(lead: Lead, { includeSource = true }: { includeSource?: boolean } = {}): string {
  const rows: [string, string | null][] = [
    ["Name", lead.fullName],
    ["Phone / WhatsApp", lead.phone],
    ["Email", lead.email],
    ["Pickup", lead.pickupLocation],
    ["Drop-off", lead.dropoffLocation],
    ["Date", lead.date],
    ["Time", lead.time],
    ["Passengers", lead.passengers],
    ["Luggage", lead.luggage],
    ["Vehicle type", lead.vehicleType],
    ["Flight number", lead.flightNumber],
    ["Message", lead.message],
    ["Service", lead.serviceType],
    // Source page & attribution are internal — admin only, never shown to the client.
    ...(includeSource
      ? ([
          ["Source page", lead.sourcePage],
          ["First Landing Page", lead.firstLandingPage ?? null],
          ["First Referrer", lead.firstReferrer ?? null],
          ["First UTM Source", lead.firstUtmSource ?? null],
          ["First UTM Medium", lead.firstUtmMedium ?? null],
          ["First UTM Campaign", lead.firstUtmCampaign ?? null],
          ["Session Landing Page", lead.landingPage ?? null],
          ["Session Referrer", lead.referrer ?? null],
          ["UTM Source", lead.utmSource ?? null],
          ["UTM Medium", lead.utmMedium ?? null],
          ["UTM Campaign", lead.utmCampaign ?? null],
          ["GCLID", lead.gclid ?? null],
          ["Search Source", lead.searchSource ?? null],
        ] as [string, string | null][])
      : []),
  ];
  return rows
    .filter(([, v]) => v)
    .map(
      ([k, v]) =>
        `<tr><td class="detail-label" style="padding:6px 12px;color:#666;vertical-align:top;width:38%">${esc(
          k
        )}</td><td style="padding:6px 12px;color:#111;font-weight:600;word-break:break-word">${esc(v)}</td></tr>`
    )
    .join("");
}

// Full HTML document (not a fragment): mobile mail clients without a
// viewport meta tag render emails at a desktop-width viewport (~980px) and
// scale it down, forcing pinch-zoom. The fluid table + media query below
// keep the layout — and the two-column detail table specifically — usable
// down to narrow phone widths.
function shell(title: string, bodyHtml: string): string {
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
<body style="margin:0;padding:0;background:#f3ede3;font-family:Arial,Helvetica,sans-serif">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f3ede3;padding:24px 0">
    <tr>
      <td align="center">
        <table role="presentation" class="email-container" width="600" cellpadding="0" cellspacing="0" style="width:600px;max-width:600px;margin:0 auto;background:#ffffff;border-radius:14px;overflow:hidden;border:1px solid #e7e2d8">
          <tr>
            <td style="background:#0b1726;padding:20px 24px" align="center">
              <img src="${esc(siteConfig.url)}/images/logo-email.png" width="210" height="37" alt="${esc(
                siteConfig.shortName
              )}" style="display:block;width:210px;height:37px" />
            </td>
          </tr>
          <tr>
            <td class="email-padding" style="padding:24px">
              <h1 style="margin:0 0 12px;font-size:20px;color:#0b1726">${esc(title)}</h1>
              ${bodyHtml}
            </td>
          </tr>
          <tr>
            <td style="padding:16px 24px;background:#f3ede3;color:#777;font-size:12px">
              ${esc(siteConfig.name)} · Taxi &amp; transfer service across Saudi Arabia
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export function adminLeadEmail(lead: Lead): { subject: string; html: string } {
  const submitted = new Date(lead.createdAt).toLocaleString("en-GB");
  const html = shell(
    "New Taxi Lead Received",
    `<p style="color:#444;margin:0 0 16px">A new quote request was submitted on ${esc(
      submitted
    )}.</p>
     <table class="detail-table" style="width:100%;border-collapse:collapse;font-size:14px">${detailRows(lead)}</table>`
  );
  return { subject: "New Taxi Lead Received", html };
}

export function clientLeadEmail(lead: Lead): { subject: string; html: string } {
  const html = shell(
    "We Received Your Taxi Quote Request",
    `<p style="color:#444;margin:0 0 16px">Thank you for contacting us. We have received your taxi/transfer request. Our team will review your trip details and contact you shortly with availability and pricing.</p>
     <p style="color:#444;margin:0 0 8px;font-weight:600">Your trip details:</p>
     <table class="detail-table" style="width:100%;border-collapse:collapse;font-size:14px">${detailRows(lead, { includeSource: false })}</table>
     <p style="color:#444;margin:16px 0 0">For the fastest response you can also message us on WhatsApp.</p>`
  );
  return { subject: "We Received Your Taxi Quote Request", html };
}

/** Custom email composed by an admin from the CRM. */
export function customClientEmail(subject: string, message: string): string {
  const body = esc(message).replace(/\n/g, "<br/>");
  return shell(subject, `<div style="color:#333;font-size:14px;line-height:1.6">${body}</div>`);
}

export function invoiceReadyEmail(
  invoice: Invoice,
  viewUrl: string
): { subject: string; html: string } {
  const subject = `Your Invoice ${invoice.invoiceNumber} — ${siteConfig.name}`;
  const html = shell(
    "Your Invoice Is Ready",
    `<p style="color:#444;margin:0 0 16px">
       Please find your invoice <strong>${esc(invoice.invoiceNumber)}</strong> for
       ${esc(invoice.totalAmount.toFixed(2))} ${esc(invoice.currency)} below. Click the
       button to view the full invoice online — no login required.
     </p>
     <div style="text-align:center;margin:24px 0">
       <a href="${esc(viewUrl)}"
          style="display:inline-block;background:#c8a96b;color:#0b1726;font-weight:700;
                 padding:12px 28px;border-radius:9999px;text-decoration:none">
         View Invoice
       </a>
     </div>
     <p style="color:#777;font-size:12px;margin:16px 0 0">
       Or copy this link: ${esc(viewUrl)}
     </p>`
  );
  return { subject, html };
}

export function quotationReadyEmail(
  quotation: Quotation,
  viewUrl: string
): { subject: string; html: string } {
  const waUrl = whatsappLink(
    `Hi, I am reaching out regarding Quotation ${quotation.quoteNumber} (${quotation.totalAmount.toFixed(2)} ${quotation.currency}).`
  );

  const subject = `Your Quotation ${quotation.quoteNumber} — ${siteConfig.name}`;
  const clientGreeting = quotation.clientName ? esc(quotation.clientName) : "Valued Customer";

  const routeSummary =
    quotation.pickupLocation && quotation.dropoffLocation
      ? `${esc(quotation.pickupLocation)} &rarr; ${esc(quotation.dropoffLocation)}`
      : quotation.pickupLocation
      ? `Pickup: ${esc(quotation.pickupLocation)}`
      : null;

  const dateSummary =
    quotation.date && quotation.time
      ? `${esc(quotation.date)} at ${esc(quotation.time)}`
      : quotation.date
      ? esc(quotation.date)
      : null;

  const vehicleSummary =
    quotation.lineItems.find((li) => li.vehicleType)?.vehicleType ?? quotation.serviceType ?? null;

  const html = shell(
    "Your Quotation Is Ready",
    `<p style="color:#222;font-size:15px;margin:0 0 16px">
       Dear <strong>${clientGreeting}</strong>,
     </p>
     <p style="color:#444;font-size:14px;line-height:1.6;margin:0 0 20px">
       Thank you for your interest in <strong>${esc(siteConfig.name)}</strong>. We have prepared a customized private transfer quotation for your journey. Please find the summary below:
     </p>

     <div style="background:#f8fafc;border:1px solid #e2e8f0;border-left:4px solid #c8a96b;border-radius:8px;padding:18px 20px;margin:0 0 24px;font-size:14px">
       <div style="display:flex;justify-content:space-between;margin-bottom:10px;padding-bottom:10px;border-bottom:1px solid #e2e8f0">
         <span style="color:#64748b">Quotation Number:</span>
         <strong style="color:#0f172a">${esc(quotation.quoteNumber)}</strong>
       </div>
       <div style="display:flex;justify-content:space-between;margin-bottom:10px;padding-bottom:10px;border-bottom:1px solid #e2e8f0">
         <span style="color:#64748b">Total Amount:</span>
         <strong style="color:#0f172a;font-size:16px;color:#16a34a">${esc(quotation.totalAmount.toFixed(2))} ${esc(quotation.currency)}</strong>
       </div>
       ${
         routeSummary
           ? `<div style="margin-bottom:8px">
                <span style="color:#64748b;display:block;font-size:12px;margin-bottom:2px">Transfer Route:</span>
                <strong style="color:#0f172a">${routeSummary}</strong>
              </div>`
           : ""
       }
       ${
         dateSummary
           ? `<div style="margin-bottom:8px">
                <span style="color:#64748b;display:block;font-size:12px;margin-bottom:2px">Scheduled Date &amp; Time:</span>
                <strong style="color:#0f172a">${dateSummary}</strong>
              </div>`
           : ""
       }
       ${
         vehicleSummary
           ? `<div>
                <span style="color:#64748b;display:block;font-size:12px;margin-bottom:2px">Vehicle / Service:</span>
                <strong style="color:#0f172a">${esc(vehicleSummary)}</strong>
              </div>`
           : ""
       }
     </div>

     <p style="color:#444;font-size:14px;line-height:1.6;margin:0 0 16px;text-align:center">
       Click the button below to view your full quotation details, download your official PDF quote, and accept or decline your booking online:
     </p>

     <div style="text-align:center;margin:24px 0">
       <a href="${esc(viewUrl)}"
          style="display:inline-block;background:#c8a96b;color:#0b1726;font-weight:700;font-size:15px;
                 padding:14px 34px;border-radius:8px;text-decoration:none;box-shadow:0 2px 4px rgba(0,0,0,0.1)">
         Review &amp; Accept Quotation &rarr;
       </a>
     </div>

     <p style="color:#64748b;font-size:12px;text-align:center;margin:0 0 20px;line-height:1.5">
       No login required. You can review all inclusions, vehicle details, and respond directly online.
     </p>

     <div style="border-top:1px solid #e2e8f0;margin:24px 0 16px;padding-top:16px;text-align:center">
       <p style="color:#444;font-size:13px;margin:0 0 10px">
         Have questions or need modifications to your trip?
       </p>
       <a href="${esc(waUrl)}"
          style="display:inline-block;background:#25d366;color:#ffffff;font-weight:600;font-size:13px;
                 padding:9px 20px;border-radius:6px;text-decoration:none">
         Chat with us on WhatsApp
       </a>
     </div>

     <p style="color:#94a3b8;font-size:11px;margin:16px 0 0;text-align:center;word-break:break-all">
       Direct link: <a href="${esc(viewUrl)}" style="color:#94a3b8;text-decoration:underline">${esc(viewUrl)}</a>
     </p>`
  );
  return { subject, html };
}

export function quotationAcceptedClientEmail(
  quotation: Quotation
): { subject: string; html: string } {
  const subject = `Quotation ${quotation.quoteNumber} Accepted — ${siteConfig.name}`;
  const waUrl = whatsappLink(
    `Hi, I accepted Quotation ${quotation.quoteNumber}. Can you update me on the next steps?`
  );
  const html = shell(
    "Quotation Accepted",
    `<p style="color:#444;margin:0 0 16px">
       Thank you for accepting Quotation <strong>${esc(quotation.quoteNumber)}</strong>.
     </p>
     <p style="color:#444;margin:0 0 16px;line-height:1.6">
       We have received your acceptance! Our team is reviewing your trip details and we will let you know regarding the next steps for your booking shortly.
     </p>
     <div style="background:#f9fafb;border:1px solid #e5e7eb;border-radius:8px;padding:16px;margin:20px 0;font-size:14px">
       <p style="margin:0 0 8px;font-weight:700;color:#111">Summary of Accepted Quotation:</p>
       <p style="margin:4px 0;color:#555"><strong>Quote #:</strong> ${esc(quotation.quoteNumber)}</p>
       <p style="margin:4px 0;color:#555"><strong>Total Amount:</strong> ${esc(quotation.totalAmount.toFixed(2))} ${esc(quotation.currency)}</p>
       ${quotation.pickupLocation ? `<p style="margin:4px 0;color:#555"><strong>Pickup:</strong> ${esc(quotation.pickupLocation)}</p>` : ""}
       ${quotation.dropoffLocation ? `<p style="margin:4px 0;color:#555"><strong>Drop-off:</strong> ${esc(quotation.dropoffLocation)}</p>` : ""}
       ${quotation.date ? `<p style="margin:4px 0;color:#555"><strong>Date:</strong> ${esc(quotation.date)}</p>` : ""}
       ${quotation.time ? `<p style="margin:4px 0;color:#555"><strong>Time:</strong> ${esc(quotation.time)}</p>` : ""}
     </div>
     <p style="color:#444;margin:16px 0">
       If you have any urgent questions, feel free to reach out to us directly on WhatsApp:
     </p>
     <div style="text-align:center;margin:20px 0">
       <a href="${esc(waUrl)}"
          style="display:inline-block;background:#25d366;color:#ffffff;font-weight:700;
                 padding:12px 28px;border-radius:9999px;text-decoration:none">
         Chat on WhatsApp
       </a>
     </div>`
  );
  return { subject, html };
}

export function quotationAcceptedAdminEmail(
  quotation: Quotation
): { subject: string; html: string } {
  const subject = `Client Accepted Quotation ${quotation.quoteNumber}`;
  const html = shell(
    "Client Accepted Quotation",
    `<p style="color:#444;margin:0 0 16px">
       Great news! The client has accepted Quotation <strong>${esc(quotation.quoteNumber)}</strong>.
     </p>
     <div style="background:#f9fafb;border:1px solid #e5e7eb;border-radius:8px;padding:16px;margin:20px 0;font-size:14px">
       <p style="margin:4px 0;color:#555"><strong>Client Name:</strong> ${esc(quotation.clientName || "—")}</p>
       <p style="margin:4px 0;color:#555"><strong>Client Email:</strong> ${esc(quotation.clientEmail || "—")}</p>
       <p style="margin:4px 0;color:#555"><strong>Client Phone:</strong> ${esc(quotation.clientPhone || "—")}</p>
       <p style="margin:4px 0;color:#555"><strong>Quote #:</strong> ${esc(quotation.quoteNumber)}</p>
       <p style="margin:4px 0;color:#555"><strong>Total Amount:</strong> ${esc(quotation.totalAmount.toFixed(2))} ${esc(quotation.currency)}</p>
       ${quotation.pickupLocation ? `<p style="margin:4px 0;color:#555"><strong>Pickup:</strong> ${esc(quotation.pickupLocation)}</p>` : ""}
       ${quotation.dropoffLocation ? `<p style="margin:4px 0;color:#555"><strong>Drop-off:</strong> ${esc(quotation.dropoffLocation)}</p>` : ""}
       ${quotation.date ? `<p style="margin:4px 0;color:#555"><strong>Date:</strong> ${esc(quotation.date)}</p>` : ""}
       ${quotation.time ? `<p style="margin:4px 0;color:#555"><strong>Time:</strong> ${esc(quotation.time)}</p>` : ""}
     </div>
     <p style="color:#444;margin:16px 0">
       Please check the admin dashboard to proceed with booking confirmation and vehicle assignment.
     </p>`
  );
  return { subject, html };
}

export function quotationDeclinedAdminEmail(
  quotation: Quotation
): { subject: string; html: string } {
  const subject = `Client Declined Quotation ${quotation.quoteNumber}`;
  const html = shell(
    "Quotation Declined",
    `<p style="color:#444;margin:0 0 16px">
       The client has declined Quotation <strong>${esc(quotation.quoteNumber)}</strong>.
     </p>
     <div style="background:#f9fafb;border:1px solid #e5e7eb;border-radius:8px;padding:16px;margin:20px 0;font-size:14px">
       <p style="margin:4px 0;color:#555"><strong>Client Name:</strong> ${esc(quotation.clientName || "—")}</p>
       <p style="margin:4px 0;color:#555"><strong>Client Email:</strong> ${esc(quotation.clientEmail || "—")}</p>
       <p style="margin:4px 0;color:#555"><strong>Quote #:</strong> ${esc(quotation.quoteNumber)}</p>
       <p style="margin:4px 0;color:#555"><strong>Total Amount:</strong> ${esc(quotation.totalAmount.toFixed(2))} ${esc(quotation.currency)}</p>
     </div>`
  );
  return { subject, html };
}

/**
 * Sent manually by the admin once a booking is confirmed (e.g. the client
 * already confirmed over WhatsApp) — a written, branded record of exactly
 * what was booked, separate from the WhatsApp conversation itself.
 *
 * Bespoke layout (not the shared `shell()`) so it can match the richer,
 * card-based confirmation design: badge + reference, a bordered detail
 * card, a numbered "what happens next" list, and a help box.
 */
export function bookingConfirmationEmail(
  quotation: Quotation
): { subject: string; html: string } {
  const reference = quotation.bookingReference || quotation.quoteNumber;
  const matchedLine = quotation.lineItems.find((li) => li.vehicleType) ?? null;
  const vehicle = matchedLine?.vehicleType ?? null;
  const passengers = matchedLine?.passengers ?? null;

  const dateTime =
    quotation.date && quotation.time
      ? `${quotation.date} · ${quotation.time}`
      : quotation.date || quotation.time || null;

  const detailFields: [string, string | null][] = [
    ["Pickup", quotation.pickupLocation],
    ["Drop-off", quotation.dropoffLocation],
    ["Date & time", dateTime],
    ["Vehicle", vehicle],
    ["Passengers", passengers],
    ["Flight number", quotation.flightNumber],
  ];

  const detailCardRows = detailFields
    .filter(([, v]) => v)
    .map(
      ([label, value]) => `
       <div style="border-left:3px solid #c8a96b;padding:0 0 0 14px;margin-bottom:16px">
         <p style="margin:0;font-size:11px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;color:#8a929c">${esc(
           label
         )}</p>
         <p style="margin:2px 0 0;font-size:15px;font-weight:700;color:#17202b">${esc(value)}</p>
       </div>`
    )
    .join("");

  const whatsappUrl = whatsappLink(`Hi, I have a question about my booking ${reference}.`);
  const greeting = quotation.clientName ? `, ${esc(quotation.clientName)}` : "";

  const steps: [string, string][] = [
    ["Driver Assignment", "Your professional driver is assigned ahead of your journey."],
    [
      "Driver Details",
      "We'll message you on WhatsApp with your driver's name and contact number before pickup.",
    ],
    [
      "Enjoy Your Journey",
      "Your driver will be waiting at the agreed pickup location, ready when you are.",
    ],
  ];
  const stepsHtml = steps
    .map(
      ([title, body], i) => `
       <table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;margin-bottom:16px">
         <tr>
           <td style="width:32px;vertical-align:top">
             <span style="display:inline-block;width:24px;height:24px;line-height:24px;text-align:center;border-radius:50%;background:#0b1726;color:#ffffff;font-weight:700;font-size:12px">${
               i + 1
             }</span>
           </td>
           <td style="vertical-align:top">
             <p style="margin:0;font-size:14px;font-weight:700;color:#17202b">${esc(title)}</p>
             <p style="margin:2px 0 0;font-size:13px;color:#5f6873;line-height:1.5">${esc(body)}</p>
           </td>
         </tr>
       </table>`
    )
    .join("");

  const subject = `Booking Confirmed — ${reference} — ${siteConfig.name}`;
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>${esc(subject)}</title>
<style>
  @media only screen and (max-width: 600px) {
    .email-container { width: 100% !important; border-radius: 0 !important; }
    .email-padding { padding: 20px !important; }
  }
</style>
</head>
<body style="margin:0;padding:0;background:#f3ede3;font-family:Arial,Helvetica,sans-serif">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f3ede3;padding:24px 0">
    <tr>
      <td align="center">
        <table role="presentation" class="email-container" width="600" cellpadding="0" cellspacing="0" style="width:600px;max-width:600px;margin:0 auto;background:#ffffff;border-radius:14px;overflow:hidden;border:1px solid #e7e2d8">

          <!-- Header -->
          <tr>
            <td class="email-padding" style="background:#0b1726;padding:32px 24px;text-align:center">
              <img src="${esc(siteConfig.url)}/images/logo-email.png" width="230" height="40" alt="${esc(
                siteConfig.shortName
              )}" style="display:block;width:230px;height:40px;margin:0 auto 20px" />
              <span style="display:inline-block;background:#c8a96b;color:#0b1726;font-weight:700;font-size:11px;letter-spacing:0.06em;text-transform:uppercase;padding:6px 16px;border-radius:9999px">
                &#10003; Booking Confirmed
              </span>
              <h1 style="margin:16px 0 8px;font-size:24px;color:#ffffff">Your Transfer Is Confirmed</h1>
              <p style="margin:0;font-size:14px;color:rgba(255,255,255,0.7);line-height:1.5">
                Thank you for choosing ${esc(siteConfig.name)}${greeting}. Your transfer has been successfully confirmed.
              </p>
            </td>
          </tr>

          <!-- Reference -->
          <tr>
            <td style="padding:24px 24px 0;text-align:center">
              <p style="margin:0;font-size:11px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;color:#8a929c">Booking Reference</p>
              <p style="margin:4px 0 0;font-size:18px;font-weight:800;color:#17202b;letter-spacing:0.03em">${esc(
                reference
              )}</p>
            </td>
          </tr>

          <!-- Detail card -->
          <tr>
            <td class="email-padding" style="padding:24px">
              <div style="border:1px solid #e7e2d8;border-radius:12px;padding:20px 20px 4px">
                ${detailCardRows}
              </div>
            </td>
          </tr>

          <!-- What happens next -->
          <tr>
            <td class="email-padding" style="padding:0 24px 24px">
              <p style="margin:0 0 14px;font-size:11px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;color:#8a929c">What Happens Next?</p>
              ${stepsHtml}
            </td>
          </tr>

          <!-- Need help -->
          <tr>
            <td class="email-padding" style="padding:0 24px 24px">
              <div style="background:#f3ede3;border-radius:12px;padding:18px 20px">
                <p style="margin:0 0 10px;font-size:14px;font-weight:700;color:#17202b">Need Help?</p>
                <p style="margin:0;font-size:11px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;color:#8a929c">Email</p>
                <p style="margin:2px 0 12px;font-size:14px;font-weight:700;color:#17202b">${esc(siteConfig.email)}</p>
                <a href="${esc(whatsappUrl)}"
                   style="display:inline-block;background:#25d366;color:#ffffff;font-weight:700;font-size:13px;
                          padding:10px 22px;border-radius:9999px;text-decoration:none">
                  Chat on WhatsApp
                </a>
                <p style="margin:12px 0 0;font-size:12px;color:#8a929c">Available 24/7 for assistance with your journey.</p>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#0b1726;padding:24px;text-align:center">
              <p style="margin:0 0 2px;font-size:14px;font-weight:700;color:#ffffff">${esc(siteConfig.name)}</p>
              <p style="margin:0 0 12px;font-size:12px;color:rgba(255,255,255,0.55)">Private Transfers Across Saudi Arabia</p>
              <p style="margin:0;font-size:12px">
                <a href="${esc(siteConfig.url)}" style="color:#c8a96b;text-decoration:none">Website</a>
                <span style="color:rgba(255,255,255,0.3)">&nbsp;&middot;&nbsp;</span>
                <a href="${esc(siteConfig.url)}/contact" style="color:#c8a96b;text-decoration:none">Contact Us</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
  return { subject, html };
}
