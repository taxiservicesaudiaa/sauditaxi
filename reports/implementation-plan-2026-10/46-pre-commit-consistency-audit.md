# 46 — Pre-commit consistency audit (Al Khafji, Qassim, Jubail, Abqaiq)

**Date:** 21 November 2026 · **Audit only.** No files changed. No commit, push, deploy or indexing request.  
**Baseline:** `00f5234` (last push). Distances re-measured with OSRM (OpenStreetMap routing), city centre or terminal to town centre.

## 1. Verified distances (both directions)

| Leg | OSRM | Shown where | Status |
|---|---|---|---|
| DMM → Abqaiq | 100 km / 72 min | New page: "95–105 km, 1 h–1 h 15" | ✅ |
| Abqaiq → DMM | 98 km / 69 min | `/routes/abqaiq-to-dammam-airport`: "80 km / 55 min" | ❌ |
| Dammam centre → Abqaiq | 82 km / 61 min (west Dammam 75 km) | `/routes/dammam-to-abqaiq`: "65 km / 45 min" | ❌ |
| Abqaiq → Dammam centre | 80 km / 58 min | `/routes/abqaiq-to-dammam`: "65 km / 45 min" | ❌ |
| DMM → central Dammam / Corniche | 39 km / 30 min · 44 km / 34 min | Airport hub "35–45 km" ✅ · Dammam hotel hub (`/cities/dammam`) "18–24 km, 20–27 min" | ❌ (the two hubs contradict) |
| DMM → Khobar | 60 km / 41 min | Record `dammam-airport-to-khobar` "35 km / 30 min", **shown on the new Abqaiq page's related card** | ❌ |
| DMM → Dhahran | 55 km / 41 min | Record "25 km / 25 min", **shown on the new Abqaiq page** | ❌ |
| DMM → Jubail | 79 km / 59 min | Record "70 km / 50 min", **shown on the new Abqaiq page** | ⚠ understated |
| DMM → Riyadh | 399 km / ~3.8 h | Record "400 km / 4 hours" | ✅ |

The new Abqaiq page keeps airport-origin (≈100 km) and city-origin (≈82 km) figures separate, but it links to `/routes/dammam-to-abqaiq`, which shows 65 km. That is a visible contradiction.

## 2. Confirmed inconsistencies

### A. On the four completed pages (fix before commit)

| # | Issue | File |
|---|---|---|
| A1 | The Abqaiq page's related cards display the wrong DMM → Khobar / Dhahran / Jubail figures pulled from other records | `components/routes/DmmAbqaiqRouteView.tsx` (page-only fix: hide the meta) **or** `data/routes.ts` and `data/dammam-routes.ts` records (fixes the source, but changes those pages too) |
| A2 | The Abqaiq page links to `/routes/dammam-to-abqaiq` (65 km), which contradicts its own "≈82 km from central Dammam" | `data/dammam-routes.ts` (`dammam-to-abqaiq`, `abqaiq-to-dammam` distance and duration) |
| A3 | The shared quote-form disclaimer "We'll reply with a fixed price…" appears on all four pages, against their quotation wording | `locales/en/common.json` (`quoteForm.disclaimer`): **shared, site-wide** (decision D3) |

### B. Reverse and sibling Abqaiq routes

| Page | Remaining claims | File |
|---|---|---|
| `/routes/abqaiq-to-dammam-airport` | 80 km / 55 min; "fixed price… no meter, no surge"; "book each traveller separately **and we coordinate pickups**"; "facility gate area" pickup | `data/dammam-routes.ts`, `data/airport-route-content.ts` (city-to-airport content) |
| `/routes/dammam-to-abqaiq` | 65 km / 45 min; **"we operate 24/7"** (also in JSON-LD); "drivers experienced in the routes to the **Aramco facility gates**"; fixed price | `data/dammam-routes.ts` |
| `/routes/abqaiq-to-dammam` | 65 km / 45 min; fixed price; "regular industrial-sector route" | `data/dammam-routes.ts` |

### C. Hubs

| Page | Remaining claims | File |
|---|---|---|
| `/airport-transfer/dammam-airport` | **"We track your flight"** (status notice, dated 22 Oct, plus body); route cards "with flight tracking"; "**free waiting time is included**" (3×); "driver… helps carry your luggage"; "Aramco areas". Does **not link** to the new Abqaiq page | `data/airport-status.ts` (`DMM_STATUS_NOTICE`), `data/airports.ts` (`popularCardBody`), `data/point-transfer-v2/dammam.ts`, `data/airport-guides.ts` |
| `/cities/dammam` (Dammam hotel hub) | Hotels "18–24 km / 20–27 min from DMM" (OSRM 39–44 km); "**meet-and-greet**"; "fixed price", "all-in price"; "we track your flight"; JSON-LD **24/7**; still shows **Riyadh → Jubail "~480 km, 4 h 45"** and "one of the world's largest industrial cities" beside the corrected Jubail → Riyadh card | `data/hotels.ts` (Dammam `distanceKm`), `data/city-guides.ts`, `data/routes.ts` (`riyadh-to-jubail`) |
| `/taxi-service/dammam` | **"Your driver tracks your flight and meets you in the arrivals hall with a name board"**: the strongest unverified claim, and it conflicts with report 32, which removed the DMM name board; several "fixed price" lines | `data/city-guides.ts` (and `data/routes.ts`) |

