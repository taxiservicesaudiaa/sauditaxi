# Dammam implementation preparation (Phase 2)

**Date:** 22 October 2026. **Type:** preparation and review only.

**What was not done:**
- No database update.
- No Arabic edit.
- No commit, push, deployment or production-setting change.

Changes were built and validated in a disposable scratch worktree. The main working tree is unchanged apart from new report files.

**Inputs:** reports 30 and 30b, plus the confirmed service rules below.

**Companion file:** `32b-dmm-hub-route-hotels.patch` — the exact proposed diff: 6 data files, 123 insertions, 46 deletions. It applies on top of the Riyadh hub change (`28`) and the RUH route patch (`31b`):
- the `hubOverrides` mechanism comes from `28`;
- the route `overrides` field and `data/airport-status.ts` come from `31b`.

`git apply --check` passes on that base.

## 0. Service rules applied

| Rule (owner-confirmed) | How it is applied |
|---|---|
| Flight tracking is offered at Dammam, Jeddah and Madinah | **Kept** at DMM (and stated in the new metadata). The wording is "we track your flight… the pickup is planned around your actual landing time" |
| Free waiting is offered; don't invent its duration | "Free waiting time is included" — **no minutes stated anywhere**. The old vague "reasonable waiting time" became "free waiting time" |
| Name-board meet-and-greet is not offered | Every name-board, "sign with your name" and "meet & greet" claim on the 4 pages is removed. The meeting place is "the meeting point confirmed in your booking" (see decision D1) |
| Border charges and crossing-delay wording remain pending | **No border wording was changed.** The Bahrain FAQ and the cluster text stay as they are, and the hub's Bahrain card loses its "+ border" figure only because all card figures were replaced (§3) |
| Verify each distance and duration before keeping or removing it | See §2. Contradicted figures were corrected or removed; supported figures were kept with their source basis |
| Price wording (standing owner policy) | "Fixed price", "all-in", "no hidden charges" → "the confirmed quotation sets the price (and shows what it covers)" |

## 1. Scope, priority and sources

### 1.1 Pages, evidence and source files

| Priority | Page | Evidence | Source of the content | Database records behind it |
|---|---|---|---|---|
| 1 | `/airport-transfer/dammam-airport` | GSC 50 impressions (16 Jul–15 Oct); Bing 0c/1i; 1 CRM first landing (9–22 Oct) | `data/airports.ts` (`slug: "dammam-airport"`: intro, about, meta, `hubOverrides`); `data/airport-guides.ts` (`"dammam-airport"`: core and arriving paragraphs, clusters, 8 FAQs); template `app/(main)/airport-transfer/[airport]/page.tsx` | None. The page is file-backed. No Arabic hub exists |
| 1 | `/routes/dammam-airport-to-riyadh` | GSC 2; 1 CRM first landing; **5 DMM↔Riyadh enquiries** in the CRM | `data/routes.ts` (`slug: "dammam-airport-to-riyadh"`: meta, intro, distance and duration for the facts box and cards); `data/airport-route-content.ts` (`"dammam-airport-to-riyadh"`: body and FAQs); template `app/(main)/routes/[slug]/page.tsx` | None. AR counterpart: `/ar/نقل-من-مطار-الدمام-الى-الرياض` (`ar.ts`, not edited) |
| 2 | `/dammam/dammam-airport-to-hotels` | GSC 12; near-orphan (2–3 inbound links) | `data/point-transfer-v2/dammam.ts` (`slug: "dammam-airport-to-hotels"`); template `components/point-transfer-v2/PointTransferV2View.tsx` | None. AR: `/ar/نقل-من-مطار-الملك-فهد-الى-فنادق-الدمام` (not edited) |
| 3 | `/dammam/hotels-to-dammam-airport` | **Not in the GSC export; no CRM landings.** Included because it is the reverse of the page above and carries the same contradicted figures and fixed-price claims. **It can be dropped from the approval** (D6) | `data/point-transfer-v2/dammam.ts` (`slug: "hotels-to-dammam-airport"`) | None. AR: `/ar/نقل-من-فنادق-الدمام-الى-مطار-الملك-فهد` (not edited) |

