import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Car, Plane, Building2, MapPinned, ShieldCheck } from "lucide-react";
import { HeroSection } from "@/components/sections/HeroSection";
import { HeroQuickForm } from "@/components/HeroQuickForm";
import { TrustBadges } from "@/components/sections/TrustBadges";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { Card } from "@/components/ui/card";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { faqSchema, breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { getDictionary } from "@/lib/i18n";
import { arPages, arPath } from "@/data/translations/ar";
import { heroImages } from "@/lib/hero";

const dict = getDictionary("ar");

export const metadata: Metadata = buildMetadata({
  title: "نقل خاص وتاكسي في السعودية | مطارات، مدن، حدود، عمرة وحج",
  description:
    "احجز خدمة نقل خاص موثوقة في جميع أنحاء المملكة العربية السعودية — نقل من المطار، تنقلات المدينة، رحلات بين المدن، النقل عبر الحدود، والعمرة والحج. أسعار ثابتة وحجز سريع عبر واتساب.",
  path: "/ar",
  alternateLanguages: { en: "/", ar: "/ar" },
});

const homeFaqs = [
  { question: "هل يمكنني حجز نقل خاص بالعربية بالكامل؟", answer: "نعم، توفر صفحاتنا العربية محتوى كاملًا بالعربية مع نموذج حجز يعمل بالعربية أيضًا، ويمكنك أيضًا التواصل معنا عبر واتساب بالعربية." },
  { question: "هل الأسعار ثابتة فعلًا؟", answer: "نعم، نتفق على السعر الكامل قبل بدء الرحلة، بدون عداد وبدون أي رسوم مفاجئة في أوقات الذروة." },
  { question: "ما هي المدن التي تغطونها؟", answer: "نغطي أكثر من 19 مدينة سعودية، بما في ذلك الرياض وجدة ومكة المكرمة والمدينة المنورة والدمام والخبر وغيرها." },
  { question: "هل تقدمون خدمة نقل للعمرة والحج؟", answer: "نعم، نوفر خدمات مخصصة لنقل المعتمرين والحجاج من المطارات إلى مكة المكرمة والمدينة المنورة، مع مركبات مناسبة للعائلات والمجموعات." },
  { question: "كيف أحجز رحلتي؟", answer: "يمكنك تعبئة نموذج طلب عرض السعر في أعلى الصفحة، أو التواصل معنا مباشرة عبر واتساب، وسنرد عليك خلال دقائق بسعر ثابت." },
];

const arServices = arPages.filter((p) => p.type === "serviceV2");
const serviceIcons = [Plane, Car, MapPinned, ShieldCheck, Building2, MapPinned, MapPinned, MapPinned];

export default function ArabicHomePage() {
  const crumbs = [{ name: dict.nav.home, path: "/ar" }];

  return (
    <>
      <SchemaScript schema={[breadcrumbSchema(crumbs), faqSchema(homeFaqs)]} />

      <HeroSection
        title="نقل خاص وتاكسي في جميع أنحاء المملكة العربية السعودية"
        subtitle="احجز نقلًا خاصًا موثوقًا للمطارات والمدن والفنادق والعمرة والحج والحدود عبر واتساب في دقائق. أسعار ثابتة، سائقون محترفون، وعروض أسعار سريعة."
        badge="خدمة تاكسي في السعودية"
        points={[
          "استقبال داخل الصالة مع متابعة الرحلة",
          "نقل خاص من وإلى جدة ومكة والمدينة",
          "نقل عبر الحدود إلى البحرين وقطر",
          "أسعار ثابتة بدون عداد أو مفاجآت",
        ]}
        backgroundImage={heroImages.default}
        formCard={<HeroQuickForm />}
        ctaLabel="اطلب عرض سعر"
        ctaHref="/ar/اطلب-عرض-سعر"
        contactLabel="تواصل معنا"
        contactHref="/ar/اتصل-بنا"
      />

      <TrustBadges
        labels={{
          rating: dict.trustBadges.rating,
          support: dict.trustBadges.support,
          private: dict.trustBadges.private,
          cities: dict.trustBadges.cities,
        }}
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              خدماتنا في السعودية
            </h2>
            <p className="mt-3 text-ink-soft">
              نقل خاص بأسعار ثابتة لكل نوع من أنواع الرحلات في المملكة.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {arServices.map((service, i) => {
              const Icon = serviceIcons[i] ?? Car;
              return (
                <Link key={service.slug} href={arPath(service)} className="group">
                  <Card className="h-full border-hairline p-6 transition-all hover:-translate-y-1 hover:border-brass hover:shadow-md">
                    <span className="flex size-12 items-center justify-center rounded-xl bg-midnight text-brass transition-colors group-hover:bg-brass group-hover:text-midnight">
                      <Icon className="size-6" />
                    </span>
                    <h3 className="mt-4 text-lg font-semibold text-ink">{service.h1}</h3>
                    <p className="mt-1.5 text-sm text-ink-soft">{service.intro}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-ink group-hover:text-brass">
                      المزيد
                      <ArrowRight className="size-4 rtl:rotate-180 transition-transform ltr:group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                    </span>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <HowItWorks
        heading={dict.howItWorks.heading}
        subheading={dict.howItWorks.subheading}
        steps={dict.howItWorks.steps}
        stepLabel={(n) => dict.howItWorks.step.replace("{n}", String(n))}
        background="muted"
      />

      <FAQSection faqs={homeFaqs} heading={dict.faq.heading} background="white" />

      <CTASection
        title="هل أنت مستعد لحجز تاكسي في السعودية؟"
        subtitle="أرسل تفاصيل موقع الانطلاق والوجهة الآن واحصل على عرض سعر ثابت وسريع عبر واتساب."
        whatsappLabel={dict.cta.getAQuote}
        contactLabel={dict.cta.contactUs}
        contactHref="/ar/اتصل-بنا"
      />
    </>
  );
}
