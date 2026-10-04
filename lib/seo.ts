import type { Metadata } from "next";
import { absoluteUrl, siteConfig } from "@/lib/site";

interface PageMetaInput {
  title: string;
  description: string;
  /** Path beginning with "/". Used for canonical + OG url. */
  path: string;
  /** Override the OG image (absolute or root-relative). */
  image?: string;
  /** Set false for utility pages you don't want indexed. */
  index?: boolean;
  /**
   * Cross-language alternates for hreflang, keyed by language code
   * ("en", "ar", ...). Only pass this when a real translation exists —
   * omit it entirely for pages that don't have one yet.
   */
  alternateLanguages?: Record<string, string>;
}

/**
 * Build a complete Metadata object with canonical, Open Graph, and Twitter
 * tags. Every page funnels its SEO through this helper for consistency.
 */
export function buildMetadata({
  title,
  description,
  path,
  image = siteConfig.ogImage,
  index = true,
  alternateLanguages,
}: PageMetaInput): Metadata {
  const url = absoluteUrl(path);
  // Social networks (Facebook, LinkedIn, WhatsApp, X) cannot render SVG share
  // images. Fall back to the raster default whenever an SVG is supplied so the
  // OG/Twitter preview always uses a PNG/JPG.
  const ogImg = image.endsWith(".svg") ? siteConfig.ogImage : image;
  const imageType = ogImg.endsWith(".png")
    ? "image/png"
    : ogImg.endsWith(".webp")
      ? "image/webp"
      : "image/jpeg";
  const languages = alternateLanguages
    ? Object.fromEntries(
        Object.entries(alternateLanguages).map(([lang, altPath]) => [
          lang,
          absoluteUrl(altPath),
        ])
      )
    : undefined;
  // og:locale was hardcoded to siteConfig.locale ("en_US") for every page,
  // including the Arabic tree — every Arabic page's URL is under /ar, so
  // detect from the path rather than threading a new param through every one
  // of the 28 files that call this function.
  const locale = path.startsWith("/ar") ? "ar_SA" : siteConfig.locale;

  return {
    title,
    description,
    alternates: { canonical: url, ...(languages ? { languages } : {}) },
    robots: index
      ? {
          index: true,
          follow: true,
          googleBot: { index: true, follow: true, "max-image-preview": "large" },
        }
      : { index: false, follow: false },
    openGraph: {
      type: "website",
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale,
      images: [{ url: ogImg, width: 1200, height: 630, alt: title, type: imageType }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImg],
      site: siteConfig.twitterHandle,
    },
  };
}
