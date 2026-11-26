# 70 — Khobar city page rebuild (local only)

**URL:** `/taxi-service/khobar` (English). Reviewed 26 Nov 2026. Nothing committed, pushed or deployed. No Arabic files edited.

## 1. Files changed

| File | Change |
|---|---|
| `data/khobar-city-page.ts` | **New.** All copy, photos with credits, facts and routing notes, 10 FAQs |
| `components/city-transfer/KhobarCityView.tsx` | **New.** Dedicated layout |
| `app/(main)/taxi-service/[city]/page.tsx` | Khobar branch (Breadcrumb, WebPage, Service and FAQPage schema), hero image for metadata. Other cities untouched |
| `data/cities.ts` | Khobar entry only: `about`, highlights, meta title and description (CRLF kept) |
| `data/city-guides.ts` | Khobar entry only. No longer rendered, but the template needs it; rewritten without the old claims |
| `data/photo-credits.ts` | Khobar group added to `/image-credits` |
| `public/images/khobar/` | **New.** 6 WebP photos |

## 2. Page structure and design

Gulf-blue and sand palette, distinct from the green and brown Hofuf page and other city pages.

1. **Hero.** Khobar Water Tower photo, breadcrumbs, H1 "Private Transfers in Khobar", intro, Get a Khobar Quote and City Transfers Overview, four-fact ledger (region, DMM ≈55–60 km, causeway ≈25 km, neighbours).
2. **Discovering Khobar.** The fishing settlement, the 1930s pier, oil in 1938 and today's metro area. Fishermen photo and a dated timeline (1935, 1938, 1986, 2016).
3. **Waterfront and Corniche.** Corniche lawns photo and three spot cards.
4. **Airport transfers via Dammam.** Full-width band with distance and time, and links to the DMM guide and both airport routes.
5. **Khobar and the Bahrain causeway.** The journey shown as two parts, "road transfer" and "border crossing", with the documents note and links.
6. **One connected region.** Khobar, Dhahran and Dammam columns with distances and links, plus a "Visiting Ithra" photo card.
7. **Family and leisure.** Half Moon Bay (text card, see §4), the Corniche, shopping and dining.
8. **Business travel.** Skyline photo; meeting locations by quotation.
9. **Regional connections.** Four route cards (Riyadh, Bahrain, Doha, Dammam) and links to Jubail, Hofuf and all cities.
10. **Pickup and drop-off places** (8).
11. **How to request** (5 steps) and the shared QuoteForm.
12. **FAQs** (10).
13. **Final CTA:** "Book Your Private Khobar Transfer".

## 3. Research sources and verified facts

- **Khobar before and after oil:** a fishing settlement; pier completed 1935; commercial oil at Dammam Well No. 7 near Dhahran, 1938; grew into the region's commercial town. Sources: AramcoWorld "Seven Wells of Dammam", Saudipedia "Al-Khobar Port", Saudipedia "Dammam No. Seven".
- **Corniche and Waterfront:** Saudipedia "Al-Khobar Waterfront" (Eastern Province Municipality); Water Tower on the Corniche. Published lengths conflict (2.3 km to 16 km), so **none is given**.
- **King Fahd Causeway:** about 25 km, opened November 1986, from Al-Aziziyah south of Khobar to Al-Jasra in Bahrain, with the border facilities on an island part-way across. Sources: Saudipedia, Wikipedia.
- **Ithra:** built by Saudi Aramco, designed by Snøhetta, inaugurated December 2016; museum, library, theatre and exhibition spaces. Sources: Wikipedia, Aramco, Snøhetta. **No hours or ticket details** are given.
- **Half Moon Bay:** south of Khobar and Dhahran. Part of the shore is a private Saudi Aramco beach (Wikipedia).
- **DMM:** serves the Eastern Province (gaca.gov.sa). Its size and passenger figures are deliberately not used.
- **Routing** (OSRM / Valhalla; endpoints from Nominatim):

