"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, MapPin } from "lucide-react";

const passengerOptions = ["1", "2", "3", "4", "5", "6", "7+"];
const field =
  "mt-1.5 h-11 w-full rounded-xl border border-hairline bg-white px-3.5 text-sm text-ink placeholder:text-ink-muted outline-none transition focus:border-brass focus:ring-2 focus:ring-brass/30";
const label = "text-xs font-semibold text-ink-soft";

/**
 * Quick quote card with destination chips, for region pages where "the
 * destination" isn't one place (e.g. Qassim → Buraidah, Unaizah, a farm…).
 * Chips fill the drop-off field; open-ended chips ("Farm in Qassim – ")
 * leave the cursor at the end so the visitor adds the name or address.
 * Hands off to /get-quote prefilled; the full QuoteForm submits to /api/leads.
 */
export function DestinationQuoteCard({
  title,
  defaultPickup,
  chips,
  placeholder,
}: {
  title: string;
  defaultPickup: string;
  chips: { label: string; value: string }[];
  placeholder: string;
}) {
  const router = useRouter();
  const dropoffRef = useRef<HTMLInputElement>(null);

  function pick(value: string) {
    const el = dropoffRef.current;
    if (!el) return;
    el.value = value;
    el.focus();
    el.setSelectionRange(value.length, value.length);
  }

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
    <form onSubmit={handleSubmit} aria-label="Quick quote form" className="rounded-3xl bg-white p-5 text-ink shadow-[0_30px_60px_-30px_rgba(0,0,0,0.55)] sm:p-7">
      <p className="flex items-center gap-2 text-lg font-bold">
        <MapPin className="size-5 text-brass" aria-hidden="true" />
        {title}
      </p>
      <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label="Choose a destination type">
        {chips.map((c) => (
          <button
            key={c.label}
            type="button"
            onClick={() => pick(c.value)}
            className="rounded-full border border-hairline bg-sand/40 px-3.5 py-1.5 text-sm font-medium text-ink transition-colors hover:border-brass hover:bg-brass/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass/40"
          >
            {c.label}
          </button>
        ))}
      </div>
      <div className="mt-4">
        <label htmlFor="dq-dropoff" className={label}>Drop-off in Qassim</label>
        <input id="dq-dropoff" ref={dropoffRef} name="dropoff" required placeholder={placeholder} className={field} />
      </div>
      <div className="mt-3">
        <label htmlFor="dq-pickup" className={label}>Pickup in Riyadh</label>
        <input id="dq-pickup" name="pickup" required defaultValue={defaultPickup} placeholder="Address or hotel" className={field} />
      </div>
      <div className="mt-3 grid grid-cols-[1.3fr_1fr_0.8fr] gap-3">
        <div>
          <label htmlFor="dq-date" className={label}>Date</label>
          <input id="dq-date" name="date" type="date" required className={field} />
        </div>
        <div>
          <label htmlFor="dq-time" className={label}>Time</label>
          <input id="dq-time" name="time" type="time" required className={field} />
        </div>
        <div>
          <label htmlFor="dq-passengers" className={label}>People</label>
          <select id="dq-passengers" name="passengers" defaultValue="2" className={field}>
            {passengerOptions.map((p) => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
        </div>
      </div>
      <button type="submit" className="mt-5 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-midnight text-sm font-bold text-white transition-colors hover:bg-midnight-soft">
        Continue to quote
        <ArrowRight className="size-4 text-brass rtl:rotate-180" />
      </button>
    </form>
  );
}
