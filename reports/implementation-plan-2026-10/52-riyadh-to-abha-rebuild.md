# 52 — Riyadh to Abha: complete rebuild (local only)

**Date:** 24 November 2026 · **URL:** `/routes/riyadh-to-abha` (unchanged).
Nothing committed, pushed or deployed. No indexing requests and no production lead.

## 1. What was wrong with the previous page

| Item | Finding |
|---|---|
| Distance / time | "~830 km / About 8 hours 45 min". **Wrong:** the road is about 950 km and 11–12 hours |
| Claims | Fixed price; "no toll roads… anywhere in Saudi Arabia"; "tracked service"; drivers "familiar with the mountain roads around Al-Soudah"; "English-speaking driver"; "one of the longer domestic routes we offer" |
| Template | The generic intercity template: repetitive sections and no route explanation |
| Title / meta | "Book a Riyadh to Abha Transfer – Private Car Service" / "(~830 km…) …fixed price" |
| Images | Generic themed hero |
| Pages | `/cities/abha` **does not exist**. The Abha pages are `/taxi-service/abha`, `/airport-transfer/abha-airport` and the blog guide |

## 2. Verified route facts

| Measure | Source | Result |
|---|---|---|
| Central Riyadh → central Abha | OSRM (OpenStreetMap) | **946 km, 11.3 h** |
| Same | Valhalla (FOSSGIS) | **955 km, 12.2 h** |
| Abha → Riyadh | OSRM | 945 km |
| King Khalid International Airport → Abha | OSRM | 977 km (+≈30 km) |
| **Published** | | **About 940–960 km; roughly 11–12 hours of driving, before stops** |

- **Corridor (OSRM geometry):**
  - The road leaves Riyadh westwards and runs south-west across the Riyadh Region plateau.
  - It passes within ≈11 km of **Bisha** at ≈690 km and goes through **Khamis Mushait** at ≈910 km.
  - Other names returned by reverse geocoding were governorates, not towns on the road, so they aren't used.
- **Elevations (Copernicus DEM via Open-Meteo, sampled every ≈20 km):** Riyadh ≈630 m; Bisha ≈1,160 m; Khamis Mushait ≈1,990 m; Abha ≈2,220 m; Al-Soudah ≈2,900 m+; Habala clifftop ≈2,400 m; Rijal Almaa ≈1,100 m.
- **From Abha (OSRM):** airport ≈20 km; Al-Soudah ≈23 km; Khamis Mushait ≈30 km; Rijal Almaa ≈52 km; Habala Park ≈55 km.

## 3. New structure: "the climb"

1. **Hero:**
   - A full-bleed Al-Soudah photo, with the real elevation profile drawn as a skyline along the bottom edge.
   - H1 as briefed, the intro, "Request a Quotation" / "Explore the Journey", and stats (≈940–960 km · ≈11–12 h · 630 m → 2,220 m).
   - The photo credit is shown in the hero.
2. **Chapter bar:** 12 numbered anchors. Each chapter heading also shows the altitude reached at that point in the journey.
3. **At a glance:** an answer-first paragraph, a facts table (origin, destination, distance, time, type, waypoints) and a note on both routing sources.
4. **Leaving Riyadh:** narrative with a drop cap, the KAFD photo and a Riyadh taxi link.
5. **Understanding the route:**
   - Direct answer.
   - **Interactive-free SVG elevation profile** with Riyadh, Bisha, Khamis Mushait and Abha marked. It scrolls inside its own frame on mobile.
   - Cumulative-distance chips and a historical photo of Bisha's old fort.
6. **The changing landscape:** three stepped stage cards that rise as you go (central plateau, rising south-west, Asir highlands) and two photos.
7. **Approaching Abha:** location, ≈2,200 m, climate, Asiri architecture and Al-Qatt Al-Asiri (UNESCO intangible heritage), plus a three-photo mosaic (city view, cable car, dam lake).
8. **Road or air:** an honest comparison table, with links to the Abha Airport and Riyadh Airport pages.
9. **Planning:** seven general-advice tips, explicitly labelled as not describing included services, and an overnight note (not included; confirmed in the quotation).
10. **Beyond Abha:** cards for Al-Soudah, Rijal Almaa, Habala (with photos) and Khamis Mushait (link). "Separate request; extra stops and waiting not included unless quoted."
11. **Vehicles:** table from `data/vehicles.ts` (category, suits, passengers, luggage, long-journey note).
12. **Checklist:** the nine briefed items as native checkboxes.
13. **Booking:** four steps, then the shared **QuoteForm** (pickup "Riyadh", drop-off "Abha", route tag `riyadh-to-abha`, flight field only if an airport is typed) and WhatsApp.
14. **FAQs:** the 12 briefed questions, with no repeated answers.
15. **Related journeys, method note, collapsible photo credits, final CTA:** "Planning Your Journey to Abha?"

