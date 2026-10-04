/**
 * Central site configuration. Update the brand, contact numbers, and domain
 * here — every page, schema block, and WhatsApp link reads from this file.
 */
export const siteConfig = {
  name: "Saudi Private Transfers",
  shortName: "Saudi Private Transfers",
  legalName: "Saudi Private Transfers",
  description:
    "Book private taxi service in Saudi Arabia for airports, cities, hotels, Umrah, Hajj, borders, and intercity transfers. Fast WhatsApp quotes available.",
  // Live canonical domain (no trailing slash). Used for canonicals, sitemap,
  // robots, OG tags, and JSON-LD — must match the host serving the site.
  url: "https://saudiprivatetransfers.com",
  // Business WhatsApp number, international format (digits only). Kept here for
  // backend use and structured data only — it is intentionally NOT displayed
  // anywhere on the public site.
  whatsappNumber: "923148932631",
  // Same number in human/tel form. Used only by JSON-LD structured data
  // (not rendered visibly anywhere on the site).
  phoneDisplay: "+92 314 8932631",
  phoneHref: "+923148932631",
  email: "taxiservicesaudiaa@gmail.com",
  locale: "en_US",
  // Raster (PNG) OG image — Facebook, LinkedIn, WhatsApp, and X do not render
  // SVG social previews, so the share image must be a PNG/JPG.
  ogImage: "/og-image.png",
  twitterHandle: "@sauditaxi",
  social: {
    pinterest: "https://www.pinterest.com/saudiprivate",
    facebook: "https://www.facebook.com/profile.php?id=61588795481731",
    instagram: "https://www.instagram.com/saudiprivatetransfer/",
    reddit: "https://www.reddit.com/user/SaudiPrivateTransfer/",
  },
  // No street address here. There used to be one ("King Fahd Road, Riyadh,
  // Riyadh Province, 11564, SA") asserted unconditionally in LocalBusiness
  // schema on every page, but it was never a real, verifiable office
  // location — the Contact page deliberately shows no address, and the
  // only phone/WhatsApp number carries a Pakistani (+92) country code, not
  // a Saudi one. Confirmed with the business owner (2026-10) that it should
  // be removed rather than kept or replaced. Do not reintroduce an address
  // field unless it's a real, verifiable business location.
} as const;

export type SiteConfig = typeof siteConfig;

/** Absolute URL builder used by metadata, canonicals, and JSON-LD. */
export function absoluteUrl(path = "/"): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url}${clean === "/" ? "" : clean}`;
}

/**
 * Build a wa.me link with a prefilled message. Used by every WhatsApp CTA and
 * by the quote form on submit.
 */
export function whatsappLink(message: string): string {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;
}
