# 59 — Jeddah city page rebuild + Taif–Jeddah corrections (local only)

**Date:** 24 November 2026. **No commit, push or deployment. No form submitted. No indexing request. Arabic content not edited. No page deleted, redirected, noindexed or removed from the sitemap.**

## 1. Files changed

| File | Status | Change |
|---|---|---|
| `data/jeddah-city-page.ts` | New | All Jeddah page copy, 9 FAQs, photo data (with caption credits) |
| `components/city-transfer/JeddahCityView.tsx` | New | The "gateway city" layout |
| `public/images/jeddah/*.webp` (6) | New | Licensed Jeddah photographs |
| `app/(main)/taxi-service/[city]/page.tsx` | Modified | Jeddah branch, JSON-LD and OG image (no geo meta). The other cities are unaffected |
| `data/cities.ts` | Modified | Jeddah `metaTitle` and `metaDescription` |
| `data/routes.ts` | Modified | `taif-to-jeddah` and `jeddah-airport-to-taif` records |
| `data/airport-route-content.ts` | Modified | `jeddah-airport-to-taif` entry (with arrival and booking overrides) |
| `data/distance-guide-v2.ts` | Modified | Flight-frequency claims in the two Jeddah–Taif distance guides |
| `components/city-transfer/JazanCityView.tsx`, `AbhaCityView.tsx`, `components/routes/RiyadhAbhaRouteView.tsx` | Modified | Full "Photo credits" lists removed at your request; per-photo caption credits kept |

`data/city-guides.ts` (the old Jeddah copy) was **not** edited. The new layout no longer renders it, and the `hubFaqs` it holds are still used by `/cities/jeddah`.

## 2. Jeddah city page (`/taxi-service/jeddah`)

**Role:** city-level private transfers in Jeddah. It links out to the airport, route, hotel and service pages rather than duplicating them.

**Structure:**
1. **Hero (split):**
   - H1 "Private Transfers in Jeddah", story intro and four highlight chips.
   - "Request a Quotation" and WhatsApp CTAs.
   - Waterfront aerial photo (SPA 2026).
2. **"Where are you heading?" finder:** five tiles (airport, Makkah/Madinah, around the city, business, beyond Jeddah) linking to the sections.
3. **Private transfers across Jeddah:** Red Sea city, main commercial centre, gateway to Makkah (≈65 km); the range of journeys. Bait Al Balad photo.
4. **Arriving at Jeddah airport** (teal band):
   - JED ≈19 km north; several terminals including the Hajj Terminal.
   - Pickup point and arrangements confirmed individually.
   - Links to the airport page and the JED terminal guide.
5. **Onward to Makkah and Madinah:** two route cards (≈85 km; ≈410–420 km), plus the Islamic Port → Makkah link.
6. **Umrah and Hajj travel:** families and groups, luggage, vehicle suggested in the quotation, stops or requirements mentioned in the request. Links to Umrah and Hajj transport.
7. **The Corniche, hotels and city destinations:** ≈30 km waterfront, King Fahd's Fountain, Al-Rahmah Mosque, Al-Balad; point-to-point trips; link to the hotel directory (`/cities/jeddah`). Three photo cards.
8. **Business travel:** schedules quoted.
9. **Pickup and destination areas:** a four-group board (Arrivals, Waterfront, Historic centre, Across the city), plus "any exact address".
10. **Regional connections:** a departure-board list (Taif ≈165–175 km, Yanbu ≈330–340 km, Madinah ≈410–420 km, Riyadh ≈945–950 km), distances only.
11. **How to request:** four steps, then the shared QuoteForm (pickup "Jeddah", the flight field the form shows by default, an updated placeholder).
12. **FAQs:** the 9 briefed questions; guides (first time in Jeddah, JED terminals, Islamic Port) and the city-transfers overview.
13. **Final CTA.**

**Claims removed** (none carried forward): "busiest entry point"; "we track your flight"; "we position drivers…"; "fixed-price private transfers"; "unhurried time at immigration and baggage claim, without a meter running"; "keeping the same driver and vehicle available between appointments"; "fixed day-rate"; "fixed-price journeys"; "we reply with a fixed price"; "confirm a driver assigned to your flight"; "no prepayment required"; "drivers are familiar with…"; miqat and prayer-stop promises; Hajj Terminal / Terminal 1 pickup promises; the "Fixed price, 24/7" meta.

**SEO:**
- Title "Private Transfers in Jeddah | Airport, City & Makkah".
- Meta "Private transfers in Jeddah: King Abdulaziz Airport arrivals, hotels, the Corniche, business travel and onward journeys to Makkah and Madinah. Request a quotation."
- One H1; H2 per section. OG image = the waterfront photo.
- **JSON-LD:** BreadcrumbList; WebPage (with `primaryImageOfPage` and its licence); Service (areaServed City Jeddah, `containedInPlace` Makkah Province; **no coordinates or geo meta**); FAQPage (9, matching the visible FAQs). The duplicate page-level TaxiService was removed for this page.
- Canonical, hreflang (en/ar) and the sitemap entry are unchanged.

