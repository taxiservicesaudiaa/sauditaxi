# 57 — Jazan consistency pass: Jazan Airport hub, Riyadh ↔ Jizan routes, ferry return pickups, link audit (local only)

**Date:** 24 November 2026. **Nothing committed, pushed or deployed; no indexing requests; CMS and Arabic untouched; no URL deleted, redirected, noindexed or removed from the sitemap.**

## 1. `/airport-transfer/jazan-airport` (GIZ)
**How:** all changes are in `data/airport-guides.ts`, the Jazan entry, the same mechanism as Abha. `AirportGuide` gained an optional `intro`.

**Hero credit:** added to `data/image-credits.ts`. The shared hub shows it only for images listed there.

| Element | Before | After |
|---|---|---|
| Title / meta | "Private Jazan Airport Transfer (GIZ) \| Saudi Private Transfers" / "…or onward to Abha and Najran. Fixed price." | "Jazan Airport Transfers (GIZ) \| Private Pickup in Jazan" / "Private transfers from Jazan Airport (GIZ) to Jazan hotels, the Farasan ferry terminal, the Fayfa Mountains, Abha and Najran. Share your flight details for a quotation." |
| Hero | AI-generated airport image ("MEET & GREET" sign) | Jazan mangroves (SPA, CC BY-SA 4.0), credited in the hero |
| Hero summary | "…the Fifa Mountains." | "…about 4 km from central Jazan… the Farasan Islands ferry terminal, the Fayfa Mountains and onward cities." |
| Core paragraph | "Your driver tracks your flight, meets you in the arrivals hall… fixed price… luggage" | Official name (King Abdullah bin Abdulaziz International Airport); ≈4 km; meeting point confirmed individually; quotation wording |
| Arriving | "driver meets you in the hall with a name board" | "go to the pickup point confirmed with your booking"; message us if the flight changes |
| Pickup steps / HowTo | Template: tracking, arrivals hall, name board, luggage help | Before your flight → Your quotation (meeting point confirmed individually) → After landing |
| Destination cards | "a local driver used to the steep, winding roads" | City and corniche; **ferry terminal (to and return; ticket, schedule, crossing and on-island transport not included)**; Fayfa ≈100 km; Abha / Najran / Riyadh with verified distances |
| Family paragraph | "drivers assist with luggage from the arrivals hall" | Passenger and luggage numbers, equipment sizes; approved child-seat wording |
| Booking steps / final CTA | "no prepayment required"; "meet you in arrivals" | Quotation sets the price; payment and cancellation terms are in the quotation; meeting point confirmed with the booking |
| FAQs (8) | Name board; "We track your flight… free wait time… fixed price"; "meet-and-greet… for any arrival time" | Airport ≈4 km to the centre and ≈7 km to the ferry terminal; ferry terminal transfer (what's excluded); meeting point; delays (message us); hotel; families and child seats; Abha / Najran / Riyadh distances; booking ahead |
| "Popular transfers" | Empty block (no airport-origin routes) | The template's existing fallback text, linking to the Jazan city service |

**Flight tracking:** none claimed at GIZ. Only DMM has owner-confirmed tracking.

## 2. Riyadh ↔ Jizan route pages
**Measured** (consistent endpoints: central Riyadh 24.7136, 46.6753 · central Jazan 16.8892, 42.5611 · GIZ 16.9011, 42.5858):

| Endpoints | OSRM | Valhalla |
|---|---|---|
| Riyadh → Jazan | 1,141 km · 13.6 h | 1,145 km · 15.0 h |
| Jazan → Riyadh | 1,140 km · 13.7 h | 1,192 km · 15.2 h |
| GIZ → Riyadh | 1,140 km · 13.7 h | — |

- **Published:** about 1,140–1,190 km, approx. 13.5–15 hours of driving before breaks. The old figures were 1,000 km and 10 hours.
- **Route (OSRM geometry):** Bisha (≈703 km), Khamis Mushait (≈924 km), Abha (≈950 km), down to Ad Darb (≈1,031 km), then south via Sabya to Jazan.

| Record | Removed or corrected |
|---|---|
| `riyadh-to-jizan` | 1,000 km / 10 h; "via Highway 10 and coastal routes"; **"King Abdullah Economic City"** (wrong city: KAEC is near Rabigh); "24/7 booking… on-time, fixed price"; "unlimited luggage capacity"; "experienced highway chauffeurs with safety… protocols"; "one of the longest" |
| `jizan-to-riyadh` | 1,000 km / 10 h; "Fixed upfront quotes with zero hidden fees"; "spacious luggage capacity". The ferry-terminal FAQ was rewritten to match the owner's confirmation (return pickup on request, confirmed in advance, timings not guaranteed) |

- **Both records:** new titles and metas, route description, quotation wording, child seats on request and a link to `/taxi-service/jazan`.
- **Overnight stops:** not mentioned. Arrangements on these routes are **not confirmed** (owner decision below).
- **Dependent cards updated automatically:** `/cities/riyadh` (verified: "1,140–1,190 km · approx. 13.5–15 hours"), the Jazan Airport hub card, and the Jazan city page's connections table (Riyadh figures now shown).

## 3. Farasan ferry: owner confirmation applied (Jazan city page)
- **New panel, "Coming back from Farasan":** "We can also arrange a return pickup from the Jazan ferry terminal when you arrive back from the islands… Share your expected ferry arrival time and confirm the return transfer in advance."
- **"Not included" note:** "Our service is the road transfer to and from the Jazan ferry terminal. Ferry tickets, sailing schedules, the crossing itself and transport within the Farasan Islands are not included. We can't guarantee ferry timings or availability, and each road transfer is confirmed separately."
- **Planning points:** "Give us your ferry times" (departure for outbound, arrival for return) and "If the sailing changes" (timings not guaranteed; message us).
- **New FAQ:** "Can you pick me up at the ferry terminal when I return from Farasan?" The crossing FAQ now also excludes tickets, schedules and on-island transport. FAQs are 15, matching the schema.
- **Other updates:** the triptych "what to send", the journey card "Farasan ferry terminal" and the checklist ("ferry departure or arrival time").
- **Unchanged:** nothing on the page advertises transport on the islands.

## 4. Jazan internal-link audit (main content, built site; no broken links)
| Target | Linked from |
|---|---|
| `/taxi-service/jazan` | `/airport-transfer/jazan-airport`, `/routes/jizan-to-riyadh`, `/routes/riyadh-to-jizan`, `/taxi-service/abha` (+ sitemap) |
| `/airport-transfer/jazan-airport` | `/taxi-service/jazan`, `/airport-transfer/abha-airport` |
| `/routes/jizan-to-riyadh` | `/taxi-service/jazan`, `/airport-transfer/jazan-airport`, `/routes/riyadh-to-jizan`, `/cities/riyadh` |
| `/routes/riyadh-to-jizan` | `/taxi-service/jazan`, `/routes/jizan-to-riyadh`, `/cities/riyadh` |

**Gaps (not changed in this task):**
- `/taxi-service/najran` and `/taxi-service/khamis-mushait` mention Jazan in the body but don't link to `/taxi-service/jazan`. They link only from the header or footer, or not at all.
- `/airport-transfer/abha-airport` links to the Jazan **airport** page but not the Jazan city page.

### Future route-page opportunities (not created)
| Candidate | Evidence | Verified figures to reuse |
|---|---|---|
| `jazan-to-abha` / `abha-to-jazan` | 13 English pages mention Jazan and Abha together (Abha and Jazan city pages, both airport hubs, Khamis Mushait, Najran, Makkah–Abha, Riyadh–Jizan, two blog guides…). The Jazan city page and Abha page currently link to the city pages instead | 200–215 km · ≈2.5–3 h (OSRM 200 km / 2.4 h; Valhalla 216 km / 2.8 h) |
| `jazan-to-najran` / `najran-to-jazan` | 8 pages mention Jazan and Najran together. The Jazan page links to `/taxi-service/najran` | 325–330 km · ≈5–6 h (OSRM 326 km / 4.7 h; Valhalla 328 km / 5.7 h) |
| `jazan-airport-to-abha` | Both airport hubs reference the corridor | Not measured yet |

**Suggested approach:**
- Add the records to `data/routes.ts` with distinct intents: coast-to-highlands vs highlands-to-coast; a Najran inland route.
- Then link them from the Jazan city connections table and journey cards, the Abha intercity list, both airport hubs, and Najran and Khamis Mushait.
- Arabic counterparts only after native review.

## 5. Checks
| Check | Result |
|---|---|
| `tsc` | Clean |
| ESLint | Changed files clean; repo total 10 (existing) |
| Production build (isolated checkout of `84c23d5` + reports 56 and 57 changes) | 905/905 |
| Site-wide comparison vs the report-56 build | **5 pages:** `airport-transfer/jazan-airport`, `routes/jizan-to-riyadh`, `routes/riyadh-to-jizan` (title, meta, JSON-LD, main); `taxi-service/jazan` (JSON-LD, main); `cities/riyadh` (card) |
| HTTP | 200 on all edited pages |
| Canonical / hreflang | Correct. The Jazan Airport hub has no Arabic page mapped, the same as before |
| JSON-LD | All parse. FAQPage: Jazan Airport 8, Jazan city 15, each route 2, all matching visible FAQs |
| Claims scan (all edited pages) | No fixed price, 24/7, name board, meet-and-greet, arrivals-hall waiting, flight tracking, free waiting, luggage help, "experienced" drivers, KAEC, or 1,000 km / 10 h. "Guarantee" appears only in negatives |
| Visual | Desktop 1440 and mobile 500 screenshots of the Jazan Airport hub, `riyadh-to-jizan` and the Jazan page: no overflow; the ferry diagram and return panel render as intended |

**Outside the edited scope:** `/cities/riyadh` still carries its own legacy wording ("fixed upfront pricing", "24/7", meet-and-greet for Jeddah Airport) and other routes' unverified card figures.

## 6. Owner decisions
1. **Overnight stops on Riyadh ↔ Jizan** (≈13.5–15 h of driving): offered or not? The pages currently say only "discuss your departure time and breaks".
2. **Flight tracking at GIZ:** keep it out (current) until confirmed?
3. **Approve** creating the Jazan–Abha and Jazan–Najran route pages in a later task?
4. **Add contextual Jazan links** to `/taxi-service/najran`, `/taxi-service/khamis-mushait` and `/airport-transfer/abha-airport`?

## 7. Files
| File | Change |
|---|---|
| `data/airport-guides.ts` | Optional `intro`; Jazan Airport entry rewritten |
| `data/image-credits.ts` | Jazan hub hero credit |
| `data/routes.ts` | `riyadh-to-jizan`, `jizan-to-riyadh` |
| `data/jazan-city-page.ts` | Ferry return pickups, Riyadh figures, FAQs (15) |
| `components/city-transfer/JazanCityView.tsx` | Return-leg panel |
| From report 56 (still uncommitted) | `app/(main)/taxi-service/[city]/page.tsx`, `data/cities.ts`, `data/abha-city-page.ts`, `public/images/jazan/*`, report 56 |
| `reports/…/57-jazan-consistency-pass.md` | This report |
