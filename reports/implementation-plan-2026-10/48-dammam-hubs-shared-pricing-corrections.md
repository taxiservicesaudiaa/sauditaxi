# 48 — Dammam hubs, hotel distances and site-wide quotation wording

**Date:** 21 November 2026 · Local only. **Nothing committed, pushed or deployed.** No page deleted, noindexed, merged, redirected or removed from the sitemap. URLs, canonicals and hreflang are unchanged.

## 0. Flight tracking (A5)

The brief says flight tracking was "not confirmed". The owner's message of 21 Nov (report 47, decision 2) states **"Flight tracking: yes"**, an explicit reconfirmation. Tracking wording is therefore **kept** on the Abqaiq airport page, the Dammam Taxi page, the DMM hub and the DMM notice. If that decision is withdrawn, the lines to revert are in §2 (marked ✈).

## 1. Changed files (vs `00f5234`)

**Four-route + Dammam/pricing release:**

- Templates (`app/(main)/…`):
  - `routes/[slug]/page.tsx`
  - `cities/[city]/page.tsx`
  - `airport-transfer/[airport]/page.tsx`
  - `border-transfers/[border]/page.tsx`
  - `distance/[slug]/page.tsx`
  - `get-quote/page.tsx`
  - `page.tsx`
  - `services/page.tsx`
  - `services/hotel-transfers/page.tsx`
  - `sitemap/page.tsx`
  - `taxi-service/[city]/page.tsx`
  - plus `app/ar/[...slug]/page.tsx` (code only: null-distance handling; **no Arabic text changed**)
- Components:
  - `QuoteForm.tsx`
  - `about/` AboutExperienceTimeline, AboutFinalCTA, AboutWhatWeDo, AboutWhoWeAre
  - `blog/` BlogInlineCta, BlogSidebar
  - `city-hub/` HotelTransferHubView, MadinahAirportHubView (type only)
  - `home/` HomeBookingSteps, HomeFinalCTA, HomeHero, HomePrivateTravelBenefits, HomeRouteExplorer
  - `sections/` CTASection, HowItWorks, RouteGrid, ServiceCards, TrustSection, WhyChooseUs
  - `templates/PointTransferView.tsx`
  - the eight new `routes/*` views and forms from reports 41–44
- Data:
  - modified: `airport-guides.ts`, `airport-status.ts`, `airports.ts`, `city-airport-route-content.ts`, `city-guides.ts`, `dammam-routes.ts`, `hotels.ts`, `long-route-pages.ts`, `routes.ts`
  - new: the four route content files
- Library:
  - modified: `hotel-transfers.ts`, `route-composer.ts`
  - new: `lib/airport-ops.ts`
- Locale: `locales/en/common.json`
- Reports: 41–44, 46, 47, 48, 48b

**Ziyarat release (separate):**

- `app/(main)/[city]/[route]/page.tsx` (Ziyarat branch), `data/point-transfer-v2/makkah.ts`, `components/makkah/*`, `data/makkah-ziyarat-tour.ts`, report 45.

⚠ **`app/(main)/[city]/[route]/page.tsx` now holds changes for both releases.** Its hotel-page template (part C) and the Ziyarat branch live in the same file. When committing the non-Ziyarat release, this file must be committed **without** the Ziyarat hunks (the import block and the `if (v2Path === ZIYARAT_PATH)` branch). I will prepare that split as a patch at commit time.

## 2. Corrected wording

### A — Dammam airport hub (`data/airports.ts`, `data/airport-guides.ts`, `data/airport-status.ts`)

