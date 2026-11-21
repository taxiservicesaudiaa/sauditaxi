"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, PlaneLanding } from "lucide-react";

const passengerOptions = ["1", "2", "3", "4", "5", "6", "7+"];
const field =
  "mt-1.5 h-11 w-full rounded-lg border border-white/15 bg-white/[0.06] px-3 text-sm text-white placeholder:text-white/40 outline-none transition focus:border-brass focus:ring-2 focus:ring-brass/30 [color-scheme:dark]";
const label = "text-[11px] font-semibold uppercase tracking-[0.14em] text-white/55";

/**
 * Airport-arrival quick form: flight number, arrival date/time, passengers and
 * a destination type. The flight number is carried in the pickup value
 * ("Airport – flight XX123") so it reaches the lead through the existing
 * /get-quote prefill (no CRM or API change). Hands off to /get-quote, where the
 * full QuoteForm submits to /api/leads.
 */
export function ArrivalQuoteCard({
  title,
  airportLabel,
  destinations,
  note,
}: {
  title: string;
  airportLabel: string;
  destinations: { label: string; value: string }[];
  note: string;
}) {
  const router = useRouter();
  const [dest, setDest] = useState(destinations[0]?.value ?? "");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const flight = (data.get("flight") as string | null)?.trim();
    const params = new URLSearchParams();
    params.set("pickup", flight ? `${airportLabel} – flight ${flight}` : airportLabel);
    for (const key of ["dropoff", "date", "time", "passengers"]) {
      const value = (data.get(key) as string | null)?.trim();
      if (value) params.set(key, value);
    }
    router.push(`/get-quote?${params.toString()}`);
  }

  return (
    <form onSubmit={handleSubmit} aria-label="Quick quote form" className="rounded-2xl border border-white/10 bg-midnight-soft p-5 sm:p-6">
      <div className="flex items-center justify-between">
        <p className="flex items-center gap-2 font-bold text-white">
          <PlaneLanding className="size-5 text-brass" aria-hidden="true" />
          {title}
        </p>
        <span className="rounded bg-brass px-2 py-0.5 text-xs font-bold tracking-wider text-midnight">DMM</span>
      </div>

      <div className="mt-5">
        <label htmlFor="aq-flight" className={label}>Flight number</label>
        <input id="aq-flight" name="flight" placeholder="e.g. SV 1234" className={field} autoComplete="off" />
      </div>
      <div className="mt-3 grid grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_4.5rem] gap-3">
        <div className="min-w-0">
          <label htmlFor="aq-date" className={label}>Arrival date</label>
          <input id="aq-date" name="date" type="date" required className={field} />
        </div>
        <div className="min-w-0">
          <label htmlFor="aq-time" className={label}>Lands</label>
          <input id="aq-time" name="time" type="time" required className={field} />
        </div>
        <div>
          <label htmlFor="aq-passengers" className={label}>People</label>
          <select id="aq-passengers" name="passengers" defaultValue="1" className={field}>
            {passengerOptions.map((p) => (
              <option key={p} value={p} className="text-ink">{p}</option>
            ))}
          </select>
        </div>
      </div>

      <fieldset className="mt-4">
        <legend className={label}>Going to</legend>
        <div className="mt-2 flex flex-wrap gap-2">
          {destinations.map((d) => (
            <label
              key={d.label}
              className={`cursor-pointer rounded-full border px-3.5 py-1.5 text-sm transition-colors ${
                dest === d.value ? "border-brass bg-brass text-midnight" : "border-white/20 text-white/85 hover:border-brass"
              }`}
            >
              <input type="radio" name="desttype" value={d.value} checked={dest === d.value} onChange={() => setDest(d.value)} className="sr-only" />
              {d.label}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="mt-3">
        <label htmlFor="aq-dropoff" className={label}>Destination in Abqaiq</label>
        <input id="aq-dropoff" name="dropoff" required value={dest} onChange={(e) => setDest(e.target.value)} className={field} />
      </div>

      <button type="submit" className="mt-5 flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-brass text-sm font-bold text-midnight transition-colors hover:bg-brass-soft">
        Get a quote
        <ArrowRight className="size-4 rtl:rotate-180" />
      </button>
      <p className="mt-3 text-center text-xs text-white/50">{note}</p>
    </form>
  );
}