**Images** (all genuine; licences read from Commons via the Wikipedia API; credited in captions):

| File | Subject | Author · licence | Check |
|---|---|---|---|
| `jeddah-waterfront-aerial.webp` | Jeddah Waterfront aerial (2026) | Saudi Press Agency · CC BY-SA 4.0 | SPA CC portal |
| `kaia-north-terminal.webp` | JED North Terminal at night | Tahir mq · CC BY-SA 4.0 | Own work |
| `al-rahmah-mosque.webp` | Al-Rahmah Mosque, Corniche | xiquinhosilva · CC BY 4.0 | FlickreviewR ✅ |
| `king-fahd-fountain.webp` | King Fahd's Fountain at sunset | Saudi Press Agency · CC BY-SA 4.0 | SPA CC portal |
| `al-balad-gate.webp` | Restored gate, Al-Balad | xiquinhosilva · CC BY 4.0 | FlickreviewR ✅ |
| `bait-al-balad.webp` | Bait Al Balad, old town | Tahir mq · CC BY-SA 4.0 | Own work |
| `/images/taif/jeddah-corniche.webp` (reused) | Corniche promenade | Tahir mq · CC BY-SA 4.0 | Own work |

- **Asset gaps:** the Hajj Terminal (a licensed photo was found but blocked by Wikimedia rate-limiting), hotel districts, business districts, genuine fleet photos.
- **No AI images** of vehicles, drivers or operations are used.

## 3. Taif → Jeddah (`/routes/taif-to-jeddah`)

| Item | Before | After |
|---|---|---|
| Distance / time | 170 km / 2 hours | 165–175 km / approx. 2–2.5 hours (OSRM 168 km / 2 h 03; Valhalla 170 km / 1 h 56) |
| Claims | "fixed price"; "no tolls… anywhere"; "English-speaking driver"; "a driver experienced with the road" | Removed; quotation wording |
| Content | Old descent copy | Descent story; "you don't need to plan the route"; Al Hada stop can be requested on the way down; one plain line on non-Muslim passengers and Makkah; airport drop-off ≈185–190 km with a link to `/routes/taif-to-jeddah-airport`; motion sickness and child seats (approved wording) |
| Meta | "…170 km… English-speaking driver… fixed price" | "Taif to Jeddah Private Transfer \| Down the Al Hada Road" / quotation description |
| FAQs (6) | Tolls, fixed price | Distance, flight timing, Al Hada stop, motion sickness, resort pickup, link to Jeddah to Taif |

The reverse-route intent is preserved; it doesn't copy the Jeddah to Taif page.

## 4. Jeddah Airport → Taif (`/routes/jeddah-airport-to-taif`)

| Item | Before | After |
|---|---|---|
| Distance / time | 175 km / 2 hours | **185–190 km / approx. 2.5 hours** (airport-origin: OSRM 184 km / 2 h 30; Valhalla 188 km / 2 h 27) |
| Operations | "Meet-and-greet… with flight tracking"; "handles your baggage"; "chauffeur waits inside the arrivals hall holding a sign"; "Fixed rates… zero surge"; "English-speaking drivers" | Pickup arrangements confirmed individually; no tracking, waiting or luggage claims; quotation wording; arrival and booking steps overridden |
| Content | — | "You don't need to plan the route"; Al Hada stop on request; child seats; a pilgrim note about non-Muslim passengers; link to the main `/routes/jeddah-to-taif` |
| Meta | "Fixed-Price Transfer… English-speaking drivers" | "Jeddah Airport (JED) to Taif Private Transfer" / quotation description |

## 5. Distance-guide flight statement

**Found in:**
- `/distance/jeddah-to-taif-distance`: factor, transport option and FAQ.
- `/distance/taif-to-jeddah-distance`: factor, transport option, FAQ and a prose mention.

**Claim:** "A direct flight… around 50 minutes, with roughly 27 flights a week operated primarily by Saudia".

**Evidence:**
- **Duration:** about 50–55 minutes is consistent across flight aggregators.
- **Frequency:** "27 a week" comes from one aggregator. Others report 3–5 a week, and one reports no nonstop since June 2026.

**Correction:**
- Frequency removed. The guides now say "Direct flights… take around 50 minutes in the air when they operate; schedules change, so check current flights with the airline".
- The ~50-minute duration is kept.

