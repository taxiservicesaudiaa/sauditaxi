# 64 — Riyadh city page (`/taxi-service/riyadh`) (local only)

**Date:** 25 November 2026.

**Not done:** no commit, push or deployment; no form submission or indexing request. Arabic was not edited. No page was deleted, redirected or noindexed, and none was removed from the sitemap.

**Preserved:** the uncommitted Yanbu (61), Jubail–Dammam (62) and Khamis Mushait (63) work. The Jeddah, Jazan, Abha and Taif pages were not touched. `/cities/riyadh` is byte-for-byte unchanged in the build (its date was deliberately kept).

## 1. Files changed

| File | Status | Change |
|---|---|---|
| `data/riyadh-city-page.ts` | New | Copy, facts with sources, 7 photos (with credits), 11 FAQs |
| `components/city-transfer/RiyadhCityView.tsx` | New | The "capital grid" layout |
| `public/images/riyadh/*.webp` (7) | New | Licensed Riyadh photos |
| `app/(main)/taxi-service/[city]/page.tsx` | Modified | Riyadh branch (BreadcrumbList, WebPage, Service, FAQPage) and OG image. Other city branches unchanged |
| `data/cities.ts` | Modified | Riyadh intro, about, highlights, meta title and description only (CRLF preserved) |
| `data/city-guides.ts` | Modified | Riyadh fields **before `hubFaqs`** only (no longer rendered, but required by the template) |
| `data/photo-credits.ts` | Modified | Riyadh group added to `/image-credits` |

**Before:** the page used the shared CityTransferHub template, fed by `cities.ts` and `city-guides.ts`.

## 2. Content (story-led; balanced across airport, business, family, hotel and intercity)

1. **Hero:**
   - "Riyadh Region · The capital"; the H1; an intro describing Riyadh as a city of far-apart districts (airport, King Fahd Road and KAFD, Diplomatic Quarter, Diriyah).
   - "Get a Riyadh Quote" and "City transfers overview" buttons.
   - Facts ledger: region, RUH, RUH to Olaya ≈37 km, Dammam ≈400–415 km east. "Popular corridor" was replaced with a factual figure.
2. **A capital built for the car:** the city's spread and the range of journeys people request. The old claim "most private-transfer demand here is corporate" is gone.
3. **Riyadh Airport transfers:** RUH location and distances, transfers in both directions, pickup confirmed individually; a terminal-status notice; a link to the RUH page; a distance list from RUH.
4. **Business travel across Riyadh:** three district photo cards (Olaya and King Fahd Road, KAFD, Diplomatic Quarter). Customers send their schedule and get a quotation; Riyadh Front and Riyadh Season are mentioned as times to "arrange in advance".
5. **From Riyadh to other cities:** 6 route cards (Dammam, Qassim, Jeddah, Makkah, Madinah, AlUla), showing direction and a one-line description. **No figures** (see section 12).
6. **Hotel transfers:** give your hotel name or address; link to the `/cities/riyadh` directory.
7. **Diriyah and At-Turaif:** first Saudi capital; At-Turaif is a UNESCO site; ≈16–18 km from Olaya; mention return plans in your request.
8. **Families, groups and delegations:** families, groups (exhibitions and events), and child seats in the approved wording.
9. **Pickup and drop-off places:** a grouped board (Airport; Business; Events and culture; Everyday), plus "any exact address".
10. **Riyadh's regional connections:** a compass of route links.
    - East: Dammam, Khobar, Jubail.
    - North: Qassim, Hail.
    - West: Jeddah, Makkah, Madinah, AlUla, Yanbu.
    - South: Abha.
11. **How to book:** 5 steps, then the QuoteForm (pickup "Riyadh", city "Riyadh") and WhatsApp.
12. **FAQs (11)** and the final CTA.

## 3. Airport facts (OSRM / Valhalla, 25 Nov 2026)

| RUH → | Distance | Driving time (free-flow) |
|---|---|---|
| Riyadh Front | 22 km | 17 min |
| KAFD | 32–33 km | 24–28 min |
| Kingdom Centre, Olaya | 37 km | 27–30 min |
| At-Turaif, Diriyah | 38–39 km | 28–34 min |
| Masmak (old centre) | 45–47 km | 33–39 min |
| Diplomatic Quarter | 46–49 km | 34–40 min |

- **Published:** about 32–37 km to KAFD and Olaya, roughly 25–45 minutes with ordinary traffic (longer at busy times). The Diplomatic Quarter is ≈46–49 km.
- **Terminal status:** Terminals 1 and 2 resumed on 25 October 2026 after a suspension from 10 October. No date has been announced for the other terminals (Arab News, Time Out Riyadh). The page says this and asks travellers to confirm with their airline.
- **Removed:**
  - flight tracking;
  - arrivals-hall meeting with a name board;
  - "fixed price… same whether your flight lands early or is delayed";
  - "a driver collects you… timed around your flight".

## 4. Business transport

**Removed:**
- "fixed day-rate";
- "same driver and vehicle available between appointments";
- "more reliable than searching for a ride-hailing match";
- "demand rises quickly".

**Now:** send your meeting schedule, addresses and timings for a quotation, and arrange in advance for Riyadh Front exhibitions or Riyadh Season.

## 5. Intercity cards and links

All 15 internal links on the built page exist:
- 11 route pages;
- `/airport-transfer/riyadh-airport`;
- `/cities/riyadh`;
- `/city-transfers`;
- `#quote`.