## 4. Metadata, geo tags and schema

- **Title:** "Riyadh to Abha Private Transfer | Road Trip to Asir".
- **Meta:** "Plan a private road transfer from Riyadh to Abha, about 950 km into the Asir mountains. Share your pickup, Abha destination, date and passengers for a quotation."
- **Geo meta tags:**
  - `geo.region` = SA-14 (Asir)
  - `geo.placename` = "Abha, Asir Region, Saudi Arabia"
  - `geo.position` = 18.2164;42.5053
  - `ICBM` = "18.2164, 42.5053"
- **OG image:** the Al-Soudah photo (this page only).
- **Unchanged:** canonical self; hreflang en + ar; `index, follow`; in the sitemap.
- **JSON-LD:**
  - BreadcrumbList.
  - **WebPage** with `primaryImageOfPage` ImageObject (caption, `creditText`, `creator`, `license`, `acquireLicensePage`).
  - **Service** with areaServed **City** nodes Riyadh and Abha, each with `GeoCoordinates` and `containedInPlace` (Riyadh Region / Asir Region).
  - **FAQPage** (12).
  - No ratings, prices, hours or addresses.

## 5. Images

| File (`public/images/asir/`) | Subject | Author · licence (Wikimedia Commons) |
|---|---|---|
| `al-soudah-mountains.webp` (hero, also the Al-Soudah card) | Al-Soudah mountains | marviikad · CC BY-SA 2.0 |
| `al-soudah-green-slopes.webp` | Slopes near Al-Soudah | Irshadpp · CC BY-SA 4.0 |
| `abha-street-mountains.webp` | Street in Abha | Basheer Olakara · CC BY 2.0 |
| `abha-city-view.webp` (also the CTA background) | Abha city view | Aiman titi · CC BY-SA 3.0 |
| `abha-cable-car.webp` | Cable car over Abha | Aiman titi · CC BY-SA 3.0 |
| ~~`abha-dam-lake.webp`~~ | Abha Dam lake | **Removed in the revision.** Licence not verifiable (see section 11) |
| `rijal-almaa-village.webp` | Rijal Almaa village | Richard Mortel · CC BY 2.0 |
| `habala-valley.webp` | Habala cliffs | Wajahatmr · CC BY-SA 3.0 |
| `bisha-old-fort.webp` | Bisha old fort (historical) | Harry F. Cameron, USACE · public domain |
| `/images/journey/riyadh-skyline.jpg` (existing) | KAFD, Riyadh | Project asset |

- **Licences:** read from each file's Commons metadata via the Wikipedia API. Each photo is credited in its caption, and the full credits (licence links, source pages, "resized") are in a collapsible list.
- **File sizes:** WebP, 1.1 MB total for nine files; the hero is 255 KB.
- **Not used:** AI-generated images and the unidentified desert-road photo.
- **Missing:**
  - A genuine photo of the Riyadh–Bisha highway or the central plateau.
  - The approach road between Khamis Mushait and Abha.
  - Genuine fleet photos.
  - A Khamis Mushait photo (the card uses an icon instead).

## 6. Internal links (11, all exist)

| Group | Links |
|---|---|
| In the story | `/taxi-service/riyadh`, `/taxi-service/abha`, `/airport-transfer/abha-airport`, `/airport-transfer/riyadh-airport`, `/taxi-service/khamis-mushait` |
| Related | `/routes/abha-to-riyadh`, `/routes/jeddah-to-abha`, `/routes/makkah-to-abha`, `/blog/riyadh-to-abha-transfer-guide`, `/intercity-transfers` |
| Breadcrumb | `/` |

