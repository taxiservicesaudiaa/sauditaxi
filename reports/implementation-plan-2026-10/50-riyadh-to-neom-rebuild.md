# 50 — Riyadh to NEOM: complete rebuild (local only)

**Date:** 23 November 2026 · **URL:** `/routes/riyadh-to-neom` (unchanged).
Nothing committed, pushed or deployed. No page deleted, redirected, noindexed or removed from the sitemap.

## 1. Audit of the original page

| Item | Finding |
|---|---|
| Template | Shared domestic-route shell, with the record in `data/routes.ts` |
| **Distance / time** | "~1,150 km / 11 h 30". **Wrong.** OSRM: Riyadh → Hail 614 km / 5.9 h; Hail → Tabuk 673 km / 8.0 h; Riyadh → Tabuk via Hail ≈1,290 km / 13.9 h; Tabuk → NEOM Bay Airport area (Sharma) 174 km / 2.2 h; Riyadh → NEOM Bay area ≈1,520 km / 15.9 h. Highway 65 carries most of the northbound leg |
| **Sindalah** | "Direct drop-off at NEOM destinations, including Sindalah". Sindalah is an island, so it **can't be reached by road** |
| Other unsupported claims | Fixed / all-in price; "tracked service"; "no toll roads… anywhere in Saudi Arabia"; "the longest route we offer" (Makkah → Dammam is longer); "multiple coordinated vehicles"; "well-maintained highway for the length of the journey" |
| Title / meta | "Riyadh to NEOM Private Transfer – Fixed-Price Taxi" / "…(~1,150 km, about 11 hours 30 min)… fixed price" |
| Schema | Breadcrumb, Service, FAQPage (shared template) |
| Images | Generic route hero |

## 2. Final structure (editorial long-read; design unique to this page)

1. **Hero:** full-bleed photo (`desert-highway.jpg`) with a dark gradient overlay. H1 "Private Transfer from Riyadh to NEOM". A storytelling intro. CTAs "Request a Quotation" and "Explore the journey". A glass facts strip (From / To / ≈1,450–1,550 km / ≈15–16 h).
2. **Sticky chapter navigation** (desktop) beside ten numbered chapters:
   1. **At a glance:** a direct-answer passage and a facts list (origin, destination region, type, distance, driving time, gateway city), with the method and date.
   2. **The journey begins in Riyadh:** a narrative, plus the KAFD photo and a Riyadh taxi link.
   3. **Understanding the road north-west:** a direct answer (Highway 65 via Qassim and Hail, west to Tabuk, on to the Gulf of Aqaba coast); a **route ribbon** with cumulative distances (Riyadh 0, Buraidah ≈345, Hail ≈615, Tabuk ≈1,290, NEOM coast ≈1,460 km); two **overnight-split options** (Hail / Tabuk); "accommodation isn't included".
   4. **Where in NEOM are you travelling?** NEOM is a region, not one address. A destination-type table (hotel / project site / town / island or non-road location), what to send for each, and "site access never guaranteed; islands need separate arrangements". Link to the NEOM travel guide.
   5. **Is driving right for you?** An honest answer that flying is often more practical for individual travellers, then a road vs air comparison table and links to the NEOM Bay and Tabuk airport pages.
   6. **Planning a long-distance journey:** six cards (departure time, breaks, comfort, luggage and equipment, weather and roads, overnight not included).
   7. **Choosing your vehicle:** a table built from `data/vehicles.ts`.
   8. **Preparation checklist:** 10 items with native, accessible checkboxes (no extra JavaScript).
   9. **How to request:** six steps, then the full QuoteForm (pickup "Riyadh", drop-off "NEOM – " with an exact-destination placeholder, message placeholder for project / overnight / equipment) and WhatsApp.
   10. **FAQs:** 11, all covering the brief's topics.
3. Method note, related routes and guides, final CTA.

## 3. Metadata and schema

