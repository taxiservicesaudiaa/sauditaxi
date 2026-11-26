# 62 — Jubail to Dammam rebuild (`/routes/jubail-to-dammam`) (local only)

**Date:** 25 November 2026.

**Not done:** no commit, push or deployment; no form submission or indexing request. Arabic was not edited. No page was deleted, redirected or noindexed, and none was removed from the sitemap.

**Uncommitted work:** the earlier Riyadh–Yanbu changes (report 61) are still uncommitted and were preserved. Three shared files hold both tasks' changes; the Jubail–Dammam additions there are purely additive:
- `long-route-pages.ts`
- `page.tsx`
- `photo-credits.ts`

## 1. Files changed

| File | Status | Change |
|---|---|---|
| `data/jubail-to-dammam-route.ts` | New | Copy, facts with sources, photos (with credits), 10 FAQs |
| `components/routes/JubailDammamRouteView.tsx` | New | The "coast road" layout |
| `public/images/jubail/*.webp` (3) | New | Licensed photos |
| `data/long-route-pages.ts` | Modified | `jubail-to-dammam` entry, view `"jubail-dammam"` |
| `app/(main)/routes/[slug]/page.tsx` | Modified | Import and render branch |
| `data/dammam-routes.ts` | Modified | `jubail-to-dammam` record rewritten. `dammam-to-jubail`: **figures only** |
| `data/photo-credits.ts` | Modified | Jubail to Dammam group added to `/image-credits` |

**Before:** the page used the shared regional route template, fed by the record in `data/dammam-routes.ts`.

## 2. Route facts (checked 25 Nov 2026)

Endpoints come from OpenStreetMap/Nominatim, except old Jubail and Al Fanateer, which were placed manually.

| From → to | OSRM | Valhalla |
|---|---|---|
| Old Jubail → central Dammam | 84 km · 58 min | 84 km · 68 min |
| Jubail Industrial City → central Dammam | 107 km · 75 min | 113 km · 75 min |
| Royal Commission offices → central Dammam | 101 km · 70 min | 101 km · 71 min |
| Al Fanateer → central Dammam | 98 km · 67 min | 98 km · 70 min |
| Central Dammam → old Jubail / Industrial City | 84–85 / 106–108 km · 58–72 min | — |
| Old Jubail / Industrial City → DMM airport | 79 / 102–108 km · 53–70 min | — |

- **Published:** about 85–110 km depending on the pickup point, typically about 1–1.5 hours with ordinary traffic.
- **Old page:** 90 km and 1 hour. That's close for old Jubail but short for the industrial city, which is where much of the demand is.
- **Confidence:** high. The two engines agree, and the spread comes from where in Jubail you start.
- **Route:** the coastal highway south. Road numbers are not shown.

## 3. Content changes

1. **Hero:** "Regional transfer · Eastern Province"; the H1; an intro covering home, hotel, business or agreed pickup points; three figures (distance, time, journey type); WhatsApp. **The existing QuoteForm sits beside the hero.**
2. **At a glance:** an answer-first summary with the per-pickup breakdown, plus a note that the figures are estimates.
3. **How the journey unfolds:** 3 connected steps (pickup in Jubail → south along the coast → arrival in Dammam).
4. **What you can request:** the variety of places in Jubail; a "From / To" board (pickup in Jubail, drop-off in Dammam) with photos; and one plain note about controlled-entry sites.
5. **Who this route suits:** business and project travel; airport connections (linked to the Dammam Airport page); families and personal journeys.
6. **How to request a transfer:** 5 steps, plus a "Planning your return journey" panel linking to Dammam to Jubail.
7. **FAQs (10):** distance, time, Industrial City, Royal Commission, airport, business travel, exact addresses, vehicle, return, quotation.
8. **Related links (8, all checked at 200):** Dammam to Jubail, Jubail to Dammam Airport, Jubail to Riyadh, Riyadh to Dammam, Jubail and Dammam city pages, Dammam Airport, City transfers.

## 4. Claims removed or rewritten

| Old | Now |
|---|---|
| "with a fixed price agreed in advance"; "fixed price" in the meta; "fixed price agreed before travel never changes" | Quotation before you confirm |
| "24/7 booking"; "Reliable, on-time" | Removed |
| "Suitable for shift workers… we accommodate early and late shift-change timings" | Business and project travel, without a shift promise |
| "we can also set up a regular booking arrangement" | Removed |
| "Can you collect me from a specific project site or compound? Yes" | Exact address; controlled-entry sites use an allowed pickup point; access arranged by the customer or employer |
| "we can route your transfer directly to King Fahd International Airport" | Request the airport as your destination and include your flight time |
| "Comfortable vehicles for the highway drive south" | Vehicle suggested for passengers and luggage |
| "Same-day booking is usually available" | Removed (unverified) |

