# 40 — Riyadh to Hail: page audit and redesign (local only)

**Date:** 21 November 2026  
**Status:** implemented locally. Not committed, pushed or deployed.  
**URL:** `/routes/riyadh-to-hail` (unchanged)

## 1. Initial audit findings

| Finding | Detail |
|---|---|
| Template | Shared domestic-route shell (`RouteJourneyView`) built from the record in `data/routes.ts` |
| Duplicate content | 23% of 8-word phrases were shared with `/routes/hail-to-riyadh` (copy written as mirror images) |
| Broken FAQ | The "return transfer" FAQ showed raw HTML (`<a href='/routes/hail-to-riyadh'>…`) as visible text, and the same text went into the FAQPage JSON-LD |
| Unverified claims | "No toll roads anywhere in Saudi Arabia", "fixed, all-in price", 24/7, no deposit, "every trip is tracked", communication about delays promised, drivers familiar with heritage sites, rest stops "at no extra cost" |
| Distance / time | "~640 km, 6 h 30 min". Routing gives about 614 km and about 6 h centre to centre, so the page now shows ranges |
| Highway 65 via Qassim | **Verified:** about 570 of 614 km are on Route 65 (Qassim Expressway, then Qassim–Hail Expressway) through Buraidah |
| Meta | The old title and description used "fixed price" wording |

## 2. Shared vs page-specific

| Element | Scope |
|---|---|
| `LongDistanceRouteView` | Shared by the 2 hand-written pages only. The Makkah → Dammam render was confirmed byte-identical after the refactor |
| Content (`data/riyadh-to-hail-route.ts`) | This page only |
| Vehicles (`data/vehicles.ts`) | Shared, read-only |
| `QuoteForm` and `/api/leads` | Shared, unchanged |
| Quote-form disclaimer ("fixed price") and footer | Shared. They still show this wording (decision D3) |

## 3. Files changed

| File | Change |
|---|---|
| `data/riyadh-to-hail-route.ts` | **New.** Copy and 12 FAQs |
| `components/routes/LongDistanceRouteView.tsx` | **New.** Generalised from the Makkah → Dammam view (now removed) |
| `data/long-route-pages.ts` | **New.** Registry of the two slugs |
| `data/makkah-to-dammam-route.ts` | Converted to the shared content type. Text unchanged |
| `app/(main)/routes/[slug]/page.tsx` | The Makkah → Dammam branch generalised to the registry |
| `data/routes.ts` | The `riyadh-to-hail` record: meta, `h1`, ranges, intro, about, notes, keywords, FAQs taken from the content file; old sections removed. **`hail-to-riyadh` untouched** |

## 4. Verification

| Check | Result |
|---|---|
| `tsc` | Clean |
| ESLint | 10 problems, the same as the baseline |
| One H1, unique title | Yes. No duplicate H2 text |
| Canonical and hreflang | Self-canonical; en and ar alternates |
| Links | 13 targets, all returning 200. No self-links, no raw HTML leaks |
| JSON-LD | BreadcrumbList, WebPage, Service (Riyadh, Buraidah, Hail), FAQPage with 12 questions. No duplicates |
| Keyword density | "riyadh to hail" 1.2% of 2,575 words |
| Overlap with `hail-to-riyadh` | 23.0% before → 2.3% after (only shared navigation, form and vehicle specs) |
| Production build and whole-site snapshot | **Pending:** your dev server on port 3000 is locking `.next`. Checked through the dev server instead |

## 5. Owner confirmation needed

1. Pickups at King Khalid International Airport are "confirmed individually" (the same wording as the RUH status work).
2. An overnight stop in Qassim can be requested, and the customer arranges the hotel.
3. Driver arrangement: "ask us", with no rest policy stated.
4. Destinations outside Hail city (Jubbah, for example) and onward trips are quoted individually.
5. Child seats are "mentioned and confirmed in the quotation", so availability isn't promised.
6. The shared fixed-price disclaimer and footer (D3).
7. **`/routes/hail-to-riyadh` still shows the old claims** (tolls, fixed price, tracking, raw HTML in an FAQ) and "~640 km / 6 h 30". It needs its own pass.
8. The Arabic page needs a native-speaker update.
