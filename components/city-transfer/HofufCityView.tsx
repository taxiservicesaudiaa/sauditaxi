import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown, Landmark, MapPin, MessageCircle, Plane, Route, Send } from "lucide-react";
import { Breadcrumbs, type Crumb } from "@/components/Breadcrumbs";
import { QuoteForm } from "@/components/QuoteForm";
import type { Faq } from "@/data/faqs";
import { HOFUF as c, HOFUF_PHOTOS as P, type HofufPhoto } from "@/data/hofuf-city-page";
import { whatsappLink } from "@/lib/site";

/**
 * /taxi-service/hofuf — "oasis heritage" layout: a palace hero with a facts
 * ledger, the oasis story beside the palm groves, an airport strip, the three
 * UNESCO-listed heritage sites as a numbered itinerary of photo cards, a
 * multi-stop note, intercity route cards, regional links (incl. the causeway
 * road transfer), pickup places, booking steps with the shared QuoteForm and
 * FAQs. Photo credits are listed on /image-credits. Copy: data/hofuf-city-page.ts.
 */

const WA = "Hello! I'd like a quotation for a private transfer in Hofuf.";
const PALM = "#1f3a2b";
const DATE = "#8a5a2b";

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

function Pic({ p, ratio, sizes, priority = false }: { p: HofufPhoto; ratio: string; sizes: string; priority?: boolean }) {
  return (
    <div className={`relative w-full overflow-hidden ${ratio}`}>
      <Image src={p.src} alt={p.alt} fill sizes={sizes} priority={priority} className="object-cover" />
    </div>
  );
}