| Journey | Result | Published as |
|---|---|---|
| DMM → central Khobar | 53/55 km, 38/42 min | ≈55–60 km, 40–50 min (matches the DMM hub's 55–60 km) |
| DMM → Corniche | 58/60 km, 43/46 min | (covered by the line above) |
| Khobar → causeway border island | 25 km; 23/56 min | **25 km only.** The times disagree, so none is shown |
| Khobar → Ithra | 11 km | 11 km |
| Khobar → Half Moon Bay | 37 km, 32/37 min | 37 km, 35–40 min |
| Khobar → central Dammam | 21 km | 21 km |
| Khobar → Riyadh | 422 km, 243/256 min | ≈420 km, 4–4½ h |

## 4. Images and credits

All six are from Wikimedia Commons. Converted to WebP at 1600 px wide and listed on `/image-credits`, with no credits under the photos.

| File | Author | Licence |
|---|---|---|
| `water-tower-corniche.webp` | Ahsan Ismail | CC BY-SA 4.0 |
| `corniche-fishermen.webp` | marviikad | CC BY-SA 2.0 |
| `corniche-lawns.webp` | Francisco Anzola | CC BY 2.0 |
| `king-fahd-causeway.webp` | Greens n cornbread | CC BY 2.0 |
| `ithra-fountain.webp` | AhmadElq | CC BY-SA 4.0 |
| `khobar-skyline.webp` | IamMoaz | CC BY-SA 4.0 |

- **Half Moon Bay:** no ground-level photo on Commons (only ISS imagery), so it is a text card. No AI imagery is used.
- **Ithra:** the only exterior-type photo available is the fountain plaza, captioned as "the grounds of Ithra", following the uploader's title.

## 5. Internal links (15 unique, all checked against the build; 0 missing)

`/city-transfers`, `/airport-transfer/dammam-airport`, `/routes/dammam-airport-to-khobar`, `/routes/khobar-to-dammam-airport`, `/border-transfers/bahrain-causeway`, `/routes/khobar-to-bahrain`, `/routes/khobar-to-bahrain-airport`, `/routes/dammam-airport-to-dhahran`, `/routes/khobar-to-dammam`, `/taxi-service/dammam`, `/routes/khobar-to-riyadh`, `/routes/al-khobar-to-doha` (whose page uses the Salwa crossing), `/taxi-service/jubail`, `/taxi-service/hofuf`, plus the `/` breadcrumb.

No Dhahran city page, Ithra page or Half Moon Bay page exists, so none is linked.

## 6. SEO and structured data

- **Title:** "Private Transfers in Khobar | Airport, Corniche & Bahrain Causeway".
- **Meta description:** "Private transfers in Khobar: Dammam Airport (DMM), Corniche hotels, Dhahran, Ithra, Half Moon Bay, Dammam and road journeys towards the Bahrain causeway. Get a quotation."
- **Headings:** one H1 and 12 H2s.
- **Indexing tags:** canonical `/taxi-service/khobar`; hreflang en plus the existing Arabic page; `index, follow`; **no geo meta**.
- **JSON-LD:**
  - BreadcrumbList;
  - WebPage (`dateModified` 2026-11-26, primaryImageOfPage with credit and licence);
  - Service (`areaServed` City "Al Khobar" in the Eastern Province);
  - FAQPage, 10 questions matching the visible FAQ exactly.
  - The site-wide Organization, WebSite, LocalBusiness and TaxiService nodes are unchanged.
- **Alt text:** descriptive on all 6 content images; the final CTA background is decorative (`alt=""`).
- **Length:** about 1,850 words in `<main>`.

## 7. Claims removed or rewritten

**Removed:**
- "Fixed price, 24/7" (meta description);
- "Your driver tracks your flight and meets you in the arrivals hall … flight tracking included" (body and FAQ);
- "fixed price agreed before you travel" (Riyadh);
- "Places our drivers regularly serve";
- "we schedule your driver";
- "family and group vans are available";
- "Larger vehicles are available";
- "all covered";
- the unqualified "Thursday and Friday afternoons" traffic claim;
- "a single transfer plan … without booking separate rides".

**Now:**
- pickup arrangements are confirmed individually;
- vehicles are confirmed in the quotation;
- child seats use the owner-approved wording;
- border processing is outside our control, and documents and entry permission are the traveller's responsibility;
- queues "can be longer at busy times such as weekends and public holidays".

**Claims scan of the built page, head and JSON-LD:** 0 hits. Checked terms: flight tracking, name board, arrivals-hall meeting, 24/7, fixed price/fare/rate, day rate, guarantee, partner, concierge, business/corporate account, luggage help, waiting, vetted/professional drivers.

## 8. Technical QA

| Check | Result |
|---|---|
| TypeScript | 0 errors |
| Lint | Repo total 10 (the same pre-existing set). New and changed files: 0 |
| Production build (isolated worktree, all current changes plus `.env`) | Exit 0, 906/906 |
| Visible-content diff vs the same tree without the Khobar changes | Only `/taxi-service/khobar` and `/image-credits` change |
| Internal links | 15 unique, 0 missing |
| FAQ visible vs schema | 10 = 10, text identical |
| Canonical and hreflang | Correct |
| Mobile 390 px and desktop 1440 px | Rendered; no horizontal scroll (scrollWidth equals viewport) |

**Build note:** comparing raw HTML across separate builds shows about 125 unrelated pages "changed". That comes from module IDs in Next's streamed RSC payload, and a rebuild *without* the Khobar changes shows the same thing. With those scripts excluded from the comparison, only the two pages above differ.

## 9. Questions for the owner

1. **Route figures that conflict with routing:**

   | Page | Published | Routing |
   |---|---|---|
   | `/routes/dammam-airport-to-khobar` and `/routes/khobar-to-dammam-airport` | 35 km / 30 min | 53–60 km / 40–50 min |
   | `/routes/khobar-to-dammam` and `/routes/dammam-to-khobar` | 15 km / 20 min | ≈21 km centre to centre |
   | `/routes/khobar-to-riyadh` and `/routes/riyadh-to-khobar` | ~405 km / about 4 h | ≈422 km / 4–4½ h |
   | `/routes/khobar-to-bahrain` | "55 km, 1 hour" | — |

   `/routes/khobar-to-bahrain` also says "fixed fare" and "We advise on documentation and border procedures". These pages are linked from the new page but were not edited (out of scope).
2. **Onward into Bahrain:** confirm the FAQ wording "to the causeway or onward into Bahrain" matches how Bahrain journeys are actually run.
3. **Half Moon Bay:** please supply a licensed photo if you have one.
4. **Arabic counterpart:** `/ar/تاكسي-الخبر` was not edited and still needs its own review.

## 10. Git status

Uncommitted. New: `data/khobar-city-page.ts`, `components/city-transfer/KhobarCityView.tsx`, `public/images/khobar/`, this report. Modified for Khobar: `app/(main)/taxi-service/[city]/page.tsx`, `data/cities.ts`, `data/city-guides.ts`, `data/photo-credits.ts`. All earlier uncommitted work (reports 61–71) is preserved. Nothing committed, pushed or deployed.
