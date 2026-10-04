import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  Clock,
  MapPin,
  CircleCheck,
  Plane,
  Building2,
  Repeat,
  UserCheck,
  RadioTower,
  Timer,
  Headphones,
} from "lucide-react";
import { PageHeader } from "@/components/sections/PageHeader";
import { VehicleOptions } from "@/components/sections/VehicleOptions";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { LatestGuides } from "@/components/sections/LatestGuides";
import { RouteGrid } from "@/components/sections/RouteGrid";
import { HotelTransferGrid } from "@/components/sections/HotelTransferGrid";
import { QuoteForm } from "@/components/QuoteForm";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { routes } from "@/data/routes";
import { cityHero } from "@/lib/hero";
import { buildMetadata } from "@/lib/seo";
import { getArPathForEnPath } from "@/data/translations/ar";
import {
  breadcrumbSchema,
  serviceSchema,
  faqSchema,
} from "@/lib/schema";
import {
  getHotelTransfer,
  transfersForCity,
  transferIntro,
  transferAbout,
  routeFaqs,
  hotelTransfersLastUpdated,
} from "@/lib/hotel-transfers";
import { pointTransfers, getPointTransfer } from "@/lib/point-transfers";
import { pointTransfersV2, getPointTransferV2 } from "@/lib/point-transfers-v2";
import { getCity } from "@/data/cities";
import { PointTransferView } from "@/components/templates/PointTransferView";
import { PointTransferV2View } from "@/components/point-transfer-v2/PointTransferV2View";
import type { Hotel } from "@/data/hotels";

type Params = { city: string; route: string };

