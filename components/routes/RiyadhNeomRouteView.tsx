import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, Bus, Car, CarFront, CloudSun, Coffee, Luggage, MessageCircle, Moon, Send, Sunrise, Users } from "lucide-react";
import { Breadcrumbs, type Crumb } from "@/components/Breadcrumbs";
import { QuoteForm } from "@/components/QuoteForm";
import type { Faq } from "@/data/faqs";
import { NEOM as c, NEOM_REVIEWED } from "@/data/riyadh-to-neom-route";
import { vehicles } from "@/data/vehicles";
import { whatsappLink } from "@/lib/site";

/**
 * /routes/riyadh-to-neom — editorial long-read layout: full-bleed photo hero,
 * sticky chapter navigation, numbered chapters, a vertical route ribbon, a
 * destination-type table, a road-vs-air table, a native-checkbox checklist and
 * a six-step request flow. Copy: data/riyadh-to-neom-route.ts.
 */

const linkCls = "font-semibold text-midnight underline decoration-brass decoration-2 underline-offset-4 hover:text-brass";

function RichText({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\]\(\/[^)\s]*\))/g);
  return (
    <>
      {parts.map((part, i) => {
        const m = part.match(/^\[([^\]]+)\]\((\/[^)\s]*)\)$/);
        if (!m) return <Fragment key={i}>{part}</Fragment>;
        return (
          <Link key={i} href={m[2]} className={linkCls}>
            {m[1]}
          </Link>
        );
      })}
    </>
  );
}

