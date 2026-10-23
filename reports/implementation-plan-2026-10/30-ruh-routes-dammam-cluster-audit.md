# Audit: Riyadh airport route pages and the Dammam airport cluster

**Date:** 22 October 2026. **Type:** audit only. No code, data, translation, database or production change was made.

**Companion:** `30b-ruh-routes-dammam-claim-inventory.csv` — 390 rows, one per claim occurrence: page, language, claim type, whether it appears in the title or metadata, and the exact sentence on the live page.

| Item | Detail |
|---|---|
| Scope | **RUH:** 5 English route pages + 5 Arabic counterparts. **Dammam:** 75 URLs (EN + AR) — hub, 22 English airport routes, 14 `/dammam/` point pages, 6 distance pages, 3 blogs, 29 Arabic pages |
| Method | Live scan of all 91 URLs on 22 Oct (all HTTP 200), with exact claim sentences; source-file mapping; CRM (9–22 Oct); GSC Top-pages (16 Jul – 15 Oct); Bing page stats (to 16 Oct); inbound-link graph from the 19 Oct build |
| Labels | VERIFIED / OWNER-CONFIRMED / SOURCE-DERIVED / UNVERIFIED / CONFLICTING |

## 1. Current official evidence

| Topic | Evidence | Status |
|---|---|---|
| RUH operations | GACA (via SPA): suspension 10 Oct; extension for safety checks 12 Oct. No later official statement found (checked 22 Oct) | VERIFIED to 12 Oct; current status **CONFLICTING** — Inside Aviation (18 Oct): NOTAM A3650/26 prior permission vs. Time Out Riyadh (21 Oct): still closed |
| RUH service | Owner, 22 Oct: keep case-by-case wording until operating and permission requirements are confirmed | OWNER-CONFIRMED |
| DMM incidents | GACA (via SPA `N2698805`): attack on 11 Oct, damage assessment. Arab News 22 Oct, quoting GACA: second attack on the evening of 21 Oct (2 killed, 8 injured); "operations… have resumed and air traffic have returned to normal" | VERIFIED |
| DMM airline schedules | Several carriers had suspended Dammam flights (KLM, Qatar Airways, Lufthansa, Air France reported) | UNVERIFIED per airline → "check your airline" |
| DMM transfers | Owner editorial review, 19 Oct: airport transfers at JED, DMM and MED | OWNER-CONFIRMED |
| Meet-and-greet, name board, flight tracking, automatic pickup adjustment, **free waiting time** at DMM (and JED/MED) | No owner confirmation on record (audit `25-…` question 4) | **UNVERIFIED** |
| Price wording | "The confirmed quotation sets the price and shows what it covers"; tolls and border fees vary by route or quote | OWNER-CONFIRMED |
| Distances and durations (e.g. DMM–Riyadh 420 km / 4 h; RUH–Riyadh 35 km / 30–45 min) | No recorded verification (programme V15) | UNVERIFIED |

## 2. Riyadh airport route pages (5 EN + 5 AR)

### 2.1 Evidence and role

| Page | Lang | Content source | GSC (16 Jul–15 Oct) | Bing (to 16 Oct) | CRM (9–22 Oct) |
|---|---|---|---|---|---|
| `/routes/riyadh-airport-to-riyadh` | EN | `data/airport-route-content.ts` + `routes.ts` meta | not in export | — | 0 first landings (5 RUH mentions across all enquiries) |
| `/routes/riyadh-to-riyadh-airport` | EN | `data/city-airport-route-content.ts` + `routes.ts` | not in export | — | 0 |
| `/routes/riyadh-airport-to-jeddah` | EN | `airport-route-content.ts` + `routes.ts` | not in export | — | 0 |
| `/routes/riyadh-airport-to-makkah` | EN | same | not in export | — | 0 |
| `/routes/riyadh-airport-to-madinah` | EN | same | not in export | — | 0 |
| `/ar/توصيل-من-مطار-الرياض-إلى-الرياض`, `/ar/توصيل-من-الرياض-إلى-مطار-الرياض`, `/ar/نقل-من-مطار-الرياض-الى-جدة`, `/ar/نقل-من-مطار-الرياض-الى-مكة`, `/ar/نقل-من-مطار-الرياض-الى-المدينة-المنورة` | AR | `ar.ts` + the AR template steps | — | — | 0 |

