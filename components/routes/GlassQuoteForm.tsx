"use client";

import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";

const passengerOptions = ["1", "2", "3", "4", "5", "6", "7+"];
const field =
  "mt-1.5 h-11 w-full rounded-lg border border-white/15 bg-white/[0.07] px-3 text-sm text-white placeholder:text-white/40 outline-none transition focus:border-brass focus:bg-white/[0.12] focus:ring-2 focus:ring-brass/30 [color-scheme:dark]";
const label = "text-[11px] font-semibold uppercase tracking-[0.14em] text-white/60";

/**
 * Compact dark "glass" quick form for a dark hero. Same hand-off as
 * HomeBookingPanel / RouteQuoteBar: opens /get-quote prefilled, where the full
 * QuoteForm submits to /api/leads.
 */
export function GlassQuoteForm({
  defaultPickup,
  defaultDropoff,
  dropoffPlaceholder,
  title,
}: {
  defaultPickup: string;
  defaultDropoff: string;
  dropoffPlaceholder: string;
  title: string;
}) {
  const router = useRouter();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const params = new URLSearchParams();
    for (const key of ["pickup", "dropoff", "date", "time", "passengers"]) {
      const value = (data.get(key) as string | null)?.trim();
      if (value) params.set(key, value);
    }
    router.push(`/get-quote?${params.toString()}`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      aria-label="Quick quote form"
      className="rounded-2xl border border-white/15 bg-white/[0.04] p-5 backdrop-blur-md sm:p-6"
    >
      <p className="text-sm font-bold text-white">{title}</p>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <div>
          <label htmlFor="gq-pickup" className={label}>Pickup</label>
          <input id="gq-pickup" name="pickup" required defaultValue={defaultPickup} placeholder="Address or hotel" className={field} />
        </div>
        <div>
          <label htmlFor="gq-dropoff" className={label}>Drop-off</label>
          <input id="gq-dropoff" name="dropoff" required defaultValue={defaultDropoff} placeholder={dropoffPlaceholder} className={field} />
        </div>
        <div>
          <label htmlFor="gq-date" className={label}>Date</label>
          <input id="gq-date" name="date" type="date" required className={field} />
        </div>
        <div className="grid grid-cols-[1fr_auto] gap-3">
          <div>
            <label htmlFor="gq-time" className={label}>Time</label>
            <input id="gq-time" name="time" type="time" required className={field} />
          </div>
          <div>
            <label htmlFor="gq-passengers" className={label}>Pax</label>
            <select id="gq-passengers" name="passengers" defaultValue="2" className={`${field} w-20`} aria-label="Passengers">
              {passengerOptions.map((p) => (
                <option key={p} value={p} className="text-ink">{p}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <button
        type="submit"
        className="mt-4 flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-brass text-sm font-bold text-midnight transition-colors hover:bg-brass-soft"
      >
        Get my quote
        <ArrowRight className="size-4 rtl:rotate-180" />
      </button>
    </form>
  );
}
