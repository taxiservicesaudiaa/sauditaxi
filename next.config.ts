import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable Next's per-instance in-memory page cache (50 MB by default). On
  // Cloudflare, OpenNext's incremental cache already serves prerendered pages
  // from Workers Static Assets — the Next docs say to set this to 0 with a
  // custom cache handler so reads go to that store. Keeping up to 50 MB of
  // ~350 KB page entries in memory inside a Worker capped at 128 MB (which
  // also holds the server bundle) made instances fail after serving a few
  // hundred distinct pages during a full crawl.
  cacheMaxMemorySize: 0,

  // Serve modern formats (AVIF/WebP) and a sensible set of responsive widths
  // so mobile devices download much smaller hero/blog images.
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [360, 640, 750, 828, 1080, 1200, 1920],
  },

  // Long-term immutable caching for static assets in /public/images.
  async headers() {
    return [
      {
        source: "/images/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },

  // Canonicalise www.saudiprivatetransfers.com to the non-www apex domain in a
  // single permanent redirect (www is attached to the Worker as a custom domain).
  async redirects() {
    return [
      {
        source: "/index",
        destination: "/",
        permanent: true,
      },
      {
        source: "/index.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/index.php",
        destination: "/",
        permanent: true,
      },
      // The bare "/" needs its own rule: with "/:path*" below, OpenNext's
      // redirect handling left the empty :path* unsubstituted for the root, so
      // www.saudiprivatetransfers.com/ redirected to the literal
      // https://saudiprivatetransfers.com/:path* (a 404).
      {
        source: "/",
        has: [{ type: "host", value: "www.saudiprivatetransfers.com" }],
        destination: "https://saudiprivatetransfers.com/",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.saudiprivatetransfers.com" }],
        destination: "https://saudiprivatetransfers.com/:path*",
        permanent: true,
      },
      // Blog posts renamed to their current slug. Each of these was 404ing in
      // Search Console; the destination is the live post covering the same
      // topic (confirmed against data/translations/ar.ts, which still had an
      // Arabic page's enPath pointing at the old English slug).
      {
        source: "/blog/king-fahd-causeway-private-taxi-guide",
        destination: "/blog/saudi-to-bahrain-taxi-king-fahd-causeway",
        permanent: true,
      },
      {
        source: "/blog/riyadh-airport-transfer-guide",
        destination: "/blog/riyadh-airport-transfer-business-travelers",
        permanent: true,
      },
      {
        source: "/blog/complete-umrah-transport-guide-2025",
        destination: "/blog/umrah-transport-makkah-madinah-guide",
        permanent: true,
      },
      {
        source: "/blog/private-taxi-vs-uber-careem-saudi-arabia",
        destination: "/blog/uber-vs-careem-vs-private-transfer-saudi-arabia",
        permanent: true,
      },
      // No live post covers the general tourist/expat angle this slug
      // targeted (the current Jeddah-arrival post is Umrah-pilgrim-specific),
      // so this redirects to the closest topical match rather than the
      // homepage.
      {
        source: "/blog/jeddah-airport-arrival-guide-tourist-expat",
        destination: "/blog/what-to-do-after-landing-at-jeddah-airport",
        permanent: true,
      },
      // Note: two Arabic-path aliases (تاكسي-عمرة, النقل-الحدودي) are handled
      // in app/ar/[...slug]/page.tsx instead of here — Next.js's config-level
      // redirects() did not reliably match non-ASCII `source` patterns in
      // testing (confirmed: English redirects above fire correctly on the
      // same build; the two Arabic ones did not), so the alias is resolved
      // in-app instead, where the equivalent Arabic-string lookup already
      // works correctly for every other Arabic route.
    ];
  },
};

export default nextConfig;
