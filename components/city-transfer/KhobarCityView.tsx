import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Briefcase, Building2, ChevronDown, MapPin, MessageCircle, Plane, Send, ShieldCheck, Sun, Waves } from "lucide-react";
import { Breadcrumbs, type Crumb } from "@/components/Breadcrumbs";
import { QuoteForm } from "@/components/QuoteForm";
import type { Faq } from "@/data/faqs";
import { KHOBAR as c, KHOBAR_PHOTOS as P, type KhobarPhoto } from "@/data/khobar-city-page";
import { whatsappLink } from "@/lib/site";

/**
 * /taxi-service/khobar — "Gulf waterfront and causeway" layout: a Corniche
 * water-tower hero with a facts ledger, the city story with a dated timeline,
 * the waterfront, an airport band, the causeway as a two-part journey, the
 * Khobar–Dhahran–Dammam metro as three linked columns with an Ithra card,
 * family days out, business travel, onward routes, pickup places, booking
 * steps with the shared QuoteForm, FAQs and a closing CTA. Photo credits are
 * listed on /image-credits. Copy: data/khobar-city-page.ts.
 */

const WA = "Hello! I'd like a quotation for a private transfer in Khobar.";
const GULF = "#0c3446";
const SEA = "#145a6e";
const SAND = "#f4ede1";

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

function Pic({ p, ratio, sizes, priority = false }: { p: KhobarPhoto; ratio: string; sizes: string; priority?: boolean }) {
  return (
    <div className={`relative w-full overflow-hidden ${ratio}`}>
      <Image src={p.src} alt={p.alt} fill sizes={sizes} priority={priority} className="object-cover" />
    </div>
  );
}

function Chip({ href, label, light = false }: { href: string; label: string; light?: boolean }) {
  return (
    <Link
      href={href}
      className={
        light
          ? "inline-flex items-center gap-1.5 rounded-full border border-white/30 px-3 py-1.5 text-sm font-semibold text-white transition hover:border-amber-200 hover:text-amber-200"
          : "inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-ink ring-1 ring-hairline transition hover:ring-brass"
      }
    >
      {label} <ArrowRight className="size-3.5" aria-hidden="true" />
    </Link>
  );
}

