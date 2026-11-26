import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, ChevronDown, MapPin, MessageCircle, Mountain, Plane, Send } from "lucide-react";
import { Breadcrumbs, type Crumb } from "@/components/Breadcrumbs";
import { QuoteForm } from "@/components/QuoteForm";
import type { Faq } from "@/data/faqs";
import { KHAMIS as c, KHAMIS_PHOTOS as P, type KhamisPhoto } from "@/data/khamis-mushait-city-page";
import { whatsappLink } from "@/lib/site";

/**
 * /taxi-service/khamis-mushait — "plateau market town" layout: a photo hero
 * with a facts ledger, the market-town story beside a photo pair, an airport
 * strip, a side-by-side Khamis / Abha comparison under the twin-city night
 * photo, city and highlands panels, a regional connections table, pickup
 * places, booking steps with the shared QuoteForm and FAQs.
 * Photo credits are listed on /image-credits. Copy: data/khamis-mushait-city-page.ts.
 */

const WA = "Hello! I'd like a quotation for a private transfer in Khamis Mushait.";
const TERRACOTTA = "#7a3b25";
const PLATEAU = "#2f3b2a";

function Fig({ p, ratio, sizes, light = false }: { p: KhamisPhoto; ratio: string; sizes: string; light?: boolean }) {
  return (
    <figure className="m-0">
      <div className={`relative w-full overflow-hidden rounded-2xl bg-sand-soft ${ratio}`}>
        <Image src={p.src} alt={p.alt} fill sizes={sizes} className="object-cover" />
      </div>
      <figcaption className={`mt-2 text-xs ${light ? "text-white/65" : "text-ink-soft"}`}>{p.caption}</figcaption>
    </figure>
  );
}

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

