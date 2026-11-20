"use client";

import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";

const passengerOptions = ["1", "2", "3", "4", "5", "6", "7+"];

const fieldClass =
  "rounded-xl border-hairline bg-white text-ink placeholder:text-ink-muted shadow-none focus-visible:ring-brass/40 focus-visible:border-brass";

/**
 * The hero's booking widget. Same functional pattern as the previous
 * HeroQuickForm (collects the essentials, hands off to /get-quote with the
 * values pre-filled as query params so the full QuoteForm → /api/leads flow
 * completes the booking) — entirely new presentation only. HeroQuickForm
 * itself is untouched (still used by the Arabic homepage, app/ar/page.tsx).
 */
export function HomeBookingPanel({
  defaultPickup = "",
  eyebrow = "Plan your journey",
  title = "Request a private transfer",
  dropoffPlaceholder = "City, hotel, or address",
}: {
  /** Prefill the pickup field (e.g. the airport on /cities/madinah). */
  defaultPickup?: string;
  eyebrow?: string;
  title?: string;
  dropoffPlaceholder?: string;
} = {}) {
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
    <div className="rounded-2xl border border-hairline bg-offwhite/95 p-6 shadow-[0_24px_60px_-24px_rgba(11,23,38,0.35)] backdrop-blur-sm sm:p-7">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brass">{eyebrow}</p>
      <p className="mt-1.5 text-xl font-bold text-ink">{title}</p>

      <form onSubmit={handleSubmit} className="mt-5 space-y-4" aria-label="Quick quote form">
        <div>
          <Label htmlFor="hb-pickup" className="text-ink-soft">Pickup location</Label>
          <Input id="hb-pickup" name="pickup" placeholder="Airport, hotel, or address" required defaultValue={defaultPickup || undefined} className={`mt-1.5 ${fieldClass}`} />
        </div>
        <div>
          <Label htmlFor="hb-dropoff" className="text-ink-soft">Destination</Label>
          <Input id="hb-dropoff" name="dropoff" placeholder={dropoffPlaceholder} required className={`mt-1.5 ${fieldClass}`} />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <Label htmlFor="hb-date" className="text-ink-soft">Date</Label>
            <Input id="hb-date" name="date" type="date" required className={`mt-1.5 ${fieldClass}`} />
          </div>
          <div>
            <Label htmlFor="hb-time" className="text-ink-soft">Time</Label>
            <Input id="hb-time" name="time" type="time" required className={`mt-1.5 ${fieldClass}`} />
          </div>
        </div>
        <div>
          <Label htmlFor="hb-passengers" className="text-ink-soft">Passengers</Label>
          <Select id="hb-passengers" name="passengers" defaultValue="2" className={`mt-1.5 ${fieldClass}`}>
            {passengerOptions.map((p) => (
              <option key={p} value={p}>{p}</option>
            ))}
          </Select>
        </div>

        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-midnight px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-midnight-soft"
        >
          Get a Quote
          <ArrowRight className="size-4 rtl:rotate-180" />
        </button>
      </form>
    </div>
  );
}
