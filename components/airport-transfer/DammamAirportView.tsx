import Link from "next/link";
import {
  ArrowRight,
  Baby,
  Briefcase,
  Building2,
  ChevronDown,
  Globe,
  HardHat,
  Hotel,
  MessageCircle,
  PlaneLanding,
  Radar,
  Send,
  ShieldAlert,
  Users,
} from "lucide-react";
import { Breadcrumbs, type Crumb } from "@/components/Breadcrumbs";
import { QuoteForm } from "@/components/QuoteForm";
import type { Faq } from "@/data/faqs";
import { DMM_PAGE as c } from "@/data/dammam-airport-page";
import { vehicles } from "@/data/vehicles";
import { whatsappLink } from "@/lib/site";

/**
 * /airport-transfer/dammam-airport — "arrivals guide" layout: a departures-
 * board hero with a GET hand-off to /get-quote, an in-page index, a boarding-
 * pass fact card, an arrival timeline, a coordinate-plotted Eastern Province
 * map, editorial destination rows, a comparison table, a timetable-style route
 * list, traveller notes, a fleet table, a native-checkbox checklist, booking
 * steps, the shared QuoteForm and a native <details> FAQ. Copy and owner rules:
 * data/dammam-airport-page.ts.
 */

const WA_MESSAGE = "Hello! I'd like a quotation for a private transfer from King Fahd International Airport (DMM).";
const linkCls = "font-semibold text-midnight underline decoration-brass decoration-2 underline-offset-4 hover:text-brass";

// ── Schematic map projection (equirectangular, cos 26.5° on longitude) ──
const LON0 = 49.5;
const LAT0 = 27.15;
const p = (lon: number, lat: number) => [+((lon - LON0) * 89.5).toFixed(1), +((LAT0 - lat) * 100).toFixed(1)] as const;
const pts = (list: [number, number][]) => list.map(([lo, la]) => p(lo, la).join(",")).join(" ");
const SEA: [number, number][] = [
  [49.64, 27.15], [49.72, 27.0], [49.9, 26.85], [50.05, 26.73], [50.17, 26.66], [50.04, 26.58], [50.12, 26.46],
  [50.21, 26.33], [50.23, 26.22], [50.15, 26.1], [50.05, 26.04], [50.1, 25.8], [50.75, 25.8], [50.75, 27.15],
];
const BAHRAIN: [number, number][] = [
  [50.5, 26.27], [50.61, 26.25], [50.64, 26.12], [50.6, 25.96], [50.55, 25.82], [50.48, 25.95], [50.46, 26.15],
];
const DMM_LL: [number, number] = [49.8, 26.47];
const labelSide: Record<string, "start" | "end" | "middle"> = { dhahran: "end", khobar: "start", dammam: "start", jubail: "start", abqaiq: "start", bahrain: "middle" };