- **Title:** "Riyadh to NEOM Private Transfer | Long-Distance Taxi" (unique).
- **Meta:** "Request a private transfer from Riyadh to NEOM. Share your exact destination, travel date, passengers and luggage to receive a journey quotation."
- **Unchanged:** canonical, en/ar hreflang, `index, follow` and the sitemap entry.
- **JSON-LD:**
  - BreadcrumbList.
  - **WebPage** with `primaryImageOfPage` ImageObject (hero image and caption).
  - **Service** (`@id`; areaServed Riyadh, Tabuk, NEOM; provider = the site Organization).
  - **FAQPage** (11, matching the visible FAQs).
  - No duplicate TaxiService, ratings, prices or LocalBusiness. All blocks parse.
- **Shared change:** the registry gained an optional `image` field (used only by this page), and the long-route branch emits `primaryImageOfPage` only when it is set. The other six registry pages are unchanged (verified).

## 4. Internal links (all 200)

| Where | Links |
|---|---|
| Inside the story | `/taxi-service/riyadh`, `/routes/riyadh-to-tabuk`, `/routes/tabuk-to-neom`, `/routes/riyadh-to-hail`, `/blog/neom-travel-guide-2026`, `/airport-transfer/neom-bay-airport`, `/airport-transfer/tabuk-airport` |
| Related section | `/routes/neom-to-riyadh`, `/taxi-service/tabuk`, `/intercity-transfers`, plus the above |

No self-links, redirects or invented URLs.

## 5. Images

| Asset | Source / subject | Use |
|---|---|---|
| `/images/journey/desert-highway.jpg` | Existing project asset; a genuine photo of a desert road through red dunes; **location not identified** | Hero (priority / eager). Alt describes only what is visible. **Never labelled as NEOM** |
| `/images/journey/riyadh-skyline.jpg` | Existing project asset; a genuine photo of the KAFD towers, Riyadh | "The journey begins in Riyadh" (lazy-loaded) |
| `/images/heroes/intercity.webp` | AI-generated, branded car | **Not used** (misleading) |

**Missing assets (needed for the full image brief):** a licensed photo of Riyadh's outskirts or a road leaving the capital; Highway 65 or northern desert; Tabuk-region landscape or mountains; publicly documented NEOM landscapes (for example the Gulf of Aqaba coast near Sharma); genuine fleet photos.

## 6. Checks

| Check | Result |
|---|---|
| `tsc` | Clean |
| ESLint | 10 problems, the same as the baseline (none new) |
| Production build | 905/905 (isolated checkout; your dev server on port 3000 was left running) |
| Full-site comparison | **3 pages:** this page, plus the route card on `/cities/riyadh` and `/routes/neom-to-riyadh` (new "1,450–1,550 km · approx. 15–16 hours") |
| Overlap | 2.1% vs `/routes/neom-to-riyadh` |
| Keyword density | "riyadh to neom" 13 times in 2,140 words |
| Visible claims | No fixed price, 24/7, tracking, tolls or "longest route". "Sindalah" and "guarantee" appear only as negations |
| Images | Accurate alt text; the hero is prioritised and the in-content image is lazy-loaded; `next/image` responsive sizes |
| Mobile (500 px) / desktop (1440 px) | No page overflow; tables scroll inside their own frame. The chapter nav is hidden on mobile (the content reads linearly) |
| Form | Posts to the existing `/api/leads`; flight field only when an airport is entered. Not submitted |

## 7. Facts needing owner verification

1. "Tabuk Regional Airport and NEOM Bay Airport both have flights from Riyadh **on some schedules**". Confirm, or soften further.
2. Which NEOM destinations you actually serve, and any known gate or meeting-point arrangements.
3. Overnight stops (Hail / Tabuk): offered, and how driver and vehicle are handled.
4. Work-equipment carriage limits.
5. **`/routes/neom-to-riyadh`** still claims Sindalah pickups, a fixed price and ~1,150 km. `/routes/riyadh-to-tabuk` says ~1,050 km (OSRM ≈1,290 km via Hail). Both need their own pass.
6. Arabic page: unchanged; needs native-speaker parity.

