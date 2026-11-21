import Link from "next/link";
import { ArrowRight, Building2, Clock, MapPin, Plane } from "lucide-react";
import type { Crumb } from "@/components/Breadcrumbs";

/**
 * Dedicated /cities/{city} layout — the airport ↔ hotel transfer directory
 * hub (parent page for the 174 individual hotel-transfer routes, which all
 * redirect here). Distinct editorial identity from CityHubView's photo-led
 * "destination guide" (/taxi-service/{city}): this page is a utility
 * directory, not a scenic guide, so it shares the deliberately photo-free
 * midnight hero used by PointTransferV2View rather than duplicating
 * CityHubView's hero treatment. Content (hotel table, airport facts) is
 * unchanged from the page it replaces — this is a presentation redesign
 * only, onto the site's current midnight/sand/brass/hairline theme.
 */

export interface HotelTransferHubStat {
  label: string;
  value: string;
  emphasis?: boolean;
}

export interface HotelTransferHubFactCard {
  heading: string;
  icon?: "distance" | "terminals" | "note";
  lines?: string[];
  text?: string;
  wide?: boolean;
}

export interface HotelTransferHubRow {
  slug: string;
  name: string;
  area: string;
  stars: number;
  /** null = not yet verified; shown as a dash. */
  distanceKm: number | null;
  durationMin: number | null;
  quoteHref: string;
}

export interface HotelTransferHubLinkCard {
  label: string;
  href: string;
  icon: "airport" | "city";
}

export interface HotelTransferHubProps {
  eyebrow: string;
  h1: string;
  dek: string;
  crumbs: Crumb[];
  stats: HotelTransferHubStat[];
  linkCards: HotelTransferHubLinkCard[];
  factsHeading: string;
  factCards: HotelTransferHubFactCard[];
  hotelsHeading: string;
  hotelsIntro: string;
  hotels: HotelTransferHubRow[];
  tableLabels: {
    hotel: string;
    district: string;
    stars: string;
    distance: string;
    duration: string;
    quote: string;
    quoteLabel: string;
  };
}

const linkIcon = { airport: Plane, city: Building2 };
const factIcon = { distance: MapPin, terminals: Clock, note: undefined };

export function HotelTransferHubView({
  eyebrow,
  h1,
  dek,
  crumbs,
  stats,
  linkCards,
  factsHeading,
  factCards,
  hotelsHeading,
  hotelsIntro,
  hotels,
  tableLabels,
}: HotelTransferHubProps) {
  return (
    <>
      {/* Hero — deliberately photo-free; this is a transfer directory, not a
          scenic destination guide (see CityHubView for that identity). */}
      <section className="bg-midnight text-white">
        <div className="mx-auto max-w-5xl px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:px-8 lg:pt-36">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-white/60">
            {crumbs.map((c, i) => (
              <span key={c.path} className="flex items-center gap-2">
                {i > 0 && <span aria-hidden="true">/</span>}
                {i === crumbs.length - 1 ? (
                  <span className="text-white/85">{c.name}</span>
                ) : (
                  <Link href={c.path} className="hover:text-white">
                    {c.name}
                  </Link>
                )}
              </span>
            ))}
          </nav>

          <p className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-brass">
            <Building2 className="size-3.5" />
            {eyebrow}
          </p>

          <h1 className="mt-5 max-w-2xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl">{h1}</h1>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-white/75">{dek}</p>

          {stats.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-3">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className={`rounded-xl border px-4 py-2.5 ${
                    s.emphasis ? "border-brass/40 bg-brass/10" : "border-white/15 bg-white/5"
                  }`}
                >
                  <p className="text-[11px] uppercase tracking-wide text-white/55">{s.label}</p>
                  <p className={`text-sm font-semibold ${s.emphasis ? "text-brass" : "text-white"}`}>{s.value}</p>
                </div>
              ))}
            </div>
          )}

          {linkCards.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-3">
              {linkCards.map((l) => {
                const Icon = linkIcon[l.icon];
                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:border-brass/50 hover:bg-white/10"
                  >
                    <Icon className="size-4 text-brass" />
                    {l.label}
                    <ArrowRight className="size-4 text-brass rtl:rotate-180" />
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Airport-transfer facts — sourced only from data/hotels.ts,
          data/airports.ts, and lib/city-hub-facts.ts; renders nothing for a
          fact the city doesn't have on file. */}
      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">{factsHeading}</h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {factCards.map((f) => {
              const Icon = f.icon ? factIcon[f.icon] : undefined;
              return (
                <div
                  key={f.heading}
                  className={`rounded-2xl border border-hairline bg-sand/30 p-5 ${f.wide ? "sm:col-span-2" : ""}`}
                >
                  <h3 className="flex items-center gap-2 font-semibold text-ink">
                    {Icon && <Icon className="size-4 text-brass" />}
                    {f.heading}
                  </h3>
                  {f.text && <p className="mt-2 text-sm leading-relaxed text-ink-soft">{f.text}</p>}
                  {f.lines && f.lines.length > 0 && (
                    <ul className="mt-2 space-y-1 text-sm text-ink-soft">
                      {f.lines.map((l) => (
                        <li key={l}>{l}</li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Every hotel in this city, one row each — the core content this page exists for. */}
      <section id="hotels" className="scroll-mt-20 bg-sand/40 py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">{hotelsHeading}</h2>
          <p className="mt-3 text-ink-soft">{hotelsIntro}</p>

          <div className="mt-8 overflow-x-auto rounded-2xl border border-hairline bg-white">
            <table className="w-full min-w-[720px] text-left text-sm rtl:text-right">
              <thead>
                <tr className="border-b border-hairline bg-midnight text-xs font-semibold uppercase tracking-wide text-white/80">
                  <th className="px-4 py-3">{tableLabels.hotel}</th>
                  <th className="px-4 py-3">{tableLabels.district}</th>
                  <th className="px-4 py-3">{tableLabels.stars}</th>
                  <th className="px-4 py-3">{tableLabels.distance}</th>
                  <th className="px-4 py-3">{tableLabels.duration}</th>
                  <th className="px-4 py-3">{tableLabels.quote}</th>
                </tr>
              </thead>
              <tbody>
                {hotels.map((h) => (
                  <tr key={h.slug} className="border-b border-hairline last:border-0 even:bg-sand/20">
                    <td className="px-4 py-3 font-medium text-ink">{h.name}</td>
                    <td className="px-4 py-3 text-ink-soft">{h.area}</td>
                    <td className="px-4 py-3 text-ink-soft">{h.stars}★</td>
                    <td className="px-4 py-3 text-ink-soft">{h.distanceKm == null ? "—" : `${h.distanceKm} km`}</td>
                    <td className="px-4 py-3 text-ink-soft">{h.durationMin == null ? "—" : `${h.durationMin} min`}</td>
                    <td className="px-4 py-3">
                      <Link
                        href={h.quoteHref}
                        className="font-semibold text-midnight underline decoration-brass/50 decoration-dotted underline-offset-2 hover:text-brass"
                      >
                        {tableLabels.quoteLabel}
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
