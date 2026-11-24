# 55 — Abha final pass: template sentence, Abha Airport hub, Abha–Jeddah routes (local only)

**Date:** 24 November 2026.
- Nothing committed, pushed or deployed; no indexing requests.
- CMS and Arabic content untouched.
- No pages deleted, noindexed, 410'd or redirected.

## 1. Shared "fixed pricing" sentence (88 route pages)
- **File:** `lib/route-composer.ts`, the "Planning the Return Journey" block.
- **Before:** "Travelling back the other way? We also provide a private transfer in the opposite direction — see [Y to X] for fixed pricing and door-to-door pickup on the return leg."
- **After:** "Travelling back the other way? We also provide a private transfer in the opposite direction — see [Y to X] for the return journey."
- Dropping the trailing "door-to-door pickup on the return leg" avoids saying "return" twice. The sentence reads naturally with every route name, because only the link text varies.
- **Verified in the build:**
  - 0 pages still carry the old wording.
  - The new sentence appears on all 88 template pages, in the same block.
  - A 89th match is an unrelated blog post that already used the phrase "for the return journey" in its own text.

## 2. `/airport-transfer/abha-airport`: consistency pass
**How:** all changes are in `data/airport-guides.ts`, the Abha entry. Guide values are spread over the base record, so `data/airports.ts` (which belongs to the Dammam release) is untouched. The `AirportGuide` type gained optional `metaTitle`, `metaDescription`, `about`, `heroImage`, `heroAlt` and `hubOverrides`.

| Element | Before | After |
|---|---|---|
| Title / meta | "Private Abha Airport Transfer (AHB) \| Saudi Private Transfers" / "…Fixed price, meet-and-greet pickup." | "Abha Airport Transfers (AHB) \| Private Pickup to Abha" / "Private transfers from Abha International Airport (AHB) to Abha, Khamis Mushait and the Asir highlands. Share your flight and destination to receive a quotation." |
| Hero image | `/images/heroes/airport.webp` (AI-generated; "MEET & GREET" sign) | Verified Abha city photo (Aiman titi, CC BY-SA 3.0), **credited in the hero** |
| Core paragraph | "Your driver tracks your flight, meets you in the arrivals hall…" | ≈20 km from central Abha; "the meeting point is confirmed individually…; the confirmed quotation sets the price and explains what it covers" |
| Arriving | "your driver waits in the hall with a name board" | "go to the pickup point confirmed with your booking… rather than expecting a particular meeting arrangement" |
| Pickup steps (and the HowTo schema built from them) | Template: "We track your flight…", "waits in the arrivals hall with a name board… helps carry your luggage" | Before your flight → Your quotation (meeting point confirmed individually; message us if the flight changes) → After landing |
| Family paragraph | "drivers assist with luggage from the arrivals hall" | Vehicle by passenger count; child seats on request, subject to availability (number and ages) |
| Booking steps | "no prepayment required"; "waits… with a name board… help with luggage" | Send details → quotation (sets the price, explains what it covers) → confirm (quotation sets payment and cancellation terms) → follow the individually confirmed pickup |
| Final CTA | "…meet you in arrivals at AHB" | "…the meeting point is confirmed with your booking" |
| Destination cards | "with a driver used to the winding roads" | Fog note; stops and waiting set out in the quotation |
| FAQs (8) | Name board; "We track your flight… free wait time… fixed price"; "fixed price and a driver" | Meeting point confirmed individually; "message us… any waiting arrangements are set out in your confirmed quotation"; quotation wording; distances: airport ≈20 km to both Abha and Khamis Mushait (OSRM); Riyadh 935–950 km; Jeddah 695–705 km |

**Shared component change:**
- `AirportTransferHub.tsx` shows a hero photo credit **only** when the hero image has an entry in the new `data/image-credits.ts`, which currently holds the Abha photo only.
- The other 11 airport pages are unchanged (verified in the site-wide comparison).

**Kept as-is:** the airport-hub template's schema set (TaxiService + Service + HowTo + FAQPage) is shared by the remaining airports. Its HowTo now carries the corrected steps. hreflang is empty before and after, since no Arabic page is mapped.

## 3. Abha ↔ Jeddah routes
**Measured** (consistent endpoints: central Abha 18.2164, 42.5053 · central Jeddah 21.4858, 39.1925 · AHB 18.2404, 42.6566):

| Endpoints | OSRM | Valhalla | Published |
|---|---|---|---|
| Abha → Jeddah | 682 km · 7.8 h | 683 km · 7.4 h | **680–690 km · approx. 7.5–8 hours** |
| Jeddah → Abha | 681 km · 7.8 h | 683 km · 7.4 h | **680–690 km · approx. 7.5–8 hours** |
| AHB → Jeddah | 698 km · 8.0 h | 705 km · 7.7 h | **695–705 km · 7.5–8 hours** |

**Route (OSRM geometry):** down the escarpment to Ad Darb (≈86 km), then north on coastal Highway 5 past Al Birk, Al Qunfudhah and Al Lith to Jeddah. The old "through Jazan" was wrong: Jazan is 97 km off the route.

