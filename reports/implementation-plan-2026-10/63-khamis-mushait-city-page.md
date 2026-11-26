# 63 — Khamis Mushait city page (`/taxi-service/khamis-mushait`) (local only)

**Date:** 25 November 2026.

**Not done:** no commit, push or deployment; no form submission or indexing request. Arabic was not edited. No page was deleted, redirected or noindexed, and none was removed from the sitemap.

**Preserved:** the uncommitted Riyadh–Yanbu (report 61) and Jubail–Dammam (report 62) work. The Abha and Jazan pages were not touched. The reused Asir photos are referenced, not modified.

## 1. Files changed

| File | Status | Change |
|---|---|---|
| `data/khamis-mushait-city-page.ts` | New | Story copy, facts with sources, photos (with credits), 10 FAQs |
| `components/city-transfer/KhamisMushaitCityView.tsx` | New | The "plateau market town" layout |
| `public/images/khamis-mushait/*.webp` (4) | New | Licensed Khamis Mushait photos |
| `app/(main)/taxi-service/[city]/page.tsx` | Modified | Khamis Mushait branch (BreadcrumbList, WebPage, Service, FAQPage) and OG image. Other cities unchanged |
| `data/cities.ts` | Modified | Khamis Mushait intro, about, landmarks, meta title and description only (CRLF line endings preserved) |
| `data/city-guides.ts` | Modified | Khamis Mushait entry only. It is no longer rendered but is required by the template, and was rewritten without the old claims |
| `data/photo-credits.ts` | Modified | Khamis Mushait group added to `/image-credits` |

**Before:** the page used the shared CityTransferHub template, fed by `cities.ts` and `city-guides.ts`.

## 2. Verified city facts

| Claim | Verdict | Source |
|---|---|---|
| "Largest city of the Asir region" | **True.** City population 535,065 (2022 census) vs Abha 334,290; Abha is the regional capital | citypopulation.de (GASTAT 2022), Saudipedia |
| Name origin | "Khamis" = Thursday, after the weekly Thursday market of the Mushait clan; known by this name since the 1760s | Britannica, Wikipedia |
| Shares Abha's airport | **True.** No Khamis Mushait airport. AHB lies between the two cities | Coordinates and routing |
| "Commercial twin of Abha" | Reworded to "the largest city… a busy commercial centre", with Abha as the regional capital | — |
| "Al Mahalah Heritage Village" | **Not verifiable** (no source found in English or Arabic). **Removed.** Replaced with the Al-Mushait Palaces (Visit Saudi) and Bin Hamsan Heritage Village (Discover Aseer) | Visit Saudi, Discover Aseer |
| Al Soudah, Green Mountain | Both are on the Abha side. The page says the viewpoints are west of Abha and gives Al Soudah's distance from Khamis | Routing |

## 3. Distances (OSRM / Valhalla, 25 Nov 2026; central Khamis Mushait 18.30, 42.7333)

| From → to | OSRM | Valhalla | Published |
|---|---|---|---|
| AHB → Khamis Mushait | 20 km · 21 min | 20 km · 36 min | ≈20 km, 20–35 min |
| Khamis → AHB | 23 km · 22 min | 21 km · 34 min | — |
| Khamis → central Abha | 33 km · 26 min | 37 km · 51 min | ≈33–37 km, 30–50 min |
| Khamis → Al Soudah | 57 km · 47 min | 60 km · 74 min | ≈57–60 km, an hour or a little more |
| Khamis → Najran | 230 km · 2.9 h | 231 km · 3.5 h | ≈230 km, 3–3.5 h |
| Khamis → Jazan | 228 km · 2.7 h | 230 km · 3.4 h | ≈230 km, 3–3.5 h |
| Khamis → Riyadh | 917 km · 11.1 h | 923 km · 11.4 h | ≈920 km, 11–11.5 h |

**Corrected:** the old statement "the transfer typically takes a similar amount of time to reaching central Abha". From AHB the trip is ≈20 km to either city, but Valhalla rates the Abha leg slower.

## 4. Content (story-led, entity-rich)

1. **Hero:** "Asir Region · Southern highlands"; H1; an intro that opens with the name's meaning (the Thursday market); CTAs "Get a Khamis Mushait Quote" and "City transfers overview"; a facts ledger (region, largest city, AHB ≈20 km, Abha ≈33–37 km).
2. **A market town that became Asir's largest city:** origin, plateau climate, commercial centre, its relationship with Abha, and why it's a good starting point.
3. **Arriving through Abha International Airport** (terracotta band): no Khamis airport; AHB ≈20 km, 20–35 min; pickup confirmed when booking. Links to the AHB page and arrival guide.
4. **Khamis Mushait or Abha: where should you stay?** The NASA night image of both cities, then two cards ("the commercial city" vs "the regional capital"). Balanced, with a link to the Abha page; no Abha content duplicated.
5. **Getting around Khamis Mushait:** hotels, homes, offices, hospitals, markets; the Al-Mushait Palaces and Bin Hamsan (check opening times with the venue).
6. **Into the Asir highlands:** viewpoints west of Abha; Al Soudah ≈57–60 km; quotation reflects your plan (no package).
7. **Journeys beyond Khamis Mushait:**

   | Destination | Distance · time | Links to |
   |---|---|---|
   | Abha | ≈33–37 km · 30–50 min | `/taxi-service/abha` |
   | Najran | ≈230 km · 3–3.5 h | `/taxi-service/najran` |
   | Jazan | ≈230 km · 3–3.5 h | `/taxi-service/jazan` |
   | Riyadh | ≈920 km · 11–11.5 h | `/routes/abha-to-riyadh` ("via Khamis Mushait") |

   No Khamis-specific route pages exist, so none were invented.
