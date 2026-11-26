# 71 — Homepage rebuild, English and Arabic (local only)

**Date:** 25 November 2026.

**Not done:** no commit, push or deployment; no indexing request. No page or URL was deleted or redirected.

**Arabic:** the Arabic homepage was rebuilt at your request. The translation data files (`data/translations/*`) were not touched. The new Arabic copy needs **native-speaker review before release.**

**Preserved:** the uncommitted work from reports 61–69.

**Phase 1 diagnosis:** see **71a-homepage-indexing-diagnosis.md**.

## 1. Initial indexing diagnosis (summary of 71a)

- **No technical block found:**
  - 200 status; http, www and `/index` variants 301 to the canonical;
  - `index, follow` with no X-Robots-Tag;
  - robots.txt allows Googlebot;
  - homepage in the sitemap with en/ar alternates;
  - content fully server-rendered;
  - no staging or localhost URLs.
- **Verified problems on the old homepage:**
  - claims contradicting rebuilt pages: 24/7, vetted drivers, universal meet-and-greet and flight tracking, corporate accounts, fixed prices, no prepayment, waiting between stops;
  - outdated route figures;
  - the booking steps rendered twice;
  - only 8 of 19 cities and 4 of 13 airports covered;
  - an unlicensed hero image;
  - the Trustpilot Review Collector labelled "Verified by our customers";
  - a thin Arabic homepage (532 words) full of "أسعار ثابتة" (fixed prices).
