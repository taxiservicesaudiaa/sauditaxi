# 42 — Riyadh to Qassim: page audit and redesign (local only)

**Date:** 21 November 2026  
**Status:** implemented locally. Not committed, pushed or deployed.  
**URL:** `/routes/riyadh-to-qassim` (unchanged)

## 1. Audit findings

| Item | Before | Now |
|---|---|---|
| Region vs city | "Qassim" treated as one place; quote form drop-off prefilled "Qassim" | The page explains that Qassim is a region with Buraidah as its capital. Figures are given separately for Buraidah, Unaizah and farms. The drop-off is empty with the brief's placeholder, and the hero has destination chips |
| Distance / time | "~345 km, 3 h 30" | **Verified** (OSRM): Riyadh → Buraidah ≈346 km, ≈3.3 h (335–361 km depending on the Riyadh pickup); Unaizah ≈350 km; Buraidah ↔ Unaizah ≈30 km. Shown as ranges and labelled as estimates |
| Highway 65 | Claimed | **Verified:** about 331 km of the route |
| "Multi-lane divided", "good condition", "regular rest facilities" | Claimed | Removed (not verified) |
| Camel market "among the largest livestock markets in the world" and "trading most active early morning" | Claimed | Now "one of the best-known in the Kingdom", with "trading days and hours vary; check locally". No schedule claim |
| "Regularly serve farm visits", "familiar with camel market and farm-visit schedules" | Claimed | Now "farm addresses confirmed individually; send a map pin" |
| Fixed / all-in price, no tolls anywhere, 24/7, no deposit | Claimed | Removed. Pricing uses the brief's quotation wording |
| FAQ raw HTML | Two FAQs had `<a href>` in plain text (and in the schema) | Fixed |
| Flight field | Always shown | Shown only for airport trips |

## 2. Design (unique, theme: "the farming region")

- **Hero:** a centre-pivot ring pattern, with a destination-chip quote card placed first (Buraidah, Unaizah, farm, hotel, business address).
- **At a glance:** comparison cards for Buraidah, Unaizah and farms, with fact pills.
- **Distance section:** includes a "Highway 65 milestones" column.
- **Body:** a destination grid, then a printed-itinerary card for the journey, then checkerboard question cards.
- **Region and vehicles:** a dark regional-context band, then a vehicle guide matched to group size.
- **Booking:** a return banner and a centred full form.
- **Closing:** route cards with mini route lines, an FAQ index with jump links, and a CTA card on a sand background.

None of these patterns is used on the other three redesigned pages.

## 3. Files

| File | Change |
|---|---|
| `data/riyadh-to-qassim-route.ts` | **New.** Copy and 12 FAQs |
| `components/routes/RiyadhQassimRouteView.tsx` | **New.** The page layout |
| `components/routes/DestinationQuoteCard.tsx` | **New.** Chip quick form (hands off to `/get-quote`) |
| `components/QuoteForm.tsx` | New optional `dropoffPlaceholder` prop (in addition to `flightField` from report 41). **Defaults unchanged** |
| `data/long-route-pages.ts` | `qassim` view and `related` field |
| `app/(main)/routes/[slug]/page.tsx` | Renders the `qassim` view |
| `data/routes.ts` | The `riyadh-to-qassim` record only. **`qassim-to-riyadh` untouched** |

## 4. Verification

| Check | Result |
|---|---|
| `tsc` | Clean |
| ESLint | 10 problems, the same as the baseline |
| Production build | 905/905 (isolated checkout) |
| Whole-site snapshot | **Qassim delta:** 4 pages. This page, plus the "Riyadh to Qassim" route card on `/cities/riyadh`, `/routes/qassim-to-riyadh` and `/routes/riyadh-to-hail` (now "~345 km to Buraidah · approx. 3¼–3½ hours"). The Khafji work from report 41 accounts for its own 3 pages |
| Head tags | One H1. Unique title. Canonical and en/ar hreflang |
| Links | 9 targets, all 200. Contextual links to Riyadh → Hail, Qassim → Riyadh and Buraidah Taxi. No self-links, no `localhost`, in the sitemap |
| JSON-LD | Breadcrumb, WebPage, Service (Riyadh, Buraidah, Unaizah), FAQPage with 12 questions matching the visible FAQs |
| Overlap | 2.1% vs `qassim-to-riyadh`; 2.4–4.5% vs the other redesigned pages |
| Keyword density | "riyadh to qassim" 7 times in 2,250 words (0.9%) |

## 5. Owner confirmation needed

1. **Farm drop-offs:** "confirmed individually; mention unpaved access roads".
2. **Camel market as a drop-off point:** waiting time or a visit is not included unless it appears in the quotation.
3. **Onward legs to Hail and extra stops:** "quoted individually".
4. **Unaizah heritage details:** the "Paris of Najd" (attributed to Ameen Rihani) and Al Bassam Heritage House. These are well-documented, but confirm you're happy to include them.
5. **No Unaizah or Qassim taxi page exists,** so none is linked. Buraidah Taxi is linked.
6. **`/routes/qassim-to-riyadh` still has the old claims** (fixed price, raw HTML in FAQs, RUH wording from report 37) and needs its own pass.
7. The shared quote-form disclaimer and footer still say "fixed price" (decision D3).
8. The Arabic page needs a native-speaker update.
