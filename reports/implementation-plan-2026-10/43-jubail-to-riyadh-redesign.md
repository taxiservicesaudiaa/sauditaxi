# 43 — Jubail to Riyadh: page audit and redesign (local only)

**Date:** 21 November 2026  
**Status:** implemented locally. Not committed, pushed or deployed.  
**URL:** `/routes/jubail-to-riyadh` (unchanged)

## 1. Audit findings

| Item | Before | Now |
|---|---|---|
| **Route** | "Coastal Route 5, then Highway 95" | **Wrong:** Route 5 is the Red Sea coastal road and Highway 95 runs north to Al Khafji. OSRM shows ≈354 km on **Highway 40** (Dammam–Riyadh expressway), reached by a link road |
| Distance / time | "~480 km, 4 h 45" | OSRM: central Jubail → central Riyadh ≈458 km, ≈4.6 h; Jubail Industrial City ≈468 km; Jubail → King Khalid International Airport ≈455 km. Shown as "about 450–470 km, around 4½ hours (estimate)" |
| Flight tracking / automatic pickup adjustment | Claimed as standard | Removed. The page says we don't promise flight tracking or guarantee an airport arrival time |
| "Drivers familiar with gate and zone layout" | Claimed | Removed. Access depends on each site's rules; gate or meeting point agreed in the quotation |
| Coordinated multi-vehicle crew rotations | Claimed | Now "ask; whether possible is confirmed in your quotation" |
| "Every trip is tracked", shift-change traffic, "one of the world's largest industrial cities" | Claimed | Removed. The industrial city is now "one of the Kingdom's main industrial centres" |
| Fixed / all-in price, no tolls, 24/7, no deposit | Claimed | Removed. Pricing uses the brief's quotation wording |
| Airport drop-off | "Yes, anywhere including the airport" | "Subject to availability and confirmed individually" (same wording as the RUH status work in report 37) |
| FAQ raw HTML | Present | Fixed |
| Message placeholder | Generic | The brief's compound/gate text. Flight field only for airport trips |

## 2. Design (unique, theme: "compound gate to capital")

- **Hero:** diagonal-stripe texture with a **two-tab quick form** ("Riyadh address" / "King Khalid Airport"; the airport tab prefills RUH and asks for flight details on the next step).
- **At a glance:** a "Journey spec" grid.
- **Pickup:** a section with tiles for pickup types and a **gate-access callout**.
- **Route:** a **proportional segment bar** (link road / Highway 40 / into Riyadh).
- **Journey:** steps with **outlined numerals**.
- **Airport:** a "**work backwards from your flight**" timeline in a dark band.
- **Vehicles:** **seat-dot** rows.
- **Planning:** a "Tell us before you travel / On the day" checklist pair.
- **Drop-offs and return:** Riyadh drop-off chips (the airport chip highlighted) and a return card.
- **Lower page:** a split related card (routes and city taxis), **FAQs grouped by topic**, and a **two-panel CTA** (quote / WhatsApp).

None of these patterns is used on the other four redesigned pages.

## 3. Files

| File | Change |
|---|---|
| `data/jubail-to-riyadh-route.ts` | **New.** Copy and 12 FAQs |
| `components/routes/JubailRiyadhRouteView.tsx` | **New.** The page layout |
| `components/routes/TabbedQuoteForm.tsx` | **New.** Two-mode quick form (hands off to `/get-quote`) |
| `components/QuoteForm.tsx` | New optional `messagePlaceholder` prop. **Defaults unchanged** |
| `data/long-route-pages.ts` | `jubail` view |
| `app/(main)/routes/[slug]/page.tsx` | Renders the `jubail` view |
| `data/routes.ts` | The `jubail-to-riyadh` record only. **`riyadh-to-jubail` untouched** |

## 4. Verification

| Check | Result |
|---|---|
| `tsc` | Clean |
| ESLint | 10 problems, the same as the baseline |
| Production build | 905/905 (isolated checkout) |
| Whole-site snapshot | **Jubail delta:** 5 pages. This page, plus its route card on `/cities/dammam`, `/cities/riyadh`, `/routes/riyadh-to-jubail` and `/routes/jubail-to-dammam` (new intro, "450–470 km · approx. 4.5 hours") |
| Head tags | One H1. Unique title. Canonical and en/ar hreflang |
| Links | 9 targets, all 200. Contextual links to Jubail Taxi, Dammam to Riyadh, Riyadh airport transfers, Riyadh Taxi and Riyadh to Jubail. No self-links, no `localhost`, in the sitemap |
| JSON-LD | Breadcrumb, WebPage, Service (Jubail, Riyadh), FAQPage with 12 questions matching the visible FAQs |
| Overlap | 2.4% vs `riyadh-to-jubail`; 2.4–5.9% vs the other related and redesigned pages |
| Keyword density | "jubail to riyadh" 8 times in about 1,950 words |

## 5. Owner confirmation needed

1. **Compound and industrial-site pickups** at the gate or an agreed meeting point.
2. **King Khalid International Airport drop-offs:** "subject to availability and confirmed individually". Check the RUH status on release day.
3. **More than one vehicle for large groups:** "ask; confirmed in your quotation".
4. **Work equipment:** described with rough dimensions; suitability confirmed in the quotation.
5. **`/routes/riyadh-to-jubail` still has the old claims** (Route 5 / Highway 95, fixed price, flight tracking) and needs its own pass.
6. The shared quote-form disclaimer and footer still say "fixed price" (decision D3).
7. The Arabic page needs a native-speaker update.
