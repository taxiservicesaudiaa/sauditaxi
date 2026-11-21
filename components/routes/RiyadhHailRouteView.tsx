import { Fragment } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  Bus,
  Car,
  CarFront,
  Check,
  ChevronDown,
  Clock,
  Compass,
  Landmark,
  Luggage,
  MessageCircle,
  Moon,
  Mountain,
  Plane,
  Send,
  UserRound,
  Users,
  UsersRound,
} from "lucide-react";
import { Breadcrumbs, type Crumb } from "@/components/Breadcrumbs";
import { QuoteForm } from "@/components/QuoteForm";
import { RouteQuoteBar } from "@/components/routes/RouteQuoteBar";
import type { PlanningGuide, RelatedRouteCard } from "@/components/routes/LongDistanceRouteView";
import type { Faq } from "@/data/faqs";
import { RIYADH_HAIL as c, RIYADH_HAIL_DESIGN as d } from "@/data/riyadh-to-hail-route";
import { vehicles } from "@/data/vehicles";
import { whatsappLink } from "@/lib/site";

/**
 * /routes/riyadh-to-hail — "the road north". A layout of its own (not the
 * shared long-distance template): centred mountain hero with a one-line quote
 * bar, a proportional kilometre strip, an alternating road timeline, a vehicle
 * comparison table, a ticket-style checklist, a dark Hail band, a boarding-pass
 * pickup card, a connected stepper, a departures-board route list and a split
 * FAQ. Copy: data/riyadh-to-hail-route.ts.
 */

const wrap = "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8";
const inlineLink = "font-semibold text-midnight underline decoration-brass decoration-2 underline-offset-4 hover:text-brass";