function RegionMap() {
  const [ax, ay] = p(...DMM_LL);
  return (
    <figure className="m-0">
      <svg viewBox="0 0 112 135" role="img" aria-labelledby="dmm-map-t" className="h-auto w-full">
        <title id="dmm-map-t">
          Schematic map of the Eastern Province showing King Fahd International Airport inland, Dammam, Dhahran and Al Khobar on the coast, Jubail to the north, Abqaiq to the south-west and Bahrain across the King Fahd Causeway
        </title>
        <rect width="112" height="135" fill="#0f1d2e" />
        <polygon points={pts(SEA)} fill="#16324d" />
        <polygon points={pts(BAHRAIN)} fill="#0f1d2e" stroke="#c9a45c" strokeWidth="0.3" strokeOpacity="0.5" />
        <text x="92" y="40" fontSize="3.2" fill="#8fb3d1" textAnchor="middle" letterSpacing="0.6">ARABIAN GULF</text>
        {/* Causeway */}
        <polyline points={pts([[50.22, 26.19], [50.47, 26.18]])} fill="none" stroke="#c9a45c" strokeWidth="0.9" />
        <text x={p(50.34, 26.15)[0]} y={p(50.34, 26.15)[1] + 1} fontSize="2.4" fill="#e9d7ae" textAnchor="middle">King Fahd Causeway</text>
        {/* Connections from DMM */}
        {c.destinations.map((d) => {
          const via: [number, number][] = d.id === "bahrain" ? [DMM_LL, [50.22, 26.19], [50.47, 26.18], d.ll] : [DMM_LL, d.ll];
          return <polyline key={d.id} points={pts(via)} fill="none" stroke="#c9a45c" strokeWidth="0.45" strokeDasharray="1.4 1.2" strokeOpacity="0.8" />;
        })}
        {/* Riyadh, off-map */}
        <line x1={ax} y1={ay} x2="4" y2="92" stroke="#c9a45c" strokeWidth="0.45" strokeDasharray="1.4 1.2" strokeOpacity="0.6" />
        <text x="3" y="97" fontSize="3" fill="#ffffff" fontWeight="700">← Riyadh</text>
        <text x="3" y="101.5" fontSize="2.5" fill="#cbd5e1">≈400 km inland</text>
        {/* Destinations */}
        {c.destinations.map((d) => {
          const [x, y] = p(...d.ll);
          const side = labelSide[d.id] ?? "start";
          const dx = side === "end" ? -2.4 : side === "start" ? 2.4 : 0;
          const dy = side === "middle" ? 6 : 0.8;
          return (
            <g key={d.id}>
              <circle cx={x} cy={y} r="1.5" fill="#ffffff" />
              <text x={x + dx} y={y + dy} fontSize="3.3" fill="#ffffff" fontWeight="700" textAnchor={side}>
                {d.id === "bahrain" ? "Manama" : d.name}
              </text>
              <text x={x + dx} y={y + dy + 3.6} fontSize="2.5" fill="#cbd5e1" textAnchor={side}>
                {d.km.replace("about ", "≈").replace(" to Manama", "")}
              </text>
            </g>
          );
        })}
        {/* Airport */}
        <circle cx={ax} cy={ay} r="4.2" fill="#c9a45c" fillOpacity="0.25" />
        <circle cx={ax} cy={ay} r="2.2" fill="#c9a45c" />
        <text x={ax - 3.5} y={ay - 4} fontSize="3.6" fill="#e9d7ae" fontWeight="800" textAnchor="middle">DMM</text>
        <text x="108" y="6" fontSize="2.3" fill="#8fb3d1" textAnchor="end">N ↑ · schematic</text>
      </svg>
      <figcaption className="mt-3 text-xs leading-relaxed text-white/60">{c.region.mapCaption}</figcaption>
    </figure>
  );
}

function SectionHead({ id, kicker, title, children }: { id: string; kicker: string; title: string; children?: React.ReactNode }) {
  return (
    <header className="max-w-3xl">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-brass">{kicker}</p>
      <h2 id={`${id}-h`} className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {children ? <div className="mt-4 text-[17px] leading-relaxed text-ink-soft">{children}</div> : null}
    </header>
  );
}

const travellerIcons = [Briefcase, HardHat, Baby, Hotel, Building2, Globe];

