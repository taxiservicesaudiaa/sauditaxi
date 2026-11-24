# 54 — Abha city page rebuild + final Abha consistency report (local only)

**Date:** 24 November 2026. **Nothing committed, pushed or deployed. No indexing requests. No production lead submitted. CMS and Arabic content untouched.**

---

## Part A: `/taxi-service/abha` rebuild

### A1. Fact sheet

| Fact | Value | Source |
|---|---|---|
| Abha | Capital of the Asir Region, south-western Saudi Arabia; ≈2,220 m | DEM (Copernicus via Open-Meteo); general reference |
| Green Mountain (Al-Jabal Al-Akhdar) | Inside Abha, ≈1.3 km S of the centre; lit green at night | OpenStreetMap / Nominatim; Commons photo |
| Abha Dam Lake | ≈2 km W of the centre | OpenStreetMap / Nominatim |
| Abha International Airport (AHB) | ≈20 km by road, east, towards Khamis Mushait | OSRM |
| Khamis Mushait | ≈30 km by road, ENE; ≈1,990 m | OSRM; DEM |
| Al-Soudah | ≈23 km by road, WNW; ≈2,960 m | OSRM; DEM |
| Rijal Almaa | ≈52 km by road, W; ≈1,130 m; steep escarpment road | OSRM; DEM |
| Habala | ≈55 km by road (Habala Park), ESE; ≈2,400 m clifftop; cable car | OSRM; DEM; Commons photo description |
| Weather | Summer peak season; fog and cloud at altitude, especially early morning | Existing site guidance; general reference |
| Abha ↔ Riyadh | 940–960 km, ≈11–12 h | OSRM + Valhalla |
| AHB → Riyadh | 935–950 km, ≈11–12 h | OSRM + Valhalla |
| Abha → Jeddah | OSRM 682 km / 7.8 h; **records say 620 km / 6 h 30** | Not shown on the page; flagged |

**Three categories kept separate on the page:**
1. **General tourism information:** what each place is like.
2. **Requestable:** every place is labelled "Local transfer", "Sightseeing request" or "City-to-city transfer".
3. **Confirmed served:** **nothing is presented as confirmed**. Availability, stops and waiting are always "confirmed in your quotation".

### A2. Structure ("highlands" layout, unique on the site)
1. **Hero:**
   - Green Mountain night photo with a facts strip (Asir · ≈2,200 m · AHB ≈20 km).
   - H1 "Private Transfers in Abha" and a two-paragraph story intro.
   - CTAs: "Request a Quotation" and "City Transfers Overview".
2. **"On this page" index** (9 anchors).
3. **Abha and the wider Asir region** (dark band):
   - Answer-first summary.
   - **To-scale orientation diagram** (5/25/50 km rings, true bearings from coordinates, road distances in labels).
   - The NASA ISS night photograph of Abha and Khamis Mushait.
4. **Getting from Abha Airport to your destination:** four steps (flight details, exact address, quotation confirms pickup availability and meeting point, follow the confirmed arrangements), plus a link to the airport page.
5. **Travelling around Abha and Asir:** six editorial rows, each with a photo where one exists, a journey-type tag, distance and direction, description and a "Transport:" note. Covers Green Mountain, Dam Lake, Al-Soudah, Habala, Rijal Almaa and Khamis Mushait, followed by a three-photo strip.
6. **Which type of journey do you need?** A seven-row board: airport to hotel, hotel to airport, hotel to attraction, attraction to attraction, Abha to Khamis Mushait, another city, families and groups. A note links the hotel-transfers service.
7. **Planning a sightseeing day:** six tips, labelled as general advice, plus a weather callout.
8. **Family and group travel:** fleet table from `data/vehicles.ts` and the exact child-seat statement.
9. **Abha to other Saudi cities:** seven route links. Figures appear only where re-measured (both Riyadh directions and AHB → Riyadh).
10. **How to request:** five steps, "The confirmed quotation sets the agreed price…", WhatsApp, and the shared QuoteForm (pickup "Abha", flight field only when an airport is typed).
11. **FAQs:** 14, the briefed questions.
12. **Method note, visible photo credits, final CTA.**