export function KhamisMushaitCityView({ faqs, crumbs }: { faqs: Faq[]; crumbs: Crumb[] }) {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative isolate overflow-hidden text-white" style={{ background: PLATEAU }}>
        <Image src={P.city.src} alt={P.city.alt} fill priority sizes="100vw" className="-z-10 object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#1d2419]/75 via-[#1d2419]/45 to-[#1d2419]/90" />
        <div className="mx-auto max-w-6xl px-4 pb-12 pt-28 sm:px-6 sm:pt-32 lg:px-8 lg:pb-16 lg:pt-36">
          <Breadcrumbs items={crumbs} onDark />
          <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-amber-200">{c.hero.kicker}</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl">{c.hero.h1}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/90">{c.hero.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#quote" className="inline-flex items-center gap-2 rounded-full bg-brass px-6 py-3 text-sm font-bold text-midnight transition hover:bg-white">
              <Send className="size-4" aria-hidden="true" /> Get a Khamis Mushait Quote
            </a>
            <Link href="/city-transfers" className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold transition hover:border-brass hover:text-brass">
              City transfers overview <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
          <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-white/20 lg:grid-cols-4">
            {c.facts.map((f) => (
              <div key={f.k} className="bg-[#1d2419]/85 px-4 py-3">
                <dt className="text-[11px] uppercase tracking-wider text-white/60">{f.k}</dt>
                <dd className="mt-1 text-sm font-semibold sm:text-base">{f.v}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-3 text-xs text-white/60">{P.city.caption}</p>
        </div>
      </section>

      {/* ── Story ── */}
      <section aria-labelledby="story-h" className="bg-offwhite py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:px-8">
          <div>
            <Head id="story-h" kicker="Private transfers in Khamis Mushait" title={c.story.heading} />
            {c.story.paragraphs.map((p) => (
              <p key={p.slice(0, 24)} className="mt-4 text-[17px] leading-relaxed text-ink-soft">
                {p}
              </p>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Fig p={P.heritage} ratio="aspect-[3/4]" sizes="(min-width: 1024px) 22vw, 50vw" />
            <div className="pt-10">
              <Fig p={P.mosque} ratio="aspect-[3/4]" sizes="(min-width: 1024px) 22vw, 50vw" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Airport ── */}
      <section aria-labelledby="airport-h" className="py-14 text-white" style={{ background: TERRACOTTA }}>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-[auto_1fr] lg:items-start lg:px-8">
          <div className="flex size-16 items-center justify-center rounded-2xl bg-white/10">
            <Plane className="size-8 text-amber-200" aria-hidden="true" />
          </div>
          <div>
            <Head id="airport-h" kicker="Airport transfers via Abha" title={c.airport.heading} light />
            {c.airport.paragraphs.map((p) => (
              <p key={p.slice(0, 24)} className="mt-4 max-w-3xl text-[17px] leading-relaxed text-white/85">
                {p}
              </p>
            ))}
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
              {[c.airport.link, c.airport.guide].map((l) => (
                <Link key={l.href} href={l.href} className="inline-flex items-center gap-1 font-semibold text-amber-200 hover:text-white">
                  {l.label} <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Khamis vs Abha ── */}
      <section aria-labelledby="compare-h" className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Head id="compare-h" kicker="Twin cities" title={c.compare.heading} intro={c.compare.intro} />
          <div className="mt-8">
            <Fig p={P.twinCities} ratio="aspect-[16/7]" sizes="(min-width: 1152px) 1100px, 100vw" />
          </div>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            <article className="rounded-3xl p-6 text-white sm:p-8" style={{ background: PLATEAU }}>
              <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-200">
                <Building2 className="size-4" aria-hidden="true" /> The commercial city
              </p>
              <h3 className="mt-2 text-2xl font-bold">{c.compare.khamis.name}</h3>
              <ul className="mt-4 space-y-2.5">
                {c.compare.khamis.points.map((pt) => (
                  <li key={pt} className="flex gap-2.5 text-white/90">
                    <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-amber-200" /> {pt}
                  </li>
                ))}
              </ul>
            </article>
            <article className="overflow-hidden rounded-3xl bg-offwhite ring-1 ring-hairline">
              <div className="relative aspect-[16/7]">
                <Image src={P.abha.src} alt={P.abha.alt} fill sizes="(min-width: 768px) 45vw, 100vw" className="object-cover" />
              </div>
              <div className="p-6 sm:p-8">
                <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brass">
                  <Mountain className="size-4" aria-hidden="true" /> The regional capital
                </p>
                <h3 className="mt-2 text-2xl font-bold text-ink">{c.compare.abha.name}</h3>
                <ul className="mt-4 space-y-2.5">
                  {c.compare.abha.points.map((pt) => (
                    <li key={pt} className="flex gap-2.5 text-ink-soft">
                      <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-brass" /> {pt}
                    </li>
                  ))}
                </ul>
                <Link href={c.compare.abha.link.href} className="mt-5 inline-flex items-center gap-1 font-semibold text-midnight underline decoration-brass decoration-2 underline-offset-4 hover:text-brass">
                  {c.compare.abha.link.label} <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </div>
            </article>
          </div>
          <p className="mt-5 text-sm text-ink-soft">{c.compare.note}</p>
        </div>
      </section>

      {/* ── City + highlands ── */}
      <section aria-labelledby="city-h" className="bg-offwhite py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <Head id="city-h" kicker="In the city" title={c.city.heading} />
            {c.city.paragraphs.map((p) => (
              <p key={p.slice(0, 24)} className="mt-4 text-[17px] leading-relaxed text-ink-soft">
                {p}
              </p>
            ))}
            <div className="mt-6">
              <Fig p={P.boulevard} ratio="aspect-[16/10]" sizes="(min-width: 1024px) 45vw, 100vw" />
            </div>
          </div>
          <div className="self-start overflow-hidden rounded-3xl bg-white ring-1 ring-hairline">
            <div className="relative aspect-[16/10]">
              <Image src={P.soudah.src} alt={P.soudah.alt} fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
            </div>
            <div className="p-6 sm:p-8">
              <h2 id="high-h" className="text-2xl font-bold tracking-tight text-ink">{c.highlands.heading}</h2>
              <p className="mt-3 leading-relaxed text-ink-soft">{c.highlands.text}</p>
              <Link href={c.highlands.link.href} className="mt-4 inline-flex items-center gap-1 font-semibold text-midnight underline decoration-brass decoration-2 underline-offset-4 hover:text-brass">
                {c.highlands.link.label} <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <p className="mt-4 text-xs text-ink-muted">{P.soudah.caption}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Regional ── */}
      <section aria-labelledby="regional-h" className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Head id="regional-h" kicker="Onward journeys" title={c.regional.heading} intro={c.regional.intro} />
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {c.regional.items.map((r) => (
              <li key={r.name} className="flex flex-col rounded-2xl border border-hairline p-5">
                <h3 className="text-lg font-bold text-ink">{r.name}</h3>
                <p className="mt-1 font-mono text-sm text-brass">
                  {r.km} · {r.time}
                </p>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{r.text}</p>
                <Link href={r.href} className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-midnight underline decoration-brass decoration-2 underline-offset-4 hover:text-brass">
                  {r.label} <ArrowRight className="size-3.5" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Pickup places ── */}
      <section aria-labelledby="pickup-h" className="bg-offwhite py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Head id="pickup-h" kicker="Where we can collect you" title={c.pickup.heading} intro={c.pickup.intro} />
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {c.pickup.items.map((it) => (
              <li key={it} className="flex items-start gap-2.5 rounded-xl bg-white p-4 text-ink ring-1 ring-hairline">
                <MapPin className="mt-0.5 size-4 shrink-0 text-brass" aria-hidden="true" /> {it}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Booking + form ── */}
      <section aria-labelledby="book-h" className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Head id="book-h" kicker="Booking" title={c.booking.heading} />
          <ol className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {c.booking.steps.map((s, i) => (
              <li key={s.title} className="rounded-2xl bg-offwhite p-5">
                <span className="flex size-9 items-center justify-center rounded-full font-bold text-white" style={{ background: TERRACOTTA }}>
                  {i + 1}
                </span>
                <h3 className="mt-3 font-bold text-ink">{s.title}</h3>
                <p className="mt-1 text-sm text-ink-soft">{s.text}</p>
              </li>
            ))}
          </ol>
          <div id="quote" className="mt-12 grid scroll-mt-28 gap-8 rounded-3xl p-6 text-white sm:p-10 lg:grid-cols-[1fr_1.6fr]" style={{ background: PLATEAU }}>
            <div>
              <h3 className="text-2xl font-bold tracking-tight">Request your Khamis Mushait quotation</h3>
              <p className="mt-3 leading-relaxed text-white/80">Pickup, destination, date and passengers are enough to start.</p>
              <a href={whatsappLink(WA)} className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-2.5 text-sm font-semibold hover:border-brass hover:text-brass">
                <MessageCircle className="size-4" aria-hidden="true" /> Prefer WhatsApp?
              </a>
            </div>
            <div className="rounded-2xl bg-white p-5 text-ink sm:p-6">
              <QuoteForm
                serviceType="Khamis Mushait transfer"
                city="Khamis Mushait"
                defaultPickup="Khamis Mushait"
                dropoffPlaceholder={c.booking.form.dropoffPlaceholder}
                messagePlaceholder={c.booking.form.messagePlaceholder}
                flightField="airport"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section aria-labelledby="faq-h" className="bg-offwhite py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Head id="faq-h" kicker="Questions" title="Khamis Mushait transfer questions" />
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
      <section className="py-16 text-white" style={{ background: TERRACOTTA }}>
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-bold tracking-tight">{c.final.heading}</h2>
          <p className="mx-auto mt-3 max-w-2xl text-lg text-white/85">{c.final.text}</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a href="#quote" className="inline-flex items-center gap-2 rounded-full bg-brass px-6 py-3 text-sm font-bold text-midnight transition hover:bg-white">
              <Send className="size-4" aria-hidden="true" /> Request a Quotation
            </a>
            <a href={whatsappLink(WA)} className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold transition hover:border-white">
              <MessageCircle className="size-4" aria-hidden="true" /> WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
