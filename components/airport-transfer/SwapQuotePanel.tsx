"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, ArrowUpDown } from "lucide-react";

const passengerOptions = ["1", "2", "3", "4", "5", "6", "7+"];
const field =
  "mt-1 h-11 w-full rounded-lg border border-hairline bg-white px-3 text-sm text-ink placeholder:text-ink-muted outline-none transition focus:border-brass focus:ring-2 focus:ring-brass/30";
const label = "text-[11px] font-bold uppercase tracking-[0.14em] text-ink-muted";

/**
 * From/To quick quote with a swap button — the same panel serves arrivals
 * (airport → address) and departures (address → airport). Hands off to
 * /get-quote prefilled; the full QuoteForm there submits to /api/leads.
 */
export function SwapQuotePanel({ title, airportLabel, note }: { title: string; airportLabel: string; note: string }) {
  const router = useRouter();
  const [from, setFrom] = useState(airportLabel);
  const [to, setTo] = useState("");
  const toAirport = to === airportLabel;

  function swap() {
    setFrom(to);
    setTo(from);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const params = new URLSearchParams();
    params.set("pickup", from.trim());
    params.set("dropoff", to.trim());
    for (const key of ["date", "time", "passengers"]) {
      const value = (data.get(key) as string | null)?.trim();
      if (value) params.set(key, value);
    }
    router.push(`/get-quote?${params.toString()}`);
  }

  return (
    <form onSubmit={handleSubmit} aria-label="Quick quote form" className="rounded-2xl bg-offwhite p-5 text-ink shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)] sm:p-6">
      <p className="text-lg font-bold">{title}</p>
      <div className="mt-4 space-y-3">
        <div>
          <label htmlFor="sq-from" className={label}>From</label>
          <input id="sq-from" value={from} onChange={(e) => setFrom(e.target.value)} required placeholder="Hotel, home or office" className={field} />
        </div>
        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="sq-to" className={label}>To</label>
            <button
              type="button"
              onClick={swap}
              aria-label="Swap pickup and destination"
              className="inline-flex items-center gap-1.5 rounded-full bg-midnight px-3 py-1 text-xs font-semibold text-white transition hover:bg-midnight-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass/50"
            >
              <ArrowUpDown className="size-3.5 text-brass" aria-hidden="true" />
              Swap
            </button>
          </div>
          <input id="sq-to" value={to} onChange={(e) => setTo(e.target.value)} required placeholder="Hotel, address or city" className={field} />
        </div>
      </div>
      <div className="mt-3 grid grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)_4.5rem] gap-3">
        <div className="min-w-0">
          <label htmlFor="sq-date" className={label}>Date</label>
          <input id="sq-date" name="date" type="date" required className={field} />
        </div>
        <div className="min-w-0">
          <label htmlFor="sq-time" className={label}>{toAirport ? "Pickup" : "Lands"}</label>
          <input id="sq-time" name="time" type="time" required className={field} />
        </div>
        <div>
          <label htmlFor="sq-pax" className={label}>People</label>
          <select id="sq-pax" name="passengers" defaultValue="2" className={field}>
            {passengerOptions.map((p) => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
        </div>
      </div>
      <button type="submit" className="mt-5 flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-midnight text-sm font-bold text-white transition-colors hover:bg-midnight-soft">
        Continue to quotation
        <ArrowRight className="size-4 text-brass rtl:rotate-180" />
      </button>
      <p className="mt-3 text-center text-xs text-ink-muted">{note}</p>
    </form>
  );
}
