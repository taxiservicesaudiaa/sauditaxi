# 53 — Abha-related pages: consistency audit and correction plan

**Date:** 24 November 2026. **Status:** audit and plan only. **No page in this report has been changed.**
Nothing is to be deleted, redirected, noindexed or merged. Arabic content is not changed without native-speaker review.

## 1. Reference figures (endpoint-specific)

Measured with two routing engines on OpenStreetMap data (OSRM and Valhalla), centre-point to centre-point, clear traffic, no breaks.

| Endpoints | OSRM | Valhalla | Figure to publish |
|---|---|---|---|
| Central Riyadh → central Abha | 946 km · 11.3 h | 955 km · 12.2 h | **about 940–960 km · roughly 11–12 hours of driving** |
| Central Abha → central Riyadh | 945 km · 11.5 h | 955 km · 12.2 h | **about 940–960 km · roughly 11–12 hours** |
| Abha International Airport (AHB) → central Riyadh | 935 km · 11.4 h | 946 km · 12.0 h | **about 935–950 km · roughly 11–12 hours** |
| AHB → King Khalid International Airport (RUH) | 968 km · 11.7 h | n/a | "about 970 km" (only if a page mentions the RUH drop-off) |
| King Khalid International Airport → central Abha | 977 km | n/a | (already used on `/routes/riyadh-to-abha`: "+≈30 km") |

**Common wording for all pages:** "…roughly 11–12 hours of driving, before breaks. Traffic, prayer and rest stops add time."

**Route description (verified):** south-west across the Riyadh Region plateau, past Bisha, through Khamis Mushait. Don't write "through Wadi ad-Dawasir": that is a governorate the road crosses, not a town on it.

## 2. Page-by-page audit

### 2.1 `/routes/abha-to-riyadh`

- **Intent:** the return journey. Collection in Abha or Asir, descent from the highlands, arrival in Riyadh (home, hotel, or RUH for a departure).
- **Source:** `data/routes.ts`, record `abha-to-riyadh` (shared intercity template). Arabic counterpart exists (`ar.ts`).

| Current claim | Problem | Correction |
|---|---|---|
| "~830 km", "About 8 hours 45 min"; FAQ "approximately 830 kilometres… eight hours forty-five minutes" | Wrong by ≈120 km and ≈3 h | "about 940–960 km · roughly 11–12 hours of driving" |
| Meta: "(~830 km, about 8 hours 45 min) with a fixed fare…" | Wrong figures; fixed fare | New meta (below) |
| "one vehicle, one fixed price"; "Your fixed price is fully inclusive"; "Is the fare fixed including the mountain section? Yes…"; "Request a fixed-price quote" | Pricing is quotation-based | "The confirmed quotation sets the price and explains what it covers" |
| "No toll roads apply on this route or anywhere in Saudi Arabia"; "no toll charges" | Unverified | Remove the section and phrase |
| "we track your departure and adjust the pickup time automatically" (RUH drop-off FAQ) | Flight tracking not promised for RUH; no automatic adjustment | "Share your flight time when you request a quote; we plan arrival with a margin. Flight changes aren't picked up automatically, so message us." |
| "same fixed-price, tracked service"; "operate 24/7"; "require no deposit" | Unconfirmed | Remove |
| "near-nine-hour length" | Wrong | "a full day on the road" |
| "ample luggage space for purchases" | Vehicle-dependent | "Tell us about extra luggage so the vehicle can be confirmed" |
| Related-route card "Riyadh to Abha 940–960 km · approx. 11–12 hours" | ✅ already consistent after the Riyadh–Abha rebuild | — |

- **Planned title:** "Abha to Riyadh Private Transfer | Road Journey North".
- **Planned meta:** "Request a private road transfer from Abha to Riyadh, about 950 km. Share your Abha pickup, Riyadh destination or flight time, passengers and luggage for a quotation."
- **Content angle (distinct from Riyadh → Abha):**
  - Collection in Abha and Khamis Mushait.
  - Starting early from the highlands; the long descent across the plateau.
  - Arriving in Riyadh or at RUH with a departure margin.
  - Single-day journey (overnight stops not offered); child seats on request.
  - Keep to about 6 FAQs on the shared template; no duplication of the Riyadh → Abha FAQ wording.
- **Scope:** data record only, with no new layout, unless you want a dedicated design.

### 2.2 `/blog/riyadh-to-abha-transfer-guide`

- **Intent:** informational comparison (drive vs fly vs private transfer). Not a booking page.
- **Source:** **Supabase (production CMS)**, not the repository. Correct it through the admin editor; I won't write to production data. There is no Arabic counterpart.

| Current text | Correction (paste into the CMS) |
|---|---|
| Meta: "Riyadh to Abha is about 830 km, nearly 9 hours by road." | "Riyadh to Abha is about 950 km, roughly 11–12 hours of driving." |
| "Riyadh to Abha is roughly 830 km and nearly nine hours by road" | "Riyadh to Abha is about 940–960 km by road, roughly 11–12 hours of driving before breaks" |
| "roughly 830 km, close to nine hours by road" | "about 950 km, a full day on the road" |
| "At close to nine hours, this isn't a drive to attempt without breaks." | "At 11–12 hours of driving, this isn't a drive to attempt without breaks." |
| "…against nine hours by road." | "…against a full day by road." |
| "Driving the full 830 km earns its place…" | "Driving the full 950 km earns its place…" |
| FAQ "About nine hours for the roughly 830 km route…" | "Roughly 11–12 hours of driving for the 940–960 km route, plus stops for prayer, food and rest." |
| "Jeddah to Riyadh is 950 km — the longest domestic route most travelers consider driving." (related-post teaser) | That's another post's teaser; flag it for that post's review. With Riyadh–Abha also ≈950 km, "longest" is doubtful |