// dynamicParams intentionally left at its default (true) — see the matching
// comment in cities/[city]/page.tsx. This was the only other route on the
// site with it set to false, and this page's 61 point-transfer paths showed
// the same intermittent production 404/503 pattern as that one. Hotel-
// transfer paths don't need this flag as a safety net: proxy.ts's matcher
// covers this route and 301-redirects all 174 of them to /cities/{city}#hotels
// before Next's router ever resolves params here, independent of this flag.
export function generateStaticParams() {
  // Hotel-transfer pages (t.citySlug/t.slug) are no longer prerendered here —
  // proxy.ts 301-redirects all 174 of them to /cities/{city}#hotels, built
  // from the exact same hotelTransfers array, so every one of these paths is
  // caught before Next's router ever resolves params for this page. The
  // getHotelTransfer() branch in the component below is consequently
  // unreachable for real traffic; left in place rather than removed since
  // data/hotels.ts and lib/hotel-transfers.ts stay live for the city-hub
  // hotel table. Point transfers are unaffected.
  //
  // Point transfers are being migrated one city at a time to pointTransfersV2
  // (new design, see PointTransferV2View) — a slug appears in exactly one of
  // pointTransfersV2 / pointTransfers at a time, so the v2Keys filter below
  // prevents ever emitting the same {city, route} pair twice mid-migration.
  const v2Keys = new Set(pointTransfersV2.map((t) => `${t.citySlug}/${t.slug}`));
  return [
    ...pointTransfersV2.map((t) => ({ city: t.citySlug, route: t.slug })),
    ...pointTransfers
      .filter((t) => !v2Keys.has(`${t.citySlug}/${t.slug}`))
      .map((t) => ({ city: t.citySlug, route: t.slug })),
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { city, route } = await params;

  const v2 = getPointTransferV2(city, route);
  if (v2) {
    const v2Path = `/${v2.citySlug}/${v2.slug}`;
    const v2ArPath = getArPathForEnPath(v2Path);
    return buildMetadata({
      title: v2.metaTitle,
      description: v2.metaDescription,
      path: v2Path,
      ...(v2ArPath ? { alternateLanguages: { en: v2Path, ar: v2ArPath } } : {}),
    });
  }

  const t = getHotelTransfer(city, route);
  if (!t) {
    const pt = getPointTransfer(city, route);
    if (pt) {
      const ptPath = `/${pt.citySlug}/${pt.slug}`;
      const ptArPath = getArPathForEnPath(ptPath);
      return buildMetadata({
        title: pt.metaTitle,
        description: pt.metaDescription,
        path: ptPath,
        ...(ptArPath ? { alternateLanguages: { en: ptPath, ar: ptArPath } } : {}),
      });
    }
    return {};
  }
  const arPath = getArPathForEnPath(t.path);
  return buildMetadata({
    title: `${t.from} to ${t.to} Taxi | Private Transfer`,
    description: `Book a private ${t.from} to ${t.to} taxi (${t.distance}, approx. ${t.duration}). Fixed price, meet & greet, flight tracking, and 24/7 booking.`,
    path: t.path,
    ...(arPath ? { alternateLanguages: { en: t.path, ar: arPath } } : {}),
  });
}

const features = [
  {
    icon: UserCheck,
    title: "Meet & Greet",
    text: "Your driver waits in the arrivals hall with a name board and helps with luggage.",
  },
  {
    icon: RadioTower,
    title: "Flight Monitoring",
    text: "We track your flight number in real time and adjust pickup to your actual landing.",
  },
  {
    icon: Timer,
    title: "Free Waiting Time",
    text: "Generous complimentary wait time is included, so delays never cost you the ride.",
  },
  {
    icon: UserCheck,
    title: "Professional Chauffeur",
    text: "Licensed, English-speaking drivers who know the city and every hotel entrance.",
  },
  {
    icon: Headphones,
    title: "24/7 Service",
    text: "Book any time of day or night — we operate around the clock, all year.",
  },
];

// Hand-written per-hotel fields (see data/hotels.ts). Once 4 or more of these
// are populated for a hotel, the templated hotelVariation() angle paragraph
// is suppressed in favor of the real content — see richHotelContentCount()
// call sites below.
function richHotelContentCount(hotel: Hotel): number {
  return [
    hotel.terminalPickup,
    hotel.dropoffDetail,
    hotel.priceFrom,
    hotel.priceNotes,
    hotel.realDistanceKm,
    hotel.realDurationMin,
    hotel.peakDurationMin,
    hotel.hotelArrangements,
    hotel.operatorNotes && hotel.operatorNotes.length > 0 ? hotel.operatorNotes : undefined,
    hotel.customFaqs && hotel.customFaqs.length > 0 ? hotel.customFaqs : undefined,
    hotel.photos && hotel.photos.length > 0 ? hotel.photos : undefined,
  ].filter((v) => v !== undefined && v !== null).length;
}

export default async function HotelTransferPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { city, route } = await params;

  const v2 = getPointTransferV2(city, route);
  if (v2) {
    const cityObj = getCity(v2.citySlug);
    const cityName = cityObj?.name ?? v2.citySlug;
    const cityPath = `/taxi-service/${v2.citySlug}`;
    const v2Path = `/${v2.citySlug}/${v2.slug}`;
    const label = v2.isPointToPoint === false ? v2.to : `${v2.from} → ${v2.to}`;
    const crumbs = [
      { name: "Home", path: "/" },
      { name: `${cityName} Taxi Service`, path: cityPath },
      { name: label, path: v2Path },
    ];
    const serviceTypeLabel =
      v2.content.category === "port"
        ? "Port Transfer"
        : v2.content.category === "railway"
          ? "Railway Station Transfer"
          : v2.content.category === "service"
            ? "Chauffeur Service"
            : "Private Transfer";
    return (
      <PointTransferV2View
        h1={v2.h1}
        from={v2.from}
        to={v2.to}
        isPointToPoint={v2.isPointToPoint}
        crumbs={crumbs}
        cityName={cityName}
        serviceType={serviceTypeLabel}
        areaServed={`${cityName}, Saudi Arabia`}
        quoteServiceType={`${cityName} ${serviceTypeLabel.toLowerCase()}`}
        whatsappMessage={
          v2.isPointToPoint === false
            ? `Hello! I'd like a quote for ${v2.to} in ${cityName}.`
            : `Hello! I'd like a quote for a ${v2.from} to ${v2.to} transfer.`
        }
        latestGuidesKey={`${v2.citySlug}/${v2.slug}`}
        content={v2.content}
        labels={{
          faqHeading: "Frequently Asked Questions",
          quoteHeading: `${label} Quote`,
          quoteSubheading: "Fixed price for your private transfer on WhatsApp.",
        }}
      />
    );
  }

  const t = getHotelTransfer(city, route);
  if (!t) {
    const pt = getPointTransfer(city, route);
    if (pt) return <PointTransferView transfer={pt} />;
    notFound();
  }

  const reverse = getHotelTransfer(t.citySlug, t.reverseSlug);
  const hubPath = `/cities/${t.citySlug}`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: `${t.cityName} Airport Transfers`, path: hubPath },
    { name: `${t.from} → ${t.to}`, path: t.path },
  ];

  // 4+ hand-written fields on this hotel (data/hotels.ts) suppresses the
  // templated hotelVariation() angle paragraph in favor of the real content.
  const suppressAngle = richHotelContentCount(t.hotel) >= 4;
  const hasCustomFaqs = !!t.hotel.customFaqs && t.hotel.customFaqs.length > 0;
  const faqs = hasCustomFaqs ? t.hotel.customFaqs! : routeFaqs(t);

  const pickup =
    t.fromType === "airport"
      ? {
          label: `${t.airport.name} (${t.airport.code})`,
          detail: "Arrivals hall — meet & greet with a name board",
        }
      : {
          label: t.hotel.name,
          detail: `${t.hotel.area}, ${t.cityName} — lobby pickup`,
        };
  const dropoff =
    t.toType === "airport"
      ? {
          label: `${t.airport.name} (${t.airport.code})`,
          detail: "Departures — dropped at your terminal",
        }
      : {
          label: t.hotel.name,
          detail: `${t.hotel.area}, ${t.cityName} — door drop-off`,
        };

  // Same-direction transfers to other hotels, nearest / same-area first.
  const sameDir = transfersForCity(t.citySlug).filter(
    (x) => x.direction === t.direction && x.hotel.slug !== t.hotel.slug
  );
  const nearby = [...sameDir]
    .sort((a, b) => {
      const aSame = a.hotel.area === t.hotel.area ? 0 : 1;
      const bSame = b.hotel.area === t.hotel.area ? 0 : 1;
      if (aSame !== bSame) return aSame - bSame;
      return (
        Math.abs(a.hotel.distanceKm - t.hotel.distanceKm) -
        Math.abs(b.hotel.distanceKm - t.hotel.distanceKm)
      );
    })
    .slice(0, 6);
  const nearbySlugs = new Set(nearby.map((x) => x.slug));
  const related = sameDir.filter((x) => !nearbySlugs.has(x.slug)).slice(0, 6);

  // Intercity / tourist destinations touching this city.
  const cityRoutes = routes
    .filter((r) => r.relatedCitySlugs.includes(t.citySlug))
    .map((r) => r.slug);

  return (
    <>
      <SchemaScript
        schema={[
          breadcrumbSchema(crumbs),
          serviceSchema({
            name: `${t.from} to ${t.to} Taxi Transfer`,
            description: transferIntro(t),
            path: t.path,
            serviceType: "Airport Transfer",
            areaServed: `${t.cityName}, Saudi Arabia`,
            dateModified: hotelTransfersLastUpdated,
          }),
          faqSchema(faqs),
        ]}
      />

      <PageHeader
        title={`${t.from} to ${t.to} Taxi`}
        subtitle={suppressAngle ? undefined : transferIntro(t)}
        crumbs={crumbs}
        backgroundImage={cityHero(t.citySlug, t.cityName).src}
        backgroundAlt={`Private taxi transfer from ${t.from} to ${t.to} in ${t.cityName}, Saudi Arabia`}
        whatsappMessage={`Hello! I'd like a quote for a ${t.from} to ${t.to} taxi.`}
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
          <div className="lg:col-span-3">
            <div className="rounded-xl border border-gold/30 bg-gold/5 p-5">
              <h2 className="text-sm font-bold uppercase tracking-wide text-navy">
                Key takeaways
              </h2>
              <ul className="mt-3 space-y-1.5 text-sm text-navy">
                <li>
                  • {t.from} to {t.to}: {t.distance}, approximately {t.duration} by private transfer.
                </li>
                <li>• Fixed price agreed before you travel — no prepayment required, pay the driver on the day.</li>
                <li>• Meet & greet pickup with real-time flight tracking and free waiting time included.</li>
                <li>• Page reviewed {hotelTransfersLastUpdated}.</li>
              </ul>
            </div>

            {/* Hand-written per-hotel content (data/hotels.ts). Each field
                renders only when present — no fallback, no placeholder. */}
            {(t.hotel.terminalPickup || t.hotel.dropoffDetail) && (
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                {t.hotel.terminalPickup && (
                  <div className="rounded-xl border border-border bg-white p-5">
                    <h3 className="font-semibold text-navy">Exact pickup point</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{t.hotel.terminalPickup}</p>
                  </div>
                )}
                {t.hotel.dropoffDetail && (
                  <div className="rounded-xl border border-border bg-white p-5">
                    <h3 className="font-semibold text-navy">Exact drop-off point</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{t.hotel.dropoffDetail}</p>
                  </div>
                )}
              </div>
            )}

            {(t.hotel.priceFrom !== undefined || t.hotel.realDistanceKm !== undefined || t.hotel.realDurationMin !== undefined) && (
              <div className="mt-6 rounded-xl border border-border bg-muted/40 p-5">
                <h3 className="font-semibold text-navy">Real numbers for this hotel</h3>
                <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                  {t.hotel.priceFrom !== undefined && (
                    <li>
                      From SAR {t.hotel.priceFrom}
                      {t.hotel.priceNotes ? ` — ${t.hotel.priceNotes}` : ""}
                    </li>
                  )}
                  {t.hotel.realDistanceKm !== undefined && <li>Measured distance: {t.hotel.realDistanceKm} km</li>}
                  {t.hotel.realDurationMin !== undefined && <li>Typical drive time: {t.hotel.realDurationMin} min</li>}
                  {t.hotel.peakDurationMin !== undefined && (
                    <li>During prayer times / Ramadan / Hajj: {t.hotel.peakDurationMin} min</li>
                  )}
                </ul>
              </div>
            )}

            {t.hotel.hotelArrangements && (
              <div className="mt-6">
                <h3 className="font-semibold text-navy">At the hotel</h3>
                <p className="mt-2 text-sm text-muted-foreground">{t.hotel.hotelArrangements}</p>
              </div>
            )}

            {t.hotel.operatorNotes && t.hotel.operatorNotes.length > 0 && (
              <div className="mt-6">
                <h3 className="font-semibold text-navy">Notes from drivers who've made this run</h3>
                <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                  {t.hotel.operatorNotes.map((n) => (
                    <li key={n} className="flex items-start gap-2">
                      <CircleCheck className="mt-0.5 size-4 shrink-0 text-gold" />
                      {n}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {t.hotel.photos && t.hotel.photos.length > 0 && (
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {t.hotel.photos.map((p) => (
                  <div key={p.src} className="relative aspect-[4/3] overflow-hidden rounded-xl bg-muted">
                    <Image src={p.src} alt={p.alt} fill className="object-cover" />
                  </div>
                ))}
              </div>
            )}

            {/* Route overview */}
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-lg bg-muted px-4 py-2 text-sm font-medium text-navy">
                <Clock className="size-4 text-gold" /> Approx. {t.duration}
              </span>
              <span className="inline-flex items-center gap-2 rounded-lg bg-muted px-4 py-2 text-sm font-medium text-navy">
                <MapPin className="size-4 text-gold" /> {t.distance}
              </span>
              <span className="inline-flex items-center gap-2 rounded-lg bg-muted px-4 py-2 text-sm font-medium text-navy">
                {t.hotel.stars}★ {t.hotel.name}
              </span>
            </div>

            {!suppressAngle && (
              <>
                <h2 className="mt-8 text-2xl font-bold text-navy">
                  Private transfer from {t.from} to {t.to}
                </h2>
                <p className="mt-3 text-muted-foreground">{transferAbout(t)}</p>
              </>
            )}

            {/* Pickup & drop-off */}
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-muted/40 p-5">
                <h3 className="flex items-center gap-2 font-semibold text-navy">
                  {t.fromType === "airport" ? (
                    <Plane className="size-4 text-gold" />
                  ) : (
                    <Building2 className="size-4 text-gold" />
                  )}
                  Pickup location
                </h3>
                {t.fromType === "airport" ? (
                  <Link
                    href={`/airport-transfer/${t.airport.slug}`}
                    className="mt-2 inline-block text-sm font-medium text-navy underline decoration-dotted hover:text-gold"
                  >
                    {pickup.label}
                  </Link>
                ) : (
                  <p className="mt-2 text-sm font-medium text-navy">{pickup.label}</p>
                )}
                <p className="mt-1 text-sm text-muted-foreground">{pickup.detail}</p>
              </div>
              <div className="rounded-xl border border-border bg-muted/40 p-5">
                <h3 className="flex items-center gap-2 font-semibold text-navy">
                  {t.toType === "airport" ? (
                    <Plane className="size-4 text-gold" />
                  ) : (
                    <Building2 className="size-4 text-gold" />
                  )}
                  Drop-off location
                </h3>
                {t.toType === "airport" ? (
                  <Link
                    href={`/airport-transfer/${t.airport.slug}`}
                    className="mt-2 inline-block text-sm font-medium text-navy underline decoration-dotted hover:text-gold"
                  >
                    {dropoff.label}
                  </Link>
                ) : (
                  <p className="mt-2 text-sm font-medium text-navy">{dropoff.label}</p>
                )}
                <p className="mt-1 text-sm text-muted-foreground">{dropoff.detail}</p>
              </div>
            </div>

            {/* Features */}
            <h2 className="mt-10 text-xl font-bold text-navy">
              What&apos;s included
            </h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {features.map((f) => {
                const Icon = f.icon;
                return (
                  <div
                    key={f.title}
                    className="flex items-start gap-3 rounded-xl border border-border bg-white p-4"
                  >
                    <Icon className="mt-0.5 size-5 shrink-0 text-gold" />
                    <div>
                      <p className="text-sm font-semibold text-navy">{f.title}</p>
                      <p className="mt-0.5 text-xs text-muted-foreground">{f.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Nearby attractions */}
            {t.hotel.nearby.length > 0 && (
              <>
                <h2 className="mt-10 text-xl font-bold text-navy">
                  Nearby attractions
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  {t.hotel.name} sits close to some of {t.cityName}&apos;s
                  best-known landmarks:
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {t.hotel.nearby.map((a) => (
                    <span
                      key={a}
                      className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1.5 text-sm text-navy"
                    >
                      <MapPin className="size-3.5 text-gold" />
                      {a}
                    </span>
                  ))}
                </div>
              </>
            )}

            {/* Reverse route */}
            {reverse && (
              <div className="mt-10 rounded-xl border border-border bg-muted/40 p-5">
                <h2 className="flex items-center gap-2 text-lg font-bold text-navy">
                  <Repeat className="size-5 text-gold" />
                  Need the return trip?
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  We also run the reverse {reverse.from} to {reverse.to} transfer —
                  book both directions together for a smooth round trip.
                </p>
                <Link
                  href={reverse.path}
                  className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-navy hover:text-gold"
                >
                  View {reverse.from} → {reverse.to}
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            )}
          </div>

          {/* Booking form */}
          <div className="lg:col-span-2">
            <div className="sticky top-20 rounded-2xl border border-border bg-muted/40 p-6 shadow-sm">
              <h2 className="text-lg font-bold text-navy">
                {t.from} → {t.to} Quote
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Fixed price for your private transfer on WhatsApp.
              </p>
              <div className="mt-4">
                <QuoteForm
                  serviceType={`${t.cityName} airport hotel transfer`}
                  city={t.cityName}
                  route={`${t.from} to ${t.to}`}
                  defaultPickup={pickup.label}
                  defaultDropoff={dropoff.label}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <details className="border-t border-border">
        <summary className="mx-auto max-w-7xl cursor-pointer px-4 py-4 text-sm font-semibold text-navy sm:px-6 lg:px-8">
          Choose your vehicle
        </summary>
        <VehicleOptions background="muted" />
      </details>
      <details className="border-t border-border">
        <summary className="mx-auto max-w-7xl cursor-pointer px-4 py-4 text-sm font-semibold text-navy sm:px-6 lg:px-8">
          How booking works
        </summary>
        <HowItWorks background="white" />
      </details>

      {nearby.length > 0 && (
        <HotelTransferGrid
          background="muted"
          heading="Nearby Hotel Transfers"
          subheading={`Other ${t.cityName} hotels close to ${t.hotel.area}.`}
          transfers={nearby}
        />
      )}

      {related.length > 0 && (
        <HotelTransferGrid
          background="white"
          heading="Related Transfer Routes"
          subheading={`More ${
            t.direction === "airport-to-hotel"
              ? "airport-to-hotel"
              : "hotel-to-airport"
          } transfers in ${t.cityName}.`}
          transfers={related}
        />
      )}

      {/* Link back to the city hub, city taxi service, airport page, and — for
          the two pilgrim cities — the Umrah/Ziyarat hubs. */}
      <section className="bg-muted py-10">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-3 px-4 sm:px-6 lg:px-8">
          <Link
            href={hubPath}
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-white px-5 py-3 text-sm font-semibold text-navy transition-colors hover:border-gold"
          >
            See all {t.cityName} airport transfers
            <ArrowRight className="size-4 text-gold" />
          </Link>
          <Link
            href={`/taxi-service/${t.citySlug}`}
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-white px-5 py-3 text-sm font-semibold text-navy transition-colors hover:border-gold"
          >
            {t.cityName} taxi service
            <ArrowRight className="size-4 text-gold" />
          </Link>
          <Link
            href={`/airport-transfer/${t.airport.slug}`}
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-white px-5 py-3 text-sm font-semibold text-navy transition-colors hover:border-gold"
          >
            {t.airport.name} overview
            <ArrowRight className="size-4 text-gold" />
          </Link>
          {(t.citySlug === "makkah" || t.citySlug === "madinah") && (
            <>
              <Link
                href="/umrah-taxi-service"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-white px-5 py-3 text-sm font-semibold text-navy transition-colors hover:border-gold"
              >
                Umrah taxi service
                <ArrowRight className="size-4 text-gold" />
              </Link>
              <Link
                href="/ziyarat-taxi-service"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-white px-5 py-3 text-sm font-semibold text-navy transition-colors hover:border-gold"
              >
                Ziyarat taxi service
                <ArrowRight className="size-4 text-gold" />
              </Link>
            </>
          )}
        </div>
      </section>

      {cityRoutes.length > 0 && (
        <RouteGrid
          background="white"
          heading={`Popular Destinations from ${t.cityName}`}
          subheading="Private intercity and tourist transfers beyond the airport run."
          only={cityRoutes}
        />
      )}

      <FAQSection faqs={faqs} background="muted" />
      <LatestGuides background="white" pageKey={`${t.citySlug}/${t.slug}`} />
      <CTASection
        title={`Book Your ${t.from} to ${t.to} Taxi`}
        whatsappMessage={`Hello! I'd like to book a ${t.from} to ${t.to} taxi.`}
      />
    </>
  );
}
