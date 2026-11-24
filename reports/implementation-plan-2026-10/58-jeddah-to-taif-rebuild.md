# 58 — Jeddah to Taif: complete editorial rebuild (local only)

**Date:** 24 November 2026 · **URL:** `/routes/jeddah-to-taif` (unchanged).
**Nothing committed, pushed or deployed; no indexing requests; no form submitted; Arabic untouched; no URL deleted, redirected, noindexed or removed from the sitemap.**

## 1. Fact-verification table

| # | Claim on the page | Verified information | Source | Confidence | Owner confirmation? |
|---|---|---|---|---|---|
| 1 | Jeddah → Taif ≈165–175 km | OSRM: fastest 165 km; forced via Al Hada 171 km. Valhalla: 171 km; via Al Hada 177 km (central Jeddah 21.4858, 39.1925 → central Taif 21.2703, 40.4158) | OSRM, Valhalla | High | No |
| 2 | ≈2–2.5 h of driving, before stops | OSRM 2 h 04–2 h 09; Valhalla 1 h 58–2 h 04. The range adds Jeddah and Makkah traffic | OSRM, Valhalla | High | No |
| 3 | As-Sayl road ≈205–225 km, ≈2.5–3 h | OSRM 205 km / 2 h 26; Valhalla 222 km / 2 h 32 (via As-Sayl Al-Kabir 21.63, 40.43) | OSRM, Valhalla | High | No |
| 4 | Both usual roads pass through Makkah | Both computed routes pass within ≈0.3–1 km of Masjid al-Haram | OSRM geometry | High | No |
| 5 | Route around Makkah ≈225–240 km | OSRM via Al-Jumum + As-Sayl 225 km / 2 h 44 (≈8 km from the Haram); a wider loop 236 km / 3 h 28 | OSRM | **Medium**: the exact permitted bypass is not published as an official map | **Yes:** confirm the bypass route you use |
| 6 | Non-Muslims may not enter Makkah | Long-standing Saudi law; enforcement reported | Arab News; Saudi Gazette (2022 prosecution case) | High | No |
| 7 | Makkah access can be restricted during Hajj season | Entry limited to permit holders in the Hajj period | Arab News ("No Makkah entry sans Haj permit") | High (seasonal details vary) | No |
| 8 | Jeddah ≈10 m; Makkah ≈280 m; escarpment foot ≈600 m; Al Hada ≈1,970 m; Taif ≈1,700–1,900 m | DEM along the route: 12 / 283 / 600 / 1,968–1,973 / 1,672 m. Wikipedia: Makkah 277 m; Jabal Hada ≈2,000 m; Taif 1,879 m | Copernicus DEM (Open-Meteo); Wikipedia | High | No |
| 9 | Cumulative markers ≈75 / ≈120 / ≈120–145 / ≈165–175 km | Sampled every 5 km along the OSRM Al Hada route | OSRM + DEM | High (rounded) | No |
| 10 | Climb ≈1,300 m in ≈25 km | 600 m at ≈120 km to 1,968 m at ≈145 km | OSRM + DEM | High | No |
| 11 | Al Hada road closures (maintenance 2025; rain) | Closed 1 Jan – 20 Feb 2025 for maintenance, with the As-Sayl road advised; precautionary closures in rain | Saudi Gazette (Roads General Authority); Sabq | High | No |
| 12 | Al Hada cable car run by its own operator; check operation | SPA (18 Jul 2026) reports it operating as a summer attraction; hours and fares vary between sources; may stop in high wind | Saudi Press Agency; listings | Medium | **Yes:** will drivers make cable-car stops on request? |
| 13 | Taif → Al Hada ≈20 km; Taif → Al Shafa ≈32 km; Al Shafa ≈2,100 m | OSRM 20 km and 32 km; DEM ≈2,120 m | OSRM; DEM; Nominatim | High | No |
| 14 | Taif in the Sarawat (Hijaz) Mountains; summer retreat | Wikipedia: "slopes of the Hijaz Mountains… part of the Sarat Mountains" | Wikipedia | High | No |
| 15 | Taif roses harvested in spring for rose water and oil | SPA "Taif Rose Harvest 2026" (photo source); widely documented | Saudi Press Agency | High | No |
| 16 | Shubra Palace in central Taif | Nominatim position in central Taif | OpenStreetMap | High. **Opening hours not stated** | No |
| 17 | Haramain railway doesn't serve Taif | Line serves Makkah, Jeddah, KAEC, Madinah | Public knowledge / operator | High | No |
| 18 | Taif has its own airport; check flights with airlines | `/airport-transfer/taif-airport` exists; no flight claims made | Site data | High | No |
| 19 | Jeddah Airport (KAIA) → Taif ≈184 km | Stated in the report only (not on the page) | OSRM | High | No |
| 20 | Child-seat wording | The approved sentence, verbatim | Owner | — | Done |

