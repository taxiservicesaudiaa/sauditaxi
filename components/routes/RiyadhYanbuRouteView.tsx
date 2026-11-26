import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, Check, ChevronDown, MessageCircle, Send, Waves } from "lucide-react";
import { Breadcrumbs, type Crumb } from "@/components/Breadcrumbs";
import { QuoteForm } from "@/components/QuoteForm";
import type { Faq } from "@/data/faqs";
import { YANBU as c, YANBU_PHOTOS as P, type YanbuPhoto } from "@/data/riyadh-to-yanbu-route";
import { vehicles } from "@/data/vehicles";
import { whatsappLink } from "@/lib/site";

/**
 * /routes/riyadh-to-yanbu — "capital to the coast" layout: a sea-blue split
 * hero with Yanbu seen from space, a desert-to-sea route bar with stage
 * markers placed by distance, a two-part "Two Yanbus" destination section,
 * the fleet guide, booking steps with the shared QuoteForm, FAQs and onward
 * links. Photo credits are listed on /image-credits.
 * Copy and sources: data/riyadh-to-yanbu-route.ts.
 */

const WA = "Hello! I'd like a quotation for a private transfer from Riyadh to Yanbu.";
const SEA = "#0b3b4f";
const SEA_DEEP = "#072a39";
const TOTAL_KM = 1050;

function Pic({ p, ratio, sizes, priority = false, className = "" }: { p: YanbuPhoto; ratio: string; sizes: string; priority?: boolean; className?: string }) {
  return (
    <figure className={`m-0 ${className}`}>
      <div className={`relative w-full overflow-hidden rounded-2xl bg-sand-soft ${ratio}`}>
        <Image src={p.src} alt={p.alt} fill sizes={sizes} priority={priority} className="object-cover" />
      </div>
      <figcaption className="mt-2 text-xs leading-relaxed text-ink-soft">{p.caption}</figcaption>
    </figure>
  );
}

function SectionHead({ id, kicker, title, intro, light = false }: { id: string; kicker: string; title: string; intro?: string; light?: boolean }) {
  return (
    <header className="max-w-3xl">
      <p className={`text-xs font-bold uppercase tracking-[0.18em] ${light ? "text-sky-200" : "text-brass"}`}>{kicker}</p>
      <h2 id={id} className={`mt-2 text-2xl font-bold tracking-tight sm:text-3xl ${light ? "text-white" : "text-ink"}`}>
        {title}
      </h2>
      {intro ? <p className={`mt-3 text-[17px] leading-relaxed ${light ? "text-white/80" : "text-ink-soft"}`}>{intro}</p> : null}
    </header>
  );
}