export function HofufCityView({ faqs, crumbs }: { faqs: Faq[]; crumbs: Crumb[] }) {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative isolate overflow-hidden text-white" style={{ background: PALM }}>
        <Image src={P.palace.src} alt={P.palace.alt} fill priority sizes="100vw" className="-z-10 object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#1f3a2b]/95 via-[#1f3a2b]/75 to-[#1f3a2b]/30" />
        <div className="mx-auto max-w-6xl px-4 pb-12 pt-28 sm:px-6 sm:pt-32 lg:px-8 lg:pb-16 lg:pt-36">
          <Breadcrumbs items={crumbs} onDark />
          <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-amber-200">{c.hero.kicker}</p>
          <h1 className="mt-3 max-w-2xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl">{c.hero.h1}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/90">{c.hero.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#quote" className="inline-flex items-center gap-2 rounded-full bg-brass px-6 py-3 text-sm font-bold text-midnight transition hover:bg-white">
              <Send className="size-4" aria-hidden="true" /> Get a Hofuf Quote
            </a>
            <Link href="/city-transfers" className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold transition hover:border-brass hover:text-brass">
              City transfers overview <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
          <dl className="mt-10 grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-2xl bg-white/20 lg:grid-cols-4">
            {c.facts.map((f) => (
              <div key={f.k} className="bg-[#1f3a2b]/85 px-4 py-3">
                <dt className="text-[11px] uppercase tracking-wider text-white/60">{f.k}</dt>
                <dd className="mt-1 text-sm font-semibold sm:text-base">{f.v}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-3 text-xs text-white/60">{P.palace.caption}</p>
        </div>
      </section>

      {/* ── Story ── */}
      <section aria-labelledby="story-h" className="bg-offwhite py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:px-8">
          <div>
            <Head id="story-h" kicker="Private transfers in Hofuf" title={c.story.heading} />
            {c.story.paragraphs.map((p) => (
              <p key={p.slice(0, 24)} className="mt-4 text-[17px] leading-relaxed text-ink-soft">
                {p}
              </p>
            ))}
          </div>
          <figure className="m-0">
            <div className="overflow-hidden rounded-3xl">
              <Pic p={P.palms} ratio="aspect-[16/10]" sizes="(min-width: 1024px) 45vw, 100vw" />
            </div>
            <figcaption className="mt-2 text-xs text-ink-soft">{P.palms.caption}</figcaption>
          </figure>
        </div>
      </section>

      {/* ── Airport ── */}
      <section aria-labelledby="airport-h" className="py-14 text-white" style={{ background: DATE }}>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-[auto_1fr] lg:items-start lg:px-8">
          <div className="flex size-16 items-center justify-center rounded-2xl bg-white/10">
            <Plane className="size-8 text-amber-200" aria-hidden="true" />
          </div>
          <div>
            <Head id="airport-h" kicker="Airport transfers" title={c.airport.heading} light />
            {c.airport.paragraphs.map((p) => (
              <p key={p.slice(0, 24)} className="mt-4 max-w-3xl text-[17px] leading-relaxed text-white/85">
                {p}
              </p>
            ))}
            <p className="mt-4 max-w-3xl text-sm text-white/75">
              {c.airport.note}{" "}
              <Link href={c.airport.noteLink.href} className="font-semibold text-amber-200 underline underline-offset-4 hover:text-white">
                {c.airport.noteLink.label}
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* ── Heritage itinerary ── */}
      <section aria-labelledby="heritage-h" className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Head id="heritage-h" kicker="UNESCO World Heritage" title={c.heritage.heading} intro={c.heritage.intro} />
          <ol className="mt-10 grid gap-6 md:grid-cols-3">
            {c.heritage.sites.map((s, i) => (
              <li key={s.name} className="relative overflow-hidden rounded-3xl bg-offwhite ring-1 ring-hairline">
                <Pic p={P[s.photo]} ratio="aspect-[4/3]" sizes="(min-width: 768px) 32vw, 100vw" />
                <span className="absolute left-4 top-4 flex size-9 items-center justify-center rounded-full font-bold text-white shadow" style={{ background: PALM }}>
                  {i + 1}
                </span>
                <div className="p-6">
                  <h3 className="flex items-center gap-2 text-xl font-bold text-ink">
                    <Landmark className="size-5 text-brass" aria-hidden="true" /> {s.name}
                  </h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-brass">{s.where}</p>
                  <p className="mt-3 leading-relaxed text-ink-soft">{s.text}</p>
                  <p className="mt-3 text-xs text-ink-muted">{P[s.photo].caption}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-8 grid grid-cols-1 items-center gap-6 rounded-3xl p-6 text-white sm:p-8 lg:grid-cols-[1fr_1.3fr]" style={{ background: PALM }}>
            <div className="overflow-hidden rounded-2xl">
              <Pic p={P.souqLane} ratio="aspect-[16/10]" sizes="(min-width: 1024px) 40vw, 100vw" />
            </div>
            <div>
              <h3 className="flex items-center gap-2 text-2xl font-bold">
                <Route className="size-6 text-amber-200" aria-hidden="true" /> {c.multiStop.heading}
              </h3>
              <p className="mt-3 leading-relaxed text-white/85">{c.multiStop.text}</p>
              <a href="#quote" className="mt-5 inline-flex items-center gap-2 rounded-full bg-brass px-5 py-2.5 text-sm font-bold text-midnight transition hover:bg-white">
                <Send className="size-4" aria-hidden="true" /> Request a quotation
              </a>
              <p className="mt-4 text-xs text-white/60">{P.souqLane.caption}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Intercity + regional ── */}
      <section aria-labelledby="inter-h" className="bg-offwhite py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <Head id="inter-h" kicker="Intercity" title={c.intercity.heading} intro={c.intercity.intro} />
            <ul className="mt-6 space-y-3">
              {c.intercity.routes.map((r) => (
                <li key={r.href}>
                  <Link href={r.href} className="group flex items-center justify-between gap-4 rounded-2xl bg-white p-5 ring-1 ring-hairline transition hover:ring-brass">
                    <span>
                      <span className="block text-lg font-bold text-ink">Hofuf to {r.name}</span>
                      <span className="mt-1 block text-sm text-ink-soft">{r.text}</span>
                    </span>
                    <ArrowRight className="size-5 shrink-0 text-brass transition group-hover:translate-x-0.5" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Head id="regional-h" kicker="Eastern Province and beyond" title={c.regional.heading} />
            {c.regional.paragraphs.map((p) => (
              <p key={p.slice(0, 24)} className="mt-4 text-[17px] leading-relaxed text-ink-soft">
                {p}
              </p>
            ))}
            <ul className="mt-5 flex flex-wrap gap-2">
              {c.regional.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="inline-flex rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-ink ring-1 ring-hairline transition hover:ring-brass">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Pickup places ── */}
      <section aria-labelledby="pickup-h" className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Head id="pickup-h" kicker="Where we can collect you" title={c.pickup.heading} intro={c.pickup.intro} />
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {c.pickup.items.map((it) => (
              <li key={it} className="flex items-start gap-2.5 rounded-xl bg-offwhite p-4 text-ink">
                <MapPin className="mt-0.5 size-4 shrink-0 text-brass" aria-hidden="true" /> {it}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Booking + form ── */}
      <section aria-labelledby="book-h" className="bg-offwhite py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Head id="book-h" kicker="Booking" title={c.booking.heading} />
          <ol className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {c.booking.steps.map((s, i) => (
              <li key={s.title} className="rounded-2xl bg-white p-5 ring-1 ring-hairline">
                <span className="flex size-9 items-center justify-center rounded-full font-bold text-white" style={{ background: DATE }}>
                  {i + 1}
                </span>
                <h3 className="mt-3 font-bold text-ink">{s.title}</h3>
                <p className="mt-1 text-sm text-ink-soft">{s.text}</p>
              </li>
            ))}
          </ol>
          <div id="quote" className="mt-12 grid scroll-mt-28 gap-8 rounded-3xl p-6 text-white sm:p-10 lg:grid-cols-[1fr_1.6fr]" style={{ background: PALM }}>
            <div>
              <h3 className="text-2xl font-bold tracking-tight">Request your Hofuf quotation</h3>
              <p className="mt-3 leading-relaxed text-white/80">Pickup, destination, date and passengers are enough to start. List any heritage stops in the message.</p>
              <a href={whatsappLink(WA)} className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-2.5 text-sm font-semibold hover:border-brass hover:text-brass">
                <MessageCircle className="size-4" aria-hidden="true" /> Prefer WhatsApp?
              </a>
            </div>
            <div className="rounded-2xl bg-white p-5 text-ink sm:p-6">
              <QuoteForm
                serviceType="Hofuf transfer"
                city="Hofuf"
                defaultPickup="Hofuf"
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
          <Head id="faq-h" kicker="Questions" title="Hofuf transfer questions" />
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
      <section className="relative isolate overflow-hidden py-20 text-white" style={{ background: PALM }}>
        <Image src={P.palms.src} alt="" fill sizes="100vw" className="-z-10 object-cover opacity-20" />
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{c.final.heading}</h2>
          <p className="mx-auto mt-3 max-w-2xl text-lg text-white/85">{c.final.text}</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a href="#quote" className="inline-flex items-center gap-2 rounded-full bg-brass px-6 py-3 text-sm font-bold text-midnight transition hover:bg-white">
              <Send className="size-4" aria-hidden="true" /> Get a Hofuf Quote
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
