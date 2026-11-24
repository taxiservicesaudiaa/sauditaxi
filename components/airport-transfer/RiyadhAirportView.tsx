import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Accessibility,
  ArrowRight,
  Baby,
  Bus,
  Car,
  CarFront,
  CircleCheck,
  FileText,
  HeartHandshake,
  Luggage,
  MapPin,
  MessageCircle,
  Plane,
  Send,
  Users,
} from "lucide-react";
import { Breadcrumbs, type Crumb } from "@/components/Breadcrumbs";
import { QuoteForm } from "@/components/QuoteForm";
import { SwapQuotePanel } from "@/components/airport-transfer/SwapQuotePanel";
import type { Faq } from "@/data/faqs";
import { RUH_PAGE as c, RUH_PAGE_REVIEWED } from "@/data/riyadh-airport-page";
import { vehicles } from "@/data/vehicles";
import { whatsappLink } from "@/lib/site";

/**
 * /airport-transfer/riyadh-airport — its own airport-focused layout (the other
 * 12 airport pages keep components/airport-transfer/AirportTransferHub.tsx).
 * Copy: data/riyadh-airport-page.ts.
 */

const wrap = "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8";
const linkCls = "font-semibold text-midnight underline decoration-brass decoration-2 underline-offset-4 hover:text-brass";

function RichText({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\]\(\/[^)\s]*\))/g);
  return (
    <>
      {parts.map((part, i) => {
        const m = part.match(/^\[([^\]]+)\]\((\/[^)\s]*)\)$/);
        if (!m) return <Fragment key={i}>{part}</Fragment>;
        return (
          <Link key={i} href={m[2]} className={linkCls}>
            {m[1]}
          </Link>
        );
      })}
    </>
  );
}

/** Sketch: airport north of the city centre (not to scale). */
function NorthSketch() {
  return (
    <svg viewBox="0 0 200 240" role="img" aria-labelledby="ruh-sketch-title" className="h-full w-full">
      <title id="ruh-sketch-title">Sketch: King Khalid International Airport lies north of central Riyadh, about 35 km by road</title>
      <rect width="200" height="240" rx="16" fill="#0b1726" />
      <g stroke="#ffffff" strokeOpacity="0.06">
        {Array.from({ length: 9 }).map((_, i) => (
          <line key={`h${i}`} x1="0" x2="200" y1={i * 30} y2={i * 30} />
        ))}
        {Array.from({ length: 7 }).map((_, i) => (
          <line key={`v${i}`} y1="0" y2="240" x1={i * 33} x2={i * 33} />
        ))}
      </g>
      <text x="176" y="30" fill="#c8a96b" fontSize="14" fontWeight="700" textAnchor="middle">N</text>
      <path d="M176 36 L171 48 L176 45 L181 48 Z" fill="#c8a96b" />
      <path d="M100 62 C110 110 92 140 100 182" fill="none" stroke="#c8a96b" strokeWidth="2.5" strokeDasharray="2 7" strokeLinecap="round" />
      <circle cx="100" cy="56" r="13" fill="#c8a96b" />
      <path d="M94 57 L106 51 L104 56 L106 61 Z" fill="#0b1726" />
      <text x="122" y="52" fill="#ffffff" fontSize="12" fontWeight="700">RUH</text>
      <text x="122" y="66" fill="#ffffff" fillOpacity="0.6" fontSize="9">airport</text>
      <text x="40" y="126" fill="#c8a96b" fontSize="11" fontWeight="700">≈35 km</text>
      <circle cx="100" cy="190" r="26" fill="#ffffff" fillOpacity="0.08" stroke="#ffffff" strokeOpacity="0.35" />
      <circle cx="100" cy="190" r="5" fill="#ffffff" />
      <text x="100" y="230" fill="#ffffff" fontSize="11" fontWeight="700" textAnchor="middle">Central Riyadh</text>
    </svg>
  );
}

const stepIcons = { plane: Plane, file: FileText, check: CircleCheck, pin: MapPin, car: Car } as Record<string, typeof Car>;
const familyIcons = { users: Users, baby: Baby, heart: HeartHandshake, luggage: Luggage, bus: Bus, access: Accessibility } as Record<string, typeof Car>;
const vehicleIcon: Record<string, typeof Car> = { suv: CarFront, van: Bus, minibus: Bus };

