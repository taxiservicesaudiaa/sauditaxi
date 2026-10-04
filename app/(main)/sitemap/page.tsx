import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SitemapSearch } from "@/components/sections/SitemapSearch";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { cities } from "@/data/cities";
import { airports } from "@/data/airports";
import { routes, type RouteCategory } from "@/data/routes";
import { borders } from "@/data/borders";
import { services } from "@/data/services";
import { hotelCities } from "@/lib/hotel-transfers";
import { pointTransfers } from "@/lib/point-transfers";
import { pointTransfersV2 } from "@/lib/point-transfers-v2";
import { distancePages } from "@/data/distance-pages";
import { journeyPages } from "@/data/journey-pages";
import { distanceGuideV2Pages } from "@/data/distance-guide-v2";
import { journeyGuideV2Pages } from "@/data/journey-guide-v2";
import { listPublishedBlogs } from "@/lib/blogs";
// Lightweight index (slug/enPath/type/h1), not ar.ts's full ~26,700-line
// content dataset — this view only ever needed labels and paths.
import { arPageIndex, arIndexPath } from "@/data/translations/ar-index";

/**
 * Visual, user-facing HTML sitemap at /sitemap — entirely separate from the
 * machine-readable /sitemap.xml (app/sitemap.ts, untouched by this page).
 * Every link here is a plain server-rendered <a> (via next/link, which SSRs
 * to a real anchor), reusing the exact same data sources /sitemap.xml reads
 * from so the two never drift apart. Revalidates hourly so newly published
 * blog posts appear without a full redeploy, matching sitemap.ts's own cadence.
 */
export const revalidate = 3600;

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Sitemap", path: "/sitemap" },
];

export const metadata: Metadata = buildMetadata({
  title: "Saudi Arabia Transfer Sitemap | Saudi Private Transfers",
  description:
    "Explore the Saudi Private Transfers sitemap, including airport transfers, city transfers, private routes, pilgrimage services, destinations and travel guides across Saudi Arabia.",
  path: "/sitemap",
});

interface Item {
  label: string;
  href: string;
  sub?: string;
}

function searchKey(item: Item) {
  return `${item.label} ${item.sub ?? ""} ${item.href}`.toLowerCase();
}

/** Small always-visible card grid — used for the shorter, high-priority sections. */
function LinkGrid({ items }: { items: Item[] }) {
  return (
    <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-4">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          data-sitemap-item={searchKey(item)}
          className="group flex items-center justify-between gap-2 rounded-lg border border-hairline bg-white px-3.5 py-2.5 text-sm text-ink transition-colors hover:border-brass hover:bg-brass/5"
        >
          <span className="truncate">{item.label}</span>
          <ArrowRight className="size-3.5 shrink-0 text-brass opacity-0 transition-opacity rtl:rotate-180 group-hover:opacity-100" />
        </Link>
      ))}
    </div>
  );
}

/** Larger sets render inside a native <details> — collapsed by default for
 * scannability, but the content (and every link) is always present in the
 * DOM and crawlable regardless of open/closed state; no JS required. */
