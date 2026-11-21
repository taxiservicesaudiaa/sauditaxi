# 41 — Dammam to Al Khafji: page audit and redesign (local only)

**Date:** 21 November 2026  
**Status:** implemented locally. Not committed, pushed or deployed.  
**URL:** `/routes/dammam-to-al-khafji` (unchanged). The brief's reference URL (`/routes/riyadh-to-hail`) was wrong; that page was not touched.

## 1. Audit findings

| Finding | Detail |
|---|---|
| **Distance and time were wrong** | The page said "180 km, 2 hours". OSRM, centre to centre: **≈298 km, ≈3.3 h**; 271 km of it on Route 95 (Abu Hadriyah road), passing inland of Jubail. From King Fahd International Airport: ≈286 km. The page now says "about 290–310 km, around 3–3½ hours (estimate)" |
| Cannibalisation risk | `/routes/dammam-to-khafji-border` (border crossing intent) and `/border-transfers/kuwait-border` exist. This page now owns the "Al Khafji town" intent and links to those pages for border and Kuwait intent |
| Duplicate content | 41% of 8-word phrases were shared with `/routes/al-khafji-to-dammam`. Now 2.6% (2.5% vs the border page, 5.8–6.5% vs the other two redesigned pages, all shared navigation and form) |
| Unverified claims removed | Fixed price, 24/7, "popular with oil-sector workers", "regular route" for Khafji Joint Operations staff, "coastal highway" (Route 95 runs inland of the coast near Jubail) |
| Pickup list | The generic list ("Religious site", "Border point", "Railway or bus station", "Tourist location") was replaced with verified home, hotel, business and airport options. Border drop-off is named as a separate service |
| Flight field | Was always shown. Now appears only when the pickup or drop-off mentions an airport |

## 2. Design (unique, theme: "up the Gulf coast")

- **Hero:** dark, with a glass quick form and a drawn coast map (Dammam → Jubail → Al Khafji; the Kuwait border shown as "not part of this transfer").
- **Facts and summary:** highway-sign fact tiles; a Q&A answer card beside a dotted-leader fact list.
- **Journey:** text block, then a horizontal four-step strip.
- **Border callout:** two panels, "This transfer covers" and "Going further?".
- **Content blocks:** an editorial "who uses it" list, vehicle capacity bars, and a row of three cards (pickup, drop-off, return).
- **Form and links:** split full-form section, related links grouped by purpose.
- **Closing:** open FAQ grid and a navy CTA band with a route line.

None of these patterns is used on the Makkah → Dammam or Riyadh → Hail pages.

## 3. Files

| File | Change |
|---|---|
| `data/dammam-to-al-khafji-route.ts` | **New.** Copy and 10 FAQs |
| `components/routes/DammamKhafjiRouteView.tsx` | **New.** The page layout |
| `components/routes/GlassQuoteForm.tsx` | **New.** Hero quick form (hands off to `/get-quote`) |
| `components/QuoteForm.tsx` | New optional `flightField="airport"` prop. **The default is unchanged**, so every other form renders exactly as before |
| `data/long-route-pages.ts` | Registry generalised: `path`, `reviewed`, `h1`, `summary`, `view` |
| `app/(main)/routes/[slug]/page.tsx` | Renders the `"khafji"` view |
| `data/dammam-routes.ts` | The `dammam-to-al-khafji` record only (meta, h1, ranges, intro, about, notes, keywords, FAQs) |

## 4. Verification

| Check | Result |
|---|---|
| `tsc` | Clean |
| ESLint | 10 problems, the same as the baseline |
| Production build | 905/905 (isolated checkout) |
| Whole-site snapshot | Compared against the pushed `00f5234` state: 3 pages changed. This page, plus the Dammam → Al Khafji route card on `/cities/dammam` and on `/routes/al-khafji-to-dammam` (now showing 290–310 km) |
| Head tags | One H1. Unique title. Canonical and en/ar hreflang. OG title correct |
| Links | 11 targets, all 200. No self-links, no `localhost`, in the sitemap |
| JSON-LD | Breadcrumb, WebPage, Service (Dammam, Al Khafji), FAQPage with 10 questions matching the visible FAQs |
| Keyword density | "dammam to al khafji" appears 9 times in about 1,800 words |

## 5. Owner confirmation needed

1. **Cross-border policy.** The page says travel into Kuwait is "a separate international journey" and links the existing border and Kuwait pages. It does not say whether you offer it.
2. Airport pickups at King Fahd International Airport (DMM) are listed. Confirm, and check the airport status notice on release day.
3. Controlled-access work sites: "the driver can only go as far as the site's rules allow".
4. Any pickup time can be requested and is confirmed in the quotation (no 24/7 promise).
5. **Wrong figures on other pages (not changed, by the scope rules):**
   - `/routes/al-khafji-to-dammam` says "180 km, 2 hours" and still has the fixed-price claims.
   - `/routes/dammam-to-khafji-border` and `/routes/khafji-border-to-dammam` say "185 km, 2 h 15".
   - Real road distance is about 300 km to the town, and more to the crossing.

   These pages now contradict the corrected one, so they should be next.
6. The shared quote-form disclaimer and footer still say "fixed price" (decision D3).
7. The Arabic page needs a native-speaker update.
