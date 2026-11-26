import Image from "next/image";
import Link from "next/link";
import { AlertCircle, ArrowRight, Baby, Building2, ChevronDown, Compass, Hotel, MapPin, MessageCircle, Plane, Send, Users } from "lucide-react";
import { Breadcrumbs, type Crumb } from "@/components/Breadcrumbs";
import { QuoteForm } from "@/components/QuoteForm";
import type { Faq } from "@/data/faqs";
import { RIYADH as c, RIYADH_PHOTOS as P, type RiyadhPhoto } from "@/data/riyadh-city-page";
import { whatsappLink } from "@/lib/site";

/**
 * /taxi-service/riyadh — "capital grid" layout: a full-bleed skyline hero with
 * a facts ledger, the city introduction, an airport panel with a distance
 * ladder and status notice, three business-district photo cards, intercity
 * route cards, hotel and Diriyah panels, families/groups, a grouped pickup
 * board, a compass of regional links, booking steps with the shared
 * QuoteForm and FAQs. Photo credits are listed on /image-credits.
 * Copy: data/riyadh-city-page.ts.
 */

const WA = "Hello! I'd like a quotation for a private transfer in Riyadh.";
const NIGHT = "#14213d";
const SAND = "#c8a46a";
const GROUP_ICONS = [Users, Users, Baby];

function Head({ id, kicker, title, intro, light = false }: { id: string; kicker: string; title: string; intro?: string; light?: boolean }) {
  return (
    <header className="max-w-3xl">
      <p className={`text-xs font-bold uppercase tracking-[0.18em] ${light ? "text-amber-200" : "text-brass"}`}>{kicker}</p>
      <h2 id={id} className={`mt-2 text-2xl font-bold tracking-tight sm:text-3xl ${light ? "text-white" : "text-ink"}`}>
        {title}
      </h2>
      {intro ? <p className={`mt-3 text-[17px] leading-relaxed ${light ? "text-white/80" : "text-ink-soft"}`}>{intro}</p> : null}
    </header>
  );
}

function Photo({ p, ratio, sizes, priority = false }: { p: RiyadhPhoto; ratio: string; sizes: string; priority?: boolean }) {
  return (
    <div className={`relative w-full overflow-hidden ${ratio}`}>
      <Image src={p.src} alt={p.alt} fill sizes={sizes} priority={priority} className="object-cover" />
    </div>
  );
}

