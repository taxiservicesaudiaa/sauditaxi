import { Fragment } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Bus,
  Car,
  CarFront,
  Check,
  ClipboardCheck,
  Clock,
  Hotel,
  Landmark,
  Luggage,
  MapPin,
  MessageCircle,
  Moon,
  Mountain,
  Route as RouteIcon,
  Send,
  UserRound,
  Users,
} from "lucide-react";
import { Breadcrumbs, type Crumb } from "@/components/Breadcrumbs";
import { HomeBookingPanel } from "@/components/home/HomeBookingPanel";
import { QuoteForm } from "@/components/QuoteForm";
import { FAQSection } from "@/components/sections/FAQSection";
import { Button } from "@/components/ui/button";
import type { Faq } from "@/data/faqs";
import { vehicles } from "@/data/vehicles";
import { whatsappLink } from "@/lib/site";

/**
 * Dedicated layout for hand-written long-distance route pages
 * (/routes/makkah-to-dammam, /routes/riyadh-to-hail). Each page's copy lives
 * in its own data file (data/*-route.ts) and is registered in
 * data/long-route-pages.ts; every other route keeps its existing template.
 *
 * Copy strings may contain [anchor](/path) or [anchor](#id): rendered as real
 * <a href> links inside the sentence (descriptive anchors, context around them).
 */

const icons = { car: Car, moon: Moon, user: UserRound, clock: Clock, hotel: Hotel, pin: MapPin, mountain: Mountain, landmark: Landmark };
export type LongRouteIcon = keyof typeof icons;

export interface LongRouteContent {
  path: string;
  reviewed: string;
  hero: { eyebrow: string; h1: string; lead: string; body: string; points: string[]; whatsappMessage: string };
  panel: { pickup: string; dropoff: string; eyebrow: string; title: string; dropoffPlaceholder: string };
  quickAnswer: string;
  glance: {
    heading: string;
    caption: string;
    rows: { label: string; value: string; note: string }[];
    legsHeading: string;
    /** Cities along the line, e.g. ["Makkah", "Riyadh", "Dammam"]. */
    stops: string[];
    /** One per gap between stops. */
    legs: { distance: string; time: string }[];
    /** Small label next to an intermediate stop. */
    stopNote?: { index: number; text: string };
    legsNote: string;
  };
  journey: {
    heading: string;
    paragraphs: string[];
    /** Optional "what to expect" timeline shown beside the prose. */
    aside?: { heading: string; steps: { title: string; text: string }[] };
  };
  compare?: {
    heading: string;
    intro: string;
    caption: string;
    columns: [string, string];
    rows: { label: string; car: string; flight: string }[];
    verdict: string;
  };
  suits: { heading: string; intro: string; items: { title: string; text: string }[] };
  vehicles: { heading: string; intro: string; fit: Record<string, string>; footnote: string };
  stops: {
    heading: string;
    cards: { icon: LongRouteIcon; title: string; text: string }[];
    checklist: { heading: string; items: string[] };
  };
  destination?: {
    heading: string;
    paragraphs: string[];
    highlights: { icon: LongRouteIcon; title: string; text: string }[];
    returnTrip?: { heading: string; text: string };
  };
  pickup: {
    heading: string;
    from: { title: string; items: string[]; note: string };
    to: { title: string; items: string[]; note: string };
  };
  steps: { heading: string; items: { title: string; text: string }[] };
  formSection: { heading: string; text: string };
  quoteForm: { serviceType: string; route: string; pickup: string; dropoff: string };
  related: {
    heading: string;
    intro: string;
    routes: { slug: string; text: string }[];
    cities: { href: string; label: string; text: string }[];
  };
  guides: { heading: string; slugs: string[] };
  faqHeading: string;
  method: { heading: string; text: string };
  finalCta: { heading: string; text: string; primary: string; whatsapp: string };
}

export interface RelatedRouteCard {
  href: string;
  label: string;
  meta: string;
  text: string;
}

export interface PlanningGuide {
  slug: string;
  title: string;
  excerpt: string | null;
}