### A3. SEO, metadata and schema
- **Title:** "Private Transfers in Abha | Airport, City & Asir Trips".
- **Meta:** "Private transfers around Abha and the Asir highlands: airport, hotels, Al-Soudah, Habala and Khamis Mushait. Share your plans to receive a quotation."
- **OG image:** Green Mountain photo.
- **Geo meta:** `geo.region` SA-14, `geo.placename` "Abha, Asir Region, Saudi Arabia", `geo.position` and ICBM 18.2164;42.5053 (city centre). Supported by the on-page geography.
- **Unchanged:** canonical self; hreflang en + ar (existing Arabic page); `index, follow`; in the sitemap; breadcrumb Home › City Transfers › Abha Taxi.
- **JSON-LD:**
  - BreadcrumbList.
  - **WebPage** with `primaryImageOfPage` (licence, creator, `acquireLicensePage`).
  - **Service** with `@id`, provider = the site Organization, areaServed **City Abha** with GeoCoordinates and `containedInPlace` Asir Region.
  - **FAQPage** (14, matching the visible FAQs).
  - The page-level duplicate **TaxiService was removed** for Abha only (the site-wide block remains).
  - No ratings, prices, hours or addresses.
- **Headings:** one H1, 10 H2s, H3s per item.

### A4. Images (10, all genuine; licences checked via the Wikipedia API, commercial use permitted)
| File | Subject | Author · licence | Review status |
|---|---|---|---|
| `green-mountain-night.webp` **(new)** | Green Mountain, Abha | Basheer Olakara · CC BY 2.0 | FlickreviewR ✅ |
| `iss-abha-khamis-mushait.webp` **(new)** | ISS photo, May 2025 | NASA JSC · public domain | US Government work ✅ |
| `abha-dam-lake.webp` **(new, different file)** | Abha Dam Lake | Aboluay · CC BY-SA 4.0 | Own work ✅ |
| `abha-city-view.webp` | Abha city | Aiman titi · CC BY-SA 3.0 | Own work ✅ |
| `abha-street-mountains.webp` | Street in Abha | Basheer Olakara · CC BY 2.0 | FlickreviewR ✅ |
| `abha-cable-car.webp` | Cable car over Abha | Aiman titi · CC BY-SA 3.0 | Own work ✅ |
| `al-soudah-mountains.webp` (also the CTA background) | Al-Soudah | marviikad · CC BY-SA 2.0 | Flickr upload bot |
| `al-soudah-green-slopes.webp` | Al-Soudah slopes | Irshadpp · CC BY-SA 4.0 | Own work ✅ |
| `habala-valley.webp` | Habala cliffs | Wajahatmr · CC BY-SA 3.0 | Own work ✅ |
| `rijal-almaa-village.webp` | Rijal Almaa | Richard Mortel · CC BY 2.0 | FlickreviewR ✅ |

- The new dam photo replaces the earlier unverifiable saudipics file. It's an own-work upload, not a stock-site credit.
- Every caption shows author and licence. The full credit list (title, author, licence link, source link, "resized and converted to WebP") is visible at the end of the page.
- **Loading:** the hero is priority; everything else is lazy-loaded via `next/image`.
- **Gaps:**
  - Khamis Mushait (an urban photo; the card uses a text panel).
  - Abha International Airport terminal.
  - Asir traditional architecture in Abha itself (e.g. Al-Muftaha).
  - Genuine fleet photos.

### A5. Internal links (13 on page, all exist)
`/city-transfers`, `/airport-transfer/abha-airport`, `/taxi-service/khamis-mushait`, `/services/hotel-transfers`, `/routes/abha-to-riyadh`, `/routes/riyadh-to-abha`, `/routes/abha-airport-to-riyadh`, `/routes/abha-to-jeddah`, `/routes/jeddah-to-abha`, `/routes/makkah-to-abha`, `/routes/abha-airport-to-jeddah`, `/blog/riyadh-to-abha-transfer-guide`, plus the breadcrumb.

**Links back to this page:**
- `/routes/riyadh-to-abha` (existing).
- `/routes/abha-to-riyadh` (**added**: "Abha transfers").
- `/airport-transfer/abha-airport` (existing card and CTA).

There is no `riyadh-to-abha-airport` route, so it isn't linked.

---