export function KhobarCityView({ faqs, crumbs }: { faqs: Faq[]; crumbs: Crumb[] }) {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative isolate overflow-hidden text-white" style={{ background: GULF }}>
        <Image src={P.waterTower.src} alt={P.waterTower.alt} fill priority sizes="100vw" className="-z-10 object-cover object-[60%_40%]" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0c3446]/95 via-[#0c3446]/75 to-[#0c3446]/20" />
        <div className="mx-auto max-w-6xl px-4 pb-12 pt-28 sm:px-6 sm:pt-32 lg:px-8 lg:pb-16 lg:pt-36">
          <Breadcrumbs items={crumbs} onDark />
          <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-amber-200">{c.hero.kicker}</p>
          <h1 className="mt-3 max-w-2xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl">{c.hero.h1}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/90">{c.hero.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#quote" className="inline-flex items-center gap-2 rounded-full bg-brass px-6 py-3 text-sm font-bold text-midnight transition hover:bg-white">
              <Send className="size-4" aria-hidden="true" /> Get a Khobar Quote
            </a>
            <Link href="/city-transfers" className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold transition hover:border-brass hover:text-brass">
              City Transfers Overview <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
          <dl className="mt-10 grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-2xl bg-white/20 lg:grid-cols-4">
            {c.facts.map((f) => (
              <div key={f.k} className="bg-[#0c3446]/85 px-4 py-3">
                <dt className="text-[11px] uppercase tracking-wider text-white/60">{f.k}</dt>
                <dd className="mt-1 text-sm font-semibold sm:text-base">{f.v}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-3 text-xs text-white/60">{P.waterTower.caption}</p>
        </div>
      </section>

      {/* ── Story + timeline ── */}
      <section aria-labelledby="story-h" className="bg-offwhite py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-[1.15fr_1fr] lg:px-8">
          <div>
            <Head id="story-h" kicker="The waterfront city" title={c.story.heading} />
            {c.story.paragraphs.map((p) => (
              <p key={p.slice(0, 24)} className="mt-4 text-[17px] leading-relaxed text-ink-soft">
                {p}
              </p>
            ))}
          </div>
          <div>
            <figure className="m-0">
              <div className="overflow-hidden rounded-3xl">
                <Pic p={P.fishermen} ratio="aspect-[4/3]" sizes="(min-width: 1024px) 45vw, 100vw" />
              </div>
              <figcaption className="mt-2 text-xs text-ink-soft">{P.fishermen.caption}</figcaption>
            </figure>
            <ol className="mt-6 border-l-2 pl-5" style={{ borderColor: SEA }}>
              {c.story.timeline.map((t) => (
                <li key={t.year} className="relative pb-4 last:pb-0">
                  <span className="absolute -left-[27px] top-1 size-3 rounded-full ring-4 ring-offwhite" style={{ background: SEA }} aria-hidden="true" />
                  <span className="font-bold text-ink">{t.year}</span>
                  <span className="text-ink-soft"> · {t.text}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ── Waterfront ── */}
      <section aria-labelledby="water-h" className="bg-white py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:px-8">
          <figure className="m-0 lg:order-2">
            <div className="overflow-hidden rounded-3xl">
              <Pic p={P.lawns} ratio="aspect-[16/11]" sizes="(min-width: 1024px) 50vw, 100vw" />
            </div>
            <figcaption className="mt-2 text-xs text-ink-soft">{P.lawns.caption}</figcaption>
          </figure>
          <div>
            <Head id="water-h" kicker="On the Gulf" title={c.waterfront.heading} />
            {c.waterfront.paragraphs.map((p) => (
              <p key={p.slice(0, 24)} className="mt-4 text-[17px] leading-relaxed text-ink-soft">
                {p}
              </p>
            ))}
            <ul className="mt-6 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {c.waterfront.spots.map((s) => (
                <li key={s.name} className="flex gap-3 rounded-2xl p-4" style={{ background: SAND }}>
                  <Waves className="mt-0.5 size-5 shrink-0" style={{ color: SEA }} aria-hidden="true" />
                  <div>
                    <p className="font-bold text-ink">{s.name}</p>
                    <p className="mt-1 text-sm text-ink-soft">{s.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Airport ── */}
      <section aria-labelledby="airport-h" className="py-14 text-white" style={{ background: SEA }}>
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
            <div className="mt-6 flex flex-wrap gap-2">
              <Chip href={c.airport.link.href} label={c.airport.link.label} light />
              {c.airport.routes.map((r) => (
                <Chip key={r.href} href={r.href} label={r.label} light />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Causeway ── */}
      <section aria-labelledby="causeway-h" className="py-16 text-white" style={{ background: GULF }}>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:px-8">
          <div>
            <Head id="causeway-h" kicker="Gateway to Bahrain" title={c.causeway.heading} intro={c.causeway.intro} light />
            <ol className="mt-8 grid gap-3 sm:grid-cols-2">
              {c.causeway.parts.map((p, i) => (
                <li key={p.title} className="rounded-2xl border border-white/15 bg-white/5 p-5">
                  <span className="flex size-8 items-center justify-center rounded-full bg-amber-200 text-sm font-bold text-midnight">{i + 1}</span>
                  <h3 className="mt-3 font-bold">{p.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-white/80">{p.text}</p>
                </li>
              ))}
            </ol>
            <p className="mt-5 flex gap-2.5 text-sm leading-relaxed text-white/75">
              <ShieldCheck className="mt-0.5 size-4 shrink-0 text-amber-200" aria-hidden="true" />
              {c.causeway.note}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {c.causeway.links.map((l) => (
                <Chip key={l.href} href={l.href} label={l.label} light />
              ))}
            </div>
          </div>
          <figure className="m-0">
            <div className="overflow-hidden rounded-3xl">
              <Pic p={P.causeway} ratio="aspect-[4/3]" sizes="(min-width: 1024px) 45vw, 100vw" />
            </div>
            <figcaption className="mt-2 text-xs text-white/60">{P.causeway.caption}</figcaption>
          </figure>
        </div>
      </section>

      {/* ── Connected region ── */}
      <section aria-labelledby="region-h" className="bg-offwhite py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Head id="region-h" kicker="The Dammam metropolitan area" title={c.region.heading} intro={c.region.intro} />
          <ul className="mt-8 grid gap-4 md:grid-cols-3">
            {c.region.cities.map((city) => (
              <li key={city.name} className="flex flex-col rounded-3xl bg-white p-6 ring-1 ring-hairline">
                <Building2 className="size-6 text-brass" aria-hidden="true" />
                <h3 className="mt-3 text-xl font-bold text-ink">{city.name}</h3>
                <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: SEA }}>{city.role}</p>
                <p className="mt-3 flex-1 leading-relaxed text-ink-soft">{city.text}</p>
                {city.links.length ? (
                  <ul className="mt-4 space-y-1.5">
                    {city.links.map((l) => (
                      <li key={l.href}>
                        <Link href={l.href} className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink underline decoration-brass underline-offset-4 hover:text-brass">
                          {l.label} <ArrowRight className="size-3.5" aria-hidden="true" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>
          <div className="mt-6 grid grid-cols-1 overflow-hidden rounded-3xl bg-white ring-1 ring-hairline lg:grid-cols-[1.2fr_1fr]">
            <figure className="m-0">
              <Pic p={P.ithra} ratio="aspect-[16/9] h-full" sizes="(min-width: 1024px) 55vw, 100vw" />
            </figure>
            <div className="p-6 sm:p-8">
              <h3 className="text-2xl font-bold text-ink">{c.region.ithra.heading}</h3>
              <p className="mt-3 leading-relaxed text-ink-soft">{c.region.ithra.text}</p>
              <a href="#quote" className="mt-5 inline-flex items-center gap-2 rounded-full bg-brass px-5 py-2.5 text-sm font-bold text-midnight transition hover:bg-ink hover:text-white">
                <Send className="size-4" aria-hidden="true" /> Request an Ithra transfer
              </a>
              <p className="mt-4 text-xs text-ink-muted">{P.ithra.caption}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Leisure ── */}
      <section aria-labelledby="leisure-h" className="py-16" style={{ background: SAND }}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Head id="leisure-h" kicker="Days out" title={c.leisure.heading} intro={c.leisure.intro} />
          <ul className="mt-8 grid gap-4 md:grid-cols-3">
            {c.leisure.items.map((it, i) => (
              <li key={it.name} className={`rounded-3xl p-6 ${i === 0 ? "text-white" : "bg-white ring-1 ring-hairline"}`} style={i === 0 ? { background: SEA } : undefined}>
                <Sun className={`size-6 ${i === 0 ? "text-amber-200" : "text-brass"}`} aria-hidden="true" />
                <h3 className={`mt-3 text-xl font-bold ${i === 0 ? "" : "text-ink"}`}>{it.name}</h3>
                <p className={`mt-1 text-xs font-semibold uppercase tracking-wider ${i === 0 ? "text-amber-200" : "text-brass"}`}>{it.where}</p>
                <p className={`mt-3 leading-relaxed ${i === 0 ? "text-white/85" : "text-ink-soft"}`}>{it.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Business ── */}
      <section aria-labelledby="business-h" className="bg-white py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:px-8">
          <figure className="m-0">
            <div className="overflow-hidden rounded-3xl">
              <Pic p={P.skyline} ratio="aspect-[4/3]" sizes="(min-width: 1024px) 45vw, 100vw" />
            </div>
            <figcaption className="mt-2 text-xs text-ink-soft">{P.skyline.caption}</figcaption>
          </figure>
          <div>
            <Head id="business-h" kicker="Meetings across the metro area" title={c.business.heading} />
            {c.business.paragraphs.map((p) => (
              <p key={p.slice(0, 24)} className="mt-4 text-[17px] leading-relaxed text-ink-soft">
                {p}
              </p>
            ))}
            <a href="#quote" className="mt-6 inline-flex items-center gap-2 rounded-full border border-ink/20 px-5 py-2.5 text-sm font-semibold text-ink transition hover:border-brass hover:text-brass">
              <Briefcase className="size-4" aria-hidden="true" /> Share your meeting schedule
            </a>
          </div>
        </div>
      </section>

      {/* ── Routes ── */}
      <section aria-labelledby="routes-h" className="bg-offwhite py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Head id="routes-h" kicker="Beyond Khobar" title={c.routes.heading} intro={c.routes.intro} />
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {c.routes.items.map((r) => (
              <li key={r.href}>
                <Link href={r.href} className="group flex h-full items-center justify-between gap-4 rounded-2xl bg-white p-5 ring-1 ring-hairline transition hover:ring-brass">
                  <span>
                    <span className="block text-lg font-bold text-ink">{r.name}</span>
                    <span className="mt-1 block text-sm text-ink-soft">{r.text}</span>
                  </span>
                  <ArrowRight className="size-5 shrink-0 text-brass transition group-hover:translate-x-0.5" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-2">
            {c.routes.more.map((l) => (
              <Chip key={l.href} href={l.href} label={l.label} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Pickup places ── */}
      <section aria-labelledby="pickup-h" className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Head id="pickup-h" kicker="Where to collect you" title={c.pickup.heading} intro={c.pickup.intro} />
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
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
                <span className="flex size-9 items-center justify-center rounded-full font-bold text-white" style={{ background: SEA }}>
                  {i + 1}
                </span>
                <h3 className="mt-3 font-bold text-ink">{s.title}</h3>
                <p className="mt-1 text-sm text-ink-soft">{s.text}</p>
              </li>
            ))}
          </ol>
          <div id="quote" className="mt-12 grid scroll-mt-28 gap-8 rounded-3xl p-6 text-white sm:p-10 lg:grid-cols-[1fr_1.6fr]" style={{ background: GULF }}>
            <div>
              <h3 className="text-2xl font-bold tracking-tight">Request your Khobar quotation</h3>
              <p className="mt-3 leading-relaxed text-white/80">Pickup, destination, date and passengers are enough to start. Add any stops or a return journey in the message.</p>
              <a href={whatsappLink(WA)} className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-2.5 text-sm font-semibold hover:border-brass hover:text-brass">
                <MessageCircle className="size-4" aria-hidden="true" /> Prefer WhatsApp?
              </a>
            </div>
            <div className="rounded-2xl bg-white p-5 text-ink sm:p-6">
              <QuoteForm
                serviceType="Khobar transfer"
                city="Khobar"
                defaultPickup="Khobar"
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
          <Head id="faq-h" kicker="Questions" title="Khobar transfer questions" />
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
      <section className="relative isolate overflow-hidden py-20 text-white" style={{ background: GULF }}>
        <Image src={P.causeway.src} alt="" fill sizes="100vw" className="-z-10 object-cover opacity-20" />
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{c.final.heading}</h2>
          <p className="mx-auto mt-3 max-w-2xl text-lg text-white/85">{c.final.text}</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a href="#quote" className="inline-flex items-center gap-2 rounded-full bg-brass px-6 py-3 text-sm font-bold text-midnight transition hover:bg-white">
              <Send className="size-4" aria-hidden="true" /> Get a Khobar Quote
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
