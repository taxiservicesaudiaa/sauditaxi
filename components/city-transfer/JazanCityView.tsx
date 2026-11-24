import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Ban, ChevronDown, MessageCircle, RotateCcw, Send, Ship } from "lucide-react";
import { Breadcrumbs, type Crumb } from "@/components/Breadcrumbs";
import { QuoteForm } from "@/components/QuoteForm";
import type { Faq } from "@/data/faqs";
import { JAZAN as c, JAZAN_PHOTOS, RULER, type JazanPhoto } from "@/data/jazan-city-page";
import { vehicles } from "@/data/vehicles";
import { whatsappLink } from "@/lib/site";

/**
 * /taxi-service/jazan — coastal layout: sunset hero with a "tide" strip, a
 * coast / islands / highlands triptych, a to-scale distance ruler, airport
 * steps, a ferry-journey diagram that marks where the road transfer ends,
 * a transfer-vs-tour comparison for the Fayfa Mountains, a journey board, a
 * connections table, fleet table, a two-column checklist (prepare vs confirmed),
 * the shared QuoteForm, FAQs and visible photo credits.
 * Copy and facts: data/jazan-city-page.ts.
 */

const WA = "Hello! I'd like a quotation for a private transfer in Jazan.";
const SEA = "#0e4f5c";
const linkCls = "font-semibold text-midnight underline decoration-brass decoration-2 underline-offset-4 hover:text-brass";
const photos = JAZAN_PHOTOS as Record<string, JazanPhoto>;

function RichText({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\]\(\/[^)\s]*\))/g);
  return (
    <>
      {parts.map((part, i) => {
        const m = part.match(/^\[([^\]]+)\]\((\/[^)\s]*)\)$/);
        return m ? (
          <Link key={i} href={m[2]} className={linkCls}>
            {m[1]}
          </Link>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        );
      })}
    </>
  );
}

function Credit({ p, light = false }: { p: JazanPhoto; light?: boolean }) {
  return (
    <span className={light ? "text-white/60" : "text-ink-muted"}>
      {" "}
      Photo: {p.credit.author} ({p.credit.licence})
    </span>
  );
}

function Pic({ p, ratio, sizes, className = "", light = false }: { p: JazanPhoto; ratio: string; sizes: string; className?: string; light?: boolean }) {
  return (
    <figure className={`m-0 ${className}`}>
      <div className={`relative overflow-hidden ${ratio}`}>
        <Image src={p.src} alt={p.alt} fill sizes={sizes} className="object-cover" />
      </div>
      <figcaption className={`mt-2 text-xs leading-relaxed ${light ? "text-white/70" : "text-ink-soft"}`}>
        {p.caption}.<Credit p={p} light={light} />
      </figcaption>
    </figure>
  );
}

function Title({ id, kicker, title, light = false }: { id: string; kicker: string; title: string; light?: boolean }) {
  return (
    <>
      <p className={`text-xs font-bold uppercase tracking-[0.22em] ${light ? "text-sand" : "text-brass"}`}>{kicker}</p>
      <h2 id={`${id}-h`} className={`mt-3 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl ${light ? "text-white" : "text-ink"}`}>
        {title}
      </h2>
    </>
  );
}

