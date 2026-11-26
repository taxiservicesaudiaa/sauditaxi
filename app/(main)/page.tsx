import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { HomeView } from "@/components/home/HomeView";
import { HomeBookingPanel } from "@/components/home/HomeBookingPanel";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { faqSchema } from "@/lib/schema";
import { absoluteUrl, siteConfig } from "@/lib/site";
import { HOME_EN, HOME_FAQS_EN, HOME_PHOTOS, HOME_REVIEWED } from "@/data/home-page";

// Homepage rebuild (task 71; see reports/implementation-plan-2026-10/71a and 71).
// The previous section components in components/home/ are left in place,
// unused. Organization, WebSite, LocalBusiness and TaxiService JSON-LD still
// render site-wide from app/(main)/layout.tsx.
//
// No `revalidate`: an hourly regeneration would exceed the Cloudflare Workers
// Free plan CPU limit (error 1102). Updates on deploy.

export const metadata: Metadata = buildMetadata({
  title: HOME_EN.meta.title,
  description: HOME_EN.meta.description,
  path: "/",
  image: HOME_PHOTOS.hero.src,
  alternateLanguages: { en: "/", ar: "/ar" },
});

export default function HomePage() {
  const url = siteConfig.url;
  return (
    <>
      <SchemaScript
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": `${url}/#webpage`,
            url,
            name: HOME_EN.meta.title,
            description: HOME_EN.meta.description,
            inLanguage: "en",
            isPartOf: { "@id": `${url}/#website` },
            about: { "@id": `${url}/#organization` },
            dateModified: HOME_REVIEWED,
            primaryImageOfPage: {
              "@type": "ImageObject",
              url: absoluteUrl(HOME_PHOTOS.hero.src),
              caption: HOME_PHOTOS.hero.alt,
              creditText: HOME_PHOTOS.hero.credit.author,
              ...(HOME_PHOTOS.hero.credit.licenceUrl ? { license: HOME_PHOTOS.hero.credit.licenceUrl } : {}),
              acquireLicensePage: HOME_PHOTOS.hero.credit.source,
            },
          },
          faqSchema(HOME_FAQS_EN),
        ]}
      />
      <HomeView
        c={HOME_EN}
        faqs={HOME_FAQS_EN}
        locale="en"
        quoteHref="/get-quote"
        waMessage="Hello! I'd like a quotation for a private transfer in Saudi Arabia."
        form={<HomeBookingPanel eyebrow={HOME_EN.hero.formEyebrow} title={HOME_EN.hero.formTitle} />}
      />
    </>
  );
}