| Before | After |
|---|---|
| "Your driver meets you at the confirmed meeting point and helps carry your luggage to the vehicle. Free waiting time is included if your flight lands late." | "Your driver meets you at the meeting point confirmed individually with your booking. Because we track your flight, your pickup is reconfirmed if your landing time changes." ✈ |
| "…ready to help with luggage." (booking step 4) | "…meets you at the meeting point confirmed with your booking at King Fahd International Airport." |
| "Luggage assistance is included, and larger vehicles are available…" | "Larger vehicles can be requested for groups or corporate teams…" |
| "…Your driver helps carry your luggage to the vehicle, and free waiting time is included if your flight lands late…" | "…Because we track your flight, your pickup is reconfirmed if your landing time changes…" ✈ |
| FAQ "…Your driver helps with luggage and walks you to the vehicle in the car park…" | "At the meeting point confirmed individually when you book. You receive the pickup instructions before you travel." |
| FAQ "…to Jubail, Dhahran, **Aramco areas**, and Khobar's corniche hotels…" | "…to Jubail, Dhahran, Abqaiq and Khobar's corniche hotels… Drop-offs at industrial or restricted sites are made at a gate or approved meeting point, and site access needs your own permission." |
| FAQ "…Free waiting time is included." | "…Waiting arrangements are set out in your quotation." |
| (no link) | New cluster **"Abqaiq and Project Sites"** → `/routes/dammam-airport-to-abqaiq` ("Dammam Airport to Abqaiq transfer") |
| Notice "Dammam airport status — last checked 22 October 2026" + the GACA incident paragraph | Undated "Flying into King Fahd International Airport (DMM)": "Airline schedules can change, so confirm your flight with your airline before you travel." / "Share your flight number… we track your flight and confirm the pickup with your booking." ✈ (also shown on the DMM → Riyadh route and the Dammam point-transfer pages) |
| Guide `lastUpdated: 2026-10-22` | `2026-11-21` |

### B — Dammam Taxi page (`data/city-guides.ts`, dammam)

| Before | After |
|---|---|
| "Your driver tracks your flight and **meets you in the arrivals hall with a name board**, then drives directly…" | "We track your flight, the meeting point is confirmed individually when you book, and your driver takes you directly…" ✈ |
| "Fixed-price long-distance transfers from Dammam." | "Private long-distance transfers from Dammam, quoted before you travel." |
| "Fixed-price private transfers are available between King Fahd International Airport and hotels…" | "Private transfers are available between…" |
| "…We reply with a fixed price and confirm a driver, with no prepayment required to hold the booking." | "…We reply with a quotation, and once you confirm it we schedule your driver." |
| FAQ "…Dammam to Riyadh are available with a fixed price agreed before you travel." | "…with a quotation you confirm before you travel." |
| Hub FAQ "Yes, pickups run 24/7 at King Fahd International Airport…" | "You can request a pickup for any arrival time…; the pickup time is confirmed in your quotation." |

### C — Dammam hotel hub, hotel pages and records

- **Hotel distances** (`data/hotels.ts`): see the §3 table. 5 verified, 10 set to `null`, shown as "—".
- **Hub page** (`app/(main)/cities/[city]/page.tsx`):
  - Ranges are calculated from **verified hotels only**. Stats are labelled "Distance (measured)" / "Drive time (measured)" when any hotel is unverified.
  - The fact card reads "The 5 hotels we have measured sit between 44–45 km… For the other 10, the distance is confirmed in your quotation."
- **Dammam hub meta:** "…Fixed price, meet-and-greet, flight tracking included." → "…with flight tracking and a quotation you confirm before you travel."
- **Hub dek** (all hubs): "…a professional chauffeur, a fixed price agreed before you travel, and meet-and-greet pickup for arrivals." → "…a professional driver and a quotation you confirm before you travel."
- **Hotels intro** (all hubs): "…fixed price agreed before you travel." → "…each quoted before you travel."
- **Fallback meta:** "Fixed prices, meet & greet, flight tracking, and 24/7 booking." → "Request a quotation, with flight tracking on arrival transfers."
- **Other hub metas** (Jeddah, Riyadh, Makkah, Madinah): "Fixed price" → quotation wording. Madinah's "24/7" removed. Riyadh's meta drops meet-and-greet and tracking, in line with the existing RUH policy.
- **Hub card intros** (record intros shown on the hub):
  - `dammam-airport-to-doha`: "…a driver waiting at arrivals and a fixed price…" → "…your driver at the meeting point confirmed with your booking, and a quotation…"
  - `dammam-airport-to-khafji-border`: "Meet and greet at arrivals" → "Meet your driver at the meeting point confirmed with your booking"
  - `saihat-to-dammam`: "a fixed-price car" → "a private car… at a quoted price"