| Record | Changes |
|---|---|
| `abha-to-jeddah` (`routes.ts`) | Figures, route description, title and meta. Removed "Fixed rates… no meter surges" and "mountain-experienced drivers"; added quotation and child-seat notes |
| `jeddah-to-abha` (`routes.ts`) | Figures, route, title and meta. Removed "fixed upfront pricing… no hidden toll or fuel fees" and "mountain-experienced chauffeurs"; added a link to `/taxi-service/abha` |
| `abha-airport-to-jeddah` (`routes.ts` + `airport-route-content.ts`) | Figures; no flight tracking, arrivals-hall, name-sign, 24/7 or fixed-price claims; arrival and booking steps overridden (pickup point confirmed with the booking); child seats on request |

- **Dependent cards updated automatically:** `/airport-transfer/abha-airport`, `/cities/jeddah`, `/routes/riyadh-airport-to-jeddah`, the Abha page's intercity cards (figures now shown) and its Jeddah FAQ.
- "620 km" no longer appears anywhere on the built site.
- `makkah-to-abha` was not measured and has no figure on the Abha page.

## 4. Cross-page consistency (Riyadh to Abha · Abha city · Abha Airport, plus the Abha routes)

| Fact | Riyadh–Abha | Abha city | Abha Airport | Route pages |
|---|---|---|---|---|
| Riyadh ↔ Abha | 940–960 km · 11–12 h | same | — | same (both directions) |
| AHB → Riyadh | — | 935–950 km · 11–12 h | 935–950 km · 11–12 h | same |
| Abha ↔ Jeddah | — | 680–690 km · 7.5–8 h | — | same (both directions) |
| AHB → Jeddah | — | 695–705 km · 7.5–8 h | 695–705 km · 7.5–8 h | same |
| AHB → central Abha | ≈20 km | ≈20 km | ≈20 km | — |
| Meeting point at AHB | n/a | confirmed individually | confirmed individually | confirmed with the booking |
| Pricing | quotation | quotation | quotation | quotation (all six Abha routes) |
| Child seats | on request, number and ages | same | same | same |
| Overnight stops (Riyadh routes) | not offered | n/a | n/a | not offered |

**Claims scan** of all eight Abha pages: no fixed price, 24/7, free waiting, name board, meet-and-greet, arrivals-hall waiting, flight tracking, luggage help or driver-experience claims. Other figures on these pages (for example "Jeddah Airport to Riyadh 950 km · 9 hours") are related-route cards for **non-Abha routes**, not re-measured in this pass.

## 5. Checks
| Check | Result |
|---|---|
| `tsc` | Clean |
| ESLint | Changed files clean; full repo 10 problems, the same as the baseline |
| Production build (isolated: all Abha-release files + template + guides; **no Dammam files**) | 905/905 |
| Site-wide comparison vs the previous Abha build | **93 pages:** 88 template pages + `/airport-transfer/abha-airport` + `/taxi-service/abha` + the 3 Abha–Jeddah route pages and route cards (`/cities/jeddah`, `/routes/riyadh-airport-to-jeddah`). The only airport page changed is Abha's |
| HTTP | `/airport-transfer/abha-airport` and `/routes/abha-to-jeddah` return 200 |
| Canonical / hreflang / robots | Correct; unchanged structure |
| JSON-LD | All parse. FAQPage counts match the visible FAQs (Abha Airport 8, Abha–Jeddah 2, Jeddah–Abha 1, AHB–Jeddah 3) |
| Internal links | All exist |
| Images | Abha Airport hero credited; no AI images on the Abha pages |

## 6. Remaining image gaps (release not delayed)
1. Khamis Mushait (urban or skyline). The Abha page uses a text panel.
2. Abha International Airport (AHB) terminal (landside).
3. Asiri traditional architecture in Abha (e.g. Al-Muftaha village).
4. Genuine fleet photographs.
5. The Riyadh–Bisha highway, and the Khamis Mushait–Abha approach road (Riyadh–Abha page).

## 7. Files (Abha release; separate from Dammam)
| File | Change |
|---|---|
| `lib/route-composer.ts` | Reverse-route sentence |
| `data/airport-guides.ts` | Optional override fields; Abha Airport entry rewritten |
| `data/image-credits.ts` | **New**, hero credit lookup |
| `components/airport-transfer/AirportTransferHub.tsx` | Optional hero credit line |
| `data/routes.ts` | `abha-to-jeddah`, `jeddah-to-abha`, `abha-airport-to-jeddah` (plus earlier 52/53 records) |
| `data/airport-route-content.ts` | `abha-airport-to-jeddah` entry (plus `abha-airport-to-riyadh` from 53) |
| `data/abha-city-page.ts` | Jeddah figures and FAQ |
| Earlier (52–54) | `riyadh-to-abha-route.ts`, `RiyadhAbhaRouteView.tsx`, `long-route-pages.ts`, `routes/[slug]/page.tsx`, `abha-city-page.ts`, `AbhaCityView.tsx`, `taxi-service/[city]/page.tsx`, `cities.ts`, `city-guides.ts`, `public/images/asir/*` |
| Reports | 52, 53, 53b, 53c, 54, 55 |

The Dammam release remains separate: `airport-transfer/[airport]/page.tsx`, `data/airports.ts`, `dammam-airport-page.ts`, `DammamAirportView.tsx`, report 51. **The two releases share no files.**