8. **Pickup and drop-off places:** 8 practical types, plus "any exact address".
9. **How to request a transfer:** 5 steps, then the QuoteForm (pickup "Khamis Mushait", destination left open, city "Khamis Mushait") and WhatsApp.
10. **FAQs (10):** which airport; how far from AHB; Khamis vs Abha; to Abha; Najran and Jazan; highlands; heritage sites; hotel or business pickup; Riyadh; how to get a quotation.

## 5. Claims removed

- "fixed price agreed before you travel" (×2)
- "Al Mahalah Heritage Village… a short private transfer"
- "Places our drivers regularly serve"
- "once you confirm it we schedule your driver"
- "we work with corporate and business travel accounts"
- "similar amount of time to reaching central Abha"
- "commercial twin" (as a label)
- "sightseeing rides" (as a package)

**Claims scan of the built page:** 0 matches.

## 6. Photography

| File | Subject | Author · licence |
|---|---|---|
| `khamis-mushait-city-view.webp` (hero, OG, schema image) | The city under clouds on the plateau | Aiman titi · CC BY-SA 3.0 |
| `khamis-mushait-heritage-area.webp` | Coffee-pot sculpture and Asiri stripes, heritage area | Aiman titi · CC BY-SA 3.0 |
| `khamis-mushait-mosque.webp` | Custodian of the Two Holy Mosques mosque | Aiman titi · CC BY-SA 3.0 |
| `khamis-mushait-boulevard.webp` | Palm-lined walking boulevard | Aiman titi · CC BY-SA 3.0 |
| *Reused* `asir/iss-abha-khamis-mushait.webp` | Abha and Khamis Mushait at night from the ISS | NASA · public domain |
| *Reused* `asir/abha-city-view.webp` | Abha's highland basin | Aiman titi · CC BY-SA 3.0 |
| *Reused* `asir/al-soudah-green-slopes.webp` | Slopes near Al Soudah | Irshadpp · CC BY-SA 4.0 |

All are listed on `/image-credits`, and none is AI-generated. No licensed photo of the Al-Mushait Palaces or Bin Hamsan was found.

## 7. SEO and structured data

- **Title:** "Private Transfers in Khamis Mushait | Abha Airport & Asir".
- **Meta description:** "Private transfers in Khamis Mushait: Abha Airport (about 20 km), city rides, Abha, the Asir highlands, Najran and Jazan. Share your trip for a quotation."
- **Headings:** one H1 and 10 H2s.
- **Canonical:** self. **hreflang:** en and ar (unchanged). **Robots:** index, follow. **OG image:** the city view.
- **JSON-LD:**
  - BreadcrumbList.
  - WebPage, with `primaryImageOfPage`, author, licence and source.
  - Service, with `areaServed` City Khamis Mushait in the Asir Region.
  - FAQPage (10), all visible (10/10).
- The duplicate page-level TaxiService from the old template is not emitted.
- **No geo meta tags.**

## 8. QA

| Check | Result |
|---|---|
| TypeScript | 0 errors |
| Lint | Repo 10 (the same pre-existing set). Changed files: 0 |
| Production build (isolated worktree with all current changes and `.env`) | Exit 0, 906/906 |
| Site diff vs the Jubail–Dammam build | 2 pages: `taxi-service/khamis-mushait` (title, meta, JSON-LD, body) and `image-credits`. None added or removed |
| Internal links | 8 on the page, none missing |
| Form | Pickup "Khamis Mushait"; destination, date, time, passengers, luggage, vehicle and message present; shared backend unchanged; no submission |
| Visual | Desktop 1440 and mobile 500. The hero overlay was lightened after the first pass so the city photo shows. The night image initially rendered blank because the image cache wasn't warm yet; the second render was correct. No overflow |
| Arabic | 0 files changed |

## 9. Owner decisions and Arabic notes

1. **Arabic `/ar/تاكسي-خميس-مشيط`** (`ar.ts`, around lines 25195–25225) still has:
   - "أسعار ثابتة" in the meta description;
   - "بسعر ثابت متفق عليه مسبقًا" in the Riyadh FAQ.

   Update after native review. "Al Mahalah" does not appear in the Arabic copy.
2. **Route pages for Khamis Mushait** (to Najran, Jazan and Abha Airport) don't exist. Should any be created later? Verified figures are listed above.
3. **`/routes/abha-to-riyadh`** is used as the Riyadh link ("via Khamis Mushait"). It says 940–960 km from Abha; from Khamis it's ≈920 km, as shown on this page.
