"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Car, Mail, MapPin } from "lucide-react";
import { FacebookIcon, InstagramIcon, PinterestIcon, RedditIcon } from "@/components/icons/SocialIcons";
import { siteConfig } from "@/lib/site";
import { cities } from "@/data/cities";
import { services } from "@/data/services";
import { airports } from "@/data/airports";
import { getDictionary, localeFromPathname } from "@/lib/i18n";
// The lightweight index, not the full ~26,700-line content dataset — this is
// a client component, so importing data/translations/ar.ts directly here
// used to ship that entire dataset in the client JS bundle for every page on
// the site. See data/translations/ar-index.ts's own comment.
import { arPageIndex, arIndexPath } from "@/data/translations/ar-index";
import { cn } from "@/lib/utils";

const popularCities = cities.slice(0, 8);
const footerServices = services.filter((s) => s.featured);
const footerAirports = airports.slice(0, 6);
const arServices = arPageIndex.filter((p) => p.type === "serviceV2");
const arCitiesList = arPageIndex.filter((p) => p.type === "city");

/**
 * A client component so the footer can detect /ar/* client-side without
 * forcing the whole app into dynamic rendering (the root layout that
 * renders this must stay a static Server Component — see app/layout.tsx).
 */
export function Footer() {
  const locale = localeFromPathname(usePathname());
  const dict = getDictionary(locale);
  const isAr = locale === "ar";
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-brass/20 bg-midnight text-white/80">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className={cn("grid gap-10 md:grid-cols-2", isAr ? "lg:grid-cols-4" : "lg:grid-cols-3 xl:grid-cols-6")}>
          <div>
            <Link href={isAr ? "/ar" : "/"} className="flex items-center gap-2 text-white">
              <span className="flex size-9 items-center justify-center rounded-lg bg-brass text-navy">
                <Car className="size-5" />
              </span>
              <span className="text-lg font-bold">
                {siteConfig.shortName}
                <span className="text-brass">.</span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed">{dict.footer.description}</p>
            <div className="mt-5 space-y-2 text-sm">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 hover:text-brass"
              >
                <Mail className="size-4 text-brass" /> {siteConfig.email}
              </a>
              <p className="flex items-center gap-2">
                <MapPin className="size-4 text-brass" /> {dict.footer.servingAllOfSaudi}
              </p>
            </div>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={isAr ? "تابعنا على فيسبوك" : "Follow us on Facebook"}
                className="flex size-9 items-center justify-center rounded-full bg-white/10 text-white/70 transition-colors hover:bg-brass hover:text-navy"
              >
                <FacebookIcon className="size-4" />
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={isAr ? "تابعنا على انستغرام" : "Follow us on Instagram"}
                className="flex size-9 items-center justify-center rounded-full bg-white/10 text-white/70 transition-colors hover:bg-brass hover:text-navy"
              >
                <InstagramIcon className="size-4" />
              </a>
              <a
                href={siteConfig.social.pinterest}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={isAr ? "تابعنا على بينترست" : "Follow us on Pinterest"}
                className="flex size-9 items-center justify-center rounded-full bg-white/10 text-white/70 transition-colors hover:bg-brass hover:text-navy"
              >
                <PinterestIcon className="size-4" />
              </a>
              <a
                href={siteConfig.social.reddit}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={isAr ? "تابعنا على ريديت" : "Follow us on Reddit"}
                className="flex size-9 items-center justify-center rounded-full bg-white/10 text-white/70 transition-colors hover:bg-brass hover:text-navy"
              >
                <RedditIcon className="size-4" />
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
              {dict.footer.services}
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              {isAr
                ? arServices.map((s) => (
                    <li key={s.slug}>
                      <Link href={arIndexPath(s)} className="hover:text-brass">
                        {s.h1}
                      </Link>
                    </li>
                  ))
                : footerServices.map((s) => (
                    <li key={s.slug}>
                      <Link href={s.href} className="hover:text-brass">
                        {s.name}
                      </Link>
                    </li>
                  ))}
              {!isAr && (
                <li>
                  <Link href="/intercity-transfers" className="hover:text-brass">
                    {dict.footer.intercityTransfers}
                  </Link>
                </li>
              )}
            </ul>
          </div>

          {!isAr && (
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
                Airports
              </h2>
              <ul className="mt-4 space-y-2 text-sm">
                {footerAirports.map((a) => (
                  <li key={a.slug}>
                    <Link href={`/airport-transfer/${a.slug}`} className="hover:text-brass">
                      {a.city} Airport
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
              {dict.footer.popularCities}
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              {isAr
                ? arCitiesList.map((c) => (
                      <li key={c.slug}>
                        <Link href={arIndexPath(c)} className="hover:text-brass">
                          {c.h1}
                        </Link>
                      </li>
                    ))
                : popularCities.map((c) => (
                    <li key={c.slug}>
                      <Link href={`/taxi-service/${c.slug}`} className="hover:text-brass">
                        {c.name} {dict.footer.cityTaxiSuffix}
                      </Link>
                    </li>
                  ))}
            </ul>
          </div>

          {!isAr && (
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
                Travel Resources
              </h2>
              <ul className="mt-4 space-y-2 text-sm">
                <li><Link href="/distance/riyadh-to-jeddah-distance" className="hover:text-brass">Riyadh to Jeddah distance</Link></li>
                <li><Link href="/distance/jeddah-to-makkah-distance" className="hover:text-brass">Jeddah to Makkah distance</Link></li>
                <li><Link href="/distance/riyadh-to-abu-dhabi-distance" className="hover:text-brass">Riyadh to Abu Dhabi distance</Link></li>
                <li><Link href="/border-transfers" className="hover:text-brass">Cross-border guides</Link></li>
                <li><Link href="/blog" className="hover:text-brass">Travel guides</Link></li>
              </ul>
            </div>
          )}

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
              {dict.footer.company}
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href={isAr ? "/ar/من-نحن" : "/about"} className="hover:text-brass">{dict.footer.aboutUs}</Link></li>
              <li><Link href={isAr ? "/ar/اتصل-بنا" : "/contact"} className="hover:text-brass">{dict.footer.contact}</Link></li>
              <li><Link href={isAr ? "/ar/اطلب-عرض-سعر" : "/get-quote"} className="hover:text-brass">{dict.footer.getAQuote}</Link></li>
              <li><Link href={isAr ? "/ar/خدماتنا" : "/services"} className="hover:text-brass">{dict.footer.allServices}</Link></li>
              {!isAr && <li><Link href="/sitemap" className="hover:text-brass">Sitemap</Link></li>}
              <li><Link href={isAr ? "/ar/الشروط-والأحكام" : "/terms-and-conditions"} className="hover:text-brass">{dict.footer.termsAndConditions}</Link></li>
              <li><Link href={isAr ? "/ar/سياسة-الخصوصية" : "/privacy-policy"} className="hover:text-brass">{dict.footer.privacyPolicy}</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm sm:flex-row">
          <p>
            © {year} {siteConfig.legalName}. {dict.footer.allRightsReserved}
          </p>
          <div className="flex items-center gap-4 text-white/60">
            <Link href={isAr ? "/ar/الشروط-والأحكام" : "/terms-and-conditions"} className="hover:text-brass">{dict.footer.terms}</Link>
            <span aria-hidden="true">·</span>
            <Link href={isAr ? "/ar/سياسة-الخصوصية" : "/privacy-policy"} className="hover:text-brass">{dict.footer.privacy}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
