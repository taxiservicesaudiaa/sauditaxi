import { Fragment } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowRightLeft,
  Briefcase,
  Bus,
  Car,
  CarFront,
  Check,
  ChevronRight,
  Factory,
  Hotel,
  Luggage,
  MapPin,
  MessageCircle,
  Send,
  ShieldCheck,
  Signpost,
  UsersRound,
} from "lucide-react";
import { Breadcrumbs, type Crumb } from "@/components/Breadcrumbs";
import { QuoteForm } from "@/components/QuoteForm";
import { GlassQuoteForm } from "@/components/routes/GlassQuoteForm";
import type { Faq } from "@/data/faqs";
import { DAMMAM_KHAFJI as c, DAMMAM_KHAFJI_REVIEWED } from "@/data/dammam-to-al-khafji-route";
import { vehicles } from "@/data/vehicles";
import { whatsappLink } from "@/lib/site";

/**
 * /routes/dammam-to-al-khafji — "up the Gulf coast". Its own layout: dark hero
 * with a glass quick form and a drawn coast map (Dammam → Jubail → Al Khafji,
 * Kuwait border marked as outside the trip), highway-sign facts, a Q&A + dotted
 * fact list, a horizontal journey strip, a two-panel border callout, an
 * editorial "who" list, vehicle capacity bars, a three-card pickup/return row,
 * grouped related links and an open FAQ grid. Copy:
 * data/dammam-to-al-khafji-route.ts.
 */

const wrap = "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8";
const linkCls = "font-semibold text-midnight underline decoration-brass/70 decoration-2 underline-offset-[5px] hover:text-brass";
const linkClsDark = "font-semibold text-white underline decoration-brass decoration-2 underline-offset-[5px] hover:text-brass";

function RichText({ text, onDark = false }: { text: string; onDark?: boolean }) {
  const parts = text.split(/(\[[^\]]+\]\(\/[^)\s]*\))/g);
  return (
    <>
      {parts.map((part, i) => {
        const m = part.match(/^\[([^\]]+)\]\((\/[^)\s]*)\)$/);
        if (!m) return <Fragment key={i}>{part}</Fragment>;
        return (
          <Link key={i} href={m[2]} className={onDark ? linkClsDark : linkCls}>
            {m[1]}
          </Link>
        );
      })}
    </>
  );
}

/** Stylised map of the coast north of Dammam (not to scale). */
function CoastMap() {
  return (
    <svg viewBox="0 0 320 420" role="img" aria-labelledby="coastmap-title" className="h-full w-full">
      <title id="coastmap-title">Sketch map: Dammam to Al Khafji along the Gulf coast, with the Kuwait border beyond Al Khafji</title>
      {/* sea */}
      <path
        d="M150 0 L148 40 L152 80 L158 110 L170 160 L178 210 L190 260 L186 290 L200 320 L210 350 L205 380 L215 420 L320 420 L320 0 Z"
        fill="#16273b"
      />
      <text x="262" y="230" fill="#c8a96b" fillOpacity="0.55" fontSize="11" fontStyle="italic" textAnchor="middle" transform="rotate(-90 262 230)">
        Arabian Gulf
      </text>
      {/* Kuwait border */}
      <line x1="0" y1="66" x2="149" y2="66" stroke="#ffffff" strokeOpacity="0.5" strokeWidth="1.5" strokeDasharray="4 5" />
      <text x="12" y="52" fill="#ffffff" fillOpacity="0.55" fontSize="10" letterSpacing="2">KUWAIT</text>
      <text x="12" y="84" fill="#ffffff" fillOpacity="0.4" fontSize="9" letterSpacing="1.5">SAUDI ARABIA</text>
      <text x="12" y="36" fill="#c8a96b" fillOpacity="0.8" fontSize="8.5">not part of this transfer</text>
      {/* route */}
      <path d="M196 352 C178 320 166 292 166 262 S150 160 153 98" fill="none" stroke="#c8a96b" strokeWidth="3" strokeLinecap="round" strokeDasharray="1 9" />
      {/* places */}
      <circle cx="153" cy="96" r="7" fill="#c8a96b" />
      <circle cx="153" cy="96" r="12" fill="none" stroke="#c8a96b" strokeOpacity="0.5" />
      <text x="138" y="100" fill="#ffffff" fontSize="13" fontWeight="700" textAnchor="end">Al Khafji</text>
      <circle cx="186" cy="262" r="4" fill="#ffffff" fillOpacity="0.7" />
      <text x="156" y="266" fill="#ffffff" fillOpacity="0.7" fontSize="11" textAnchor="end">Jubail</text>
      <circle cx="200" cy="354" r="7" fill="#ffffff" />
      <text x="186" y="358" fill="#ffffff" fontSize="13" fontWeight="700" textAnchor="end">Dammam</text>
      <text x="120" y="190" fill="#c8a96b" fontSize="11" fontWeight="700" textAnchor="end">Hwy 95</text>
      <text x="120" y="204" fill="#ffffff" fillOpacity="0.55" fontSize="10" textAnchor="end">~300 km</text>
    </svg>
  );
}