---

## 8. Pre-release pass (24 November 2026)

### Verified distances (OSRM, clear traffic)

| Route | Result | Published as |
|---|---|---|
| Central Riyadh → central Tabuk, fastest (Hwy 65 via Qassim and Hail, Hwy 80 west, Route 15) | 1,349 km / 13.8 h | **1,290–1,350 km, approx. 14 hours** |
| Central Riyadh → central Tabuk via Hail and Tayma | 1,287 km / 13.9 h | (lower bound) |
| King Khalid Airport → Tabuk | 1,357 km | "a pickup at the airport adds a little" |
| NEOM Bay Airport area (Sharma) → central Riyadh | 1,517 km / 15.9 h | **1,450–1,550 km, approx. 15–16 hours** |
| Gayal → Riyadh / Al Bad' → Riyadh | 1,494 km / 1,578 km | within / just above the range ("depending on pickup point") |

### `/routes/neom-to-riyadh` (shared template, content record rewritten)
- **Distance:** ~1,150 km / 11 h 30 → 1,450–1,550 km / approx. 15–16 hours.
- **Sindalah:** no longer offered as a pickup. It now appears only as an island that can't be reached by road; pickup is at the mainland arrival point.
- **Removed:** fixed price; 24/7; tracked service; automatic flight tracking; "no tolls anywhere"; "our longest route"; "multiple coordinated vehicles"; "we regularly serve project staff".
- **Distinct intent (return journey):** where you're collected in NEOM (road-accessible points only; access never guaranteed); two-day return via Tabuk or Hail; arriving in Riyadh or catching a flight from RUH (generous margin, flight changes not tracked automatically, in line with RUH policy); road vs air; how to request.
- **New title and meta:** "NEOM to Riyadh Private Transfer | Road Journey Home". Six FAQs, all different from the Riyadh to NEOM page's.

### `/routes/riyadh-to-tabuk` (shared template, content record rewritten)
- **Distance:** ~1,050 km / 10 h 30 → 1,290–1,350 km / approx. 14 hours. Endpoints: central Riyadh → central Tabuk.
- **Removed:**
  - The Madinah overnight suggestion (via Madinah is about 1,514 km, a detour).
  - Fixed price; 24/7; tracking; tolls; "longest route"; no deposit.
  - Vehicle "strongly preferred" advice.
- **Intent:** Tabuk as the destination (heritage sites, arriving in the city), with NEOM as a separate onward option linked to its own pages.
- **New title:** "Riyadh to Tabuk Taxi | Private Road Transfer". Six FAQs.

### `/routes/riyadh-to-neom`: unverified statements removed
| Before | After |
|---|---|
| "Tabuk Regional Airport and NEOM Bay Airport both have flights from Riyadh on some schedules" | "Check current flights to Tabuk and the NEOM area directly with the airlines, as schedules change." |
| Project sites "where you'll be met at a gate or an approved meeting point" | "…where any drop-off point has to be agreed with the site itself." |
| "Possible overnight stop" (route panel); "overnight stop on request" | "A common place to break the journey"; "ask about an overnight stop" (accommodation and arrangements confirmed in the quotation) |
| "We can meet you at NEOM Bay Airport or Tabuk Regional Airport" | "see our NEOM Bay Airport and Tabuk Regional Airport transfer pages" |
| Van: "a lot of luggage and equipment" | "extra luggage; equipment is confirmed in your quotation" |
| Tabuk "about 1,300 km" | "about 1,300–1,350 km" |
| Project-site FAQ | "whether that point can be served is confirmed in your quotation, and access is never guaranteed" |

