# 51 — Dammam Airport (DMM) hub: complete rebuild (local only)

**Date:** 24 November 2026 · **URL:** `/airport-transfer/dammam-airport` (unchanged).
Nothing committed, pushed or deployed. No indexing requests. No production form submitted.

## 1. Pre-implementation audit

| Item | Finding |
|---|---|
| Template | Shared `AirportTransferHub`, used by all 13 airports; DMM text came from `hubOverrides` and `airport-guides.ts` |
| Copy | Already followed the DMM rules, but generic. Every route card repeated "A private, direct transfer with flight tracking" |
| Hero image | `/images/heroes/airport.webp`: **AI-generated** terminal with a "MEET & GREET" sign; contradicts the DMM meeting-point rule |
| Schema | Breadcrumb, **page-level TaxiService (a duplicate of the site-wide one)**, Service, **HowTo**, FAQPage(8) |
| Old notice | Undated "Flying into DMM" box (report 48). Its content is now folded into the arrival section |
| hreflang | **None before or after:** DMM has no Arabic counterpart in `ar-index`. Unchanged, so no regression |
| Image library | No genuine photo of DMM, Dammam, Al Khobar, Dhahran, Jubail, Abqaiq or the Causeway. `eastern.webp` and `border.webp` are AI-generated with a branded car. Not used |

### Distance check: OSRM from the DMM terminal area vs the route records

| Destination | OSRM | Route record | Status |
|---|---|---|---|
| Central Dammam / Corniche | 37 / 41 km | n/a (hub FAQ "35–45 km") | ✅ |
| **Al Khobar** | 57 km | `dammam-airport-to-khobar`: **35 km / 30 min** | ❌ record wrong |
| **Dhahran** | 52 km | `dammam-airport-to-dhahran`: **25 km / 25 min** | ❌ record wrong |
| **Jubail** | 81–84 km | `dammam-airport-to-jubail`: **70 km / 50 min** | ❌ record low |
| Abqaiq | 100 km | 95–105 km (Nov 2026) | ✅ |
| Manama | 102 km (+ border) | ~100 km + border | ✅ |
| Riyadh | 398 km | 400 km | ✅ |
| Al Hofuf | 168 km | 155 km | ⚠ low |
| Ras Tanura | 56 km | 65 km | ⚠ high |
| Qatif / Saihat | 33 / 44 km | 30 / 40 km | ✅ approx. |

The page shows only OSRM-verified distances, rounded and without drive times. The three wrong records are listed in section 8 and haven't been changed.

## 2. New page structure ("arrivals guide")

1. **Hero:** midnight background with a faint grid.
   - Eyebrow "King Fahd International Airport · DMM"; H1 "Dammam Airport Transfers: Your Journey Across the Eastern Province"; story intro.
   - CTAs "Request a Dammam Airport Quotation" (to the form) and "Explore Destinations".
   - A **departures-board panel**: monospace amber destinations.
   - A **quick-start strip:** a plain GET form to `/get-quote` with pickup DMM, destination, date and passengers. It creates no lead and uses the existing prefill.
2. **"On this page" index:** ten numbered anchors.
3. **The airport:** a direct-answer paragraph plus a **boarding-pass fact card** (name, IATA, serves, location, Al Khobar distance, nearest border crossing) and a method note.
4. **Your arrival:** a five-step timeline:
   1. Before you fly.
   2. In the air: flight tracking.
   3. After landing.
   4. **Meeting your driver:** highlighted; "confirmed individually with your booking".
   5. On the road.
   A side note says waiting isn't advertised as free.