export function JazanCityView({ faqs, crumbs }: { faqs: Faq[]; crumbs: Crumb[] }) {
  const P = JAZAN_PHOTOS;
  const max = 330;
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative isolate overflow-hidden bg-midnight text-white">
        <Image src={P.sunset.src} alt={P.sunset.alt} fill priority sizes="100vw" className="-z-10 object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-midnight via-midnight/60 to-midnight/10" aria-hidden="true" />
        <div className="mx-auto flex min-h-[44rem] max-w-6xl flex-col px-4 pb-10 pt-28 sm:px-6 sm:pt-32 lg:px-8 lg:pt-36">
          <Breadcrumbs items={crumbs} onDark />
          <div className="mt-auto max-w-2xl pt-16">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-sand">{c.hero.eyebrow}</p>
            <h1 className="mt-4 text-5xl font-bold tracking-tight sm:text-6xl">{c.hero.h1}</h1>
            {c.hero.intro.map((p, i) => (
              <p key={i} className={`mt-5 text-lg leading-relaxed ${i === 0 ? "text-white/90" : "text-white/75"}`}>
                {p}
              </p>
            ))}
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#request" className="inline-flex items-center gap-2 rounded-full bg-brass px-6 py-3 text-sm font-bold text-midnight transition hover:bg-white">
                Get a Jazan Quote <ArrowRight className="size-4" aria-hidden="true" />
              </a>
              <Link href="/city-transfers" className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold transition hover:border-sand hover:text-sand">
                City Transfers Overview
              </Link>
            </div>
          </div>
          <dl className="mt-10 grid grid-cols-3 overflow-hidden rounded-xl border border-white/15 text-center backdrop-blur-sm">
            {c.hero.tide.map((t, i) => (
              <div key={t.k} className="px-2 py-3" style={{ background: i === 0 ? "rgba(194,164,120,0.18)" : i === 1 ? "rgba(14,79,92,0.45)" : "rgba(34,90,60,0.4)" }}>
                <dt className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/70">{t.k}</dt>
                <dd className="mt-1 text-sm font-semibold sm:text-base">{t.v}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 text-[11px] text-white/55">
            {P.sunset.caption}.<Credit p={P.sunset} light />
          </p>
        </div>
      </section>

      {/* ── Triptych ── */}
      <section id="regions" aria-labelledby="regions-h" className="scroll-mt-28 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Title id="regions" kicker="Discovering Jazan" title={c.triptych.heading} />
          <p className="mt-4 max-w-3xl text-[17px] leading-relaxed text-ink-soft">{c.triptych.intro}</p>
          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl bg-hairline md:grid-cols-3">
            {c.triptych.parts.map((part, i) => {
              const p = photos[part.photo];
              return (
                <article key={part.name} className="flex flex-col bg-white">
                  <div className="relative aspect-[4/3]">
                    <Image src={p.src} alt={p.alt} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
                    <span className="absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider text-white" style={{ background: i === 0 ? "#8a6d3b" : i === 1 ? SEA : "#2f5d3a" }}>
                      {part.name}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="leading-relaxed text-ink">{part.text}</p>
                    <dl className="mt-5 space-y-3 border-t border-hairline pt-4 text-sm">
                      <div>
                        <dt className="text-xs font-bold uppercase tracking-[0.14em] text-ink-muted">Journey type</dt>
                        <dd className="mt-0.5 font-semibold text-ink">{part.type}</dd>
                      </div>
                      <div>
                        <dt className="text-xs font-bold uppercase tracking-[0.14em] text-ink-muted">What to send</dt>
                        <dd className="mt-0.5 text-ink-soft">{part.send}</dd>
                      </div>
                    </dl>
                    <p className="mt-auto pt-4 text-[11px] text-ink-muted">
                      {p.caption}.<Credit p={p} />
                    </p>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Distance ruler */}
          <div className="mt-14 rounded-2xl p-6 text-white sm:p-8" style={{ background: SEA }}>
            <h3 className="text-xl font-bold">{c.ruler.heading}</h3>
            <ol className="mt-6 space-y-3">
              {RULER.map((r) => (
                <li key={r.name} className="grid grid-cols-[8.5rem_1fr] items-center gap-3 sm:grid-cols-[12rem_1fr]">
                  <span className="text-sm font-semibold">{r.name}</span>
                  <span className="flex items-center gap-3">
                    <span className="h-2.5 rounded-full bg-sand" style={{ width: `${Math.max(2, (r.km / max) * 100) * 0.78}%` }} aria-hidden="true" />
                    <span className="whitespace-nowrap font-mono text-xs text-white/85">{r.label}</span>
                  </span>
                </li>
              ))}
            </ol>
            <p className="mt-5 text-xs leading-relaxed text-white/65">{c.ruler.note}</p>
          </div>
        </div>
      </section>

      {/* ── Airport ── */}
      <section id="airport" aria-labelledby="airport-h" className="scroll-mt-28 bg-offwhite py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.2fr] lg:px-8">
          <div>
            <Title id="airport" kicker="Flying in" title={c.airport.heading} />
            <p className="mt-4 text-[17px] leading-relaxed text-ink-soft">{c.airport.intro}</p>
            <p className="mt-5 text-ink-soft">
              <RichText text={c.airport.link} />
            </p>
          </div>
          <ol className="grid gap-4 sm:grid-cols-2">
            {c.airport.steps.map((s, i) => (
              <li key={s.t} className="border-l-4 bg-white p-5" style={{ borderColor: SEA }}>
                <span className="font-mono text-xs font-bold" style={{ color: SEA }}>
                  STEP {i + 1}
                </span>
                <h3 className="mt-1 font-bold text-ink">{s.t}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Ferry ── */}
      <section id="ferry" aria-labelledby="ferry-h" className="scroll-mt-28 py-16 text-white sm:py-24" style={{ background: SEA }}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Title id="ferry" kicker="Farasan Islands" title={c.ferry.heading} light />
          <p className="mt-4 max-w-3xl text-[17px] leading-relaxed text-white/85">{c.ferry.intro}</p>

          <ol className="mt-12 grid gap-3 md:grid-cols-5" aria-label="Journey from Jazan to the Farasan Islands">
            {c.ferry.journey.map((j, i) => (
              <li
                key={j.label}
                className={`relative rounded-xl p-4 ${j.ours ? "bg-white text-ink" : "border-2 border-dashed border-white/50 text-white"}`}
              >
                <span className="font-mono text-[11px] font-bold uppercase tracking-wider" style={{ color: j.ours ? SEA : "#e9d7ae" }}>
                  {j.ours ? "Road transfer" : "Not part of the transfer"}
                </span>
                <p className="mt-2 flex items-center gap-2 font-bold">
                  {i === 3 ? <Ship className="size-4" aria-hidden="true" /> : null}
                  {j.label}
                </p>
                <p className={`mt-1 text-sm ${j.ours ? "text-ink-soft" : "text-white/75"}`}>{j.sub}</p>
                {i < c.ferry.journey.length - 1 ? (
                  <ArrowRight className="absolute -right-3 top-1/2 hidden size-5 -translate-y-1/2 text-sand md:block" aria-hidden="true" />
                ) : null}
              </li>
            ))}
          </ol>
          <div className="mt-6 flex max-w-4xl gap-3 rounded-xl bg-white p-5 text-ink">
            <RotateCcw className="mt-0.5 size-5 shrink-0" style={{ color: SEA }} aria-hidden="true" />
            <div>
              <h3 className="font-bold">{c.ferry.returnLeg.title}</h3>
              <p className="mt-1 leading-relaxed text-ink-soft">{c.ferry.returnLeg.text}</p>
            </div>
          </div>
          <p className="mt-4 flex max-w-4xl gap-3 rounded-xl bg-black/25 p-5 leading-relaxed">
            <Ban className="mt-0.5 size-5 shrink-0 text-sand" aria-hidden="true" />
            {c.ferry.notIncluded}
          </p>

          <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.1fr]">
            <ul className="space-y-6">
              {c.ferry.points.map((pt) => (
                <li key={pt.t}>
                  <h3 className="font-bold text-sand">{pt.t}</h3>
                  <p className="mt-1 leading-relaxed text-white/85">{pt.d}</p>
                </li>
              ))}
            </ul>
            <div className="grid grid-cols-2 gap-4">
              <Pic p={P.farasanPort} ratio="aspect-[4/3] rounded-xl" sizes="(min-width: 1024px) 26vw, 50vw" className="col-span-2" light />
              <Pic p={P.flamingos} ratio="aspect-square rounded-xl" sizes="(min-width: 1024px) 13vw, 50vw" light />
              <Pic p={P.farasanFort} ratio="aspect-square rounded-xl" sizes="(min-width: 1024px) 13vw, 50vw" light />
            </div>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Pic p={P.iss} ratio="aspect-[3/2] rounded-xl" sizes="(min-width: 768px) 50vw, 100vw" light />
            <Pic p={P.farasanHouse} ratio="aspect-[3/2] rounded-xl" sizes="(min-width: 768px) 50vw, 100vw" light />
          </div>
        </div>
      </section>

      {/* ── Highlands ── */}
      <section id="highlands" aria-labelledby="highlands-h" className="scroll-mt-28 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Title id="highlands" kicker="Inland" title={c.highlands.heading} />
          <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_1fr]">
            <div className="space-y-5 text-[17px] leading-relaxed text-ink-soft">
              {c.highlands.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              <p className="rounded-xl bg-offwhite p-4 text-sm text-ink">{c.highlands.send}</p>
            </div>
            <Pic p={P.fayfa2} ratio="aspect-[16/9] w-full rounded-xl" sizes="(min-width: 1024px) 45vw, 100vw" className="self-start" />
          </div>
          <div className="mt-12">
            <h3 className="text-xl font-bold text-ink">{c.highlands.compare.heading}</h3>
            <div className="mt-5 grid gap-px overflow-hidden rounded-xl bg-hairline md:grid-cols-2">
              {[c.highlands.compare.transfer, c.highlands.compare.tour].map((col, i) => (
                <div key={col.title} className={i === 0 ? "bg-white p-6" : "bg-offwhite p-6"}>
                  <p className="font-bold text-ink">{col.title}</p>
                  <ul className="mt-3 space-y-2 text-sm leading-relaxed text-ink-soft">
                    {col.items.map((it) => (
                      <li key={it} className="flex gap-2">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brass" aria-hidden="true" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── City ── */}
      <section id="city" aria-labelledby="city-h" className="scroll-mt-28 bg-offwhite py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.2fr_1fr] lg:px-8">
          <div>
            <Title id="city" kicker="In town" title={c.city.heading} />
            <div className="mt-6 space-y-5 text-[17px] leading-relaxed text-ink-soft">
              {c.city.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <ul className="mt-6 space-y-2">
              {c.city.tips.map((t) => (
                <li key={t} className="flex gap-3 text-ink">
                  <ArrowRight className="mt-1 size-4 shrink-0 text-brass" aria-hidden="true" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <Pic p={P.mangroves2} ratio="aspect-[4/3] rounded-2xl" sizes="(min-width: 1024px) 40vw, 100vw" className="self-center" />
        </div>
      </section>

      {/* ── Journeys ── */}
      <section id="journeys" aria-labelledby="journeys-h" className="scroll-mt-28 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Title id="journeys" kicker="Journey types" title={c.journeys.heading} />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {c.journeys.items.map((j) => {
              const inner = (
                <>
                  <span className="font-mono text-3xl font-black text-sand">{j.n}</span>
                  <h3 className="mt-3 text-lg font-bold leading-snug text-ink">{j.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{j.text}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-midnight group-hover:text-brass">
                    {j.link} <ArrowRight className="size-3.5" aria-hidden="true" />
                  </span>
                </>
              );
              const cls = "group flex h-full flex-col border-t-4 border-brass bg-offwhite p-5 transition hover:bg-sand-soft/50";
              return (
                <li key={j.n}>
                  {j.href.startsWith("#") ? (
                    <a href={j.href} className={cls}>
                      {inner}
                    </a>
                  ) : (
                    <Link href={j.href} className={cls}>
                      {inner}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* ── Connections ── */}
      <section id="connections" aria-labelledby="connections-h" className="scroll-mt-28 bg-midnight py-16 text-white sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Title id="connections" kicker="Southern Saudi Arabia" title={c.connections.heading} light />
          <p className="mt-4 max-w-3xl text-white/80">{c.connections.intro}</p>
          <div className="mt-8 overflow-x-auto rounded-xl border border-white/15">
            <table className="w-full min-w-[36rem] text-left text-sm">
              <caption className="sr-only">Road distances and driving times from Jazan to other cities</caption>
              <thead className="bg-white/10 text-xs uppercase tracking-[0.12em] text-white/70">
                <tr>
                  <th scope="col" className="px-4 py-3">From Jazan to</th>
                  <th scope="col" className="px-4 py-3">Distance</th>
                  <th scope="col" className="px-4 py-3">Driving time</th>
                  <th scope="col" className="px-4 py-3">More</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {c.connections.rows.map((r) => (
                  <tr key={r.to}>
                    <th scope="row" className="px-4 py-4">
                      <span className="text-base font-bold">{r.to}</span>
                      <span className="block text-xs font-normal text-white/65">{r.note}</span>
                    </th>
                    <td className="px-4 py-4 font-mono text-white/85">{r.dist || "See route page"}</td>
                    <td className="px-4 py-4 font-mono text-white/85">{r.time || "—"}</td>
                    <td className="px-4 py-4">
                      <Link href={r.href} className="inline-flex items-center gap-1 font-semibold text-sand hover:text-white">
                        {r.link} <ArrowRight className="size-3.5" aria-hidden="true" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5 max-w-3xl text-sm leading-relaxed text-white/70 [&_a]:text-sand [&_a]:decoration-sand">
            <RichText text={c.connections.note} />
          </p>
        </div>
      </section>

      {/* ── Families ── */}
      <section id="families" aria-labelledby="families-h" className="scroll-mt-28 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Title id="families" kicker="Vehicles" title={c.families.heading} />
          <p className="mt-4 max-w-3xl text-ink-soft">{c.families.intro}</p>
          <div className="mt-8 overflow-x-auto rounded-xl border border-hairline">
            <table className="w-full min-w-[40rem] text-left text-sm">
              <caption className="sr-only">Vehicle classes with passenger and luggage capacity</caption>
              <thead className="text-xs uppercase tracking-[0.12em] text-white" style={{ background: SEA }}>
                <tr>
                  <th scope="col" className="px-4 py-3">Vehicle</th>
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
                    <td className="px-4 py-3 text-ink-soft">{c.families.fit[v.id] ?? ""}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <p className="rounded-xl bg-offwhite p-5 leading-relaxed text-ink">{c.families.equipment}</p>
            <p className="rounded-xl bg-brass-soft/60 p-5 font-medium leading-relaxed text-ink">{c.families.childSeats}</p>
          </div>
        </div>
      </section>

      {/* ── Checklist ── */}
      <section id="checklist" aria-labelledby="checklist-h" className="scroll-mt-28 bg-offwhite py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Title id="checklist" kicker="Before you ask" title={c.checklist.heading} />
          <div className="mt-8 grid gap-6 lg:grid-cols-[1.5fr_1fr]">
            <div className="rounded-2xl bg-white p-6 ring-1 ring-hairline">
              <p className="text-sm font-semibold text-ink-muted">{c.checklist.prepNote}</p>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {c.checklist.prep.map((it) => (
                  <li key={it}>
                    <label className="flex cursor-pointer items-start gap-3 rounded-lg p-2 text-ink hover:bg-offwhite">
                      <input type="checkbox" className="mt-1 size-4 shrink-0 accent-brass" />
                      {it}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl p-6 text-white" style={{ background: SEA }}>
              <p className="text-sm font-semibold text-sand">{c.checklist.confirmedNote}</p>
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

      {/* ── Request ── */}
      <section id="request" aria-labelledby="request-h" className="scroll-mt-28 bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.4fr] lg:px-8">
          <div>
            <Title id="request" kicker="Quotation" title={c.request.heading} />
            <ol className="mt-8 border-l-2 border-brass/40 pl-6">
              {c.request.steps.map((s, i) => (
                <li key={s} className="relative pb-5 last:pb-0">
                  <span className="absolute -left-[35px] flex size-6 items-center justify-center rounded-full bg-midnight text-xs font-bold text-sand">{i + 1}</span>
                  <span className="text-ink">{s}</span>
                </li>
              ))}
            </ol>
            <p className="mt-6 border-l-4 border-brass pl-4 font-medium text-ink">{c.request.note}</p>
            <a href={whatsappLink(WA)} className="mt-6 inline-flex items-center gap-2 rounded-full border border-hairline px-5 py-2.5 text-sm font-semibold text-midnight hover:border-brass">
              <MessageCircle className="size-4" aria-hidden="true" /> Prefer WhatsApp?
            </a>
          </div>
          <div className="rounded-2xl bg-offwhite p-5 ring-1 ring-hairline sm:p-6">
            <QuoteForm
              serviceType="Jazan city transfer"
              city="Jazan"
              defaultPickup="Jazan"
              dropoffPlaceholder={c.request.dropoffPlaceholder}
              messagePlaceholder={c.request.messagePlaceholder}
              flightField="airport"
            />
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" aria-labelledby="faq-h" className="scroll-mt-28 bg-offwhite py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Title id="faq" kicker="FAQs" title="Jazan transfer questions" />
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
          <p className="mt-8 text-xs leading-relaxed text-ink-muted">{c.method}</p>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="relative isolate overflow-hidden py-20 text-white" style={{ background: SEA }}>
        <Image src={P.farasanSea.src} alt="" fill sizes="100vw" className="-z-10 object-cover opacity-25" />
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{c.final.heading}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-white/90">{c.final.text}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="#request" className="inline-flex items-center gap-2 rounded-full bg-brass px-6 py-3 text-sm font-bold text-midnight transition hover:bg-white">
              <Send className="size-4" aria-hidden="true" /> Get a Jazan Quote
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
