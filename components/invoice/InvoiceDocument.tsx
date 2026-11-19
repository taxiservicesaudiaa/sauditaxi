import Image from "next/image";
import { forwardRef } from "react";
import type { Invoice, PaymentStatus } from "@/lib/invoices";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

function formatDate(value: string | null): string {
  if (!value) return "—";
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return value;
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

function formatAmount(amount: number, currency: string): string {
  return `${amount.toFixed(2)} ${currency}`;
}

const stampStyles: Record<PaymentStatus, string> = {
  Paid: "border-green-600 text-green-700",
  "Partially Paid": "border-amber-500 text-amber-700",
  Unpaid: "border-neutral-400 text-ink-muted",
};

function Stamp({ status }: { status: PaymentStatus }) {
  return (
    <div
      className={cn(
        "flex size-28 shrink-0 -rotate-12 flex-col items-center justify-center rounded-full border-4 text-center leading-tight print:size-20",
        stampStyles[status]
      )}
    >
      <span className="text-sm font-extrabold uppercase tracking-wide print:text-xs">
        {status === "Partially Paid" ? "Partial" : status}
      </span>
      <span className="mt-1 text-[9px] font-semibold uppercase tracking-wider">
        {siteConfig.shortName}
      </span>
    </div>
  );
}

export const InvoiceDocument = forwardRef<HTMLDivElement, { invoice: Invoice }>(
  function InvoiceDocument({ invoice }, ref) {
  return (
    <div
      ref={ref}
      className="invoice-print-page overflow-hidden rounded-2xl border border-hairline bg-white text-ink shadow-sm print:rounded-none print:border-0 print:shadow-none"
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
          <p className="text-2xl font-extrabold tracking-wide text-brass sm:text-3xl print:text-xl">INVOICE</p>
          <p className="mt-1 text-sm text-white/80 print:text-xs">Invoice #: {invoice.invoiceNumber}</p>
          <p className="text-sm text-white/80 print:text-xs">Date: {formatDate(invoice.invoiceDate)}</p>
        </div>
      </div>

      {/* Bill to / Trip details */}
      <div className="grid gap-6 px-6 py-6 sm:grid-cols-2 sm:px-8 sm:py-8 print:gap-4 print:px-6 print:py-3">
        <div>
          <h2 className="text-xs font-bold uppercase tracking-wide text-ink-muted">Bill To</h2>
          <p className="mt-2 text-sm text-ink print:mt-1 print:text-xs">Name: {invoice.clientName || "—"}</p>
          <p className="text-sm text-ink print:text-xs">Phone / WhatsApp: {invoice.clientPhone || "—"}</p>
        </div>
        <div>
          <h2 className="text-xs font-bold uppercase tracking-wide text-ink-muted">Trip Details</h2>
          <p className="mt-2 text-sm text-ink print:mt-1 print:text-xs">Service: {invoice.serviceType || "—"}</p>
          <p className="text-sm text-ink print:text-xs">Pickup: {invoice.pickupLocation || "—"}</p>
          <p className="text-sm text-ink print:text-xs">Drop-off: {invoice.dropoffLocation || "—"}</p>
          <p className="text-sm text-ink print:text-xs">Date: {invoice.date || "—"}</p>
          <p className="text-sm text-ink print:text-xs">Time: {invoice.time || "—"}</p>
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
            {invoice.lineItems.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-4 py-6 text-center text-ink-muted">
                  No line items.
                </td>
              </tr>
            ) : (
              invoice.lineItems.map((item, i) => (
                <tr key={i} className="border-b border-hairline last:border-0">
                  <td className="px-4 py-3 print:break-words print:px-2 print:py-1.5 text-ink">{item.description}</td>
                  <td className="px-4 py-3 print:break-words print:px-2 print:py-1.5 text-ink-soft">{item.vehicleType || "—"}</td>
                  <td className="px-4 py-3 print:px-2 print:py-1.5 text-ink-soft">{item.passengers || "—"}</td>
                  <td className="px-4 py-3 print:px-2 print:py-1.5 text-ink-soft">{item.luggage || "—"}</td>
                  <td className="px-4 py-3 print:px-2 print:py-1.5 text-right font-medium text-ink">
                    {formatAmount(item.amount, invoice.currency)}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Stamp + totals */}
      <div className="flex flex-wrap items-center justify-between gap-6 px-6 py-8 sm:px-8 print:gap-4 print:px-6 print:py-3">
        <Stamp status={invoice.paymentStatus} />
        <div className="text-right">
          <p className="text-sm text-ink-muted print:text-xs">
            Total Amount:{" "}
            <span className="text-lg font-bold text-ink print:text-base">
              {formatAmount(invoice.totalAmount, invoice.currency)}
            </span>
          </p>
          <p className="mt-1 text-sm text-ink-muted print:mt-0.5 print:text-xs">
            Payment Status: <span className="font-semibold text-ink">{invoice.paymentStatus}</span>
          </p>
        </div>
      </div>

      {invoice.notes && (
        <div className="border-t border-hairline px-6 py-6 sm:px-8 print:px-6 print:py-3">
          <h2 className="text-xs font-bold uppercase tracking-wide text-ink-muted">Notes</h2>
          <p className="mt-2 whitespace-pre-line text-sm text-ink-soft print:mt-1 print:text-xs">{invoice.notes}</p>
        </div>
      )}

      {/* Footer */}
      <div className="border-t-2 border-brass px-6 py-5 text-center text-xs text-ink-muted sm:px-8 print:px-6 print:py-3">
        <p>Thank you for choosing {siteConfig.name}</p>
        <p>{siteConfig.bookingEmail}</p>
      </div>
    </div>
  );
});