function RichText({ text, onDark = false }: { text: string; onDark?: boolean }) {
  const parts = text.split(/(\[[^\]]+\]\((?:\/|#)[^)\s]*\))/g);
  const cls = onDark ? "font-semibold text-white underline decoration-brass decoration-2 underline-offset-4 hover:text-brass" : inlineLink;
  return (
    <>
      {parts.map((part, i) => {
        const m = part.match(/^\[([^\]]+)\]\(((?:\/|#)[^)\s]*)\)$/);
        if (!m) return <Fragment key={i}>{part}</Fragment>;
        const [, label, href] = m;
        return href.startsWith("#") ? (
          <a key={i} href={href} className={cls}>{label}</a>
        ) : (
          <Link key={i} href={href} className={cls}>{label}</Link>
        );
      })}
    </>
  );
}

/** Small gold kicker + heading used across this page (left-aligned, with a rule). */
function Kicker({ n, label }: { n: string; label: string }) {
  return (
    <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-brass">
      <span className="tabular-nums">{n}</span>
      <span className="h-px w-8 bg-brass/60" aria-hidden="true" />
      {label}
    </p>
  );
}

/** Decorative skyline of Hail's two ranges, Aja (left) and Salma (right). */
function MountainSkyline({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 1440 220" preserveAspectRatio="none" className={className} aria-hidden="true" focusable="false">
      <path
        d="M0 220 L0 150 L90 120 L170 140 L260 70 L330 110 L400 40 L470 95 L540 75 L610 130 L700 150 L760 150 L760 220 Z"
        fill="currentColor"
        opacity="0.55"
      />
      <path
        d="M640 220 L640 160 L760 140 L860 95 L930 120 L1010 60 L1080 105 L1150 85 L1240 135 L1340 120 L1440 145 L1440 220 Z"
        fill="currentColor"
        opacity="0.8"
      />
      <path d="M0 200 Q720 175 1440 200" fill="none" stroke="#c8a96b" strokeWidth="2" strokeDasharray="10 12" opacity="0.7" />
    </svg>
  );
}

const vehicleIcon: Record<string, typeof Car> = { suv: CarFront, van: Bus, minibus: Bus };
const planIcon = { clock: Clock, car: Car, moon: Moon, user: UserRound } as Record<string, typeof Car>;
const whoIcons = [UsersRound, Luggage, Briefcase, Compass];
const highlightIcons = [Mountain, Landmark, Landmark];

export function RiyadhHailRouteView({
  faqs,
  crumbs,
  relatedRoutes,
  guides,
}: {
  faqs: Faq[];
  crumbs: Crumb[];
  relatedRoutes: RelatedRouteCard[];
  guides: PlanningGuide[];
}) {
  const facts = c.glance.rows.filter((r) => ["Origin", "Destination", "Journey type", "Price"].includes(r.label));
  const aside = c.journey.aside!;
  const dest = c.destination!;

  return (
    <>
      {/* ── Hero: centred, mountain skyline, one-line quote bar ── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-midnight via-midnight to-navy text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(200,169,107,0.18),transparent_60%)]" aria-hidden="true" />
        <MountainSkyline className="pointer-events-none absolute inset-x-0 bottom-0 h-40 w-full text-midnight-soft sm:h-56" />
        <div className={`relative ${wrap} pb-28 pt-28 sm:pb-36 sm:pt-32 lg:pt-36`}>
          <Breadcrumbs items={crumbs} onDark />
          <div className="mx-auto mt-10 max-w-3xl text-center">
            <p className="inline-flex items-center gap-2 rounded-full border border-brass/40 bg-brass/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-brass">
              <Compass className="size-3.5" aria-hidden="true" />
              Riyadh → Qassim → Hail
            </p>
            <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">{c.hero.h1}</h1>
            <p className="mt-5 text-lg font-medium text-brass-soft sm:text-xl">{c.hero.lead}</p>
            <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-white/75 sm:text-base">{c.hero.body}</p>
          </div>
          <div id="quote" className="mx-auto mt-10 max-w-5xl scroll-mt-32">
            <RouteQuoteBar defaultPickup={c.panel.pickup} defaultDropoff={c.panel.dropoff} dropoffPlaceholder={c.panel.dropoffPlaceholder} />
            <ul className="mt-5 flex flex-wrap justify-center gap-x-6 gap-y-2">
              {c.hero.points.map((p) => (
                <li key={p} className="flex items-center gap-2 text-sm text-white/80">
                  <Check className="size-4 text-brass" aria-hidden="true" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Stat strip overlapping the hero ── */}
      <section aria-label="Riyadh to Hail key figures" className="relative z-10 -mt-16 sm:-mt-20">
        <div className={wrap}>
          <dl className="grid grid-cols-2 overflow-hidden rounded-2xl border border-hairline bg-white shadow-xl shadow-midnight/10 lg:grid-cols-4">
            {d.stats.map((s, i) => (
              <div key={s.label} className={`p-5 sm:p-7 ${i % 2 === 1 ? "border-l border-hairline" : ""} ${i > 1 ? "border-t border-hairline lg:border-t-0" : ""} ${i === 2 ? "lg:border-l" : ""}`}>
                <dt className="text-xs font-semibold uppercase tracking-wide text-ink-muted">{s.label}</dt>
                <dd className="mt-2 flex items-baseline gap-1.5">
                  <span className="text-3xl font-bold tracking-tight text-midnight sm:text-4xl">{s.value}</span>
                  {s.unit && <span className="text-sm font-semibold text-brass">{s.unit}</span>}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── 01 At a glance: answer + facts + kilometre strip ── */}
      <section aria-labelledby="glance" className="bg-white pb-16 pt-16 sm:pb-20 sm:pt-20">
        <div className={wrap}>
          <Kicker n="01" label="At a glance" />
          <div className="mt-5 grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-16">
            <div>
              <h2 id="glance" className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">{c.glance.heading}</h2>
              <p className="mt-5 text-lg leading-relaxed text-ink">{c.quickAnswer}</p>
            </div>
            <dl className="grid grid-cols-2 gap-px self-start overflow-hidden rounded-2xl border border-hairline bg-hairline">
              {facts.map((f) => (
                <div key={f.label} className="bg-sand/30 p-5">
                  <dt className="text-[11px] font-bold uppercase tracking-wider text-ink-muted">{f.label}</dt>
                  <dd className="mt-1.5 font-semibold text-ink">{f.value}</dd>
                  <dd className="mt-0.5 text-xs text-ink-muted">{f.note}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Kilometre strip */}
          <figure className="mt-14">
            <figcaption className="text-sm font-bold uppercase tracking-wide text-ink">{c.glance.legsHeading}</figcaption>
            <div className="relative mt-10 px-2 sm:px-6">
              <div className="h-2 rounded-full bg-gradient-to-r from-midnight via-midnight-soft to-brass" aria-hidden="true" />
              <ol className="relative">
                {d.markers.map((m, i) => {
                  const pct = (m.km / d.totalKm) * 100;
                  const align = i === 0 ? "items-start text-left" : i === d.markers.length - 1 ? "items-end text-right" : "items-center text-center";
                  const shift = i === 0 ? "translate-x-0" : i === d.markers.length - 1 ? "-translate-x-full" : "-translate-x-1/2";
                  return (
                    <li key={m.label} className={`absolute -top-[22px] flex w-max flex-col whitespace-nowrap ${align} ${shift}`} style={{ left: `${pct}%` }}>
                      <span className={`size-5 rounded-full border-4 ${i === 1 ? "border-brass bg-white" : "border-white bg-midnight"} shadow ring-1 ring-hairline`} aria-hidden="true" />
                      <span className="mt-3 text-sm font-bold text-ink sm:text-base">{m.label}</span>
                      <span className="text-xs font-semibold tabular-nums text-brass">{m.km === 0 ? "0 km" : `~${m.km} km`}</span>
                      <span className="mt-0.5 hidden text-xs text-ink-muted sm:block">{m.note}</span>
                    </li>
                  );
                })}
              </ol>
              <div className="h-24 sm:h-28" aria-hidden="true" />
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {c.glance.legs.map((l, i) => (
                <p key={i} className="rounded-xl bg-sand/40 px-4 py-3 text-sm text-ink-soft">
                  <span className="font-semibold text-ink">
                    {c.glance.stops[i]} → {c.glance.stops[i + 1]}:
                  </span>{" "}
                  {l.distance} · {l.time}
                </p>
              ))}
            </div>
            <p className="mt-3 text-xs leading-relaxed text-ink-muted">{c.glance.legsNote}</p>
          </figure>
        </div>
      </section>

      {/* ── 02 Distance & travel time + alternating road timeline ── */}
      <section className="bg-sand/40 py-16 sm:py-24">
        <div className={wrap}>
          <Kicker n="02" label="The journey" />
          <h2 className="mt-5 max-w-3xl text-3xl font-bold tracking-tight text-ink sm:text-4xl">{c.journey.heading}</h2>
          <div className="mt-8 gap-10 text-[15px] leading-relaxed text-ink-soft sm:text-base md:columns-2 [&>p]:mb-5 [&>p]:break-inside-avoid">
            {c.journey.paragraphs.map((p) => (
              <p key={p}>
                <RichText text={p} />
              </p>
            ))}
          </div>

          <h3 className="mt-14 text-center text-xl font-bold text-ink sm:text-2xl">{aside.heading}</h3>
          <ol className="relative mx-auto mt-10 max-w-4xl">
            <span className="absolute bottom-0 left-4 top-0 w-1 rounded-full bg-[repeating-linear-gradient(to_bottom,#0b1726_0_14px,transparent_14px_24px)] md:left-1/2 md:-translate-x-1/2" aria-hidden="true" />
            {aside.steps.map((s, i) => (
              <li key={s.title} className={`relative mb-8 pl-14 last:mb-0 md:w-1/2 md:pl-0 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:ml-auto md:pl-12"}`}>
                <span
                  className={`absolute left-0 top-3 flex size-9 items-center justify-center rounded-full bg-brass text-sm font-bold text-midnight ring-4 ring-sand md:top-4 ${i % 2 === 0 ? "md:left-auto md:-right-[18px]" : "md:-left-[18px]"}`}
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-hairline">
                  <h4 className="font-bold text-ink">{s.title}</h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── 03 Who should consider — numbered tiles ── */}
      <section className="bg-white py-16 sm:py-24">
        <div className={wrap}>
          <Kicker n="03" label="Is it for you?" />
          <div className="mt-5 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-14">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">{c.suits.heading}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-soft sm:text-base">{c.suits.intro}</p>
            </div>
            <ul className="grid gap-px overflow-hidden rounded-2xl bg-hairline ring-1 ring-hairline sm:grid-cols-2">
              {c.suits.items.map((s, i) => {
                const Icon = whoIcons[i] ?? Users;
                return (
                  <li key={s.title} className="bg-white p-6 sm:p-7">
                    <div className="flex items-center justify-between">
                      <Icon className="size-6 text-brass" aria-hidden="true" />
                      <span className="text-3xl font-bold tabular-nums text-sand-soft">{String(i + 1).padStart(2, "0")}</span>
                    </div>
                    <h3 className="mt-4 text-lg font-bold text-ink">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                      <RichText text={s.text} />
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      {/* ── 04 Vehicles — comparison table (list on mobile) ── */}
      <section id="vehicles" className="scroll-mt-32 bg-midnight py-16 text-white sm:py-24">
        <div className={wrap}>
          <Kicker n="04" label="Vehicles" />
          <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">{c.vehicles.heading}</h2>
          <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-white/75 sm:text-base">{c.vehicles.intro}</p>

          <div className="mt-10 hidden overflow-hidden rounded-2xl ring-1 ring-white/10 md:block">
            <table className="w-full text-left text-sm">
              <caption className="sr-only">Vehicle classes for the Riyadh to Hail transfer</caption>
              <thead className="bg-white/5 text-xs uppercase tracking-wider text-brass">
                <tr>
                  <th scope="col" className="px-5 py-4 font-semibold">Vehicle</th>
                  <th scope="col" className="px-5 py-4 font-semibold">Passengers</th>
                  <th scope="col" className="px-5 py-4 font-semibold">Bags</th>
                  <th scope="col" className="px-5 py-4 font-semibold">On the drive to Hail</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {vehicles.map((v) => {
                  const Icon = vehicleIcon[v.id] ?? Car;
                  return (
                    <tr key={v.id} className="align-top transition-colors hover:bg-white/[0.03]">
                      <th scope="row" className="px-5 py-4">
                        <span className="flex items-center gap-3">
                          <Icon className="size-5 shrink-0 text-brass" aria-hidden="true" />
                          <span>
                            <span className="block font-semibold text-white">{v.name}</span>
                            <span className="block text-xs font-normal text-white/55">{v.examples}</span>
                          </span>
                        </span>
                      </th>
                      <td className="whitespace-nowrap px-5 py-4 text-white/85">{v.passengers}</td>
                      <td className="whitespace-nowrap px-5 py-4 text-white/85">{v.luggage}</td>
                      <td className="px-5 py-4 text-white/70">{c.vehicles.fit[v.id] ?? v.description}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <ul className="mt-8 divide-y divide-white/10 rounded-2xl ring-1 ring-white/10 md:hidden">
            {vehicles.map((v) => {
              const Icon = vehicleIcon[v.id] ?? Car;
              return (
                <li key={v.id} className="p-5">
                  <div className="flex items-center gap-3">
                    <Icon className="size-5 text-brass" aria-hidden="true" />
                    <h3 className="font-semibold">{v.name}</h3>
                    <span className="ml-auto text-xs text-white/70">{v.passengers} · {v.luggage}</span>
                  </div>
                  <p className="mt-1 text-xs text-white/55">{v.examples}</p>
                  <p className="mt-2 text-sm leading-relaxed text-white/75">{c.vehicles.fit[v.id] ?? v.description}</p>
                </li>
              );
            })}
          </ul>
          <p className="mt-5 max-w-3xl text-xs leading-relaxed text-white/55">{c.vehicles.footnote}</p>
        </div>
      </section>

      {/* ── 05 Planning — 2×2 tiles + ticket checklist ── */}
      <section className="bg-white py-16 sm:py-24">
        <div className={wrap}>
          <Kicker n="05" label="Planning" />
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-ink sm:text-4xl">{c.stops.heading}</h2>
          <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
            <div className="grid gap-4 sm:grid-cols-2">
              {c.stops.cards.map((card) => {
                const Icon = planIcon[card.icon] ?? Clock;
                return (
                  <div key={card.title} className="rounded-2xl border-t-4 border-brass bg-sand/30 p-6">
                    <span className="flex size-11 items-center justify-center rounded-full bg-midnight text-brass">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <h3 className="mt-4 font-bold text-ink">{card.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                      <RichText text={card.text} />
                    </p>
                  </div>
                );
              })}
            </div>
            {/* Ticket-style checklist */}
            <div className="relative self-start rounded-2xl bg-midnight p-7 text-white">
              <span className="absolute -left-3 top-24 size-6 rounded-full bg-white" aria-hidden="true" />
              <span className="absolute -right-3 top-24 size-6 rounded-full bg-white" aria-hidden="true" />
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-brass">Your quote checklist</p>
              <h3 className="mt-2 text-xl font-bold">{c.stops.checklist.heading}</h3>
              <div className="my-6 border-t-2 border-dashed border-white/20" aria-hidden="true" />
              <ul className="space-y-3">
                {c.stops.checklist.items.map((it) => (
                  <li key={it} className="flex items-start gap-3 text-sm text-white/85">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded border border-brass/60">
                      <Check className="size-3.5 text-brass" aria-hidden="true" />
                    </span>
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 06 Arriving in Hail — dark band with skyline ── */}
      <section className="relative overflow-hidden bg-navy py-16 text-white sm:py-24">
        <MountainSkyline className="pointer-events-none absolute inset-x-0 top-0 h-32 w-full rotate-180 text-midnight opacity-60" />
        <div className={`relative ${wrap}`}>
          <Kicker n="06" label="Destination" />
          <div className="mt-5 grid gap-10 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:gap-14">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{dest.heading}</h2>
              <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-white/80 sm:text-base">
                {dest.paragraphs.map((p) => (
                  <p key={p}>
                    <RichText text={p} onDark />
                  </p>
                ))}
              </div>
            </div>
            {dest.returnTrip && (
              <div className="self-start rounded-2xl border border-brass/50 bg-white/5 p-7 backdrop-blur-sm">
                <Plane className="size-6 -rotate-45 text-brass" aria-hidden="true" />
                <h2 className="mt-4 text-xl font-bold">{dest.returnTrip.heading}</h2>
                <p className="mt-3 text-sm leading-relaxed text-white/80">
                  <RichText text={dest.returnTrip.text} onDark />
                </p>
              </div>
            )}
          </div>
          <ul className="mt-12 grid gap-4 md:grid-cols-3">
            {dest.highlights.map((h, i) => {
              const Icon = highlightIcons[i] ?? Landmark;
              return (
                <li key={h.title} className="rounded-2xl bg-white/[0.06] p-6 ring-1 ring-white/10">
                  <Icon className="size-6 text-brass" aria-hidden="true" />
                  <h3 className="mt-4 font-bold">{h.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">{h.text}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* ── 07 Pickup / drop-off — boarding-pass card ── */}
      <section className="bg-sand/40 py-16 sm:py-24">
        <div className={wrap}>
          <Kicker n="07" label="Where we go" />
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-ink sm:text-4xl">{c.pickup.heading}</h2>
          <div className="mt-10 grid overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-hairline md:grid-cols-[1fr_auto_1fr]">
            {[c.pickup.from, null, c.pickup.to].map((side, i) =>
              side === null ? (
                <div key="mid" className="flex items-center justify-center border-y-2 border-dashed border-hairline bg-sand/20 px-6 py-4 md:border-x-2 md:border-y-0 md:py-0">
                  <span className="flex size-12 items-center justify-center rounded-full bg-midnight text-brass">
                    <ArrowRight className="size-5 rotate-90 md:rotate-0" aria-hidden="true" />
                  </span>
                </div>
              ) : (
                <div key={side.title} className="p-7 sm:p-8">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-brass">{i === 0 ? "From" : "To"}</p>
                  <h3 className="mt-1 text-2xl font-bold text-ink">{i === 0 ? "Riyadh" : "Hail"}</h3>
                  <p className="text-sm text-ink-muted">{side.title}</p>
                  <ul className="mt-5 space-y-2.5">
                    {side.items.map((it) => (
                      <li key={it} className="flex items-start gap-2.5 text-sm text-ink">
                        <Check className="mt-0.5 size-4 shrink-0 text-brass" aria-hidden="true" />
                        {it}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 text-sm leading-relaxed text-ink-soft">
                    <RichText text={side.note} />
                  </p>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* ── 08 Connected stepper ── */}
      <section className="bg-white py-16 sm:py-24">
        <div className={wrap}>
          <Kicker n="08" label="Booking" />
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-ink sm:text-4xl">{c.steps.heading}</h2>
          <ol className="relative mt-12 grid gap-10 md:grid-cols-4 md:gap-6">
            <span className="absolute left-5 top-0 h-full w-0.5 bg-hairline md:left-0 md:top-5 md:h-0.5 md:w-full" aria-hidden="true" />
            {c.steps.items.map((s, i) => (
              <li key={s.title} className="relative pl-16 md:pl-0">
                <span className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-full bg-midnight text-sm font-bold text-brass ring-8 ring-white md:relative">
                  {i + 1}
                </span>
                <h3 className="font-bold text-ink md:mt-6">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── 09 Full form — split layout ── */}
      <section id="quote-details" className="scroll-mt-32 bg-sand/40 py-16 sm:py-24">
        <div className={`${wrap} grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:gap-14`}>
          <div>
            <Kicker n="09" label="Full request" />
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-ink sm:text-4xl">{c.formSection.heading}</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-soft sm:text-base">{c.formSection.text}</p>
            <a
              href={whatsappLink(c.hero.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-xl border border-midnight/15 bg-white px-5 py-3 text-sm font-semibold text-midnight transition-colors hover:border-brass"
            >
              <MessageCircle className="size-5 text-brass" />
              Prefer WhatsApp? Message us
            </a>
          </div>
          <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-hairline sm:p-8">
            <QuoteForm serviceType={c.quoteForm.serviceType} route={c.quoteForm.route} defaultPickup={c.quoteForm.pickup} defaultDropoff={c.quoteForm.dropoff} />
          </div>
        </div>
      </section>

      {/* ── 10 Related — departures-board list ── */}
      <section className="bg-white py-16 sm:py-24">
        <div className={wrap}>
          <Kicker n="10" label="Connections" />
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-ink sm:text-4xl">{c.related.heading}</h2>
          <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-ink-soft sm:text-base">{c.related.intro}</p>
          <ul className="mt-8 divide-y divide-hairline overflow-hidden rounded-2xl ring-1 ring-hairline">
            {relatedRoutes.map((r) => (
              <li key={r.href}>
                <Link href={r.href} className="group grid items-center gap-1 px-5 py-4 transition-colors hover:bg-sand/30 sm:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)_minmax(0,1.3fr)_auto] sm:gap-4">
                  <span className="font-semibold text-ink">{r.label}</span>
                  <span className="text-sm tabular-nums text-ink-soft">{r.meta}</span>
                  <span className="text-sm text-ink-muted">{r.text}</span>
                  <ArrowRight className="hidden size-4 text-brass transition-transform group-hover:translate-x-1 sm:block" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex flex-wrap gap-3">
            {c.related.cities.map((x) => (
              <Link key={x.href} href={x.href} className="inline-flex items-center gap-2 rounded-full bg-midnight px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-midnight-soft">
                {x.label}
                <span className="font-normal text-white/60">· {x.text}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 11 FAQ — split with native accordion (also FAQPage JSON-LD) ── */}
      <section className="bg-sand/40 py-16 sm:py-24">
        <div className={`${wrap} grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-14`}>
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Kicker n="11" label="Questions" />
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-ink sm:text-4xl">{c.faqHeading}</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">{d.faqIntro}</p>
          </div>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <details key={f.question} className="group rounded-2xl bg-white ring-1 ring-hairline open:ring-brass/60" open={i === 0}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-semibold text-ink [&::-webkit-details-marker]:hidden">
                  <span className="text-[15px] sm:text-base">{f.question}</span>
                  <ChevronDown className="size-5 shrink-0 text-brass transition-transform group-open:rotate-180" aria-hidden="true" />
                </summary>
                <p className="px-5 pb-5 text-sm leading-relaxed text-ink-soft sm:text-[15px]">{f.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── 12 Guides + method ── */}
      <section className="bg-white py-14 sm:py-16">
        <div className={`${wrap} grid gap-8 lg:grid-cols-2`}>
          {guides.length > 0 && (
            <div>
              <h2 className="text-lg font-bold text-ink">{c.guides.heading}</h2>
              <ul className="mt-4 space-y-3">
                {guides.map((g) => (
                  <li key={g.slug}>
                    <Link href={`/blog/${g.slug}`} className="group flex items-start justify-between gap-4 rounded-xl p-4 ring-1 ring-hairline transition-colors hover:bg-sand/30">
                      <span>
                        <span className="block font-semibold text-ink">{g.title}</span>
                        {g.excerpt && <span className="mt-1 line-clamp-2 block text-sm text-ink-soft">{g.excerpt}</span>}
                      </span>
                      <ArrowRight className="mt-1 size-4 shrink-0 text-brass" aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className="rounded-2xl bg-sand/40 p-6 lg:self-start">
            <h2 className="text-lg font-bold text-ink">{c.method.heading}</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">{c.method.text}</p>
            <p className="mt-3 text-xs text-ink-muted">
              Last reviewed <time dateTime={c.reviewed}>{new Date(`${c.reviewed}T00:00:00Z`).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" })}</time>
            </p>
          </div>
        </div>
      </section>

      {/* ── Final CTA — gold band ── */}
      <section className="bg-brass">
        <div className={`${wrap} flex flex-col items-start gap-6 py-14 md:flex-row md:items-center md:justify-between`}>
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-midnight sm:text-3xl">{c.finalCta.heading}</h2>
            <p className="mt-2 text-midnight/80">{c.finalCta.text}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="#quote" className="inline-flex items-center gap-2 rounded-xl bg-midnight px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-midnight-soft">
              <Send className="size-4" />
              {c.finalCta.primary}
            </a>
            <a
              href={whatsappLink(c.hero.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-midnight px-6 py-3 text-sm font-semibold text-midnight transition-colors hover:bg-midnight hover:text-white"
            >
              <MessageCircle className="size-4" />
              {c.finalCta.whatsapp}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
