# 47 — Owner decisions applied: Abqaiq corrections, shared form wording, Dammam hub audit

**Date:** 21 November 2026 · Local only. **No commit, push or deploy.** Ziyarat work kept separable.

## 1. Owner decisions (now the source of truth)

| # | Decision |
|---|---|
| 1 | DMM meeting point is confirmed individually when booking. No arrivals-hall or pickup-zone promise, and no name board |
| 2 | Flight tracking: **yes** |
| 3 | No confirmed free-waiting allowance. Don't advertise it. *(Supersedes the Oct 2026 note in `data/airports.ts:224`: "flight tracking and free waiting are offered".)* |
| 4 | Separate-flight teams can request coordination, confirmed in the quotation |
| 5 | Work equipment subject to dimensions, quantity, vehicle suitability and the quotation |
| 6 | 24/7 not confirmed. Remove the claim |
| 7 | Pricing is quotation-based and confirmed by the customer. Not universally fixed-price or all-inclusive |
| 8 | Jubail and Abqaiq compound/facility pickups on request, subject to exact location, permission and access. Restricted-site access is never guaranteed |
| 9 | Riyadh airport drop-offs are case by case, confirmed in the quotation |
| 10 | Remove or rewrite unverified tracking and free-waiting statements in the DMM status notice. Tracking is now confirmed and the notice never mentioned free waiting, so **no change was needed** |

## 2. Changes made

| Fix | What changed | Files |
|---|---|---|
| A1 | The DMM → Khobar, Dhahran and Jubail cards on the Abqaiq page no longer show figures (`hideMeta`). The route records are untouched. The Riyadh card still shows "400 km · 4 hours" (OSRM 399 km) | `data/dammam-airport-to-abqaiq-route.ts`, `components/routes/DmmAbqaiqRouteView.tsx` |
| Abqaiq wording | "We track your flight" (steps, delay note, FAQ). Team coordination is "you can ask… confirmed in your quotation". Meeting point "confirmed individually when you book". No free waiting | `data/dammam-airport-to-abqaiq-route.ts` |
| Jubail wording | Removed "we don't promise flight tracking" (contradicted decision 2) | `data/jubail-to-riyadh-route.ts` |
| A2 | `dammam-to-abqaiq` and `abqaiq-to-dammam`: **75–85 km, approx. 1 hour** (OSRM 75–82 km, 58–61 min). `abqaiq-to-dammam-airport`: **95–105 km, approx. 1 hr–1 hr 15 min** (OSRM 98 km / 69 min). Removed: 24/7, fixed price, "drivers experienced at Aramco facility gates", "one of the world's largest…", and team coordination presented as guaranteed. Facility pickups are now subject to permission and access. The reverse page's booking steps, CTA and form subheading use quotation wording through **per-route overrides** (the shared template is untouched) | `data/dammam-routes.ts`, `data/city-airport-route-content.ts` |
| A3 | `quoteForm.disclaimer` "…a fixed price for your journey" → "…a quotation for your journey". `quoteForm.successBody` "…availability and a fixed price" → "…availability and a quotation" | `locales/en/common.json` (English only) |

**A3 reach:** 258 English pages render the quote form. In the full-site comparison, **252 pages changed only in this sentence**. The other 6 are the intentionally edited pages listed below. **Arabic pages are unchanged** (Arabic strings need a native reviewer).

## 3. Verification

