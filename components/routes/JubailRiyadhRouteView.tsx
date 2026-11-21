import { Fragment } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Car,
  CircleDot,
  Clock,
  Factory,
  Flag,
  Home,
  Hotel,
  KeyRound,
  MapPin,
  MessageCircle,
  Milestone,
  Plane,
  Route as RouteIcon,
  Send,
} from "lucide-react";
import { Breadcrumbs, type Crumb } from "@/components/Breadcrumbs";
import { QuoteForm } from "@/components/QuoteForm";
import { TabbedQuoteForm } from "@/components/routes/TabbedQuoteForm";
import type { Faq } from "@/data/faqs";
import { JUBAIL_RIYADH as c, JUBAIL_RIYADH_REVIEWED } from "@/data/jubail-to-riyadh-route";
import { vehicles } from "@/data/vehicles";
import { whatsappLink } from "@/lib/site";

/**
 * /routes/jubail-to-riyadh — "compound gate to capital". Its own layout:
 * hero with a diagonal-stripe texture and a two-tab quick form (Riyadh address
 * / King Khalid Airport), a spec grid, a pickup section with an access
 * callout, a proportional route-segment bar, outlined-numeral steps, a
 * work-backwards airport timeline, seat-dot vehicle rows, a before/on-the-day
 * checklist pair, drop-off chips, a return card, a split related card,
 * grouped FAQs and a two-panel CTA. Copy: data/jubail-to-riyadh-route.ts.
 */

const wrap = "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8";
const stripes = "bg-[repeating-linear-gradient(135deg,rgba(200,169,107,0.07)_0_2px,transparent_2px_22px)]";

function RichText({ text, onDark = false }: { text: string; onDark?: boolean }) {
  const parts = text.split(/(\[[^\]]+\]\(\/[^)\s]*\))/g);
  const cls = onDark
    ? "font-semibold text-white underline decoration-brass decoration-2 underline-offset-4 hover:text-brass"
    : "font-semibold text-midnight underline decoration-brass decoration-2 underline-offset-4 hover:text-brass";
  return (
    <>
      {parts.map((part, i) => {
        const m = part.match(/^\[([^\]]+)\]\((\/[^)\s]*)\)$/);
        if (!m) return <Fragment key={i}>{part}</Fragment>;
        return (
          <Link key={i} href={m[2]} className={cls}>
            {m[1]}
          </Link>
        );
      })}
    </>
  );
}

const specIcons = { start: CircleDot, end: Flag, road: RouteIcon, clock: Clock, highway: Milestone, car: Car } as Record<string, typeof Car>;
const pickupIcons = { home: Home, hotel: Hotel, office: Building2, factory: Factory } as Record<string, typeof Car>;

