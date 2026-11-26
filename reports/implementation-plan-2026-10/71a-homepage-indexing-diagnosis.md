# 71a — Homepage indexing diagnosis (Phase 1, before any change)

**Date:** 25 November 2026.

**Scope:** `https://saudiprivatetransfers.com/` (and `/ar` for parity).

**Method:** live HTTP requests (Googlebot user agent), the HTML as served, `robots.txt`, `sitemap.xml`, and the source in `app/(main)/page.tsx`, `components/home/*` and `app/ar/page.tsx`.

**Reported Search Console status:** "Crawled — currently not indexed". This means Google fetched the page and chose not to index it. It is **not** a penalty notice, and the page itself can't reveal Google's reason. Section 7 separates what is verified from what is hypothesis.

## 1. Technical indexability (verified)

| Check | Result |
|---|---|
| `GET /` | **200**, no redirect; `text/html`; served by Cloudflare |
| `http://`, `www.`, `http://www.`, `/index` | All **301 → `https://saudiprivatetransfers.com/`** (one hop) |
| Query-string variant `/?utm=x` | 200, canonical points to the root (correct) |
| `robots.txt` | Googlebot allowed (`Allow: /`); only `/api/` and `/admin/` disallowed. Cloudflare's managed block blocks AI-training crawlers (Google-Extended, GPTBot, ClaudeBot, GoogleOther and others). That doesn't affect Google Search, but it does block those AI crawlers. Two `User-agent: *` groups exist (Cloudflare and the app); Google merges them, so this isn't a problem |
| Meta robots | `index, follow`; googlebot `index, follow, max-image-preview:large` |
| X-Robots-Tag | None |
| Canonical | `https://saudiprivatetransfers.com` (no trailing slash). Google treats the root with and without the slash as the same URL. OK |
| hreflang | `en` → `/`, `ar` → `/ar`, reciprocal on both pages. **No `x-default`** (minor) |
| Sitemap | Homepage is the first `<loc>` in `sitemap.xml` (896 URLs) with `hreflang` alternates, priority 1, `lastmod` 2026-11-25. OK |
| Staging, localhost or preview URLs | None found in the HTML |
| Server rendering | Full content is in the initial HTML: about 2,200 words in `<main>`, no client-side-rendering bailout. The page doesn't need JavaScript to read |
| Headings | 1 H1 ("Private Transfers Across Saudi Arabia") and 12 H2s |
| Page weight | HTML about 199 KB |

**Conclusion:** no technical block to indexing was found. The status is not explained by robots, canonical, redirect, noindex or sitemap problems.

## 2. Structured data (verified)