| Check | Result |
|---|---|
| `tsc` | Clean |
| ESLint | 10 problems, the same as the baseline |
| Production build | 905/905 (isolated checkout of the full working tree) |
| Full-site comparison (vs the previous working-tree build) | 258 pages: 252 disclaimer-only; 6 intentional (`routes/dammam-airport-to-abqaiq`, `routes/abqaiq-to-dammam-airport`, `routes/dammam-to-abqaiq`, `routes/abqaiq-to-dammam`, `routes/jubail-to-riyadh`, and `cities/dammam` for the Abqaiq route cards' new distances) |
| Internal links | 25 unique targets on the edited pages, all present in the build |
| Pages, URLs, sitemap | No deletion, noindex, redirect, merge or sitemap removal |

## 4. Hub audit (report 46 items). Audit only, not changed

Items marked **D** are Dammam-specific edits. Items marked **S** are in shared templates or data that affect other cities or airports too.

### `/airport-transfer/dammam-airport`

| Claim | Decision | Source |
|---|---|---|
| "We track your flight" (notice, body, cards "with flight tracking") | ✅ now confirmed (decision 2) | `data/airport-status.ts`, `data/airports.ts:223,230`, `data/airport-guides.ts` (dammam ~293–343) |
| "**Free waiting time is included** if your flight lands late" (×3) | ❌ decision 3 | **D:** `data/airports.ts` (dammam hubOverrides), `data/airport-guides.ts` (dammam entry) |
| "Your driver… **helps carry your luggage**" | ⚠ not covered by any decision | **D:** `data/airports.ts:246`; **S:** `app/(main)/airport-transfer/[airport]/page.tsx:94` default |
| "Private transfers… to Jubail, Dhahran, **Aramco areas**…" | ⚠ decision 8 (implies site access) | **D:** `data/airport-guides.ts:343` |
| No link to `/routes/dammam-airport-to-abqaiq` | Suggest adding | `data/airports.ts` (popular routes) |

### `/taxi-service/dammam`

| Claim | Decision | Source |
|---|---|---|
| "Your driver tracks your flight and **meets you in the arrivals hall with a name board**" | ❌ decision 1 (tracking itself is fine) | **D:** `data/city-guides.ts:658` |
| "Fixed-price long-distance transfers", "Fixed-price private transfers…", "We reply with a **fixed price**…", FAQ "fixed price agreed before you travel" | ❌ decision 7 | **D:** `data/city-guides.ts` (dammam ~644–720: lines 685, 699 and others) |

### `/cities/dammam` (Dammam hotel hub)

| Claim | Decision | Source |
|---|---|---|
| Hotels "**18–24 km / 20–27 min** from DMM" | ❌ factual: OSRM 39–44 km / 30–34 min to central Dammam and the Corniche | **D:** `data/hotels.ts` (Dammam `distanceKm`/`durationMin`), which also shows on **15 Dammam hotel transfer pages** |
| Meta "Fixed price, **meet-and-greet**…" | ❌ decisions 1 and 7 | **D:** `app/(main)/cities/[city]/page.tsx:80` |
| "Fixed prices, meet-and-greet", "fixed price agreed before you travel" | ❌ decisions 1 and 7 | **S:** `app/(main)/cities/[city]/page.tsx:109, 290` (all hotel hubs) |
| "Get a fixed quote… clear, all-in price" | ❌ decision 7 | **S:** `components/sections/HowItWorks.tsx:11–12` (site-wide) |
| JSON-LD **24/7** | ❌ decision 6 | **S:** `app/(main)/cities/[city]/page.tsx` schema |
| "we track your flight and quote…" | ✅ decision 2 | `data/city-guides.ts` |
| Riyadh → Jubail card "~480 km, 4 h 45", "one of the world's largest industrial cities" | ❌ inconsistent with corrected Jubail → Riyadh | `data/routes.ts` (`riyadh-to-jubail`) |

### Also remaining (shared, outside this task)

| Wording | Where |
|---|---|
| "Fixed price for your private transfer." / "…we reply with a fixed price." | Domestic route template, `app/(main)/routes/[slug]/page.tsx` (shows on `dammam-to-abqaiq`, `abqaiq-to-dammam` and every other domestic route) |
| Generic pickup and drop-off lists including "Religious site", "Tourist location", "Border point" | Same template (domestic routes without a hand-written layout) |
| "Fast WhatsApp quotes, fixed prices…" | `footer.description` (site-wide) |
| "…a fast, fixed quote on WhatsApp" | `ctaSection.subtitle` (site-wide) |
| Fixed-price wording | Arabic `locales/ar/common.json` (needs a native reviewer) |

## 5. Changed files vs `00f5234`

**Four-route release (including today's fixes):**

- Modified:
  - `app/(main)/routes/[slug]/page.tsx`
  - `components/QuoteForm.tsx`
  - `data/dammam-routes.ts`
  - `data/long-route-pages.ts`
  - `data/routes.ts`
  - `data/city-airport-route-content.ts`
  - `locales/en/common.json`
- New:
  - `components/routes/DammamKhafjiRouteView.tsx`, `GlassQuoteForm.tsx`, `RiyadhQassimRouteView.tsx`, `DestinationQuoteCard.tsx`, `JubailRiyadhRouteView.tsx`, `TabbedQuoteForm.tsx`, `DmmAbqaiqRouteView.tsx`, `ArrivalQuoteCard.tsx`
  - `data/dammam-to-al-khafji-route.ts`, `riyadh-to-qassim-route.ts`, `jubail-to-riyadh-route.ts`, `dammam-airport-to-abqaiq-route.ts`
  - `reports/…/41, 42, 43, 44, 46, 47`

**Makkah Ziyarat (keep separate):**

- Modified: `app/(main)/[city]/[route]/page.tsx`, `data/point-transfer-v2/makkah.ts`
- New: `components/makkah/MakkahZiyaratTourView.tsx`, `components/makkah/ZiyaratPlanner.tsx`, `data/makkah-ziyarat-tour.ts`, `reports/…/45`

No file is needed by both releases except `QuoteForm.tsx` and `locales/en/common.json`, which belong to the four-route release. The Ziyarat files only use already-optional props.

## 6. Remaining operational uncertainties

1. **Luggage assistance** ("driver helps carry your luggage") on the DMM hub and the airport-hub template default.
2. **"Aramco areas"** on the DMM hub: rephrase as "Abqaiq and Dhahran, subject to access"?
3. **Dammam hotel distances** (`data/hotels.ts`): correct to OSRM figures? This changes 15 hotel pages and the hub.
4. **Site-wide fixed-price wording:** `HowItWorks`, the domestic route template, the hotel-hub template, `footer.description` and `ctaSection.subtitle`. Each is shared; please approve them individually.
5. **Hotel-hub JSON-LD 24/7** (shared template).
6. Whether to link the DMM hub to the new Abqaiq page.
7. The DMM status notice is still dated 22 October. Its content now matches the decisions; re-date or retire?
8. Arabic equivalents of every changed English string.