**Claims scan of the new page:** the only match is the disclaimer "not guaranteed journey times".

## 5. Pickup and drop-off

- **Pickup:**
  - old Jubail;
  - Jubail Industrial City;
  - the Royal Commission area;
  - Al Fanateer and nearby accommodation;
  - hotels and residential addresses;
  - business or project addresses, subject to access.
- **Drop-off:**
  - Dammam city centre;
  - hotels and residential addresses;
  - offices and business addresses;
  - King Fahd International Airport (DMM);
  - other destinations confirmed in the quotation.

**Al Fanateer:** a district and corniche in Jubail Industrial City. Confirmed by the Commons photo record ("Al-Fanateer Corniche in Jubail Industrial City").

## 6. Design and photography

The layout is deliberately light for a short route: one hero image and two board photos.

| File | Subject | Author · licence |
|---|---|---|
| `dammam-corniche.webp` | Palm-lined Dammam Corniche (hero background, OG and schema image) | Radosław Botev · CC BY 3.0 PL |
| `al-fanateer-corniche.webp` | Al-Fanateer Corniche, Jubail Industrial City (pickup card) | إبراهيم الشعيبي · CC0 |
| `dammam-corniche-spiral-tower.webp` | Spiral tower on the Dammam Corniche (drop-off card) | King Eliot · CC BY-SA 4.0 |

- **Rejected:** a night aerial of the industrial city (too dark) and the Jubail Commercial Port building (not useful to customers).
- **Credits:** listed on `/image-credits`.

## 7. SEO and structured data

- **Title:** "Jubail to Dammam Private Transfer | Regional Ride by Quotation".
- **Meta description:** "Request a private transfer from Jubail or Jubail Industrial City to Dammam: about 85–110 km, typically 1–1.5 hours. Homes, hotels, offices and DMM airport."
- **Headings:** one H1 and 9 H2s.
- **Canonical:** self. **hreflang:** en and ar (unchanged). **Robots:** index, follow. **OG image:** the Dammam Corniche photo.
- **JSON-LD:**
  - BreadcrumbList.
  - WebPage, with `primaryImageOfPage` and its licence.
  - Service, with `areaServed` Jubail and Dammam (Eastern Province) and their coordinates.
  - FAQPage (10), matching the visible FAQs 10/10.
- **No geo meta tags.**

## 8. Reverse route

`/routes/dammam-to-jubail`: distance and duration fields, `about` text, meta description and the distance FAQ now read 85–110 km and 1–1.5 hours. The "full 90 km journey" FAQ heading no longer names a figure.

## 9. Quote form (built page, no submission)

- **Prefilled:** pickup "Jubail", drop-off "Dammam".
- **Fields present:** passengers, luggage, date, time, vehicle type and message. The flight field appears only for airport trips.
- **Backend:** the shared QuoteForm and its backend are unchanged.
- **Mobile:** the form stacks below the hero and is usable at 500 px.

## 10. QA

| Check | Result |
|---|---|
| TypeScript | 0 errors |
| Lint | Repo 10, the same pre-existing set. Changed files: 0 new |
| Production build (isolated worktree with current changes and `.env`) | Exit 0, 906/906 |
| Site diff vs the Yanbu build | 4 pages changed, none added or removed: `routes/jubail-to-dammam` (title, meta, JSON-LD, body), `routes/dammam-to-jubail` (meta, JSON-LD, body), and the cards on `cities/dammam` and `image-credits` |
| Internal links | 10 on the new page, none missing |
| Visual | Desktop 1440 and mobile 500: hero with form, step strip, From/To board, no overflow |
| Arabic | 0 files changed |

## 11. Owner decisions

1. **`/routes/dammam-to-jubail` still says:** "fixed price agreed before you travel" (meta), "Fixed pricing for shift-schedule… travel", "We operate 24/7", "regular booking arrangement", and "Reliable Private Transfer" in the title. Only figures were changed, as briefed. Should it get a wording pass or a rebuild?
2. **Jubail ↔ Dammam Airport records** (`jubail-to-dammam-airport`, `dammam-airport-to-jubail`) say 70 km and 50 min. Routing gives 79 km from old Jubail and 102–108 km from the Industrial City (53–70 min). Not changed here; should they be corrected?
3. **Shared form footer:** "no payment needed to get a quote" is site-wide QuoteForm wording. It was not changed; please confirm it's an accurate statement.
4. **Arabic:** the Arabic Jubail–Dammam pages likely still say 90 km and 1 hour, with fixed-price wording. Update after native review.
