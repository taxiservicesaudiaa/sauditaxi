import Image from "next/image";
import { forwardRef } from "react";
import { Check } from "lucide-react";
import type { Quotation } from "@/lib/quotations";
import { siteConfig } from "@/lib/site";
import { FacebookIcon, InstagramIcon, PinterestIcon, RedditIcon } from "@/components/icons/SocialIcons";

function formatDate(value: string | null): string {
  if (!value) return "—";
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return value;
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

function formatAmount(amount: number, currency: string): string {
  return `${amount.toFixed(2)} ${currency}`;
}

const INCLUDED_SERVICES = [
  "Free waiting time",
  "Meet & greet service",
  "Professional chauffeur",
  "Private transfer — no ride-sharing",
];

export const QuotationDocument = forwardRef<HTMLDivElement, { quotation: Quotation }>(
  function QuotationDocument({ quotation }, ref) {
  const year = new Date().getFullYear();

  return (
    <div
      ref={ref}
      className="quotation-print-page overflow-hidden rounded-2xl border border-hairline bg-white text-ink shadow-sm print:rounded-none print:border-0 print:shadow-none"
    >
      {/* Header */}
      <div className="flex flex-wrap items-start justify-between gap-6 bg-midnight px-6 py-6 sm:px-8 sm:py-8 print:gap-3 print:px-6 print:py-4">
        <div className="flex flex-col gap-2 print:gap-1">
          <h1 className="sr-only">{siteConfig.name}</h1>
          <Image
            src="/images/logo.webp"
            alt={`${siteConfig.name} logo`}
            width={798}
            height={139}
            className="h-9 w-auto sm:h-10 print:h-7"
          />
          <div>
            <p className="text-sm text-white/70 print:text-xs">Private Taxi &amp; Transfer Services</p>
            <p className="text-sm text-white/70 print:text-xs">{siteConfig.bookingEmail}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-2xl font-extrabold tracking-wide text-brass sm:text-3xl print:text-xl">QUOTATION</p>
          <p className="mt-1 text-sm text-white/80 print:text-xs">Quote #: {quotation.quoteNumber}</p>
          <p className="text-sm text-white/80 print:text-xs">Date Issued: {formatDate(quotation.quoteDate)}</p>
          <p className="text-sm text-white/80 print:text-xs">Valid Until: {formatDate(quotation.validUntil)}</p>
        </div>
      </div>

      {/* Prepared for / Journey details */}
      <div className="grid gap-6 px-6 py-6 sm:grid-cols-2 sm:px-8 sm:py-8 print:gap-4 print:px-6 print:py-3">
        <div>
          <h2 className="text-xs font-bold uppercase tracking-wide text-ink-muted">Prepared For</h2>
          <p className="mt-2 text-sm text-ink print:mt-1 print:text-xs">Name: {quotation.clientName || "—"}</p>
          <p className="text-sm text-ink print:text-xs">Email: {quotation.clientEmail || "—"}</p>
          <p className="text-sm text-ink print:text-xs">Phone / WhatsApp: {quotation.clientPhone || "—"}</p>
          {quotation.bookingReference && (
            <p className="text-sm text-ink print:text-xs">Booking Reference: {quotation.bookingReference}</p>
          )}
        </div>
        <div>
          <h2 className="text-xs font-bold uppercase tracking-wide text-ink-muted">Journey Details</h2>
          <p className="mt-2 text-sm text-ink print:mt-1 print:text-xs">Service: {quotation.serviceType || "—"}</p>
          <p className="text-sm text-ink print:text-xs">Pickup: {quotation.pickupLocation || "—"}</p>
          <p className="text-sm text-ink print:text-xs">Drop-off: {quotation.dropoffLocation || "—"}</p>
          <p className="text-sm text-ink print:text-xs">Date: {quotation.date || "—"}</p>
          <p className="text-sm text-ink print:text-xs">Time: {quotation.time || "—"}</p>
          {quotation.flightNumber && (
            <p className="text-sm text-ink print:text-xs">Flight Number: {quotation.flightNumber}</p>
          )}
          {quotation.specialRequests && (
            <p className="text-sm text-ink print:text-xs">Special Requests: {quotation.specialRequests}</p>
          )}
        </div>
      </div>

      {/* Line items */}
      <div className="overflow-x-auto px-6 sm:px-8 print:overflow-visible print:px-6">
        <table className="w-full min-w-[640px] text-sm print:min-w-0 print:text-[10px] print:table-fixed">
          <thead>
            <tr className="bg-brass text-left text-xs font-bold uppercase tracking-wide text-midnight">
              <th className="px-4 py-3 print:w-[32%] print:px-2 print:py-1.5">Description</th>
              <th className="px-4 py-3 print:w-[20%] print:px-2 print:py-1.5">Vehicle Type</th>
              <th className="px-4 py-3 print:w-[16%] print:px-2 print:py-1.5">Passengers</th>
              <th className="px-4 py-3 print:w-[16%] print:px-2 print:py-1.5">Luggage</th>
              <th className="px-4 py-3 print:w-[16%] print:px-2 print:py-1.5 text-right">Amount</th>
            </tr>
          </thead>
          <tbody>
            {quotation.lineItems.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-4 py-6 text-center text-ink-muted">
                  No line items.
                </td>
              </tr>
            ) : (
              quotation.lineItems.map((item, i) => (
                <tr key={i} className="border-b border-hairline last:border-0">
                  <td className="px-4 py-3 print:break-words print:px-2 print:py-1.5 text-ink">{item.description}</td>
                  <td className="px-4 py-3 print:break-words print:px-2 print:py-1.5 text-ink-soft">{item.vehicleType || "—"}</td>
                  <td className="px-4 py-3 print:px-2 print:py-1.5 text-ink-soft">{item.passengers || "—"}</td>
                  <td className="px-4 py-3 print:px-2 print:py-1.5 text-ink-soft">{item.luggage || "—"}</td>
                  <td className="px-4 py-3 print:px-2 print:py-1.5 text-right font-medium text-ink">
                    {formatAmount(item.amount, quotation.currency)}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Total */}
      <div className="flex flex-wrap items-center justify-end gap-6 px-6 py-8 sm:px-8 print:py-3 print:px-6">
        <div className="text-right">
          <p className="text-sm text-ink-muted print:text-xs">
            Total Amount:{" "}
            <span className="text-lg font-bold text-ink print:text-base">
              {formatAmount(quotation.totalAmount, quotation.currency)}
            </span>
          </p>
          <p className="mt-1 text-xs text-ink-muted print:mt-0.5">
            Quote valid until {formatDate(quotation.validUntil)} — pricing may change after this date.
          </p>
        </div>
      </div>

      {/* What's included */}
      <div className="border-t border-hairline px-6 py-6 sm:px-8 print:px-6 print:py-3">
        <h2 className="text-xs font-bold uppercase tracking-wide text-ink-muted">What&apos;s Included</h2>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2 print:mt-2 print:gap-1">
          {INCLUDED_SERVICES.map((item) => (
            <li key={item} className="flex items-center gap-2 text-sm text-ink-soft print:text-xs">
              <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-brass/20 text-brass print:size-4">
                <Check className="size-3.5 print:size-3" strokeWidth={3} />
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {(quotation.paymentTerms || quotation.cancellationPolicy || quotation.notes) && (
        <div className="grid gap-6 border-t border-hairline px-6 py-6 sm:grid-cols-2 sm:px-8 print:gap-3 print:px-6 print:py-3">
          {quotation.paymentTerms && (
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wide text-ink-muted">Payment Terms</h2>
              <p className="mt-2 whitespace-pre-line text-sm text-ink-soft print:mt-1 print:text-xs">{quotation.paymentTerms}</p>
            </div>
          )}
          {quotation.cancellationPolicy && (
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wide text-ink-muted">Cancellation Policy</h2>
              <p className="mt-2 whitespace-pre-line text-sm text-ink-soft print:mt-1 print:text-xs">{quotation.cancellationPolicy}</p>
            </div>
          )}
          {quotation.notes && (
            <div className="sm:col-span-2">
              <h2 className="text-xs font-bold uppercase tracking-wide text-ink-muted">Notes</h2>
              <p className="mt-2 whitespace-pre-line text-sm text-ink-soft print:mt-1 print:text-xs">{quotation.notes}</p>
            </div>
          )}
        </div>
      )}

      {/* Call to action */}
      <div className="border-t-2 border-brass bg-sand/30 px-6 py-6 text-center sm:px-8 print:px-6 print:py-3">
        <p className="text-sm font-semibold text-ink print:text-xs">Thank you for choosing {siteConfig.name}.</p>
        <p className="mt-1 text-sm text-ink-soft print:mt-0.5 print:text-xs">
          If you would like to confirm this booking, simply reply to this email or contact us.
          We look forward to serving you.
        </p>
      </div>

      {/* Footer */}
      <div className="flex flex-col items-center gap-3 border-t border-hairline px-6 py-6 text-center text-xs text-ink-muted sm:px-8 print:gap-1.5 print:px-6 print:py-3">
        <Image
          src="/images/logo.webp"
          alt={`${siteConfig.name} logo`}
          width={798}
          height={139}
          className="h-7 w-auto print:h-5"
        />
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 print:text-[10px]">
          <span>{siteConfig.url.replace(/^https?:\/\//, "")}</span>
          <span aria-hidden="true">·</span>
          <span>{siteConfig.bookingEmail}</span>
        </div>
        <div className="flex items-center gap-3 text-ink-muted print:gap-2">
          <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-brass">
            <FacebookIcon className="size-4 print:size-3" />
          </a>
          <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-brass">
            <InstagramIcon className="size-4 print:size-3" />
          </a>
          <a href={siteConfig.social.pinterest} target="_blank" rel="noopener noreferrer" aria-label="Pinterest" className="hover:text-brass">
            <PinterestIcon className="size-4 print:size-3" />
          </a>
          <a href={siteConfig.social.reddit} target="_blank" rel="noopener noreferrer" aria-label="Reddit" className="hover:text-brass">
            <RedditIcon className="size-4 print:size-3" />
          </a>
        </div>
        <p className="print:text-[10px]">© {year} {siteConfig.legalName}. All rights reserved.</p>
      </div>
    </div>
  );
});
