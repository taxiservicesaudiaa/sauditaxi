import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown, CloudFog, MessageCircle, Send } from "lucide-react";
import { Breadcrumbs, type Crumb } from "@/components/Breadcrumbs";
import { QuoteForm } from "@/components/QuoteForm";
import type { Faq } from "@/data/faqs";
import { TAIF as c, TAIF_PHOTOS, type TaifPhoto } from "@/data/jeddah-to-taif-route";
import { vehicles } from "@/data/vehicles";
import { whatsappLink } from "@/lib/site";

/**
 * /routes/jeddah-to-taif — "the ascent" layout: escarpment-road hero with a
 * sea-level → summit gauge, an altitude-stepped chapter sequence, a two-roads
 * "what to expect" table with an Al Hada stop callout, a three-tier "beyond arrival"
 * guide (drop-off / agreed stop / separate trip), family guidance, a provide-vs-
 * confirmed checklist, an options table, fleet table, the shared QuoteForm and
 * visible photo credits. Copy and sources: data/jeddah-to-taif-route.ts.
 */

const WA = "Hello! I'd like a quotation for a private transfer from Jeddah to Taif.";
const GRANITE = "#3a2f2a";
const photos = TAIF_PHOTOS as Record<string, TaifPhoto>;
const MAX_ALT = 2000;

function Credit({ p, light = false }: { p: TaifPhoto; light?: boolean }) {
  return (
    <span className={light ? "text-white/60" : "text-ink-muted"}>
      {" "}
      Photo: {p.credit.author} ({p.credit.licence})
    </span>
  );
}

function Pic({ p, ratio, sizes, light = false, className = "" }: { p: TaifPhoto; ratio: string; sizes: string; light?: boolean; className?: string }) {
  return (
    <figure className={`m-0 ${className}`}>
      <div className={`relative w-full overflow-hidden rounded-xl ${ratio}`}>
        <Image src={p.src} alt={p.alt} fill sizes={sizes} className="object-cover" />
      </div>
      <figcaption className={`mt-2 text-xs leading-relaxed ${light ? "text-white/70" : "text-ink-soft"}`}>
        {p.caption}.<Credit p={p} light={light} />
      </figcaption>
    </figure>
  );
}

function Head({ id, kicker, title, light = false, children }: { id: string; kicker: string; title: string; light?: boolean; children?: React.ReactNode }) {
  return (
    <header className="max-w-3xl">
      <p className={`font-mono text-xs font-bold uppercase tracking-[0.2em] ${light ? "text-sand" : "text-brass"}`}>{kicker}</p>
      <h2 id={`${id}-h`} className={`mt-3 text-3xl font-bold tracking-tight sm:text-4xl ${light ? "text-white" : "text-ink"}`}>
        {title}
      </h2>
      {children ? <div className={`mt-4 text-[17px] leading-relaxed ${light ? "text-white/80" : "text-ink-soft"}`}>{children}</div> : null}
    </header>
  );
}

