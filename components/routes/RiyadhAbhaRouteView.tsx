import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, ChevronDown, MessageCircle, Mountain, Send } from "lucide-react";
import { Breadcrumbs, type Crumb } from "@/components/Breadcrumbs";
import { QuoteForm } from "@/components/QuoteForm";
import type { Faq } from "@/data/faqs";
import { ABHA as c, ELEVATION, PHOTOS, type Photo } from "@/data/riyadh-to-abha-route";
import { vehicles } from "@/data/vehicles";
import { whatsappLink } from "@/lib/site";

/**
 * /routes/riyadh-to-abha — "the climb" layout: a full-bleed Asir photo hero
 * with an altitude silhouette, an altimeter-style chapter bar, a real
 * elevation profile of the road (Copernicus DEM), stepped landscape stages, a
 * photo mosaic of Abha, destination cards with photos, a fleet table, a
 * checklist and the shared QuoteForm (photo credits: /image-credits).
 * Copy and sources: data/riyadh-to-abha-route.ts.
 */

const WA = "Hello! I'd like a quotation for a private transfer from Riyadh to Abha.";
const linkCls = "font-semibold text-midnight underline decoration-brass decoration-2 underline-offset-4 hover:text-brass";

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


function Figure({ p, sizes, className = "", ratio }: { p: Photo; sizes: string; className?: string; ratio?: string }) {
  return (
    <figure className={`m-0 ${className}`}>
      <div className={`relative overflow-hidden rounded-2xl bg-sand-soft ${ratio ?? ""}`}>
        {ratio ? (
          <Image src={p.src} alt={p.alt} fill sizes={sizes} className="object-cover" />
        ) : (
          <Image src={p.src} alt={p.alt} width={p.w} height={p.h} sizes={sizes} className="h-auto w-full" />
        )}
      </div>
      <figcaption className="mt-2 text-xs leading-relaxed text-ink-soft">
        {p.caption}.
      </figcaption>
    </figure>
  );
}