export function RiyadhAirportView({ faqs, crumbs, routeLabels }: { faqs: Faq[]; crumbs: Crumb[]; routeLabels: Record<string, boolean> }) {
  const airportParam = encodeURIComponent(c.panel.airportLabel);

  return (
    <>
      {/* ── Hero: RUH monogram + swap panel ── */}
      <section className="relative overflow-hidden bg-midnight text-white">
        <span
          className="pointer-events-none absolute -right-6 bottom-0 select-none text-[11rem] font-black leading-none tracking-tighter text-transparent [-webkit-text-stroke:2px_rgba(200,169,107,0.22)] sm:text-[16rem] lg:text-[22rem]"
          aria-hidden="true"
        >
          RUH
        </span>
        <div className={`relative ${wrap} pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pt-36`}>
          <Breadcrumbs items={crumbs} onDark />
          <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-center lg:gap-14">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold tracking-wide text-brass">
                <Plane className="size-3.5 -rotate-45" aria-hidden="true" />
                {c.hero.kicker}
              </p>
              <h1 className="mt-5 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl">{c.hero.h1}</h1>
              {c.hero.intro.map((p) => (
                <p key={p} className="mt-4 max-w-2xl text-[15px] leading-relaxed text-white/80 sm:text-base">
                  {p}
                </p>
              ))}
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#quote-details" className="inline-flex items-center gap-2 rounded-xl bg-brass px-6 py-3.5 text-sm font-bold text-midnight transition-colors hover:bg-brass-soft">
                  <Send className="size-4" />
                  {c.hero.ctaPrimary}
                </a>
                <a
                  href={whatsappLink(c.hero.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-6 py-3.5 text-sm font-semibold transition-colors hover:bg-white hover:text-midnight"
                >
                  <MessageCircle className="size-4" />
                  {c.hero.ctaWhatsapp}
                </a>
              </div>
            </div>
            <div id="quote" className="scroll-mt-32">
              <SwapQuotePanel title={c.panel.title} airportLabel={c.panel.airportLabel} note={c.panel.note} />
            </div>
          </div>
        </div>
      </section>

      {/* ── Airport ID card + north sketch ── */}
      <section aria-labelledby="essentials" className="bg-offwhite py-14 sm:py-20">
        <div className={`${wrap} grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-center lg:gap-14`}>
          <div>
            <h2 id="essentials" className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">{c.essentials.heading}</h2>
            <div className="mt-8 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-hairline">
              <div className="flex items-center justify-between bg-midnight px-5 py-3">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-brass">Airport ID</span>
                <span className="rounded bg-brass px-2 py-0.5 text-xs font-black tracking-widest text-midnight">RUH</span>
              </div>
              <dl className="divide-y divide-hairline">
                {c.essentials.card.map((r) => (
                  <div key={r.k} className="grid grid-cols-[7.5rem_1fr] gap-4 px-5 py-3.5 text-sm sm:grid-cols-[9rem_1fr]">
                    <dt className="font-semibold text-ink-muted">{r.k}</dt>
                    <dd className="font-semibold text-ink">{r.v}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="mt-6 space-y-3 text-[15px] leading-relaxed text-ink-soft">
              {c.essentials.text.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <p className="mt-3 text-xs text-ink-muted">{c.essentials.note}</p>
          </div>
          <figure className="mx-auto w-full max-w-[17rem]">
            <div className="aspect-[200/240] overflow-hidden rounded-2xl shadow-lg">
              <NorthSketch />
            </div>
            <figcaption className="mt-2 text-center text-xs text-ink-muted">Sketch, not to scale.</figcaption>
          </figure>
        </div>
      </section>

      {/* ── How pickup works — 5 steps ── */}
      <section className="bg-midnight py-14 text-white sm:py-20">
        <div className={wrap}>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{c.pickup.heading}</h2>
          <p className="mt-4 max-w-2xl text-[15px] text-white/75">{c.pickup.intro}</p>
          <ol className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {c.pickup.steps.map((s, i) => {
              const Icon = stepIcons[s.icon] ?? CircleCheck;
              const hi = "highlight" in s && s.highlight;
              return (
                <li key={s.title} className={`relative rounded-2xl p-5 ${hi ? "bg-brass text-midnight" : "bg-white/[0.06] ring-1 ring-white/10"}`}>
                  <div className="flex items-center justify-between">
                    <Icon className={`size-6 ${hi ? "text-midnight" : "text-brass"}`} aria-hidden="true" />
                    <span className={`text-xs font-bold tabular-nums ${hi ? "text-midnight/70" : "text-white/50"}`}>{i + 1}/5</span>
                  </div>
                  <h3 className="mt-4 font-bold">{s.title}</h3>
                  <p className={`mt-1.5 text-sm leading-relaxed ${hi ? "text-midnight/80" : "text-white/70"}`}>{s.text}</p>
                  {hi && <span className="mt-3 inline-block rounded-full bg-midnight px-2.5 py-0.5 text-[11px] font-bold text-brass">Confirmed in your quotation</span>}
                </li>
              );
            })}
          </ol>
          <p className="mt-6 max-w-3xl text-sm text-white/75">{c.pickup.changes}</p>
        </div>
      </section>

      {/* ── Airport-origin routes ── */}
      <section className="bg-white py-14 sm:py-20">
        <div className={wrap}>
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">{c.routes.heading}</h2>
          <p className="mt-4 text-[15px] text-ink-soft sm:text-base">{c.routes.intro}</p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {c.routes.cards
              .filter((r) => routeLabels[r.slug])
              .map((r) => (
                <li key={r.slug}>
                  <Link href={`/routes/${r.slug}`} className="group flex h-full items-center gap-4 rounded-2xl bg-offwhite p-5 ring-1 ring-hairline transition hover:ring-brass">
                    <span className="rounded-lg bg-midnight px-2.5 py-1.5 text-sm font-black tracking-widest text-brass">RUH</span>
                    <ArrowRight className="size-4 shrink-0 text-brass" aria-hidden="true" />
                    <span className="flex-1">
                      <span className="block text-lg font-bold text-ink">{r.to}</span>
                      <span className="block text-sm text-ink-soft">{r.text}</span>
                    </span>
                    <ArrowRight className="size-4 shrink-0 text-ink-muted transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            {routeLabels[c.routes.dropoff.slug] && (
              <li className="sm:col-span-2">
                <Link href={`/routes/${c.routes.dropoff.slug}`} className="flex items-center justify-between gap-4 rounded-2xl border-2 border-dashed border-brass/50 p-5 transition hover:border-brass">
                  <span>
                    <span className="block font-bold text-ink">{c.routes.dropoff.label}</span>
                    <span className="block text-sm text-ink-soft">{c.routes.dropoff.text}</span>
                  </span>
                  <ArrowRight className="size-4 shrink-0 text-brass" aria-hidden="true" />
                </Link>
              </li>
            )}
          </ul>
          <p className="mt-5 text-sm text-ink-soft">{c.routes.note}</p>
        </div>
      </section>

      {/* ── Districts: KAFD photo + distance table ── */}
      <section className="bg-offwhite py-14 sm:py-20">
        <div className={`${wrap} grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-14`}>
          <figure className="mx-auto w-full max-w-sm lg:max-w-none">
            <Image
              src={c.districts.image.src}
              alt={c.districts.image.alt}
              width={1920}
              height={2560}
              sizes="(min-width: 1024px) 380px, 90vw"
              className="h-auto w-full rounded-2xl object-cover shadow-md lg:max-h-[34rem]"
            />
            <figcaption className="mt-2 text-xs text-ink-muted">{c.districts.image.caption}</figcaption>
          </figure>
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">{c.districts.heading}</h2>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-soft sm:text-base">
              {c.districts.text.map((p) => (
                <p key={p}>
                  <RichText text={p} />
                </p>
              ))}
            </div>
            <div className="mt-8 overflow-hidden rounded-2xl bg-white ring-1 ring-hairline">
              <table className="w-full text-left text-sm">
                <caption className="bg-sand/50 px-5 py-3 text-left text-xs font-bold uppercase tracking-wider text-ink">{c.districts.tableTitle}</caption>
                <thead className="sr-only">
                  <tr>
                    <th scope="col">Destination</th>
                    <th scope="col">Distance</th>
                    <th scope="col">Drive in clear traffic</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-hairline">
                  {c.districts.rows.map((r) => (
                    <tr key={r.place}>
                      <th scope="row" className="px-5 py-3 font-semibold text-ink">{r.place}</th>
                      <td className="px-5 py-3 tabular-nums text-ink-soft">{r.km}</td>
                      <td className="px-5 py-3 tabular-nums text-ink-soft">{r.min}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs leading-relaxed text-ink-muted">{c.districts.tableNote}</p>
          </div>
        </div>
      </section>

      {/* ── Families & special requirements ── */}
      <section className="bg-white py-14 sm:py-20">
        <div className={wrap}>
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">{c.families.heading}</h2>
          <p className="mt-4 text-[15px] text-ink-soft sm:text-base">{c.families.intro}</p>
          <ul className="mt-8 grid grid-cols-2 gap-3 lg:grid-cols-3">
            {c.families.items.map((f) => {
              const Icon = familyIcons[f.icon] ?? Users;
              return (
                <li key={f.title} className="rounded-2xl border border-hairline p-5">
                  <span className="flex size-10 items-center justify-center rounded-full bg-sand text-midnight">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-3 font-bold text-ink">{f.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-soft">{f.text}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* ── Vehicles with quote actions ── */}
      <section id="vehicles" className="scroll-mt-32 bg-sand/40 py-14 sm:py-20">
        <div className={wrap}>
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">{c.vehicles.heading}</h2>
          <p className="mt-4 text-[15px] text-ink-soft sm:text-base">{c.vehicles.intro}</p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {vehicles.map((v) => {
              const Icon = vehicleIcon[v.id] ?? Car;
              const pax = c.vehicles.passengerParam[v.id] ?? "2";
              return (
                <li key={v.id} className="flex flex-col rounded-2xl bg-white p-5 shadow-sm ring-1 ring-hairline">
                  <div className="flex items-center gap-3">
                    <Icon className="size-7 text-brass" aria-hidden="true" />
                    <div>
                      <h3 className="font-bold text-ink">{v.name}</h3>
                      <p className="text-xs text-ink-muted">{v.examples}</p>
                    </div>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-2 text-center">
                    <div className="rounded-xl bg-offwhite py-2">
                      <p className="text-lg font-black text-midnight">{v.passengers.replace(" passengers", "")}</p>
                      <p className="text-[11px] uppercase tracking-wider text-ink-muted">people</p>
                    </div>
                    <div className="rounded-xl bg-offwhite py-2">
                      <p className="text-lg font-black text-midnight">{v.luggage.replace(" bags", "")}</p>
                      <p className="text-[11px] uppercase tracking-wider text-ink-muted">{/^\d/.test(v.luggage) ? "bags" : "luggage"}</p>
                    </div>
                  </div>
                  <p className="mt-3 flex-1 text-sm text-ink-soft">{c.vehicles.fit[v.id] ?? v.description}</p>
                  <Link
                    href={`/get-quote?pickup=${airportParam}&passengers=${encodeURIComponent(pax)}`}
                    className="mt-4 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-midnight underline decoration-brass decoration-2 underline-offset-4 hover:text-brass"
                    aria-label={`${c.vehicles.cta}: ${v.name}`}
                  >
                    {c.vehicles.cta}
                    <ArrowRight className="size-3.5" aria-hidden="true" />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* ── Onward & alternative airports ── */}
      <section className="bg-white py-14 sm:py-20">
        <div className={`${wrap} grid gap-10 lg:grid-cols-2 lg:gap-14`}>
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">{c.onward.heading}</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-soft sm:text-base">{c.onward.text}</p>
            <p className="mt-6 text-[15px] leading-relaxed text-ink-soft">
              <RichText text={c.onward.umrah} />
            </p>
          </div>
          <div>
            <ul className="space-y-2">
              {c.onward.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="flex items-center justify-between gap-4 rounded-xl p-4 ring-1 ring-hairline transition hover:bg-offwhite hover:ring-brass">
                    <span>
                      <span className="block font-semibold text-ink">{l.label}</span>
                      <span className="block text-xs text-ink-muted">{l.note}</span>
                    </span>
                    <ArrowRight className="size-4 shrink-0 text-brass" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap gap-2">
              {c.onward.airports.map((a) => (
                <Link key={a.href} href={a.href} className="inline-flex items-center gap-1.5 rounded-full bg-midnight px-4 py-2 text-sm font-semibold text-white transition hover:bg-midnight-soft">
                  <Plane className="size-3.5 -rotate-45 text-brass" aria-hidden="true" />
                  {a.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── How to book ── */}
      <section className="bg-offwhite py-14 sm:py-16">
        <div className={wrap}>
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">{c.booking.heading}</h2>
          <ol className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {c.booking.steps.map((s, i) => (
              <li key={s} className="flex items-center gap-4 rounded-2xl bg-white p-5 ring-1 ring-hairline">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-midnight text-sm font-bold text-brass">{i + 1}</span>
                <span className="font-semibold text-ink">{s}</span>
              </li>
            ))}
          </ol>
          <p className="mt-5 rounded-xl border-l-4 border-brass bg-white px-5 py-4 text-sm font-medium text-ink">{c.booking.note}</p>
        </div>
      </section>

      {/* ── Full form ── */}
      <section id="quote-details" className="scroll-mt-32 bg-white py-14 sm:py-20">
        <div className={`${wrap} grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.3fr)] lg:gap-14`}>
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">{c.form.heading}</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-soft sm:text-base">{c.form.text}</p>
          </div>
          <div className="rounded-2xl bg-offwhite p-5 ring-1 ring-hairline sm:p-8">
            <QuoteForm
              serviceType="Riyadh airport transfer"
              route="King Khalid International Airport (RUH)"
              defaultPickup={c.panel.airportLabel}
              messagePlaceholder={c.form.messagePlaceholder}
            />
          </div>
        </div>
      </section>

      {/* ── FAQ (FAQPage JSON-LD) ── */}
      <section className="bg-sand/40 py-14 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">{c.faqHeading}</h2>
          <div className="mt-8 space-y-2">
            {faqs.map((f) => (
              <details key={f.question} className="group rounded-xl bg-white ring-1 ring-hairline open:ring-midnight/40">
                <summary className="flex cursor-pointer list-none items-center gap-3 p-4 font-semibold text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass/50 [&::-webkit-details-marker]:hidden">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-midnight text-xs text-brass transition-transform group-open:rotate-90" aria-hidden="true">
                    ›
                  </span>
                  <span className="text-[15px]">{f.question}</span>
                </summary>
                <p className="px-4 pb-4 pl-13 text-sm leading-relaxed text-ink-soft sm:text-[15px]">{f.answer}</p>
              </details>
            ))}
          </div>
          <div className="mt-10 text-sm text-ink-soft">
            <h2 className="font-bold text-ink">{c.method.heading}</h2>
            <p className="mt-2 leading-relaxed">{c.method.text}</p>
            <p className="mt-2 text-xs text-ink-muted">
              Last reviewed <time dateTime={RUH_PAGE_REVIEWED}>{new Date(`${RUH_PAGE_REVIEWED}T00:00:00Z`).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" })}</time>
            </p>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="relative overflow-hidden bg-midnight text-white">
        <span
          className="pointer-events-none absolute -left-4 -top-6 select-none text-[9rem] font-black leading-none text-transparent [-webkit-text-stroke:2px_rgba(200,169,107,0.15)] sm:text-[13rem]"
          aria-hidden="true"
        >
          RUH
        </span>
        <div className={`relative ${wrap} py-16 text-center sm:py-20`}>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{c.finalCta.heading}</h2>
          <p className="mx-auto mt-3 max-w-2xl text-white/80">{c.finalCta.text}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="#quote-details" className="inline-flex items-center gap-2 rounded-xl bg-brass px-6 py-3.5 text-sm font-bold text-midnight transition-colors hover:bg-brass-soft">
              <Send className="size-4" />
              {c.hero.ctaPrimary}
            </a>
            <a
              href={whatsappLink(c.hero.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-6 py-3.5 text-sm font-semibold transition-colors hover:bg-white hover:text-midnight"
            >
              <MessageCircle className="size-4" />
              {c.hero.ctaWhatsapp}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