5. **The region:** dark band with a **coordinate-plotted SVG map**: DMM, the coast cities, Jubail, Abqaiq, Manama via the Causeway, Riyadh off-map. It is labelled "schematic" and has an accessible `<title>`. Beside it: the metro area, industrial destinations, cross-border, and beyond the province.
6. **Choose your destination:** six editorial rows (not cards). Each has the journey type, verified distance, intro, who travels, what to send, a caution where relevant (Abqaiq facilities, Bahrain documents) and 1–2 links.
7. **Comparison table:** destination, journey type and the booking detail that matters, with no times.
8. **Routes:** a timetable-style list of six featured routes, each with unique copy; chips for Qatif, Saihat, Ras Tanura and Al Hofuf; links to the hubs.
9. **Who uses DMM transfers:** six traveller types, with planning notes and no promises.
10. **Vehicles:** a table from `data/vehicles.ts` (capacities as recorded there), noting that a particular vehicle is subject to availability.
11. **Checklist:** three dashed "boarding pass" groups (flight / trip / Bahrain) with native checkboxes.
12. **How booking works:** four steps, then the shared **QuoteForm** and WhatsApp.
13. **FAQs:** 12, using a native `<details>` accordion. Method note.
14. **Final CTA:** "Your Eastern Province Journey Starts at DMM".

## 3. Metadata and schema

- **Title:** "Dammam Airport Transfers | King Fahd Airport (DMM)".
- **Meta:** "From King Fahd International Airport (DMM) to Dammam, Al Khobar, Dhahran, Jubail, Abqaiq or Bahrain: private transfers with flight tracking, priced by quotation."
- **Unchanged:** the H1 is the only one on the page; canonical self; robots `index, follow`; in the sitemap.
- **JSON-LD:**
  - BreadcrumbList.
  - **WebPage** (`about` → Service and Airport).
  - **Service** (`@id`, provider = the site Organization, areaServed Eastern Province, `availableAtOrFrom` **Airport** {King Fahd International Airport, iataCode DMM, Dammam, Eastern Province, SA}).
  - **FAQPage** (12, identical to the visible FAQs).
- **Removed:** the page-level TaxiService duplicate (now one, site-wide) and the HowTo. No ratings, prices, hours or address.

## 4. Internal links (18; all exist in the build)

| Group | Links |
|---|---|
| Breadcrumb | `/`, `/airport-transfers` |
| Destination rows | `/dammam/dammam-airport-to-hotels`, `/taxi-service/dammam`, `/routes/dammam-airport-to-khobar`, `/taxi-service/khobar`, `/routes/dammam-airport-to-dhahran`, `/routes/dammam-airport-to-jubail`, `/taxi-service/jubail`, `/routes/dammam-airport-to-abqaiq`, `/routes/dammam-airport-to-bahrain`, `/border-transfers/bahrain-causeway` |
| Route list | the above plus `/routes/dammam-airport-to-riyadh`, `-qatif`, `-saihat`, `-ras-tanura`, `-hofuf`, `/intercity-transfers` |

There is no Dhahran service page, so Dhahran links to its route page. Route links render only if the route exists (checked at build). No self-links.

## 5. Images

| Asset | Status |
|---|---|
| Raster photos | **None used.** No genuine Eastern Province or airport photo exists in the project |
| Regional map | Inline SVG drawn from real coordinates, with a simplified coastline (stated in the caption) |
| `airport.webp`, `eastern.webp`, `border.webp` | AI-generated; **removed** from this page / not used |

**Photographs needed (genuine, licensed):**
1. DMM terminal exterior or landside.
2. The arrivals area (no staff faces needed).
3. Dammam Corniche or skyline.
4. Al Khobar Corniche (Water Tower).
5. Dhahran.
6. The Jubail coastline or industrial city.
7. Abqaiq town (not facilities).
8. The King Fahd Causeway.
9. Genuine fleet photos.

The layout can take a photo per destination row once supplied.

## 6. Operational wording (owner rules applied)

| Topic | How it's handled |
|---|---|
| Flight tracking | Stated: "We track your flight and use its arrival information to coordinate your pickup" (no technical details) |
| Meeting point | "Confirmed individually with your booking"; no arrivals-hall, name-board or zone promise |
| Waiting | "Waiting isn't advertised as free; any waiting arrangements are set out in your confirmed quotation" |
| Pricing | Request, receive, confirm. "The confirmed quotation sets the price and the agreed arrangements, including its payment and cancellation terms" |
| Abqaiq / sites | Town vs facility separated; "Access is never guaranteed" |
| Bahrain | Subject to documents, entry eligibility and confirmation |
| Not promised | Child seats (asked for, confirmed in quotation), several flights (grouping confirmed in quotation), vehicle availability, luggage help, 24/7 |

