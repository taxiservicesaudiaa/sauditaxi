# 61: Riyadh to Yanbu rebuild (`/routes/riyadh-to-yanbu`) (local only)

**Date:** 25 November 2026.

**Not done:** no commit, push or deployment; no form submission or indexing request. Arabic was not edited. No page was deleted, redirected or noindexed, and none was removed from the sitemap.

## 1. Files changed

| File | Status | Change |
|---|---|---|
| `data/riyadh-to-yanbu-route.ts` | New | Copy, facts with sources, photos (with credits), 10 FAQs |
| `components/routes/RiyadhYanbuRouteView.tsx` | New | The "capital to the coast" layout |
| `public/images/yanbu/*.webp` (7) | New | Licensed photos |
| `data/long-route-pages.ts` | Modified | `riyadh-to-yanbu` entry, view `"yanbu"` |
| `app/(main)/routes/[slug]/page.tsx` | Modified | Import and render branch for the new view |
| `data/routes.ts` | Modified | `riyadh-to-yanbu` record rewritten. `yanbu-to-riyadh`: **figures only** |
| `data/photo-credits.ts` | Modified | Riyadh to Yanbu group added to `/image-credits` |

## 2. Route facts (checked 25 Nov 2026)

| Endpoints | OSRM | Valhalla |
|---|---|---|
| Central Riyadh → Yanbu Al-Bahr | 1,058 km · 10.3 h | 1,062 km · 9.8 h |
| Central Riyadh → Yanbu Industrial City | 1,037 km · 10.1 h | 1,041 km · 9.6 h |
| Yanbu Al-Bahr → Riyadh | 1,055 km · 10.4 h | 1,063 km · 9.9 h |

- **Published:** about 1,040–1,060 km, roughly 9.5–10.5 hours of driving before breaks. The old page said ~950 km and 9 h 30 min. Confidence is high: two engines agree to within 1%.
- **Route (OSRM geometry):** north-west through the Al-Qassim area (≈340 km, near Buraydah and Unaizah), west across the desert (Al Henakiyah ≈720 km), past the outskirts of Madinah (≈820 km), then down to the coast. Road numbers are not shown.
- **Yanbu Industrial City:** south-east of Yanbu Al-Bahr, ≈20–30 km depending on the address. Sources: the Royal Commission city guide (≈20 km) and OSRM (29 km to a point in the industrial city). It is run by the Royal Commission for Jubail and Yanbu.
- **Tolls:** no reliable official source either way, so no toll claim is made.

## 3. Content, section by section

1. **Hero:** "Capital to the Red Sea" with the two Yanbus, Get a Quote and WhatsApp buttons, two key figures, and a NASA photo of Yanbu.
2. **At a glance:** an answer-first summary plus 4 figures (distance, time, from, to), with a note on how they were estimated.
3. **How the journey unfolds:** a desert-to-sea bar with markers placed by distance, then 4 stage cards. Breaks are agreed when the transfer is confirmed.
4. **The service:** one vehicle; a quotation before you confirm; give the exact destination. Controlled-entry sites: drop-off at a point you're allowed to use, and permits are for the customer or host to arrange.
5. **Who it suits:** families and holidaymakers; business and industrial-sector travellers; residents.
6. **Two Yanbus:** destination cards for Yanbu Al-Bahr and Yanbu Industrial City, plus a photo trio of the historic quarter.
7. **The road / planning a long journey:** geography only, and "you don't need to plan the route". Planning: an early start, breaks, vehicle room and the exact address.
8. **Vehicles:** the site's own vehicle categories, with their published passenger and luggage figures.
9. **Booking:** 4 steps, then the shared QuoteForm (pickup Riyadh, drop-off Yanbu; flight field only for airport trips).
10. **FAQs (10):** distance, time, Al-Bahr, Industrial City, vehicle, stops, Madinah, return, quotation details, onward travel.
11. **Return and onward links:** Yanbu to Riyadh, Yanbu to Jeddah, Yanbu to Madinah, Riyadh city transfers. No figures are shown on these cards.

## 4. Claims removed

- **Pricing:** fixed price / fare / all-in; "Your fixed price covers the complete journey"; no deposit; no meter or surge.
- **Tolls and roads:** "No toll roads… anywhere in Saudi Arabia"; "well-maintained across the length"; "the fastest route" / "most direct practical option".
- **Drivers and service:** "drivers experienced with this long westward run"; "drivers pace the journey"; "every trip tracked"; "familiar with… the industrial city's layout"; "structured rest-stop planning" and "rest stops as standard"; "operate 24/7"; "door to door" as a guarantee.