export function JubailRiyadhRouteView({ faqs, crumbs }: { faqs: Faq[]; crumbs: Crumb[] }) {
  const totalKm = c.route.segments.reduce((s, x) => s + x.km, 0);
  const segTone: Record<string, string> = { light: "bg-sand-soft text-ink", dark: "bg-midnight text-white", brass: "bg-brass text-midnight" };

  return (
    <>
      {/* ── Hero: stripe texture + tabbed quick form ── */}
      <section className="relative overflow-hidden bg-midnight text-white">
        <div className={`pointer-events-none absolute inset-0 ${stripes}`} aria-hidden="true" />
        <div className={`relative ${wrap} pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pt-36`}>
          <Breadcrumbs items={crumbs} onDark />
          <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center lg:gap-14">
            <div>
              <p className="inline-flex items-center gap-2 border-l-4 border-brass pl-3 text-xs font-semibold uppercase tracking-[0.2em] text-brass">{c.hero.kicker}</p>
              <h1 className="mt-5 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl">{c.hero.h1}</h1>
              <p className="mt-4 text-lg text-brass-soft">{c.hero.lead}</p>
              <p className="mt-5 text-[15px] leading-relaxed text-white/75">{c.hero.body}</p>
              <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                {c.hero.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 rounded-lg bg-white/[0.06] px-3 py-2 text-sm text-white/90">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brass" aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div id="quote" className="scroll-mt-32">
              <TabbedQuoteForm defaultPickup="Jubail" cityTab={c.tabs.city} airportTab={c.tabs.airport} />
            </div>
          </div>
        </div>
      </section>

      {/* ── At a glance: answer + spec grid ── */}
      <section aria-labelledby="glance" className="bg-white py-14 sm:py-20">
        <div className={`${wrap} grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14`}>
          <div>
            <h2 id="glance" className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">{c.glance.heading}</h2>
            <p className="mt-5 text-[17px] leading-relaxed text-ink">{c.glance.answer}</p>
            <p className="mt-4 text-xs leading-relaxed text-ink-muted">{c.glance.note}</p>
          </div>
          <div className="overflow-hidden rounded-2xl ring-1 ring-hairline">
            <p className="bg-midnight px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] text-brass">Journey spec</p>
            <dl className="grid grid-cols-2 sm:grid-cols-3">
              {c.glance.spec.map((s) => {
                const Icon = specIcons[s.icon] ?? Car;
                return (
                  <div key={s.label} className="border-b border-r border-hairline p-4 sm:p-5 [&:nth-child(2n)]:border-r-0 sm:[&:nth-child(2n)]:border-r sm:[&:nth-child(3n)]:border-r-0">
                    <Icon className="size-5 text-brass" aria-hidden="true" />
                    <dt className="mt-3 text-[11px] font-bold uppercase tracking-wider text-ink-muted">{s.label}</dt>
                    <dd className="mt-1 text-sm font-semibold text-ink">{s.value}</dd>
                  </div>
                );
              })}
            </dl>
          </div>
        </div>
      </section>

      {/* ── Pickup from Jubail ── */}
      <section className="bg-sand/40 py-14 sm:py-20">
        <div className={`${wrap} grid gap-10 lg:grid-cols-2 lg:gap-14`}>
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">{c.pickup.heading}</h2>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-soft sm:text-base">
              {c.pickup.paragraphs.map((p) => (
                <p key={p}>
                  <RichText text={p} />
                </p>
              ))}
            </div>
            <div className="mt-6 flex gap-3 rounded-2xl border-l-4 border-brass bg-white p-5">
              <KeyRound className="mt-0.5 size-5 shrink-0 text-brass" aria-hidden="true" />
              <p className="text-sm font-medium text-ink">{c.pickup.access}</p>
            </div>
          </div>
          <ul className="grid gap-3 self-center sm:grid-cols-2">
            {c.pickup.types.map((t) => {
              const Icon = pickupIcons[t.icon] ?? MapPin;
              return (
                <li key={t.title} className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-hairline">
                  <Icon className="size-6 text-midnight" aria-hidden="true" />
                  <h3 className="mt-3 font-bold text-ink">{t.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-soft">{t.text}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* ── Distance & time + segment bar ── */}
      <section className="bg-white py-14 sm:py-20">
        <div className={wrap}>
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">{c.route.heading}</h2>
          <figure className="mt-8">
            <figcaption className="mb-3 flex justify-between text-sm font-bold text-ink">
              <span>Jubail</span>
              <span className="text-ink-muted">≈ {totalKm} km</span>
              <span>Riyadh</span>
            </figcaption>
            <div className="flex h-14 overflow-hidden rounded-xl text-[11px] font-semibold sm:text-xs" role="img" aria-label="Route split: link road from Jubail, then Highway 40, then into Riyadh">
              {c.route.segments.map((s) => (
                <div key={s.label} className={`flex items-center justify-center px-2 text-center ${segTone[s.tone]}`} style={{ width: `${(s.km / totalKm) * 100}%` }}>
                  <span className="truncate">
                    {s.label} <span className="opacity-70">~{s.km} km</span>
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-2 text-xs text-ink-muted">Approximate split from central Jubail (OpenStreetMap routing). Your pickup point changes the first segment.</p>
          </figure>
          <div className="mt-8 grid gap-6 text-[15px] leading-relaxed text-ink-soft sm:text-base md:grid-cols-3">
            {c.route.paragraphs.map((p) => (
              <p key={p}>
                <RichText text={p} />
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ── What to expect — outlined numerals ── */}
      <section className="bg-sand/40 py-14 sm:py-20">
        <div className={wrap}>
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">{c.expect.heading}</h2>
          <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {c.expect.steps.map((s, i) => (
              <li key={s.title}>
                <span className="block text-6xl font-bold leading-none text-transparent [-webkit-text-stroke:1.5px_#c8a96b]" aria-hidden="true">
                  {i + 1}
                </span>
                <h3 className="mt-3 font-bold text-ink">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Airport — work backwards ── */}
      <section className="relative overflow-hidden bg-midnight py-14 text-white sm:py-20">
        <div className={`pointer-events-none absolute inset-0 ${stripes}`} aria-hidden="true" />
        <div className={`relative ${wrap}`}>
          <Plane className="size-8 -rotate-45 text-brass" aria-hidden="true" />
          <h2 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">{c.airport.heading}</h2>
          <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-white/75">{c.airport.intro}</p>
          <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
            <ol className="flex flex-col gap-3 sm:flex-row-reverse sm:gap-0">
              {c.airport.timeline.map((t, i) => (
                <li key={t.label} className="relative flex-1 sm:px-2">
                  <div className={`h-full rounded-xl p-4 ${i === 0 ? "bg-brass text-midnight" : "bg-white/[0.07] ring-1 ring-white/10"}`}>
                    <p className={`text-xs font-bold uppercase tracking-wider ${i === 0 ? "text-midnight/70" : "text-brass"}`}>{t.label}</p>
                    <p className="mt-1.5 text-sm">{t.text}</p>
                  </div>
                  {i < c.airport.timeline.length - 1 && (
                    <span className="absolute -left-2 top-1/2 z-10 hidden -translate-y-1/2 text-brass sm:block" aria-hidden="true">
                      <ArrowRight className="size-4" />
                    </span>
                  )}
                </li>
              ))}
            </ol>
            <div className="rounded-2xl bg-white p-6 text-ink">
              <h3 className="font-bold">{c.airport.send.title}</h3>
              <ul className="mt-3 space-y-2">
                {c.airport.send.items.map((it) => (
                  <li key={it} className="flex items-center gap-2 text-sm">
                    <span className="size-1.5 rounded-full bg-brass" aria-hidden="true" />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-white/70">
            <RichText text={c.airport.caveat} onDark />
          </p>
        </div>
      </section>

      {/* ── Groups + vehicles — seat dots ── */}
      <section id="vehicles" className="scroll-mt-32 bg-white py-14 sm:py-20">
        <div className={wrap}>
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">{c.groups.heading}</h2>
          <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-ink-soft sm:text-base">{c.groups.intro}</p>
          <ul className="mt-10 grid gap-3 md:grid-cols-2">
            {vehicles.map((v) => {
              const seats = c.groups.seats[v.id] ?? 3;
              return (
                <li key={v.id} className="flex flex-col gap-3 rounded-2xl p-5 ring-1 ring-hairline sm:flex-row sm:items-center sm:justify-between">
                  <div className="min-w-0">
                    <h3 className="font-bold text-ink">
                      {v.name} <span className="font-normal text-ink-muted">· {v.examples}</span>
                    </h3>
                    <p className="mt-1 text-sm text-ink-soft">{c.groups.fit[v.id] ?? v.description}</p>
                    <p className="mt-1 text-xs text-ink-muted">
                      {v.passengers} · {v.luggage}
                    </p>
                  </div>
                  <div className="flex max-w-[11rem] flex-wrap gap-1 sm:justify-end" role="img" aria-label={`Up to ${seats} passengers`}>
                    {Array.from({ length: seats }).map((_, i) => (
                      <span key={i} className="size-3 rounded-full bg-midnight" />
                    ))}
                  </div>
                </li>
              );
            })}
          </ul>
          <p className="mt-5 text-sm text-ink">{c.groups.multi}</p>
          <p className="mt-1 text-xs text-ink-muted">{c.groups.footnote}</p>
        </div>
      </section>

      {/* ── Planning — before / on the day ── */}
      <section className="bg-sand/40 py-14 sm:py-20">
        <div className={wrap}>
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">{c.planning.heading}</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[c.planning.before, c.planning.day].map((col, ci) => (
              <div key={col.title} className={`rounded-2xl p-6 sm:p-7 ${ci === 0 ? "bg-white ring-1 ring-hairline" : "bg-midnight text-white"}`}>
                <h3 className="text-lg font-bold">{col.title}</h3>
                <ul className="mt-4 space-y-3">
                  {col.items.map((it) => (
                    <li key={it} className={`flex items-start gap-3 text-sm ${ci === 0 ? "text-ink" : "text-white/85"}`}>
                      <span className={`mt-0.5 flex size-5 shrink-0 items-center justify-center rounded border-2 ${ci === 0 ? "border-midnight" : "border-brass"}`} aria-hidden="true" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Riyadh drop-offs + return card ── */}
      <section className="bg-white py-14 sm:py-20">
        <div className={`${wrap} grid gap-8 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]`}>
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">{c.dropoff.heading}</h2>
            <ul className="mt-6 flex flex-wrap gap-2">
              {c.dropoff.items.map((it) => (
                <li
                  key={it}
                  className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm ${it.startsWith("King Khalid") ? "bg-midnight text-white" : "bg-sand/50 text-ink"}`}
                >
                  {it.startsWith("King Khalid") ? <Plane className="size-4 text-brass" aria-hidden="true" /> : <MapPin className="size-4 text-brass" aria-hidden="true" />}
                  {it}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm leading-relaxed text-ink-soft">
              <RichText text={c.dropoff.note} />
            </p>
          </div>
          <div className="rounded-3xl border-2 border-midnight p-7">
            <div className="flex items-center gap-3 text-sm font-bold text-ink">
              <span>Riyadh</span>
              <ArrowRight className="size-4 text-brass" aria-hidden="true" />
              <span>Jubail</span>
            </div>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-ink">{c.returnTrip.heading}</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              <RichText text={c.returnTrip.text} />
            </p>
          </div>
        </div>
      </section>

      {/* ── Full form ── */}
      <section id="quote-details" className="scroll-mt-32 bg-sand/40 py-14 sm:py-20">
        <div className={`${wrap} grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)] lg:gap-14`}>
          <div className="lg:pt-4">
            <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">{c.form.heading}</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-soft sm:text-base">{c.form.text}</p>
          </div>
          <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-hairline sm:p-8">
            <QuoteForm
              serviceType="Jubail to Riyadh transfer"
              route="Jubail to Riyadh"
              defaultPickup="Jubail"
              defaultDropoff="Riyadh"
              messagePlaceholder={c.form.messagePlaceholder}
              flightField="airport"
            />
          </div>
        </div>
      </section>

      {/* ── Related — one split card ── */}
      <section className="bg-white py-14 sm:py-20">
        <div className={wrap}>
          <div className="grid overflow-hidden rounded-3xl ring-1 ring-hairline md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
            <div className="p-6 sm:p-8">
              <h2 className="text-xl font-bold text-ink">Related routes</h2>
              <ul className="mt-4 divide-y divide-hairline">
                {c.related.routes.map((r) => (
                  <li key={r.href}>
                    <Link href={r.href} className="group flex items-center justify-between gap-4 py-3.5">
                      <span>
                        <span className="block font-semibold text-ink group-hover:text-brass">{r.label}</span>
                        <span className="block text-xs text-ink-muted">{r.text}</span>
                      </span>
                      <ArrowRight className="size-4 shrink-0 text-brass transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-sand/40 p-6 sm:p-8">
              <h2 className="text-xl font-bold text-ink">City taxis</h2>
              <ul className="mt-4 space-y-2">
                {c.related.cities.map((x) => (
                  <li key={x.href}>
                    <Link href={x.href} className="flex items-center gap-3 rounded-xl bg-white p-3.5 ring-1 ring-hairline transition hover:ring-brass">
                      <Car className="size-5 text-brass" aria-hidden="true" />
                      <span>
                        <span className="block font-semibold text-ink">{x.label}</span>
                        <span className="block text-xs text-ink-muted">{x.text}</span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ — grouped (FAQPage JSON-LD) ── */}
      <section className="bg-sand/40 py-14 sm:py-20">
        <div className={wrap}>
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">{c.faqHeading}</h2>
          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            {c.faqGroups.map((g) => (
              <div key={g.title}>
                <h3 className="border-b-2 border-midnight pb-2 text-xs font-bold uppercase tracking-[0.16em] text-ink">{g.title}</h3>
                <div className="mt-4 space-y-2">
                  {faqs.slice(g.range[0], g.range[1]).map((f) => (
                    <details key={f.question} className="group rounded-xl bg-white ring-1 ring-hairline open:ring-midnight/30">
                      <summary className="flex cursor-pointer list-none items-start justify-between gap-3 p-4 text-sm font-semibold text-ink [&::-webkit-details-marker]:hidden">
                        <span>{f.question}</span>
                        <span className="mt-0.5 text-lg leading-none text-brass transition-transform group-open:rotate-45" aria-hidden="true">+</span>
                      </summary>
                      <p className="px-4 pb-4 text-sm leading-relaxed text-ink-soft">{f.answer}</p>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-sm text-ink-soft">
            <h2 className="font-bold text-ink">{c.method.heading}</h2>
            <p className="mt-2 max-w-4xl leading-relaxed">{c.method.text}</p>
            <p className="mt-2 text-xs text-ink-muted">
              Last reviewed <time dateTime={JUBAIL_RIYADH_REVIEWED}>{new Date(`${JUBAIL_RIYADH_REVIEWED}T00:00:00Z`).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" })}</time>
            </p>
          </div>
        </div>
      </section>

      {/* ── Final CTA — two panels ── */}
      <section className="grid md:grid-cols-2">
        <a href="#quote" className="group bg-midnight px-6 py-14 text-white sm:px-12">
          <Send className="size-6 text-brass" aria-hidden="true" />
          <h2 className="mt-4 text-2xl font-bold tracking-tight">{c.finalCta.quote.title}</h2>
          <p className="mt-2 max-w-md text-white/75">{c.finalCta.quote.text}</p>
          <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-brass">
            Start your quote
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </span>
        </a>
        <a href={whatsappLink(c.hero.whatsappMessage)} target="_blank" rel="noopener noreferrer" className="group bg-brass px-6 py-14 text-midnight sm:px-12">
          <MessageCircle className="size-6" aria-hidden="true" />
          <h2 className="mt-4 text-2xl font-bold tracking-tight">{c.finalCta.whatsapp.title}</h2>
          <p className="mt-2 max-w-md text-midnight/80">{c.finalCta.whatsapp.text}</p>
          <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold">
            Open WhatsApp
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </span>
        </a>
      </section>
    </>
  );
}
