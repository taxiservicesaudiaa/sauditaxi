import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown, CloudFog, MessageCircle, Send } from "lucide-react";
import { Breadcrumbs, type Crumb } from "@/components/Breadcrumbs";
import { QuoteForm } from "@/components/QuoteForm";
import type { Faq } from "@/data/faqs";
import { ABHA_CITY as c, CITY_PHOTOS, ORIENTATION, type CityPhoto } from "@/data/abha-city-page";
import { vehicles } from "@/data/vehicles";
import { whatsappLink } from "@/lib/site";

/**
 * /taxi-service/abha — Asir highlands city page: a night-photo hero with a
 * facts strip, a to-scale orientation diagram beside a real ISS photograph,
 * an airport how-to, editorial destination rows tagged by journey type, a
 * numbered journey board, planning advice, fleet table with the child-seat
 * rule, verified intercity routes, a request panel with the shared QuoteForm,
 * FAQs and a visible photo-credit list. Copy and facts: data/abha-city-page.ts.
 */

const WA = "Hello! I'd like a quotation for a private transfer in Abha.";
const linkCls = "font-semibold text-midnight underline decoration-brass decoration-2 underline-offset-4 hover:text-brass";
const photos = CITY_PHOTOS as Record<string, CityPhoto>;

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

function Head({ id, kicker, title, children, dark = false }: { id: string; kicker: string; title: string; children?: React.ReactNode; dark?: boolean }) {
  return (
    <header className="max-w-3xl">
      <p className={`text-xs font-bold uppercase tracking-[0.22em] ${dark ? "text-brass" : "text-brass"}`}>{kicker}</p>
      <h2 id={`${id}-h`} className={`mt-3 text-3xl font-bold tracking-tight sm:text-4xl ${dark ? "text-white" : "text-ink"}`}>
        {title}
      </h2>
      {children ? <div className={`mt-4 text-[17px] leading-relaxed ${dark ? "text-white/80" : "text-ink-soft"}`}>{children}</div> : null}
    </header>
  );
}

function PhotoCredit({ p, light = false }: { p: CityPhoto; light?: boolean }) {
  return (
    <span className={light ? "text-white/60" : "text-ink-muted"}>
      {" "}
      Photo: {p.credit.author} ({p.credit.licence})
    </span>
  );
}

const LABEL_DY: Record<string, number> = { "Al-Soudah": -3.5, "Rijal Almaa": 3.5, "Abha Airport (AHB)": 4, "Khamis Mushait": -3 };

/** Straight-line positions to scale (1 unit = 1 km), rings at 5, 25 and 50 km. */
function Orientation() {
  const R = 52;
  return (
    <figure className="m-0">
      <svg viewBox={`${-R - 8} ${-R} ${R * 2 + 16} ${R * 2}`} role="img" aria-labelledby="ori-t ori-d" className="h-auto w-full">
        <title id="ori-t">Where Abha&apos;s destinations lie</title>
        <desc id="ori-d">
          Diagram centred on Abha. Green Mountain and Abha Dam Lake are within the city. Abha Airport and Khamis Mushait lie to the east, Al-Soudah to the west-north-west, Rijal Almaa to the west and Habala to the south-east.
        </desc>
        {[5, 25, 50].map((r) => (
          <g key={r}>
            <circle r={r} fill="none" stroke="currentColor" strokeOpacity="0.18" strokeDasharray={r === 5 ? "0" : "1.2 1.4"} strokeWidth="0.35" />
            <text x={r * 0.71 + 0.8} y={r * 0.71 + 2.6} fontSize="2.4" fill="currentColor" fillOpacity="0.5">
              {r} km
            </text>
          </g>
        ))}
        <text x="0" y={-R + 3} fontSize="2.8" textAnchor="middle" fill="currentColor" fillOpacity="0.6">
          N
        </text>
        {ORIENTATION.filter((o) => o.ring !== "city").map((o) => {
          const x = o.x;
          const y = -o.y;
          const right = x >= 0;
          const dy = LABEL_DY[o.name] ?? 0;
          return (
            <g key={o.name}>
              <line x1="0" y1="0" x2={x} y2={y} stroke="#c9a45c" strokeWidth="0.35" strokeOpacity="0.7" />
              <circle cx={x} cy={y} r="1.3" fill="#c9a45c" />
              <text x={x + (right ? 2 : -2)} y={y - 0.6 + dy} fontSize="3" fontWeight="700" fill="currentColor" textAnchor={right ? "start" : "end"}>
                {o.name}
              </text>
              <text x={x + (right ? 2 : -2)} y={y + 3 + dy} fontSize="2.4" fill="currentColor" fillOpacity="0.65" textAnchor={right ? "start" : "end"}>
                {o.road}
              </text>
            </g>
          );
        })}
        <circle r="5" fill="#c9a45c" fillOpacity="0.18" />
        <circle r="1.8" fill="#c9a45c" />
        <text x="0" y="-6.4" fontSize="3.4" fontWeight="800" textAnchor="middle" fill="currentColor">
          Abha
        </text>
        <text x="0" y="9" fontSize="2.3" textAnchor="middle" fill="currentColor" fillOpacity="0.65">
          Green Mountain · Dam Lake
        </text>
      </svg>
      <figcaption className="mt-3 text-xs leading-relaxed text-white/60">{c.region.diagramCaption}</figcaption>
    </figure>
  );
}