- **24/7 in hub schema:** it came from the Dammam hub FAQ (see B) and is now removed. `taxiServiceSchema` contains no 24/7.
- **Hotel-page template and generator** (`[city]/[route]/page.tsx`, `lib/hotel-transfers.ts`):
  - **All cities:**
    - The "24/7 Service" feature tile is removed.
    - The meta drops "24/7" and "Fixed price".
    - "Fixed price agreed before you travel — no prepayment…" → "A quotation you review and confirm before you travel."
    - Quote subheading → "Request a quotation for your private transfer, here or on WhatsApp."
    - Booking FAQ → quotation wording.
    - Distance text appears only when verified.
  - **DMM only** (via `lib/airport-ops.ts`):
    - Meeting point "confirmed when you book" (no name board or arrivals hall).
    - No free waiting and no luggage promise.
    - Payment and cancellation terms "set out in your quotation".
    - Feature tiles: Confirmed Meeting Point, Flight Tracking ✈, Quotation First.
  - Note: all 174 hotel-transfer pages already **301-redirect to their city hub** (`proxy.ts`), so this template is only seen in the build output, not by visitors.
- **C7 — `riyadh-to-jubail` card fields:** "~480 km / About 4 hours 45 min" → "450–470 km / approx. 4.5 hours" (OSRM 457 km / 4.6 h). The intro's "one of the world's largest industrial cities" → "one of the Kingdom's main industrial centres". "one fixed price" → "a quotation you confirm before you travel".

### D — Shared English quotation wording

**67 exact replacements in 32 files** (plus the quote-form strings from report 47), including:

| Area | Before → after |
|---|---|
| Quote form (report 47) | "a fixed price for your journey" → "a quotation for your journey" |
| Domestic, airport, GCC and border route templates | "Fixed price for your … transfer." → "Request a quotation for your … transfer."; "we reply with a fixed price before you travel." → "we reply with a quotation for you to confirm before you travel."; "Receive a fixed price / no meter, no surge" → "Receive your quotation / Review it and confirm before you travel."; "A fixed, all-in price…" → "A quotation you review and confirm…"; key takeaways "available 24/7" → "at your confirmed addresses" |
| Hotel-hub template | see C |
| How it works (component and locale) | "Get a fixed quote / clear, all-in price" → "Get a quotation / clear quotation" |
| Footer | "Fast WhatsApp quotes, fixed prices, professional drivers." → "Fast WhatsApp quotes and professional drivers." |
| CTA section (component and locale) | "a fast, fixed quote on WhatsApp" → "a fast quotation on WhatsApp" |
| Homepage | meta "Fixed prices, professional drivers, 24/7." → "Professional drivers and a quotation before you travel."; hero chip "Fixed price, agreed upfront" → "Quotation before you confirm"; booking step, final CTA, benefits and route explorer updated |
| Trust / Why choose us | "Fixed prices / No hidden fees" → "Clear quotations / Confirmed before you travel"; "no meters, no surge, no surprises" → "You review and confirm your quotation before you travel, so there are no surprises." |
| Get-quote, services, sitemap, distance, border, taxi-service, airport-hub templates, About and blog CTAs | Quotation wording |

**Result:** no "fixed price", "fixed fare", "fixed quote", "all-in", "all-inclusive" or "no hidden fees" remains in shared English templates, components or locale strings. CRM pricing logic, the lead API and the email templates are untouched.

