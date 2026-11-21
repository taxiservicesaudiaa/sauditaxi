"use client";

import { useMemo, useState } from "react";
import { Check, ClipboardList, MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/site";

type SiteOption = { id: string; label: string; climbable?: boolean };

const SITES: SiteOption[] = [
  { id: "noor", label: "Jabal al-Noor (Cave of Hira)", climbable: true },
  { id: "thawr", label: "Jabal Thawr", climbable: true },
  { id: "mina", label: "Mina" },
  { id: "muzdalifah", label: "Muzdalifah" },
  { id: "arafat", label: "Arafat and Jabal al-Rahmah" },
  { id: "aisha", label: "Masjid Aisha (Tan'im)" },
  { id: "mualla", label: "Jannat al-Mu'alla" },
];

/**
 * Itinerary builder for the Ziyarat tour. Backward-compatible with the CRM:
 * it writes a plain-text summary into the existing QuoteForm message field
 * (#qf-message) and builds a WhatsApp message. No new form fields are sent
 * to /api/leads.
 */
export function ZiyaratPlanner({ durations, whatsappIntro }: { durations: string[]; whatsappIntro: string }) {
  const [picked, setPicked] = useState<Record<string, boolean>>({ noor: true, mina: true, muzdalifah: true, arafat: true });
  const [climb, setClimb] = useState<Record<string, "base" | "climb">>({ noor: "base", thawr: "base" });
  const [duration, setDuration] = useState(durations[1] ?? durations[0] ?? "");
  const [access, setAccess] = useState("");
  const [added, setAdded] = useState(false);

  const summary = useMemo(() => {
    const stops = SITES.filter((s) => picked[s.id]).map((s) => (s.climbable ? `${s.label} – ${climb[s.id] === "climb" ? "climb" : "base visit"}` : s.label));
    const lines = [
      "Ziyarat tour request",
      `Duration: ${duration}`,
      `Sites: ${stops.length ? stops.join("; ") : "not chosen yet"}`,
    ];
    if (access.trim()) lines.push(`Walking / accessibility: ${access.trim()}`);
    return lines.join("\n");
  }, [picked, climb, duration, access]);

  function addToForm() {
    const el = document.getElementById("qf-message") as HTMLTextAreaElement | null;
    if (el) {
      el.value = el.value.trim() ? `${el.value.trim()}\n\n${summary}` : summary;
      el.dispatchEvent(new Event("input", { bubbles: true }));
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      setAdded(true);
    }
  }

  return (
    <div className="rounded-3xl bg-midnight p-6 text-white sm:p-8">
      <p className="flex items-center gap-2 text-sm font-bold text-brass">
        <ClipboardList className="size-4" aria-hidden="true" />
        Itinerary builder
      </p>

      <fieldset className="mt-5">
        <legend className="text-xs font-semibold uppercase tracking-[0.14em] text-white/60">Sites</legend>
        <ul className="mt-3 space-y-2">
          {SITES.map((s) => (
            <li key={s.id} className="rounded-xl bg-white/[0.06] px-3 py-2.5">
              <label className="flex cursor-pointer items-center gap-3 text-sm">
                <input
                  type="checkbox"
                  checked={!!picked[s.id]}
                  onChange={(e) => setPicked((p) => ({ ...p, [s.id]: e.target.checked }))}
                  className="size-4 accent-[#c8a96b]"
                />
                {s.label}
              </label>
              {s.climbable && picked[s.id] && (
                <div className="mt-2 flex gap-2 pl-7" role="radiogroup" aria-label={`${s.label}: base visit or climb`}>
                  {(["base", "climb"] as const).map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      role="radio"
                      aria-checked={climb[s.id] === opt}
                      onClick={() => setClimb((c) => ({ ...c, [s.id]: opt }))}
                      className={`rounded-full px-3 py-1 text-xs font-semibold transition-colors ${climb[s.id] === opt ? "bg-brass text-midnight" : "bg-white/10 text-white/80 hover:bg-white/20"}`}
                    >
                      {opt === "base" ? "Base visit" : "Climb"}
                    </button>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </fieldset>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <div>
          <label htmlFor="zp-duration" className="text-xs font-semibold uppercase tracking-[0.14em] text-white/60">Tour length</label>
          <select
            id="zp-duration"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="mt-1.5 h-11 w-full rounded-lg border border-white/15 bg-white/[0.06] px-3 text-sm text-white outline-none focus:border-brass [color-scheme:dark]"
          >
            {durations.map((d) => (
              <option key={d} value={d} className="text-ink">{d}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="zp-access" className="text-xs font-semibold uppercase tracking-[0.14em] text-white/60">Walking or mobility needs</label>
          <input
            id="zp-access"
            value={access}
            onChange={(e) => setAccess(e.target.value)}
            placeholder="e.g. wheelchair, no climbing"
            className="mt-1.5 h-11 w-full rounded-lg border border-white/15 bg-white/[0.06] px-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-brass"
          />
        </div>
      </div>

      <pre className="mt-5 whitespace-pre-wrap rounded-xl bg-black/25 p-4 font-sans text-xs leading-relaxed text-white/80">{summary}</pre>

      <div className="mt-4 flex flex-col gap-2 sm:flex-row">
        <button type="button" onClick={addToForm} className="flex h-11 flex-1 items-center justify-center gap-2 rounded-lg bg-brass text-sm font-bold text-midnight transition-colors hover:bg-brass-soft">
          {added ? <Check className="size-4" aria-hidden="true" /> : null}
          {added ? "Added to your request" : "Add to my request"}
        </button>
        <a
          href={whatsappLink(`${whatsappIntro}\n\n${summary}`)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-11 flex-1 items-center justify-center gap-2 rounded-lg border border-white/30 text-sm font-semibold transition-colors hover:bg-white hover:text-midnight"
        >
          <MessageCircle className="size-4" aria-hidden="true" />
          Send on WhatsApp
        </a>
      </div>
    </div>
  );
}