**Claims scan of the new page:** the only match is the disclaimer "not guaranteed journey times".

## 5. Photography (all genuine; licences read from Commons metadata; credited on `/image-credits`)

| File | Subject | Author · licence |
|---|---|---|
| `yanbu-from-space.webp` | Yanbu Al-Bahr and its reef from the ISS (hero, schema image) | NASA · public domain |
| `old-yanbu-street.webp` | Restored houses, historic quarter (OG image, final CTA) | Richard Mortel · CC BY 2.0 (FlickreviewR ✓) |
| `old-yanbu-house.webp` | Rawasheen balconies (Al-Bahr card) | Richard Mortel · CC BY 2.0 ✓ |
| `old-yanbu-night.webp` | Historic quarter at night | Richard Mortel · CC BY 2.0 ✓ |
| `al-sanusi-minaret.webp` | Al-Sanusi Mosque minaret (1838) | Richard Mortel · CC BY 2.0 ✓ |
| `suwaiqa-radwa.webp` | Suwaiqa with the Radwa mountains | Averroex · CC BY-SA 4.0 |
| `yanbu-industrial-housing.webp` | Residential district, Yanbu Industrial City (Industrial card) | Aaiq2005 · CC BY-SA 4.0 |

- **Rejected:** "شرم ينبع", because the image shows a stone building, not the sea.
- **No Corniche or beach photo:** no licensed one was found, so none is used. The reef is shown in the NASA image.

## 6. SEO and structured data

- **Title:** "Riyadh to Yanbu Private Transfer | Capital to the Red Sea".
- **Meta description:** "Request a private transfer from Riyadh to Yanbu Al-Bahr or Yanbu Industrial City: about 1,040–1,060 km, roughly 9.5–10.5 hours of driving. Get a quotation."
- **Headings:** one H1 and 12 H2s.
- **Canonical:** self. **hreflang:** en and ar (unchanged). **Robots:** index, follow. **OG image:** the old-town photo.
- **JSON-LD:**
  - BreadcrumbList.
  - WebPage, with `primaryImageOfPage`, licence and author.
  - Service, with `areaServed` Riyadh (Riyadh Region) and Yanbu (Madinah Province) and their coordinates.
  - FAQPage (10), all visible (10/10).
- **No geo meta tags.**

## 7. Internal links and the reverse route

- **New page:** 6 internal links, none broken.
- **`/routes/yanbu-to-riyadh`:** distance and duration fields, meta description, overview paragraph and distance FAQ now say 1,040–1,060 km and 9.5–10.5 hours.
- **Cards showing the new figures:** `cities/riyadh`, `airport-transfer/yanbu-airport`, `routes/yanbu-to-{jeddah,madinah,alula}`.

## 8. QA

| Check | Result |
|---|---|
| TypeScript | 0 errors |
| Lint | Repo 10 problems, the same pre-existing set. In the changed files: only the existing `getBorder` unused warning in `page.tsx` (present in HEAD) |
| Production build (isolated worktree + `.env`) | Exit 0, 906/906 |
| Site diff vs the last build | 8 pages: `routes/riyadh-to-yanbu` (title, meta, JSON-LD, body), `routes/yanbu-to-riyadh` (meta, JSON-LD, body), `image-credits`, and the cards on `cities/riyadh`, `airport-transfer/yanbu-airport`, `routes/yanbu-to-{alula,jeddah,madinah}`. Nothing added or removed |
| Form | Pickup "Riyadh", drop-off "Yanbu"; the shared QuoteForm and backend are unchanged; no submission |
| Visual | Desktop 1440 and mobile 500 screenshots: stage bar on desktop, stacked cards on mobile, no overflow |
| Arabic | 0 files changed |

## 9. Owner decisions

1. **`/routes/yanbu-to-riyadh` still carries legacy claims:** fixed price, "operate 24/7", "no deposit", "every trip is tracked", flight tracking, "no toll roads… anywhere in Saudi Arabia", and "ample luggage space". Only figures were changed here, as briefed. Should it get a wording pass or a full rebuild?
2. **Onward routes:** `yanbu-to-jeddah` is 330 km / 3.5 h and `yanbu-to-madinah` is 230 km / 2 h 15 in the records. Not verified in this task; the new page shows no figures for them.
3. **Arabic:** the Arabic Riyadh–Yanbu pages likely still say ≈950 km and 9.5 h. Update after native review.
