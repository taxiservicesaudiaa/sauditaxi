import { Fragment } from "react";
import Link from "next/link";
import {
  Accessibility,
  ArrowRight,
  Briefcase,
  Building2,
  Check,
  Clock,
  Coffee,
  Hotel,
  Landmark,
  MapPin,
  MessageCircle,
  Send,
  Sprout,
  Users,
} from "lucide-react";
import { Breadcrumbs, type Crumb } from "@/components/Breadcrumbs";
import { QuoteForm } from "@/components/QuoteForm";
import { DestinationQuoteCard } from "@/components/routes/DestinationQuoteCard";
import type { RelatedRouteCard } from "@/components/routes/LongDistanceRouteView";
import type { Faq } from "@/data/faqs";
import { RIYADH_QASSIM as c, RIYADH_QASSIM_REVIEWED } from "@/data/riyadh-to-qassim-route";
import { vehicles } from "@/data/vehicles";
import { whatsappLink } from "@/lib/site";

/**
 * /routes/riyadh-to-qassim — "the farming region". Its own layout: a hero with
 * a centre-pivot field pattern and a destination-chip quote card, a
 * per-destination distance comparison, a Highway 65 milestone column, a
 * destination grid, an itinerary sheet, checkerboard question cards, a dark
 * regional-context band, a group-size vehicle ladder, a return banner, route
 * rail cards and an indexed FAQ. Copy: data/riyadh-to-qassim-route.ts.
 */

const wrap = "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8";
const pivots = "bg-[radial-gradient(circle,transparent_0_31px,rgba(200,169,107,0.16)_32px_33px,transparent_34px)] bg-[length:92px_92px]";
const linkCls = "font-semibold text-midnight underline decoration-brass decoration-2 underline-offset-4 hover:text-brass";

function RichText({ text, onDark = false }: { text: string; onDark?: boolean }) {
  const parts = text.split(/(\[[^\]]+\]\(\/[^)\s]*\))/g);
  return (
    <>
      {parts.map((part, i) => {
        const m = part.match(/^\[([^\]]+)\]\((\/[^)\s]*)\)$/);
        if (!m) return <Fragment key={i}>{part}</Fragment>;
        return (
          <Link key={i} href={m[2]} className={onDark ? "font-semibold text-white underline decoration-brass decoration-2 underline-offset-4 hover:text-brass" : linkCls}>
            {m[1]}
          </Link>
        );
      })}
    </>
  );
}

const destIcons = { city: Building2, landmark: Landmark, sprout: Sprout, hotel: Hotel, briefcase: Briefcase, pin: MapPin } as Record<string, typeof MapPin>;
const planIcons = { clock: Clock, coffee: Coffee, accessibility: Accessibility } as Record<string, typeof Clock>;