### Final checks
| Check | Result |
|---|---|
| `tsc` | Clean |
| ESLint (full repo) | 10 problems, the same as the baseline. The one warning in a NEOM file (`getBorder` unused) predates this work |
| Production build, **NEOM files only** (no RUH files) | 905/905 |
| Production build, NEOM + RUH together | 905/905 |
| Site-wide comparison vs the committed baseline (NEOM-only build) | **7 pages:** the 3 NEOM-release pages, plus route cards on `/cities/riyadh`, `/routes/neom-to-alula`, `/routes/neom-to-tabuk` and `/routes/tabuk-to-riyadh` (corrected distance labels only). `/airport-transfer/riyadh-airport` is unchanged, so the release is independent of RUH |
| Canonical / hreflang / robots | Self-canonical, en + ar, `index, follow` on all three |
| Headings | One H1 per page |
| JSON-LD | All blocks parse. Riyadh to NEOM: Breadcrumb, WebPage + ImageObject, Service, FAQPage(11). The other two: Breadcrumb, Service, FAQPage(6). Organization, WebSite, LocalBusiness and TaxiService are site-wide layout blocks, unchanged |
| Internal links | 11 / 9 / 9 links; none missing, no self-links |
| Claims scan | No fixed price, 24/7, toll, "longest", flight-availability or on-time wording. "Sindalah", "guarantee" and "tracked" appear only as negations |
| Overlap of unique copy | Riyadh to NEOM vs NEOM to Riyadh 2.1%. The template pages share about 14% with each other, which is the template boilerplate (13.7% even vs `/routes/abha-to-riyadh`) |
| Keyword density | "neom to riyadh" 1.84%; "riyadh to tabuk" 1.86% (trimmed from 2.38%) |
| CRM / quotation | `QuoteForm`, `/api/leads` and WhatsApp untouched; no test submissions |

## 9. NEOM release: file by file

| File | Status | Change |
|---|---|---|
| `data/riyadh-to-neom-route.ts` | New | All copy, the facts, the 11 FAQs and the image reference for the Riyadh to NEOM page, with the pre-release wording fixes |
| `components/routes/RiyadhNeomRouteView.tsx` | New | The editorial page layout |
| `data/long-route-pages.ts` | Modified | `"neom"` view, optional `image` field, `riyadh-to-neom` entry |
| `app/(main)/routes/[slug]/page.tsx` | Modified | Import plus the `view === "neom"` branch; `primaryImageOfPage` only when `image` is set |
| `data/routes.ts` | Modified | Three records only: `riyadh-to-neom`, `neom-to-riyadh`, `riyadh-to-tabuk` (plus the `NEOM_FAQS` import) |
| `reports/implementation-plan-2026-10/50-riyadh-to-neom-rebuild.md` | New | This report |

**The RUH release is separate:**
- `app/(main)/airport-transfer/[airport]/page.tsx`
- `data/airports.ts`
- `data/riyadh-airport-page.ts`
- `components/airport-transfer/RiyadhAirportView.tsx`
- `components/airport-transfer/SwapQuotePanel.tsx`
- report 49

The two releases share no files, so they can be committed separately.

## 10. Still open (not changed, by instruction)
- **`/routes/tabuk-to-riyadh`** still says ~1,050 km / 10 h 30 and carries the fixed-price, 24/7 and tracking wording. It is the mirror of `riyadh-to-tabuk` and needs the same pass when you approve it.
- **Owner to confirm before any of these are published:**
  - flight availability;
  - which NEOM destinations and meeting points you serve;
  - overnight-stop arrangements;
  - equipment limits.
- **Photographs needed** (genuine or licensed):
  - the road out of Riyadh or Highway 65;
  - the northern desert and Hail;
  - Tabuk city (the castle, the Hijaz Railway station);
  - the Tabuk mountains or Gulf of Aqaba coast;
  - publicly documented NEOM scenes;
  - your own vehicles.
  `neom-to-riyadh` and `riyadh-to-tabuk` still use the shared template's themed hero.
- **Arabic counterparts:** unchanged; they need native-speaker parity.