## Part B: Report 53 corrections (applied)

| Page | Changes |
|---|---|
| `/routes/abha-to-riyadh` | Rewritten record. 940–960 km / approx. 11–12 h. Return-journey intent: leaving the highlands as a gradual descent (not a winding mountain descent), single-day journey (overnight not offered), RUH drop-off with "flight changes aren't tracked automatically", families, luggage and child seats, quotation. Six new FAQs. New title and meta. Removed fixed price, tolls, 24/7, tracking, "experienced drivers" and free rest stops |
| `/routes/abha-airport-to-riyadh` | Record and airport-content rewritten. 935–950 km / 11–12 h. **No flight-tracking, arrivals-hall, name-board, waiting or luggage-help claims.** Arrival and booking steps overridden ("pickup point confirmed with your booking"). Route "past Khamis Mushait and Bisha" (no Wadi ad-Dawasir). Overnight not offered; child seats on request. Five FAQs |
| `/cities/riyadh` card | Now "Private road transfer from Abha International Airport (AHB)…", fed by the corrected record |
| `/taxi-service/abha` | Superseded by Part A. The Abha guide in `city-guides.ts` was also corrected (name board, fixed price, Najran/Jazan wording), though the new layout no longer renders it |
| Blog | Replacement text in **53b** (CMS not touched) |
| Arabic | Reviewer change list in **53c** (Arabic not touched) |

## Part C: Consistency matrix after the changes

| Page | Distance / time | Pricing | Airport claims | Overnight | Child seats |
|---|---|---|---|---|---|
| `/routes/riyadh-to-abha` | 940–960 km · 11–12 h ✅ | Quotation ✅ | n/a | Not offered ✅ | On request ✅ |
| `/routes/abha-to-riyadh` | 940–960 km · 11–12 h ✅ | Quotation ⚠ (shared template sentence; see C1) | RUH: not tracked automatically ✅ | Not offered ✅ | On request ✅ |
| `/routes/abha-airport-to-riyadh` | 935–950 km · 11–12 h ✅ | Quotation ✅ | No tracking or meet claims ✅ | Not offered ✅ | On request ✅ |
| `/taxi-service/abha` | Verified figures only ✅ | Quotation ✅ | Pickup confirmed individually ✅ | Not mentioned (n/a) | On request ✅ |
| `/cities/riyadh` (cards) | ✅ | — | — | — | — |
| Route cards on `/airport-transfer/abha-airport`, `/routes/abha-to-jeddah`, `/routes/abha-airport-to-jeddah`, `/routes/madinah-airport-to-riyadh` | Updated to the corrected figures ✅ | — | — | — | — |
| Blog (CMS) | ⏳ 53b text ready | ⏳ | ⏳ | ⏳ | ⏳ |
| Arabic pages | ⏳ 53c list ready | ⏳ | ⏳ | ⏳ | ⏳ |

**Search-intent separation:**
- `/taxi-service/abha` covers the city and regional trips.
- `/airport-transfer/abha-airport` covers airport pickup and drop-off.
- Each route URL covers one origin–destination journey.

Overlap of unique copy:
- Abha page vs airport page: 0.1%.
- Abha page vs Abha to Riyadh: 2.2%.
- Abha page vs Riyadh to Abha: 8.2% (mostly the shared photo-credit list and vehicle table).
- Abha to Riyadh vs Riyadh to Abha: 5.1%.

### C1. Found during QA, not changed (needs your approval)
1. **Shared route template sentence** (`lib/route-composer.ts`): "…see [reverse route] for **fixed pricing** and door-to-door pickup on the return leg." It appears on **88 route pages**, including `/routes/abha-to-riyadh`. Suggested one-line fix: "…see [reverse route] for the return journey." That would change those 88 pages, which is why it hasn't been done yet.
2. **`/airport-transfer/abha-airport`** (shared airport hub) still says:
   - "your driver waits in the hall with a name board";
   - "We track your flight";
   - "free wait time… fixed price";
   - "meet-and-greet";
   - "drivers assist with luggage";
   - "no prepayment required".
   This contradicts your decision that Abha airport arrangements are not confirmed. It needs a pass of its own, like the DMM page.
