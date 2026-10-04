import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BorderHubView, type BorderHubLinkItem, type BorderHubRouteCard } from "@/components/border-hub/BorderHubView";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { borders, getBorder } from "@/data/borders";
import { getRoute } from "@/data/routes";
import { getCity } from "@/data/cities";
import { borderHero } from "@/lib/hero";
import type { Faq } from "@/data/faqs";
import { buildMetadata } from "@/lib/seo";
// Lightweight path-only lookup, not the full ~26,700-line content dataset
import { getArPathForEnPathLight } from "@/data/translations/ar-index";
import { breadcrumbSchema, serviceSchema, faqSchema } from "@/lib/schema";

// Border Hub redesign — "crossing logistics" editorial identity (see
// components/border-hub/BorderHubView.tsx), the most specialized of the
// three hub types: a journey visual (origin -> road -> crossing -> onward
// destination) plus an explicit "what we handle vs what border authorities
// control" split, so it never reads as a city page with a border name
// swapped in. Same URL (/border-transfers/{border}), same canonical/
// hreflang. Content is drawn from the existing, already-unique per-crossing
// data in data/borders.ts (+ data/border-guides.ts) and data/routes.ts.
// No Arabic border pages exist in the current architecture, so none are
// created here.
type Params = { border: string };

export function generateStaticParams() {
  return borders.map((b) => ({ border: b.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { border: slug } = await params;
  const border = getBorder(slug);
  if (!border) return {};
  const path = `/border-transfers/${border.slug}`;
  const arPath = getArPathForEnPathLight(path);
  return buildMetadata({
    title: border.metaTitle ?? `${border.country} Border Taxi | Saudi Cross-Border Transfer`,
    description:
      border.metaDescription ??
      `Private taxi transfer from Saudi Arabia to the ${border.country} border via ${border.crossing}. Door-to-door cross-border rides with WhatsApp booking.`,
    path,
    ...(arPath ? { alternateLanguages: { en: path, ar: arPath } } : {}),
  });
}

function borderFaqs(b: { country: string; crossing: string }): Faq[] {
  return [
    {
      question: `Can I book a border transfer from Saudi Arabia to ${b.country}?`,
      answer: `Yes. We provide private cross-border transfers from Saudi Arabia to ${b.country} via the ${b.crossing}, with door-to-door pickup and drop-off.`,
    },
    {
      question: `What documents do I need to cross to ${b.country}?`,
      answer: `You will need a valid passport and the appropriate visa for ${b.country}. We advise on the specific requirements when you book, and you should always verify current entry rules with official sources before you travel.`,
    },
    {
      question: `How long does the border crossing take?`,
      answer: `Crossing times vary with traffic and immigration queues and are controlled by the border authorities, not by us. We build in extra time at the ${b.crossing} so your transfer stays comfortable and unhurried.`,
    },
    {
      question: `Is the transfer to the ${b.country} border private?`,
      answer: `Yes, the transfer is fully private for your booking, with a fixed price agreed before you travel.`,
    },
  ];
}

export default async function BorderPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { border: slug } = await params;
  const border = getBorder(slug);
  if (!border) notFound();

  const faqs = (border.faqs ?? borderFaqs(border)).slice(0, 15);
  const path = `/border-transfers/${border.slug}`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Border Transfers", path: "/border-transfers" },
    { name: border.country, path },
  ];

  const routes: BorderHubRouteCard[] = (border.popularRoutes ?? [])
    .map((routeSlug): BorderHubRouteCard | null => {
      const r = getRoute(routeSlug);
      if (!r) return null;
      return { label: `${r.from} to ${r.to}`, distance: r.distance, duration: r.duration, href: `/routes/${routeSlug}` };
    })
    .filter((r): r is BorderHubRouteCard => r !== null);

  const pickupCities: BorderHubLinkItem[] = border.relatedCitySlugs
    .map((s) => {
      const c = getCity(s);
      return c ? { label: `${c.name} to ${border.country}`, href: `/taxi-service/${c.slug}` } : null;
    })
    .filter((c): c is BorderHubLinkItem => c !== null);

  const otherBorders: BorderHubLinkItem[] = borders
    .filter((b) => b.slug !== border.slug)
    .map((b) => ({ label: `${b.country} Border`, href: `/border-transfers/${b.slug}` }));

  return (
    <>
      <SchemaScript
        schema={[
          breadcrumbSchema(crumbs),
          serviceSchema({
            name: `Saudi Arabia to ${border.country} Border Transfer`,
            description: border.intro,
            path,
            serviceType: "Border Transfer",
            dateModified: border.lastUpdated,
          }),
          faqSchema(faqs),
        ]}
      />

      <BorderHubView
        eyebrow="Border Transfer"
        h1={`Saudi Arabia to ${border.country} Border Transfer`}
        dek={border.intro}
        heroImage={border.heroImage ?? borderHero(border.country).src}
        heroAlt={border.heroAlt ?? borderHero(border.country).alt}
        facts={[
          { label: "Country", value: border.country },
          { label: "Crossing", value: border.crossing },
          { label: "Pickup Cities", value: border.pickupCities.join(", ") },
        ]}
        journeyHeading="How the Journey Works"
        journeySteps={[
          { label: "Pickup in Saudi Arabia", detail: `Collected from ${border.pickupCities.join(", ")}.` },
          { label: "Road Journey", detail: `A comfortable private vehicle for the drive to ${border.crossing}.` },
          { label: `${border.crossing}`, detail: "Drop-off at the crossing, or a coordinated handover where arranged." },
          { label: `Onward into ${border.country}`, detail: "Onward transport is arranged separately from this transfer." },
        ]}
        responsibilityHeading="What We Handle vs. What Border Authorities Control"
        weHandleHeading="This transfer covers"
        weHandleItems={[
          "Pickup at your starting location in Saudi Arabia",
          `The private road journey to ${border.crossing}`,
          "Drop-off at the crossing, with a coordinated handover where arranged",
        ]}
        authorityHeading="Border & immigration authorities control"
        authorityItems={[
          "Passport and visa checks at the crossing",
          `Entry approval into ${border.country}`,
          "Any customs or vehicle inspection procedures",
          "Crossing wait times, which vary by day and time",
        ]}
        responsibilityNote={`Border and immigration procedures are controlled entirely by Saudi and ${border.country} authorities, not by the transfer provider. Always verify current entry requirements with official sources before you travel.`}
        notesHeading="What to Know Before You Travel"
        notes={border.notes}
        pickupCitiesHeading="Pickup Cities for This Border"
        pickupCities={pickupCities}
        routesHeading={routes.length > 0 ? `Private Transfers to ${border.country}` : undefined}
        routesIntro={routes.length > 0 ? `Fixed-price cross-border transfers via ${border.crossing}.` : undefined}
        routes={routes}
        guideSections={border.sections}
        otherBordersHeading="Other Border Crossings"
        otherBorders={otherBorders}
        faqsHeading={`Frequently Asked Questions About the ${border.country} Border Transfer`}
        faqs={faqs}
        ctaHeading={`Ready to Book Your ${border.country} Border Transfer?`}
        ctaText="Share your pickup city and travel date — we reply with a fixed price for the Saudi-side journey."
        ctaLabel={`Get a ${border.country} Border Quote`}
        ctaHref={`/get-quote?dropoff=${encodeURIComponent(`${border.country} (${border.crossing})`)}`}
        crumbs={crumbs}
      />
    </>
  );
}