export function AbhaCityView({ faqs, crumbs }: { faqs: Faq[]; crumbs: Crumb[] }) {
  const P = CITY_PHOTOS;
  const all = Object.values(photos);
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative isolate overflow-hidden bg-midnight text-white">
        <Image src={P.greenMountain.src} alt={P.greenMountain.alt} fill priority sizes="100vw" className="-z-10 object-cover object-top" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-midnight via-midnight/80 to-midnight/20" aria-hidden="true" />
        <div className="absolute inset-0 -z-10 bg-midnight/55 sm:hidden" aria-hidden="true" />
        <div className="mx-auto max-w-6xl px-4 pb-14 pt-28 sm:px-6 sm:pt-32 lg:px-8 lg:pb-20 lg:pt-40">
          <Breadcrumbs items={crumbs} onDark />
          <div className="mt-12 max-w-2xl sm:mt-16">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-brass">{c.hero.eyebrow}</p>
            <h1 className="mt-4 text-5xl font-bold tracking-tight sm:text-6xl">{c.hero.h1}</h1>
            {c.hero.intro.map((p, i) => (
              <p key={i} className={`mt-5 text-lg leading-relaxed ${i === 0 ? "text-white/90" : "text-white/75"}`}>
                {p}
              </p>
            ))}
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#request" className="inline-flex items-center gap-2 rounded-full bg-brass px-6 py-3 text-sm font-bold text-midnight transition hover:bg-white">
                Request a Quotation <ArrowRight className="size-4" aria-hidden="true" />
              </a>
              <Link href="/city-transfers" className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold transition hover:border-brass hover:text-brass">
                City Transfers Overview
              </Link>
            </div>
          </div>
          <dl className="mt-12 flex max-w-xl divide-x divide-white/20 border-y border-white/20">
            {c.hero.facts.map((f) => (
              <div key={f.k} className="flex-1 px-4 py-4 first:pl-0">
                <dt className="text-[11px] uppercase tracking-[0.18em] text-white/60">{f.k}</dt>
                <dd className="mt-1 text-lg font-bold">{f.v}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-5 text-[11px] text-white/55">
            {P.greenMountain.caption}.<PhotoCredit p={P.greenMountain} light />
          </p>
        </div>
      </section>

      {/* ── Index ── */}
      <nav aria-label="On this page" className="border-b border-hairline bg-white">
        <ol className="mx-auto flex max-w-6xl flex-wrap gap-x-6 gap-y-2 px-4 py-4 text-sm sm:px-6 lg:px-8">
          {c.index.map((it) => (
            <li key={it.id}>
              <a href={`#${it.id}`} className="font-medium text-ink-soft underline-offset-4 hover:text-midnight hover:underline">
                {it.label}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      {/* ── Region ── */}
      <section id="region" aria-labelledby="region-h" className="scroll-mt-28 bg-midnight py-16 text-white sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Head id="region" kicker="Abha and Asir" title={c.region.heading} dark>
            <p className="border-l-4 border-brass pl-4 font-medium text-white">{c.region.answer}</p>
          </Head>
          <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
            <div className="rounded-2xl bg-white/5 p-4 sm:p-6">
              <Orientation />
            </div>
            <div>
              {c.region.paragraphs.map((p, i) => (
                <p key={i} className="mb-5 text-[17px] leading-relaxed text-white/80">
                  {p}
                </p>
              ))}
              <figure className="m-0 mt-6">
                <div className="relative aspect-[3/2] overflow-hidden rounded-2xl">
                  <Image src={P.iss.src} alt={P.iss.alt} fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
                </div>
                <figcaption className="mt-2 text-xs leading-relaxed text-white/60">
                  {P.iss.caption}.<PhotoCredit p={P.iss} light />
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* ── Airport ── */}
      <section id="airport" aria-labelledby="airport-h" className="scroll-mt-28 bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:px-8">
          <div>
            <Head id="airport" kicker="From the airport" title={c.airport.heading}>
              <p>{c.airport.intro}</p>
            </Head>
            <ol className="mt-8 space-y-0">
              {c.airport.steps.map((s, i) => (
                <li key={s.t} className="grid grid-cols-[3rem_1fr] gap-4 border-t border-hairline py-5">
                  <span className="font-mono text-2xl font-black text-brass">{i + 1}</span>
                  <div>
                    <h3 className="font-bold text-ink">{s.t}</h3>
                    <p className="mt-1 leading-relaxed text-ink-soft">{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="mt-4 leading-relaxed text-ink-soft">
              <RichText text={c.airport.note} />
            </p>
          </div>
          <figure className="m-0 self-center">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
              <Image src={P.street.src} alt={P.street.alt} fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
            </div>
            <figcaption className="mt-2 text-xs text-ink-soft">
              {P.street.caption}.<PhotoCredit p={P.street} />
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ── Destinations ── */}
      <section id="destinations" aria-labelledby="destinations-h" className="scroll-mt-28 bg-offwhite py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Head id="destinations" kicker="Around Abha" title={c.destinations.heading}>
            <p>{c.destinations.intro}</p>
          </Head>
          <div className="mt-12 space-y-14">
            {c.destinations.items.map((d, i) => {
              const p = d.photo ? photos[d.photo] : undefined;
              return (
                <article key={d.id} id={d.id} className={`grid gap-6 md:grid-cols-2 md:items-center md:gap-12 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
                  {p ? (
                    <figure className="m-0">
                      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                        <Image src={p.src} alt={p.alt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
                      </div>
                      <figcaption className="mt-2 text-xs text-ink-soft">
                        {p.caption}.<PhotoCredit p={p} />
                      </figcaption>
                    </figure>
                  ) : (
                    <div className="flex aspect-[4/3] flex-col justify-end rounded-2xl bg-midnight p-8 text-white">
                      <p className="font-mono text-sm text-brass">≈30 km · east</p>
                      <p className="mt-2 text-3xl font-black">Abha ↔ Khamis Mushait</p>
                    </div>
                  )}
                  <div>
                    <p className="flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-[0.16em]">
                      <span className={`rounded-full px-3 py-1 ${d.type === "Local transfer" ? "bg-sand-soft text-ink" : d.type === "Sightseeing request" ? "bg-midnight text-brass" : "bg-brass-soft text-ink"}`}>{d.type}</span>
                      <span className="text-ink-muted">{d.where}</span>
                    </p>
                    <h3 className="mt-4 text-2xl font-bold tracking-tight text-ink sm:text-3xl">{d.name}</h3>
                    <p className="mt-3 text-[17px] leading-relaxed text-ink">{d.text}</p>
                    <p className="mt-4 flex gap-2 border-l-2 border-brass pl-3 text-sm leading-relaxed text-ink-soft">
                      <span className="font-semibold text-ink">Transport:</span> {d.plan}
                    </p>
                    {"href" in d && d.href ? (
                      <Link href={d.href} className={`mt-4 inline-block text-sm ${linkCls}`}>
                        {d.linkLabel}
                      </Link>
                    ) : null}
                  </div>
                </article>
              );
            })}
          </div>
          <div className="mt-14 grid gap-4 sm:grid-cols-3">
            {[P.city, P.cablecar, P.slopes].map((p) => (
              <figure key={p.src} className="m-0">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                  <Image src={p.src} alt={p.alt} fill sizes="(min-width: 640px) 33vw, 100vw" className="object-cover" />
                </div>
                <figcaption className="mt-2 text-xs text-ink-soft">
                  {p.caption}.<PhotoCredit p={p} />
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── Journey board ── */}
      <section id="journeys" aria-labelledby="journeys-h" className="scroll-mt-28 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Head id="journeys" kicker="Journey types" title={c.journeys.heading} />
          <ol className="mt-10 divide-y divide-hairline border-y border-hairline">
            {c.journeys.items.map((j) => (
              <li key={j.n} className="grid items-center gap-2 py-5 sm:grid-cols-[4rem_14rem_1fr_auto] sm:gap-6">
                <span className="font-mono text-sm font-bold text-brass">{j.n}</span>
                <h3 className="text-lg font-bold text-ink">{j.title}</h3>
                <p className="text-ink-soft">{j.text}</p>
                {j.href.startsWith("#") ? (
                  <a href={j.href} className="inline-flex items-center gap-1 text-sm font-semibold text-midnight hover:text-brass">
                    {j.link} <ArrowRight className="size-3.5" aria-hidden="true" />
                  </a>
                ) : (
                  <Link href={j.href} className="inline-flex items-center gap-1 text-sm font-semibold text-midnight hover:text-brass">
                    {j.link} <ArrowRight className="size-3.5" aria-hidden="true" />
                  </Link>
                )}
              </li>
            ))}
          </ol>
          <p className="mt-6 text-ink-soft">
            <RichText text={c.journeys.hotelNote} />
          </p>
        </div>
      </section>

      {/* ── Planning ── */}
      <section id="planning" aria-labelledby="planning-h" className="scroll-mt-28 bg-offwhite py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.3fr] lg:px-8">
          <div>
            <Head id="planning" kicker="Sightseeing days" title={c.planning.heading}>
              <p>{c.planning.intro}</p>
            </Head>
            <p className="mt-8 flex items-start gap-3 rounded-2xl bg-midnight p-5 text-sm leading-relaxed text-white/85">
              <CloudFog className="mt-0.5 size-5 shrink-0 text-brass" aria-hidden="true" />
              Mountain weather changes quickly in Asir. Keep a back-up plan for viewpoints that may be in cloud.
            </p>
          </div>
          <ul className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
            {c.planning.tips.map((t) => (
              <li key={t.t} className="border-t-2 border-brass pt-4">
                <h3 className="font-bold text-ink">{t.t}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{t.d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Vehicles ── */}
      <section id="vehicles" aria-labelledby="vehicles-h" className="scroll-mt-28 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Head id="vehicles" kicker="Families and groups" title={c.vehicles.heading}>
            <p>{c.vehicles.intro}</p>
          </Head>
          <div className="mt-8 overflow-x-auto rounded-xl border border-hairline">
            <table className="w-full min-w-[40rem] text-left text-sm">
              <caption className="sr-only">Vehicle classes with passenger and luggage capacity</caption>
              <thead className="bg-midnight text-white">
                <tr>
                  <th scope="col" className="px-4 py-3">Vehicle</th>
                  <th scope="col" className="px-4 py-3">Passengers</th>
                  <th scope="col" className="px-4 py-3">Luggage</th>
                  <th scope="col" className="px-4 py-3">Suits</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-hairline">
                {vehicles.map((v) => (
                  <tr key={v.id} className="even:bg-offwhite">
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
          <p className="mt-6 max-w-3xl rounded-xl bg-brass-soft/60 p-5 font-medium leading-relaxed text-ink">{c.vehicles.childSeats}</p>
        </div>
      </section>

      {/* ── Intercity ── */}
      <section id="intercity" aria-labelledby="intercity-h" className="scroll-mt-28 bg-offwhite py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Head id="intercity" kicker="Other cities" title={c.intercity.heading}>
            <p>{c.intercity.intro}</p>
          </Head>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {c.intercity.routes.map((r) => (
              <li key={r.href}>
                <Link href={r.href} className="group flex h-full flex-col border-l-4 border-brass bg-white p-5 transition hover:bg-sand-soft/40">
                  <span className="flex items-center gap-1.5 text-lg font-bold text-ink">
                    {r.label} <ArrowRight className="size-4 text-brass transition group-hover:translate-x-0.5" aria-hidden="true" />
                  </span>
                  {r.meta ? <span className="mt-1 font-mono text-xs text-ink-muted">{r.meta}</span> : null}
                  <span className="mt-2 text-sm text-ink-soft">{r.text}</span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-ink-soft">
            <RichText text={c.intercity.note} />
          </p>
        </div>
      </section>

      {/* ── Request ── */}
      <section id="request" aria-labelledby="request-h" className="scroll-mt-28 bg-midnight py-16 text-white sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.4fr] lg:px-8">
          <div>
            <Head id="request" kicker="Request a quote" title={c.request.heading} dark />
            <ol className="mt-8 space-y-3">
              {c.request.steps.map((s, i) => (
                <li key={s} className="flex gap-3">
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-brass text-sm font-bold text-midnight">{i + 1}</span>
                  <span className="pt-0.5 text-white/85">{s}</span>
                </li>
              ))}
            </ol>
            <p className="mt-6 border-l-4 border-brass pl-4 text-white">{c.request.note}</p>
            <a href={whatsappLink(WA)} className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-2.5 text-sm font-semibold hover:border-brass hover:text-brass">
              <MessageCircle className="size-4" aria-hidden="true" /> Prefer WhatsApp?
            </a>
          </div>
          <div className="rounded-2xl bg-white p-5 text-ink sm:p-6">
            <QuoteForm
              serviceType="Abha city transfer"
              city="Abha"
              defaultPickup="Abha"
              dropoffPlaceholder={c.request.dropoffPlaceholder}
              messagePlaceholder={c.request.messagePlaceholder}
              flightField="airport"
            />
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" aria-labelledby="faq-h" className="scroll-mt-28 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Head id="faq" kicker="FAQs" title="Abha transfer questions" />
          <div className="mt-8 divide-y divide-hairline border-y border-hairline">
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
          <div className="mt-6 text-xs text-ink-muted">
            <h3 className="font-semibold text-ink-soft">Photo credits</h3>
            <ul className="mt-3 space-y-1.5">
              {all.map((p) => (
                <li key={p.src}>
                  “{p.credit.title}” by {p.credit.author},{" "}
                  {p.credit.licenceUrl ? (
                    <a href={p.credit.licenceUrl} rel="license noopener" target="_blank" className="underline">
                      {p.credit.licence}
                    </a>
                  ) : (
                    p.credit.licence
                  )}
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
      <section className="relative isolate overflow-hidden bg-midnight py-20 text-white">
        <Image src={P.soudah.src} alt="" fill sizes="100vw" className="-z-10 object-cover opacity-30" />
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{c.final.heading}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-white/85">{c.final.text}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="#request" className="inline-flex items-center gap-2 rounded-full bg-brass px-6 py-3 text-sm font-bold text-midnight transition hover:bg-white">
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