export function RiyadhCityView({ faqs, crumbs }: { faqs: Faq[]; crumbs: Crumb[] }) {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative isolate overflow-hidden text-white" style={{ background: NIGHT }}>
        <Image src={P.skyline.src} alt={P.skyline.alt} fill priority sizes="100vw" className="-z-10 object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#14213d]/95 via-[#14213d]/75 to-[#14213d]/25" />
        <div className="mx-auto max-w-6xl px-4 pb-12 pt-28 sm:px-6 sm:pt-32 lg:px-8 lg:pb-16 lg:pt-36">
          <Breadcrumbs items={crumbs} onDark />
          <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-amber-200">{c.hero.kicker}</p>
          <h1 className="mt-3 max-w-2xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl">{c.hero.h1}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/90">{c.hero.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#quote" className="inline-flex items-center gap-2 rounded-full bg-brass px-6 py-3 text-sm font-bold text-midnight transition hover:bg-white">
              <Send className="size-4" aria-hidden="true" /> Get a Riyadh Quote
            </a>
            <Link href="/city-transfers" className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold transition hover:border-brass hover:text-brass">
              City transfers overview <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
          <dl className="mt-10 grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-2xl bg-white/20 lg:grid-cols-4">
            {c.facts.map((f) => (
              <div key={f.k} className="bg-[#14213d]/85 px-4 py-3">
                <dt className="text-[11px] uppercase tracking-wider text-white/60">{f.k}</dt>
                <dd className="mt-1 text-sm font-semibold sm:text-base">{f.v}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-3 text-xs text-white/60">{P.skyline.caption}</p>
        </div>
      </section>

      {/* ── Intro ── */}
      <section aria-labelledby="intro-h" className="bg-offwhite py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Head id="intro-h" kicker="Private transfers in Riyadh" title={c.intro.heading} />
          <div className="mt-2 grid gap-x-12 lg:grid-cols-2">
            {c.intro.paragraphs.map((p) => (
              <p key={p.slice(0, 24)} className="mt-4 text-[17px] leading-relaxed text-ink-soft">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ── Airport ── */}
      <section aria-labelledby="airport-h" className="py-16 text-white" style={{ background: NIGHT }}>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-[1.2fr_1fr] lg:px-8">
          <div>
            <Head id="airport-h" kicker="King Khalid International Airport" title={c.airport.heading} light />
            {c.airport.paragraphs.map((p) => (
              <p key={p.slice(0, 24)} className="mt-4 text-[17px] leading-relaxed text-white/85">
                {p}
              </p>
            ))}
            <p className="mt-5 flex gap-3 rounded-2xl bg-white/10 p-4 text-sm leading-relaxed text-white/90">
              <AlertCircle className="mt-0.5 size-5 shrink-0 text-amber-200" aria-hidden="true" /> {c.airport.notice}
            </p>
            <Link href={c.airport.link.href} className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-ink transition hover:bg-brass">
              <Plane className="size-4" aria-hidden="true" /> {c.airport.link.label}
            </Link>
          </div>
          <div>
            <div className="overflow-hidden rounded-2xl">
              <Photo p={P.airport} ratio="aspect-[16/10]" sizes="(min-width: 1024px) 42vw, 100vw" />
            </div>
            <p className="mt-2 text-xs text-white/60">{P.airport.caption}</p>
            <h3 className="mt-6 text-sm font-bold uppercase tracking-wider text-amber-200">From RUH by road</h3>
            <ol className="mt-3 space-y-2">
              {c.airport.distances.map((d) => (
                <li key={d.to} className="flex items-center justify-between gap-4 border-b border-white/10 pb-2 text-sm">
                  <span className="text-white/90">{d.to}</span>
                  <span className="font-mono text-amber-200">{d.km}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ── Business ── */}
      <section aria-labelledby="biz-h" className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Head id="biz-h" kicker="Business and corporate travel" title={c.business.heading} intro={c.business.intro} />
          <ul className="mt-8 grid gap-5 md:grid-cols-3">
            {c.business.districts.map((d) => (
              <li key={d.name} className="overflow-hidden rounded-2xl bg-offwhite ring-1 ring-hairline">
                <Photo p={P[d.photo]} ratio="aspect-[4/3]" sizes="(min-width: 768px) 32vw, 100vw" />
                <div className="p-5">
                  <h3 className="flex items-center gap-2 font-bold text-ink">
                    <Building2 className="size-4 text-brass" aria-hidden="true" /> {d.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{d.text}</p>
                  <p className="mt-3 text-xs text-ink-muted">{P[d.photo].caption}</p>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-3xl text-[17px] leading-relaxed text-ink-soft">{c.business.text}</p>
        </div>
      </section>

      {/* ── Intercity cards ── */}
      <section aria-labelledby="inter-h" className="bg-offwhite py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Head id="inter-h" kicker="Intercity" title={c.intercity.heading} intro={c.intercity.intro} />
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {c.intercity.routes.map((r) => (
              <li key={r.href}>
                <Link href={r.href} className="group flex h-full flex-col rounded-2xl bg-white p-5 ring-1 ring-hairline transition hover:ring-brass">
                  <span className="text-xs font-bold uppercase tracking-wider" style={{ color: SAND }}>
                    {r.dir}
                  </span>
                  <span className="mt-1 text-xl font-bold text-ink">Riyadh to {r.name}</span>
                  <span className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{r.text}</span>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-midnight">
                    View the route <ArrowRight className="size-3.5 text-brass transition group-hover:translate-x-0.5" aria-hidden="true" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Hotels + Diriyah ── */}
      <section aria-labelledby="culture-h" className="bg-white py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_1.4fr] lg:px-8">
          <div className="self-start rounded-3xl bg-offwhite p-6 ring-1 ring-hairline sm:p-8">
            <Hotel className="size-7 text-brass" aria-hidden="true" />
            <h2 id="hotels-h" className="mt-3 text-2xl font-bold tracking-tight text-ink">{c.hotels.heading}</h2>
            <p className="mt-3 leading-relaxed text-ink-soft">{c.hotels.text}</p>
            <Link href={c.hotels.link.href} className="mt-5 inline-flex items-center gap-1 font-semibold text-midnight underline decoration-brass decoration-2 underline-offset-4 hover:text-brass">
              {c.hotels.link.label} <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="overflow-hidden rounded-3xl text-white" style={{ background: "#5b3f22" }}>
            <div className="grid grid-cols-2">
              <Photo p={P.turaif} ratio="aspect-[4/3]" sizes="(min-width: 1024px) 28vw, 50vw" />
              <Photo p={P.diriyah} ratio="aspect-[4/3]" sizes="(min-width: 1024px) 28vw, 50vw" />
            </div>
            <div className="p-6 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-200">Culture</p>
              <h2 id="culture-h" className="mt-2 text-2xl font-bold tracking-tight">{c.culture.heading}</h2>
              {c.culture.paragraphs.map((p) => (
                <p key={p.slice(0, 24)} className="mt-3 leading-relaxed text-white/85">
                  {p}
                </p>
              ))}
              <p className="mt-4 text-xs text-white/60">
                {P.turaif.caption}. {P.diriyah.caption}.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Families and groups ── */}
      <section aria-labelledby="groups-h" className="bg-offwhite py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Head id="groups-h" kicker="Travelling together" title={c.groups.heading} />
          <ul className="mt-8 grid gap-4 md:grid-cols-3">
            {c.groups.items.map((g, i) => {
              const Icon = GROUP_ICONS[i] ?? Users;
              return (
                <li key={g.title} className="rounded-2xl bg-white p-6 ring-1 ring-hairline">
                  <Icon className="size-6 text-brass" aria-hidden="true" />
                  <h3 className="mt-3 font-bold text-ink">{g.title}</h3>
                  <p className="mt-2 leading-relaxed text-ink-soft">{g.text}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* ── Pickup board + regional compass ── */}
      <section aria-labelledby="pickup-h" className="bg-white py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <Head id="pickup-h" kicker="Where we can collect you" title={c.pickup.heading} intro={c.pickup.intro} />
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {c.pickup.groups.map((g) => (
                <div key={g.title} className="rounded-2xl bg-offwhite p-5">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-brass">{g.title}</h3>
                  <ul className="mt-3 space-y-2">
                    {g.items.map((it) => (
                      <li key={it} className="flex items-start gap-2 text-sm text-ink">
                        <MapPin className="mt-0.5 size-3.5 shrink-0 text-brass" aria-hidden="true" /> {it}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div>
            <Head id="regional-h" kicker="Beyond the capital" title={c.regional.heading} intro={c.regional.intro} />
            <dl className="mt-6 divide-y divide-hairline rounded-2xl ring-1 ring-hairline">
              {c.regional.groups.map((g) => (
                <div key={g.dir} className="flex flex-col gap-2 p-4 sm:flex-row sm:items-center">
                  <dt className="flex w-20 shrink-0 items-center gap-1.5 text-sm font-bold text-ink">
                    <Compass className="size-4 text-brass" aria-hidden="true" /> {g.dir}
                  </dt>
                  <dd className="flex flex-wrap gap-2">
                    {g.links.map((l) => (
                      <Link key={l.href} href={l.href} className="rounded-full bg-offwhite px-3 py-1.5 text-sm font-semibold text-ink ring-1 ring-hairline transition hover:ring-brass">
                        Riyadh to {l.label}
                      </Link>
                    ))}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 text-sm text-ink-soft">{c.regional.note}</p>
          </div>
        </div>
      </section>

      {/* ── Booking + form ── */}
      <section aria-labelledby="book-h" className="bg-offwhite py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Head id="book-h" kicker="Booking" title={c.booking.heading} />
          <ol className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {c.booking.steps.map((s, i) => (
              <li key={s.title} className="rounded-2xl bg-white p-5 ring-1 ring-hairline">
                <span className="flex size-9 items-center justify-center rounded-full font-bold text-white" style={{ background: NIGHT }}>
                  {i + 1}
                </span>
                <h3 className="mt-3 font-bold text-ink">{s.title}</h3>
                <p className="mt-1 text-sm text-ink-soft">{s.text}</p>
              </li>
            ))}
          </ol>
          <div id="quote" className="mt-12 grid scroll-mt-28 gap-8 rounded-3xl p-6 text-white sm:p-10 lg:grid-cols-[1fr_1.6fr]" style={{ background: NIGHT }}>
            <div>
              <h3 className="text-2xl font-bold tracking-tight">Request your Riyadh quotation</h3>
              <p className="mt-3 leading-relaxed text-white/80">Pickup, destination, date and passengers are enough to start. Add flight details or a meeting schedule in the message.</p>
              <a href={whatsappLink(WA)} className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-2.5 text-sm font-semibold hover:border-brass hover:text-brass">
                <MessageCircle className="size-4" aria-hidden="true" /> Prefer WhatsApp?
              </a>
            </div>
            <div className="rounded-2xl bg-white p-5 text-ink sm:p-6">
              <QuoteForm
                serviceType="Riyadh transfer"
                city="Riyadh"
                defaultPickup="Riyadh"
                dropoffPlaceholder={c.booking.form.dropoffPlaceholder}
                messagePlaceholder={c.booking.form.messagePlaceholder}
                flightField="airport"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section aria-labelledby="faq-h" className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Head id="faq-h" kicker="Questions" title="Riyadh transfer questions" />
          <div className="mt-8 max-w-4xl divide-y divide-hairline rounded-2xl bg-white px-5 ring-1 ring-hairline sm:px-8">
            {faqs.map((f) => (
              <details key={f.question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 marker:hidden">
                  <h3 className="text-base font-semibold text-ink">{f.question}</h3>
                  <ChevronDown className="mt-0.5 size-5 shrink-0 text-brass transition group-open:rotate-180" aria-hidden="true" />
                </summary>
                <p className="mt-3 leading-relaxed text-ink-soft">{f.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="relative isolate overflow-hidden py-20 text-white" style={{ background: NIGHT }}>
        <Image src={P.kafd.src} alt="" fill sizes="100vw" className="-z-10 object-cover opacity-20" />
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{c.final.heading}</h2>
          <p className="mx-auto mt-3 max-w-2xl text-lg text-white/85">{c.final.text}</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a href="#quote" className="inline-flex items-center gap-2 rounded-full bg-brass px-6 py-3 text-sm font-bold text-midnight transition hover:bg-white">
              <Send className="size-4" aria-hidden="true" /> Get a Riyadh Quote
            </a>
            <a href={whatsappLink(WA)} className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold transition hover:border-brass hover:text-brass">
              <MessageCircle className="size-4" aria-hidden="true" /> WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
