import Image from "next/image";
import Link from "next/link";
import {
  Accessibility,
  ArrowRight,
  Car,
  ChevronDown,
  Clock,
  FileText,
  MapPin,
  MessageCircle,
  Mountain,
  RotateCcw,
  Route as RouteIcon,
  Send,
} from "lucide-react";
import { Breadcrumbs, type Crumb } from "@/components/Breadcrumbs";
import { QuoteForm } from "@/components/QuoteForm";
import { ZiyaratPlanner } from "@/components/makkah/ZiyaratPlanner";
import type { Faq } from "@/data/faqs";
import { ZIYARAT as c, ZIYARAT_REVIEWED } from "@/data/makkah-ziyarat-tour";
import { vehicles } from "@/data/vehicles";
import { whatsappLink } from "@/lib/site";

/**
 * /makkah/makkah-ziyarat-tour — its own layout (not PointTransferV2View):
 * photo hero, icon fact strip, loop diagram with measured legs, site cards
 * with base/climb badges, planning factors, a time-budget panel separating
 * measured driving from visiting/climbing, itinerary stop-chains, a vehicle
 * table, an ItemList of individual site pages, a know-before-you-go list,
 * an itinerary builder that feeds the existing QuoteForm, and an image CTA.
 * Copy: data/makkah-ziyarat-tour.ts.
 */

const wrap = "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8";
const factIcons = { tour: RouteIcon, pin: MapPin, mountain: Mountain, clock: Clock, car: Car, quote: FileText, access: Accessibility } as Record<string, typeof Car>;

