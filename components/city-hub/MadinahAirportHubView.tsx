import { Fragment } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Bus,
  Car,
  CarFront,
  Check,
  Clock,
  Hotel,
  Luggage,
  MapPin,
  MessageCircle,
  Plane,
  Send,
  Star,
  Users,
} from "lucide-react";
import { Breadcrumbs, type Crumb } from "@/components/Breadcrumbs";
import { HomeBookingPanel } from "@/components/home/HomeBookingPanel";
import { FAQSection } from "@/components/sections/FAQSection";
import { Button } from "@/components/ui/button";
import { MADINAH_HUB, MADINAH_HUB_FAQS } from "@/data/madinah-airport-hub";
import { vehicles } from "@/data/vehicles";
import { whatsappLink } from "@/lib/site";

/**
 * /cities/madinah — Madinah airport ⇄ hotel transfers. Conversion-led layout on
 * the site's midnight/brass/sand theme: quote form in the hero, then the
 * information a MED arrival needs, the hotel directory, vehicles, booking steps,
 * return and pilgrim journeys, related routes, FAQs and curated guides.
 * Content lives in data/madinah-airport-hub.ts; the other four /cities hubs
 * still render through HotelTransferHubView.
 */

export interface MadinahHubHotel {
  slug: string;
  name: string;
  area: string;
  stars: number;
  distanceKm: number | null;
  durationMin: number | null;
  quoteHref: string;
}

export interface MadinahHubGuide {
  slug: string;
  title: string;
  excerpt: string | null;
}

const vehicleIcon: Record<string, typeof Car> = { suv: CarFront, van: Bus, minibus: Bus };

const container = "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8";

const inlineLink = "font-semibold text-midnight underline decoration-brass/60 underline-offset-4 hover:text-brass";

/**
 * Renders copy from data/madinah-airport-hub.ts, turning [anchor](/path) or
 * [anchor](#id) into links. Only internal paths and in-page anchors are
 * recognised; anything else stays plain text.
 */
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

function WhatsAppButton({ message, label, onDark = false }: { message: string; label: string; onDark?: boolean }) {
  return (
    <Button
      asChild
      variant="outline"
      size="lg"
      className={onDark ? "border-white/40 text-white hover:bg-white hover:text-navy" : ""}
    >
      <a href={whatsappLink(message)} target="_blank" rel="noopener noreferrer">
        <MessageCircle className="size-5" />
        {label}
      </a>
    </Button>
  );
}

