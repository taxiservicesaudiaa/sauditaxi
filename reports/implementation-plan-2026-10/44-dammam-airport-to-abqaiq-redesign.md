# 44 — Dammam Airport to Abqaiq: page audit and redesign (local only)

**Date:** 21 November 2026  
**Status:** implemented locally. **No commit, push or deployment.**  
**URL:** `/routes/dammam-airport-to-abqaiq` (unchanged)

## 1. Audit findings

| Item | Before | Now |
|---|---|---|
| Template | Shared airport-arrival shell (`AirportRouteView`) built from `data/airport-route-content.ts` | Its own layout. That entry is now unused and was left in place, not deleted |
| **Distance / time** | "80 km, 55 min" | **Wrong for the airport:** that is the Dammam-city figure (OSRM 82 km). OSRM from DMM to Abqaiq town is **≈100 km, ≈72 min**, via King Fahd Road and then ≈55 km on Route 615. The page says "about 95–105 km, roughly 1 hr–1 hr 15 min (estimate)" and separates driving time from total time after landing |
| Meet-and-greet, arrivals-hall pickup | Claimed | Removed. Now "the meeting point confirmed with your booking" (report 32 had already removed the DMM name-board claim) |
| "Every airport pickup includes flight tracking", free wait time | Claimed | Removed. "Message us with the new time; how waiting and delays are handled is confirmed with your booking" |
| Team on different flights "we coordinate pickups" | Claimed | "Confirmed in your quotation; not guaranteed in advance" |
| Facility access | "Facility gate area" drop-off | Town vs facility explained. Restricted access needs prior permission from the employer or sponsor and is never guaranteed. A non-affiliation note for Saudi Aramco was added |
| Fixed price, 24/7 | Claimed | Removed. Quotation wording used |
| Cannibalisation | — | `/routes/dammam-to-abqaiq` (city origin) is linked as "Not flying in?"; this page owns the airport-arrival intent |

## 2. Design (unique, theme: "arrivals")

- **Hero:** a runway strip, with a dark **arrival card**: flight number, arrival date, landing time, passengers, and destination-type chips (town / accommodation / facility meeting point). The flight number is carried in the pickup value, so it reaches the lead through the existing prefill (no CRM change).
- **Facts:** a flight-information-board panel (monospaced, gold keys) beside the answer paragraph.
- **Arrival steps:** ticket-stub rows.
- **Town vs facility:** contrasting cards with "Send us" lists and the non-affiliation line.
- **Distance:** airport vs city comparison bars.
- **Teams:** an example team-manifest table.
- **Vehicles:** bag-icon tiles plus an equipment note.
- **Booking:** a dashed checklist and chevron booking steps.
- **Lower page:** a return card, a feature card for the airport hub plus route cards, chat-bubble FAQs, and a boarding-pass CTA.

None of these patterns is used on the other five redesigned pages.

## 3. Files

| File | Change |
|---|---|
| `data/dammam-airport-to-abqaiq-route.ts` | **New.** Copy and 10 FAQs |
| `components/routes/DmmAbqaiqRouteView.tsx` | **New.** The page layout |
| `components/routes/ArrivalQuoteCard.tsx` | **New.** Arrival quick form (hands off to `/get-quote`) |
| `data/long-route-pages.ts` | `dmm-abqaiq` view |
| `app/(main)/routes/[slug]/page.tsx` | The long-page branch now runs **before** the airport branch (needed for airport routes). Verified: the four other long pages render identically |
| `data/dammam-routes.ts` | The `dammam-airport-to-abqaiq` record only. **`abqaiq-to-dammam-airport` untouched** |

`QuoteForm` was **not changed** for this page; it uses the `messagePlaceholder` prop from report 43. The flight field shows here because it is an airport route.

## 4. Verification

| Check | Result |
|---|---|
| `tsc` | Clean |
| ESLint | 10 problems, the same as the baseline |
| Production build | 905/905 (isolated checkout) |
| Whole-site snapshot | **Abqaiq delta:** 2 pages. This page and its route card on `/cities/dammam` |
| Head tags | One H1. Unique title. Canonical and en/ar hreflang. Breadcrumbs unchanged (Home › Routes › Dammam Airport to Abqaiq) |
| Links | 10 targets, all 200. Airport hub, Abqaiq → DMM, Dammam → Abqaiq, DMM → Khobar / Dhahran / Jubail / Riyadh, Dammam Taxi. No self-links |
| JSON-LD | Breadcrumb, WebPage, Service (Dammam, Abqaiq), FAQPage with 10 questions matching the visible ones. No flight-tracking or access properties |
| Encoding | No mojibake. No `localhost`. In the sitemap |
| Overlap | 3.1–3.5% vs the reverse, city-origin and other redesigned pages |
| Keyword density | "dammam airport to abqaiq" 5 times in about 1,650 words |

## 5. Owner confirmation needed

1. **DMM pickup procedure:** the meeting point is "confirmed with your booking". Do you use an arrivals-hall meeting point or a pickup zone?
2. **Flight tracking and waiting at DMM.** The site-wide DMM status notice (`data/airport-status.ts`, last checked 22 Oct) still says "we track your flight", which this page does not claim. Please confirm which is correct; the notice should also be re-dated or retired.
3. **Separate-flight team pickups:** "confirmed in your quotation".
4. **Work equipment:** suitability confirmed in the quotation.
5. **`/routes/abqaiq-to-dammam-airport` still says "80 km / 55 min"** with fixed-price claims; `/routes/dammam-to-abqaiq` should be checked too.
6. The shared quote-form disclaimer and footer still say "fixed price" (decision D3).
7. The Arabic page needs a native-speaker update.
