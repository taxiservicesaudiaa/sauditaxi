# 49 — Riyadh Airport Transfers (RUH): audit and redesign (local only)

**Date:** 23 November 2026 · **URL:** `/airport-transfer/riyadh-airport` (unchanged).
Nothing committed, pushed or deployed. No page deleted, redirected, noindexed or removed from the sitemap.

## 1. Audit findings (before)

| Item | Finding |
|---|---|
| Repo vs live | The live HTML and the local build are **identical** (100% shingle overlap, same title, same 2 Nov notice). No discrepancy |
| Title / meta | "Private Riyadh Airport Transfer (RUH) \| Saudi Private Transfers" / "Riyadh airport (RUH) transfers and onward road travel…" |
| H1 / outline | One H1; 12 H2s, including a dated notice H2 |
| Canonical / hreflang / robots | Self-canonical, en + ar, `index, follow`. ✅ |
| Schema | Breadcrumb, **TaxiService (page) on top of the layout's global TaxiService = duplicate**, Service, **HowTo**, FAQPage (8) |
| Image | `/images/heroes/airport.webp`, an **AI-generated generic terminal with a "MEET & GREET SERVICE" sign**, captioned with the alt "King Khalid International Airport arrivals". It is not RUH, and it implies meet-and-greet (against RUH policy) |
| Terminal claims | `data/airports.ts` lists "Terminal 1 & 2 (international) / 3 & 4 (domestic) / 5 (low-cost)", unverified |
| Temporary status | "Riyadh airport status — last checked 2 November 2026" notice plus the "Is King Khalid International Airport operating?" FAQ (Terminal 1/2 resumed 25 Oct). Not re-verifiable today |
| "Popular" cards | Five **city-origin** routes (Riyadh → Qassim, Dammam, Jeddah, Bahrain, Doha) on an airport page |
| Airport-origin pages that exist | `riyadh-airport-to-riyadh`, `-makkah`, `-madinah`, `-jeddah`, `riyadh-to-riyadh-airport` (all clean), plus `riyadh/king-khalid-airport-to-kafd` (**claims a name board, arrivals hall and flight tracking**) and `riyadh/king-khalid-airport-to-ricec-exhibition-center` (**claims 24/7**). Those two are not linked |
| Duplication | 0% overlap with `/taxi-service/riyadh` and `/cities/riyadh` (before and after) |
| Template | The shared `AirportTransferHub` is used by all 13 airport pages |

## 2. What changed

**Scope:** a Riyadh-only branch in the airport page. The other 12 airport pages are unchanged (verified: 1 page changed site-wide).

| File | Change |
|---|---|
| `data/riyadh-airport-page.ts` | **New.** All copy, 11 FAQs, verified distances |
| `components/airport-transfer/RiyadhAirportView.tsx` | **New.** The page layout |
| `components/airport-transfer/SwapQuotePanel.tsx` | **New.** From/To quick form with a swap control (hands off to `/get-quote`) |
| `app/(main)/airport-transfer/[airport]/page.tsx` | Riyadh branch + schema. Other airports are untouched |
| `data/airports.ts` | Riyadh entry: `metaTitle`, `metaDescription` only |

The shared `QuoteForm` is unchanged; the page uses its existing optional `messagePlaceholder` prop. No CRM, API or email changes.

## 3. Page structure