export function RiyadhYanbuRouteView({ faqs, crumbs }: { faqs: Faq[]; crumbs: Crumb[] }) {
  return (
    <>
      {/* ── Hero ── */}
      <section className="text-white" style={{ background: `linear-gradient(160deg, ${SEA_DEEP} 0%, ${SEA} 60%, #11566b 100%)` }}>
        <div className="mx-auto grid max-w-6xl gap-10 px-4 pb-14 pt-28 sm:px-6 sm:pt-32 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:px-8 lg:pb-20 lg:pt-36">
          <div className="min-w-0">
            <Breadcrumbs items={crumbs} onDark />
            <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-sky-200">{c.hero.kicker}</p>
            <h1 className="mt-3 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">{c.hero.h1}</h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/85">{c.hero.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#quote" className="inline-flex items-center gap-2 rounded-full bg-brass px-6 py-3 text-sm font-bold text-midnight transition hover:bg-white">
                <Send className="size-4" aria-hidden="true" /> Get a Quote
              </a>
              <a href={whatsappLink(WA)} className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold transition hover:border-brass hover:text-brass">
                <MessageCircle className="size-4" aria-hidden="true" /> WhatsApp
              </a>
            </div>
            <dl className="mt-10 grid max-w-lg grid-cols-2 gap-px overflow-hidden rounded-2xl bg-white/15">
              {c.glance.stats.slice(0, 2).map((s) => (
                <div key={s.k} className="px-4 py-3" style={{ background: SEA_DEEP }}>
                  <dt className="text-[11px] uppercase tracking-wider text-white/60">{s.k}</dt>
                  <dd className="mt-1 text-lg font-bold">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <figure className="m-0 min-w-0">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl ring-1 ring-white/20">
              <Image src={P.space.src} alt={P.space.alt} fill priority sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
            </div>
            <figcaption className="mt-2 text-xs text-white/65">{P.space.caption}</figcaption>
          </figure>
        </div>
      </section>

      {/* ── At a glance ── */}
      <section aria-labelledby="glance-h" className="bg-offwhite py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHead id="glance-h" kicker="Journey at a glance" title="Riyadh to Yanbu in brief" />
          <p className="mt-5 max-w-3xl rounded-2xl border-l-4 border-brass bg-white p-5 text-[17px] leading-relaxed text-ink">{c.glance.answer}</p>
          <dl className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
            {c.glance.stats.map((s) => (
              <div key={s.k} className="rounded-2xl bg-white p-4 ring-1 ring-hairline">
                <dt className="text-xs font-semibold uppercase tracking-wider text-ink-muted">{s.k}</dt>
                <dd className="mt-1.5 font-bold text-ink">{s.v}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-3 text-xs text-ink-muted">{c.glance.note}</p>
        </div>
      </section>

      {/* ── Desert to sea: journey stages ── */}
      <section aria-labelledby="stages-h" className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHead id="stages-h" kicker="How the journey unfolds" title="From the desert interior to the Red Sea" />
          <div className="mt-10 hidden md:block" aria-hidden="true">
            <div className="relative h-3 rounded-full" style={{ background: "linear-gradient(90deg, #d9b98a 0%, #e3c99e 55%, #6fb3c4 88%, #1f7a93 100%)" }}>
              {c.stages.map((s) => (
                <span
                  key={s.label}
                  className="absolute top-1/2 size-5 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-white shadow"
                  style={{ left: `${(s.km / TOTAL_KM) * 100}%`, background: s.km >= TOTAL_KM ? "#1f7a93" : "#8a6a3a" }}
                />
              ))}
            </div>
            <div className="relative mt-3 h-10 text-xs font-semibold text-ink-muted">
              {c.stages.map((s, i) => (
                <span
                  key={s.label}
                  className={`absolute whitespace-nowrap ${i === 0 ? "" : i === c.stages.length - 1 ? "-translate-x-full" : "-translate-x-1/2"}`}
                  style={{ left: `${(s.km / TOTAL_KM) * 100}%` }}
                >
                  {s.label}
                  <span className="block font-mono font-normal">≈{s.km.toLocaleString("en")} km</span>
                </span>
              ))}
            </div>
          </div>
          <ol className="mt-8 grid gap-4 md:grid-cols-4">
            {c.stages.map((s, i) => (
              <li key={s.label} className="rounded-2xl bg-offwhite p-5">
                <p className="font-mono text-[11px] font-bold uppercase tracking-wider text-brass md:hidden">
                  {s.label} · ≈{s.km.toLocaleString("en")} km
                </p>
                <p className="hidden font-mono text-[11px] font-bold uppercase tracking-wider text-brass md:block">Stage {i + 1}</p>
                <h3 className="mt-1.5 font-bold text-ink">{s.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{s.text}</p>
              </li>
            ))}
          </ol>
          <p className="mt-5 max-w-3xl text-sm text-ink-soft">{c.stagesNote}</p>
        </div>
      </section>

      {/* ── The service ── */}
      <section aria-labelledby="service-h" className="bg-offwhite py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <SectionHead id="service-h" kicker="Private transfer" title={c.service.heading} />
            {c.service.paragraphs.map((p) => (
              <p key={p.slice(0, 24)} className="mt-4 text-[17px] leading-relaxed text-ink-soft">
                {p}
              </p>
            ))}
          </div>
          <Pic p={P.street} ratio="aspect-[4/3]" sizes="(min-width: 1024px) 45vw, 100vw" />
        </div>
      </section>

      {/* ── Who it suits ── */}
      <section aria-labelledby="suits-h" className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHead id="suits-h" kicker="Who travels this way" title="Who this journey suits" />
          <ul className="mt-8 grid gap-4 md:grid-cols-3">
            {c.suits.map((s) => (
              <li key={s.title} className="rounded-2xl border border-hairline p-6">
                <h3 className="font-bold text-ink">{s.title}</h3>
                <p className="mt-2 leading-relaxed text-ink-soft">{s.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Two Yanbus ── */}
      <section aria-labelledby="dest-h" className="py-16 text-white" style={{ background: SEA }}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHead id="dest-h" kicker="Your destination" title={c.destinations.heading} intro={c.destinations.intro} light />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {[
              { d: c.destinations.bahr, p: P.house, Icon: Waves },
              { d: c.destinations.industrial, p: P.industrial, Icon: Building2 },
            ].map(({ d, p, Icon }) => (
              <article key={d.name} className="overflow-hidden rounded-3xl bg-white text-ink">
                <div className="relative aspect-[16/9]">
                  <Image src={p.src} alt={p.alt} fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
                </div>
                <div className="p-6 sm:p-7">
                  <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brass">
                    <Icon className="size-4" aria-hidden="true" /> {d.tag}
                  </p>
                  <h3 className="mt-2 text-2xl font-bold tracking-tight">{d.name}</h3>
                  <p className="mt-3 leading-relaxed text-ink-soft">{d.text}</p>
                  <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                    {d.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2 text-sm text-ink">
                        <Check className="mt-0.5 size-4 shrink-0 text-brass" aria-hidden="true" /> {pt}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-xs text-ink-muted">{p.caption}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[P.night, P.minaret, P.suwaiqa].map((p) => (
              <figure key={p.src} className="m-0">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                  <Image src={p.src} alt={p.alt} fill sizes="(min-width: 640px) 30vw, 100vw" className="object-cover" />
                </div>
                <figcaption className="mt-2 text-xs text-white/70">{p.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── The road + planning ── */}
      <section aria-labelledby="road-h" className="bg-white py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:px-8">
          <div>
            <SectionHead id="road-h" kicker="The road" title={c.road.heading} />
            {c.road.paragraphs.map((p) => (
              <p key={p.slice(0, 24)} className="mt-4 text-[17px] leading-relaxed text-ink-soft">
                {p}
              </p>
            ))}
          </div>
          <div>
            <h2 id="plan-h" className="text-2xl font-bold tracking-tight text-ink">{c.planning.heading}</h2>
            <ul className="mt-5 space-y-3">
              {c.planning.items.map((it) => (
                <li key={it.title} className="rounded-2xl bg-offwhite p-5">
                  <h3 className="font-bold text-ink">{it.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-soft">{it.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Vehicles ── */}
      <section aria-labelledby="veh-h" className="bg-offwhite py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHead id="veh-h" kicker="Vehicles" title={c.vehicles.heading} intro={c.vehicles.intro} />
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {vehicles.map((v) => (
              <li key={v.id} className="rounded-2xl bg-white p-5 ring-1 ring-hairline">
                <h3 className="font-bold text-ink">{v.name}</h3>
                <p className="mt-0.5 text-xs text-ink-muted">{v.examples}</p>
                <p className="mt-3 text-sm text-ink-soft">
                  {v.passengers} · {v.luggage}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Booking + form ── */}
      <section aria-labelledby="book-h" className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHead id="book-h" kicker="Booking" title={c.booking.heading} />
          <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {c.booking.steps.map((s, i) => (
              <li key={s.title} className="rounded-2xl bg-offwhite p-5">
                <span className="flex size-9 items-center justify-center rounded-full font-bold text-white" style={{ background: SEA }}>
                  {i + 1}
                </span>
                <h3 className="mt-4 font-bold text-ink">{s.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{s.text}</p>
              </li>
            ))}
          </ol>
          <div id="quote" className="mt-12 grid scroll-mt-28 gap-8 rounded-3xl p-6 text-white sm:p-10 lg:grid-cols-[1fr_1.6fr]" style={{ background: SEA_DEEP }}>
            <div>
              <h3 className="text-2xl font-bold tracking-tight">Request your Riyadh to Yanbu quotation</h3>
              <p className="mt-3 leading-relaxed text-white/80">
                Pickup, destination, date, passengers and luggage are enough to start. Add any breaks or special requirements in the message.
              </p>
              <a href={whatsappLink(WA)} className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-2.5 text-sm font-semibold hover:border-brass hover:text-brass">
                <MessageCircle className="size-4" aria-hidden="true" /> Prefer WhatsApp?
              </a>
            </div>
            <div className="rounded-2xl bg-white p-5 text-ink sm:p-6">
              <QuoteForm
                serviceType="Riyadh to Yanbu transfer"
                route="riyadh-to-yanbu"
                defaultPickup="Riyadh"
                defaultDropoff="Yanbu"
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
          <SectionHead id="faq-h" kicker="Questions" title="Riyadh to Yanbu questions" />
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

      {/* ── Return and onward ── */}
      <section aria-labelledby="onward-h" className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHead id="onward-h" kicker="Next" title={c.onward.heading} />
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {c.onward.links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="group block h-full rounded-xl border border-hairline p-4 transition hover:border-brass">
                  <span className="flex items-center gap-1.5 font-semibold text-ink">
                    {l.label} <ArrowRight className="size-3.5 text-brass transition group-hover:translate-x-0.5" aria-hidden="true" />
                  </span>
                  <span className="mt-1 block text-sm text-ink-soft">{l.text}</span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-10 max-w-4xl text-xs leading-relaxed text-ink-muted">{c.method}</p>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="relative isolate overflow-hidden py-20 text-white" style={{ background: SEA_DEEP }}>
        <Image src={P.street.src} alt="" fill sizes="100vw" className="-z-10 object-cover opacity-25" />
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{c.final.heading}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-white/85">{c.final.text}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="#quote" className="inline-flex items-center gap-2 rounded-full bg-brass px-6 py-3 text-sm font-bold text-midnight transition hover:bg-white">
              <Send className="size-4" aria-hidden="true" /> Request a Quotation
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
