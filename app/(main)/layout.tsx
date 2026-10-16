import type { Metadata, Viewport } from "next";
import { Manrope, IBM_Plex_Sans_Arabic } from "next/font/google";
import "../globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyWhatsApp } from "@/components/StickyWhatsApp";
import { StickyMobileQuote } from "@/components/StickyMobileQuote";
import { SiteShell } from "@/components/layout/SiteShell";
import { SchemaScript } from "@/components/seo/SchemaScript";
import {
  organizationSchema,
  websiteSchema,
  localBusinessSchema,
  taxiServiceSchema,
} from "@/lib/schema";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

// Premium sans-serif — replaces Geist as part of the 2026 visual reset
// (see PRE_REDESIGN_AUDIT.md / the homepage rebuild). Weights kept to the
// ones the new typography scale actually uses (400/500/600/700) rather than
// loading the full variable-font range.
const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

// Arabic pages use a dedicated Arabic-script webfont. Loaded here too (not
// just app/ar/layout.tsx) since Header/Footer are shared components
// rendered under both root layouts and apply the `font-arabic` class
// whenever the current route is Arabic.
const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  variable: "--font-arabic",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Taxi Service in Saudi Arabia`,
    // Page titles are already complete and keyword-rich, so we don't append the
    // brand here — doing so pushed every title past the ~60-char SEO limit.
    template: `%s`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "taxi service in Saudi Arabia",
    "Saudi Arabia airport transfer",
    "private taxi Saudi Arabia",
    "Umrah taxi service",
    "Makkah to Madinah taxi",
    "intercity taxi Saudi Arabia",
  ],
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    url: siteConfig.url,
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#0B1726",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={cn(manrope.variable, ibmPlexSansArabic.variable, "h-full")}
    >
      <body className="flex min-h-full flex-col font-sans">
        <SiteShell
          header={<Header />}
          footer={<Footer />}
          whatsapp={
            <>
              <StickyWhatsApp />
              <StickyMobileQuote />
            </>
          }
          schema={
            // Site-wide JSON-LD: shows on every public page for crawlers.
            <SchemaScript
              schema={[
                organizationSchema(),
                websiteSchema(),
                localBusinessSchema(),
                taxiServiceSchema(),
              ]}
            />
          }
        >
          {children}
        </SiteShell>
      </body>
    </html>
  );
}