1. **Hero:** an outlined "RUH" monogram; an H1 "Private Riyadh Airport Transfers (RUH)"; a two-paragraph intro (the airport, private transfers to and from it, how quoting works, pickups confirmed individually); Quote and WhatsApp CTAs; a **From/To swap panel** prefilled with the airport.
2. **Airport ID card:** name, RUH, Riyadh, "north of the city, about 35 km by road from central Riyadh" (OSRM), with a north-orientation sketch. No terminal data.
3. **How airport pickup works:** five steps. The meeting-point step is highlighted "Confirmed in your quotation". Flight changes: "message us… changes are not made automatically".
4. **Popular transfers from Riyadh airport:** four airport-origin cards (Riyadh city, Makkah, Madinah, Jeddah) plus a drop-off card (Riyadh → airport). Each card is shown only if its route exists.
5. **Hotels and districts:** a genuine KAFD photo, links to the hotel transfers hub and Riyadh taxi, and an OSRM distance table (KAFD ≈33 km, central ≈36 km, Olaya ≈39 km, Diplomatic Quarter ≈45 km; clear traffic, method stated).
6. **Families, groups and special requirements:** a six-tile grid (child seats "confirmed in your quotation").
7. **Vehicle cards:** from `data/vehicles.ts`, each with "Quote with this vehicle" (prefills the airport and passengers).
8. **Onward journeys and other airports:** Qassim / DMM / JED / MED → Riyadh routes, the three airport pages, and the Umrah service.
9. **How to book:** four steps plus "Requesting a quotation is free and doesn't book anything."
10. **Full QuoteForm:** airport prefilled, optional flight field, special-requirements placeholder.
11. **Eleven FAQs**, the method note and the final CTA "Request Your Riyadh Airport Transfer Quotation".

## 4. Metadata and schema

- Title: **"Riyadh Airport Transfers (RUH) | Private Taxi"** (unique). Meta and OG description as the brief specified. Canonical, hreflang (en/ar), `index, follow` and the sitemap entry are unchanged.
- JSON-LD: **BreadcrumbList; WebPage** (`about` → Service and Airport); **Service** (`@id`, provider = the site Organization, `availableAtOrFrom` an **Airport** node {name, iataCode RUH, Riyadh, SA}); **FAQPage** (11, identical to the visible FAQs). The page-level TaxiService duplicate and the HowTo were removed. There are no ratings, prices, opening hours or terminal claims. All blocks parse cleanly.

## 5. Internal links (21; all present in the build)

`/airport-transfers` (breadcrumb), `/routes/riyadh-airport-to-riyadh`, `/routes/riyadh-airport-to-makkah`, `/routes/riyadh-airport-to-madinah`, `/routes/riyadh-airport-to-jeddah`, `/routes/riyadh-to-riyadh-airport`, `/cities/riyadh`, `/taxi-service/riyadh`, `/umrah-taxi-service`, `/routes/qassim-to-riyadh`, `/routes/dammam-airport-to-riyadh`, `/routes/jeddah-airport-to-riyadh`, `/routes/madinah-airport-to-riyadh`, `/airport-transfer/jeddah-airport`, `/airport-transfer/madinah-airport`, `/airport-transfer/dammam-airport`, plus `/get-quote` prefill links. Direction checked: airport-origin cards only start at RUH; the drop-off card is labelled as going *to* the airport. No redirects.

## 6. Checks

| Check | Result |
|---|---|
| `tsc` | Clean |
| ESLint | 10 problems, the same as the baseline |
| Production build | 905/905 |
| Full-site comparison (vs today's baseline) | **1 page changed**: `airport-transfer/riyadh-airport` (title, meta, JSON-LD, content) |
| Visible claims | None of: name board, arrivals hall, free waiting, flight tracking, 24/7, fixed price, meet-and-greet, "Terminal N" |
| Keyword density | "riyadh airport" 0.75%, "RUH" 0.9% of about 1,600 words |
| Form | Pickup prefilled "King Khalid International Airport (RUH)"; optional flight field present; placeholder set; posts to the existing `/api/leads` (not submitted) |
| WhatsApp | "Hello! I'd like a quote for a private transfer involving King Khalid International Airport (RUH)." |
| Screenshots | Desktop 1440, tablet 820, mobile 500: no horizontal overflow |

## 7. Owner questions

1. **Terminal information:** confirm which terminals RUH currently uses (`data/airports.ts` still lists 1–5; not shown on this page).
2. **Status notice:** should a dated RUH status return? It needs an authoritative source and a check date.
3. **KAFD and RICEC point pages:** they promise a name board, arrivals hall and flight tracking, and 24/7. Correct them so they can be linked from here.
4. **Child seats:** offered, and on which vehicles?
5. **Airport-origin pages for Dammam and Qassim:** currently requested through the form only.
6. **Hero image:** `/images/heroes/airport.webp` (AI-generated, "Meet & Greet" sign) is still used by the other airport pages and contradicts the meeting-point policy at RUH and DMM.
7. **Arabic page:** unchanged; needs native-speaker parity work.