**No new pages** are proposed.

### 1.2 Related database records (not behind these pages; read-only, unchanged)

| Record | id | `updated_at` | Note |
|---|---|---|---|
| `king-fahd-international-airport-complete-guide` | 7886dea1-… | 2026-07-20 | Bing 0 clicks / 239 impressions. Proposals in report 30 §3.4(f) |
| `best-hotels-near-dammam-airport` | 70fe84b5-… | 2026-08-21 | Report 30 §3.4(f) |
| `dammam-airport-attack-october-2026` (advisory) | f3f5b707-… | 2026-10-12 | **OUTDATED** (predates the 21 Oct incident). The new status notice therefore does not link it until it is updated (D8) |

## 2. Evidence

### 2.1 Airport status

| Source | Content | Status |
|---|---|---|
| [Arab News, 22 Oct 2026](https://www.arabnews.com/saudi-arabia/dammams-king-fahd-airport-resumes-normal-operations-3007672), quoting GACA | "operations at King Fahd International Airport in Dammam have resumed" and "air traffic have returned to normal". The attack was on the "Wednesday evening", i.e. 21 Oct | VERIFIED (official statement as reported) |
| GACA via SPA, 11–12 Oct | Earlier attack; damage assessment | VERIFIED (report 30) |
| [Wego, updated 20 Oct](https://blog.wego.com/is-dammam-airport-open-live-status-travel-updates-2026/); Gulf Business | Some carriers had suspended or paused Dammam flights (Etihad until 24 Oct; KLM until 31 Oct) | Supports "Some airlines have changed their Dammam schedules" (no airline is named on the page) |

### 2.2 Distances and durations

**Method:**
- OSRM road routing (OpenStreetMap), measured on 22 Oct from the DMM airport reference point (26.4712 N, 49.7979 E).
- [Saudipedia — King Fahd International Airport](https://saudipedia.com/en/article/1118/government-and-politics/transport/king-fahd-international-airport).
- [Air Miles Calculator DMM→RUH](https://www.airmilescalculator.com/distance/dmm-to-ruh/).

| Figure on the live site | Where | Evidence | Verdict | Action |
|---|---|---|---|---|
| "about 40 km from central Dammam" | Hub FAQ | Saudipedia 35.6 km; OSRM 35.5 km (Al Faisaliyah, west), 41.6 km (King Saud St), 43.2 km (Corniche) | Supported as a range | "roughly 35–45 km from central Dammam and the Corniche" |
| "a similar distance to Khobar" | Hub FAQ | Saudipedia 57.9 km; OSRM 57.1 km | **Contradicted** | "about 55–60 km from central Al Khobar" |
| "30–45 minute drive" | Hub FAQ | OSRM free-flow time is 33–43 min to Dammam; no source covers traffic | Unverified | Removed ("depends on traffic and the time of day") |
| Hub cards: Khobar "35 km · about 30 min", Dhahran "25 km · about 25 min", Jubail "70 km · about 50 min" | Hub popular cards (data from other routes) | Khobar 57–58 km; Dhahran: Saudipedia 46.8 km, OSRM 52.7 km (KFUPM); Jubail: Saudipedia 93.4 km (governorate), OSRM 81.3 km (centre) | **Contradicted** | Hub card body replaced (`popularCardBody`), so the figures no longer appear on the hub. **The route pages themselves keep these figures** (out of scope; D9) |
| Bahrain "~100 km · about 1 hr 30 min + border" | Hub card | OSRM 101.9 km to Manama; the duration depends on the border | Distance supported; border wording pending | Not shown on the hub (card body replaced); the route page is unchanged |
| DMM→Riyadh "420 km" | Route meta, body, FAQ, facts box, related cards | Air Miles Calculator 402.4 km DMM→RUH by road; OSRM 398.9 km (Olaya) and 396.7 km (KAFD) | **Contradicted** (about 5% high) | "about 400 km"; `distance: "400 km"` |
| DMM→Riyadh "4 hours" | Same places | Air Miles Calculator 3 h 52 min; OSRM 3 h 51 min free-flow | Supported as no-stop driving time | Kept as "roughly four hours of driving without stops", plus traffic and stops. The facts box "4 hours" is kept (it is labelled as a driving baseline) |
| Hotels "18–24 km · 20–27 min" | Both hotel pages (meta stats, FAQ) | Saudipedia 35.6 km; OSRM 35.5–43.2 km | **Contradicted** | "35–45 km"; drive-time figures removed. The "Drive time" stat is replaced by "Flight tracking: Included" (arrivals) or removed (departures) |
| "three hours before international, two before domestic" | Hotels→airport | General airline guidance, not a service claim | Not a distance or journey time | Kept (D7) |

## 3. Exact proposed text

The complete diff is in `32b`; the tables below cover every rendered change.

### 3.1 Status notice

This is new: `DMM_STATUS_NOTICE` in `data/airport-status.ts`. It is shown on the hub (via `hubOverrides.notice`), on the DMM→Riyadh route (via the route `notice`) and on both hotel pages (as a `timingPanel` block).

> **Dammam airport status — last checked 22 October 2026**
> On 22 October 2026, Saudi Arabia's General Authority of Civil Aviation (GACA) said operations at King Fahd International Airport had resumed and air traffic had returned to normal after a security incident at the airport the previous evening. Some airlines have changed their Dammam schedules, so confirm your flight with your airline before you travel.
> Our King Fahd International Airport transfers are operating. Share your flight number when you request a quote — we track your flight and confirm the pickup with your booking.

The departure page (hotels → airport) shows only the first paragraph.

### 3.2 Hub `/airport-transfer/dammam-airport`

| Field | Old (exact) | New |
|---|---|---|
| metaDescription | "Private transfer from King Fahd Airport (DMM) to Khobar, Jubail, Dhahran, Riyadh, or across the Bahrain Causeway. Fixed price, meet-and-greet pickup." | "Private transfers from King Fahd Airport (DMM) to Khobar, Jubail, Dhahran, Riyadh and Bahrain, with flight tracking. Your confirmed quotation sets the price." (157 chars) |
| about | "…We provide meet-and-greet pickups, transfers to Khobar…" | "…We provide private airport pickups with flight tracking, transfers to Khobar…" |
| Notice | — | §3.1 |
| Popular intro (template) | "Fixed-price private transfers directly from King Fahd International Airport to these destinations, booked before you land and ready the moment you arrive." | "Private transfers from King Fahd International Airport to these destinations, priced in a quotation you confirm before you travel." |
| Popular card body ×5 (template) | "{distance} · about {duration}. A private, direct transfer with a fixed price agreed before you travel — no meter, no surge pricing." | "A private, direct transfer with flight tracking. Your confirmed quotation sets the price and shows what it covers." |
| Core paragraph | "…from arrivals directly to your hotel… Your driver tracks your flight, meets you in the arrivals hall, and drives you to your destination at a fixed price agreed before you travel — the same reliable process…" | "…from the airport directly to your hotel… We track your flight, your driver meets you at the confirmed meeting point, and the confirmed quotation sets the price before you travel — the same process…" |
| Arriving ¶2 | "After immigration and baggage claim, your driver waits in the arrivals hall with a name board and helps carry your luggage to the vehicle — …" | "After immigration and baggage claim, head to the meeting point confirmed in your booking. Your driver helps carry your luggage to the vehicle, and free waiting time is included if your flight lands late — …" |
| Meet-and-greet heading (template) | "Airport Pickup and Driver Meet & Greet" | "Airport Pickup at King Fahd International Airport" |
| Step 1 "Before Your Flight" | (tracking text) | Unchanged (tracking is confirmed) |
| Step 2 "After Landing" | "…There's no separate desk or rental counter to find — just head straight for the arrivals hall with your bags." | "Clear immigration and collect your luggage as normal at King Fahd International Airport, then head to the meeting point confirmed in your booking." |
| Step 3 "Meeting Your Driver" | "Your driver waits in the arrivals hall at DMM with a name board, ready as soon as you clear customs, and helps carry your luggage…" | "Your driver meets you at the confirmed meeting point and helps carry your luggage to the vehicle. Free waiting time is included if your flight lands late." |
| Family paragraph (template) | "…drivers assist with luggage from the arrivals hall all the way to the vehicle…" | "…drivers help with luggage from the meeting point to the vehicle…" |
| Booking step 2 | "Receive Your Quote — A fixed, all-in price and a vehicle recommendation, agreed before you travel with no hidden charges added later." | "Receive Your Quotation — A price and a vehicle recommendation. The confirmed quotation sets the price and shows what it covers." |
| Booking step 3 | "…a driver is scheduled for your flight, **no prepayment required to hold the booking**." | "Approve your quotation and a driver is scheduled for your flight; the quotation sets out its payment and cancellation terms." (see D5) |
| Booking step 4 | "Your driver waits in the arrivals hall at King Fahd International Airport with a name board when you land…" | "We track your flight, and your driver meets you at the confirmed meeting point at King Fahd International Airport, ready to help with luggage." |
| Final CTA | "…we reply with a fixed price and meet you in arrivals at DMM." | "Add your flight number and destination — we track your flight and reply with a quotation; the confirmed quotation sets the price." |
| Cluster "Dammam Hotel and Business Transfers" | "Fixed-price pickup to hotels… priced before you travel…" → link `/cities/dammam` "Dammam hotel coverage" | "Pickup to hotels and corporate destinations across the Eastern Province, priced in a quotation you confirm before you travel, with a driver who knows the area." → link **`/dammam/dammam-airport-to-hotels`** "Dammam Airport to hotels" (fixes the near-orphan) |
| FAQ: distance | "The airport is about 40 km from central Dammam and a similar distance to Khobar, typically a 30–45 minute drive…" | "By road, the airport is roughly 35–45 km from central Dammam and the Corniche, and about 55–60 km from central Al Khobar, depending on your district. Drive time depends on traffic and the time of day; share your address when you request a quote." |
| FAQ: where to meet | "In the arrivals hall, holding a name board. Your driver helps with luggage…" | "At the meeting point confirmed in your booking. Your driver helps with luggage and walks you to the vehicle in the car park, ready to go." |
| FAQ: Jubail/Dhahran | "…fixed-price transfers… with meet & greet on arrival." | "…private transfers from the airport to Jubail, Dhahran, Aramco areas, and Khobar's corniche hotels, priced in your quotation." |
| FAQ: delay | "We track your flight in real time and adjust the pickup automatically, with free wait time, so a delay never costs you the ride or your fixed price." | "We track your flight and plan the pickup around your actual landing time. Free waiting time is included." |
| FAQ: hotel booking | "…we'll confirm a fixed price and a driver assigned to your specific flight." | "Yes. Share your hotel name, flight details, and arrival time — we reply with a quotation, and the confirmed quotation sets the price." |
| FAQ: Bahrain; FAQ: "book a little earlier… border timing and queues" | — | **Unchanged** (border wording pending) |
| `lastUpdated` | 2026-09-17 | 2026-10-22 |

### 3.3 Route `/routes/dammam-airport-to-riyadh`

| Field | Old (exact) | New |
|---|---|---|
| metaDescription | "Book a private transfer from Dammam Airport to Riyadh (420 km, about 4 hours). Professional driver, flight tracking, fixed price, 24/7 availability." | "Private transfer from King Fahd Airport (DMM) to Riyadh, about 400 km by road. Flight tracking included; your confirmed quotation sets the price." (145) |
| Service-schema intro | "Private meet-and-greet airport transfer from King Fahd International Airport (DMM) in Dammam directly to any location in Riyadh." | "Private airport transfer from King Fahd International Airport (DMM) in Dammam directly to any location in Riyadh, with flight tracking." |
| `distance` (facts box, cards) | "420 km" | "400 km" (`duration` "4 hours" kept) |
| Notice | — | §3.1 |
| Arrival step 1 | "Flight tracking begins — …the pickup time adjusts automatically to your actual landing time." | "Flight tracking begins — We track your flight from the moment you book, so the pickup is planned around your actual landing time." |
| Arrival step 2 (from `arrivalPickup[0]`) | "Your driver meets you in arrivals — …a large, single-terminal facility, so there's no terminal-matching complexity — your flight is tracked and the driver waits in the arrivals hall." | "Your driver meets you — King Fahd International Airport has a single main passenger terminal. Share your flight number — we track your flight, and your driver meets you at the meeting point confirmed in your booking. Free waiting time is included if your flight lands late." |
| Arrival step 3 | "…at the fixed price agreed when you booked." | "…at the price in your confirmed quotation." |
| Booking steps 2–3 | "Receive a fixed price — Confirmed before you travel — no meter, no surge pricing." / "Your driver waits in the arrivals area, tracking your flight for any delay." | "Receive your quotation — The confirmed quotation sets the price and shows what it covers." / "Meet your driver on arrival — We track your flight, and your driver meets you at the confirmed meeting point. Free waiting time is included." |
| CTA text / form subheading | "…we reply with a fixed price before you travel." / "Fixed price for your airport transfer." | "Share your flight number and destination — we reply with a quotation, and the confirmed quotation sets the price." / "Your confirmed quotation sets the price." CTA pre-fill unchanged (DMM → Riyadh) |
| Road journey | "At 420 km and 4 hours, this is a substantial but manageable drive… generally comfortable in one stretch for most travellers." | "At about 400 km by road, this is a substantial but manageable drive west across the peninsula toward Riyadh — roughly four hours of driving without stops, before traffic in Riyadh and any rest stops you agree." |
| Comparison (road) | "Door-to-door with no second flight, at a fixed price for the four-hour drive." | "Door-to-door with no second flight, priced in a quotation you confirm before you travel." |
| FAQ: duration | "Around 4 hours for 420 km." | "The road distance is about 400 km, roughly four hours of driving without stops. Traffic in Riyadh, your exact address and any rest stops add to the total." |
| FAQ: **new** | — | Q: "My Riyadh flight was moved to Dammam — can you drive me to Riyadh?" A: "Yes. Share your flight number and your Riyadh address; we track your flight, and the pickup and price are confirmed in your quotation." |
| Unrendered `routes.ts` fields (`about`, `notes`, `sections`, `faqs`) | "420 km… 4 hours", "Meet-and-greet service inside… arrivals", "holding a sign with your name" | Same corrections, for data consistency. "Live flight tracking with complimentary wait time included" is kept: it matches the rules |
| `lastUpdated` | 2026-08-16 | 2026-10-22 (the Service schema `dateModified`) |

### 3.4 `/dammam/dammam-airport-to-hotels`

| Field | Old | New |
|---|---|---|
| metaDescription | "Book a fixed-price transfer from King Fahd Airport (DMM) to any Dammam hotel — meet and greet, flight tracking, and door-to-door service. Available 24/7." | "Private transfer from King Fahd Airport (DMM) to any Dammam hotel, with flight tracking and free waiting time. Your confirmed quotation sets the price. 24/7." (157) |
| dek (and Service-schema description) | "…the same fixed-price meet-and-greet service applies." | "…the same private airport pickup applies — with flight tracking and a price set in your confirmed quotation." |
| Stats | Distance "18-24 km"; Drive time "20-27 min" | Distance "35-45 km"; Flight tracking "Included" |
| Blocks | — | Status notice (§3.1) as the first block |
| Pickup heading / paragraph | "Meet and greet, wherever you're staying" / "Your driver tracks your flight and waits inside arrivals with a printed name board… Reasonable waiting time is included for delayed landings and slow immigration queues." | "Airport pickup, wherever you're staying" / "We track your flight, and your driver meets you at the meeting point confirmed in your booking, so once you clear the terminal you're heading straight for your hotel. Free waiting time is included for delayed landings and slow immigration queues." |
| Related links | Hotels → airport | + "Dammam Airport transfers" → `/airport-transfer/dammam-airport` |
| FAQ 1 | "Yes — fixed-price transfers to every major hotel…" | "Yes — private transfers to every major hotel, from five-star Corniche properties to business and budget hotels in the centre, priced in your quotation." |
| FAQ 2 | Q "How long is the drive to my hotel?" A "Most hotels are 18-24 km from the airport, about 20-27 minutes…" | Q "How far is my hotel from the airport?" A "Hotels in central Dammam and on the Corniche are roughly 35-45 km from the airport by road; drive time depends on your district and traffic." |
| FAQ 3 | "Inside the arrivals hall with a printed name board." | "At the meeting point confirmed in your booking. We track your flight, and free waiting time is included." |
| FAQ 4 | Q "Is the price fixed no matter which hotel?" A "Yes, fixed once you share your hotel…" | Q "How is the price set?" A "Share your hotel and flight details and we reply with a quotation; the confirmed quotation sets the price, since different hotels sit at different distances." |
| Top-level `distance` / `duration` (not rendered on V2 pages) | "18-24 km" / "20-27 min" | "35-45 km" / removed |

### 3.5 `/dammam/hotels-to-dammam-airport` (priority 3; optional)

| Field | Old | New |
|---|---|---|
| metaDescription | "Book a fixed-price transfer from any Dammam hotel to King Fahd Airport (DMM) — punctual pickup, luggage help, and a fare agreed in advance. 24/7 service." | "Private transfer from any Dammam hotel to King Fahd Airport (DMM), with lobby pickup and luggage help. Your confirmed quotation sets the price. 24/7." (149) |
| Stats | "18-24 km" / "20-27 min" | "35-45 km" only |
| Blocks | — | Status notice, first paragraph only |
| Related links | Airport → hotels | + `/airport-transfer/dammam-airport` |
| FAQ 4 | Q "Is the fare fixed no matter which hotel?" A "Yes, fixed once you share your hotel…" | Q "How is the fare set?" A "Share your hotel and flight time and we reply with a quotation; the confirmed quotation sets the price for your specific starting point." |
| Top-level `distance` / `duration` | as above | "35-45 km" / removed |

## 4. Validation (scratch worktree, clean build on top of 28 + 31b)

| Check | Result |
|---|---|
| `tsc --noEmit` | Pass |
| ESLint | 10 problems (6 errors, 4 warnings) = the existing baseline |
| `next build` | Pass, 905/905 pages |
| Prerender comparison vs the 28 + 31b state | **17 pages changed** (next two rows) |
| — Intended (4) | `/airport-transfer/dammam-airport`, `/routes/dammam-airport-to-riyadh`, `/dammam/dammam-airport-to-hotels`, `/dammam/hotels-to-dammam-airport` (`<main>`, JSON-LD, description/OG/Twitter) |
| — Knock-on (13), `<main>` only | The "Dammam Airport to Riyadh" related-route card now reads "400 km · 4 hours" on: 8 other DMM airport routes (`dammam-airport-to-` abqaiq, dhahran, hofuf, jubail, khobar, qatif, ras-tanura, saihat) and 3 routes into Riyadh (`abha-`, `jeddah-`, `madinah-airport-to-riyadh`). The new intro appears in the route grid on `/cities/dammam` and `/cities/riyadh`. Nothing else changed on those pages |
| Total vs the original baseline | 23 pages (7 from 31b + 17 from 32b, with `/cities/riyadh` shared) |
| Claim re-scan of the 4 pages | No name board, "meet & greet", "fixed price" or "all-in" in page data. No free-waiting duration. Tracking appears only as DMM tracking. Remaining items are shared-template strings (§6, T1–T3) |
| FAQ schema parity | Every schema question is visible (8 / 4 / 4 / 4) |
| Internal links | The hub now links `/dammam/dammam-airport-to-hotels`. Both hotel pages link the hub |
| Arabic pages | Unchanged (no `ar.ts` or AR-template change) |

## 5. Expected page impact (qualitative — no traffic, ranking or lead figures are claimed)

| Page | Expected effect |
|---|---|
| Hub | Removes claims that conflict with the confirmed service (name board) and figures that sources contradict (Khobar, Dhahran, Jubail). Adds a dated, sourced status answer to the question "is Dammam airport open". Gives the hotel page its first hub link. Title unchanged |
| DMM→Riyadh | Corrects the distance (420 → 400 km) across the page and its cards. Adds an FAQ for travellers whose Riyadh flights were moved to Dammam (CRM: 5 DMM↔Riyadh enquiries). Title unchanged |
| Hotels pages | Corrects contradicted distances and removes name-board and fixed-price claims. Adds the status notice and the hub link |
| Risk | Low: data-only changes through existing override mechanisms; no URL, title, canonical or hreflang change. The 13 knock-on pages change only the corrected DMM→Riyadh card |

## 6. Unresolved decisions and flags

| # | Decision | Proposed default |
|---|---|---|
| D1 | **Where drivers meet passengers at DMM** (arrivals hall without a sign? a car-park point?) | "The meeting point confirmed in your booking" (as drafted). If the owner confirms "arrivals hall", we can say so |
| D2 | **Free-waiting allowance** | No duration stated (rule). Add one only if the owner provides it |
| D3 | "Fixed price" phrasing | Replaced with confirmed-quotation wording, in line with the owner's price policy. Alternatively, keep "fixed once your quotation is confirmed" |
| D4 | Status-note wording ("a security incident" rather than "attack"), and refreshing the date on release day | As drafted. Re-check GACA and airline notices on release day |
| D5 | **Every airport hub's default booking step says "no prepayment required to hold the booking"**, but the quotation default terms include a 50% deposit | DMM is overridden in this patch. The template default for all other hubs needs a separate owner decision |
| D6 | Include `/dammam/hotels-to-dammam-airport` (no recorded demand)? | Include (same corrections); can be dropped |
| D7 | Hotels→airport "3 hours international, 2 domestic" | Keep (general guidance) |
| D8 | The DMM advisory (database, 12 Oct) is outdated, so the notice doesn't link it | Update the advisory (separate database approval), then add the link |
| D9 | **Contradicted figures on other DMM route pages**: Khobar 35 km/30 min, Dhahran 25 km/25 min, Jubail 70 km/50 min (plus any not yet checked); the city-to-city Dammam–Riyadh and Doha routes show "~420 km" | Separate figures task, page by page with sources (out of scope here) |
| D10 | Border wording (the Bahrain FAQ "border timing and queues", Bahrain/Doha cards and routes) | Unchanged, pending verification |
| T1 | Shared `QuoteForm`: "We'll reply with a fixed price for your journey" | Template change, approved separately |
| T2 | Point-page template (`PointTransferV2View`): "Fixed price for your private transfer on WhatsApp", "a clear, all-in price", "Your professional driver arrives on time" | Template change, approved separately (affects every point page) |
| T3 | The point-page "related guides" show generic posts (AlUla, Nusuk, solo pilgrim) instead of the KFIA and best-hotels guides | Template or data change, approved separately |
| T4 | The default route-template step "adjusts automatically" still applies to DMM routes without overrides | OK at DMM/JED/MED (tracking confirmed) |
| AR | Arabic counterparts of the route and both hotel pages repeat the old claims; there is no Arabic DMM hub | Arabic pass after native sign-off (report 30 §3.4 g) |

## 7. Release sequence (each step needs its own approval)

1. Riyadh: hub (`28`) + RUH routes (`31b`) + advisory database PATCH (`29b`).
2. Dammam: `32b`, after decisions D1, D4 and D6.
3. Database: update the DMM advisory, then link it from the notice (D8).
4. Separate tasks: figures (D9), templates (T1–T3, D5), the Arabic pass.