**Not stated anywhere on the page:**
- cable-car hours or fares;
- Shubra Palace or market opening times;
- tolls or their absence;
- fixed prices or 24/7 availability;
- driver experience;
- guaranteed routes or stops.

## 2. Page structure ("the ascent")
1. **Hero:**
   - Al Hada escarpment-road photo, breadcrumbs, the route label and the H1 "Private Transfer from Jeddah to Taif".
   - Story intro; stats (≈165–175 km · ≈2–2.5 h · 10 m → ≈1,970 m).
   - "Request a Quotation" and WhatsApp CTAs.
   - **Desktop height gauge:** five bars, Jeddah → Taif.
2. **Index:** 11 anchors.
3. **At a glance:** answer-first paragraph; a facts table (from, to, distance, time, main road, alternatives); why the journey is distinctive; method.
4. **The journey unfolds:** five altitude-stepped chapters (Leaving Jeddah → past Makkah → approaching the mountains → the climb → reaching Taif). Each has cumulative km, an elevation bar and a photo where available.
5. **Two roads, two different journeys** (signature, granite band):
   - Night-switchback photo.
   - Seven-row comparison table (character, distance, time, terrain, scenery, passengers, conditions).
   - Three notes: non-Muslim passengers and the route around Makkah; Hajj season; road closures.
6. **A closer look at the mountain landscape:** the Sarawat range, climate, haze and cloud, rain closures, traffic; two photos.
7. **Taif beyond the arrival point:** three tiers:
   - **Direct drop-off:** Taif city / Shubra area; Al Hada resorts.
   - **Optional stop by agreement:** viewpoints and the cable car.
   - **Separate trip:** Al Shafa; rose-growing areas.
8. **Travelling with families:** children, older passengers, motion sickness, luggage, and the exact child-seat wording.
9. **Route planning checklist:** "You provide" (nine checkboxes, including whether any passenger is not Muslim) beside "Confirmed in your quotation".
10. **Road travel and the alternatives:** a balanced table (door to door, groups, luggage, time, airport connections) and the railway note.
11. **Vehicles:** table from `data/vehicles.ts`.
12. **How to arrange:** five steps, then the shared QuoteForm (pickup **Jeddah**, drop-off **Taif**, route tag `jeddah-to-taif`, flight field when an airport is typed).
13. **FAQs:** 13; native accordion.
14. Related journeys (8), method note, visible photo credits, final CTA.

## 3. SEO and schema
- **Title:** "Jeddah to Taif Private Transfer | Al Hada Mountain Road".
- **Meta:** "Plan a private transfer from Jeddah to Taif, about 165–175 km up the Al Hada or As-Sayl road. Share your pickup, Taif hotel, date and passengers for a quotation."
- **H1:** "Private Transfer from Jeddah to Taif". A logical H2/H3 hierarchy follows.
- **JSON-LD** (long-route branch):
  - BreadcrumbList.
  - **WebPage** with `primaryImageOfPage` (licence, creator, `acquireLicensePage`).
  - **Service** with areaServed City Jeddah and Taif (GeoCoordinates, `containedInPlace` Makkah Province); provider = the site Organization.
  - **FAQPage** (13 = visible).
  - No ratings, prices, addresses or offers.
- **Geo meta tags: not added.** Per the brief, geographic data appears only as Service `areaServed` coordinates (the established long-route convention). Owner decision below.
- **OG image:** the hero photo. Canonical, hreflang (en + ar) and the sitemap entry are unchanged.

