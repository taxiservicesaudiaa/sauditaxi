"use client";

import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";

const passengerOptions = ["1", "2", "3", "4", "5", "6", "7+"];
const fieldClass =
  "h-11 rounded-lg border-hairline bg-white text-ink placeholder:text-ink-muted shadow-none focus-visible:ring-brass/40 focus-visible:border-brass";

/**
 * Horizontal, single-row quote bar (stacks on mobile). Same hand-off as
 * HomeBookingPanel: collects the essentials and opens /get-quote prefilled,
 * where the full QuoteForm submits to /api/leads.
 */
export function RouteQuoteBar({
  defaultPickup,
  defaultDropoff,
  dropoffPlaceholder,
  submitLabel = "Get a Quote",
}: {
  defaultPickup: string;
  defaultDropoff: string;
  dropoffPlaceholder: string;
  submitLabel?: string;
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
      className="grid gap-3 rounded-2xl bg-white p-4 text-left shadow-[0_30px_70px_-30px_rgba(0,0,0,0.6)] sm:grid-cols-2 sm:p-5 lg:grid-cols-[1.25fr_1.25fr_1fr_0.85fr_0.7fr_auto] lg:items-end"
    >
      <div>
        <Label htmlFor="rb-pickup" className="text-xs font-semibold uppercase tracking-wide text-ink-muted">From</Label>
        <Input id="rb-pickup" name="pickup" required defaultValue={defaultPickup} placeholder="Address or hotel" className={`mt-1.5 ${fieldClass}`} />
      </div>
      <div>
        <Label htmlFor="rb-dropoff" className="text-xs font-semibold uppercase tracking-wide text-ink-muted">To</Label>
        <Input id="rb-dropoff" name="dropoff" required defaultValue={defaultDropoff} placeholder={dropoffPlaceholder} className={`mt-1.5 ${fieldClass}`} />
      </div>
      <div>
        <Label htmlFor="rb-date" className="text-xs font-semibold uppercase tracking-wide text-ink-muted">Date</Label>
        <Input id="rb-date" name="date" type="date" required className={`mt-1.5 ${fieldClass}`} />
      </div>
      <div>
        <Label htmlFor="rb-time" className="text-xs font-semibold uppercase tracking-wide text-ink-muted">Time</Label>
        <Input id="rb-time" name="time" type="time" required className={`mt-1.5 ${fieldClass}`} />
      </div>
      <div>
        <Label htmlFor="rb-passengers" className="text-xs font-semibold uppercase tracking-wide text-ink-muted">Passengers</Label>
        <Select id="rb-passengers" name="passengers" defaultValue="2" className={`mt-1.5 ${fieldClass}`}>
          {passengerOptions.map((p) => (
            <option key={p} value={p}>{p}</option>
          ))}
        </Select>
      </div>
      <button
        type="submit"
        className="flex h-11 items-center justify-center gap-2 rounded-lg bg-brass px-6 text-sm font-bold text-midnight transition-colors hover:bg-brass-soft sm:col-span-2 lg:col-span-1"
      >
        {submitLabel}
        <ArrowRight className="size-4 rtl:rotate-180" />
      </button>
    </form>
  );
}