**Assessment.** Low current demand, but the pages make **specific RUH service promises while RUH is disrupted**. That is a trust and accuracy risk, not a traffic opportunity.

- **Keep the URLs.** There's no evidence to justify removal, redirect or noindex, and the pages regain value when RUH service resumes.
- **Neutralise the promises** and point visitors to the alternatives.

### 2.2 Unsupported claims found (exact text on the live pages)

| Claim | Where (EN) | Where (AR) | Source of the text |
|---|---|---|---|
| "Flight tracking begins — We track your flight from the moment you book, so the pickup time adjusts automatically…" | 4 RUH→city pages (step 1) | "تبدأ متابعة رحلتك الجوية" (all 3 AR airport→city pages and the AR RUH→Riyadh page) | **Shared template**: `app/(main)/routes/[slug]/page.tsx` L246–256; `app/ar/[...slug]/page.tsx` L775, L993 |
| "Receive a fixed price — Confirmed before you travel — no meter, no surge pricing" | all 5 | "استلم سعرًا ثابتًا… دون عداد ودون رسوم مفاجئة" (all 5) | Shared template L261, L381; AR template L1001+ |
| "…at the fixed price agreed when you booked" | 4 | "بالسعر الثابت المتفق عليه عند الحجز" | Shared template L254 |
| "Your driver waits in the arrivals area, tracking your flight for any delay" | 4 | — | Shared template L262 |
| "…holding a name board…"; "We track your flight and your driver waits in the arrivals area with a name board, adjusting for early or delayed landings"; "No issue. We adjust the pickup time to your actual landing time…"; "Is the price fixed regardless of traffic? Yes…" | RUH→Riyadh | "يستقبلك السائق داخل صالة الوصول بلافتة تحمل اسمك" (RUH→Madinah AR) | `airport-route-content.ts` (`riyadh-airport-to-riyadh`) |
| "…tracked… pickup matched to whichever one you land at"; "one fixed price for the whole journey and any luggage" | RUH→Jeddah | — | `airport-route-content.ts` |
| "…all tracked the same way — your driver waits in the arrivals area…" | RUH→Makkah | — | same |
| "Your flight… is tracked across all five terminals, and your driver waits…" | RUH→Madinah | — | same |
| "60 دقيقة انتظار مجانية" (60 minutes' free waiting) + automatic adjustment | — | AR RUH→Riyadh | `ar.ts` |
| "نضمن لك وصولاً مريحاً وفي الوقت المحدد" (we guarantee on-time arrival) | — | AR Riyadh→RUH | `ar.ts` |
| Meta: "flight tracking, fixed price"; "English-speaking drivers"; "meet-and-greet pickup and a fixed fare"; "punctual" (Service schema intro) | all 5 (meta); Jeddah + Riyadh→RUH (intro in JSON-LD) | AR metas: "استقبال في صالة الوصول، تتبع الرحلات، وسعر ثابت"; "دقة في المواعيد" | `routes.ts` (metaTitle, metaDescription, intro); `ar.ts` |
| Unverified figures in meta: 35 km / 30–45 min; 950 km / 9 h; 880 km / 8 h 30; 850 km / 8 h | all 5 | AR "مدة القيادة الصافية" values | `routes.ts`, `ar.ts` |
| No status information on any of the 10 pages | — | — | — |

**Not rendered (dead data):** the `notes`/`about` strings in `routes.ts` for these routes ("Meet and greet inside RUH Terminals 1–5 with flight tracking", "Fixed transparent pricing…", "Flight monitoring ensures punctual…", "3 hours before international departures"). Fix for consistency only (low priority).

### 2.3 Conversion gaps

- **CTA pre-fill.** Pickup "Riyadh Airport" (4 pages) or drop-off "Riyadh Airport" (1). Visitors are directed to request an unconfirmed service.
- **No alternative path.** Nothing points visitors whose flight was moved to Qassim, Dammam, Madinah or Jeddah to the routes that are actually confirmed.
- **Hub links.** The (locally updated, undeployed) Riyadh hub no longer links these routes, so the pages are reached mainly from other route pages (6–10 inbound each).

### 2.4 Exact proposed changes (EN)

**(a) Template — optional per-route overrides, no change for other routes**

Add optional fields to `AirportRouteContent` (`data/airport-route-content.ts`) and `CityAirportRouteContent` (`data/city-airport-route-content.ts`):
- `notice?: { heading; paragraphs; links? }`
- `arrivalSteps?: { label; detail }[]` (airport→city only)
- `bookingSteps?: { label; detail }[]`

In `app/(main)/routes/[slug]/page.tsx`, use them with `??` fallback (the same pattern as the Riyadh hub change), and render `notice` in `AirportRouteView` / `CityToAirportRouteView` under the hero.

**Acceptance:** a full prerender comparison shows only the 5 RUH routes changed.

**(b) Notice** (all 5 EN pages; identical to the Riyadh hub notice for consistency)
- Heading: "Riyadh airport status — last checked [date]"
- Paragraphs: the three paragraphs of the hub notice (GACA 10/12 Oct; no official resumption found; "confirm your flight with your airline"; RUH pickups/drop-offs confirmed case by case; alternatives).
- Links: Qassim (incl. Qassim airport) → Riyadh; Dammam Airport → Riyadh; Madinah Airport → Riyadh; Jeddah Airport → Riyadh; the disruption guide.

**(c) Steps (override for the 4 RUH→city pages)**

1. "Check your flight" — "Confirm with your airline that your flight is operating and which airport it now uses."
2. "Share your details" — "Send your airline, flight number, the airport, your destination address, and your passenger and luggage numbers."
3. "Receive your quotation" — "Whether a pickup at King Khalid International Airport can be arranged, the meeting point and the price are confirmed in your quotation."
4. "Travel" — "Your driver meets you at the point and time confirmed in your quotation."

Booking steps for Riyadh → RUH: the same, worded for departures ("…whether a drop-off at the airport can be arranged…").

**(d) Metadata (`routes.ts`)**

| Route | metaTitle (proposed) | metaDescription (proposed) |
|---|---|---|
| riyadh-airport-to-riyadh | keep "Private Taxi: Riyadh Airport to Riyadh" | "Transfers from Riyadh Airport (RUH) to the city are confirmed case by case while airport operations are disrupted. Your confirmed quotation sets the price." |
| riyadh-to-riyadh-airport | keep | "Transfers from Riyadh to King Khalid International Airport (RUH) are confirmed case by case while airport operations are disrupted. Your confirmed quotation sets the price." |
| riyadh-airport-to-jeddah | "Riyadh Airport to Jeddah Private Transfer" | "Riyadh Airport (RUH) to Jeddah transfers are confirmed case by case while airport operations are disrupted. Your confirmed quotation sets the price." |
| riyadh-airport-to-makkah | keep | Same pattern, Makkah |
| riyadh-airport-to-madinah | keep | Same pattern, Madinah |

`intro` (Service schema) for riyadh-airport-to-jeddah and riyadh-to-riyadh-airport: remove "meet-and-greet service and fixed pricing" and "punctual". Proposed: "Private transfer from King Khalid International Airport (RUH) to Jeddah, confirmed case by case in your quotation while airport operations are disrupted." (and equivalent for Riyadh → RUH).

**(e) Content strings (`airport-route-content.ts`, `city-airport-route-content.ts`) — old → new**

| Route | Old (exact) | New |
|---|---|---|
| RUH→Riyadh `arrivalPickup[0]` | "Your flight is tracked from the moment you book, so the pickup time adjusts automatically if you land early or late. Your driver waits for you after you clear customs, holding a name board so you're easy to spot." | "Confirm your flight with your airline first. Whether a pickup at King Khalid International Airport can be arranged, and where you would meet your driver, is confirmed in your quotation." |
| RUH→Riyadh FAQ "Will someone be waiting for me after I land?" | "Yes. We track your flight and your driver waits in the arrivals area with a name board, adjusting for early or delayed landings." | "Airport pickups are confirmed case by case while operations at King Khalid International Airport are disrupted. Send your flight details and the meeting point is confirmed in your quotation." |
| RUH→Riyadh FAQ "What if my flight is delayed?" | "No issue. We adjust the pickup time to your actual landing time, so a delay doesn't cost you the transfer." | "Tell us as soon as your airline confirms a new time, and we'll review the pickup with you." |
| RUH→Riyadh FAQ "Is the price fixed regardless of traffic?" | Q + A | Q: "How is the price set?" A: "You receive a quotation before you travel; the confirmed quotation sets the price and shows what it covers." |
| RUH→Riyadh FAQ "How far is King Khalid International Airport from central Riyadh?" | "Around 35 km, which typically takes 30–45 minutes…" | "It depends on your destination in the city and traffic; share your address and preferred time when you request a quote." (figure pending V15) |
| RUH→Jeddah | "…your flight is tracked and the pickup matched to whichever one you land at." / "…one fixed price for the whole journey and any luggage." / "Around 9 hours for 950 km…" | "…share your flight number and terminal; any airport pickup is confirmed in your quotation." / "…one vehicle for the whole journey and your luggage, priced in a quotation you confirm." / "Journey time depends on traffic and the rest stops you agree; it is discussed when you request a quote." |
| RUH→Makkah | "…all tracked the same way — your driver waits in the arrivals area matching your specific terminal." / "Around 8 hours 30 minutes for roughly 880 km." | "…share your terminal and flight number; any airport pickup is confirmed in your quotation." / journey-time sentence as above |
| RUH→Madinah | "Your flight… is tracked across all five terminals, and your driver waits once you've cleared customs." / "Around 8 hours for roughly 850 km." | "Share your flight number and terminal; any airport pickup and meeting point are confirmed in your quotation." / journey-time sentence as above |
| Riyadh→RUH | "At around 35 km…" / "The 35 km distance itself is short…" | Remove the figure: "The variable is how busy the airport expressway and connecting roads are at your departure time." |

**(f) Arabic** (5 pages; `ar.ts` + AR template steps) — **change list only; native review required.** Same meaning as (b)–(e):
- remove "متابعة الرحلة", "لافتة تحمل اسمك", "60 دقيقة انتظار مجانية", "نضمن لك وصولاً… في الوقت المحدد", "دقة في المواعيد" and "سعر ثابت";
- add the dated notice;
- use the case-by-case and quotation wording;
- remove the unverified durations from the facts box.

The AR template step strings (`app/ar/[...slug]/page.tsx` L775, L993, L1001) are shared by every Arabic airport route, so they need the same optional-override approach.

### 2.5 Out of scope but flagged (Arabic RUH pages)

`/ar/دليل-مطار-الرياض-الصالات-والنقل-إلى-المدينة`, `/ar/نقل-مطار-الملك-خالد-إلى-مركز-الملك-عبدالله-المالي`, `/ar/نقل-مطار-الرياض-إلى-مركز-المعارض-والمؤتمرات` and `/ar/استقبال-السائق-في-مطار-الرياض` carry the same kind of RUH pickup promises (see the CSV, group "RUH other"). Schedule them with the Arabic pass.

## 3. Dammam airport cluster (75 URLs)

### 3.1 Evidence

| Page | GSC impr. (16 Jul–15 Oct) | Bing (since 1 Oct) | CRM first landings (9–22 Oct) |
|---|---|---|---|
| `/airport-transfer/dammam-airport` (EN only — no AR hub) | 50 | 0c/1i | 1 |
| `/routes/dammam-airport-to-bahrain` | 128 | — | 1 |
| `/routes/dammam-airport-to-khobar` | 61 | — | 0 |
| `/routes/dammam-airport-to-doha` | 42 | 2c/15i | 0 |
| `/routes/dammam-airport-to-riyadh` | 2 | — | 1 |
| `/blog/king-fahd-international-airport-complete-guide` | 68 | **0c/239i**; query "king fahd international airport" 0c/179i | 0 |
| `/blog/best-hotels-near-dammam-airport` | 54 | 0c/1i | 0 |
| `/dammam/dammam-airport-to-hotels` | 12 | — | 0 |
| Related: `/routes/dammam-to-bahrain-airport`, `/routes/khobar-to-bahrain-airport` | — | — | 2 + 2 |

**Enquiry demand** for Dammam-airport journeys is modest: 5 DMM ↔ Riyadh, 3 naming DMM, plus Bahrain-airport trips from Dammam/Khobar.
**Search visibility** is concentrated on the KFIA guide (Bing) and `dammam-airport-to-bahrain` (GSC), and neither converts.

### 3.2 Unsupported claims (counts from the scan; exact sentences in the CSV)

| Claim | EN routes (22) | `/dammam/` (14) | Hub | Blogs (3) | AR (29) | Source |
|---|---|---|---|---|---|---|
| Fixed price / fixed fare | 22 | 14 | ✓ | 3 | 24 | Route data, point-transfer data, guides; **shared templates** (EN route steps, `QuoteForm`, AR steps) |
| No toll / no hidden / no meter / fully inclusive | 20 | 4 | ✓ | 2 | 22 | Mostly the shared template step "no meter, no surge pricing"; the AR template "دون رسوم مفاجئة" |
| Flight tracking / automatic adjustment | 17 | 5 | ✓ | 2 | 13 | Data + templates |
| Meet-and-greet / name board / arrivals hall | 12 | 8 | ✓ | 3 | 2 | Data + templates |
| **Free waiting time** (rendered) | 3 (Bahrain, Doha, Khafji border) | — | ✓ | — | 3 | Data, e.g. hub FAQ "free wait time, so a delay never costs you the ride or your fixed price" |
| "Price fixed even if the border crossing is slow" | Doha | — | — | — | Doha AR: "ما نضمنه هو سعر ثابت بغض النظر عن مدة العبور" | `gcc-route-content.ts`, `ar.ts` — **conflicts** with the owner policy that border fees vary and the quotation controls |
| Distances/durations (meta and body) | 22 | 14 | ✓ (40 km, 30–45 min) | 3 | 27 | Data — UNVERIFIED |
| DMM status (21 Oct attack, 22 Oct GACA resumption) | **none** | **none** | **none** | Only the advisory (12 Oct, OUTDATED) | AR advisory (12 Oct, OUTDATED) | — |

### 3.3 Conversion and linking gaps

1. **Near-orphan `/dammam/` pages.** All 14 have 2–3 inbound links (each other + the sitemap), including `/dammam/dammam-airport-to-hotels` (12 GSC impr.). The hub doesn't link them.
2. **KFIA guide (Bing 0/239):**
   - title and description are evergreen and don't mention current status or onward transfers;
   - its sidebar route links point to Jeddah/Makkah/Madinah (shared `BlogSidebar` — `routes.slice(0, 5)`).
3. **Distance pages** (6 EN, 6 AR): no quote CTA.
4. **Hub:**
   - no Arabic counterpart;
   - links 5 airport routes but not `dammam-airport-to-doha`, `-qatif`, `-hofuf` or the hotel/business pages;
   - CTA pre-fill "King Fahd International Airport (DMM)" is acceptable (DMM transfers are owner-confirmed).
5. **Low-inbound EN routes** (3 inbound each): `dammam-airport-to-ras-tanura`, `-saihat`, `-abqaiq`, `-hofuf` and their reverses.

### 3.4 Exact proposed changes

**(a) DMM status note.** Hub, the 4 high-evidence routes, the KFIA and hotels guides, and the advisory:

> **Dammam airport status — last checked [date].** King Fahd International Airport (DMM) was attacked on 11 October and again on the evening of 21 October 2026. On 22 October, Saudi Arabia's General Authority of Civil Aviation said operations had resumed and air traffic had returned to normal. Airline schedules may still be affected, so confirm your flight with your airline before you travel.

- Hub: via `hubOverrides.notice`. That mechanism exists only in the uncommitted Riyadh change; **deploy it first**.
- Routes: via the per-route `notice` override proposed in §2.4(a).

**(b) Operational wording — depends on owner question 4**

| If the owner CONFIRMS meet-and-greet, flight tracking and free waiting at DMM | If NOT confirmed (default until answered) |
|---|---|
| Keep, but make conditional: "Share your flight number; your driver meets you at the point confirmed in your quotation. Waiting time included is shown in your quotation." | Replace with: "Share your flight number and arrival time when you request a quote; the pickup time and meeting point at King Fahd International Airport are confirmed in your quotation. If your flight changes, tell us as soon as your airline confirms the new time." |

**(c) Hub** (`airport-guides.ts` → `dammam-airport`; `airports.ts` → `hubOverrides`)

| Old (exact) | New |
|---|---|
| "…Your driver tracks y[our flight]…" (core paragraph) | "…Tell us your flight, destination, passengers and luggage, and we reply with a quotation; the confirmed quotation sets the price and shows what it covers." |
| "After immigration and baggage claim, your driver waits in the arrivals hall with a name board…" | Wording (b) |
| "Fixed-price pickup to hotels and corporate destinations across the Eastern Province, priced before you travel…" | "Pickup to hotels and corporate destinations across the Eastern Province, priced in a quotation you confirm before you travel." |
| "The airport is about 40 km from central Dammam… 30–45 minute drive…" | "Drive time to Dammam, Khobar or Dhahran depends on your destination and traffic; share your address when you request a quote." |
| FAQ "In the arrivals hall, holding a name board…" | Wording (b) |
| FAQ "…fixed-price transfers… with meet & greet on arrival." | "…private transfers from the airport to Jubail, Dhahran and Khobar, priced in your quotation." |
| FAQ "We track your flight in real time and adjust the pickup automatically, with free wait time, so a delay never costs you the ride or your fixed price." | "If your flight changes, tell us as soon as your airline confirms the new time and we'll review the pickup with you." |
| FAQ "…we'll confirm a fixed price and a driver assigned to your specific flight." | "…we reply with a quotation; the confirmed quotation sets the price." |
| `hubOverrides`: steps / booking / CTA text / popular-card body | The same set as Riyadh, without the RUH-specific case-by-case lines. CTA pre-fill stays DMM |
| New links | `/dammam/dammam-airport-to-hotels`, `/dammam/dammam-airport-to-business-district`, `/routes/dammam-airport-to-doha`, `/blog/king-fahd-international-airport-complete-guide` |

**(d) Routes (top 4 by evidence)**

- `dammam-airport-to-riyadh`:
  - metaDescription: "Private transfer from King Fahd International Airport (DMM) to Riyadh. Share your flight details and destination — your confirmed quotation sets the price." (was "420 km, about 4 hours… flight tracking, fixed price");
  - content "…your flight is tracked and the driver waits in the arrivals hall" → wording (b);
  - "At 420 km and 4 hours…" → "This is a long drive west to Riyadh; timing depends on traffic and any stops you agree";
  - "…at a fixed price for the four-hour drive" → "…priced in a quotation you confirm";
  - FAQ "Around 4 hours for 420 km." → the journey-time sentence above;
  - **add** an FAQ: "My Riyadh flight was moved to Dammam — can you drive me to Riyadh?" → "Yes. Share your flight number and Riyadh address; the pickup and price are confirmed in your quotation."
- `dammam-airport-to-khobar`:
  - meta without "35 km / 30 min" and "fixed price";
  - rendered content "…your driver tracks your flight and waits in the arrivals hall…" and "We track your flight and adjust the pickup time automatically" → wording (b);
  - "About 35 km, typically a 30-minute drive" → remove the figure.
  - The `routes.ts` strings "There are no tolls on this route, and the fixed price… covers the complete transfer" and "Is free waiting time included? Yes…" are **not rendered** on the live page (checked 22 Oct). Correct them for data consistency only.
- `dammam-airport-to-bahrain` (`gcc-route-content.ts`):
  - meta "(~100 km, 1 hr 30 min)… toward Bahrain, fixed price" (direction correct; classed direction-correct in B-1, fee wording deferred to B-2) → "Private transfer from King Fahd International Airport (DMM) to Bahrain across the King Fahd Causeway. Your confirmed quotation sets the price.";
  - "fixed, all-in price" → quotation wording;
  - "Flight tracking and what happens if your flight runs late" section → wording (b);
  - add the air-only-visa / land-entry caveat (Ireland DFA, VERIFIED excerpt) for travellers entering Bahrain/Saudi by road.
- `dammam-airport-to-doha` (`gcc-route-content.ts`):
  - meta "(~420 km, ~4.5–5 hours…) Flight tracking, meet-and-greet, fixed price" → "Private transfer from King Fahd International Airport (DMM) to Doha via the Salwa border. Your confirmed quotation sets the price and shows what it covers.";
  - **remove** "Fixed price agreed before you fly — unaffected by a slow flight or border" and the FAQ "Is the price fixed even if the border crossing is slow?" → "Border charges and waiting vary by journey; your quotation shows what it covers" (owner policy);
  - name-board/tracking sentences → wording (b).

**(e) Remaining 18 EN routes, 14 `/dammam/` pages, 6 distance pages.** Apply the same replacement rules by claim type (CSV `claim_type`):

| Claim type | Rule |
|---|---|
| `fixedPrice`, `feeInclusion` | Confirmed-quotation sentence |
| `tracking`, `meetGreet`, `waitTime` | Wording (b) |
| `figures` in meta | Remove; in body, keep only if verified (V15) |
| `guarantee` | Remove the guarantee; keep disclaimers |

Data files: `data/routes.ts` / `data/dammam-routes.ts` (meta), `data/airport-route-content.ts`, `data/point-transfer-v2/dammam.ts`.

Distance pages: add a pre-filled quote CTA linking the route page (template item, audit `25-…` §B6).

**(f) Blogs (database — separate authorisation)**

| Post | Proposed changes |
|---|---|
| KFIA guide | Status note (a) at the top. Title/description e.g. "King Fahd International Airport (DMM): Guide, Hotels & Onward Transfers" — no status in the title. Contextual links to the hub, `/dammam/dammam-airport-to-hotels`, `dammam-airport-to-khobar`, `-riyadh`, `-bahrain`. Replace tracking/meet-and-greet and fixed-price sentences per (b) |
| Best hotels near DMM | Status note; remove "guarantee" and fixed-price phrasing; link `/dammam/dammam-airport-to-hotels` |
| DMM advisory (EN + AR) | Update to the 21 Oct attack and the 22 Oct GACA statement; remove superseded "no closure announced" framing; same structure as the Riyadh package (`29-…`) |

**(g) Arabic** (29 pages + the AR advisory). Change list only; native review required. The same rules apply, notably:
- "ما نضمنه هو سعر ثابت بغض النظر عن مدة العبور" (Doha);
- "وقت انتظار مجاني" (Bahrain, Doha, Khafji);
- "لوحة باسمك" (Doha, Khafji);
- "سعر ثابت" (24 pages);
- add the AR status note.

There is no Arabic DMM hub (template gap; separate item).

## 4. Shared-template dependencies (separate approval)

| Template | Strings | Affects |
|---|---|---|
| `app/(main)/routes/[slug]/page.tsx` airport→city and city→airport steps | "Flight tracking begins…", "Receive a fixed price… no meter, no surge", "Your driver meets you in arrivals", "at the fixed price agreed when you booked" | Every English airport route (RUH, DMM, JED, MED, …) |
| `app/ar/[...slug]/page.tsx` | "تبدأ متابعة رحلتك الجوية", "استلم سعرًا ثابتًا… دون عداد ودون رسوم مفاجئة" (L775, L993, L1001, L1130, L1285, L1452, L1623, L1817, L2042, L2047) | Every Arabic airport/route view |
| `components/blog/BlogSidebar.tsx` | `routes.slice(0, 5)` | All blogs |
| Distance-page template | No CTA | 73 distance pages |

**Recommended approach:**
- per-route optional overrides now, for RUH and DMM only (scoped and testable);
- a template-wide wording change once owner question 4 is answered, because it applies to all airports.

## 5. Proposed sequencing (each step needs approval)

1. Deploy the Riyadh hub (`27-…`) and the Riyadh advisory (`29-…`) together.
2. **RUH routes, EN:** per-route override mechanism, plus §2.4 changes for the 5 routes.
3. **DMM, EN:** status notes; hub `hubOverrides`; top-4 routes (§3.4 d); hub ↔ `/dammam/` links; DMM advisory and KFIA/hotels blogs (database).
4. Once owner question 4 is answered: apply wording (b) across the remaining DMM routes and `/dammam/` pages (§3.4 e).
5. **Arabic pass** after native sign-off: RUH routes, out-of-scope RUH pages, DMM pages, advisories.
6. Template items (§4).

**Validation for each step:**
- `tsc`, lint (baseline 10 pre-existing), build;
- before/after prerender snapshot (only the intended pages change);
- residual-claim scan of the changed pages;
- FAQ/HowTo schema parity;
- link check;
- `check:ar-index` / `check:ar-500` for any Arabic step.

## 6. Owner questions (only those that change the wording)

1. **Q4 — DMM, JED, MED airport pickups:** do you provide meet-and-greet with a name board, flight tracking with automatic adjustment, and free waiting time? If yes, how much free waiting? This decides §3.4(b) for about 60 pages.
2. **RUH:** keep case by case (confirmed on 22 Oct). Tell us when the operating and permission requirements are confirmed, so the RUH notice and pages can change.
3. **Border fees on the DMM → Doha and → Bahrain routes:** confirm that the quotation controls border charges and crossing waiting time. This removes the "price unaffected by a slow border" claim.
4. **Distances and durations:** should the unverified figures be removed from metadata now (recommended), or kept until verified?