## 4. Images (11; all genuine, licences read from Commons metadata via the Wikipedia API; commercial use permitted)
| File (`public/images/taif/`) | Subject | Author · licence | Check |
|---|---|---|---|
| `al-hada-escarpment-road.webp` (hero) | Al Hada road viaduct on the escarpment | Richard Mortel · CC BY 2.0 | FlickreviewR ✅ |
| `al-hada-road-night.webp` | Al Hada hairpins at night | Sajith Erattupetta · CC BY 4.0 | Own work |
| `al-hada-switchbacks.webp` | Road winding through the Al Hada mountains | Richard Mortel · CC BY 2.0 | FlickreviewR ✅ |
| `al-hada-rock-cut.webp` | Road cutting at Al Hada | Richard Mortel · CC BY 2.0 | FlickreviewR ✅ |
| `al-hada-mountains.webp` | Mountain country at Al Hada | Richard Mortel · CC BY 2.0 | FlickreviewR ✅ |
| `al-hada-haze.webp` | Haze and cloud over the ridges | Richard Mortel · CC BY 2.0 | FlickreviewR ✅ |
| `jeddah-corniche.webp` | Jeddah Corniche | Tahir mq · CC BY-SA 4.0 | Own work |
| `taif-plateau.webp` | Taif plateau landscape | Nick Shields · CC BY 2.0 | FlickreviewR ✅ |
| `al-shafa.webp` | Al Shafa hills | Ziyad Alsufyani · CC BY-SA 4.0 | Own work |
| `taif-rose-harvest.webp` | Taif rose harvest 2026 | Saudi Press Agency · CC BY-SA 4.0 | SPA CC portal |
| `shubra-palace-door.webp` | Shubra Palace doorway | Richard Mortel · CC BY 2.0 | FlickreviewR ✅ |

- **Total size:** ≈1.5 MB WebP. The hero (254 KB) has priority; all others lazy-load with responsive sizes.
- **Credits:** in each caption, plus a full visible credit list.
- **Not used:**
  - A cable-car view (it showed rocks, not the cable car).
  - An Al Shafa road photo (it had a frame border).
- **Asset gaps:**
  - The As-Sayl road.
  - The cable car itself.
  - A licensed route map.
  - Taif city centre and the souq.
  - Genuine fleet photos.

## 5. Internal links (all exist)
`/routes/taif-to-jeddah`, `/routes/jeddah-airport-to-taif`, `/routes/jeddah-to-makkah`, `/routes/jeddah-to-madinah`, `/taxi-service/taif`, `/airport-transfer/taif-airport`, `/airport-transfer/jeddah-airport`, `/distance/jeddah-to-taif-distance`, plus the breadcrumb. Anchors are descriptive and varied.

## 6. Dependent pages with contradictory information (not changed)
| Page | Issue |
|---|---|
| `/routes/taif-to-jeddah` | 170 km / 2 h (close); "fixed price"; "no tolls… anywhere"; "English-speaking driver". It is the reverse of this route and needs the same pass |
| `/routes/jeddah-airport-to-taif` | 175 km / 2 h (OSRM from KAIA ≈184 km / 2.5 h) |
| `/distance/jeddah-to-taif-distance` | "~170–171 km" (consistent) and a "roughly 50-minute flight" mention (unverified) |

**Route cards on other pages** now show the corrected record ("165–175 km · approx. 2–2.5 hours"); see the build comparison.

## 7. Checks
| Check | Result |
|---|---|
| `tsc` | Clean |
| ESLint | New files clean; repo total 10 (existing) |
| Production build (isolated checkout of `84c23d5` + all uncommitted work) | 905/905 |
| Site-wide comparison vs the Jazan build | **12 pages:** `routes/jeddah-to-taif` (title, meta, JSON-LD, main), plus the Jeddah–Taif route card ("165–175 km") on `airport-transfer/jeddah-airport`, `cities/jeddah`, `routes/taif-to-jeddah` and 8 other Jeddah routes. None still shows 170 km |
| HTTP | 200 |
| Canonical / hreflang / robots | Self-canonical; en + ar; `index, follow`; in the sitemap |
| JSON-LD | Parses: BreadcrumbList, WebPage (+ ImageObject), Service, FAQPage(13) |
| Links | 10 internal links in the main content, none missing, no self-links |
| Form | Pickup prefilled **Jeddah** and drop-off **Taif**; serviceType "Jeddah to Taif transfer (Route: jeddah-to-taif)"; posts to the existing `/api/leads`. Not submitted |
| Images | 14 `<img>` (11 photos, some reused; the CTA background has empty alt). Only the hero loads eagerly |
| Claims scan | No fixed price, 24/7, tolls, "guarantee", "experienced/professional", meet-and-greet, tracking, "longest" or prices |
| Overlap | 1.5% vs `/routes/taif-to-jeddah` |
| Density | "jeddah to taif" 0.39%; "al hada" 2.9% (inflated by photo captions and credit titles) |
| Responsive | Desktop 1440 and mobile 500: no page overflow; tables scroll inside frames; the height gauge is desktop-only (the chapter bars carry the same data on mobile) |
| Fixed during QA | Gauge bars not rendering (no definite height); mountain-section photos collapsing in an auto-sized grid column |