### D. Already known, out of scope
- `/routes/al-khafji-to-dammam` (180 km) and both Khafji border pages (185 km) contradict ≈300 km.
- `/routes/qassim-to-riyadh` and `/routes/riyadh-to-jubail` keep their old claims.
- Of the five Ziyarat site pages, Cave of Hira still claims "1,650 steps" and a fixed price.

## 3. Checks that passed

| Check | Result |
|---|---|
| Airport vs city intent | The new page targets "Dammam Airport to Abqaiq Transfer", the city page "Dammam to Abqaiq…". The new page links to the city page ("Not flying in?"); the city page does not link back (optional) |
| Industrial access / Saudi Aramco (new page) | "Restricted sites need prior permission arranged by your employer or sponsor… we don't guarantee access", plus the non-affiliation line. ✅ |
| Teams / equipment (new pages) | "Confirmed in your quotation; not guaranteed in advance" on Abqaiq and Jubail. ✅ |
| Flight tracking, arrivals hall, name board, free waiting (new pages) | None claimed. Jubail says "we don't promise flight tracking". ✅ |
| Internal links | Khafji 10, Qassim 8, Jubail 8, Abqaiq 9 targets. All 200, no self-links |
| Breadcrumbs | Home › Routes › {route} on all four (unchanged from before) |
| Canonical / hreflang | Self-canonical; en and ar on all four |
| Schema | BreadcrumbList, WebPage, Service, FAQPage on each (plus the global Organization, WebSite, LocalBusiness and TaxiService). FAQ schema matches the visible FAQs |
| Sitemap | All four in `sitemap.xml` |
| **Flight number → CRM and email** | Full form: `flight` → `flightNumber` → `leads.flight_number` → "Flight number" row in the email (`lib/email.ts`). Hero arrival card: the flight number is included in `pickup` ("King Fahd International Airport (DMM) – flight SV 1234", 54 characters; limit 200) → `pickupLocation` → "Pickup" row. **No schema or API change** |
| TypeScript / ESLint | Clean / 10 problems (same as the baseline) |
| Production build | 905/905 on the current working tree (isolated checkout; no file changes since) |

## 4. Modified files vs `00f5234`

**Modified (7):**
- `app/(main)/routes/[slug]/page.tsx`
- `app/(main)/[city]/[route]/page.tsx` ★
- `components/QuoteForm.tsx`
- `data/dammam-routes.ts`
- `data/long-route-pages.ts`
- `data/point-transfer-v2/makkah.ts` ★
- `data/routes.ts`

**New (20):**
- Route views and forms: `components/routes/DammamKhafjiRouteView.tsx`, `GlassQuoteForm.tsx`, `RiyadhQassimRouteView.tsx`, `DestinationQuoteCard.tsx`, `JubailRiyadhRouteView.tsx`, `TabbedQuoteForm.tsx`, `DmmAbqaiqRouteView.tsx`, `ArrivalQuoteCard.tsx`
- Makkah components ★: `components/makkah/MakkahZiyaratTourView.tsx`, `components/makkah/ZiyaratPlanner.tsx`
- Content data: `data/dammam-to-al-khafji-route.ts`, `data/riyadh-to-qassim-route.ts`, `data/jubail-to-riyadh-route.ts`, `data/dammam-airport-to-abqaiq-route.ts`, `data/makkah-ziyarat-tour.ts` ★
- Reports: `reports/…/41`, `42`, `43`, `44`, `45` ★

★ = the Makkah Ziyarat Tour work (report 45). It is **separable**: if only the four route pages are committed, leave out the files marked ★. `QuoteForm.tsx` serves the four routes and the Ziyarat page; its new props are all optional with unchanged defaults.

## 5. Operational facts requiring owner confirmation

1. **DMM pickup:** arrivals-hall meeting, a pickup zone or another point? Name board, yes or no?
2. **Flight tracking at DMM:** yes or no? This decides the airport hub, `/taxi-service/dammam`, `/cities/dammam` and the DMM status notice.
3. **Free waiting time at DMM:** included, and if so how long?
4. **Separate-flight team pickups.**
5. **Work-equipment carriage.**
6. **24/7 operation.**
7. **Fixed price vs quotation** (D3): the shared form disclaimer.
8. **Compound and facility gate pickups** in Jubail and Abqaiq.
9. **Airport drop-offs at King Khalid International Airport** (RUH status).
10. Whether the DMM status notice (last checked 22 October) should be re-dated or retired.

## 6. Recommended order (each needs your approval)

1. **A1:** hide the related-card distances on the Abqaiq page (page-only, one file).
2. **A2 and B:** correct `dammam-to-abqaiq`, `abqaiq-to-dammam` and `abqaiq-to-dammam-airport` distances and remove the unverified claims (data only, three route pages).
3. Once the owner answers questions 1–3: align the airport hub, `/taxi-service/dammam` and `/cities/dammam`, and link the hub to the new Abqaiq page.
4. **D3:** the shared disclaimer wording.