function Chapter({ id, n, title, children }: { id: string; n: number; title: string; children: React.ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-h`} className="scroll-mt-28 border-t border-hairline py-12 first:border-t-0 first:pt-0 sm:py-16">
      <p className="text-6xl font-black leading-none text-sand-soft sm:text-7xl" aria-hidden="true">
        {String(n).padStart(2, "0")}
      </p>
      <h2 id={`${id}-h`} className="-mt-5 text-2xl font-bold tracking-tight text-ink sm:-mt-7 sm:text-3xl">
        {title}
      </h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}

function Answer({ text }: { text: string }) {
  return <p className="border-l-4 border-brass pl-4 text-[17px] font-medium leading-relaxed text-ink">{text}</p>;
}

const planIcons = { sunrise: Sunrise, coffee: Coffee, users: Users, luggage: Luggage, cloud: CloudSun, moon: Moon } as Record<string, typeof Car>;
const vehicleIcon: Record<string, typeof Car> = { suv: CarFront, van: Bus, minibus: Bus };

export function RiyadhNeomRouteView({ faqs, crumbs }: { faqs: Faq[]; crumbs: Crumb[] }) {
  const maxKm = c.road.stops[c.road.stops.length - 1].km;

  return (
    <>
      {/* ── Full-bleed photo hero ── */}
      <section className="relative isolate overflow-hidden bg-midnight text-white">
        <Image src={c.hero.image.src} alt={c.hero.image.alt} fill priority sizes="100vw" className="-z-10 object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-midnight via-midnight/85 to-midnight/40" aria-hidden="true" />
        <div className="mx-auto max-w-6xl px-4 pb-16 pt-28 sm:px-6 sm:pb-24 sm:pt-32 lg:px-8 lg:pt-40">
          <Breadcrumbs items={crumbs} onDark />
          <div className="mt-10 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brass">{c.hero.kicker}</p>
            <h1 className="mt-4 text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">{c.hero.h1}</h1>
            <p className="mt-6 text-[15px] leading-relaxed text-white/85 sm:text-base">{c.hero.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#request" className="inline-flex items-center gap-2 rounded-xl bg-brass px-6 py-3.5 text-sm font-bold text-midnight transition-colors hover:bg-brass-soft">
                <Send className="size-4" />
                {c.hero.ctaPrimary}
              </a>
              <a href="#glance" className="inline-flex items-center gap-2 rounded-xl border border-white/40 px-6 py-3.5 text-sm font-semibold backdrop-blur-sm transition-colors hover:bg-white hover:text-midnight">
                <ArrowDown className="size-4" />
                {c.hero.ctaSecondary}
              </a>
            </div>
          </div>
          <dl className="mt-12 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl bg-white/15 backdrop-blur-md sm:grid-cols-4">
            {c.hero.facts.map((f) => (
              <div key={f.label} className="bg-midnight/60 px-4 py-3">
                <dt className="text-[11px] font-semibold uppercase tracking-wider text-brass">{f.label}</dt>
                <dd className="mt-0.5 text-sm font-bold">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── Editorial body with sticky chapter nav ── */}
      <div className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[13rem_minmax(0,1fr)] lg:gap-14 lg:px-8">
          <nav aria-label="Chapters" className="hidden lg:block">
            <ol className="sticky top-28 space-y-1 border-l-2 border-hairline text-sm">
              {c.chapters.map((ch, i) => (
                <li key={ch.id}>
                  <a href={`#${ch.id}`} className="-ml-0.5 flex gap-2 border-l-2 border-transparent py-1.5 pl-4 text-ink-soft transition hover:border-brass hover:text-ink">
                    <span className="tabular-nums text-brass">{String(i + 1).padStart(2, "0")}</span>
                    {ch.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="min-w-0 max-w-3xl">
            {/* 01 At a glance */}
            <Chapter id="glance" n={1} title={c.glance.heading}>
              <Answer text={c.glance.answer} />
              <dl className="mt-8 divide-y divide-hairline rounded-2xl bg-offwhite ring-1 ring-hairline">
                {c.glance.rows.map((r) => (
                  <div key={r.k} className="grid gap-1 px-5 py-3.5 text-sm sm:grid-cols-[10rem_1fr] sm:gap-4">
                    <dt className="font-semibold text-ink-muted">{r.k}</dt>
                    <dd className="font-semibold text-ink">{r.v}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-3 text-xs leading-relaxed text-ink-muted">{c.glance.note}</p>
            </Chapter>

            {/* 02 Leaving Riyadh */}
            <Chapter id="riyadh" n={2} title={c.riyadh.heading}>
              <div className="grid gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
                <div className="space-y-4 text-[15px] leading-relaxed text-ink-soft sm:text-base">
                  {c.riyadh.paragraphs.map((p) => (
                    <p key={p}>
                      <RichText text={p} />
                    </p>
                  ))}
                </div>
                <figure>
                  <Image src={c.riyadh.image.src} alt={c.riyadh.image.alt} width={1920} height={2560} sizes="(min-width: 768px) 280px, 90vw" loading="lazy" className="h-72 w-full rounded-2xl object-cover md:h-full md:max-h-96" />
                  <figcaption className="mt-2 text-xs text-ink-muted">{c.riyadh.image.caption}</figcaption>
                </figure>
              </div>
            </Chapter>

            {/* 03 The road north-west */}
            <Chapter id="road" n={3} title={c.road.heading}>
              <Answer text={c.road.answer} />
              <div className="mt-8 grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
                <ol className="relative rounded-2xl bg-midnight p-6 text-white" aria-label="Route stops with cumulative road distance from Riyadh">
                  {c.road.stops.map((s, i) => (
                    <li key={s.place} className="relative flex gap-4 pb-6 last:pb-0">
                      {i < c.road.stops.length - 1 && (
                        <span className="absolute left-[11px] top-6 h-full w-0.5 bg-[repeating-linear-gradient(to_bottom,#c8a96b_0_6px,transparent_6px_11px)]" aria-hidden="true" />
                      )}
                      <span className={`relative z-10 mt-0.5 size-6 shrink-0 rounded-full border-4 ${i === 0 || i === c.road.stops.length - 1 ? "border-brass bg-midnight" : "border-white/40 bg-midnight"}`} aria-hidden="true" />
                      <div className="min-w-0 flex-1">
                        <p className="font-bold">{s.place}</p>
                        <p className="text-xs text-white/60">{s.note}</p>
                        <div className="mt-1.5 flex items-center gap-2">
                          <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/10">
                            <div className="h-full rounded-full bg-brass" style={{ width: `${(s.km / maxKm) * 100}%` }} />
                          </div>
                          <span className="w-16 text-right text-xs font-semibold tabular-nums text-brass">{s.km === 0 ? "0 km" : `≈${s.km.toLocaleString("en-GB")} km`}</span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ol>
                <div className="space-y-4 text-[15px] leading-relaxed text-ink-soft sm:text-base">
                  {c.road.paragraphs.map((p) => (
                    <p key={p}>
                      <RichText text={p} />
                    </p>
                  ))}
                </div>
              </div>
              <div className="mt-8 rounded-2xl border border-hairline p-6">
                <h3 className="font-bold text-ink">{c.road.splits.title}</h3>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  {c.road.splits.options.map((o) => (
                    <div key={o.title} className="rounded-xl bg-offwhite p-4">
                      <p className="flex items-center gap-2 font-semibold text-ink">
                        <Moon className="size-4 text-brass" aria-hidden="true" />
                        {o.title}
                      </p>
                      <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                        <RichText text={o.text} />
                      </p>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-sm text-ink">{c.road.splits.note}</p>
              </div>
            </Chapter>

            {/* 04 Where in NEOM */}
            <Chapter id="neom" n={4} title={c.neom.heading}>
              <Answer text={c.neom.answer} />
              {c.neom.paragraphs.map((p) => (
                <p key={p} className="mt-5 text-[15px] leading-relaxed text-ink-soft sm:text-base">
                  {p}
                </p>
              ))}
              <div className="mt-6 overflow-x-auto rounded-2xl ring-1 ring-hairline">
                <table className="w-full min-w-[560px] text-left text-sm">
                  <caption className="sr-only">{c.neom.table.caption}</caption>
                  <thead className="bg-midnight text-xs uppercase tracking-wider text-brass">
                    <tr>
                      {c.neom.table.columns.map((col) => (
                        <th key={col} scope="col" className="px-4 py-3 font-semibold">{col}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-hairline">
                    {c.neom.table.rows.map((r) => (
                      <tr key={r[0]} className="align-top">
                        <th scope="row" className="px-4 py-3 font-semibold text-ink">{r[0]}</th>
                        <td className="px-4 py-3 text-ink-soft">{r[1]}</td>
                        <td className="px-4 py-3 text-ink-soft">{r[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-sm text-ink-soft">
                <RichText text={c.neom.guide} />
              </p>
            </Chapter>

            {/* 05 Road or air */}
            <Chapter id="road-or-air" n={5} title={c.roadOrAir.heading}>
              <Answer text={c.roadOrAir.answer} />
              <div className="mt-6 overflow-x-auto rounded-2xl ring-1 ring-hairline">
                <table className="w-full min-w-[560px] text-left text-sm">
                  <caption className="sr-only">Private road transfer compared with flying</caption>
                  <thead className="bg-offwhite text-xs uppercase tracking-wider text-ink-muted">
                    <tr>
                      {c.roadOrAir.columns.map((col, i) => (
                        <th key={i} scope="col" className="px-4 py-3 font-semibold">{col || <span className="sr-only">Compared on</span>}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-hairline">
                    {c.roadOrAir.rows.map((r) => (
                      <tr key={r[0]} className="align-top">
                        <th scope="row" className="px-4 py-3 font-semibold text-ink">{r[0]}</th>
                        <td className="px-4 py-3 text-ink">{r[1]}</td>
                        <td className="px-4 py-3 text-ink-soft">{r[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-sm text-ink-soft">
                <RichText text={c.roadOrAir.links} />
              </p>
            </Chapter>

            {/* 06 Planning */}
            <Chapter id="planning" n={6} title={c.planning.heading}>
              <ul className="grid gap-3 sm:grid-cols-2">
                {c.planning.cards.map((p) => {
                  const Icon = planIcons[p.icon] ?? Car;
                  return (
                    <li key={p.title} className="flex gap-4 rounded-2xl bg-offwhite p-5">
                      <Icon className="mt-0.5 size-6 shrink-0 text-brass" aria-hidden="true" />
                      <div>
                        <h3 className="font-bold text-ink">{p.title}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-ink-soft">{p.text}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </Chapter>

            {/* 07 Vehicles */}
            <Chapter id="vehicles" n={7} title={c.vehicles.heading}>
              <p className="text-[15px] leading-relaxed text-ink-soft sm:text-base">{c.vehicles.intro}</p>
              <div className="mt-6 overflow-x-auto rounded-2xl ring-1 ring-hairline">
                <table className="w-full min-w-[560px] text-left text-sm">
                  <caption className="sr-only">Vehicle classes for the Riyadh to NEOM transfer</caption>
                  <thead className="bg-offwhite text-xs uppercase tracking-wider text-ink-muted">
                    <tr>
                      <th scope="col" className="px-4 py-3 font-semibold">Vehicle</th>
                      <th scope="col" className="px-4 py-3 font-semibold">People</th>
                      <th scope="col" className="px-4 py-3 font-semibold">Luggage</th>
                      <th scope="col" className="px-4 py-3 font-semibold">For this journey</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-hairline">
                    {vehicles.map((v) => {
                      const Icon = vehicleIcon[v.id] ?? Car;
                      return (
                        <tr key={v.id} className="align-top">
                          <th scope="row" className="px-4 py-3">
                            <span className="flex items-center gap-2 font-bold text-ink">
                              <Icon className="size-4 text-brass" aria-hidden="true" />
                              {v.name}
                            </span>
                            <span className="block text-xs font-normal text-ink-muted">{v.examples}</span>
                          </th>
                          <td className="whitespace-nowrap px-4 py-3 text-ink">{v.passengers}</td>
                          <td className="whitespace-nowrap px-4 py-3 text-ink">{v.luggage}</td>
                          <td className="px-4 py-3 text-ink-soft">{c.vehicles.fit[v.id] ?? v.description}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </Chapter>

            {/* 08 Checklist */}
            <Chapter id="checklist" n={8} title={c.checklist.heading}>
              <p className="text-[15px] text-ink-soft sm:text-base">{c.checklist.intro}</p>
              <fieldset className="mt-6 rounded-2xl border-2 border-dashed border-brass/50 p-5 sm:p-6">
                <legend className="px-2 text-xs font-bold uppercase tracking-[0.16em] text-brass">Before you request</legend>
                <ul className="grid gap-x-6 gap-y-3 sm:grid-cols-2">
                  {c.checklist.items.map((it, i) => (
                    <li key={it}>
                      <label htmlFor={`neom-check-${i}`} className="flex cursor-pointer items-start gap-3 rounded-lg p-1 text-sm text-ink hover:bg-offwhite">
                        <input id={`neom-check-${i}`} type="checkbox" className="mt-0.5 size-5 shrink-0 accent-[#0b1726]" />
                        <span>{it}</span>
                      </label>
                    </li>
                  ))}
                </ul>
              </fieldset>
            </Chapter>

            {/* 09 Request */}
            <Chapter id="request" n={9} title={c.request.heading}>
              <ol className="grid gap-2 sm:grid-cols-2">
                {c.request.steps.map((s, i) => (
                  <li key={s} className="flex items-center gap-3 rounded-xl bg-offwhite px-4 py-3 text-sm font-semibold text-ink">
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-midnight text-xs text-brass">{i + 1}</span>
                    {s}
                  </li>
                ))}
              </ol>
              <div id="quote-details" className="mt-8 scroll-mt-28 rounded-2xl bg-midnight p-5 text-white sm:p-8">
                <h3 className="text-xl font-bold">{c.request.formHeading}</h3>
                <p className="mt-1 text-sm text-white/70">{c.request.formText}</p>
                <div className="mt-6 rounded-xl bg-white p-4 text-ink sm:p-6">
                  <QuoteForm
                    serviceType="Riyadh to NEOM transfer"
                    route="Riyadh to NEOM"
                    defaultPickup="Riyadh"
                    defaultDropoff="NEOM – "
                    dropoffPlaceholder="Exact NEOM destination, project or accommodation"
                    messagePlaceholder={c.request.messagePlaceholder}
                    flightField="airport"
                  />
                </div>
                <a
                  href={whatsappLink(c.hero.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white underline decoration-brass decoration-2 underline-offset-4 hover:text-brass"
                >
                  <MessageCircle className="size-4 text-brass" />
                  Prefer WhatsApp? Send your details there
                </a>
              </div>
            </Chapter>

            {/* 10 FAQ */}
            <Chapter id="faq" n={10} title="Riyadh to NEOM questions">
              <dl className="divide-y divide-hairline">
                {faqs.map((f) => (
                  <div key={f.question} className="py-4">
                    <dt className="font-bold text-ink">{f.question}</dt>
                    <dd className="mt-1.5 text-sm leading-relaxed text-ink-soft sm:text-[15px]">{f.answer}</dd>
                  </div>
                ))}
              </dl>
            </Chapter>

            <aside className="mt-4 rounded-2xl bg-offwhite p-5 text-sm text-ink-soft">
              <h2 className="font-bold text-ink">{c.method.heading}</h2>
              <p className="mt-2 leading-relaxed">{c.method.text}</p>
              <p className="mt-2 text-xs text-ink-muted">
                Last reviewed <time dateTime={NEOM_REVIEWED}>{new Date(`${NEOM_REVIEWED}T00:00:00Z`).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" })}</time>
              </p>
            </aside>
          </div>
        </div>
      </div>

      {/* ── Related ── */}
      <section className="bg-offwhite py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">{c.related.heading}</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {c.related.links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="group flex h-full items-start justify-between gap-3 rounded-xl bg-white p-4 ring-1 ring-hairline transition hover:ring-brass">
                  <span>
                    <span className="block font-semibold text-ink">{l.label}</span>
                    <span className="block text-xs text-ink-muted">{l.text}</span>
                  </span>
                  <ArrowRight className="mt-1 size-4 shrink-0 text-brass transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="relative isolate overflow-hidden bg-midnight text-white">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(115deg,#0b1726_40%,#16273b)]" aria-hidden="true" />
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-16 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div className="max-w-xl">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{c.finalCta.heading}</h2>
            <p className="mt-2 text-white/75">{c.finalCta.text}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="#request" className="inline-flex items-center gap-2 rounded-xl bg-brass px-6 py-3.5 text-sm font-bold text-midnight transition-colors hover:bg-brass-soft">
              <Send className="size-4" />
              {c.hero.ctaPrimary}
            </a>
            <a
              href={whatsappLink(c.hero.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-6 py-3.5 text-sm font-semibold transition-colors hover:bg-white hover:text-midnight"
            >
              <MessageCircle className="size-4" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