No Al-Soudah or Rijal Almaa pages exist, so none were linked or created.

## 7. Checks

| Check | Result |
|---|---|
| `tsc` | Clean |
| ESLint | New files clean; full repo 10 problems, the same as the baseline (`getBorder` in the route page predates this work) |
| Production build (isolated checkout of `1709496` + Abha files only) | 905/905 |
| Site-wide comparison | `routes/riyadh-to-abha` (title, meta, JSON-LD, main), plus route-card text on `/cities/riyadh` and `/routes/abha-to-riyadh` (new distance). Nothing else |
| Claims scan | No fixed price, 24/7, tracked, toll, driver-skill, included-meal or overnight promises. "Guarantee" appears only in "not guarantees" |
| Density | "riyadh to abha" 1.16%; 2,822 words |
| Overlap | 1.6% vs `abha-to-riyadh`; 2.2% vs `riyadh-to-neom` |
| Images | 12 rendered: the hero eager/priority, the rest lazy; accurate alt text; the CTA background has empty alt (decorative) |
| Responsive | Desktop 1440 and mobile 500: no page overflow. Tables and the elevation chart scroll inside their own frames |
| Form | The shared `QuoteForm` posts to the existing `/api/leads` with serviceType "Riyadh to Abha transfer (Route: riyadh-to-abha)". Not submitted |

## 8. Changed files (Abha release; separate from the uncommitted Dammam rebuild)

| File | Change |
|---|---|
| `data/riyadh-to-abha-route.ts` | **New.** Copy, sources, elevation profile, photo credits, 12 FAQs |
| `components/routes/RiyadhAbhaRouteView.tsx` | **New.** Layout |
| `public/images/asir/*.webp` | **New.** Nine licensed photos |
| `data/long-route-pages.ts` | `"abha"` view; optional `places`, `geo`, `ogImage` and image `credit` fields; `riyadh-to-abha` entry |
| `app/(main)/routes/[slug]/page.tsx` | Abha branch. Geo meta and OG override **only when the registry sets them**. ImageObject licence fields and City GeoCoordinates **only when provided**. Other registry pages output unchanged |
| `data/routes.ts` | The `riyadh-to-abha` record only (+ `ABHA_FAQS` import) |
| `reports/…/52-riyadh-to-abha-rebuild.md` | This report |

Shared files with the Dammam release: none.

## 9. Related pages needing separate correction (not changed)

| Page | Problem |
|---|---|
| `/routes/abha-to-riyadh` | ~830 km / 8 h 45; fixed price; "No toll roads apply on this route or anywhere"; "fixed-price quote" |
| `/routes/abha-airport-to-riyadh` | 950 km / 9 hours (distance roughly right, time too short) |
| `/cities/riyadh` | Abha Airport → Riyadh card "950 km · 9 hours" (fed by the record above; **corrected from an earlier misreading of 1,050 km**) |
| `/blog/riyadh-to-abha-transfer-guide` | "830 km… nearly 9 hours"; "about nine hours" |
| `/taxi-service/abha` | "Fixed-price long-distance transfers…" |

## 10. Owner decisions
1. Approve the use of the Wikimedia Commons photos under their CC licences, with the attribution as shown.
2. Overnight breaks on this route: offered? (Currently "ask; confirmed in your quotation".)
3. Child seats: currently "agreed and confirmed in your quotation".
4. Whether the five related pages above should be corrected next. See report 53.

---

## 11. Revision, 24 November 2026 (after owner review)

### Operational confirmations applied
| Topic | Owner decision | Where it now appears |
|---|---|---|
| Overnight stops | **Not offered** | Planning note: "Overnight stops and accommodation aren't offered on this route. The transfer is planned as a single-day journey with breaks." New FAQ "Can the journey be split with an overnight stop?" ("No…"). Route-record note "A single-day journey with breaks". Removed from the method note and form placeholder |
| Child seats | **On request; availability confirmed** | New planning tip "Request child seats early"; vehicle intro; checklist item "Child seats needed (number and ages)"; new FAQ "Can I request a child seat?"; quote-form message placeholder; quotation-info FAQ |

FAQs are now 14, and the FAQPage schema matches.