function LinkGroup({
  heading,
  count,
  items,
  defaultOpen = false,
  rtl = false,
}: {
  heading: string;
  count: number;
  items: Item[];
  defaultOpen?: boolean;
  rtl?: boolean;
}) {
  return (
    <details className="group/details rounded-xl border border-hairline bg-white" data-sitemap-group open={defaultOpen}>
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3.5 font-semibold text-ink [&::-webkit-details-marker]:hidden">
        <span>{heading}</span>
        <span className="flex items-center gap-2">
          <span className="rounded-full bg-sand/50 px-2.5 py-0.5 text-xs font-medium text-ink-muted">
            {count}
          </span>
          <ArrowRight className="size-4 text-brass transition-transform group-open/details:rotate-90 rtl:rotate-180 rtl:group-open/details:-rotate-90" />
        </span>
      </summary>
      <ul
        dir={rtl ? "rtl" : undefined}
        className="grid grid-cols-1 gap-1 border-t border-hairline p-3 sm:grid-cols-2 lg:grid-cols-3"
      >
        {items.map((item) => (
          <li key={item.href} data-sitemap-item={searchKey(item)}>
            <Link
              href={item.href}
              className="block truncate rounded-md px-2.5 py-1.5 text-sm text-ink/90 hover:bg-brass/10 hover:text-ink"
              title={item.label}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </details>
  );
}

function Section({
  id,
  title,
  subtitle,
  children,
}: {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-hairline py-10 first:border-t-0 first:pt-0">
      <h2 className="text-xl font-bold text-ink sm:text-2xl">{title}</h2>
      {subtitle && <p className="mt-1.5 max-w-2xl text-sm text-ink-soft">{subtitle}</p>}
      <div className="mt-5 space-y-3">{children}</div>
    </section>
  );
}

const ROUTE_CATEGORY_LABEL: Record<RouteCategory, string> = {
  religious: "Pilgrimage Routes (Makkah / Madinah / Jeddah)",
  intercity: "Intercity Routes",
  airport: "Airport Routes",
  border: "Cross-Border Routes",
};

const AR_TYPE_LABEL: Record<string, string> = {
  about: "من نحن",
  contact: "اتصل بنا",
  service: "الخدمات",
  city: "المدن",
  "city-hub": "نقل الفنادق من المطار",
  airport: "المطارات",
  route: "المسارات بين المدن",
  distance: "أدلة المسافة",
  journey: "أدلة الرحلة",
  attraction: "الزيارات والمواقع التاريخية",
  blog: "المدونة",
};

export default async function SitemapPage() {
  const blogs = await listPublishedBlogs().catch(() => []);

  // ── Main pages ───────────────────────────────────────────────────────
  const mainPages: Item[] = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "All Services", href: "/services" },
    { label: "Contact", href: "/contact" },
    { label: "Get a Quote", href: "/get-quote" },
    { label: "Blog", href: "/blog" },
    { label: "Terms & Conditions", href: "/terms-and-conditions" },
    { label: "Privacy Policy", href: "/privacy-policy" },
  ];

  // ── Service pillars ──────────────────────────────────────────────────
  const pilgrimageServiceSlugs = new Set(["umrah-taxi-service", "hajj-transport-service", "ziyarat-taxi-service"]);
  const servicePages: Item[] = services
    .filter((s) => !pilgrimageServiceSlugs.has(s.slug))
    .map((s) => ({ label: s.name, href: s.href }));
  const pilgrimageServicePages: Item[] = services
    .filter((s) => pilgrimageServiceSlugs.has(s.slug))
    .map((s) => ({ label: s.name, href: s.href }));

  // ── Airports ─────────────────────────────────────────────────────────
  const airportPages: Item[] = airports.map((a) => ({
    label: `${a.city} Airport (${a.code})`,
    href: `/airport-transfer/${a.slug}`,
  }));

  // ── Cities ───────────────────────────────────────────────────────────
  const cityPages: Item[] = cities.map((c) => ({
    label: `${c.name} Taxi Service`,
    href: `/taxi-service/${c.slug}`,
  }));
  const hotelHubPages: Item[] = hotelCities().map((c) => ({
    label: `${c.name} Hotel Transfers`,
    href: `/cities/${c.slug}`,
  }));

  // ── Routes, grouped by category ─────────────────────────────────────
  const routesByCategory = new Map<RouteCategory, Item[]>();
  for (const r of routes) {
    const item: Item = { label: `${r.from} to ${r.to}`, href: `/routes/${r.slug}` };
    const list = routesByCategory.get(r.category) ?? [];
    list.push(item);
    routesByCategory.set(r.category, list);
  }

  // ── Borders ──────────────────────────────────────────────────────────
  const borderPages: Item[] = borders.map((b) => ({ label: b.name, href: `/border-transfers/${b.slug}` }));

  // ── Point transfers (attraction/port/railway/service) ───────────────
  // Migrating one city at a time to pointTransfersV2 (see PointTransferV2View)
  // — a slug lives in exactly one of the two arrays, so v2Keys prevents a
  // duplicate row mid-migration.
  const v2Keys = new Set(pointTransfersV2.map((t) => `${t.citySlug}/${t.slug}`));
  const allPointTransfers: { citySlug: string; slug: string; h1: string; category: string }[] = [
    ...pointTransfersV2.map((t) => ({
      citySlug: t.citySlug,
      slug: t.slug,
      h1: t.h1,
      category: t.content.category,
    })),
    ...pointTransfers
      .filter((t) => !v2Keys.has(`${t.citySlug}/${t.slug}`))
      .map((t) => ({ citySlug: t.citySlug, slug: t.slug, h1: t.h1, category: t.category })),
  ];

  // ── Ziyarat / historic-site attraction pages ───────────────────────
  const ziyaratPages: Item[] = allPointTransfers
    .filter((t) => t.category === "attraction")
    .map((t) => ({ label: t.h1, href: `/${t.citySlug}/${t.slug}` }));

  // ── Local / destination transfers (port, railway, service point-transfers) ─
  const localTransfersByCity = new Map<string, Item[]>();
  for (const t of allPointTransfers) {
    if (t.category === "attraction") continue;
    const item: Item = { label: t.h1, href: `/${t.citySlug}/${t.slug}` };
    const list = localTransfersByCity.get(t.citySlug) ?? [];
    list.push(item);
    localTransfersByCity.set(t.citySlug, list);
  }

  // ── Distance / travel-time guides ───────────────────────────────────
  const distanceGuidePages: Item[] = [
    ...distancePages.map((p) => ({ label: `${p.from} to ${p.to} Distance`, href: `/distance/${p.slug}` })),
    ...journeyPages.map((p) => ({ label: `${p.from} to ${p.to} Distance`, href: `/distance/${p.slug}` })),
    ...distanceGuideV2Pages.map((p) => ({ label: `${p.from} to ${p.to} Distance`, href: `/distance/${p.slug}` })),
    ...journeyGuideV2Pages.map((p) => ({ label: `${p.from} to ${p.to} Distance`, href: `/distance/${p.slug}` })),
  ];

  // ── Blog articles ────────────────────────────────────────────────────
  const blogPages: Item[] = blogs.map((b) => ({ label: b.title, href: `/blog/${b.slug}` }));

  // ── Arabic pages, grouped by type ───────────────────────────────────
  const arByType = new Map<string, Item[]>();
  for (const p of arPageIndex) {
    if (p.type === "hotel-transfer") continue; // 301-redirect stubs, never live pages
    const item: Item = { label: p.h1, href: arIndexPath(p) };
    const list = arByType.get(p.type) ?? [];
    list.push(item);
    arByType.set(p.type, list);
  }
  const arHomeItem: Item = { label: "الصفحة الرئيسية", href: "/ar" };
  const arTotal = arPageIndex.filter((p) => p.type !== "hotel-transfer").length + 1;

  const totalCount =
    mainPages.length +
    servicePages.length +
    pilgrimageServicePages.length +
    airportPages.length +
    cityPages.length +
    hotelHubPages.length +
    routes.length +
    borderPages.length +
    allPointTransfers.length +
    distanceGuidePages.length +
    blogPages.length +
    arTotal;

  return (
    <>
      <SchemaScript schema={breadcrumbSchema(crumbs)} />

      <section className="bg-midnight text-white">
        <div className="mx-auto max-w-5xl px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:px-8 lg:pt-36">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-white/60">
            {crumbs.map((c, i) => (
              <span key={c.path} className="flex items-center gap-2">
                {i > 0 && <span aria-hidden="true">/</span>}
                {i === crumbs.length - 1 ? (
                  <span className="text-white/85">{c.name}</span>
                ) : (
                  <Link href={c.path} className="hover:text-white">
                    {c.name}
                  </Link>
                )}
              </span>
            ))}
          </nav>
          <h1 className="mt-5 max-w-2xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            Saudi Arabia Transfer Sitemap
          </h1>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-white/75">
            Explore our airport transfers, city transfers, private routes, pilgrimage services and travel guides —
            every page on the site, in one place.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <SitemapSearch />

        <p className="mt-6 text-sm text-ink-soft">
          {totalCount}+ pages, organized below by category. Use the search box above to jump straight to a page.
        </p>

        <div className="mt-6">
          <Section id="main-pages" title="Main Pages">
            <LinkGrid items={mainPages} />
          </Section>

          <Section id="services" title="Our Services">
            <LinkGrid items={servicePages} />
          </Section>

          <Section id="airports" title="Airport Transfers" subtitle="Private meet-and-greet transfers from every airport we serve.">
            <LinkGrid items={airportPages} />
          </Section>

          <Section
            id="cities"
            title="City Transfers"
            subtitle="Private taxi and chauffeur service within each city, plus dedicated hotel-transfer hubs for our busiest destinations."
          >
            <LinkGrid items={cityPages} />
            {hotelHubPages.length > 0 && (
              <div className="pt-1">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-ink-muted">
                  Hotel Transfer Hubs
                </p>
                <LinkGrid items={hotelHubPages} />
              </div>
            )}
          </Section>

          <Section
            id="routes"
            title="Transfer Routes"
            subtitle="Fixed-price private transfers between specific cities, airports and borders — our most requested pages."
          >
            {(["religious", "intercity", "airport", "border"] as RouteCategory[]).map((cat) => {
              const items = routesByCategory.get(cat);
              if (!items || items.length === 0) return null;
              return (
                <LinkGroup
                  key={cat}
                  heading={ROUTE_CATEGORY_LABEL[cat]}
                  count={items.length}
                  items={items}
                  defaultOpen={cat === "religious"}
                />
              );
            })}
          </Section>

          <Section id="borders" title="Border Transfers" subtitle="Cross-border transfer information for each crossing we serve.">
            <LinkGrid items={borderPages} />
          </Section>

          <Section
            id="pilgrimage"
            title="Pilgrimage Transfers"
            subtitle="Umrah, Hajj and Ziyarat transportation, plus transfers to individual historic and religious sites."
          >
            <LinkGrid items={pilgrimageServicePages} />
            {ziyaratPages.length > 0 && (
              <LinkGroup heading="Ziyarat & Historic Sites" count={ziyaratPages.length} items={ziyaratPages} />
            )}
          </Section>

          <Section
            id="destinations"
            title="Destinations & Local Transfers"
            subtitle="Port, railway-station and local point-to-point transfers, grouped by city."
          >
            {[...localTransfersByCity.entries()].map(([citySlug, items]) => {
              const cityName = cities.find((c) => c.slug === citySlug)?.name ?? citySlug;
              return <LinkGroup key={citySlug} heading={cityName} count={items.length} items={items} />;
            })}
          </Section>

          <Section
            id="guides"
            title="Travel Guides"
            subtitle="Distance and travel-time guides, plus our latest articles on getting around Saudi Arabia."
          >
            {distanceGuidePages.length > 0 && (
              <LinkGroup heading="Distance & Travel-Time Guides" count={distanceGuidePages.length} items={distanceGuidePages} />
            )}
            {blogPages.length > 0 && (
              <LinkGroup heading="Blog Articles" count={blogPages.length} items={blogPages} defaultOpen />
            )}
          </Section>

          {arTotal > 1 && (
            <Section
              id="arabic"
              title="Arabic Pages (الصفحات العربية)"
              subtitle="The site's native Arabic pages, organized the same way as the English pages above."
            >
              <div dir="rtl" className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-4">
                <Link
                  href={arHomeItem.href}
                  data-sitemap-item={searchKey(arHomeItem)}
                  className="group flex items-center justify-between gap-2 rounded-lg border border-hairline bg-white px-3.5 py-2.5 text-sm text-ink transition-colors hover:border-brass hover:bg-brass/5"
                >
                  <span className="truncate">{arHomeItem.label}</span>
                  <ArrowRight className="size-3.5 shrink-0 rotate-180 text-brass opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
              </div>
              {[...arByType.entries()].map(([type, items]) => (
                <LinkGroup
                  key={type}
                  heading={AR_TYPE_LABEL[type] ?? type}
                  count={items.length}
                  items={items}
                  rtl
                />
              ))}
            </Section>
          )}
        </div>
      </div>
    </>
  );
}
