# 45 — Makkah Ziyarat Tour: page audit and redesign (local only)

**Date:** 21 November 2026  
**Status:** implemented locally. **No commit, push or deployment.**  
**URL:** `/makkah/makkah-ziyarat-tour` (unchanged)

## 1. Audit findings

| Item | Before | Now |
|---|---|---|
| Template | Shared `PointTransferV2View` (used by many Makkah pages), from `data/point-transfer-v2/makkah.ts` | Its own layout. The V2 entry still supplies metadata, static params and both sitemaps; its content blocks are no longer rendered |
| Pricing | "One fixed price", "one fixed, all-inclusive price… covering waiting time at every stop" | Removed. Quotation per itinerary |
| Durations | "Half day 4–5 hrs / full day 7–8 hrs" as facts | "Half-day or full-day, depending on your stops". Only **measured driving** is stated: full loop ≈84 km / ≈2 h, ≈66 km / ≈1.5 h without Jabal Thawr (OSRM; previous "~60–80 km, ~2–2.5 hrs driving" was roughly right) |
| Leg distances | "~12–14 km" Noor→Thawr, "~4–5 km" Mina→Muzdalifah, "~10–12 km" Muzdalifah→Arafat | Measured: 17.6 km, 6.9 km and 9.8 km. Shown as rounded legs and driving times |
| Climb claims | "Jabal al-Noor climb 2–2.5 hrs", "start 5–7 a.m. strongly recommended" | No timed or step-count claims. "Steep, exposed, demanding"; Thawr "longer and steeper"; early starts are cooler. Base visit and climb are clearly separated. **Driver stays with the vehicle; doesn't accompany climbs** |
| Hajj sites | "Outside Hajj, all three sites are open, quiet and straightforward" | "Can usually be visited by vehicle outside the Hajj period; access is restricted around Hajj and visits may not be possible on some dates" |
| Wheelchair | "Can reach the Hajj plain sites largely by vehicle" | "Much can be seen from the vehicle; we can't promise step-free access at any site" |
| Driver advice | "Your driver can advise at the time" | Removed (no claimed expertise) |
| Religious framing | — | States that Ziyarat visits are optional and not part of Umrah or Hajj. Descriptions kept to widely accepted facts ("traditionally associated", "according to tradition") |
| Image | Generic alt "Historic Islamic Ziyarat sites around Makkah" | The photo is recognisably **Jabal al-Rahmah, Arafat** (white summit pillar), so it is used with an accurate alt and caption. The Cave of Hira image looks digitally stylised and is **not** used |
| Overlap | 24.1% of 8-word phrases shared with `/makkah/makkah-historical-sites-tour` | 2.1%; 0–2.4% vs other Ziyarat pages |
| Backlinks | All five site pages already link to this tour | Kept as they were |

## 2. Design (unique: photo-led "circuit" layout)

- **Hero:** a framed photo (the first real photo on any redesigned page).
- **Facts:** a seven-item icon fact strip.
- **Circuit:** a loop diagram with measured legs, and seven site cards with **"Base visit by car / Optional climb / Visit by vehicle / Optional stop"** badges.
- **Planning and timing:** seven numbered planning factors, then a **time-budget panel** that separates "Measured" driving from "Depends on you" (time at sites, climbs, breaks), plus a leg-time table.
- **Itineraries and vehicles:** five itinerary cards showing stops in order, and a light vehicle table.
- **Site pages:** an ItemList grid of the six site pages.
- **Before booking:** a know-before-you-go list and four booking steps.
- **Itinerary builder:** sites, base or climb, tour length and mobility needs. It writes a plain-text summary into the existing quote form's message field and builds a WhatsApp message.
- **Closing:** related Makkah services, FAQs, the method note and an image CTA band.

## 3. Quote form and CRM

- The QuoteForm and `/api/leads` are unchanged. The builder adds no new fields: it writes into the existing `message` field (sites, base/climb, length, accessibility).
- Drop-off is prefilled "Ziyarat tour – return to pickup point". The message placeholder is the brief's text. The flight field only appears for airport trips.
- WhatsApp: hero and CTA use "Hello! I'd like a quote for a private Ziyarat tour in Makkah."; the builder appends the itinerary summary.
- No lead was submitted. The builder's "Add to my request" was checked by code review, not by clicking it in a browser.

## 4. Files

| File | Change |
|---|---|
| `data/makkah-ziyarat-tour.ts` | **New.** Copy and 12 FAQs |
| `components/makkah/MakkahZiyaratTourView.tsx` | **New.** The page layout |
| `components/makkah/ZiyaratPlanner.tsx` | **New.** Itinerary builder |
| `app/(main)/[city]/[route]/page.tsx` | A branch for this path only. Schema: Breadcrumb, WebPage, Service, ItemList (6 site pages), FAQPage. Every other V2 page is unchanged |
| `data/point-transfer-v2/makkah.ts` | This entry's `h1`, `metaTitle`, `metaDescription` and `duration` only |

## 5. Verification

| Check | Result |
|---|---|
| `tsc` | Clean |
| ESLint | 10 problems, the same as the baseline |
| Production build | 905/905 (isolated checkout) |
| Whole-site snapshot | **Ziyarat delta:** 2 pages. This page, and `/sitemap` (the HTML sitemap shows the new H1 as the link label) |
| Head tags | One H1. Title "Makkah Ziyarat Tour by Private Car \| Full-Day & Half-Day" (unique). Canonical and en/ar hreflang |
| Links | 10 targets, all 200. The six site pages, Makkah Taxi, Ziyarat Taxi and Umrah Taxi. No self-links |
| JSON-LD | Breadcrumb, WebPage, Service, ItemList (6), FAQPage with 12 questions matching the visible FAQs. No prices, ratings or access claims |
| Images | Alt text is accurate; the decorative CTA background has an empty alt |
| Encoding | No mojibake. No `localhost`. In `sitemap.xml` |

## 6. Owner confirmation needed

1. **Waiting:** "how long the car waits at each stop is part of your quoted itinerary".
2. **Half-day and full-day availability.**
3. Minimum and maximum tour lengths, and the earliest start time.
4. **Historical wording** for the Cave of Hira, Jabal Thawr, Mina, Muzdalifah, Arafat, Jabal al-Rahmah (Farewell Sermon "traditionally associated"), Masjid Aisha (ihram for an additional Umrah) and Jannat al-Mu'alla (Khadijah "according to tradition"; "entry rules apply"). Ideally checked by a knowledgeable reviewer.
5. "Entry to Makkah is for Muslims only" is shown in the know-before-you-go list.
6. **The five individual site pages** (Cave of Hira, Jabal Thawr, Mina, Muzdalifah, Arafat) still carry the old fixed-price and timed-climb claims (for example "1,650 steps") and need their own pass.
7. The shared quote-form disclaimer and footer still say "fixed price" (decision D3).
8. The Arabic page needs a native-speaker update.
