# 39 — Makkah to Dammam: page audit and redesign (local only)

**Date:** 21 November 2026  
**Status:** implemented locally. Not committed, pushed or deployed.  
**URL:** `/routes/makkah-to-dammam` (unchanged)

## 1. Before → after

| | Before | After |
|---|---|---|
| Title | Makkah to Dammam Taxi Service – Reliable Private Transfer | Makkah to Dammam Private Transfer \| Long-Distance Taxi (unique on the site) |
| Meta description | "…(1,250 km, about approx. 12 hours)…" (doubled wording) | The brief's text (146 characters) |
| H1 | Private Transfer from Makkah to Dammam | Same: exactly one H1 |
| Distance / time | "1,250 km", "approx. 12 hours", stated as a single figure | "About 1,250–1,300 km", "roughly 12–13 hours of driving, before stops"; stop time kept separate |
| Pricing | "Fixed, all-in, fuel included, no meter, no surge" | "Set out in your quotation before you travel" |
| Template | Shared domestic-route shell plus the generic quote form | A dedicated layout for this page only |
| FAQs | 6 | 10, all visible on the page and matching the FAQPage schema |
| Schema | Breadcrumb, Service, FAQPage | Breadcrumb, **WebPage**, Service (with `@id` and 5 cities in `areaServed`), FAQPage. Global Organization and TaxiService are not duplicated |

## 2. Files

| File | Change |
|---|---|
| `data/makkah-to-dammam-route.ts` | **New.** All page copy and the 10 FAQs |
| `components/routes/MakkahDammamRouteView.tsx` | **New.** The page layout |
| `app/(main)/routes/[slug]/page.tsx` | A branch for `makkah-to-dammam` only, with its schema |
| `data/makkah-routes.ts` | The route record: meta, `h1`, distance and duration ranges, intro, about, notes and keywords. The FAQs now come from the new file. The old `sections` were removed (they are no longer rendered and contained the fixed-price claims) |
| `components/home/HomeBookingPanel.tsx` | New optional `defaultDropoff` prop. The default keeps the homepage and Madinah pages identical |

## 3. Verification

| Check | Result |
|---|---|
| `tsc --noEmit` | Clean |
| ESLint | 10 problems, the same as the baseline. None are new; the one on `page.tsx` (`getBorder` unused) is old |
| Production build | 905/905 pages |
| Whole-site snapshot comparison | 4 of 899 pages changed: this page, plus `/cities/makkah`, `/cities/riyadh` and `/cities/dammam`. On the city pages only the Makkah → Dammam route card changed (new distance/time ranges and intro). No other route page changed, and the Arabic page is unchanged |
| Links | All 19 internal link targets resolve to built pages. No `localhost` |
| Canonical, hreflang, lang | Self-canonical; en and ar alternates; `lang="en"` |
| Mobile (500 px) | No horizontal scroll; the comparison table scrolls inside its own box |
| Forms | `/api/leads` is untouched. The flight field stays optional. No test lead was submitted |

## 4. Owner confirmation needed before deploy

1. **Overnight stop in Riyadh:** the page says "ask for it; you arrange your own hotel; how the two days are run and priced is confirmed in the quotation".
2. **Drop-off coverage:** Dammam, Khobar and Dhahran are listed; other Eastern Province addresses are quoted individually.
3. **Driver rest:** the page makes no promise and only says "ask us; confirmed in the quotation".
4. **Hajj-season pickup note:** "access to Makkah is controlled; we'll confirm what's possible".
5. **Shared "fixed price" wording still shows on this page** through shared components: the quote-form disclaimer and the footer. It is still decision D3.
6. **Hero panel and lead attribution:** the hero panel hands off to `/get-quote`, which tags the lead "Get Quote page" (pickup and drop-off still show Makkah → Dammam). The full form further down this page tags leads "Makkah to Dammam transfer (Route: Makkah to Dammam)".
7. **Arabic page:** not edited. It needs a native-speaker pass to reach parity.
8. **Sitemap `lastmod`:** still uses the build time. This is a known site-wide issue.