3. **Abha ↔ Jeddah records** (`abha-to-jeddah`, `jeddah-to-abha`, `abha-airport-to-jeddah`) say 620 km / 6 h 30. OSRM gives Abha → Jeddah 682 km / 7.8 h and AHB → Jeddah 698 km / 8.0 h. `makkah-to-abha` was not measured against its record. Not shown on the Abha page until corrected.

## Part D: Checks

| Check | Result |
|---|---|
| `tsc` | Clean |
| ESLint | New files clean; full repo 10 problems, the same as the baseline |
| Production build (isolated: Riyadh–Abha + 53 + 54 files; **no Dammam files**) | 905/905 |
| HTTP | `/taxi-service/abha` returns 200 (dev and build) |
| Site-wide comparison vs the Riyadh–Abha-only build | **8 pages:** `taxi-service/abha`, `routes/abha-to-riyadh`, `routes/abha-airport-to-riyadh` (title, meta, JSON-LD, main), and route-card text on `airport-transfer/abha-airport`, `cities/riyadh`, `routes/abha-airport-to-jeddah`, `routes/abha-to-jeddah`, `routes/madinah-airport-to-riyadh` |
| Canonical / hreflang / robots | Correct on all three edited pages |
| JSON-LD | All parse. Abha: Breadcrumb, WebPage, Service, FAQPage(14). Abha to Riyadh: Breadcrumb, Service, FAQPage(6). AHB to Riyadh: Breadcrumb, Service, FAQPage(5) |
| Links | 13 / 8 / 9, none missing, no self-links |
| Claims scan | No fixed price, 24/7, free waiting, name board, meet-and-greet, luggage help or flight tracking on the three edited pages. "Overnight" appears only as "not offered". "Tracked" appears only as "not tracked automatically". Exception: the template sentence in C1 |
| Responsive | Desktop 1440 and mobile 500: no page overflow; tables scroll in their own frames; the diagram scales. Mobile hero gets an extra dark overlay for contrast |
| Form | Shared QuoteForm unchanged; serviceType "Abha city transfer (City: Abha)", pickup prefilled "Abha", flight field when an airport is typed. Not submitted |
| Density | "abha" 3.3% of 2,638 words. Much of this comes from captions, photo-credit titles and destination names |

## Part E: Files

**Abha release (53 + 54, together with the Riyadh–Abha release 52):**

| File | Status |
|---|---|
| `data/abha-city-page.ts` | New |
| `components/city-transfer/AbhaCityView.tsx` | New |
| `app/(main)/taxi-service/[city]/page.tsx` | Abha branch, schema, geo meta and OG for Abha only |
| `data/cities.ts` | Abha `metaTitle` / `metaDescription` |
| `data/city-guides.ts` | Abha guide wording (name board, fixed price) |
| `data/routes.ts` | `riyadh-to-abha` (52), `abha-to-riyadh`, `abha-airport-to-riyadh` |
| `data/airport-route-content.ts` | `abha-airport-to-riyadh` entry |
| `public/images/asir/` | `green-mountain-night`, `iss-abha-khamis-mushait`, `abha-dam-lake` (new file) + the files from 52 |
| From 52 | `data/riyadh-to-abha-route.ts`, `components/routes/RiyadhAbhaRouteView.tsx`, `data/long-route-pages.ts`, `app/(main)/routes/[slug]/page.tsx` |
| Reports | 52, 53, 53b, 53c, 54 |

- **Shared file:** `data/routes.ts` holds records from 52 and 53, so 52, 53 and 54 should be released together.
- **Kept separate:** the Dammam release (`app/(main)/airport-transfer/[airport]/page.tsx`, `data/airports.ts`, `data/dammam-airport-page.ts`, `components/airport-transfer/DammamAirportView.tsx`, report 51) shares no files with them.

## Part F: Open questions
1. Approve the one-line template fix for the 88 "fixed pricing" sentences (C1-1)?
2. Schedule an Abha Airport hub pass, as was done for DMM (C1-2)?
3. Correct the Abha ↔ Jeddah records (C1-3)?
4. Do Habala's cable car and the Al-Soudah area operate year-round? The page only describes them, with no access promise.
5. Photo gaps: Khamis Mushait, the AHB terminal, Asiri architecture in Abha, and fleet photos.
