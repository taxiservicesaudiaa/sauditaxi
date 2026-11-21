"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, Building, Plane } from "lucide-react";

const passengerOptions = ["1", "2", "3", "4", "5", "6", "7+"];
const field =
  "mt-1.5 h-11 w-full rounded-lg border border-hairline bg-white px-3 text-sm text-ink placeholder:text-ink-muted outline-none transition focus:border-brass focus:ring-2 focus:ring-brass/30";
const label = "text-xs font-semibold text-ink-soft";

/**
 * Quick quote with two destination modes: a city address, or an airport.
 * The airport tab prefills the drop-off and asks for the pickup time with a
 * reminder to share the flight time on the next step. Hands off to
 * /get-quote prefilled; the full QuoteForm there submits to /api/leads.
 */
export function TabbedQuoteForm({
  defaultPickup,
  cityTab,
  airportTab,
}: {
  defaultPickup: string;
  cityTab: { label: string; dropoff: string; placeholder: string };
  airportTab: { label: string; dropoff: string; hint: string };
}) {
  const router = useRouter();
  const [mode, setMode] = useState<"city" | "airport">("city");
  const airport = mode === "airport";

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

  const tabCls = (active: boolean) =>
    `flex flex-1 items-center justify-center gap-2 rounded-lg px-3 py-2.5 text-sm font-semibold transition-colors ${
      active ? "bg-midnight text-white shadow" : "text-ink-soft hover:text-ink"
    }`;

  return (
    <div className="rounded-2xl bg-white p-4 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)] sm:p-6">
      <div role="tablist" aria-label="Where are you going in Riyadh?" className="flex gap-1 rounded-xl bg-sand/60 p-1">
        <button type="button" role="tab" aria-selected={!airport} onClick={() => setMode("city")} className={tabCls(!airport)}>
          <Building className="size-4" aria-hidden="true" />
          {cityTab.label}
        </button>
        <button type="button" role="tab" aria-selected={airport} onClick={() => setMode("airport")} className={tabCls(airport)}>
          <Plane className="size-4" aria-hidden="true" />
          {airportTab.label}
        </button>
      </div>

      <form onSubmit={handleSubmit} aria-label="Quick quote form" className="mt-5 space-y-3">
        <div>
          <label htmlFor="tq-pickup" className={label}>Pickup in Jubail</label>
          <input id="tq-pickup" name="pickup" required defaultValue={defaultPickup} placeholder="Compound, hotel, office or gate" className={field} />
        </div>
        <div>
          <label htmlFor="tq-dropoff" className={label}>{airport ? "Airport" : "Drop-off in Riyadh"}</label>
          <input
            key={mode}
            id="tq-dropoff"
            name="dropoff"
            required
            defaultValue={airport ? airportTab.dropoff : cityTab.dropoff}
            placeholder={cityTab.placeholder}
            className={field}
          />
        </div>
        <div className="grid grid-cols-[1.3fr_1fr_0.8fr] gap-3">
          <div>
            <label htmlFor="tq-date" className={label}>Date</label>
            <input id="tq-date" name="date" type="date" required className={field} />
          </div>
          <div>
            <label htmlFor="tq-time" className={label}>{airport ? "Pickup time" : "Time"}</label>
            <input id="tq-time" name="time" type="time" required className={field} />
          </div>
          <div>
            <label htmlFor="tq-passengers" className={label}>People</label>
            <select id="tq-passengers" name="passengers" defaultValue="2" className={field}>
              {passengerOptions.map((p) => (
                <option key={p} value={p}>{p}</option>
              ))}
            </select>
          </div>
        </div>
        {airport && <p className="rounded-lg bg-brass/10 px-3 py-2 text-xs leading-relaxed text-ink-soft">{airportTab.hint}</p>}
        <button type="submit" className="flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-brass text-sm font-bold text-midnight transition-colors hover:bg-brass-soft">
          Get a quote
          <ArrowRight className="size-4 rtl:rotate-180" />
        </button>
      </form>
    </div>
  );
}