## 7. Checks

| Check | Result |
|---|---|
| `tsc` | Clean |
| ESLint | Changed files clean; full repo 10 problems, the same as the baseline |
| Production build (isolated checkout of `1709496` + these files) | 905/905 |
| Site-wide comparison | **1 page changed:** `airport-transfer/dammam-airport` (title, meta, JSON-LD, main). `routes/riyadh-to-tabuk` also differs, but only because the comparison snapshot predates its already-committed FAQ trim |
| Claims scan | No fixed price, 24/7, free waiting, name board, arrivals hall, meet-and-greet, all-inclusive or luggage help. "Guarantee" appears only as "never guaranteed" |
| Density | "dammam airport" 1.32%; "King Fahd International Airport" 1.09%; 2,577 words |
| Overlap | 2.2% vs the RUH page; 0.1% vs `/taxi-service/dammam` |
| Responsive | 1440 px desktop and 500 px mobile screenshots: no page overflow. Tables scroll inside their own frame; the board, map and form stack on mobile |
| Accessibility | One H1, ordered H2/H3; map `role="img"` + `<title>`; native checkboxes and `<details>`; visible focus colours from the site defaults |
| Quote form | Shared `QuoteForm` unchanged. Payload: pickup "King Fahd International Airport (DMM)", serviceType "Dammam Airport transfer (City: Dammam)", flight field shown, to the existing `/api/leads`. **Not submitted** |
| Quick-start | GET to `/get-quote?pickup=…&dropoff=…&date=…&passengers=…`, read by the existing `prefillFromQuery`. No lead is created until the user submits there |

## 8. Changed files

| File | Change |
|---|---|
| `data/dammam-airport-page.ts` | **New.** All copy, distances (with method), 12 FAQs |
| `components/airport-transfer/DammamAirportView.tsx` | **New.** Layout and SVG map |
| `app/(main)/airport-transfer/[airport]/page.tsx` | DMM branch and its JSON-LD. Other 11 airports untouched |
| `data/airports.ts` | DMM `metaTitle` and `metaDescription` only |
| `reports/…/51-dammam-airport-rebuild.md` | This report |

`hubOverrides` and `airport-guides.ts` for DMM are left untouched; nothing else reads them for this URL. No other files changed.

## 9. Remaining inconsistencies on related pages (not changed)

| Page | Problem |
|---|---|
| `/routes/dammam-airport-to-khobar` | 35 km / 30 min (OSRM 57 km). Name board, arrivals hall, free waiting, fixed price, luggage help |
| `/routes/dammam-airport-to-dhahran` | 25 km (OSRM 52 km). Meet-and-greet, name board, arrivals hall, fixed price, 24/7 |
| `/routes/dammam-airport-to-jubail` | 70 km (OSRM 81–84). Meet-and-greet, name board, fixed price, 24/7 |
| `/routes/dammam-airport-to-bahrain` | Fixed price, meet-and-greet, arrivals hall, name board, free waiting, 24/7 |
| `/routes/dammam-airport-to-riyadh` | "free waiting" / "complimentary" wording |
| `/routes/dammam-airport-to-hofuf`, `-qatif` | Name board / meet-and-greet / fixed price / 24/7. Hofuf 155 km (OSRM 168) |
| `/routes/dammam-airport-to-ras-tanura` | 65 km (OSRM 56) |
| `/dammam/dammam-airport-to-hotels` | Free waiting, 24/7, fixed price, meet-and-greet |
| `/border-transfers/bahrain-causeway` | Fixed price |

These pages are linked from the new hub, so the next DMM pass should bring them in line with the owner rules.

## 10. For owner confirmation
1. Bahrain transfers: still offered, and with what document requirements?
2. Child seats: offered at all from DMM? (Currently "confirmed in your quotation".)
3. Whether any arrivals procedure (e.g. a standard meeting point) can be described generally.
4. Supply of the photographs listed in section 5.
5. Arabic DMM page: none is mapped; decide whether one should exist.