### Image licence verification
- **Method:** every file's metadata re-read via the Wikipedia API: `LicenseShortName`, `UsageTerms`, `AttributionRequired`, `Restrictions`, `Artist`, `Credit`, and the Commons review categories.
- **Commercial use:** all remaining files are CC BY 2.0, CC BY-SA 2.0/3.0/4.0 or public domain, so commercial use is permitted. None lists additional restrictions.

| File | Licence | Source / review status | Kept |
|---|---|---|---|
| Al Sawda peak.jpg (marviikad) | CC BY-SA 2.0 | Flickr, imported by the Commons Flickr upload bot (licence checked at import; no separate reviewer category) | ✅ |
| Al Sowda Hill top 06.jpg (Irshadpp) | CC BY-SA 4.0 | Uploader's own work | ✅ |
| ABHA (6348527614).jpg (Basheer Olakara) | CC BY 2.0 | Flickr, **FlickreviewR-verified** | ✅ |
| Abha 12.jpg / Abha 29.jpg (Aiman titi) | CC BY-SA 3.0 | Uploader's own work | ✅ |
| Rijal Almaa village 2021.jpg (Richard Mortel) | CC BY 2.0 | Flickr, **FlickreviewR-verified** | ✅ |
| Living on the verge of Habala Valley.jpg (Wajahatmr) | CC BY-SA 3.0 | Uploader's own work | ✅ |
| 513 Cameron old fortress (Harry F. Cameron, USACE, 1968) | Public domain (US Government work) | USACE digital library | ✅ |
| سد أبها1W8796.jpg (saudipics) | CC BY-SA 4.0 claimed | Credited to a commercial stock site (saudipics.com) with **no recorded permission** on Commons | ❌ **removed** (file deleted; the Abha mosaic now uses the Abha street photo) |

- **Credits:** each photo's caption shows the author and licence.
- **Full credit list:** now always visible (not collapsed). Each entry gives the work title, author, a licence link, a Commons source link and "resized and converted to WebP". The Riyadh photo is credited to the project.
- **Share-alike:** only resizing and format conversion were applied, with no other adaptation.

### Factual-verification checklist

| # | Fact on the page | Source / method | Status |
|---|---|---|---|
| 1 | Riyadh → Abha about 940–960 km | OSRM 946 km; Valhalla 955 km (central points) | ✅ |
| 2 | Roughly 11–12 hours of driving, before stops | OSRM 11.3 h; Valhalla 12.2 h | ✅ |
| 3 | Route south-west across Riyadh Region, past Bisha, through Khamis Mushait | OSRM geometry (Bisha ≈11 km off-route at ≈690 km; Khamis Mushait on-route at ≈910 km) | ✅ |
| 4 | RUH pickup adds roughly 30 km | OSRM RUH → Abha 977 km | ✅ |
| 5 | Elevations: Riyadh ≈630 m, Bisha ≈1,160 m, Khamis Mushait ≈1,990 m, Abha ≈2,220 m | Copernicus DEM via Open-Meteo | ✅ |
| 6 | Al-Soudah close to 3,000 m, ≈23 km from Abha | DEM ≈2,960 m; OSRM 23 km | ✅ |
| 7 | Rijal Almaa ≈1,100 m, ≈52 km from Abha | DEM ≈1,130 m; OSRM 52 km | ✅ |
| 8 | Habala ≈55 km, south-east of Abha, cable car | OSRM 55 km (Habala Park); Commons photo taken from the cable car | ✅ |
| 9 | Khamis Mushait ≈30 km; Abha airport ≈20 km | OSRM | ✅ |
| 10 | Abha is the capital of the Asir Region, south-western Saudi Arabia | General reference | ✅ |
| 11 | Al-Qatt Al-Asiri on UNESCO's intangible heritage list | UNESCO inscription (2017) | ✅ |
| 12 | Riyadh to Jeddah comparable in length | Site route data, Riyadh–Jeddah 950 km | ✅ |
| 13 | Vehicle capacities | `data/vehicles.ts` | ✅ |
| 14 | Overnight stops not offered; child seats on request | Owner, 24 Nov 2026 | ✅ |
| 15 | No fixed price, 24/7, tracking, tolls, driver-skill, meals or accommodation claims | Claims scan of the rendered page | ✅ |