function Chapter({ id, n, alt, title, children, tone = "white" }: { id: string; n: number; alt?: string; title: string; children: React.ReactNode; tone?: "white" | "sand" }) {
  return (
    <section id={id} aria-labelledby={`${id}-h`} className={`scroll-mt-28 py-16 sm:py-20 ${tone === "sand" ? "bg-offwhite" : "bg-white"}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="flex items-center gap-3 font-mono text-xs font-bold uppercase tracking-[0.2em] text-brass">
          <span>Chapter {n}</span>
          {alt ? (
            <>
              <span className="h-px w-8 bg-brass/50" aria-hidden="true" />
              <span className="inline-flex items-center gap-1 text-ink-muted">
                <Mountain className="size-3.5" aria-hidden="true" /> {alt}
              </span>
            </>
          ) : null}
        </p>
        <h2 id={`${id}-h`} className="mt-3 max-w-3xl text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          {title}
        </h2>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}

function Answer({ text }: { text: string }) {
  return <p className="max-w-3xl rounded-r-xl border-l-4 border-brass bg-brass-soft/50 py-3 pl-5 pr-4 text-[17px] font-medium leading-relaxed text-ink">{text}</p>;
}

// ── Elevation profile ──
const W = 1000;
const H = 320;
const PAD = { l: 68, r: 20, t: 24, b: 40 };
const MAXKM = 946;
const MAXM = 2600;
const ex = (km: number) => PAD.l + (km / MAXKM) * (W - PAD.l - PAD.r);
const ey = (m: number) => PAD.t + (1 - m / MAXM) * (H - PAD.t - PAD.b);

function ElevationProfile() {
  const line = ELEVATION.map(([k, m]) => `${ex(Math.min(k * (MAXKM / 939), MAXKM)).toFixed(1)},${ey(m).toFixed(1)}`).join(" ");
  const area = `${ex(0)},${ey(0)} ${line} ${ex(MAXKM)},${ey(0)}`;
  return (
    <figure className="m-0 rounded-2xl bg-midnight p-4 text-white sm:p-6">
      <figcaption className="mb-3 text-sm font-semibold text-white/90">
        {c.route.profileTitle}
        <span className="ml-2 text-xs font-normal text-white/50 sm:hidden">Scroll sideways to see the whole road →</span>
      </figcaption>
      <div className="-mx-1 overflow-x-auto px-1">
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-labelledby="elev-t elev-d" className="h-auto w-full min-w-[640px]">
        <title id="elev-t">Elevation profile of the road from Riyadh to Abha</title>
        <desc id="elev-d">
          The road starts at about 630 metres in Riyadh, stays between roughly 650 and 1,000 metres for the first 600 kilometres, then climbs past Bisha at about 1,160 metres and Khamis Mushait at nearly 2,000 metres to Abha at about 2,220 metres.
        </desc>
        <defs>
          <linearGradient id="elev-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#c9a45c" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#c9a45c" stopOpacity="0.05" />
          </linearGradient>
        </defs>
        {[0, 500, 1000, 1500, 2000].map((m) => (
          <g key={m}>
            <line x1={PAD.l} x2={W - PAD.r} y1={ey(m)} y2={ey(m)} stroke="#ffffff" strokeOpacity="0.1" />
            <text x={PAD.l - 8} y={ey(m) + 4} fontSize="13" fill="#cbd5e1" textAnchor="end">
              {m.toLocaleString("en")} m
            </text>
          </g>
        ))}
        {[0, 200, 400, 600, 800].map((k) => (
          <text key={k} x={ex(k)} y={H - 14} fontSize="13" fill="#cbd5e1" textAnchor="middle">
            {k} km
          </text>
        ))}
        <polygon points={area} fill="url(#elev-fill)" />
        <polyline points={line} fill="none" stroke="#e9d7ae" strokeWidth="2.5" strokeLinejoin="round" />
        {c.route.marks.map((m) => (
          <g key={m.label}>
            <line x1={ex(m.km)} x2={ex(m.km)} y1={ey(m.alt)} y2={ey(0)} stroke="#ffffff" strokeOpacity="0.35" strokeDasharray="3 4" />
            <circle cx={ex(m.km)} cy={ey(m.alt)} r="5" fill="#ffffff" stroke="#c9a45c" strokeWidth="2" />
            <text
              x={ex(m.km) + (m.km > 800 ? -10 : 10)}
              y={ey(m.alt) + (m.label === "Khamis Mushait" ? 24 : -12)}
              fontSize="15"
              fontWeight="700"
              fill="#ffffff"
              textAnchor={m.km > 800 ? "end" : "start"}
            >
              {m.label} · {m.alt.toLocaleString("en")} m
            </text>
          </g>
        ))}
      </svg>
      </div>
      <ol className="mt-4 grid grid-cols-2 gap-3 text-sm sm:grid-cols-4">
        {c.route.marks.map((m) => (
          <li key={m.label} className="rounded-lg bg-white/5 px-3 py-2">
            <span className="block font-bold text-brass">{m.label}</span>
            <span className="text-white/75">{m.km === 0 ? "Start" : `≈${m.km} km`}</span>
          </li>
        ))}
      </ol>
      <p className="mt-4 text-xs leading-relaxed text-white/60">{c.route.profileNote}</p>
    </figure>
  );
}

export function RiyadhAbhaRouteView({ faqs, crumbs }: { faqs: Faq[]; crumbs: Crumb[] }) {
  const photoOf = (key: string): Photo | undefined => (key ? (PHOTOS as Record<string, Photo>)[key] : undefined);
  // Hero silhouette: the whole elevation profile, drawn as a skyline.
  const sil = ELEVATION.map(([k, m]) => `${((k / 939) * 100).toFixed(2)},${(100 - (m / 2400) * 100).toFixed(2)}`).join(" ");

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative isolate overflow-hidden bg-midnight text-white">
        <Image src={PHOTOS.hero.src} alt={PHOTOS.hero.alt} fill priority sizes="100vw" className="-z-10 object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-midnight via-midnight/70 to-midnight/30" aria-hidden="true" />
        <div className="mx-auto max-w-6xl px-4 pb-10 pt-28 sm:px-6 sm:pt-32 lg:px-8 lg:pt-40">
          <Breadcrumbs items={crumbs} onDark />
          <div className="mt-16 max-w-3xl sm:mt-24">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brass">{c.hero.eyebrow}</p>
            <h1 className="mt-4 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">{c.hero.h1}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85">{c.hero.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#quote" className="inline-flex items-center gap-2 rounded-full bg-brass px-6 py-3 text-sm font-bold text-midnight transition hover:bg-white">
                Request a Quotation <ArrowRight className="size-4" aria-hidden="true" />
              </a>
              <a href="#glance" className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold transition hover:border-brass hover:text-brass">
                Explore the Journey <ArrowDown className="size-4" aria-hidden="true" />
              </a>
            </div>
          </div>
          <dl className="mt-12 grid max-w-2xl grid-cols-3 gap-3 border-t border-white/20 pt-6">
            {c.hero.stats.map((s) => (
              <div key={s.k}>
                <dt className="text-[11px] uppercase tracking-[0.18em] text-white/60">{s.k}</dt>
                <dd className="mt-1 text-lg font-bold sm:text-2xl">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="block h-16 w-full sm:h-24" aria-hidden="true">
          <polygon points={`0,100 ${sil} 100,100`} fill="#ffffff" />
        </svg>
      </section>

      {/* ── Altimeter chapter bar ── */}
      <nav aria-label="Chapters" className="bg-white">
        <ol className="mx-auto flex max-w-6xl flex-wrap gap-x-1 gap-y-2 px-4 pb-6 sm:px-6 lg:px-8">
          {c.chapters.map((ch, i) => (
            <li key={ch.id}>
              <a href={`#${ch.id}`} className="group inline-flex items-baseline gap-1.5 rounded-full border border-hairline px-3 py-1.5 text-sm text-ink-soft transition hover:border-brass hover:text-midnight">
                <span className="font-mono text-[11px] text-brass">{String(i + 1).padStart(2, "0")}</span>
                {ch.label}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      {/* 1 ── At a glance */}
      <Chapter id="glance" n={1} alt="630 m" title={c.glance.heading}>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <Answer text={c.glance.answer} />
            <p className="mt-6 max-w-3xl text-sm leading-relaxed text-ink-soft">{c.glance.note}</p>
          </div>
          <dl className="divide-y divide-hairline rounded-2xl border border-hairline">
            {c.glance.facts.map((f) => (
              <div key={f.k} className="grid grid-cols-[8.5rem_1fr] gap-3 px-5 py-3.5 text-sm">
                <dt className="font-semibold text-ink-muted">{f.k}</dt>
                <dd className="font-semibold text-ink">{f.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Chapter>

      {/* 2 ── Leaving Riyadh */}
      <Chapter id="riyadh" n={2} alt="630 m" title={c.riyadh.heading} tone="sand">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-start">
          <div className="space-y-5 text-[17px] leading-relaxed text-ink-soft">
            {c.riyadh.paragraphs.map((p, i) => (
              <p key={i} className={i === 0 ? "first-letter:float-left first-letter:mr-2 first-letter:text-6xl first-letter:font-black first-letter:leading-none first-letter:text-brass" : ""}>
                <RichText text={p} />
              </p>
            ))}
          </div>
          <Figure p={PHOTOS.riyadh} sizes="(min-width: 768px) 40vw, 100vw" ratio="aspect-[4/5]" />
        </div>
      </Chapter>

      {/* 3 ── Route */}
      <Chapter id="route" n={3} alt="630 m → 1,160 m" title={c.route.heading}>
        <Answer text={c.route.answer} />
        <div className="mt-10">
          <ElevationProfile />
        </div>
        <div className="mt-10 grid gap-10 md:grid-cols-[1.3fr_1fr] md:items-start">
          <div className="space-y-5 text-[17px] leading-relaxed text-ink-soft">
            {c.route.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <Figure p={PHOTOS.bisha} sizes="(min-width: 768px) 40vw, 100vw" />
        </div>
      </Chapter>

      {/* 4 ── Landscape */}
      <Chapter id="landscape" n={4} alt="→ 1,990 m" title={c.landscape.heading} tone="sand">
        <ol className="grid gap-5 md:grid-cols-3 md:items-end">
          {c.landscape.stages.map((s, i) => (
            <li key={s.title} className={`rounded-2xl bg-white p-6 shadow-sm ring-1 ring-hairline ${i === 1 ? "md:-translate-y-6" : i === 2 ? "md:-translate-y-12" : ""}`}>
              <span className="block h-1.5 rounded-full bg-brass" style={{ width: `${40 + i * 30}%` }} aria-hidden="true" />
              <h3 className="mt-4 text-lg font-bold text-ink">{s.title}</h3>
              <p className="mt-2 leading-relaxed text-ink-soft">{s.text}</p>
            </li>
          ))}
        </ol>
        <Figure p={PHOTOS.slopes} sizes="(min-width: 1152px) 1152px, 100vw" ratio="aspect-[21/9]" className="mt-6" />
      </Chapter>

      {/* 5 ── Abha */}
      <Chapter id="abha" n={5} alt="2,220 m" title={c.abha.heading}>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr]">
          <div className="space-y-5 text-[17px] leading-relaxed text-ink-soft">
            {c.abha.paragraphs.map((p, i) => (
              <p key={i}>
                <RichText text={p} />
              </p>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Figure p={PHOTOS.city} sizes="(min-width: 1024px) 50vw, 100vw" ratio="aspect-[16/10]" className="col-span-2" />
            <Figure p={PHOTOS.cablecar} sizes="(min-width: 1024px) 25vw, 50vw" ratio="aspect-square" />
            <Figure p={PHOTOS.street} sizes="(min-width: 1024px) 25vw, 50vw" ratio="aspect-square" />
          </div>
        </div>
      </Chapter>

      {/* 6 ── Road or air */}
      <Chapter id="road-or-air" n={6} title={c.roadOrAir.heading} tone="sand">
        <Answer text={c.roadOrAir.answer} />
        <div className="mt-8 overflow-x-auto rounded-xl border border-hairline bg-white">
          <table className="w-full min-w-[38rem] text-left text-sm">
            <caption className="sr-only">Comparison of a private road transfer and flying from Riyadh to Abha</caption>
            <thead className="bg-midnight text-white">
              <tr>
                {c.roadOrAir.columns.map((col, i) => (
                  <th key={i} scope="col" className="px-4 py-3 font-semibold">
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-hairline">
              {c.roadOrAir.rows.map(([a, b, d]) => (
                <tr key={a}>
                  <th scope="row" className="px-4 py-3 font-bold text-ink">{a}</th>
                  <td className="px-4 py-3 text-ink-soft">{b}</td>
                  <td className="px-4 py-3 text-ink-soft">{d}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-6 max-w-3xl leading-relaxed text-ink-soft">
          <RichText text={c.roadOrAir.links} />
        </p>
      </Chapter>

      {/* 7 ── Planning */}
      <Chapter id="planning" n={7} title={c.planning.heading}>
        <p className="max-w-3xl text-ink-soft">{c.planning.intro}</p>
        <ol className="mt-8 grid gap-x-12 gap-y-7 md:grid-cols-2">
          {c.planning.tips.map((t, i) => (
            <li key={t.title} className="flex gap-4">
              <span className="font-mono text-2xl font-black leading-none text-sand-soft" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-bold text-ink">{t.title}</h3>
                <p className="mt-1 leading-relaxed text-ink-soft">{t.text}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-10 max-w-3xl rounded-xl border border-dashed border-brass/60 p-5 leading-relaxed text-ink">{c.planning.overnight}</p>
      </Chapter>

      {/* 8 ── Beyond Abha */}
      <Chapter id="beyond" n={8} title={c.beyond.heading} tone="sand">
        <p className="max-w-3xl text-[17px] leading-relaxed text-ink-soft">{c.beyond.intro}</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {c.beyond.places.map((pl) => {
            const p = photoOf(pl.photo);
            return (
              <article key={pl.name} className="flex flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-hairline">
                {p ? (
                  <div className="relative aspect-[4/3]">
                    <Image src={p.src} alt={p.alt} fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
                  </div>
                ) : (
                  <div className="flex aspect-[4/3] items-end bg-midnight p-5">
                    <Mountain className="size-10 text-brass" aria-hidden="true" />
                  </div>
                )}
                <div className="flex flex-1 flex-col p-5">
                  <p className="font-mono text-[11px] font-bold uppercase tracking-wider text-brass">{pl.km}</p>
                  <h3 className="mt-1 text-lg font-bold text-ink">{pl.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{pl.text}</p>
                  {"href" in pl && pl.href ? (
                    <Link href={pl.href} className={`mt-4 text-sm ${linkCls}`}>
                      {pl.linkLabel}
                    </Link>
                  ) : null}
                </div>
              </article>
            );
          })}
        </div>
        <p className="mt-6 text-sm text-ink-muted">{c.beyond.note}</p>
      </Chapter>

      {/* 9 ── Vehicles */}
      <Chapter id="vehicles" n={9} title={c.vehicles.heading}>
        <p className="max-w-3xl text-ink-soft">{c.vehicles.intro}</p>
        <div className="mt-8 overflow-x-auto rounded-xl border border-hairline">
          <table className="w-full min-w-[44rem] text-left text-sm">
            <caption className="sr-only">Vehicle categories with passenger and luggage capacity for the Riyadh to Abha journey</caption>
            <thead className="bg-offwhite text-xs uppercase tracking-[0.12em] text-ink-muted">
              <tr>
                <th scope="col" className="px-4 py-3">Category</th>
                <th scope="col" className="px-4 py-3">Suits</th>
                <th scope="col" className="px-4 py-3">Passengers</th>
                <th scope="col" className="px-4 py-3">Luggage</th>
                <th scope="col" className="px-4 py-3">On a long journey</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-hairline">
              {vehicles.map((v) => {
                const [suits, note] = c.vehicles.fit[v.id] ?? ["", ""];
                return (
                  <tr key={v.id}>
                    <th scope="row" className="px-4 py-3 font-bold text-ink">
                      {v.name}
                      <span className="block text-xs font-normal text-ink-muted">{v.examples}</span>
                    </th>
                    <td className="px-4 py-3 text-ink-soft">{suits}</td>
                    <td className="px-4 py-3 text-ink-soft">{v.passengers}</td>
                    <td className="px-4 py-3 text-ink-soft">{v.luggage}</td>
                    <td className="px-4 py-3 text-ink-soft">{note}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Chapter>

      {/* 10 ── Checklist */}
      <Chapter id="prepare" n={10} title={c.checklist.heading} tone="sand">
        <div className="rounded-3xl bg-white p-6 ring-1 ring-hairline sm:p-8">
          <p className="text-sm text-ink-muted">Tick as you go. Nothing is sent or saved.</p>
          <ul className="mt-5 grid gap-x-10 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
            {c.checklist.items.map((item) => (
              <li key={item}>
                <label className="flex cursor-pointer items-start gap-3 rounded-lg p-2 text-ink hover:bg-offwhite">
                  <input type="checkbox" className="mt-1 size-4 shrink-0 accent-brass" />
                  {item}
                </label>
              </li>
            ))}
          </ul>
        </div>
      </Chapter>

      {/* 11 ── Booking + form */}
      <Chapter id="booking" n={11} title={c.booking.heading}>
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {c.booking.steps.map((s, i) => (
            <li key={s.title} className="rounded-2xl bg-offwhite p-5">
              <span className="flex size-9 items-center justify-center rounded-full bg-midnight font-bold text-brass">{i + 1}</span>
              <h3 className="mt-4 font-bold text-ink">{s.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{s.text}</p>
            </li>
          ))}
        </ol>
        <div id="quote" className="mt-12 grid scroll-mt-28 gap-8 rounded-3xl bg-midnight p-6 text-white sm:p-10 lg:grid-cols-[1fr_1.6fr]">
          <div>
            <h3 className="text-2xl font-bold tracking-tight">Request your Riyadh to Abha quotation</h3>
            <p className="mt-3 leading-relaxed text-white/80">Pickup, destination, date, passengers and luggage are enough to start. Add any stops or special requirements in the message.</p>
            <a href={whatsappLink(WA)} className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-2.5 text-sm font-semibold hover:border-brass hover:text-brass">
              <MessageCircle className="size-4" aria-hidden="true" /> Prefer WhatsApp?
            </a>
          </div>
          <div className="rounded-2xl bg-white p-5 text-ink sm:p-6">
            <QuoteForm
              serviceType="Riyadh to Abha transfer"
              route="riyadh-to-abha"
              defaultPickup="Riyadh"
              defaultDropoff="Abha"
              dropoffPlaceholder={c.booking.form.dropoffPlaceholder}
              messagePlaceholder={c.booking.form.messagePlaceholder}
              flightField="airport"
            />
          </div>
        </div>
      </Chapter>

      {/* 12 ── FAQ */}
      <Chapter id="faq" n={12} title="Riyadh to Abha questions" tone="sand">
        <div className="max-w-4xl divide-y divide-hairline rounded-2xl bg-white px-5 ring-1 ring-hairline sm:px-8">
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
      </Chapter>

      {/* ── Related and method ── */}
      <section aria-labelledby="related-h" className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 id="related-h" className="text-2xl font-bold tracking-tight text-ink">{c.related.heading}</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {c.related.links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="group block rounded-xl border border-hairline p-4 transition hover:border-brass">
                  <span className="flex items-center gap-1.5 font-semibold text-ink">
                    {l.label} <ArrowRight className="size-3.5 text-brass transition group-hover:translate-x-0.5" aria-hidden="true" />
                  </span>
                  <span className="mt-1 block text-sm text-ink-soft">{l.text}</span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-10 max-w-4xl text-xs leading-relaxed text-ink-muted">
            {c.method}
          </p>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="relative isolate overflow-hidden bg-midnight py-20 text-white">
        <Image src={PHOTOS.city.src} alt="" fill sizes="100vw" className="-z-10 object-cover opacity-30" />
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