export function MakkahZiyaratTourView({ faqs, crumbs }: { faqs: Faq[]; crumbs: Crumb[] }) {
  return (
    <>
      {/* ── Hero with verified photo ── */}
      <section className="bg-midnight text-white">
        <div className={`${wrap} pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pt-36`}>
          <Breadcrumbs items={crumbs} onDark />
          <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-center lg:gap-14">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brass">{c.hero.kicker}</p>
              <h1 className="mt-4 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl">{c.hero.h1}</h1>
              <p className="mt-5 text-[15px] leading-relaxed text-white/80 sm:text-base">{c.hero.intro}</p>
              <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                {c.hero.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-white/90">
                    <span className="mt-1.5 size-1.5 shrink-0 rotate-45 bg-brass" aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#planner" className="inline-flex items-center gap-2 rounded-xl bg-brass px-6 py-3.5 text-sm font-bold text-midnight transition-colors hover:bg-brass-soft">
                  <Send className="size-4" />
                  {c.finalCta.primary}
                </a>
                <a
                  href={whatsappLink(c.hero.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-6 py-3.5 text-sm font-semibold transition-colors hover:bg-white hover:text-midnight"
                >
                  <MessageCircle className="size-4" />
                  {c.finalCta.whatsapp}
                </a>
              </div>
            </div>
            <figure className="mx-auto w-full max-w-md rotate-1 rounded-2xl bg-white p-3 pb-4 shadow-2xl lg:max-w-none">
              <Image src={c.hero.image.src} alt={c.hero.image.alt} width={413} height={255} sizes="(min-width: 1024px) 420px, 90vw" className="h-auto w-full rounded-xl" priority />
              <figcaption className="mt-3 text-center text-sm font-semibold text-ink">{c.hero.image.caption}</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* ── At a glance — icon strip ── */}
      <section aria-labelledby="glance" className="border-b border-hairline bg-white py-12 sm:py-14">
        <div className={wrap}>
          <h2 id="glance" className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">{c.glance.heading}</h2>
          <dl className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {c.glance.facts.map((f) => {
              const Icon = factIcons[f.icon] ?? MapPin;
              return (
                <div key={f.label} className="flex gap-3 rounded-xl bg-sand/40 p-4">
                  <Icon className="mt-0.5 size-5 shrink-0 text-brass" aria-hidden="true" />
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-wider text-ink-muted">{f.label}</dt>
                    <dd className="mt-0.5 text-sm font-semibold text-ink">{f.value}</dd>
                  </div>
                </div>
              );
            })}
          </dl>
        </div>
      </section>

      {/* ── Circuit — loop diagram + site cards ── */}
      <section className="bg-sand/40 py-14 sm:py-20">
        <div className={wrap}>
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">{c.circuit.heading}</h2>
          <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-ink-soft sm:text-base">{c.circuit.intro}</p>

          <figure className="mt-8 rounded-3xl bg-white p-5 ring-1 ring-hairline sm:p-7">
            <ol className="flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-0">
              {c.circuit.loop.map((s, i) => (
                <li key={s.name} className="flex items-center gap-2 lg:flex-1 lg:flex-col lg:gap-0">
                  {s.leg && (
                    <span className="order-first ml-3 text-xs font-semibold tabular-nums text-brass lg:order-none lg:ml-0 lg:mb-1" aria-label={`${s.leg} drive`}>
                      +{s.leg}
                    </span>
                  )}
                  <span className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold ${i === 0 ? "bg-midnight text-white" : "bg-sand/60 text-ink"}`}>
                    <span className="flex size-5 items-center justify-center rounded-full bg-brass text-[10px] text-midnight">{i + 1}</span>
                    {s.short}
                  </span>
                </li>
              ))}
            </ol>
            <figcaption className="mt-4 flex items-center gap-2 text-xs text-ink-muted">
              <RotateCcw className="size-3.5 text-brass" aria-hidden="true" />
              {c.circuit.returnLeg}. Road distances, OpenStreetMap routing.
            </figcaption>
          </figure>

          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {c.circuit.sites.map((s) => (
              <li key={s.name} className="flex flex-col rounded-2xl bg-white p-6 ring-1 ring-hairline">
                <div className="flex flex-wrap gap-1.5">
                  {s.badges.map((b) => (
                    <span key={b} className={`rounded-full px-2.5 py-0.5 text-[11px] font-bold ${b.includes("climb") ? "bg-brass/20 text-ink" : "bg-midnight text-white"}`}>
                      {b}
                    </span>
                  ))}
                </div>
                <h3 className="mt-3 text-lg font-bold text-ink">{s.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{s.text}</p>
                {s.href && s.linkLabel && (
                  <Link href={s.href} className="mt-4 inline-flex items-center gap-1 self-start text-sm font-semibold text-midnight underline decoration-brass decoration-2 underline-offset-4 hover:text-brass">
                    {s.linkLabel}
                    <ArrowRight className="size-3.5" aria-hidden="true" />
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Planning factors ── */}
      <section className="bg-white py-14 sm:py-20">
        <div className={wrap}>
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">{c.planning.heading}</h2>
          <p className="mt-4 text-[15px] text-ink-soft sm:text-base">{c.planning.intro}</p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {c.planning.factors.map((f, i) => (
              <li key={f.title} className="rounded-2xl border border-hairline p-5">
                <span className="text-xs font-bold tabular-nums text-brass">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-1 font-bold text-ink">{f.title}</h3>
                <p className="mt-1 text-sm text-ink-soft">{f.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Timing — time budget ── */}
      <section className="bg-midnight py-14 text-white sm:py-20">
        <div className={wrap}>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{c.timing.heading}</h2>
          <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-white/75">{c.timing.intro}</p>
          <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
            <ul className="space-y-3">
              {c.timing.parts.map((p) => (
                <li key={p.label} className="grid gap-1 rounded-2xl bg-white/[0.06] p-5 ring-1 ring-white/10 sm:grid-cols-[11rem_1fr] sm:gap-5">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-brass">{p.label}</p>
                    <span className={`mt-1.5 inline-block rounded px-1.5 py-0.5 text-[10px] font-bold uppercase ${p.measured ? "bg-brass text-midnight" : "bg-white/15 text-white/80"}`}>
                      {p.measured ? "Measured" : "Depends on you"}
                    </span>
                  </div>
                  <div>
                    <p className="font-bold">{p.value}</p>
                    <p className="mt-1 text-sm text-white/70">{p.note}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="rounded-2xl bg-white p-6 text-ink">
              <h3 className="font-bold">{c.timing.legsTitle}</h3>
              <table className="mt-4 w-full text-sm">
                <caption className="sr-only">{c.timing.legsTitle}</caption>
                <tbody className="divide-y divide-hairline">
                  {c.timing.legs.map((l) => (
                    <tr key={l.from + l.to}>
                      <td className="py-2.5 text-ink-soft">
                        {l.from} <ArrowRight className="inline size-3 text-brass" aria-label="to" /> {l.to}
                      </td>
                      <td className="py-2.5 text-right font-semibold tabular-nums">{l.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="mt-4 text-xs text-ink-muted">{c.timing.note}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Suggested itineraries — stop chains ── */}
      <section className="bg-sand/40 py-14 sm:py-20">
        <div className={wrap}>
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">{c.itineraries.heading}</h2>
          <p className="mt-4 max-w-3xl text-[15px] text-ink-soft sm:text-base">{c.itineraries.intro}</p>
          <ul className="mt-8 space-y-3">
            {c.itineraries.items.map((it) => (
              <li key={it.title} className="grid gap-4 rounded-2xl bg-white p-5 ring-1 ring-hairline sm:p-6 lg:grid-cols-[13rem_minmax(0,1fr)]">
                <div>
                  <h3 className="text-lg font-bold text-ink">{it.title}</h3>
                  <span className="mt-1 inline-block rounded-full bg-midnight px-2.5 py-0.5 text-xs font-semibold text-white">{it.tag}</span>
                </div>
                <div>
                  <ol className="flex flex-wrap items-center gap-1.5">
                    {it.stops.map((s, i) => (
                      <li key={s} className="flex items-center gap-1.5">
                        <span className="rounded-lg bg-sand/60 px-2.5 py-1 text-sm text-ink">{s}</span>
                        {i < it.stops.length - 1 && <ArrowRight className="size-3.5 text-brass" aria-hidden="true" />}
                      </li>
                    ))}
                  </ol>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">{it.note}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Vehicles — light table ── */}
      <section id="vehicles" className="scroll-mt-32 bg-white py-14 sm:py-20">
        <div className={wrap}>
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">{c.vehicles.heading}</h2>
          <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-ink-soft sm:text-base">{c.vehicles.intro}</p>
          <div className="mt-8 overflow-x-auto rounded-2xl ring-1 ring-hairline">
            <table className="w-full min-w-[620px] text-left text-sm">
              <caption className="sr-only">Vehicle classes for a Makkah Ziyarat tour</caption>
              <thead className="bg-sand/50 text-xs uppercase tracking-wider text-ink-muted">
                <tr>
                  <th scope="col" className="px-5 py-3 font-semibold">Vehicle</th>
                  <th scope="col" className="px-5 py-3 font-semibold">Seats</th>
                  <th scope="col" className="px-5 py-3 font-semibold">Bags</th>
                  <th scope="col" className="px-5 py-3 font-semibold">Good for</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-hairline">
                {vehicles.map((v) => (
                  <tr key={v.id}>
                    <th scope="row" className="px-5 py-3.5">
                      <span className="block font-bold text-ink">{v.name}</span>
                      <span className="block text-xs font-normal text-ink-muted">{v.examples}</span>
                    </th>
                    <td className="whitespace-nowrap px-5 py-3.5 text-ink">{v.passengers}</td>
                    <td className="whitespace-nowrap px-5 py-3.5 text-ink">{v.luggage}</td>
                    <td className="px-5 py-3.5 text-ink-soft">{c.vehicles.fit[v.id] ?? v.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-ink-muted">{c.vehicles.footnote}</p>
        </div>
      </section>

      {/* ── Individual site pages (ItemList) ── */}
      <section className="bg-sand/40 py-14 sm:py-20">
        <div className={wrap}>
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">{c.sitePages.heading}</h2>
          <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-ink-soft sm:text-base">{c.sitePages.intro}</p>
          <ol className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {c.sitePages.links.map((l, i) => (
              <li key={l.href}>
                <Link href={l.href} className="group flex h-full items-center gap-4 rounded-2xl bg-white p-5 ring-1 ring-hairline transition hover:ring-brass">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-midnight text-sm font-bold text-brass">{i + 1}</span>
                  <span className="flex-1 font-semibold text-ink">{l.label}</span>
                  <ArrowRight className="size-4 text-brass transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Know before booking + steps ── */}
      <section className="bg-white py-14 sm:py-20">
        <div className={wrap}>
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">{c.know.heading}</h2>
          <dl className="mt-8 grid gap-x-10 gap-y-6 md:grid-cols-2">
            {c.know.items.map((k) => (
              <div key={k.title} className="border-l-4 border-brass pl-4">
                <dt className="font-bold text-ink">{k.title}</dt>
                <dd className="mt-1 text-sm leading-relaxed text-ink-soft">{k.text}</dd>
              </div>
            ))}
          </dl>
          <h2 className="mt-14 text-2xl font-bold tracking-tight text-ink sm:text-3xl">{c.booking.heading}</h2>
          <ol className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {c.booking.steps.map((s, i) => (
              <li key={s} className="rounded-2xl bg-midnight p-5 text-white">
                <span className="text-3xl font-bold text-brass">{i + 1}</span>
                <p className="mt-2 text-sm font-semibold">{s}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Planner + full form ── */}
      <section id="planner" className="scroll-mt-32 bg-sand/40 py-14 sm:py-20">
        <div className={wrap}>
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">{c.planner.heading}</h2>
          <p className="mt-4 text-[15px] text-ink-soft sm:text-base">{c.planner.intro}</p>
          <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:items-start">
            <ZiyaratPlanner durations={c.planner.durations} whatsappIntro={c.hero.whatsappMessage} />
            <div id="quote-details" className="rounded-3xl bg-white p-5 ring-1 ring-hairline sm:p-8">
              <QuoteForm
                serviceType="Makkah Ziyarat tour"
                route="Makkah Ziyarat tour"
                defaultDropoff="Ziyarat tour – return to pickup point"
                messagePlaceholder={c.planner.messagePlaceholder}
                flightField="airport"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Related services ── */}
      <section className="bg-white py-12">
        <div className={wrap}>
          <h2 className="text-xl font-bold text-ink">{c.related.heading}</h2>
          <ul className="mt-4 grid gap-3 md:grid-cols-3">
            {c.related.links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="flex h-full items-start justify-between gap-3 rounded-xl p-4 ring-1 ring-hairline transition hover:ring-brass">
                  <span>
                    <span className="block font-semibold text-ink">{l.label}</span>
                    <span className="block text-xs text-ink-muted">{l.text}</span>
                  </span>
                  <ArrowRight className="mt-1 size-4 shrink-0 text-brass" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── FAQ (FAQPage JSON-LD) ── */}
      <section className="bg-sand/40 py-14 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-center text-3xl font-bold tracking-tight text-ink sm:text-4xl">{c.faqHeading}</h2>
          <div className="mt-10 divide-y divide-hairline overflow-hidden rounded-2xl bg-white ring-1 ring-hairline">
            {faqs.map((f, i) => (
              <details key={f.question} className="group" open={i === 0}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-semibold text-ink hover:bg-sand/20 [&::-webkit-details-marker]:hidden">
                  <span className="text-[15px]">{f.question}</span>
                  <ChevronDown className="size-5 shrink-0 text-brass transition-transform group-open:rotate-180" aria-hidden="true" />
                </summary>
                <p className="px-5 pb-5 text-sm leading-relaxed text-ink-soft sm:text-[15px]">{f.answer}</p>
              </details>
            ))}
          </div>
          <div className="mt-10 text-sm text-ink-soft">
            <h2 className="font-bold text-ink">{c.method.heading}</h2>
            <p className="mt-2 leading-relaxed">{c.method.text}</p>
            <p className="mt-2 text-xs text-ink-muted">
              Last reviewed <time dateTime={ZIYARAT_REVIEWED}>{new Date(`${ZIYARAT_REVIEWED}T00:00:00Z`).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" })}</time>
            </p>
          </div>
        </div>
      </section>

      {/* ── Final CTA — image band ── */}
      <section className="relative overflow-hidden bg-midnight text-white">
        <Image src={c.hero.image.src} alt="" width={413} height={255} sizes="100vw" className="absolute inset-0 size-full object-cover opacity-20" aria-hidden="true" />
        <div className={`relative ${wrap} py-16 text-center sm:py-20`}>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{c.finalCta.heading}</h2>
          <p className="mx-auto mt-3 max-w-xl text-white/80">{c.finalCta.text}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="#planner" className="inline-flex items-center gap-2 rounded-xl bg-brass px-6 py-3.5 text-sm font-bold text-midnight transition-colors hover:bg-brass-soft">
              <Send className="size-4" />
              {c.finalCta.primary}
            </a>
            <a
              href={whatsappLink(c.hero.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/40 px-6 py-3.5 text-sm font-semibold transition-colors hover:bg-white hover:text-midnight"
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
