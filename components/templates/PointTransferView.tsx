import Link from "next/link";
import { Clock, MapPin, CircleCheck, ArrowRight, Route as RouteIcon } from "lucide-react";
import { PageHeader } from "@/components/sections/PageHeader";
import { VehicleOptions } from "@/components/sections/VehicleOptions";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { LatestGuides } from "@/components/sections/LatestGuides";
import { QuoteForm } from "@/components/QuoteForm";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { cityHero } from "@/lib/hero";
import { breadcrumbSchema, serviceSchema, faqSchema } from "@/lib/schema";
import { getRoute } from "@/data/routes";
import { getCity } from "@/data/cities";
import { pointTransfers, type PointTransfer } from "@/lib/point-transfers";
import { hotelsForCity } from "@/lib/hotel-transfers";

const transferBySlug = new Map(pointTransfers.map((t) => [`${t.citySlug}/${t.slug}`, t]));

/**
 * Content-rich landing page for a point transfer (attraction / port / railway)
 * or a Jeddah service/tour page. Emits Breadcrumb + Service + FAQ schema only —
 * the site-wide LocalBusiness (with its single aggregateRating) comes from the
 * root layout, so we never add a second aggregate rating here.
 */
export function PointTransferView({ transfer: t }: { transfer: PointTransfer }) {
  const city = getCity(t.citySlug);
  const cityName = city?.name ?? "Jeddah";
  const cityPath = `/taxi-service/${t.citySlug}`;
  // Service/tour pages read as a named offering ("Executive Car Service"),
  // whereas transfers read as an A → B route.
  // /cities/{slug} only exists for cities with hotel data (it's the
  // airport-to-hotel transfer hub) — linking to it for a city with none
  // (e.g. AlUla, which has point transfers but no hotels) 404s.
  const hasHotelHub = hotelsForCity(t.citySlug).length > 0;
  const isService = t.category === "service";
  const label = isService ? t.to : `${t.from} → ${t.to}`;
  const labelFor = (x: PointTransfer) =>
    x.category === "service" ? x.to : `${x.from} → ${x.to}`;

  const crumbs = [
    { name: "Home", path: "/" },
    { name: `${cityName} Taxi Service`, path: cityPath },
    { name: label, path: `/${t.citySlug}/${t.slug}` },
  ];

  const faqs = t.faqs.slice(0, 20);

  // Build cross-links: sibling transfers + related routes.
  const relatedTransfers = (t.relatedTransferSlugs ?? [])
    .map((slug) => transferBySlug.get(`${t.citySlug}/${slug}`))
    .filter((x): x is PointTransfer => Boolean(x) && x!.slug !== t.slug);
  const relatedRoutes = (t.relatedRouteSlugs ?? [])
    .map((slug) => getRoute(slug))
    .filter((r): r is NonNullable<ReturnType<typeof getRoute>> => Boolean(r));

  return (
    <>
      <SchemaScript
        schema={[
          breadcrumbSchema(crumbs),
          serviceSchema({
            name: isService ? t.h1 : `${t.from} to ${t.to} Transfer`,
            description: t.intro,
            path: `/${t.citySlug}/${t.slug}`,
            serviceType: t.category === "service" ? "Chauffeur Service" : "Private Transfer",
            areaServed: `${cityName}, Saudi Arabia`,
          }),
          faqSchema(faqs),
        ]}
      />

      <PageHeader
        title={t.h1}
        subtitle={t.intro}
        crumbs={crumbs}
        backgroundImage={t.heroImage ?? cityHero(t.citySlug, cityName).src}
        backgroundAlt={t.heroAlt ?? (isService ? `${t.to} in ${cityName}, Saudi Arabia` : `Private transfer from ${t.from} to ${t.to} in ${cityName}, Saudi Arabia`)}
        whatsappMessage={isService ? `Hello! I'd like a quote for ${t.to} in ${cityName}.` : `Hello! I'd like a quote for a ${t.from} to ${t.to} transfer.`}
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
          <div className="lg:col-span-3">
            {/* Journey facts */}
            {(t.distance || t.duration) && (
              <div className="flex flex-wrap gap-3">
                {t.duration && (
                  <span className="inline-flex items-center gap-2 rounded-lg bg-muted px-4 py-2 text-sm font-medium text-navy">
                    <Clock className="size-4 text-gold" /> Approx. {t.duration}
                  </span>
                )}
                {t.distance && (
                  <span className="inline-flex items-center gap-2 rounded-lg bg-muted px-4 py-2 text-sm font-medium text-navy">
                    <MapPin className="size-4 text-gold" /> {t.distance}
                  </span>
                )}
              </div>
            )}

            {/* Highlights */}
            {t.highlights && t.highlights.length > 0 && (
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {t.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-sm text-navy">
                    <CircleCheck className="mt-0.5 size-4 shrink-0 text-gold" />
                    {h}
                  </li>
                ))}
              </ul>
            )}

            {/* Body sections */}
            <div className="mt-8 space-y-8 [&_a]:font-medium [&_a]:text-gold [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-navy">
              {t.sections.map((s) => (
                <div key={s.heading}>
                  <h2 className="text-xl font-bold text-navy sm:text-2xl">{s.heading}</h2>
                  <div className="mt-3 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
                    {s.paragraphs.map((p, i) => (
                      <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Booking form */}
          <div className="lg:col-span-2">
            <div className="sticky top-20 rounded-2xl border border-border bg-muted/40 p-6 shadow-sm">
              <h2 className="text-lg font-bold text-navy">
                {label} Quote
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Request a quotation for your private transfer, here or on WhatsApp.
              </p>
              <div className="mt-4">
                <QuoteForm
                  serviceType={`${cityName} ${t.category === "service" ? "chauffeur service" : "private transfer"}`}
                  city={cityName}
                  route={isService ? t.to : `${t.from} to ${t.to}`}
                  defaultPickup={t.from}
                  defaultDropoff={t.to}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-links */}
      {(relatedTransfers.length > 0 || relatedRoutes.length > 0) && (
        <section className="bg-muted py-14 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-navy sm:text-2xl">
              Related {cityName} transfers & routes
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {relatedTransfers.map((r) => (
                <Link
                  key={r.slug}
                  href={`/${r.citySlug}/${r.slug}`}
                  className="group flex items-center justify-between gap-2 rounded-xl border border-border bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-gold hover:shadow-md"
                >
                  <span className="text-sm font-semibold text-navy">
                    {labelFor(r)}
                  </span>
                  <ArrowRight className="size-4 shrink-0 text-gold" />
                </Link>
              ))}
              {relatedRoutes.map((r) => (
                <Link
                  key={r.slug}
                  href={`/routes/${r.slug}`}
                  className="group flex items-center justify-between gap-2 rounded-xl border border-border bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-gold hover:shadow-md"
                >
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-navy">
                    <RouteIcon className="size-4 shrink-0 text-gold" />
                    {r.from} → {r.to}
                  </span>
                  <ArrowRight className="size-4 shrink-0 text-gold" />
                </Link>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href={cityPath}
                className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-white px-4 py-2.5 text-sm font-semibold text-navy transition-colors hover:border-gold"
              >
                {cityName} taxi service <ArrowRight className="size-4 text-gold" />
              </Link>
              {hasHotelHub && (
                <Link
                  href={`/cities/${t.citySlug}`}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-white px-4 py-2.5 text-sm font-semibold text-navy transition-colors hover:border-gold"
                >
                  {cityName} airport transfers <ArrowRight className="size-4 text-gold" />
                </Link>
              )}
              {(t.citySlug === "makkah" || t.citySlug === "madinah") && (
                <>
                  <Link
                    href="/umrah-taxi-service"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-white px-4 py-2.5 text-sm font-semibold text-navy transition-colors hover:border-gold"
                  >
                    Umrah taxi service <ArrowRight className="size-4 text-gold" />
                  </Link>
                  <Link
                    href="/ziyarat-taxi-service"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-white px-4 py-2.5 text-sm font-semibold text-navy transition-colors hover:border-gold"
                  >
                    Ziyarat taxi service <ArrowRight className="size-4 text-gold" />
                  </Link>
                  <Link
                    href="/hajj-transport-service"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-white px-4 py-2.5 text-sm font-semibold text-navy transition-colors hover:border-gold"
                  >
                    Hajj transport service <ArrowRight className="size-4 text-gold" />
                  </Link>
                </>
              )}
            </div>
          </div>
        </section>
      )}

      <VehicleOptions background="white" />
      <HowItWorks background="muted" />
      <FAQSection faqs={faqs} background="white" />
      <LatestGuides background="muted" pageKey={`${t.citySlug}/${t.slug}`} />
      <CTASection
        title={isService ? `Book Your ${t.to} in ${cityName}` : `Book Your ${t.from} to ${t.to} Transfer`}
        whatsappMessage={isService ? `Hello! I'd like to book ${t.to} in ${cityName}.` : `Hello! I'd like to book a ${t.from} to ${t.to} transfer.`}
      />
    </>
  );
}