| Item | Finding |
|---|---|
| Site-wide (root layout, every page) | `Organization`, `WebSite`, **`LocalBusiness`**, **`TaxiService`** |
| Homepage-specific | `FAQPage` (7 questions, matching the visible FAQ) |
| `LocalBusiness` | **No `address`**, which Google requires for LocalBusiness rich results (an error in Google's validator for that feature). It implies a physical local branch. Its phone number is a Pakistani (+92) one. `priceRange "$$"` is unverified. **Misleading or invalid entity** |
| `TaxiService` | A site-wide generic service on all ~900 pages, duplicated with page-level `Service` nodes on rebuilt pages |
| `Organization` | `sameAs: []` (empty); logo `logo.svg` |
| No `WebPage` node | The homepage has no WebPage/`primaryImageOfPage` |

## 3. Homepage content quality (verified from the served text)

1. **Claims that contradict the pages rebuilt in reports 51–69** (these were removed from those pages but remain on the homepage):
   - "24/7 availability" (×2)
   - "Professional, vetted drivers"
   - "Meet-and-greet pickup at arrivals, with flight tracking… adjusts… automatically" (applied to all airports; only DMM has confirmed tracking)
   - "corporate and business-travel accounts" (Riyadh card, Riyadh city card, business card)
   - "Meet-and-greet at King Abdulaziz… Hajj Terminal and Terminal 1"
   - "the price is agreed… your driver is confirmed in advance"
   - "no prepayment required" (×3 in the steps and FAQ)
   - "fixed, all-in price" (FAQ)
   - "your driver waits between stops" / "with your driver waiting to bring you back" (day trips)
   - "fixed-quote private cars"
   - "drivers who know the crossings" / "handled by drivers who plan for the crossing"
   - Trust strip: "Professional driver coordination on every booking", "Live flight tracking for airport pickups", "Cross-border journey support at Saudi–GCC crossings"
   - "miqat stops for ihram" (FAQ)
   - "Ziyarat tours… timed around prayer schedules"
2. **Outdated route figures on cards:**
   - Riyadh–Jeddah "9 hours" (corrected to 9.5–10.5 h locally, uncommitted).
   - Makkah–Madinah "450 km · 4 h 30" (routing 436–439 km).
   - Riyadh–Dammam "3 h 45" (routing 3.9–4.1 h).
3. **Duplicated content:** the four booking steps are rendered **twice** in the HTML (a mobile list and a desktop list).
4. **Generic or repetitive text:** the hero, the trust strip and the "Service" intro repeat the same three promises (private vehicle, quote, 24/7). Several sections restate "door-to-door" and "no shared rides".
5. **Coverage under-represented:**
   - The intro names 8 cities, while the site has 19 city pages and 13 airport pages.
   - Abha, Jazan, Hofuf/Al-Ahsa, Khamis Mushait, Jubail, Yanbu, Tabuk, Hail, Najran and Buraidah are missing from the homepage.
   - Taif and Abha airports (which have pages) are missing from the airport section.
6. **Trust section:**
   - The heading is "Verified by our customers / Reviewed on Trustpilot".
   - The widget is Trustpilot's **Review Collector** (template `56278e9abfbbba0bdcd568bc`). It invites reviews and shows **no** rating or reviews, so "Verified by our customers" overstates it.
   - The widget loads a third-party script.
7. **Images:**
   - The hero uses `/images/journey/riyadh-skyline.jpg`, which has no licence record.
   - No other destination photos are used; there are no image credits for homepage imagery.
8. **Meta description** contains "Professional drivers" (an unsupported claim).

## 4. Internal links (verified)

- **Main content:** 35 internal links (29 unique).
- **Missing from the homepage:**
  - airport pages for Taif, Abha, Jazan, Tabuk, Yanbu, AlUla, Hail;
  - most city pages (11 of 19);
  - `/ziyarat-taxi-service` (no direct link found in the main content);
  - `/services/hotel-transfers`, `/airport-transfers`, `/city-transfers`, `/intercity-transfers`, `/border-transfers` hubs (only some are linked);
  - `/routes` directory ("All routes" exists).
- **No dedicated pages exist for:** chauffeur service, day trips, or the vehicle fleet. The current sections link to the nearest service pages instead.

## 5. Contradictions with individual pages

- **Airport pickup:** the rebuilt Riyadh, Jeddah, Abha, Jazan and Taif pages say pickup arrangements are confirmed individually, with no tracking or name boards (except DMM tracking). The homepage promises universal meet-and-greet and tracking.
- **Business travel:** the rebuilt Riyadh page removed corporate accounts and day-rates; the homepage advertises corporate accounts.
- **Pricing:** quotation wording is used across rebuilt pages; the homepage says "fixed, all-in price" and "no prepayment".
- **Arabic homepage** (`/ar`, 532 words, 5 H2s): "أسعار ثابتة" (fixed prices) many times, "24/7", "استقبال" (reception), "متابعة الرحلة" (flight follow-up), all in title, meta and body. It is also far thinner than the English page, a weak counterpart for the `ar` alternate.

## 6. Arabic homepage (verified)

- **Technical signals:** title, description, canonical `/ar`, `lang="ar" dir="rtl"`, reciprocal hreflang.
- **Structured data:** Organization, WebSite, LocalBusiness, TaxiService, BreadcrumbList, FAQPage.
- **Content:** a separate, older template (`HeroSection`, `TrustBadges`, `HowItWorks`) with the claims listed above.

## 7. Likely indexing concerns (hypotheses, not verifiable from the page)

Google does not disclose why a crawled URL isn't indexed. Plausible contributing factors, in rough order:

1. **Perceived quality and duplication.** Much of the homepage text restates the same promises and overlaps the service hubs (airport, city, intercity, border, Umrah). The two copies of the steps add duplicate text.
2. **Inconsistent signals across the site.** The homepage promises capabilities that the rebuilt inner pages explicitly don't. This doesn't trigger a penalty, but it weakens the page as an authoritative summary.
3. **Entity signals.** An address-less LocalBusiness with a foreign phone number on every page, and an empty `sameAs`.
4. **Site-level factors:** a relatively new or low-authority domain, a large number of templated route pages, and crawl budget. The homepage often follows the site's overall quality assessment.
5. **Recent frequent changes.** Many deploys in the last weeks; Google may re-evaluate later.

**None of the planned changes is guaranteed to get the homepage indexed.**

## 8. Recommended implementation plan (Phase 2 onward, local only)

1. **New homepage (English):** a single story-led page with one coherent identity ("Private Transfers Across Saudi Arabia"), built as `data/home-page.ts` and `components/home/HomeView.tsx`.
   - **Sections:** hero with the existing quote form; national overview; airports; Umrah, Hajj and Ziyarat; routes; destinations; day trips; chauffeur and vehicle use; GCC; why private; how quotation works; vehicles; trust; FAQs; final CTA.
   - **Rendering:** each section rendered once (no duplicated mobile/desktop text).
   - **Wording:** quotation wording; airport-specific accuracy (DMM tracking only); no 24/7, vetted, corporate accounts, fixed prices, no-prepayment or waiting claims.
   - **Route figures:** only verified ones; others shown without figures.
   - **Photos:** licensed photos already in the credit system only; no unverified hero.
   - **Links:** to every relevant hub, airport and city page, and to the route directory.
2. **Arabic homepage (`/ar`):** rebuilt on the same structure in Arabic, quotation-based. This is new Arabic copy and **needs native-speaker review** before release.
3. **Structured data (homepage):** add a `WebPage` node (with `primaryImageOfPage`) and keep FAQPage matching the visible FAQs. The site-wide LocalBusiness and TaxiService are in the root layout (all pages); removing them is recommended but **needs owner approval**, as it affects every page.
4. **Metadata:** remove "Professional drivers"; describe the real scope.
5. **Trust section:** keep the genuine Trustpilot collector, but label it honestly ("Share your experience on Trustpilot").
6. **QA and readiness:** full build, link scan, schema and FAQ parity, mobile, and a Search Console readiness checklist.