## 8. Owner decisions
1. **Route around Makkah:** confirm the bypass road your drivers use, and whether ≈225–240 km is representative.
2. **Optional stops:** will drivers stop at Al Hada viewpoints or the cable car on request, and how is waiting handled?
3. **Geo meta tags:** add them to this page (as on Riyadh–Abha), or keep coordinates only in the schema?
4. **Correct** `/routes/taif-to-jeddah` and `/routes/jeddah-airport-to-taif` next?
5. **Release grouping:** the Jazan work (reports 56–57) and this page both edit `data/routes.ts`, so they should be released together.

---

## 9. Customer-clarity pass (owner feedback, 24 November 2026)

**Files changed:** `data/jeddah-to-taif-route.ts` (copy only) and `components/routes/JeddahTaifRouteView.tsx` (the roads section).

| Area | Before | After |
|---|---|---|
| Al Hada stops | Cable car was an "optional stop… only if agreed"; disclaimers about the operator and weather | Welcoming "Fancy a stop at Al Hada?" callout in the road section (with an "Add it to your request" link). Stop mentioned in the glance facts ("On the way"), the climb chapter, the "Stops on the way" tier, the checklist, the final CTA and the FAQs: "Mention it when you request your quotation and the arrangements will be confirmed with you" |
| Road section | "Two roads" with a 7-row Al Hada vs As-Sayl table; 225–240 km bypass; road-selection wording | "The road up the mountain": a 4-row "What to expect" table (road, climb, views, passengers). "You don't need to choose or plan the route: we take care of that and confirm it in your quotation" |
| Makkah / Hajj | Bypass distance; separate Hajj and closure cards | One short note: "Makkah is open only to Muslims… just tell us when you enquire and we'll plan the journey around the city; it takes a little longer". Hajj and closures merged into one plain sentence (legally relevant information kept) |
| Mountain conditions | "sudden closures", "keep plans flexible", "check road notices" | Cloud, cool evenings and summer traffic, with friendly advice (extra time, a light layer) |
| Beyond arrival | "Direct drop-off / Optional stop… only if agreed / Separate trip… quoted on its own terms" | "Your destination / Stops on the way: just mention them when you request your quotation / Trips around Taif: ask when you enquire" |
| Families | Suggested choosing the As-Sayl road | "Tell us and we'll plan the journey and pace around them" |
| Checklist (confirmed) | "The road used (Al Hada, As-Sayl or around Makkah)", "Any agreed stop and waiting" | "Your route and any stops you've asked for" |
| FAQs (13, same questions) | Bypass km, "only if your quotation says so", operator and weather caveats | Simplified, welcoming answers; the cable-car question now reads "Can we stop at Al Hada or the cable car on the way?" |
| Method note | Listed closure and Makkah sources; "Check current conditions" | Sources kept briefly; no warning |

**Deliberately untouched:**
- Hero, chapters, photos, credits and licences.
- Distances, times and elevations.
- Metadata, canonical, hreflang and structured data (the FAQ count is still 13).
- Internal links; the quote form and prefills (Jeddah → Taif); vehicles; the options table; responsive design.

**Verified:**
- "Stop at Al Hada" appears 11 times.
- As-Sayl appears only in the one comparison FAQ.
- There are no bypass figures, and no "only if", guarantee, fixed-price or 24/7 wording.
- `tsc` and lint are clean.
- Desktop and mobile screenshots checked.