- **Site-wide schema:** a `LocalBusiness` with no address (invalid for Google's LocalBusiness feature and misleading) on every page; `Organization.sameAs` empty.
- **Why Google isn't indexing the homepage** can't be determined from the page. The likely factors are quality and duplication, inconsistent signals and site-level factors. **No change here guarantees indexing.**

## 2. Main technical problems found

1. Duplicate booking-steps text in the HTML (fixed).
2. LocalBusiness without an address, site-wide (**owner decision**, section 13).
3. Empty `Organization.sameAs` (fixed with the owner's social profiles in `lib/site.ts`).
4. No `WebPage` node on the homepage (added) and no `x-default` hreflang (recommendation).
5. Outdated route-record figures surfacing on the homepage:
   - Makkah–Madinah 450 km vs 436–439 km routed;
   - Riyadh–Dammam 3 h 45 vs 3.9–4.1 h;
   - the Jeddah Airport → Makkah Umrah page says 95 km vs 103–109 km routed.

   These figures are not shown on the homepage; the records are flagged.

## 3. Files changed

| File | Status | Change |
|---|---|---|
| `data/home-page.ts` | New | English copy, FAQs (10), photo map (reused credited photos) |
| `data/home-page-ar.ts` | New | Arabic copy, FAQs (10), Arabic alt text |
| `components/home/HomeView.tsx` | New | Shared 15-section layout (English and right-to-left Arabic) |
| `app/(main)/page.tsx` | Rewritten | Uses `HomeView`; new metadata; WebPage and FAQPage JSON-LD |
| `app/ar/page.tsx` | Rewritten | Uses `HomeView` with Arabic copy; links mapped to `/ar` equivalents; WebPage and FAQPage JSON-LD |
| `lib/schema.ts` | Modified | `Organization.sameAs` = the owner's social profiles (Facebook, Instagram, Pinterest, Reddit). Affects JSON-LD on every page |
| `reports/…/71a-…md`, `71-…md` | New | Reports |

**Unchanged:** the old `components/home/*` section components (left in place, unused), the quote forms (`HomeBookingPanel`, `HeroQuickForm`) and the quote and lead backend.

## 4. New homepage structure (same order in English and Arabic)

1. **Hero:**
   - H1 "Private Transfers Across Saudi Arabia" / «نقل خاص في جميع أنحاء المملكة العربية السعودية»;
   - an intro; Get a Quote and Explore Routes;
   - coverage chips (13 airports, 19 cities, holy cities, neighbouring countries);
   - the existing quote widget, which hands off to the secure quote page;
   - Riyadh skyline photo (licensed).
2. **National overview:** why private road transport, how quotations work, and 5 pillars.
3. **Airports:**
   - 7 photo cards: RUH, JED, DMM, MED, TIF, AHB, GIZ;
   - 6 more airport links;
   - the airport hub.
4. **Umrah, Hajj and Ziyarat:**
   - 4 journey cards (JED Airport → Makkah, Makkah ↔ Madinah, MED Airport → hotel, hotel transfers);
   - 3 service links (Umrah, Hajj, Ziyarat);
   - Makkah and Madinah city links;
   - a one-line "road transport only; not a Hajj/Umrah operator" note.
5. **Routes:**
   - 8 routes in a departure-board list, with figures only where verified (Makkah–Madinah and Riyadh–Dammam shown without);
   - a link to the route directory.
6. **Destinations:**
   - 8 photo cards (Riyadh, Jeddah, Dammam, Taif, Abha, Hofuf, Jazan, Khamis Mushait);
   - 11 more city links;
   - the city hub.
7. **Day trips:** Riyadh → Diriyah, Jeddah → Taif, AlUla. Return journeys and waiting are agreed in the quotation.
8. **Chauffeur and private journeys:** business schedule, several stops, families and groups.
9. **Neighbouring countries** (owner instruction, 25 Nov 2026: "Jordan, Iraq, Kuwait, Qatar, the United Arab Emirates, Oman, and Yemen"):
   - linked cards with crossing names: Bahrain (King Fahd Causeway; kept because it has an existing page), UAE, Qatar, Kuwait, and Jordan (Al Haditha and Al Durra, `/border-transfers/jordan-border`);
   - **Oman, Iraq and Yemen have no pages**, so they appear as unlinked cards (dashed border) reading "Crossing confirmed in your quotation". No crossing names were stated for them, so none are claimed;
   - the same list is used in the meta description, coverage chip, pillar, trust paragraph and FAQ ("Do you offer transfers to neighbouring countries?"), in English and Arabic;
   - a one-line documents and entry note; the border hub.
10. **Why private** (4 points), alongside **11. How the quotation process works** (4 steps).
11. *(see 10)*
12. **Vehicles:** the site's 6 vehicle categories with their published passenger and luggage guide; "availability confirmed in your quotation".
13. **Who we are:** business identity, the two public email addresses, About and Contact links, and the genuine Trustpilot review collector labelled "Share your experience".
14. **FAQs (10)**, matching the FAQPage structured data.
15. **Final CTA:** Get a Quote, Explore Routes, WhatsApp.

## 5. Content decisions

- **One coherent identity:** a nationwide private road-transport service, explained once. The repetitive trust strip is gone.
- **Specific facts reused from the verified city and airport pages:**
  - RUH 32–37 km to Olaya and KAFD;
  - JED 100–110 km to Makkah;
  - GIZ about 4 km from Jazan;
  - the DMM tracking wording.
- **Overlap:** every section summarises and links out, so it doesn't compete with the hub and route pages.
- **Word count:** 1,642 English (was 2,223, much of it repeated) and 1,424 Arabic (was 532).

## 6. Operational claims corrected

**Removed** (homepage, English and Arabic):
- 24/7 and "vetted/professional drivers";
- universal meet-and-greet, name boards and flight tracking;
- corporate accounts and "fixed-quote" cars;
- "price agreed / driver confirmed in advance", "fixed, all-in price" and "no prepayment" (×3);
- "driver waits between stops" / "waiting to bring you back";
- "drivers who know the crossings" / "handled by drivers who plan for the crossing";
- "miqat stops";
- "Ziyarat tours timed around prayer schedules";
- "Verified by our customers";
- "Professional drivers" in the meta description;
- the Arabic "أسعار ثابتة", "استقبال داخل الصالة", "متابعة الرحلة" and "24/7".

**Kept (verified):** flight tracking **only for DMM**, using the owner-approved wording.

**Added (owner-confirmed):** cross-border road transfers to Jordan, Iraq, Kuwait, Qatar, the UAE, Oman and Yemen. Routes and crossings are confirmed in the quotation; no crossing times, prices or permit help are claimed.

**Built-page claims scan:** 0 matches in English and Arabic.

## 7. Internal links

| Page | Internal links | Missing |
|---|---|---|
| English homepage | 59 unique | 0 |
| Arabic homepage | 59 unique (46 to Arabic pages; 13 fall back to English) | 0 |

**Added from the homepage** (beyond the previous 29 unique):
- airports: Taif, Abha, Jazan, AlUla, Tabuk, Yanbu, Hail, Red Sea, NEOM Bay; the airport hub;
- cities: Jazan, Hofuf, Al-Ahsa, Khamis Mushait, Jubail, Yanbu, Tabuk, Hail, Najran, Buraidah;
- the Ziyarat service; hotel transfers; the Makkah Umrah airport transfer (`/makkah/jeddah-airport-to-makkah-umrah`);
- routes: Riyadh–AlUla, Riyadh–Abha, Riyadh–Diriyah, Jeddah–Taif, MED airport → Madinah;
- hubs: city, border, airport and intercity; About; Contact.

**Arabic links that fall back to English** (no Arabic page exists): the DMM, MED, TIF, AHB, GIZ, ULH, TUU, YNB and HAS airport pages, and the 5 border pages (Bahrain, UAE, Qatar, Kuwait, Jordan).

**Pages still needing better internal links** (recommendations):
- the Arabic counterparts for those airport and border pages;
- `/services` (only linked from the chauffeur card);
- `/distance/*` guides (none from the homepage, by design; consider a "Planning guides" link);
- Arabic route pages from the Arabic homepage (handled by the mapping where they exist).

## 8. Images and licensing

All photos are **reused** from sets already credited on `/image-credits`; **no new images** were added.

| Section | Image | Location shown | Author · licence |
|---|---|---|---|
| Hero (OG, schema image) | `riyadh/riyadh-skyline-sunset.webp` | Riyadh (KAFD, Kingdom Centre) | B.alotaby · CC BY-SA 4.0 |
| RUH card | `riyadh/king-khalid-airport-terminal.webp` | RUH terminal | Kharbaan Ghaltaan · CC BY-SA 4.0 |
| JED card | `jeddah/kaia-hajj-terminal.webp` | JED Hajj Terminal | Shah134pk · CC BY-SA 4.0 |
| DMM card | `jubail/dammam-corniche-spiral-tower.webp` | Dammam Corniche (city, not the airport; alt text says so) | King Eliot · CC BY-SA 4.0 |
| TIF card | `taif/taif-plateau.webp` | Taif plateau | per Taif set |
| AHB card | `asir/abha-city-view.webp` | Abha | Aiman titi · CC BY-SA 3.0 |
| GIZ card | `jazan/jazan-mangroves.webp` | Jazan coast | SPA · CC BY-SA 4.0 |
| Destination cards | Kingdom Centre; Jeddah waterfront; Dammam Corniche; Al Shafa (Taif); Green Mountain (Abha); Qasr Ibrahim (Hofuf); Jazan sunset; Khamis Mushait | each city | per their sets on `/image-credits` |
| Day trips | `riyadh/at-turaif.webp`; `taif/al-hada-switchbacks.webp` | Diriyah; Al Hada | xiquinhosilva CC BY 2.0; per Taif set |

**Image loading:**
- 18 images; the hero is preloaded and not lazy; 16 are lazy-loaded.
- Responsive `sizes` on all; WebP sources.

**No photos used for:**
- **MED, AlUla, Makkah and Madinah:** the existing `/images/ziyarat/*` files have **no licence records**, so they weren't used.
- **Cross-border and vehicles:** no licensed photos on file.

These sections use icons instead. No AI imagery is used.

## 9. Structured data

**Homepage, English and Arabic:**
- Site-wide: Organization (now with `sameAs` ×4), WebSite, LocalBusiness, TaxiService.
- Added: **WebPage** (`inLanguage`, `isPartOf` WebSite, `about` Organization, `primaryImageOfPage` with author, licence and source).
- **FAQPage** (10), matching the visible FAQs 10/10.
- The old single-item BreadcrumbList on `/ar` was dropped (redundant on a homepage).

All blocks parse; there are no Review or AggregateRating nodes.

**Warnings (not errors):**
- **LocalBusiness lacks `address`:** Google's validator reports an error for the LocalBusiness rich-result feature. The entity is site-wide, which is an owner decision.
- **FAQ rich results:** Google limits these to authoritative government and health sites, so FAQPage won't produce a rich result here. It is kept only as machine-readable data.

## 10. SEO and performance checks

| Check | English | Arabic |
|---|---|---|
| Title | "Private Transfers Across Saudi Arabia \| Airports, Cities & Umrah" | «نقل خاص في جميع أنحاء السعودية \| مطارات ومدن وعمرة» |
| Meta description | Without "professional drivers" | Without "أسعار ثابتة" |
| Canonical | Root | `/ar` |
| hreflang | en ↔ ar reciprocal | en ↔ ar reciprocal |
| robots | index, follow | index, follow |
| OG image | Licensed hero | Licensed hero |
| Headings | 1 H1, 14 H2, 58 H3 | 1 H1, 15 H2, 58 H3 |

- **HTML size:** 249 KB English (was 194 KB) and 236 KB Arabic (was 117 KB). The growth is from more content and the RSC payload. Script tags are unchanged (12).
- **No new client JavaScript:** the forms are the existing ones; no sliders or animations. The Trustpilot script loads after interactive, as before.
- **Mobile:** 500 px screenshots of both pages; the Arabic page mirrors correctly right-to-left; no overflow. After the neighbouring-countries change, a 390 px screenshot of that section in both languages: 2-column grid, 8 cards, page width 390 (no horizontal scroll).
- **Core Web Vitals:** not measured in the lab here. Run PageSpeed Insights after deploy.

## 11. Full production build

| Check | Result |
|---|---|
| TypeScript | 0 errors |
| Lint | Repo 10 (the same pre-existing set). Changed files: 0 |
| Production build (isolated worktree with all current changes and `.env`) | Exit 0, 906/906 |
| Rebuild after the neighbouring-countries change | Exit 0, 906/906; vs the previous report-71 build only `index` and `ar` changed |
| Site diff vs the report-69 build | `index` and `ar` changed (title, meta, JSON-LD, body); **896 other pages changed in JSON-LD only** (the `sameAs` addition); 0 added or removed |

## 12. Remaining problems

1. **Site-wide LocalBusiness without an address** (and the site-wide TaxiService) on every page.
2. **13 Arabic homepage links point to English pages**, because no Arabic counterpart exists.
3. **Route records:**
   - `makkah-to-madinah` 450 km (routing 436–439);
   - `riyadh-to-dammam` 3 h 45 (routing 3.9–4.1 h);
   - `/makkah/jeddah-airport-to-makkah-umrah` 95 km (routing 103–109).
4. **`/images/ziyarat/*` have no licence records.** Verify or replace them; they are used on the Makkah and Madinah pages.
5. **`/taxi-service/madinah`** still says the driver "tracks your flight and meets you in the arrivals hall with a name board" (report 69).
6. **No dedicated pages** for chauffeur service, day trips or the vehicle fleet.
7. **The Arabic homepage copy needs native-speaker review.**
8. **No pages for Oman, Iraq or Yemen** border transfers; the homepage cards are unlinked until pages exist. Crossing names for them are unconfirmed.

## 13. Recommendations requiring owner approval

1. **Remove the site-wide `LocalBusiness`** (or keep it only if a real, verifiable address exists) and the generic site-wide `TaxiService`; page-level Service nodes already describe services.
2. **Add `x-default` hreflang** for `/` (pointing to `/`).
3. **Approve and release the Arabic homepage** after native review.
4. **Correct the three route figures** in section 12, item 3.
5. **Confirm the licences** for `/images/ziyarat/*`, or approve replacements.
6. **Search Console, after deploy:** inspect the URL and request indexing **only if you separately authorise it**; then monitor.
7. **Measure performance:** run PageSpeed Insights on `/` and `/ar` after deploy.
8. **Confirm Bahrain** stays in the cross-border list (it was not in the owner's list, but it has an existing page), and decide whether to build Oman, Iraq and Yemen pages with confirmed crossings.

## 14. Indexing-readiness checklist (local build)

| Item | Status |
|---|---|
| Homepage returns 200 (live today; the local build renders) | ✓ |
| Indexing permitted (`index, follow`, no X-Robots-Tag) | ✓ |
| Correct canonical (`https://saudiprivatetransfers.com`) | ✓ |
| In the sitemap (first entry, with alternates) | ✓ |
| Internal links point to the canonical root (`/`) | ✓ |
| Content in the server-rendered HTML | ✓ |
| No staging or localhost URLs | ✓ |
| No duplicate homepage versions (www, http and `/index` all 301 to the root) | ✓ |

**Not done:** the homepage has not been indexed and no indexing request was submitted.

## 15. Git status

Nothing was committed, pushed or deployed. The working tree holds the uncommitted work from reports 61–71.
