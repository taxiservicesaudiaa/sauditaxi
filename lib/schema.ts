import { absoluteUrl, siteConfig } from "@/lib/site";
import type { Faq } from "@/data/faqs";

/** A single JSON-LD node. Loosely typed on purpose. */
export type JsonLd = Record<string, unknown>;

const serviceTypes = [
  "Airport Transfer",
  "Private Taxi",
  "City Transfer",
  "Intercity Transfer",
  "Border Transfer",
  "Umrah Taxi Service",
  "Hajj Transport",
];

export function organizationSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.legalName,
    url: siteConfig.url,
    logo: absoluteUrl("/logo.svg"),
    email: siteConfig.email,
    telephone: siteConfig.phoneDisplay,
    sameAs: [] as string[],
  };
}

export function websiteSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    publisher: { "@id": `${siteConfig.url}/#organization` },
  };
}

export function localBusinessSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.url}/#localbusiness`,
    name: siteConfig.name,
    url: siteConfig.url,
    image: absoluteUrl(siteConfig.ogImage),
    telephone: siteConfig.phoneDisplay,
    email: siteConfig.email,
    priceRange: "$$",
    // No `address` field — there used to be one asserting a Riyadh street
    // address that was never a real, verifiable office location (see the
    // comment on siteConfig.address in lib/site.ts). Do not add one back
    // unless it's a real, verifiable business address.
    areaServed: { "@type": "Country", name: "Saudi Arabia" },
    // No AggregateRating / Review nodes here. This schema used to claim
    // reviewCount: 1280 against 5 first-party, unverified testimonials — a
    // fabricated figure with no real review platform behind it, which is
    // exactly the kind of self-serving review markup Google's structured-data
    // guidelines prohibit. Removed rather than patched with a smaller number,
    // since none of the testimonials in data/testimonials.ts are
    // independently verifiable either (see the comment on that file). Add
    // these nodes back only if wired to a real, independently verifiable
    // source (e.g. the Trustpilot API, using its actual rating and count).
  };
}

export function taxiServiceSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    name: `${siteConfig.name}`,
    description:
      "Private taxi, airport transfer, city transfer, border transfer and intercity transport service across Saudi Arabia.",
    provider: { "@id": `${siteConfig.url}/#organization` },
    areaServed: { "@type": "Country", name: "Saudi Arabia" },
    serviceType: serviceTypes,
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: absoluteUrl("/get-quote"),
    },
  };
}

/** Generic Service node for service / city / route / border pages. */
export function serviceSchema(input: {
  name: string;
  description: string;
  path: string;
  serviceType?: string;
  areaServed?: string;
  /** ISO date the page's content was last substantively updated, if tracked. */
  dateModified?: string;
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    serviceType: input.serviceType ?? "Taxi Service",
    url: absoluteUrl(input.path),
    provider: { "@id": `${siteConfig.url}/#organization` },
    areaServed: {
      "@type": input.areaServed ? "Place" : "Country",
      name: input.areaServed ?? "Saudi Arabia",
    },
    ...(input.dateModified ? { dateModified: input.dateModified } : {}),
  };
}

/** HowTo node for step-by-step process sections (e.g. airport pickup flow). */
export function howToSchema(input: {
  name: string;
  description: string;
  steps: { name: string; text?: string }[];
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: input.name,
    description: input.description,
    step: input.steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text ?? s.name,
    })),
  };
}

export function breadcrumbSchema(
  items: { name: string; path: string }[]
): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

/** BlogPosting / Article schema for a blog post. */
export function articleSchema(input: {
  title: string;
  description: string;
  path: string;
  image: string;
  author: string;
  datePublished: string | null;
  dateModified: string | null;
  keywords?: string[];
  section?: string;
}): JsonLd {
  const url = absoluteUrl(input.path);
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: input.title,
    description: input.description,
    image: input.image.startsWith("http") ? input.image : absoluteUrl(input.image),
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    url,
    author: { "@type": "Organization", name: input.author, url: siteConfig.url },
    publisher: { "@id": `${siteConfig.url}/#organization` },
    ...(input.datePublished ? { datePublished: input.datePublished } : {}),
    ...(input.dateModified ? { dateModified: input.dateModified } : {}),
    ...(input.keywords && input.keywords.length ? { keywords: input.keywords.join(", ") } : {}),
    ...(input.section ? { articleSection: input.section } : {}),
  };
}

export function faqSchema(faqs: Faq[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}
