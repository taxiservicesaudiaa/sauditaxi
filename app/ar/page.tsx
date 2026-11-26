import type { Metadata } from "next";
import { HomeView } from "@/components/home/HomeView";
import { HeroQuickForm } from "@/components/HeroQuickForm";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { faqSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { absoluteUrl, siteConfig } from "@/lib/site";
import { getArPathForEnPathLight } from "@/data/translations/ar-index";
import { HOME_PHOTOS, HOME_REVIEWED } from "@/data/home-page";
import { HOME_AR, HOME_FAQS_AR, HOME_PHOTO_ALT_AR } from "@/data/home-page-ar";

// Arabic homepage rebuild (task 71): same layout as the English homepage
// (components/home/HomeView.tsx) with Arabic copy (data/home-page-ar.ts —
// needs native-speaker review). Links map to the Arabic equivalent of each
// English page where one exists; otherwise they fall back to the English page.

export const metadata: Metadata = buildMetadata({
  title: HOME_AR.meta.title,
  description: HOME_AR.meta.description,
  path: "/ar",
  image: HOME_PHOTOS.hero.src,
  alternateLanguages: { en: "/", ar: "/ar" },
});

const toAr = (enPath: string) => getArPathForEnPathLight(enPath) ?? enPath;

export default function ArabicHomePage() {
  const url = absoluteUrl("/ar");
  return (
    <>
      <SchemaScript
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": `${url}#webpage`,
            url,
            name: HOME_AR.meta.title,
            description: HOME_AR.meta.description,
            inLanguage: "ar",
            isPartOf: { "@id": `${siteConfig.url}/#website` },
            about: { "@id": `${siteConfig.url}/#organization` },
            dateModified: HOME_REVIEWED,
            primaryImageOfPage: {
              "@type": "ImageObject",
              url: absoluteUrl(HOME_PHOTOS.hero.src),
              caption: HOME_PHOTO_ALT_AR.hero,
              creditText: HOME_PHOTOS.hero.credit.author,
              ...(HOME_PHOTOS.hero.credit.licenceUrl ? { license: HOME_PHOTOS.hero.credit.licenceUrl } : {}),
              acquireLicensePage: HOME_PHOTOS.hero.credit.source,
            },
          },
          faqSchema(HOME_FAQS_AR),
        ]}
      />
      <HomeView
        c={HOME_AR}
        faqs={HOME_FAQS_AR}
        locale="ar"
        href={toAr}
        quoteHref="/ar/اطلب-عرض-سعر"
        photoAlt={HOME_PHOTO_ALT_AR}
        waMessage="مرحبًا! أرغب في عرض سعر لنقل خاص في السعودية."
        form={<HeroQuickForm />}
      />
    </>
  );
}