- **Also check in the editor:** any fixed-price, tracking or 24/7 wording in the body. Only the distance and time sentences were readable from the render.
- **Keep:** the post's comparison angle and its link to `/routes/riyadh-to-abha`.

### 2.3 `/routes/abha-airport-to-riyadh`

- **Intent:** a traveller landing at Abha International Airport (AHB) and continuing by road to Riyadh.
- **Sources:**
  - `data/routes.ts` record `abha-airport-to-riyadh`: meta, distance, duration, about, notes, sections, FAQs.
  - `data/airport-route-content.ts` key `abha-airport-to-riyadh`: arrival, road, vehicle text and FAQs.
  - The Arabic counterpart exists.

| Current claim | Problem | Correction |
|---|---|---|
| "950 km", "9 hours"; "At about 950 km and 9 hours"; "Around 9 hours for roughly 950 km"; "nine-hour drive" (×3) | Distance close; **time short by 2–3 h** | "about 935–950 km · roughly 11–12 hours of driving" |
| "through Wadi Ad-Dawasir directly into Riyadh" | A governorate, not a waypoint | "via Khamis Mushait and Bisha, then north-east across the Riyadh Region" |
| Meta: "…meet-and-greet pickup and a fixed fare agreed before you travel" | Fixed fare; meet-and-greet | New meta (below) |
| "Our chauffeur meets you at AHB arrivals, takes care of your luggage"; "Meet-and-greet pickup across domestic and international arrivals"; "Your driver waits in the arrivals area"; "Your flight… is tracked" | **AHB operating rules are not owner-confirmed** (only DMM is) | **Needs your decision** (section 3). Until then: "Your pickup point at the airport is confirmed with your booking" |
| "an SUV or van is the recommended choice over a sedan" | Overstated | "The vehicle is matched to your passengers and luggage in the quotation" |
| Card on `/cities/riyadh` and related cards: "950 km · 9 hours" | Fed by this record | Fixed automatically when the record is corrected |

- **Planned meta:** "Private transfer from Abha International Airport (AHB) to Riyadh, about 940 km by road. Share your flight, Riyadh destination, passengers and luggage for a quotation."
- **Distinct intent:** airport arrival first (flight details, pickup confirmation), then the road north. Don't repeat the city-to-city storytelling.

### 2.4 `/cities/riyadh`: Abha Airport card

- **Correction to report 52:** the card reads **"950 km · 9 hours"**, not "1,050 km". The 1,050 km figure belongs to the AlUla Airport card next to it; my earlier text extraction misattributed it.
- **Source:** the `abha-airport-to-riyadh` record (no separate data). Correcting that record (2.3) updates the card to "935–950 km · approx. 11–12 hours".
- **Other cards on this page:** the Riyadh → Abha card already shows "940–960 km · approx. 11–12 hours".
- No Arabic text changes are needed for the English card.

### 2.5 `/taxi-service/abha`

- **Intent:** local taxi in Abha and nearby trips (airport, Khamis Mushait, Al-Soudah, Habala). Not a Riyadh-route page.
- **Source:** `data/city-guides.ts` (Abha guide, around lines 1110–1205) and `data/cities.ts` (abha). Arabic counterpart exists.

| Current claim | Problem | Correction |
|---|---|---|
| "your driver waits in the hall with a name board" (AHB) | AHB rules unconfirmed; name board is a DMM-forbidden pattern | "Your pickup point at Abha International Airport is confirmed with your booking" (pending section 3) |
| "Fixed-price long-distance transfers from Abha." | Quotation-based | "Private long-distance transfers from Abha, priced in a quotation you confirm." |
| Najran / Jazan: "available with a fixed price agreed before you travel" (body and FAQ) | Same | "…quoted before you travel; the confirmed quotation sets the price." |
| No distance figures on the page | ✅ | Optionally add one line linking `/routes/abha-to-riyadh` ("about 950 km to Riyadh") for consistency |

**Same wording elsewhere (out of scope):** the fixed-price and name-board wording also appears on the Najran, Jazan and Khamis Mushait guides in `city-guides.ts`. Those are separate pages to be fixed in a separate pass if approved.

## 3. Decisions needed before correcting

1. **AHB airport operating rules.** Do the DMM rules also apply at Abha International Airport?
   - Flight tracking: yes or no?
   - Meeting point: confirmed individually?
   - Free waiting: not advertised?
   - Luggage help: not promised?
2. **Overnight stops:** you confirmed they're **not offered** on Riyadh–Abha. Confirm the same applies to Abha → Riyadh and AHB → Riyadh.
3. **Child seats:** "on request, availability confirmed in the quotation" on all five pages?
4. **Blog:** will you edit the post in the CMS, or should I prepare a full replacement draft for you to paste?
5. **Arabic counterparts** (`riyadh-to-abha`, `abha-to-riyadh`, `abha-airport-to-riyadh`, `taxi-service/abha`): they still carry 830 km, 950 km / 9 h and fixed-price wording. I can prepare an English change list for a native-speaker reviewer.

## 4. Proposed order of work (one release, separate from Riyadh–Abha and Dammam)

1. `abha-to-riyadh` record (data only).
2. `abha-airport-to-riyadh` record and `airport-route-content` entry. This updates the `/cities/riyadh` card automatically.
3. Abha guide in `city-guides.ts` (fixed price, AHB pickup line).
4. Blog text handed to you for the CMS.
5. QA: `tsc`, lint, isolated build, site-wide comparison (expect these pages plus any cards that show the corrected figures), claims scan, links, canonical, hreflang, schema.
6. Report and wait for approval. No commit, push or deploy.