const vehicleIcon: Record<string, typeof Car> = { suv: CarFront, van: Bus, minibus: Bus };
const container = "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8";
const inlineLink = "font-semibold text-midnight underline decoration-brass/60 underline-offset-4 hover:text-brass";

function RichText({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\]\((?:\/|#)[^)\s]*\))/g);
  return (
    <>
      {parts.map((part, i) => {
        const m = part.match(/^\[([^\]]+)\]\(((?:\/|#)[^)\s]*)\)$/);
        if (!m) return <Fragment key={i}>{part}</Fragment>;
        const [, label, href] = m;
        return href.startsWith("#") ? (
          <a key={i} href={href} className={inlineLink}>
            {label}
          </a>
        ) : (
          <Link key={i} href={href} className={inlineLink}>
            {label}
          </Link>
        );
      })}
    </>
  );
}

function SectionHeading({ id, title, intro }: { id?: string; title: string; intro?: string }) {
  return (
    <div className="max-w-3xl">
      <h2 id={id} className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
        {title}
      </h2>
      {intro && (
        <p className="mt-3 text-[15px] leading-relaxed text-ink-soft sm:text-base">
          <RichText text={intro} />
        </p>
      )}
    </div>
  );
}

function WhatsAppButton({ message, label }: { message: string; label: string }) {
  return (
    <Button asChild variant="outline" size="lg" className="border-white/40 text-white hover:bg-white hover:text-navy">
      <a href={whatsappLink(message)} target="_blank" rel="noopener noreferrer">
        <MessageCircle className="size-5" />
        {label}
      </a>
    </Button>
  );
}

function formatReviewed(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
}

/** Section tone: alternating white / sand so optional sections never stack two of the same. */
type Tone = "white" | "sand";
const sectionBg: Record<Tone, string> = { white: "bg-white", sand: "bg-sand/40" };
/** Card fill that contrasts with its section. */
const cardBg: Record<Tone, string> = { white: "bg-sand/20", sand: "bg-white" };

export function LongDistanceRouteView({
  content: c,
  faqs,
  crumbs,
  relatedRoutes,
  guides,
}: {
  content: LongRouteContent;
  faqs: Faq[];
  crumbs: Crumb[];
  relatedRoutes: RelatedRouteCard[];
  guides: PlanningGuide[];
}) {
  // Body sections before "How booking works" alternate tones in order.
  let toneIndex = 0;
  const nextTone = (): Tone => (toneIndex++ % 2 === 0 ? "white" : "sand");
  const journeyTone = nextTone();
  const compareTone = c.compare ? nextTone() : "white";
  const suitsTone = nextTone();
  const vehiclesTone = nextTone();
  const stopsTone = nextTone();
  const destinationTone = c.destination ? nextTone() : "white";
  const pickupTone = nextTone();
  const lastStop = c.glance.stops.length - 1;

  return (
    <>
      {/* 1 — Hero with the compact quote panel */}
      <section className="bg-midnight text-white">
        <div className={`${container} pb-14 pt-28 sm:pb-16 sm:pt-32 lg:pb-20 lg:pt-36`}>
          <Breadcrumbs items={crumbs} onDark />
          <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1fr)_440px] lg:items-start lg:gap-12">
            <div>
              <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-brass">
                <RouteIcon className="size-3.5" aria-hidden="true" />
                {c.hero.eyebrow}
              </p>
              <h1 className="mt-5 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">{c.hero.h1}</h1>
              <p className="mt-4 text-lg font-semibold text-brass sm:text-xl">{c.hero.lead}</p>
              <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-white/80 sm:text-base">{c.hero.body}</p>
              <ul className="mt-6 space-y-2.5">
                {c.hero.points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-sm text-white/85 sm:text-[15px]">
                    <Check className="mt-0.5 size-4 shrink-0 text-brass" aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild variant="gold" size="lg">
                  <a href="#quote">
                    <Send className="size-5" />
                    {c.finalCta.primary}
                  </a>
                </Button>
                <WhatsAppButton message={c.hero.whatsappMessage} label="WhatsApp Us" />
              </div>
            </div>

            {/* Homepage-style panel: hands off to /get-quote prefilled; the full
                QuoteForm there submits to /api/leads. The route-tagged full form
                is further down this page (#quote-details). */}
            <div id="quote" className="scroll-mt-32">
              <HomeBookingPanel
                defaultPickup={c.panel.pickup}
                defaultDropoff={c.panel.dropoff}
                eyebrow={c.panel.eyebrow}
                title={c.panel.title}
                dropoffPlaceholder={c.panel.dropoffPlaceholder}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2 — Quick answer + at-a-glance table + route line */}
      <section aria-labelledby="glance" className="border-b border-hairline bg-sand/40 py-12 sm:py-16">
        <div className={container}>
          <div className="max-w-3xl rounded-2xl border-l-4 border-brass bg-white p-5 sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-brass">In short</p>
            <p className="mt-2 text-[15px] leading-relaxed text-ink sm:text-base">{c.quickAnswer}</p>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:gap-12">
            <div>
              <h2 id="glance" className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                {c.glance.heading}
              </h2>
              <div className="mt-6 overflow-hidden rounded-2xl border border-hairline bg-white">
                <table className="w-full text-left text-sm">
                  <caption className="sr-only">{c.glance.caption}</caption>
                  <tbody className="divide-y divide-hairline">
                    {c.glance.rows.map((r) => (
                      <tr key={r.label} className="align-top">
                        <th scope="row" className="w-[34%] bg-sand/30 px-4 py-3.5 text-xs font-semibold uppercase tracking-wide text-ink-muted sm:px-5">
                          {r.label}
                        </th>
                        <td className="px-4 py-3.5 sm:px-5">
                          <span className="block font-semibold text-ink">{r.value}</span>
                          <span className="mt-0.5 block text-xs text-ink-muted">{r.note}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold uppercase tracking-wide text-ink">{c.glance.legsHeading}</h3>
              <ol className="mt-5 rounded-2xl border border-hairline bg-white p-5 sm:p-6">
                {c.glance.stops.map((city, i) => (
                  <li key={city} className="relative pl-9">
                    <span
                      className={`absolute left-0 top-0.5 flex size-6 items-center justify-center rounded-full text-[11px] font-bold ${
                        i > 0 && i < lastStop ? "border-2 border-brass bg-white text-midnight" : "bg-midnight text-brass"
                      }`}
                      aria-hidden="true"
                    >
                      <MapPin className="size-3.5" />
                    </span>
                    <p className="font-semibold text-ink">
                      {city}
                      {c.glance.stopNote?.index === i && <span className="ml-2 text-xs font-medium text-ink-muted">{c.glance.stopNote.text}</span>}
                    </p>
                    {i < lastStop && c.glance.legs[i] && (
                      <div className="-ml-6 my-2 border-l-2 border-dashed border-brass/60 py-3 pl-6">
                        <p className="text-sm text-ink-soft">
                          <span className="font-semibold text-ink">{c.glance.legs[i].distance}</span> · {c.glance.legs[i].time}
                        </p>
                      </div>
                    )}
                  </li>
                ))}
              </ol>
              <p className="mt-3 text-xs leading-relaxed text-ink-muted">{c.glance.legsNote}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3 — The journey (story / distance and time), optional timeline aside */}
      <section className={`${sectionBg[journeyTone]} py-14 sm:py-20`}>
        <div className={container}>
          {c.journey.aside ? (
            <div className="grid gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:gap-14">
              <div>
                <SectionHeading title={c.journey.heading} />
                <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-ink-soft sm:text-base">
                  {c.journey.paragraphs.map((p) => (
                    <p key={p}>
                      <RichText text={p} />
                    </p>
                  ))}
                </div>
              </div>
              <div className={`rounded-2xl border border-hairline ${cardBg[journeyTone]} p-6 sm:p-8 lg:self-start`}>
                <h2 className="text-xl font-bold tracking-tight text-ink">{c.journey.aside.heading}</h2>
                <ol className="mt-6 space-y-5">
                  {c.journey.aside.steps.map((s, i) => (
                    <li key={s.title} className="flex gap-4">
                      <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-midnight text-xs font-bold text-brass">{i + 1}</span>
                      <div>
                        <h3 className="font-semibold text-ink">{s.title}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                          <RichText text={s.text} />
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          ) : (
            <div className="max-w-3xl">
              <SectionHeading title={c.journey.heading} />
              <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-ink-soft sm:text-base">
                {c.journey.paragraphs.map((p) => (
                  <p key={p}>
                    <RichText text={p} />
                  </p>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 4 — Driving vs flying (optional) */}
      {c.compare && (
        <section className={`${sectionBg[compareTone]} py-14 sm:py-20`}>
          <div className={container}>
            <SectionHeading title={c.compare.heading} intro={c.compare.intro} />
            <div className="mt-8 overflow-x-auto rounded-2xl border border-hairline bg-white">
              <table className="w-full min-w-[640px] text-left text-sm">
                <caption className="sr-only">{c.compare.caption}</caption>
                <thead>
                  <tr className="bg-midnight text-white">
                    <th scope="col" className="px-5 py-3.5 font-semibold">
                      <span className="sr-only">Compared on</span>
                    </th>
                    <th scope="col" className="px-5 py-3.5 font-semibold text-brass">{c.compare.columns[0]}</th>
                    <th scope="col" className="px-5 py-3.5 font-semibold">{c.compare.columns[1]}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-hairline">
                  {c.compare.rows.map((r) => (
                    <tr key={r.label} className="align-top">
                      <th scope="row" className="w-[22%] px-5 py-4 font-semibold text-ink">{r.label}</th>
                      <td className="px-5 py-4 text-ink-soft">{r.car}</td>
                      <td className="px-5 py-4 text-ink-soft">{r.flight}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-6 max-w-3xl text-[15px] leading-relaxed text-ink-soft sm:text-base">
              <RichText text={c.compare.verdict} />
            </p>
          </div>
        </section>
      )}

      {/* 5 — Who should consider it */}
      <section className={`${sectionBg[suitsTone]} py-14 sm:py-20`}>
        <div className={container}>
          <SectionHeading title={c.suits.heading} intro={c.suits.intro} />
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {c.suits.items.map((s) => (
              <li key={s.title} className={`rounded-2xl border border-hairline ${cardBg[suitsTone]} p-6`}>
                <h3 className="flex items-center gap-2 font-semibold text-ink">
                  <Users className="size-4 text-brass" aria-hidden="true" />
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  <RichText text={s.text} />
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 6 — Vehicles (shared vehicle data, route-specific fit notes) */}
      <section id="vehicles" className={`scroll-mt-32 ${sectionBg[vehiclesTone]} py-14 sm:py-20`}>
        <div className={container}>
          <SectionHeading title={c.vehicles.heading} intro={c.vehicles.intro} />
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {vehicles.map((v) => {
              const Icon = vehicleIcon[v.id] ?? Car;
              const chip = vehiclesTone === "sand" ? "bg-sand/40" : "bg-white";
              return (
                <li key={v.id} className={`rounded-2xl border border-hairline ${cardBg[vehiclesTone]} p-5`}>
                  <div className="flex items-center gap-3">
                    <span className="flex size-11 items-center justify-center rounded-xl bg-midnight text-brass">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="font-semibold text-ink">{v.name}</h3>
                      <p className="text-xs text-ink-muted">{v.examples}</p>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2 text-xs font-medium text-ink">
                    <span className={`inline-flex items-center gap-1.5 rounded-full ${chip} px-2.5 py-1 ring-1 ring-hairline`}>
                      <Users className="size-3.5 text-brass" aria-hidden="true" />
                      {v.passengers}
                    </span>
                    <span className={`inline-flex items-center gap-1.5 rounded-full ${chip} px-2.5 py-1 ring-1 ring-hairline`}>
                      <Luggage className="size-3.5 text-brass" aria-hidden="true" />
                      {v.luggage}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">{c.vehicles.fit[v.id] ?? v.description}</p>
                </li>
              );
            })}
          </ul>
          <p className="mt-5 max-w-3xl text-xs leading-relaxed text-ink-muted">{c.vehicles.footnote}</p>
        </div>
      </section>

      {/* 7 — Rest stops / journey planning, checklist */}
      <section className={`${sectionBg[stopsTone]} py-14 sm:py-20`}>
        <div className={`${container} grid gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:gap-14`}>
          <div>
            <SectionHeading title={c.stops.heading} />
            <div className="mt-6 space-y-4">
              {c.stops.cards.map(({ title, text, icon }) => {
                const Icon = icons[icon];
                return (
                  <div key={title} className={`flex gap-4 rounded-2xl border border-hairline ${stopsTone === "sand" ? "bg-white " : ""}p-5`}>
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-sand text-midnight">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="font-semibold text-ink">{title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                        <RichText text={text} />
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className={`rounded-2xl border border-hairline ${stopsTone === "sand" ? "bg-white" : "bg-sand/30"} p-6 sm:p-8 lg:self-start`}>
            <h3 className="flex items-center gap-2 text-lg font-bold text-ink">
              <ClipboardCheck className="size-5 text-brass" aria-hidden="true" />
              {c.stops.checklist.heading}
            </h3>
            <ul className="mt-5 space-y-3">
              {c.stops.checklist.items.map((i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-ink">
                  <Check className="mt-0.5 size-4 shrink-0 text-brass" aria-hidden="true" />
                  {i}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 8 — Destination information and return journey (optional) */}
      {c.destination && (
        <section className={`${sectionBg[destinationTone]} py-14 sm:py-20`}>
          <div className={`${container} grid gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:gap-14`}>
            <div>
              <SectionHeading title={c.destination.heading} />
              <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-ink-soft sm:text-base">
                {c.destination.paragraphs.map((p) => (
                  <p key={p}>
                    <RichText text={p} />
                  </p>
                ))}
              </div>
              <ul className="mt-8 grid gap-4 sm:grid-cols-3">
                {c.destination.highlights.map(({ icon, title, text }) => {
                  const Icon = icons[icon];
                  return (
                    <li key={title} className={`rounded-2xl border border-hairline ${cardBg[destinationTone]} p-5`}>
                      <Icon className="size-5 text-brass" aria-hidden="true" />
                      <h3 className="mt-3 font-semibold text-ink">{title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{text}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
            {c.destination.returnTrip && (
              <div className="rounded-2xl bg-midnight p-6 text-white sm:p-8 lg:self-start">
                <h2 className="text-xl font-bold tracking-tight">{c.destination.returnTrip.heading}</h2>
                <p className="mt-3 text-sm leading-relaxed text-white/80 [&_a]:text-white [&_a]:decoration-brass">
                  <RichText text={c.destination.returnTrip.text} />
                </p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* 9 — Pickup and drop-off */}
      <section className={`${sectionBg[pickupTone]} py-14 sm:py-20`}>
        <div className={container}>
          <SectionHeading title={c.pickup.heading} />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              { ...c.pickup.from, Icon: Hotel },
              { ...c.pickup.to, Icon: MapPin },
            ].map(({ title, items, note, Icon }) => (
              <div key={title} className={`rounded-2xl border border-hairline ${pickupTone === "sand" ? "bg-white" : "bg-sand/20"} p-6`}>
                <h3 className="flex items-center gap-2 text-lg font-bold text-ink">
                  <Icon className="size-5 text-brass" aria-hidden="true" />
                  {title}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {items.map((i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-ink">
                      <Check className="mt-0.5 size-4 shrink-0 text-brass" aria-hidden="true" />
                      {i}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 border-t border-hairline pt-4 text-sm leading-relaxed text-ink-soft">
                  <RichText text={note} />
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10 — How booking works */}
      <section className="bg-midnight py-14 text-white sm:py-20">
        <div className={container}>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{c.steps.heading}</h2>
          <ol className={`mt-8 grid gap-4 ${c.steps.items.length === 4 ? "md:grid-cols-2 lg:grid-cols-4" : "md:grid-cols-3"}`}>
            {c.steps.items.map((s, i) => (
              <li key={s.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <span className="flex size-9 items-center justify-center rounded-full bg-brass text-sm font-bold text-midnight">{i + 1}</span>
                <h3 className="mt-4 font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/75">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 11 — Full, route-tagged quote form (same QuoteForm → /api/leads) */}
      <section id="quote-details" className="scroll-mt-32 bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title={c.formSection.heading} intro={c.formSection.text} />
          <div className="mt-8 rounded-2xl border border-hairline bg-sand/20 p-5 sm:p-8">
            <QuoteForm
              serviceType={c.quoteForm.serviceType}
              route={c.quoteForm.route}
              defaultPickup={c.quoteForm.pickup}
              defaultDropoff={c.quoteForm.dropoff}
            />
          </div>
        </div>
      </section>

      {/* 12 — Related routes and cities */}
      <section className="bg-sand/40 py-14 sm:py-20">
        <div className={container}>
          <SectionHeading title={c.related.heading} intro={c.related.intro} />
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[...relatedRoutes, ...c.related.cities.map((x) => ({ href: x.href, label: x.label, meta: "", text: x.text }))].map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="flex h-full items-center justify-between gap-3 rounded-2xl border border-hairline bg-white p-4 transition-colors hover:border-brass/60"
                >
                  <span>
                    <span className="block font-semibold text-ink">{l.label}</span>
                    {l.meta && <span className="mt-0.5 block text-xs font-medium text-ink">{l.meta}</span>}
                    <span className="mt-0.5 block text-xs text-ink-muted">{l.text}</span>
                  </span>
                  <ArrowRight className="size-4 shrink-0 text-brass" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 13 — FAQs (also emitted as FAQPage JSON-LD by the page) */}
      <FAQSection faqs={faqs} heading={c.faqHeading} background="white" />

      {/* 14 — Curated planning guides */}
      {guides.length > 0 && (
        <section className="bg-sand/40 py-14 sm:py-20">
          <div className={container}>
            <SectionHeading title={c.guides.heading} />
            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {guides.map((g) => (
                <li key={g.slug}>
                  <Link
                    href={`/blog/${g.slug}`}
                    className="flex h-full flex-col rounded-2xl border border-hairline bg-white p-5 transition-colors hover:border-brass/60"
                  >
                    <span className="font-semibold leading-snug text-ink">{g.title}</span>
                    {g.excerpt && <span className="mt-2 line-clamp-3 text-sm leading-relaxed text-ink-soft">{g.excerpt}</span>}
                    <span className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-semibold text-midnight">
                      Read the guide
                      <ArrowRight className="size-3.5" aria-hidden="true" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* 15 — Method / transparency note */}
      <section className="bg-white py-10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-hairline p-5 sm:p-6">
            <h2 className="text-base font-bold text-ink">{c.method.heading}</h2>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{c.method.text}</p>
            <p className="mt-3 text-xs text-ink-muted">
              Last reviewed <time dateTime={c.reviewed}>{formatReviewed(c.reviewed)}</time>
            </p>
          </div>
        </div>
      </section>

      {/* 16 — Final CTA */}
      <section className="bg-navy">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">{c.finalCta.heading}</h2>
          <p className="mx-auto mt-3 max-w-2xl text-white/80">{c.finalCta.text}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild variant="gold" size="lg">
              <a href="#quote">
                <Send className="size-5" />
                {c.finalCta.primary}
              </a>
            </Button>
            <WhatsAppButton message={c.hero.whatsappMessage} label={c.finalCta.whatsapp} />
          </div>
        </div>
      </section>
    </>
  );
}