**Sources:** [FlightConnections](https://www.FlightConnections.com/flights-from-jed-to-tif), [Cleartrip](https://cleartrip.sa/flight-schedule/jeddah-taif-flights.html), [AirportOverview](https://www.airportoverview.com/routes/JED/TIF), [Skyscanner](https://www.skyscanner.co.in/routes/tif/jed/taif-to-jeddah.html).

## 6. Factual verification

| Figure | Evidence | Confidence |
|---|---|---|
| Jeddah → Makkah ≈85 km | Record 85 km; OSRM 83 km | High |
| Jeddah → Madinah ≈410–420 km | Record 420; OSRM 411 | High. **Record time (4 h) is shorter than routing (≈4.6 h)**, so no time is shown on the city page |
| Jeddah → Taif ≈165–175 km | Report 58 (OSRM 165–171; Valhalla 171–177) | High |
| Jeddah → Yanbu ≈330–340 km | Record 330; OSRM 337 | High |
| Jeddah → Riyadh ≈945–950 km | Record 950; OSRM 945 | High. **Record time (9 h) is shorter than routing (≈10.4 h)** |
| JED ≈19 km north; Hajj Terminal | Wikipedia | High |
| Corniche ≈30 km; King Fahd's Fountain the tallest fountain; Al-Rahmah Mosque | Wikipedia | High |
| Makkah ≈65 km from Jeddah | Wikipedia | High |
| Taif → Jeddah centre 165–175 km | OSRM 168 / Valhalla 170 | High |
| JED / Taif ↔ airport 185–190 km, ≈2.5 h | OSRM 184 / Valhalla 188 | High |

## 7. Arabic: recommended changes for review (not edited)

| Arabic page (`ar.ts`) | Current | Recommendation |
|---|---|---|
| `/taxi-service/jeddah` (≈line 1414) | "…بأسعار ثابتة وسائقين محليين محترفين"; "نغطي هذا المسار بسعر ثابت…"; an FAQ "هل الخدمة متاحة على مدار الساعة؟" | Replace fixed-price and "professional local drivers" with quotation wording; review or remove the 24/7 FAQ |
| `/routes/jeddah-airport-to-taif` (≈line 9687) | "بسعر ثابت"; "استقبال بالصالة"; "يستقبلك السائق في صالة الوصول… ويساعدك في حمل الأمتعة"; "175 كم" | Pickup arrangements confirmed individually; no reception, luggage help or fixed price; 185–190 km, ≈2.5 hours |
| `/routes/taif-to-jeddah` (≈line 18811) | No flagged strings found | Check for parity with the new English page (distance range, Al Hada stop) |

## 8. Outstanding owner items
1. **Route record times:** `jeddah-to-madinah` (4 h vs ≈4.6 h) and `jeddah-to-riyadh` (9 h vs ≈10.4 h). Correct them?
2. **Jeddah blog guides** linked from the page (first time in Jeddah, JED terminals, Islamic Port) were not audited for claims.
3. **Hajj Terminal photo:** retry the download later.
4. **The `city-guides.ts` Jeddah entry** (old copy) is no longer rendered by `/taxi-service/jeddah`. Its `hubFaqs` (used on `/cities/jeddah`) still mention "fixed price" and "Your driver waits at the terminal…".
5. **Arabic parity** (section 7).

## 9. QA

**Build and lint:**
- Isolated worktree production build: exit 0, **905/905 pages** (same count as before).
- `eslint`: 10 problems, the same pre-existing set; nothing new.

**Site diff** against the last baseline: 899 pages compared, 18 content changes, all expected.
- **Rebuilt (title, meta, JSON-LD and body):** `taxi-service/jeddah`, `routes/taif-to-jeddah`, `routes/jeddah-airport-to-taif`.
- **Distance guides (JSON-LD and body):** `distance/jeddah-to-taif-distance`, `distance/taif-to-jeddah-distance`.
- **Body only:**
  - Pages that show the corrected route-record cards: `cities/jeddah`, `airport-transfer/taif-airport`, `routes/taif-to-{makkah,madinah,riyadh}`, `routes/jeddah-airport-to-{jeddah,riyadh,yanbu}`, `routes/kaec-to-jeddah`, `routes/abha-to-jeddah`.
  - Credit lists removed: `taxi-service/abha`, `taxi-service/jazan`, `routes/riyadh-to-abha`.
- **Arabic files changed: 0.**

**Page checks:**

| Page | Canonical / hreflang / robots | H1 | JSON-LD | Internal links |
|---|---|---|---|---|
| `/taxi-service/jeddah` | Self; en and ar pair; index, follow | 1 | BreadcrumbList, WebPage, Service, FAQPage (9) | 15, none missing, no self-link |
| `/routes/taif-to-jeddah` | Self; en and ar pair; index, follow | 1 | BreadcrumbList, Service, FAQPage (6) | 10, none missing |
| `/routes/jeddah-airport-to-taif` | Self; en and ar pair; index, follow | 1 | BreadcrumbList, Service, FAQPage (3) | 10, none missing |

**Claims scan** (fixed price, 24/7, free waiting, name board, meet and greet, flight tracking, luggage help, experienced drivers, guarantees):
- One hit, a negative: "a baseline for the drive itself, not a door-to-door guarantee".
- No other unsupported claims on the three pages or the two distance guides.

**Other checks:**
- **Form:** the QuoteForm on the Jeddah page is pre-filled with service type "Jeddah city transfer", city "Jeddah" and pickup "Jeddah". No submission was made.
- **Layout:** checked on mobile (500 px) and desktop. The airport-band photo showed blank on the first screenshot because the dev image optimizer was slow. It rendered once the cache was warm.

## 10. Git status
Nothing was committed, pushed or deployed. All the work is in the uncommitted working tree, alongside the earlier uncommitted Jazan (reports 56–57) and Jeddah–Taif (report 58) work. These share `data/routes.ts` and the page routes, so they should be released together.