export function MadinahAirportHubView({
  crumbs,
  hotels,
  guides,
  airportName,
}: {
  crumbs: Crumb[];
  hotels: MadinahHubHotel[];
  guides: MadinahHubGuide[];
  airportName: string;
}) {
  const c = MADINAH_HUB;
  const notListedHref = `/get-quote?pickup=${encodeURIComponent(airportName)}`;

  return (
    <>
      {/* 1 — Hero with the quote form */}
      <section className="bg-midnight text-white">
        <div className={`${container} pb-14 pt-28 sm:pb-16 sm:pt-32 lg:pb-20 lg:pt-36`}>
          <Breadcrumbs items={crumbs} onDark />
          <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1fr)_440px] lg:items-start lg:gap-12">
            <div>
              <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-brass">
                <Plane className="size-3.5" aria-hidden="true" />
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
                <WhatsAppButton message={c.hero.whatsappMessage} label="WhatsApp Us" onDark />
              </div>
            </div>

            {/* Same compact panel as the homepage: hands off to /get-quote with
                the values prefilled, where the full form collects contact,
                luggage and flight details and submits to /api/leads. */}
            <div id="quote" className="scroll-mt-32">
              <HomeBookingPanel
                defaultPickup={airportName}
                eyebrow="Madinah airport transfer"
                title="Request your transfer from MED"
                dropoffPlaceholder="Your Madinah hotel or address"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2 — Transfer essentials */}
      <section aria-labelledby="essentials" className="border-b border-hairline bg-sand/40 py-10 sm:py-12">
        <div className={container}>
          <h2 id="essentials" className="sr-only">
            Madinah airport transfer essentials
          </h2>
          <dl className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
            {c.essentials.map((e) => (
              <div key={e.label} className="rounded-2xl border border-hairline bg-white p-4 sm:p-5">
                <dt className="text-[11px] font-semibold uppercase tracking-wide text-ink-muted">{e.label}</dt>
                <dd className="mt-1.5 text-sm font-semibold leading-snug text-ink sm:text-[15px]">{e.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* 3 + 4 — Airport-to-hotel information and what to send */}
      <section className="bg-white py-14 sm:py-20">
        <div className={`${container} grid gap-10 lg:grid-cols-2 lg:gap-14`}>
          <div>
            <SectionHeading title={c.arrival.heading} />
            <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-ink-soft sm:text-base">
              {c.arrival.paragraphs.map((p) => (
                <p key={p}>
                  <RichText text={p} />
                </p>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-hairline bg-sand/30 p-6 sm:p-8">
            <h2 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">{c.pickup.heading}</h2>
            <p className="mt-3 text-[15px] text-ink-soft">{c.pickup.intro}</p>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {c.pickup.items.map((i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-ink">
                  <Check className="mt-0.5 size-4 shrink-0 text-brass" aria-hidden="true" />
                  {i}
                </li>
              ))}
            </ul>
            <div className="mt-6 space-y-2 border-t border-hairline pt-5">
              {c.pickup.notes.map((n) => (
                <p key={n} className="flex items-start gap-2.5 text-sm text-ink-soft">
                  <Clock className="mt-0.5 size-4 shrink-0 text-brass" aria-hidden="true" />
                  {n}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5 — Hotel directory (all ten hotels) */}
      <section id="hotels" className="scroll-mt-32 bg-sand/40 py-14 sm:py-20">
        <div className={container}>
          <SectionHeading title={c.hotels.heading} intro={c.hotels.intro} />
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {hotels.map((h) => (
              <li key={h.slug} className="flex flex-col rounded-2xl border border-hairline bg-white p-5 transition-colors hover:border-brass/60">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-semibold leading-snug text-ink">{h.name}</h3>
                  <span className="inline-flex shrink-0 items-center gap-0.5 rounded-full bg-sand px-2 py-0.5 text-xs font-semibold text-ink" aria-label={`${h.stars}-star hotel`}>
                    {h.stars}
                    <Star className="size-3 fill-brass text-brass" aria-hidden="true" />
                  </span>
                </div>
                <p className="mt-1.5 flex items-center gap-1.5 text-sm text-ink-soft">
                  <MapPin className="size-3.5 shrink-0 text-brass" aria-hidden="true" />
                  {h.area}
                </p>
                <p className="mt-3 text-sm text-ink-soft">
                  {h.distanceKm != null && h.durationMin != null && (
                    <>
                      <span className="font-semibold text-ink">{h.distanceKm} km</span> from MED · about {h.durationMin} min*
                    </>
                  )}
                </p>
                <Link
                  href={h.quoteHref}
                  className="mt-4 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-midnight underline decoration-brass/60 underline-offset-4 hover:text-brass"
                >
                  Request a quote to {h.name}
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </li>
            ))}
            <li className="flex flex-col rounded-2xl border border-dashed border-brass/60 bg-white p-5">
              <h3 className="flex items-center gap-2 font-semibold text-ink">
                <Hotel className="size-4 text-brass" aria-hidden="true" />
                {c.hotels.notListed.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{c.hotels.notListed.text}</p>
              <Link
                href={notListedHref}
                className="mt-4 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-midnight underline decoration-brass/60 underline-offset-4 hover:text-brass"
              >
                {c.hotels.notListed.cta}
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </li>
          </ul>
          <p className="mt-5 max-w-3xl text-xs leading-relaxed text-ink-muted">* {c.hotels.footnote}</p>
        </div>
      </section>

      {/* 6 — Vehicles */}
      <section id="vehicles" className="scroll-mt-32 bg-white py-14 sm:py-20">
        <div className={container}>
          <SectionHeading title={c.vehicles.heading} intro={c.vehicles.intro} />
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {vehicles.map((v) => {
              const Icon = vehicleIcon[v.id] ?? Car;
              return (
                <li key={v.id} className="rounded-2xl border border-hairline bg-sand/20 p-5">
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
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1 ring-1 ring-hairline">
                      <Users className="size-3.5 text-brass" aria-hidden="true" />
                      {v.passengers}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1 ring-1 ring-hairline">
                      <Luggage className="size-3.5 text-brass" aria-hidden="true" />
                      {v.luggage}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">{v.description}</p>
                </li>
              );
            })}
          </ul>
          <div className="mt-8">
            <Button asChild variant="gold" size="lg">
              <a href="#quote">{c.vehicles.cta}</a>
            </Button>
          </div>
        </div>
      </section>

      {/* 7 — How booking works */}
      <section className="bg-midnight py-14 text-white sm:py-20">
        <div className={container}>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{c.steps.heading}</h2>
          <ol className="mt-8 grid gap-4 md:grid-cols-3">
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

      {/* 8 + 9 — Return transfers and pilgrim journeys */}
      <section className="bg-white py-14 sm:py-20">
        <div className={`${container} grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-14`}>
          <div>
            <SectionHeading title={c.returnTransfer.heading} />
            <p className="mt-5 text-[15px] leading-relaxed text-ink-soft sm:text-base">{c.returnTransfer.text}</p>
            <Link
              href={c.returnTransfer.link.href}
              className="mt-5 inline-flex items-center gap-1.5 font-semibold text-midnight underline decoration-brass/60 underline-offset-4 hover:text-brass"
            >
              {c.returnTransfer.link.label}
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
          <div>
            <SectionHeading title={c.pilgrims.heading} intro={c.pilgrims.intro} />
            <ul className="mt-6 space-y-3">
              {c.pilgrims.items.map((p) => (
                <li key={p.title} className="rounded-2xl border border-hairline p-5">
                  <h3 className="font-semibold text-ink">{p.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                    <RichText text={p.text} />
                  </p>
                  <Link href={p.link.href} className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-midnight hover:text-brass">
                    {p.link.label}
                    <ArrowRight className="size-3.5" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 10 — Related Madinah transfers (focused, not the full route grid) */}
      <section className="bg-sand/40 py-14 sm:py-20">
        <div className={container}>
          <SectionHeading title={c.destinations.heading} intro={c.destinations.intro} />
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {c.destinations.links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="flex h-full items-center justify-between gap-3 rounded-2xl border border-hairline bg-white p-4 transition-colors hover:border-brass/60"
                >
                  <span>
                    <span className="block font-semibold text-ink">{l.label}</span>
                    <span className="mt-0.5 block text-xs text-ink-muted">{l.text}</span>
                  </span>
                  <ArrowRight className="size-4 shrink-0 text-brass" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 11 — FAQs (also emitted as FAQPage JSON-LD by the page) */}
      <FAQSection faqs={MADINAH_HUB_FAQS} heading="Madinah Airport Transfer Questions" background="white" />

      {/* 12 — Curated guides */}
      {guides.length > 0 && (
        <section className="bg-sand/40 py-14 sm:py-20">
          <div className={container}>
            <SectionHeading title={c.guides.heading} />
            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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

      {/* 13 — Final CTA */}
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
            <WhatsAppButton message={c.hero.whatsappMessage} label={c.finalCta.whatsapp} onDark />
          </div>
        </div>
      </section>
    </>
  );
}