## 3. Hotel-by-hotel verification (DMM terminal → hotel, OSRM driving route)

Method: each hotel geocoded individually by name (OpenStreetMap Nominatim; English, then Arabic name), then routed from the DMM terminal (26.4712 N, 49.7979 E) with OSRM. No shared estimate was applied.

| # | Hotel | Old figures | Located | OSRM | New figures |
|---|---|---|---|---|---|
| 1 | Sheraton Dammam Hotel & Convention Centre | 22 km / 25 min | ✅ 26.4527, 50.1204 | 43.5 km / 33 min | **44 km / 33 min** |
| 2 | Braira Dammam Hotel | 20 / 22 | ❌ not in OSM | — | removed (—) |
| 3 | Park Inn by Radisson Dammam | 23 / 26 | ❌ | — | removed |
| 4 | Wyndham Garden Dammam | 21 / 24 | ❌ | — | removed |
| 5 | Novotel Dammam Business Park | 19 / 22 | ✅ 26.4076, 50.1381 | 44.8 km / 34 min | **45 km / 34 min** |
| 6 | Golden Tulip Dammam Corniche | 23 / 26 | ❌ | — | removed |
| 7 | Boudl Al Shatea | 24 / 27 | ✅ 26.4540, 50.1213 (Arabic name) | 44.6 km / 34 min | **45 km / 34 min** |
| 8 | Dana Rayhaan by Rotana | 22 / 25 | ✅ 26.4546, 50.1125 | 44.3 km / 34 min | **44 km / 34 min** |
| 9 | Swiss Spirit Hotel & Suites Dammam | 21 / 24 | ❌ | — | removed |
| 10 | Howard Johnson by Wyndham Dammam | 21 / 23 | ❌ | — | removed |
| 11 | Ramada by Wyndham Dammam Khaleej Road | 18 / 20 | ✅ 26.4595, 50.0907 | 44.8 km / 34 min | **45 km / 34 min** |
| 12 | Residence Inn by Marriott Dammam | 20 / 23 | ❌ | — | removed |
| 13 | Carlton Al Moaibed Hotel | 22 / 25 | ❌ | — | removed |
| 14 | Lavona Hotel Dammam | 21 / 24 | ❌ | — | removed |
| 15 | Maskan Al Dyafah Hotel Apartments | 22 / 25 | ❌ | — | removed |

All five located hotels are about **2× the old figure**. The other 10 need coordinates (owner, Google Maps or a site visit) before figures return.

## 4. Remaining unverified operational claims (not changed)

| Claim | Where |
|---|---|
| Free waiting ×2, "24/7 for early and late arrivals" | `/dammam/dammam-airport-to-hotels` (`data/point-transfer-v2/dammam.ts`) |
| "Free waiting time is included" ×2 | `/routes/dammam-airport-to-riyadh` (`data/airport-route-content.ts`, DMM → Riyadh overrides) |
| Meet-and-greet / name board / free waiting / luggage help (legacy wording for non-DMM airports) | `airport-transfer/[airport]` template defaults, `lib/hotel-transfers.ts`, `cities/[city]` fallback FAQ, airport guides |
| "Licensed, English-speaking drivers who know… every hotel entrance" | Hotel-page feature tile (all cities) |
| 24/7 badges | Homepage hero and trust strip, TrustBadges, TrustSection, WhyChooseUs ("24/7 WhatsApp support"), About stats, customer email footer (`lib/email.ts`, not touched: email workflow) |
| Page-level "fixed price" content | ≈900 mentions in route and page data records (`data/routes.ts` 454, `dammam-routes.ts` 110, `city-guides.ts` 67, `point-transfer-v2/jeddah.ts` 51, …). Not shared wording; each page needs its own pass |
| `riyadh-to-jubail` page body | Still "coastal Route 5" etc. (card fields only were corrected) |
| Duplicate TaxiService on hotel hubs | `cities/[city]/page.tsx` outputs `taxiServiceSchema()` on top of the layout's global one |
| RUH status notice | Dated 2 November 2026 |
| Arabic | See **report 48b**: 859 lines (locales 5, Arabic templates 55, translations 799) |

