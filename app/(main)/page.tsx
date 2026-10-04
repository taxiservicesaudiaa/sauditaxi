import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeTrustStrip } from "@/components/home/HomeTrustStrip";
import { HomeServiceIntro } from "@/components/home/HomeServiceIntro";
import { HomeServiceExperience } from "@/components/home/HomeServiceExperience";
import { HomeUmrahHajj } from "@/components/home/HomeUmrahHajj";
import { HomeRouteExplorer } from "@/components/home/HomeRouteExplorer";
import { HomeDayTrips } from "@/components/home/HomeDayTrips";
import { HomeChauffeur } from "@/components/home/HomeChauffeur";
import { HomeCrossBorder } from "@/components/home/HomeCrossBorder";
import { HomeDestinationExplorer } from "@/components/home/HomeDestinationExplorer";
import { HomeBookingSteps } from "@/components/home/HomeBookingSteps";
import { HomeVehicleExperience } from "@/components/home/HomeVehicleExperience";
import { HomePrivateTravelBenefits } from "@/components/home/HomePrivateTravelBenefits";
import { HomeCustomerTrust } from "@/components/home/HomeCustomerTrust";
import { HomeFAQSection } from "@/components/home/HomeFAQSection";
import { HomeFinalCTA } from "@/components/home/HomeFinalCTA";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { faqSchema } from "@/lib/schema";
import { homeFaqs } from "@/data/faqs";

// 2026 homepage rebuild — see PRE_REDESIGN_AUDIT.md / DO_NOT_DELETE.md for
// what this preserves (URL, booking/quote functionality) and the final
// report for what changed. app/ar/page.tsx (the Arabic homepage) is
// intentionally out of scope for this task and untouched.
//
// 2026 heading-structure update: content and H1-H3 hierarchy rewritten to
// the brief's required 12-section IA (see the "H2 #N" comment on each
// component). No form, API, routing, or interactive behaviour changed —
// see the per-component comments for what each edit actually touched.

// Refresh hourly — kept from the previous homepage (no freshness-dependent
// content on the new page, but harmless to leave).
export const revalidate = 3600;

// Metadata preserved exactly as before — the heading-structure update does not change SEO signals.
export const metadata: Metadata = buildMetadata({
  title: "Private Transfers in Saudi Arabia | Airport, City & Border Taxi",
  description:
    "Book private transfers across Saudi Arabia — airport pickups, city rides, intercity routes, and border crossings. Fixed prices, professional drivers, 24/7.",
  path: "/",
  alternateLanguages: { en: "/", ar: "/ar" },
});

export default function HomePage() {
  return (
    <>
      {/* Homepage FAQ structured data (FAQPage), matching the visible H2 #12
          FAQ section exactly. LocalBusiness, TaxiService, Organization, and
          WebSite schema render site-wide from the root layout — untouched by
          this update. (LocalBusiness no longer includes Review/AggregateRating
          nodes — removed as unverifiable, see lib/schema.ts.) */}
      <SchemaScript schema={[faqSchema(homeFaqs)]} />

      <HomeHero />
      <HomeTrustStrip />
      <HomeServiceIntro />
      <HomeServiceExperience />
      <HomeUmrahHajj />
      <HomeRouteExplorer />
      <HomeDayTrips />
      <HomeChauffeur />
      <HomeCrossBorder />
      <HomeDestinationExplorer />
      <HomeBookingSteps />
      <HomeVehicleExperience />
      <HomePrivateTravelBenefits />
      <HomeCustomerTrust />
      <HomeFAQSection faqs={homeFaqs} heading="Frequently Asked Questions About Saudi Transfers" />
      <HomeFinalCTA />
    </>
  );
}