const vehicleIcon: Record<string, typeof Car> = { suv: CarFront, van: Bus, minibus: Bus };
const whoIcons = [UsersRound, Briefcase, Factory, Hotel];

export function DammamKhafjiRouteView({ faqs, crumbs }: { faqs: Faq[]; crumbs: Crumb[] }) {
  const maxSeats = Math.max(...Object.values(c.vehicles.maxSeats));

  return (
    <>
      {/* ── Hero: copy + glass form | coast map ── */}
      <section className="bg-midnight text-white">
        <div className={`${wrap} pb-14 pt-28 sm:pb-20 sm:pt-32 lg:pt-36`}>
          <Breadcrumbs items={crumbs} onDark />
          <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-14">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brass">{c.hero.kicker}</p>
              <h1 className="mt-4 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl">{c.hero.h1}</h1>
              <p className="mt-4 text-lg text-brass-soft">{c.hero.lead}</p>
              <p className="mt-4 text-[15px] leading-relaxed text-white/75">{c.hero.body}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {c.hero.points.map((p) => (
                  <li key={p} className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-3 py-1.5 text-xs text-white/85">
                    <Check className="size-3.5 text-brass" aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>
              <div id="quote" className="mt-8 scroll-mt-32">
                <GlassQuoteForm
                  defaultPickup="Dammam"
                  defaultDropoff="Al Khafji"
                  dropoffPlaceholder="Your address in Al Khafji"
                  title="Quick quote: Dammam → Al Khafji"
                />
              </div>
            </div>
            <figure className="mx-auto hidden w-full max-w-md self-center sm:block">
              <div className="aspect-[320/420] overflow-hidden rounded-3xl bg-[#101e30] ring-1 ring-white/10">
                <CoastMap />
              </div>
              <figcaption className="mt-3 text-center text-[11px] leading-snug text-white/45">Sketch, not to scale. Road distance from central Dammam.</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* ── Highway-sign facts ── */}
      <section aria-label="Dammam to Al Khafji key figures" className="border-b border-hairline bg-sand/50 py-8 sm:py-10">
        <ul className={`${wrap} grid grid-cols-2 gap-3 lg:grid-cols-4`}>
          {c.signs.map((s) => (
            <li key={s.top} className="rounded-xl bg-midnight p-1.5 shadow-md">
              <div className="h-full rounded-lg border-2 border-white/80 px-4 py-3 text-white">
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/70">{s.top}</p>
                <p className="mt-1 flex items-baseline gap-1.5">
                  <span className="text-3xl font-bold tracking-tight sm:text-4xl">{s.big}</span>
                  {s.unit && <span className="text-sm font-bold text-brass">{s.unit}</span>}
                </p>
                <p className="mt-1 text-xs text-white/60">{s.sub}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* ── Q&A + dotted fact list ── */}
      <section className="bg-white py-14 sm:py-20">
        <div className={`${wrap} grid gap-10 lg:grid-cols-2 lg:gap-16`}>
          <div className="relative rounded-3xl bg-sand/40 p-7 sm:p-9">
            <span className="absolute -top-5 left-7 flex size-10 items-center justify-center rounded-full bg-brass text-lg font-bold text-midnight" aria-hidden="true">
              Q
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">{c.quick.question}</h2>
            <p className="mt-4 text-[17px] leading-relaxed text-ink">{c.quick.answer}</p>
          </div>
          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-ink-muted">Journey facts</h2>
            <dl className="mt-5 space-y-4">
              {c.facts.map((f) => (
                <div key={f.label} className="flex items-baseline gap-3 text-[15px]">
                  <dt className="shrink-0 text-ink-soft">{f.label}</dt>
                  <span className="min-w-6 flex-1 border-b-2 border-dotted border-hairline" aria-hidden="true" />
                  <dd className="text-right font-semibold text-ink">{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ── Distance & travel time + horizontal journey strip ── */}
      <section className="bg-sand/40 py-14 sm:py-20">
        <div className={wrap}>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] lg:gap-14">
            <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">{c.route.heading}</h2>
            <div className="space-y-4 text-[15px] leading-relaxed text-ink-soft sm:text-base">
              {c.route.paragraphs.map((p) => (
                <p key={p}>
                  <RichText text={p} />
                </p>
              ))}
            </div>
          </div>

          <h3 className="mt-14 text-xl font-bold text-ink">{c.expect.heading}</h3>
          <ol className="mt-6 grid gap-3 lg:grid-cols-4 lg:gap-0">
            {c.expect.steps.map((s, i) => (
              <li key={s.title} className="relative flex lg:block">
                <div
                  className={`flex-1 bg-white p-5 ring-1 ring-hairline lg:h-full lg:p-6 ${
                    i === 0 ? "rounded-2xl lg:rounded-l-2xl lg:rounded-r-none" : i === c.expect.steps.length - 1 ? "rounded-2xl lg:rounded-l-none lg:rounded-r-2xl" : "rounded-2xl lg:rounded-none"
                  }`}
                >
                  <p className="text-xs font-bold tabular-nums text-brass">Step {i + 1}</p>
                  <h4 className="mt-1 font-bold text-ink">{s.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.text}</p>
                </div>
                {i < c.expect.steps.length - 1 && (
                  <span className="absolute -right-3 top-1/2 z-10 hidden size-6 -translate-y-1/2 items-center justify-center rounded-full bg-midnight text-brass lg:flex" aria-hidden="true">
                    <ChevronRight className="size-4" />
                  </span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Border clarification ── */}
      <section aria-labelledby="border-heading" className="bg-white py-14 sm:py-20">
        <div className={wrap}>
          <div className="rounded-3xl border-2 border-brass/60 p-6 sm:p-10">
            <div className="flex items-start gap-4">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-brass/15 text-brass">
                <Signpost className="size-6" aria-hidden="true" />
              </span>
              <div>
                <h2 id="border-heading" className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">{c.border.heading}</h2>
                <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-ink-soft sm:text-base">{c.border.intro}</p>
              </div>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-sand/40 p-6">
                <h3 className="flex items-center gap-2 font-bold text-ink">
                  <ShieldCheck className="size-5 text-brass" aria-hidden="true" />
                  {c.border.included.title}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {c.border.included.items.map((it) => (
                    <li key={it} className="flex items-start gap-2.5 text-sm text-ink">
                      <Check className="mt-0.5 size-4 shrink-0 text-brass" aria-hidden="true" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl bg-midnight p-6 text-white">
                <h3 className="flex items-center gap-2 font-bold">
                  <ArrowRight className="size-5 text-brass" aria-hidden="true" />
                  {c.border.separate.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-white/80">
                  <RichText text={c.border.separate.text} onDark />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Who uses it — editorial list ── */}
      <section className="bg-sand/40 py-14 sm:py-20">
        <div className={wrap}>
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">{c.who.heading}</h2>
          <ul className="mt-8 grid gap-x-14 md:grid-cols-2">
            {c.who.items.map((w, i) => {
              const Icon = whoIcons[i] ?? UsersRound;
              return (
                <li key={w.title} className="flex gap-5 border-t border-ink/10 py-6">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-white text-midnight shadow-sm ring-1 ring-hairline">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-ink">{w.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{w.text}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* ── Vehicles — capacity bars ── */}
      <section id="vehicles" className="scroll-mt-32 bg-white py-14 sm:py-20">
        <div className={wrap}>
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">{c.vehicles.heading}</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-soft sm:text-base">{c.vehicles.intro}</p>
          </div>
          <ul className="mt-10 divide-y divide-hairline">
            {vehicles.map((v) => {
              const Icon = vehicleIcon[v.id] ?? Car;
              const seats = c.vehicles.maxSeats[v.id] ?? 3;
              return (
                <li key={v.id} className="grid items-center gap-x-6 gap-y-3 py-5 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.3fr)_minmax(0,1.6fr)]">
                  <div className="flex items-center gap-3">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-sand/60 text-midnight">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="font-bold text-ink">{v.name}</h3>
                      <p className="text-xs text-ink-muted">{v.examples}</p>
                    </div>
                  </div>
                  <div>
                    <div className="h-2.5 overflow-hidden rounded-full bg-sand/70" aria-hidden="true">
                      <div className="h-full rounded-full bg-gradient-to-r from-midnight to-brass" style={{ width: `${Math.max(12, (seats / maxSeats) * 100)}%` }} />
                    </div>
                    <p className="mt-1.5 flex items-center gap-3 text-xs font-medium text-ink-soft">
                      <span className="inline-flex items-center gap-1">
                        <UsersRound className="size-3.5 text-brass" aria-hidden="true" />
                        {v.passengers}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Luggage className="size-3.5 text-brass" aria-hidden="true" />
                        {v.luggage}
                      </span>
                    </p>
                  </div>
                  <p className="text-sm leading-relaxed text-ink-soft">{c.vehicles.fit[v.id] ?? v.description}</p>
                </li>
              );
            })}
          </ul>
          <p className="mt-4 text-xs leading-relaxed text-ink-muted">{c.vehicles.footnote}</p>
        </div>
      </section>

      {/* ── Pickup / drop-off / return ── */}
      <section className="bg-sand/40 py-14 sm:py-20">
        <div className={wrap}>
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">{c.pickup.heading}</h2>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {[c.pickup.from, c.pickup.to].map((side) => (
              <div key={side.title} className="rounded-2xl bg-white p-6 ring-1 ring-hairline">
                <h3 className="flex items-center gap-2 text-lg font-bold text-ink">
                  <MapPin className="size-5 text-brass" aria-hidden="true" />
                  {side.title}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {side.items.map((it) => (
                    <li key={it} className="rounded-full bg-sand/60 px-3 py-1.5 text-sm text-ink">
                      {it}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-sm leading-relaxed text-ink-soft">
                  <RichText text={side.note} />
                </p>
              </div>
            ))}
            <div className="flex flex-col rounded-2xl bg-midnight p-6 text-white">
              <ArrowRightLeft className="size-6 text-brass" aria-hidden="true" />
              <h3 className="mt-4 text-lg font-bold">{c.returnTrip.heading}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/80">
                <RichText text={c.returnTrip.text} onDark />
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Full quote form (QuoteForm → /api/leads; flight field only for airport trips) ── */}
      <section id="quote-details" className="scroll-mt-32 bg-white py-14 sm:py-20">
        <div className={`${wrap} grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.3fr)] lg:gap-14`}>
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">{c.form.heading}</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-soft sm:text-base">{c.form.text}</p>
            <ol className="mt-8 space-y-4">
              {c.form.steps.map((s, i) => (
                <li key={s} className="flex items-center gap-4">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full border-2 border-brass text-sm font-bold text-midnight">{i + 1}</span>
                  <span className="text-[15px] font-medium text-ink">{s}</span>
                </li>
              ))}
            </ol>
            <p className="mt-8 text-xs text-ink-muted">{c.form.flightNote}</p>
          </div>
          <div className="rounded-3xl border border-hairline bg-sand/20 p-5 sm:p-8">
            <QuoteForm serviceType="Dammam to Al Khafji transfer" route="Dammam to Al Khafji" defaultPickup="Dammam" defaultDropoff="Al Khafji" flightField="airport" />
          </div>
        </div>
      </section>

      {/* ── Related, grouped by purpose ── */}
      <section className="bg-sand/40 py-14 sm:py-20">
        <div className={wrap}>
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">{c.related.heading}</h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {c.related.groups.map((g) => (
              <div key={g.title}>
                <h3 className="border-b-2 border-brass pb-2 text-xs font-bold uppercase tracking-[0.14em] text-ink">{g.title}</h3>
                <ul className="mt-3 space-y-1">
                  {g.links.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="group flex items-start justify-between gap-3 rounded-lg px-2 py-2.5 transition-colors hover:bg-white">
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
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ — open grid (also FAQPage JSON-LD) ── */}
      <section className="bg-white py-14 sm:py-20">
        <div className={wrap}>
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">{c.faqHeading}</h2>
          <dl className="mt-10 grid gap-x-12 gap-y-8 md:grid-cols-2">
            {faqs.map((f) => (
              <div key={f.question} className="border-l-2 border-brass/60 pl-5">
                <dt className="font-bold text-ink">{f.question}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-ink-soft sm:text-[15px]">{f.answer}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-14 rounded-2xl bg-sand/40 p-5 text-sm text-ink-soft sm:p-6">
            <h2 className="font-bold text-ink">{c.method.heading}</h2>
            <p className="mt-2 leading-relaxed">{c.method.text}</p>
            <p className="mt-2 text-xs text-ink-muted">
              Last reviewed <time dateTime={DAMMAM_KHAFJI_REVIEWED}>{new Date(`${DAMMAM_KHAFJI_REVIEWED}T00:00:00Z`).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" })}</time>
            </p>
          </div>
        </div>
      </section>

      {/* ── Final CTA — route line band ── */}
      <section className="bg-navy text-white">
        <div className={`${wrap} py-14`}>
          <div className="flex items-center gap-3 text-sm font-semibold text-white/70" aria-hidden="true">
            <span>Dammam</span>
            <span className="h-0.5 flex-1 bg-[repeating-linear-gradient(to_right,#c8a96b_0_10px,transparent_10px_18px)]" />
            <span className="rounded-full bg-brass px-2.5 py-0.5 text-xs font-bold text-midnight">~300 km</span>
            <span className="h-0.5 flex-1 bg-[repeating-linear-gradient(to_right,#c8a96b_0_10px,transparent_10px_18px)]" />
            <span>Al Khafji</span>
          </div>
          <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{c.finalCta.heading}</h2>
              <p className="mt-2 text-white/75">{c.finalCta.text}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="#quote" className="inline-flex items-center gap-2 rounded-lg bg-brass px-6 py-3.5 text-sm font-bold text-midnight transition-colors hover:bg-brass-soft">
                <Send className="size-4" />
                {c.finalCta.primary}
              </a>
              <a
                href={whatsappLink(c.hero.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-navy"
              >
                <MessageCircle className="size-4" />
                {c.finalCta.whatsapp}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