**Removed:** "each a fixed-price private transfer" and "the price is agreed and fixed before you travel".

## 6. Hotels and culture

- **Hotels:** fixed-price hotel transfers and "to the door" are gone. Customers give their hotel name or address, and the directory link is kept.
- **Diriyah:** "fixed-price round trip with waiting time included" and "same driver for the return leg" are gone. Customers mention return plans in their request.

## 7. Families and groups

- **Removed:** fixed-price vans and full-day chauffeur booking.
- **Now:** passengers and bags lead to a suggested vehicle; larger vehicles can be requested; child seats use the approved wording.

## 8. Photography (all genuine; licences read from Commons metadata; credited on `/image-credits`)

| File | Subject | Author · licence |
|---|---|---|
| `riyadh-skyline-sunset.webp` (hero, OG, schema image) | Skyline with the Kingdom Centre and KAFD | B.alotaby · CC BY-SA 4.0 |
| `king-khalid-airport-terminal.webp` | RUH terminal frontage | Kharbaan Ghaltaan · CC BY-SA 4.0 |
| `kingdom-centre.webp` | Kingdom Centre, Olaya | Wajahat Mahmood · CC BY-SA 2.0 (FlickreviewR ✓) |
| `kafd-skyline.webp` | KAFD towers | Ahmed · CC BY-SA 4.0 |
| `diplomatic-quarter-view.webp` | Skyline from the Diplomatic Quarter | Thesadcactus · CC BY-SA 4.0 |
| `at-turaif.webp` | At-Turaif mud-brick walls | xiquinhosilva · CC BY 2.0 (FlickreviewR ✓) |
| `diriyah-gardens.webp` | Gardens looking to At-Turaif | Radosław Botev · CC BY 3.0 PL |

The old `/images/journey/riyadh-skyline.jpg` has no licence record and was not used.

## 9. SEO and structured data

- **Title:** "Private Transfers in Riyadh | Airport, Business & Intercity".
- **Meta description:** "Private transfers in Riyadh: King Khalid Airport, Olaya, KAFD, the Diplomatic Quarter, Diriyah and journeys to Dammam, Jeddah and Makkah. Request a quotation."
- **Headings:** one H1 and 12 H2s.
- **Canonical:** self. **hreflang:** en and ar (unchanged). **Robots:** index, follow. **OG image:** the skyline.
- **JSON-LD:**
  - BreadcrumbList.
  - WebPage, with `primaryImageOfPage`, author, licence and source.
  - Service, with `areaServed` City Riyadh in the Riyadh Region.
  - FAQPage (11), matching the visible FAQs 11/11.
- **No geo meta tags.**

## 10. Quote form

| Check | Result |
|---|---|
| Prefilled | Pickup "Riyadh" |
| Drop-off | Editable (placeholder only) |
| Fields present | Date, time, passengers, luggage, vehicle type, message. The flight field appears for airport trips |
| Backend | Shared QuoteForm and backend unchanged; no submission |
| Mobile | Usable at 500 px |

Quote CTAs appear in the hero, the booking section and the final banner.

## 11. QA

| Check | Result |
|---|---|
| TypeScript | 0 errors |
| Lint | Repo 10 (the same pre-existing set). Changed files: 0 |
| Production build (isolated worktree with all current changes and `.env`) | Exit 0, 906/906 |
| Site diff vs the Khamis Mushait build | 3 pages: `taxi-service/riyadh` (title, meta, JSON-LD, body), `image-credits`, and `taxi-service/khamis-mushait` (only the lightened hero overlay from report 63). None added or removed. `cities/riyadh`: no change |
| Claims scan (fixed / day-rate / 24/7 / tracking / name board / meet-and-greet / waiting / same driver / full-day / chauffeur / round trip / partner / guarantee / reliable) | 0 matches |
| Visual | Desktop 1440 and mobile 500, no overflow |
| Arabic | 0 files changed |

## 12. Related-page issues found (not changed)

1. **`riyadh-to-jeddah`:** record says 950 km / **9 hours**; OSRM gives 948 km / **10.4 h** (the reverse was corrected to 10–11 h in report 60).
2. **`riyadh-to-alula`:** record says 1,000 km / **9 h 30**; OSRM gives 1,035 km / **10.9 h**.
3. **Other route records** are close to routing:
   - Makkah: 870 km / 9 h (OSRM 871 km / 9.6 h).
   - Madinah: 850 km / 8.5 h (826 km / 7.7 h).
   - Dammam: 400 km / 3 h 45 (414 km / 3.9 h).
   - Khobar: 405 km / 4 h (423 km / 4.0 h).
4. **`/cities/riyadh` hub FAQ:** "pickups and drop-offs run 24/7 at King Khalid International Airport…".
5. **Arabic `/ar/…` Riyadh pages** still carry fixed-price wording, for example Riyadh to Dammam ("الأسعار الثابتة"). The Arabic Riyadh city page was not reviewed line by line.

## 13. Owner decisions

1. **Correct the `riyadh-to-jeddah` and `riyadh-to-alula` times** (10–11 h; ≈10.5–11 h)?
2. **Remove the 24/7 claim** from the `/cities/riyadh` hub FAQ?
3. **Show route figures on the Riyadh intercity cards** once all six records are verified?
4. **Confirm** whether any of the removed operational features (flight tracking, name boards, day-rates, waiting between meetings) are actually offered at RUH or in Riyadh. If so, they can be restored with accurate wording.