## 5. Internal links

| Page | Links | Missing |
|---|---|---|
| `/airport-transfer/dammam-airport` (now links `/routes/dammam-airport-to-abqaiq`) | 13 | 0 |
| `/taxi-service/dammam` | 6 | 0 |
| `/cities/dammam` | 94 | 0 |
| `/routes/dammam-airport-to-abqaiq` | 10 | 0 |
| `/routes/abqaiq-to-dammam-airport` | 10 | 0 |
| `/routes/dammam-to-abqaiq` | 7 | 0 |
| `/routes/abqaiq-to-dammam` | 7 | 0 |
| `/routes/riyadh-to-jubail` | 10 | 0 |

All links were checked against the production build output.

## 6. Schema

- JSON-LD on all **481 changed pages** parses cleanly (0 invalid blocks).
- The 8 in-scope pages above have no fixed-price, 24/7, free-waiting or name-board text in visible copy or JSON-LD.
- 139 other English pages still carry such wording in their own FAQ schema. This is page-level data (§4), unchanged.
- **Duplicate TaxiService on 35 pages** (pre-existing: the hotel hubs and other templates emit `taxiServiceSchema()` on top of the layout's). Reported, not changed.

## 7. TypeScript, lint, build

| Check | Result |
|---|---|
| `tsc --noEmit` | Clean |
| ESLint | 10 problems (6 errors, 4 warnings), the same as the baseline. None new |
| Production build (isolated checkout of the full working tree) | **905/905** on the second run. The first run failed on a Google Fonts download inside `next/font` (`app/ar/layout.tsx`, not modified): an environment or network issue. Rebuilt without code changes and it passed |

## 8. Full-site comparison (vs the report-47 working-tree build)

**481 of 899 pages changed** (480 main content, 8 meta, 7 JSON-LD). By section:

| Section | Pages | Cause |
|---|---|---|
| routes | 182 | Route templates (CTA / form subheading / booking step / key takeaways), RouteGrid subheading, route-composer FAQ, A2 and C7 records |
| blog | 127 | BlogSidebar and BlogInlineCta "Clear quotations… / quotation" |
| ar | 66 | **The shared English "How it works" component renders on these Arabic pages** (a pre-existing issue: English text on Arabic pages). Only its English wording changed ("Get a quotation"). **No Arabic text changed.** Flagged for the Arabic review |
| jeddah, makkah, madinah, riyadh, dammam, alula (point and hotel pages) | 60 | PointTransferView subheading, hotel-page template and generator, DMM notice (dammam) |
| taxi-service | 19 | City-template final CTA; Dammam Taxi corrections |
| airport-transfer | 12 | Airport-hub template wording; DMM hub corrections |
| border-transfers | 5 | Border template wording |
| cities | 4 | Hub template; Dammam distances (Madinah has its own view, unchanged) |
| services ×2, about, get-quote, index, sitemap | 6 | Shared pricing wording / metas |

Meta changes: `cities/dammam`, `cities/jeddah`, `cities/makkah`, `cities/riyadh`, `get-quote`, `index`, `services`, `services/hotel-transfers`.
JSON-LD changes: `airport-transfer/dammam-airport`, `cities/dammam`, `taxi-service/dammam`, `routes/dammam-airport-to-doha`, `routes/dammam-airport-to-khafji-border`, `routes/riyadh-to-jubail`, `routes/saihat-to-dammam` (FAQ or Service description text).

No URL, canonical, hreflang or sitemap entry changed.

## 9. Confirmation

Nothing committed, pushed or deployed. HEAD is still `00f5234`. No production settings, database or CRM API touched.