export function RiyadhQassimRouteView({ faqs, crumbs, relatedRoutes }: { faqs: Faq[]; crumbs: Crumb[]; relatedRoutes: RelatedRouteCard[] }) {
  const byId = Object.fromEntries(vehicles.map((v) => [v.id, v]));

  return (
    <>
      {/* ── Hero: pivot-field pattern, form first ── */}
      <section className="relative overflow-hidden bg-midnight text-white">
        <div className={`pointer-events-none absolute inset-0 ${pivots} [mask-image:linear-gradient(to_bottom,black,transparent_85%)]`} aria-hidden="true" />
        <div className={`relative ${wrap} pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pt-36`}>
          <Breadcrumbs items={crumbs} onDark />
          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-brass">{c.hero.kicker}</p>
          <h1 className="mt-3 max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">{c.hero.h1}</h1>
          <p className="mt-4 max-w-3xl text-lg text-brass-soft sm:text-xl">{c.hero.lead}</p>
          <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-start lg:gap-14">
            <div id="quote" className="order-2 scroll-mt-32 lg:order-1">
              <DestinationQuoteCard title={c.quickForm.title} defaultPickup="Riyadh" chips={c.quickForm.chips} placeholder={c.quickForm.placeholder} />
            </div>
            <div className="order-1 lg:order-2 lg:pt-2">
              <p className="text-[15px] leading-relaxed text-white/80 sm:text-base">{c.hero.body}</p>
              <ul className="mt-6 space-y-3">
                {c.hero.points.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-[15px] text-white/90">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-brass text-midnight">
                      <Check className="size-3.5" aria-hidden="true" />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
              <a
                href={whatsappLink(c.hero.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white underline decoration-brass decoration-2 underline-offset-4 hover:text-brass"
              >
                <MessageCircle className="size-4 text-brass" />
                Or send your details on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── At a glance: answer + per-destination comparison ── */}
      <section aria-labelledby="glance" className="bg-white py-14 sm:py-20">
        <div className={wrap}>
          <h2 id="glance" className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">{c.glance.heading}</h2>
          <p className="mt-5 max-w-4xl text-lg leading-relaxed text-ink">{c.glance.answer}</p>
          <ul className="mt-10 grid gap-4 md:grid-cols-3">
            {c.glance.destinations.map((d, i) => (
              <li key={d.name} className={`rounded-3xl p-6 ${i === 0 ? "bg-midnight text-white" : i === 1 ? "bg-sand/50 text-ink" : "border-2 border-dashed border-hairline text-ink"}`}>
                <p className={`text-xs font-bold uppercase tracking-[0.16em] ${i === 0 ? "text-brass" : "text-ink-muted"}`}>{d.role}</p>
                <h3 className="mt-1 text-2xl font-bold">{d.name}</h3>
                <p className="mt-6 text-4xl font-bold tracking-tight">{d.distance}</p>
                <p className={`mt-1 text-sm ${i === 0 ? "text-white/70" : "text-ink-soft"}`}>from central Riyadh · {d.time}</p>
              </li>
            ))}
          </ul>
          <dl className="mt-6 flex flex-wrap gap-2">
            {c.glance.facts.map((f) => (
              <div key={f.label} className="flex items-center gap-2 rounded-full bg-sand/40 px-4 py-2 text-sm">
                <dt className="text-ink-muted">{f.label}:</dt>
                <dd className="font-semibold text-ink">{f.value}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 text-xs text-ink-muted">{c.glance.note}</p>
        </div>
      </section>

      {/* ── Distance & time + Highway 65 milestones ── */}
      <section className="bg-sand/40 py-14 sm:py-20">
        <div className={`${wrap} grid gap-12 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] lg:gap-16`}>
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">{c.route.heading}</h2>
            <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-ink-soft sm:text-base">
              {c.route.paragraphs.map((p) => (
                <p key={p}>
                  <RichText text={p} />
                </p>
              ))}
            </div>
          </div>
          <figure className="rounded-3xl bg-white p-6 ring-1 ring-hairline sm:p-8">
            <figcaption className="text-xs font-bold uppercase tracking-[0.16em] text-ink-muted">Highway 65 milestones</figcaption>
            <ol className="relative mt-6 space-y-7 border-l-4 border-midnight pl-7">
              {[
                { place: "Riyadh", km: "0 km", note: "Pickup" },
                { place: "Buraidah", km: "~345 km", note: "Regional capital" },
                { place: "Unaizah", km: "~30 km from Buraidah", note: "Via Route 413" },
              ].map((m, i) => (
                <li key={m.place} className="relative">
                  <span className={`absolute -left-[38px] top-0.5 size-5 rounded-full border-4 ${i === 0 ? "border-midnight bg-white" : "border-brass bg-white"}`} aria-hidden="true" />
                  <p className="font-bold text-ink">{m.place}</p>
                  <p className="text-sm font-semibold tabular-nums text-brass">{m.km}</p>
                  <p className="text-xs text-ink-muted">{m.note}</p>
                </li>
              ))}
              <li className="relative">
                <span className="absolute -left-[38px] top-0.5 size-5 rounded-full border-4 border-dashed border-ink-muted bg-white" aria-hidden="true" />
                <p className="font-bold text-ink-soft">Hail</p>
                <p className="text-sm text-ink-muted">Further north on the same road</p>
              </li>
            </ol>
          </figure>
        </div>
      </section>

      {/* ── Destinations grid ── */}
      <section className="bg-white py-14 sm:py-20">
        <div className={wrap}>
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">{c.destinations.heading}</h2>
          <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-ink-soft sm:text-base">{c.destinations.intro}</p>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {c.destinations.items.map((d, i) => {
              const Icon = destIcons[d.icon] ?? MapPin;
              const last = i === c.destinations.items.length - 1;
              return (
                <li key={d.title} className={`rounded-2xl p-6 ${last ? "border-2 border-dashed border-brass/50" : "bg-sand/30"}`}>
                  <span className={`flex size-12 items-center justify-center rounded-full ${last ? "bg-brass/15 text-brass" : "bg-midnight text-brass"}`}>
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-ink">{d.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{d.text}</p>
                </li>
              );
            })}
          </ul>
          <p className="mt-5 text-sm text-ink-soft">
            <RichText text={c.destinations.footnote} />
          </p>
        </div>
      </section>

      {/* ── What to expect — itinerary sheet ── */}
      <section className="bg-sand/40 py-14 sm:py-20">
        <div className={wrap}>
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">{c.expect.heading}</h2>
          <div className="mt-8 overflow-hidden rounded-3xl bg-white ring-1 ring-hairline">
            <div className="flex items-center justify-between border-b border-hairline bg-midnight px-6 py-4 text-white">
              <span className="text-sm font-bold">Itinerary · Riyadh → Qassim</span>
              <span className="text-xs text-white/60">Private transfer</span>
            </div>
            <ol>
              {c.expect.rows.map((r) => (
                <li key={r.label} className="grid gap-1 border-b border-dotted border-hairline px-6 py-5 last:border-b-0 sm:grid-cols-[9rem_1fr] sm:gap-6">
                  <span className="text-xs font-bold uppercase tracking-[0.16em] text-brass sm:pt-1">{r.label}</span>
                  <div>
                    <h3 className="font-bold text-ink">{r.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink-soft">{r.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ── Who — checkerboard question cards ── */}
      <section className="bg-white py-14 sm:py-20">
        <div className={wrap}>
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">{c.who.heading}</h2>
          <ul className="mt-10 grid overflow-hidden rounded-3xl sm:grid-cols-2">
            {c.who.items.map((w, i) => {
              const dark = i === 0 || i === 3;
              return (
                <li key={w.q} className={`p-7 sm:p-9 ${dark ? "bg-midnight text-white" : "bg-sand/50 text-ink"}`}>
                  <span className="text-4xl font-bold leading-none text-brass" aria-hidden="true">&ldquo;</span>
                  <h3 className="mt-1 text-xl font-bold">{w.q}</h3>
                  <p className={`mt-3 text-sm leading-relaxed ${dark ? "text-white/75" : "text-ink-soft"}`}>{w.text}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* ── Regional context — dark band ── */}
      <section className="relative overflow-hidden bg-navy py-14 text-white sm:py-20">
        <div className={`pointer-events-none absolute inset-0 ${pivots} opacity-60`} aria-hidden="true" />
        <div className={`relative ${wrap}`}>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{c.region.heading}</h2>
          <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-white/75">{c.region.intro}</p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {c.region.features.map((f) => (
              <article key={f.title} className="rounded-2xl bg-midnight/70 p-6 ring-1 ring-white/10 backdrop-blur-sm">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-brass">{f.place}</p>
                <h3 className="mt-2 text-xl font-bold">{f.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/75">{f.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Vehicles — group-size ladder ── */}
      <section id="vehicles" className="scroll-mt-32 bg-white py-14 sm:py-20">
        <div className={wrap}>
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">{c.vehicles.heading}</h2>
          <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-ink-soft sm:text-base">{c.vehicles.intro}</p>
          <ol className="mt-10 space-y-3">
            {c.vehicles.groups.map((g, i) => (
              <li key={g.who} className="grid items-center gap-4 rounded-2xl bg-sand/30 p-4 sm:grid-cols-[minmax(0,1fr)_auto_minmax(0,2fr)] sm:p-5">
                <div className="flex items-center gap-3">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-midnight text-sm font-bold text-brass">{i + 1}</span>
                  <span className="flex items-center gap-2 font-semibold text-ink">
                    <Users className="size-4 text-brass" aria-hidden="true" />
                    {g.who}
                  </span>
                </div>
                <ArrowRight className="hidden size-5 text-brass sm:block" aria-hidden="true" />
                <div className="flex flex-wrap gap-2">
                  {g.ids.map((id) => {
                    const v = byId[id];
                    if (!v) return null;
                    return (
                      <div key={id} className="rounded-xl bg-white px-4 py-2.5 ring-1 ring-hairline">
                        <p className="font-bold text-ink">{v.name}</p>
                        <p className="text-xs text-ink-muted">
                          {v.examples} · {v.passengers} · {v.luggage}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-4 text-xs leading-relaxed text-ink-muted">{c.vehicles.footnote}</p>
        </div>
      </section>

      {/* ── Planning ── */}
      <section className="bg-sand/40 py-14 sm:py-20">
        <div className={wrap}>
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">{c.planning.heading}</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {c.planning.items.map((p) => {
              const Icon = planIcons[p.icon] ?? Clock;
              return (
                <div key={p.title}>
                  <span className="flex size-14 items-center justify-center rounded-2xl bg-white text-midnight shadow-sm ring-1 ring-hairline">
                    <Icon className="size-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-ink">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{p.text}</p>
                </div>
              );
            })}
          </div>

          {/* Return banner */}
          <div className="mt-14 grid items-center gap-6 overflow-hidden rounded-3xl bg-midnight p-7 text-white sm:p-10 md:grid-cols-[minmax(0,1.5fr)_auto]">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">{c.returnTrip.heading}</h2>
              <p className="mt-3 text-sm leading-relaxed text-white/80 sm:text-[15px]">
                <RichText text={c.returnTrip.text} onDark />
              </p>
            </div>
            <div className="flex items-center gap-3 text-sm font-bold" aria-hidden="true">
              <span>Qassim</span>
              <span className="h-0.5 w-16 bg-brass" />
              <ArrowRight className="size-5 text-brass" />
              <span>Riyadh</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Full form — centred ── */}
      <section id="quote-details" className="scroll-mt-32 bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">{c.form.heading}</h2>
            <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-ink-soft sm:text-base">{c.form.text}</p>
          </div>
          <div className="mt-8 rounded-3xl border-t-4 border-brass bg-white p-5 shadow-lg shadow-midnight/5 ring-1 ring-hairline sm:p-8">
            <QuoteForm
              serviceType="Riyadh to Qassim transfer"
              route="Riyadh to Qassim"
              defaultPickup="Riyadh"
              dropoffPlaceholder={c.quickForm.placeholder}
              flightField="airport"
            />
          </div>
          <p className="mt-4 text-center text-xs leading-relaxed text-ink-muted">{c.form.note}</p>
        </div>
      </section>

      {/* ── Related — route rail cards ── */}
      <section className="bg-sand/40 py-14 sm:py-20">
        <div className={wrap}>
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">{c.related.heading}</h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {relatedRoutes.map((r) => {
              const [from, to] = r.label.split(" to ");
              return (
                <li key={r.href}>
                  <Link href={r.href} className="group block h-full rounded-2xl bg-white p-5 ring-1 ring-hairline transition hover:ring-brass">
                    <div className="flex items-center gap-2 text-sm font-bold text-ink">
                      <span>{from}</span>
                      <span className="size-2 rounded-full bg-midnight" aria-hidden="true" />
                      <span className="h-px flex-1 bg-[repeating-linear-gradient(to_right,#c8a96b_0_6px,transparent_6px_10px)]" aria-hidden="true" />
                      <span className="size-2 rounded-full bg-brass" aria-hidden="true" />
                      <span>{to}</span>
                    </div>
                    <p className="sr-only">{r.label}</p>
                    <p className="mt-3 text-xs tabular-nums text-ink-muted">{r.meta}</p>
                    <p className="mt-1 text-sm text-ink-soft">{r.text}</p>
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            {c.related.cities.map((x) => (
              <Link key={x.href} href={x.href} className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink ring-1 ring-hairline transition hover:ring-brass">
                <MapPin className="size-4 text-brass" aria-hidden="true" />
                {x.label}
                <span className="font-normal text-ink-muted">· {x.text}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ — question index + answers (FAQPage JSON-LD) ── */}
      <section className="bg-white py-14 sm:py-20">
        <div className={wrap}>
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">{c.faqHeading}</h2>
          <nav aria-label="Questions on this page" className="mt-8 rounded-2xl bg-sand/40 p-5 sm:p-6">
            <ol className="grid gap-x-8 gap-y-2 text-sm sm:grid-cols-2">
              {faqs.map((f, i) => (
                <li key={f.question}>
                  <a href={`#faq-${i + 1}`} className="flex gap-2 text-ink hover:text-brass">
                    <span className="tabular-nums text-brass">{String(i + 1).padStart(2, "0")}</span>
                    {f.question}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
          <div className="mt-10 divide-y divide-hairline">
            {faqs.map((f, i) => (
              <div key={f.question} id={`faq-${i + 1}`} className="scroll-mt-32 grid gap-2 py-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] md:gap-10">
                <h3 className="font-bold text-ink">
                  <span className="mr-2 tabular-nums text-brass">{String(i + 1).padStart(2, "0")}</span>
                  {f.question}
                </h3>
                <p className="text-sm leading-relaxed text-ink-soft sm:text-[15px]">{f.answer}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 border-t border-hairline pt-6 text-sm text-ink-soft">
            <h2 className="font-bold text-ink">{c.method.heading}</h2>
            <p className="mt-2 max-w-4xl leading-relaxed">{c.method.text}</p>
            <p className="mt-2 text-xs text-ink-muted">
              Last reviewed <time dateTime={RIYADH_QASSIM_REVIEWED}>{new Date(`${RIYADH_QASSIM_REVIEWED}T00:00:00Z`).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" })}</time>
            </p>
          </div>
        </div>
      </section>

      {/* ── Final CTA — card on sand ── */}
      <section className="bg-sand/50 py-14 sm:py-16">
        <div className={wrap}>
          <div className="relative overflow-hidden rounded-3xl bg-midnight p-8 text-white sm:p-12">
            <div className={`pointer-events-none absolute inset-0 ${pivots} opacity-50`} aria-hidden="true" />
            <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-xl">
                <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{c.finalCta.heading}</h2>
                <p className="mt-2 text-white/75">{c.finalCta.text}</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a href="#quote" className="inline-flex items-center gap-2 rounded-xl bg-brass px-6 py-3.5 text-sm font-bold text-midnight transition-colors hover:bg-brass-soft">
                  <Send className="size-4" />
                  {c.finalCta.primary}
                </a>
                <a
                  href={whatsappLink(c.hero.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-6 py-3.5 text-sm font-semibold transition-colors hover:bg-white hover:text-midnight"
                >
                  <MessageCircle className="size-4" />
                  {c.finalCta.whatsapp}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