export function JeddahTaifRouteView({ faqs, crumbs }: { faqs: Faq[]; crumbs: Crumb[] }) {
  const P = TAIF_PHOTOS;
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative isolate overflow-hidden bg-midnight text-white">
        <Image src={P.hero.src} alt={P.hero.alt} fill priority sizes="100vw" className="-z-10 object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-midnight via-midnight/75 to-midnight/10" aria-hidden="true" />
        <div className="mx-auto grid max-w-6xl gap-10 px-4 pb-14 pt-28 sm:px-6 sm:pt-32 lg:grid-cols-[1fr_15rem] lg:items-end lg:px-8 lg:pb-20 lg:pt-40">
          <div>
            <Breadcrumbs items={crumbs} onDark />
            <p className="mt-10 font-mono text-xs font-bold uppercase tracking-[0.22em] text-sand">{c.hero.label}</p>
            <h1 className="mt-3 max-w-2xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">{c.hero.h1}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85">{c.hero.intro}</p>
            <dl className="mt-8 flex max-w-xl flex-wrap gap-x-8 gap-y-3">
              {c.hero.stats.map((s) => (
                <div key={s.k}>
                  <dt className="text-[11px] uppercase tracking-[0.18em] text-white/60">{s.k}</dt>
                  <dd className="text-xl font-bold">{s.v}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#arrange" className="inline-flex items-center gap-2 rounded-full bg-brass px-6 py-3 text-sm font-bold text-midnight transition hover:bg-white">
                Request a Quotation <ArrowRight className="size-4" aria-hidden="true" />
              </a>
              <a href={whatsappLink(WA)} className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold transition hover:border-sand hover:text-sand">
                <MessageCircle className="size-4" aria-hidden="true" /> WhatsApp
              </a>
            </div>
            <p className="mt-8 text-[11px] text-white/55">
              {P.hero.caption}.<Credit p={P.hero} light />
            </p>
          </div>
          {/* Ascent gauge */}
          <div className="hidden rounded-2xl border border-white/15 bg-black/30 p-5 backdrop-blur-sm lg:block" aria-hidden="true">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-sand">Height above sea level</p>
            <div className="mt-4 flex h-56 items-end gap-3">
              {c.journey.chapters.map((ch) => (
                <div key={ch.title} className="flex h-full flex-1 flex-col items-center justify-end gap-2">
                  <span className="font-mono text-[10px] text-white/80">{ch.alt.toLocaleString("en")}</span>
                  <span className="w-full rounded-t bg-sand/80" style={{ height: `${Math.max(4, (ch.alt / MAX_ALT) * 100)}%` }} />
                </div>
              ))}
            </div>
            <p className="mt-2 flex justify-between font-mono text-[10px] text-white/60">
              <span>Jeddah</span>
              <span>Taif</span>
            </p>
          </div>
        </div>
      </section>

      {/* ── Index ── */}
      <nav aria-label="On this page" className="border-b border-hairline bg-white">
        <ol className="mx-auto flex max-w-6xl flex-wrap gap-x-5 gap-y-2 px-4 py-4 text-sm sm:px-6 lg:px-8">
          {c.index.map((it) => (
            <li key={it.id}>
              <a href={`#${it.id}`} className="font-medium text-ink-soft underline-offset-4 hover:text-midnight hover:underline">
                {it.label}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      {/* ── Glance ── */}
      <section id="glance" aria-labelledby="glance-h" className="scroll-mt-28 bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:px-8">
          <div>
            <Head id="glance" kicker="At a glance" title={c.glance.heading} />
            <p className="mt-6 border-l-4 border-brass pl-4 text-[17px] font-medium leading-relaxed text-ink">{c.glance.answer}</p>
            <p className="mt-5 leading-relaxed text-ink-soft">{c.glance.why}</p>
            <p className="mt-5 text-xs leading-relaxed text-ink-muted">{c.glance.method}</p>
          </div>
          <dl className="self-start overflow-hidden rounded-2xl border border-hairline">
            {c.glance.facts.map((f, i) => (
              <div key={f.k} className={`grid grid-cols-[8rem_1fr] gap-3 px-5 py-3.5 text-sm ${i % 2 ? "bg-offwhite" : "bg-white"}`}>
                <dt className="font-semibold text-ink-muted">{f.k}</dt>
                <dd className="font-semibold text-ink">{f.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── Journey: altitude-stepped chapters ── */}
      <section id="journey" aria-labelledby="journey-h" className="scroll-mt-28 bg-offwhite py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Head id="journey" kicker="The route" title={c.journey.heading}>
            <p>{c.journey.intro}</p>
          </Head>
          <ol className="mt-12 space-y-10">
            {c.journey.chapters.map((ch, i) => {
              const p = ch.photo ? photos[ch.photo] : undefined;
              return (
                <li key={ch.title} className="grid gap-6 md:grid-cols-[11rem_1fr] md:gap-10">
                  <div className="md:pt-1">
                    <p className="font-mono text-sm font-bold text-ink">{ch.km}</p>
                    <p className="mt-1 font-mono text-xs text-ink-muted">≈{ch.alt.toLocaleString("en")} m</p>
                    <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-hairline" aria-hidden="true">
                      <div className="h-full rounded-full" style={{ width: `${Math.max(3, (ch.alt / MAX_ALT) * 100)}%`, background: GRANITE }} />
                    </div>
                  </div>
                  <div className={`grid gap-6 ${p ? "lg:grid-cols-[1fr_20rem]" : ""} lg:items-start`}>
                    <div>
                      <h3 className="text-xl font-bold text-ink">
                        <span className="mr-2 font-mono text-sm text-brass">{String(i + 1).padStart(2, "0")}</span>
                        {ch.title}
                      </h3>
                      <p className="mt-2 leading-relaxed text-ink-soft">{ch.text}</p>
                    </div>
                    {p ? <Pic p={p} ratio="aspect-[4/3]" sizes="(min-width: 1024px) 20rem, 100vw" /> : null}
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* ── Two roads ── */}
      <section id="roads" aria-labelledby="roads-h" className="scroll-mt-28 py-16 text-white sm:py-24" style={{ background: GRANITE }}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Head id="roads" kicker="The mountain road" title={c.roads.heading} light>
            <p>{c.roads.intro}</p>
          </Head>
          <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1.4fr]">
            <Pic p={P.night} ratio="aspect-[16/10]" sizes="(min-width: 1024px) 40vw, 100vw" light />
            <div className="overflow-x-auto rounded-xl border border-white/15">
              <table className="w-full min-w-[24rem] text-left text-sm">
                <caption className="sr-only">What to expect on the mountain road up to Taif</caption>
                <thead className="bg-black/25 text-xs uppercase tracking-[0.12em] text-sand">
                  <tr>
                    {c.roads.columns.map((col, i) => (
                      <th key={i} scope="col" className="px-4 py-3">
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {c.roads.rows.map(([a, b]) => (
                    <tr key={a}>
                      <th scope="row" className="px-4 py-3 font-semibold text-white">{a}</th>
                      <td className="px-4 py-3 text-white/85">{b}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-8 rounded-2xl bg-sand p-6 text-midnight sm:p-8">
            <h3 className="text-xl font-bold">{c.roads.stop.title}</h3>
            <p className="mt-2 max-w-3xl leading-relaxed">{c.roads.stop.text}</p>
            <a href="#arrange" className="mt-4 inline-flex items-center gap-2 text-sm font-bold underline decoration-2 underline-offset-4">
              Add it to your request <ArrowRight className="size-4" aria-hidden="true" />
            </a>
          </div>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl bg-white p-5 text-ink">
              <h3 className="font-bold">{c.roads.makkah.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{c.roads.makkah.text}</p>
            </div>
            <p className="rounded-xl bg-black/25 p-5 text-sm leading-relaxed text-white/85">{c.roads.closure}</p>
          </div>
        </div>
      </section>

      {/* ── Mountain conditions ── */}
      <section id="mountains" aria-labelledby="mountains-h" className="scroll-mt-28 bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:px-8">
          <div>
            <Head id="mountains" kicker="Landscape and weather" title={c.mountains.heading} />
            <div className="mt-6 space-y-5 text-[17px] leading-relaxed text-ink-soft">
              {c.mountains.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <p className="mt-6 flex items-start gap-3 rounded-xl bg-offwhite p-4 text-sm text-ink">
              <CloudFog className="mt-0.5 size-5 shrink-0 text-brass" aria-hidden="true" />
              It&apos;s noticeably cooler at the top, so a light layer is handy, especially in the evening.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5">
            <Pic p={P.haze} ratio="aspect-[16/10]" sizes="(min-width: 1024px) 45vw, 100vw" />
            <Pic p={P.switchbacks} ratio="aspect-[16/10]" sizes="(min-width: 1024px) 45vw, 100vw" className="hidden lg:block" />
          </div>
        </div>
      </section>

      {/* ── Beyond arrival ── */}
      <section id="taif" aria-labelledby="taif-h" className="scroll-mt-28 bg-offwhite py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Head id="taif" kicker="In and around Taif" title={c.taif.heading}>
            <p>{c.taif.intro}</p>
          </Head>
          <div className="mt-10 space-y-10">
            {c.taif.tiers.map((tier, ti) => (
              <div key={tier.name}>
                <p className="flex flex-wrap items-baseline gap-3">
                  <span className="rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider text-white" style={{ background: ti === 0 ? "#2f5d3a" : ti === 1 ? "#8a6d3b" : GRANITE }}>
                    {tier.name}
                  </span>
                  <span className="text-sm text-ink-muted">{tier.note}</span>
                </p>
                <div className="mt-4 grid gap-6 sm:grid-cols-2">
                  {tier.items.map((it) => {
                    const p = photos[it.photo];
                    return (
                      <article key={it.title} className="grid gap-4 rounded-2xl bg-white p-4 ring-1 ring-hairline sm:grid-cols-[10rem_1fr]">
                        <div className="relative aspect-[4/3] overflow-hidden rounded-lg sm:aspect-square">
                          <Image src={p.src} alt={p.alt} fill sizes="(min-width: 640px) 10rem, 100vw" className="object-cover" />
                        </div>
                        <div>
                          <h3 className="font-bold text-ink">{it.title}</h3>
                          <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{it.text}</p>
                          <p className="mt-2 text-[11px] text-ink-muted">
                            {p.caption}.<Credit p={p} />
                          </p>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Families ── */}
      <section id="families" aria-labelledby="families-h" className="scroll-mt-28 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Head id="families" kicker="Passengers" title={c.families.heading} />
          <dl className="mt-8 grid gap-x-10 gap-y-6 md:grid-cols-2">
            {c.families.items.map((f) => (
              <div key={f.t} className="border-t border-hairline pt-4">
                <dt className="font-bold text-ink">{f.t}</dt>
                <dd className="mt-1 leading-relaxed text-ink-soft">{f.d}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-8 max-w-3xl rounded-xl bg-brass-soft/60 p-5 font-medium leading-relaxed text-ink">{c.families.childSeats}</p>
        </div>
      </section>

      {/* ── Checklist ── */}
      <section id="checklist" aria-labelledby="checklist-h" className="scroll-mt-28 bg-offwhite py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Head id="checklist" kicker="Before you ask" title={c.checklist.heading} />
          <div className="mt-8 grid gap-6 lg:grid-cols-[1.5fr_1fr]">
            <div className="rounded-2xl bg-white p-6 ring-1 ring-hairline">
              <p className="text-sm font-semibold text-ink-muted">You provide</p>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {c.checklist.provide.map((it) => (
                  <li key={it}>
                    <label className="flex cursor-pointer items-start gap-3 rounded-lg p-2 text-ink hover:bg-offwhite">
                      <input type="checkbox" className="mt-1 size-4 shrink-0 accent-brass" />
                      {it}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl p-6 text-white" style={{ background: GRANITE }}>
              <p className="text-sm font-semibold text-sand">Confirmed in your quotation</p>
              <ul className="mt-4 space-y-3">
                {c.checklist.confirmed.map((it) => (
                  <li key={it} className="flex gap-3">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-sand" aria-hidden="true" />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Options ── */}
      <section id="options" aria-labelledby="options-h" className="scroll-mt-28 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Head id="options" kicker="Compare" title={c.options.heading}>
            <p>{c.options.intro}</p>
          </Head>
          <div className="mt-8 overflow-x-auto rounded-xl border border-hairline">
            <table className="w-full min-w-[36rem] text-left text-sm">
              <caption className="sr-only">Private road transfer compared with other ways to reach Taif</caption>
              <thead className="bg-midnight text-white">
                <tr>
                  {c.options.columns.map((col, i) => (
                    <th key={i} scope="col" className="px-4 py-3 font-semibold">
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-hairline">
                {c.options.rows.map(([a, b, d]) => (
                  <tr key={a}>
                    <th scope="row" className="px-4 py-3 font-bold text-ink">{a}</th>
                    <td className="px-4 py-3 text-ink-soft">{b}</td>
                    <td className="px-4 py-3 text-ink-soft">{d}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-ink-muted">{c.options.note}</p>
        </div>
      </section>

      {/* ── Vehicles ── */}
      <section id="vehicles" aria-labelledby="vehicles-h" className="scroll-mt-28 bg-offwhite py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Head id="vehicles" kicker="Fleet" title={c.vehicles.heading}>
            <p>{c.vehicles.intro}</p>
          </Head>
          <div className="mt-8 overflow-x-auto rounded-xl border border-hairline bg-white">
            <table className="w-full min-w-[40rem] text-left text-sm">
              <caption className="sr-only">Vehicle categories with passenger and luggage capacity</caption>
              <thead className="text-xs uppercase tracking-[0.12em] text-ink-muted">
                <tr className="border-b border-hairline">
                  <th scope="col" className="px-4 py-3">Category</th>
                  <th scope="col" className="px-4 py-3">Passengers</th>
                  <th scope="col" className="px-4 py-3">Luggage</th>
                  <th scope="col" className="px-4 py-3">Suits</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-hairline">
                {vehicles.map((v) => (
                  <tr key={v.id}>
                    <th scope="row" className="px-4 py-3 font-bold text-ink">
                      {v.name}
                      <span className="block text-xs font-normal text-ink-muted">{v.examples}</span>
                    </th>
                    <td className="px-4 py-3 text-ink-soft">{v.passengers}</td>
                    <td className="px-4 py-3 text-ink-soft">{v.luggage}</td>
                    <td className="px-4 py-3 text-ink-soft">{c.vehicles.fit[v.id] ?? ""}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Arrange + form ── */}
      <section id="arrange" aria-labelledby="arrange-h" className="scroll-mt-28 bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.4fr] lg:px-8">
          <div>
            <Head id="arrange" kicker="Quotation" title={c.arrange.heading} />
            <ol className="mt-8 space-y-5">
              {c.arrange.steps.map((s, i) => (
                <li key={s.t} className="grid grid-cols-[2.25rem_1fr] gap-3">
                  <span className="flex size-9 items-center justify-center rounded-full font-bold text-sand" style={{ background: GRANITE }}>
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-bold text-ink">{s.t}</h3>
                    <p className="mt-0.5 text-sm leading-relaxed text-ink-soft">{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>
            <a href={whatsappLink(WA)} className="mt-8 inline-flex items-center gap-2 rounded-full border border-hairline px-5 py-2.5 text-sm font-semibold text-midnight hover:border-brass">
              <MessageCircle className="size-4" aria-hidden="true" /> Prefer WhatsApp?
            </a>
          </div>
          <div className="rounded-2xl bg-offwhite p-5 ring-1 ring-hairline sm:p-6">
            <QuoteForm
              serviceType="Jeddah to Taif transfer"
              route="jeddah-to-taif"
              defaultPickup="Jeddah"
              defaultDropoff="Taif"
              messagePlaceholder={c.arrange.messagePlaceholder}
              flightField="airport"
            />
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" aria-labelledby="faq-h" className="scroll-mt-28 bg-offwhite py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Head id="faq" kicker="FAQs" title="Jeddah to Taif questions" />
          <div className="mt-8 divide-y divide-hairline rounded-2xl bg-white px-5 ring-1 ring-hairline sm:px-8">
            {faqs.map((f) => (
              <details key={f.question} className="group py-4">
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

      {/* ── Related, method, credits ── */}
      <section aria-labelledby="related-h" className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 id="related-h" className="text-2xl font-bold tracking-tight text-ink">{c.related.heading}</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {c.related.links.map((l) => (
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
          <div className="mt-6 max-w-4xl text-xs text-ink-muted">
            <h3 className="font-semibold text-ink-soft">Photo credits</h3>
            <ul className="mt-3 space-y-1.5">
              {Object.values(photos).map((p) => (
                <li key={p.src}>
                  “{p.credit.title}” by {p.credit.author},{" "}
                  <a href={p.credit.licenceUrl} rel="license noopener" target="_blank" className="underline">
                    {p.credit.licence}
                  </a>
                  , via{" "}
                  <a href={p.credit.source} rel="noopener" target="_blank" className="underline">
                    Wikimedia Commons
                  </a>
                  ; resized and converted to WebP. Shown as: {p.caption}.
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="relative isolate overflow-hidden py-20 text-white" style={{ background: GRANITE }}>
        <Image src={P.plateau.src} alt="" fill sizes="100vw" className="-z-10 object-cover opacity-25" />
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{c.final.heading}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-white/90">{c.final.text}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="#arrange" className="inline-flex items-center gap-2 rounded-full bg-brass px-6 py-3 text-sm font-bold text-midnight transition hover:bg-white">
              <Send className="size-4" aria-hidden="true" /> Request a Quotation
            </a>
            <a href={whatsappLink(WA)} className="inline-flex items-center gap-2 rounded-full border border-white/50 px-6 py-3 text-sm font-semibold transition hover:border-sand hover:text-sand">
              <MessageCircle className="size-4" aria-hidden="true" /> WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