export function DammamAirportView({ faqs, crumbs, liveRoutes }: { faqs: Faq[]; crumbs: Crumb[]; liveRoutes: Record<string, boolean> }) {
  const isLive = (href: string) => !href.startsWith("/routes/") || liveRoutes[href.replace("/routes/", "")] !== false;

  return (
    <>
      {/* ── Hero: departures board ── */}
      <section className="relative overflow-hidden bg-midnight text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          aria-hidden="true"
          style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "44px 44px" }}
        />
        <div className="relative mx-auto max-w-6xl px-4 pb-14 pt-28 sm:px-6 sm:pt-32 lg:px-8 lg:pb-20 lg:pt-40">
          <Breadcrumbs items={crumbs} onDark />
          <div className="mt-10 grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:items-start">
            <div>
              <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-brass">
                <PlaneLanding className="size-4" aria-hidden="true" />
                {c.hero.eyebrow}
              </p>
              <h1 className="mt-4 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl">{c.hero.h1}</h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">{c.hero.intro}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#quote" className="inline-flex items-center gap-2 rounded-full bg-brass px-6 py-3 text-sm font-bold text-midnight transition hover:bg-white">
                  Request a Dammam Airport Quotation <ArrowRight className="size-4" aria-hidden="true" />
                </a>
                <a href="#destinations" className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:border-brass hover:text-brass">
                  Explore Destinations
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/40 p-1 shadow-2xl shadow-black/40">
              <div className="flex items-center justify-between rounded-t-xl bg-black/60 px-4 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-brass">
                <span>Onward from DMM</span>
                <span className="text-white/50">Eastern Province</span>
              </div>
              <ul className="divide-y divide-white/10">
                {c.hero.board.map((row) => (
                  <li key={row.to} className="grid grid-cols-[minmax(0,7.5rem)_1fr] items-baseline gap-3 px-4 py-3">
                    <span className="font-mono text-sm font-bold uppercase tracking-wider text-amber-300">{row.to}</span>
                    <span className="text-sm text-white/70">{row.note}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Quick hand-off: a plain GET form to /get-quote (no lead is created here). */}
          <form action="/get-quote" method="get" className="mt-10 grid gap-3 rounded-2xl bg-white p-4 text-ink shadow-xl sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_0.8fr_auto] lg:items-end">
            <input type="hidden" name="pickup" value={c.airport} />
            <div className="sm:col-span-2 lg:col-span-1">
              <p className="text-sm font-bold">{c.hero.quick.title}</p>
              <p className="mt-0.5 text-xs text-ink-muted">{c.hero.quick.text}</p>
            </div>
            <label className="block text-xs font-semibold text-ink-soft">
              Destination
              <select name="dropoff" className="mt-1 block h-11 w-full rounded-lg border border-hairline bg-white px-3 text-sm text-ink" defaultValue="Al Khobar">
                {c.hero.quick.destinations.map((d) => (
                  <option key={d} value={d === "Other" ? "" : d}>
                    {d}
                  </option>
                ))}
              </select>
            </label>
            <label className="block text-xs font-semibold text-ink-soft">
              Arrival date
              <input type="date" name="date" className="mt-1 block h-11 w-full rounded-lg border border-hairline bg-white px-3 text-sm text-ink" />
            </label>
            <label className="block text-xs font-semibold text-ink-soft">
              Passengers
              <select name="passengers" className="mt-1 block h-11 w-full rounded-lg border border-hairline bg-white px-3 text-sm text-ink" defaultValue="2">
                {["1", "2", "3", "4", "5", "6", "7+"].map((n) => (
                  <option key={n}>{n}</option>
                ))}
              </select>
            </label>
            <button type="submit" className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-midnight px-5 text-sm font-bold text-white transition hover:bg-brass hover:text-midnight sm:col-span-2 lg:col-span-1">
              Continue <ArrowRight className="size-4" aria-hidden="true" />
            </button>
          </form>
        </div>
      </section>

      {/* ── On this page ── */}
      <nav aria-label="On this page" className="border-b border-hairline bg-offwhite">
        <ol className="mx-auto flex max-w-6xl flex-wrap gap-x-5 gap-y-2 px-4 py-4 text-sm sm:px-6 lg:px-8">
          {c.index.map((item, i) => (
            <li key={item.id}>
              <a href={`#${item.id}`} className="font-medium text-ink-soft hover:text-brass">
                <span className="mr-1 font-mono text-xs text-brass">{String(i + 1).padStart(2, "0")}</span>
                {item.label}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      {/* ── Airport facts: boarding-pass card ── */}
      <section id="airport" aria-labelledby="airport-h" className="scroll-mt-28 bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:px-8">
          <div>
            <SectionHead id="airport" kicker="The airport" title={c.airportFacts.heading} />
            <p className="mt-6 border-l-4 border-brass pl-4 text-[17px] font-medium leading-relaxed text-ink">{c.airportFacts.answer}</p>
            <p className="mt-5 text-sm leading-relaxed text-ink-muted">{c.airportFacts.note}</p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-hairline bg-offwhite shadow-sm">
            <div className="flex items-end justify-between bg-midnight px-6 py-5 text-white">
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-white/60">Airport</p>
                <p className="font-mono text-5xl font-black tracking-wider text-brass">DMM</p>
              </div>
              <PlaneLanding className="mb-2 size-8 text-white/50" aria-hidden="true" />
            </div>
            <div className="relative border-b-2 border-dashed border-hairline" aria-hidden="true">
              <span className="absolute -left-3 -top-3 size-6 rounded-full bg-white" />
              <span className="absolute -right-3 -top-3 size-6 rounded-full bg-white" />
            </div>
            <dl className="grid gap-x-6 gap-y-4 p-6 sm:grid-cols-2">
              {c.airportFacts.facts.map((f) => (
                <div key={f.k}>
                  <dt className="text-[11px] font-bold uppercase tracking-[0.16em] text-ink-muted">{f.k}</dt>
                  <dd className="mt-1 text-sm font-semibold text-ink">{f.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ── Arrival timeline ── */}
      <section id="arrival" aria-labelledby="arrival-h" className="scroll-mt-28 bg-offwhite py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHead id="arrival" kicker="Your arrival" title={c.arrival.heading}>
            <p>{c.arrival.intro}</p>
          </SectionHead>
          <div className="mt-12 grid gap-10 lg:grid-cols-[1.6fr_1fr]">
            <ol className="relative ml-4 border-l-2 border-brass/40 pl-8">
              {c.arrival.steps.map((s, i) => (
                <li key={s.title} className="relative pb-9 last:pb-0">
                  <span
                    className={`absolute -left-[45px] flex size-8 items-center justify-center rounded-full text-sm font-bold ${s.key ? "bg-brass text-midnight" : "border-2 border-brass bg-white text-midnight"}`}
                    aria-hidden="true"
                  >
                    {i === 1 ? <Radar className="size-4" /> : i + 1}
                  </span>
                  <h3 className="text-lg font-bold text-ink">{s.title}</h3>
                  <p className={`mt-2 leading-relaxed ${s.key ? "rounded-xl bg-brass-soft p-4 text-ink" : "text-ink-soft"}`}>{s.text}</p>
                </li>
              ))}
            </ol>
            <aside className="self-start rounded-2xl border border-hairline bg-white p-6 lg:sticky lg:top-32">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-brass">Worth knowing</p>
              <p className="mt-3 leading-relaxed text-ink-soft">{c.arrival.aside}</p>
              <a href={whatsappLink(WA_MESSAGE)} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-midnight hover:text-brass">
                <MessageCircle className="size-4" aria-hidden="true" /> Message us on WhatsApp
              </a>
            </aside>
          </div>
        </div>
      </section>

      {/* ── Region map ── */}
      <section id="region" aria-labelledby="region-h" className="scroll-mt-28 bg-midnight py-16 text-white sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:items-center lg:px-8">
          <div className="order-2 lg:order-1">
            <RegionMap />
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brass">The region</p>
            <h2 id="region-h" className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              {c.region.heading}
            </h2>
            <p className="mt-5 border-l-4 border-brass pl-4 text-[17px] leading-relaxed text-white/85">{c.region.answer}</p>
            <dl className="mt-8 space-y-6">
              {c.region.groups.map((g) => (
                <div key={g.title}>
                  <dt className="font-bold text-brass">{g.title}</dt>
                  <dd className="mt-1 leading-relaxed text-white/75">{g.text}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ── Destinations: editorial rows ── */}
      <section id="destinations" aria-labelledby="destinations-h" className="scroll-mt-28 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHead id="destinations" kicker="Destinations" title="Choose your destination">
            <p>Six places most DMM arrivals are heading for, and what makes each one different to plan.</p>
          </SectionHead>
          <div className="mt-12 divide-y divide-hairline border-y border-hairline">
            {c.destinations.map((d) => (
              <article key={d.id} id={`to-${d.id}`} className="grid gap-6 py-10 md:grid-cols-[minmax(0,15rem)_1fr] md:gap-12">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-ink-muted">{d.kind}</p>
                  <h3 className="mt-2 text-3xl font-black tracking-tight text-ink">{d.name}</h3>
                  <p className="mt-3 inline-block rounded-full bg-sand-soft px-3 py-1 font-mono text-xs font-semibold text-ink">
                    {d.km} by road
                  </p>
                </div>
                <div>
                  <p className="text-[17px] leading-relaxed text-ink">{d.intro}</p>
                  <dl className="mt-5 grid gap-4 sm:grid-cols-2">
                    <div>
                      <dt className="text-xs font-bold uppercase tracking-[0.14em] text-brass">Who travels here</dt>
                      <dd className="mt-1 text-sm leading-relaxed text-ink-soft">{d.who}</dd>
                    </div>
                    <div>
                      <dt className="text-xs font-bold uppercase tracking-[0.14em] text-brass">What to send us</dt>
                      <dd className="mt-1 text-sm leading-relaxed text-ink-soft">{d.send}</dd>
                    </div>
                  </dl>
                  {d.caution ? (
                    <p className="mt-5 flex gap-2 rounded-lg bg-offwhite p-3 text-sm text-ink">
                      <ShieldAlert className="mt-0.5 size-4 shrink-0 text-brass" aria-hidden="true" />
                      {d.caution}
                    </p>
                  ) : null}
                  <p className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm">
                    {isLive(d.link.href) ? (
                      <Link href={d.link.href} className={linkCls}>
                        {d.link.label}
                      </Link>
                    ) : null}
                    {d.more ? (
                      <Link href={d.more.href} className={linkCls}>
                        {d.more.label}
                      </Link>
                    ) : null}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-bold tracking-tight text-ink">{c.compare.heading}</h3>
            <div className="mt-6 overflow-x-auto rounded-xl border border-hairline">
              <table className="w-full min-w-[36rem] text-left text-sm">
                <thead className="bg-midnight text-white">
                  <tr>
                    {c.compare.columns.map((col) => (
                      <th key={col} scope="col" className="px-4 py-3 font-semibold">
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-hairline">
                  {c.compare.rows.map(([a, b, d]) => (
                    <tr key={a} className="even:bg-offwhite">
                      <th scope="row" className="px-4 py-3 font-bold text-ink">
                        {a}
                      </th>
                      <td className="px-4 py-3 text-ink-soft">{b}</td>
                      <td className="px-4 py-3 text-ink-soft">{d}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ── Routes: timetable list ── */}
      <section id="routes" aria-labelledby="routes-h" className="scroll-mt-28 bg-offwhite py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHead id="routes" kicker="Routes" title={c.routes.heading}>
            <p>{c.routes.intro}</p>
          </SectionHead>
          <ul className="mt-10 overflow-hidden rounded-2xl border border-hairline bg-white">
            {c.routes.featured.filter((r) => isLive(r.href)).map((r) => (
              <li key={r.href} className="border-b border-hairline last:border-b-0">
                <Link href={r.href} className="group grid items-center gap-2 px-5 py-5 transition hover:bg-sand-soft/50 sm:grid-cols-[13rem_1fr_auto] sm:gap-6">
                  <span className="font-mono text-sm font-bold uppercase tracking-wider text-midnight">{r.title}</span>
                  <span className="text-sm leading-relaxed text-ink-soft">{r.text}</span>
                  <ArrowRight className="hidden size-5 text-brass transition group-hover:translate-x-1 sm:block" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap items-center gap-3 text-sm">
            <span className="font-semibold text-ink">Nearer the coast or further south:</span>
            {c.routes.more.filter((r) => isLive(r.href)).map((r) => (
              <Link key={r.href} href={r.href} className="rounded-full border border-hairline bg-white px-4 py-1.5 font-medium text-ink-soft hover:border-brass hover:text-midnight">
                {r.label}
              </Link>
            ))}
          </div>
          <p className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {c.routes.hubs.map((h) => (
              <Link key={h.href} href={h.href} className={linkCls}>
                {h.label}
              </Link>
            ))}
          </p>
        </div>
      </section>

      {/* ── Travellers ── */}
      <section id="travellers" aria-labelledby="travellers-h" className="scroll-mt-28 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHead id="travellers" kicker="Who travels" title={c.travellers.heading} />
          <div className="mt-10 grid gap-x-12 gap-y-8 md:grid-cols-2">
            {c.travellers.groups.map((g, i) => {
              const Icon = travellerIcons[i] ?? Users;
              return (
                <div key={g.title} className="flex gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-midnight text-brass">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-bold text-ink">{g.title}</h3>
                    <p className="mt-1.5 leading-relaxed text-ink-soft">{g.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Vehicles ── */}
      <section id="vehicles" aria-labelledby="vehicles-h" className="scroll-mt-28 bg-offwhite py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHead id="vehicles" kicker="Vehicles" title={c.vehicles.heading}>
            <p>{c.vehicles.intro}</p>
          </SectionHead>
          <div className="mt-10 overflow-x-auto rounded-xl border border-hairline bg-white">
            <table className="w-full min-w-[40rem] text-left text-sm">
              <caption className="sr-only">Vehicle classes with passenger and luggage guidance</caption>
              <thead className="border-b border-hairline text-xs uppercase tracking-[0.12em] text-ink-muted">
                <tr>
                  <th scope="col" className="px-4 py-3">Class</th>
                  <th scope="col" className="px-4 py-3">Examples</th>
                  <th scope="col" className="px-4 py-3">Passengers</th>
                  <th scope="col" className="px-4 py-3">Luggage</th>
                  <th scope="col" className="px-4 py-3">Suits</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-hairline">
                {vehicles.map((v) => (
                  <tr key={v.id}>
                    <th scope="row" className="px-4 py-3 font-bold text-ink">{v.name}</th>
                    <td className="px-4 py-3 text-ink-soft">{v.examples}</td>
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

      {/* ── Checklist ── */}
      <section id="prepare" aria-labelledby="prepare-h" className="scroll-mt-28 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHead id="prepare" kicker="Checklist" title={c.checklist.heading}>
            <p>Tick these off as you go. The boxes are just for you; nothing is sent.</p>
          </SectionHead>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { title: "Your flight", items: c.checklist.flight },
              { title: "Your trip", items: c.checklist.trip },
              { title: "Going to Bahrain?", items: c.checklist.border },
            ].map((group) => (
              <fieldset key={group.title} className="rounded-2xl border-2 border-dashed border-hairline p-5">
                <legend className="px-2 font-mono text-xs font-bold uppercase tracking-[0.18em] text-brass">{group.title}</legend>
                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <li key={item}>
                      <label className="flex cursor-pointer items-start gap-3 text-sm text-ink">
                        <input type="checkbox" className="mt-0.5 size-4 shrink-0 accent-brass" />
                        {item}
                      </label>
                    </li>
                  ))}
                </ul>
              </fieldset>
            ))}
          </div>
        </div>
      </section>

      {/* ── Booking steps + form ── */}
      <section id="booking" aria-labelledby="booking-h" className="scroll-mt-28 bg-offwhite py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHead id="booking" kicker="Booking" title={c.booking.heading} />
          <ol className="mt-10 grid gap-6 md:grid-cols-4">
            {c.booking.steps.map((s, i) => (
              <li key={s.title} className="relative border-t-4 border-brass pt-5">
                <span className="font-mono text-xs font-bold text-brass">STEP {i + 1}</span>
                <h3 className="mt-1 font-bold text-ink">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.text}</p>
              </li>
            ))}
          </ol>

          <div id="quote" className="mt-14 scroll-mt-28 grid gap-8 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-hairline sm:p-10 lg:grid-cols-[1fr_1.6fr]">
            <div>
              <h3 className="text-2xl font-bold tracking-tight text-ink">{c.form.heading}</h3>
              <p className="mt-3 leading-relaxed text-ink-soft">{c.form.text}</p>
              <a href={whatsappLink(WA_MESSAGE)} className="mt-6 inline-flex items-center gap-2 rounded-full border border-hairline px-5 py-2.5 text-sm font-semibold text-midnight hover:border-brass">
                <MessageCircle className="size-4" aria-hidden="true" /> Prefer WhatsApp?
              </a>
            </div>
            <QuoteForm
              serviceType="Dammam Airport transfer"
              city="Dammam"
              defaultPickup={c.airport}
              dropoffPlaceholder={c.form.dropoffPlaceholder}
              messagePlaceholder={c.form.messagePlaceholder}
            />
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" aria-labelledby="faq-h" className="scroll-mt-28 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHead id="faq" kicker="FAQs" title="Dammam Airport transfer questions" />
          <div className="mt-10 divide-y divide-hairline border-y border-hairline">
            {faqs.map((f) => (
              <details key={f.question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-semibold text-ink marker:hidden">
                  <h3 className="text-base">{f.question}</h3>
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
      <section className="bg-midnight py-16 text-white sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="font-mono text-sm font-bold tracking-[0.3em] text-brass">DMM →</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">{c.final.heading}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-white/80">{c.final.text}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="#quote" className="inline-flex items-center gap-2 rounded-full bg-brass px-6 py-3 text-sm font-bold text-midnight transition hover:bg-white">
              <Send className="size-4" aria-hidden="true" /> Request a Quotation
            </a>
            <a href={whatsappLink(WA_MESSAGE)} className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold transition hover:border-brass hover:text-brass">
              <MessageCircle className="size-4" aria-hidden="true" /> WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
