# Release-readiness audit — working tree after Stages 1–3

**Audit date:** 23 October 2026. **Type:** audit only.

**What was not done:**
- No file edits (apart from this report).
- No database writes.
- No Arabic changes.
- No commit, push or deployment.

**Overall verdict: BLOCKED — 3 content blockers.**

All three are small, in-scope data fixes on the Riyadh route pages (B1–B3). Everything else either passes or needs an owner decision that can be taken separately.

## 1. Time-sensitive airport status (checked 23 October 2026)

### 1.1 Official and other sources

| Airport | Latest official communication | Other information (not treated as confirmation) | Verdict |
|---|---|---|---|
| **RUH** | GACA via SPA, 10 Oct ([N2697867](https://www.spa.gov.sa/en/N2697867)): attack, operations temporarily suspended. GACA, 12 Oct ([Saudi Gazette](https://saudigazette.com.sa/article/665336), [Maaal](https://maaal.com/en/news/details/gaca-suspension-of-opera/)): suspension extended for safety checks. **No later GACA statement found** (searched 23 Oct) | [Inside Aviation](https://insideaviation.news/saudi-arabia-riyadh-airport-reopens-but-not-to-scheduled-traffic/) / [Aerocorner](https://aerocorner.com/news/riyadh-airport-reopen-notam-october-17-air-india-indigo-akasa/): NOTAM A3650/26, prior GACA permission required. [Gulf Business](https://gulfbusiness.com/en/2026/saudi-arabia/riyadh-airport-reopens-airlines-delay-saudi-services-with-some-routes-pushed-into-2027/) / [Gulf News](https://gulfnews.com/business/aviation/uae-flight-status-today-cancellations-delays-and-updates-after-saudi-airport-attack-1.500719321): limited domestic flights. [Time Out Riyadh](https://www.timeoutriyadh.com/news/riyadh-airport-latest-update), 21 Oct: still closed | **PASS.** The current wording ("We have not found an official GACA announcement that scheduled flights have resumed, and reports since then have differed") is still accurate |
| **DMM** | GACA, 22 Oct, reported by [Arab News](https://www.arabnews.com/saudi-arabia/dammams-king-fahd-airport-resumes-normal-operations-3007672) and [Argaam](https://www.argaam.com/en/article/articledetail/id/1946197): operations resumed, air traffic returned to normal. GACA via SPA, 11 Oct ([N2698805](https://www.spa.gov.sa/en/N2698805)): earlier attack | [Saudi Gazette](https://saudigazette.com.sa/article/665643/saudi-arabia/dammam-airport-attack-death-toll-rises-to-two-eight-injured): death toll revised to two; GACA still assessing damage. **No GACA statement dated 23 Oct found** | **PASS.** The notice wording matches the 22 Oct statement |
| Airlines | No primary Saudia or flynas notice found | [Wego](https://blog.wego.com/is-dammam-airport-open-live-status-travel-updates-2026/) (updated 20 Oct): Etihad cancels Abu Dhabi–Riyadh and Abu Dhabi–Dammam until 24 Oct; KLM pauses Riyadh and Dammam until 31 Oct. Others report 7 Nov | Supports "Some airlines have changed their Dammam schedules" and "confirm your flight with your airline" |
| Government travel advice | [UK FCDO](https://www.gov.uk/foreign-travel-advice/saudi-arabia), updated 21 Oct and current on 23 Oct: Riyadh, Jeddah and Dammam listed as heightened-threat locations; "Further attacks against airports as well as disruption and cancellations are very likely"; check your booking and flight status before travelling to the airport | — | No conflict with our copy. Context only; not quoted on the pages (no fear-based messaging) |

### 1.2 "last checked 22 October 2026" — every occurrence

| Source | Rendered on |
|---|---|
| `data/airport-status.ts` → `RUH_STATUS_NOTICE.heading` | `/routes/riyadh-airport-to-riyadh`, `/routes/riyadh-to-riyadh-airport`, `/routes/riyadh-airport-to-jeddah`, `/routes/riyadh-airport-to-makkah`, `/routes/riyadh-airport-to-madinah` |
| `data/airports.ts` L115 → the Riyadh `hubOverrides.notice` (**a duplicate copy** of the same RUH notice) | `/airport-transfer/riyadh-airport` |
| `data/airport-guides.ts` L87 → RUH FAQ "…(last checked 22 October 2026)…" | `/airport-transfer/riyadh-airport` |
| `data/airport-status.ts` → `DMM_STATUS_NOTICE.heading` | `/airport-transfer/dammam-airport`, `/routes/dammam-airport-to-riyadh`, `/dammam/dammam-airport-to-hotels`, `/dammam/hotels-to-dammam-airport` |
| **Database** advisory (`blogs` 099e1ac3…): "Last updated: 22 October 2026", "as of 22 October 2026", "available on 22 October 2026" | `/blog/riyadh-airport-closure-october-2026` |

**Rendered pages carrying the date:** 11.

### 1.3 Recommended status update on release day (not applied)

1. Re-run the checks in §1.1 that day.
2. **If nothing has changed:**
   - Replace "22 October 2026" with the release date in the four file locations above.
   - Update the advisory database text in a separate guarded PATCH. It needs its own authorisation.
3. **RUH wording:** keep it unchanged unless GACA publishes a new statement. If GACA announces resumption, stop and redraft; the case-by-case pickup wording stays until the owner confirms the operating and permission requirements.
4. **DMM wording:** keep it unchanged unless GACA reports a new disruption.
5. **Recommended engineering fix:** make the Riyadh hub import `RUH_STATUS_NOTICE` instead of keeping its own copy, so there is one date to update.

## 2. Claim audit — full rendered content of the 11 edited pages

**Pages:**
- the RUH hub;
- the 5 RUH routes;
- the advisory;
- the DMM hub;
- DMM → Riyadh;
- the 2 hotel pages.

The 13 knock-on pages differ only in a route card (§5).

### 2.1 Findings

| # | Claim (exact) | Page(s) | Source | Class | Verdict / action |
|---|---|---|---|---|---|
| C1 | "One vehicle for the full nine-hour journey…" / "…for the whole 8.5-hour journey." / "…for the whole eight-hour drive…" | RUH→Jeddah, →Makkah, →Madinah (`whoSuits`) | `data/airport-route-content.ts` L744, L780, L813 | **CONTRADICTORY.** The same pages' facts box now says "Pure driving time: Confirmed in your quotation", and these durations were found unsupported in Stage 1 | **BLOCKED → B1** |
| C2 | FAQ "The road distance is roughly 870–880 km" vs prose "roughly 870–905 km"; FAQ "about 950 km" vs prose "about 950–990 km" | RUH→Makkah, RUH→Jeddah | `airport-route-content.ts` L789, L757 | **CONTRADICTORY** (inconsistent on the same page) | **BLOCKED → B2** |
| C3 | "Your driver drops you at the terminal matching your airline, with time to unload luggage…"; "…a driver who already knows the destination terminal area"; FAQ "Yes, this route is available 24/7, including very early departures." | Riyadh→RUH | `data/city-airport-route-content.ts` L69, L95 (and the `whoSuits` entry) | **CONTRADICTORY** with the page's own notice ("not confirming… drop-offs… in advance; case by case") | **BLOCKED → B3** |
| C4 | "Saudi Arabia's major airports run 24 hours, and private transfers work the same way around the clock." | Advisory page (and every blog) | Shared blog template (`components/blog/BlogInlineCta.tsx` / `BlogSidebar.tsx` / `CTASection.tsx`) | **CONTRADICTORY** on the RUH advisory | NEEDS OWNER CONFIRMATION. Shared-template fix kept separate (T5); recommend before release |
| C5 | "We'll reply with a fixed price for your journey — no payment needed to get a quote." | All route pages and both hotel pages | Shared `QuoteForm` | "Fixed price" conflicts with the confirmed-quotation policy. "No payment needed to get a quote" is consistent with the quotation flow | NEEDS OWNER CONFIRMATION (T1) |
| C6 | "Fixed price for your private transfer on WhatsApp"; "a clear, all-in price"; "Your professional driver arrives on time" | Both hotel pages | Shared `PointTransferV2View` | UNVERIFIED (all-in) / promise (on time) | NEEDS OWNER CONFIRMATION (T2) |
| C7 | "Fixed prices, professional drivers, fast reply"; "a fixed quote"; "a fast, fixed quote" | Advisory (every blog) | Shared blog CTAs | Conflicts with the quotation policy | NEEDS OWNER CONFIRMATION (T5) |
| C8 | Related-route cards: "950 km · 9 hours", "880 km · 8 hours 30 min", "850 km · 8 hours", "~420 km · 4 hours", "1,050 km · 10 hours", "35 km · 30 min" | RUH routes, DMM→Riyadh | `routes.ts` data of *other* routes | UNVERIFIED. The RUH→Jeddah and RUH→Makkah cards contradict those pages' own facts boxes | NEEDS OWNER CONFIRMATION — site-wide figures task (it changes 41+ pages) |
| C9 | "an SUV gives more room without changing the price basis" | RUH→Riyadh | `airport-route-content.ts` (`vehicleLuggage`) | **UNVERIFIED** pricing claim | NEEDS OWNER CONFIRMATION. Proposed: "…an SUV gives more room — tell us your passenger and luggage count and the vehicle is set in your quotation." |
| C10 | Meeting point "confirmed in your booking"; "walks you to the vehicle in the car park" | DMM hub, DMM→Riyadh, hotel pages | Stage 3 copy | OWNER-CONFIRMED (no name board). The meeting location and car-park walk are UNVERIFIED (D1) | PASS for release; owner to confirm the location (D1) |
| C11 | Flight tracking at DMM; "Free waiting time is included" (no allowance stated) | DMM pages | Stage 3 copy | VERIFIED (owner rules, Oct 2026) | PASS |
| C12 | No name board, "meet & greet", "fixed price" (in page data) or tracking promise at RUH | All 11 | — | — | PASS |
| C13 | "Child seats can be requested"; "If you need child seats, ask before you confirm"; vehicle capacities (sedan 1–3 / 2 bags; SUV 1–5 / 4 bags; van 1–9 / 8 bags; minibus 10–18); "Luggage assistance is included" | Hubs, hotel pages | `data/vehicles` and copy (pre-existing) | UNVERIFIED (no owner record) | NEEDS OWNER CONFIRMATION (fleet facts); not a release blocker |
| C14 | "24/7" (hotel metas, "24/7 for early and late arrivals") | Hotel pages | Copy | The owner confirmed genuine 24-hour support. Round-the-clock service availability is implied | NEEDS OWNER CONFIRMATION (low) |
| C15 | "International and domestic flights share a single main terminal at DMM" | DMM hub, DMM→Riyadh | Copy | VERIFIED (single passenger terminal; [Wikipedia — KFIA](https://en.wikipedia.org/wiki/King_Fahd_International_Airport)) | PASS |
| C16 | "the quotation sets out its payment and cancellation terms" (DMM); "its terms explain what is needed to confirm" (RUH) | Hubs | Overrides | VERIFIED (quotations carry the terms; default 50% deposit) | PASS |
| C17 | "About three hours before international departures, two for domestic" | Hotels → airport | Copy | General airline guidance | PASS (D7) |
| C18 | Advisory content (GACA 10/12 Oct, the 9 Oct reopening, cancellations, rail note) | Advisory | Database (reviewed `29`) | VERIFIED as of 22 Oct; date refresh needed (§1.3) | PASS |
| C19 | AR alternate `/ar/إغلاق-مطار-الرياض-أكتوبر-2026` (hreflang target of the advisory) | — | `ar.ts` | **OUTDATED** (14 Oct content) | NEEDS OWNER CONFIRMATION — Arabic pass (reviewer). Not changed |

## 3. Distance reconciliation

### 3.1 Method

| Basis | Detail |
|---|---|
| Road distance | Measured from the airport reference point to a fixed destination point with OSRM (OpenStreetMap), 22–23 Oct |
| Comparators | Published city-to-city figures: Rome2rio, Saudipedia, Air Miles Calculator |
| Units | km |
| Durations | OSRM free-flow time is used only as a lower bound, never as a promised time |

### 3.2 Route by route

| Route | Evidence (start → end) | Facts box | Prose | FAQ | Meta | Structured data | Status / recommendation |
|---|---|---|---|---|---|---|---|
| RUH → Riyadh | OSRM RUH→Olaya 36.9 km, →KAFD 34.7 km, →Diplomatic Quarter 45.8 km; 27–35 min free-flow | 35 km · 30–45 min | — | "Around 35 km" | none | none | **PASS** (consistent; within evidence) |
| Riyadh → RUH | Same | 35 km · 30–45 min | "around 35 km" / "The 35 km distance" | — | none | none | **PASS** |
| RUH → Jeddah | OSRM RUH→Jeddah centre 986.3 km; [Rome2rio](https://www.rome2rio.com/s/Riyadh/Jeddah-Station) Riyadh→Jeddah 945.5 km (city to city) | 950 km; driving time "Confirmed in your quotation" | 950–990 km | **950 km** | none | none | **BLOCKED (B2):** set the FAQ to "about 950–990 km". Facts box 950 km (= `route.distance`, shared with cards) is the low end of the range; keep it and change it only in the site-wide figures task |
| RUH → Makkah | OSRM RUH→Haram 903.2 km; [Rome2rio](https://www.rome2rio.com/s/Riyadh/Makkah) Riyadh→Makkah 869–875 km | **880 km** | 870–905 km | **870–880 km** | none | none | **BLOCKED (B2):** set the FAQ to "roughly 870–905 km". The facts box 880 km is inside the range; keep it and review it in the figures task |
| RUH → Madinah | OSRM RUH→Haram 833.3 km; earlier sources 839–900 km | 850 km | ~850 | ~850 | none | none | **PASS** (in range) |
| DMM → Riyadh | OSRM 396.7–398.9 km; [Air Miles Calculator](https://www.airmilescalculator.com/distance/dmm-to-ruh/) 402.4 km / 3 h 52 (search index; the page blocks direct fetches) | 400 km · 4 hours | ~400 km, ~4 h without stops | ~400 km | ~400 km | none | **PASS** |
| DMM → Dammam / Corniche / hotels | [Saudipedia](https://saudipedia.com/en/article/1118/government-and-politics/transport/king-fahd-international-airport) 35.6 km; OSRM 35.5–43.2 km | hotels 35–45 km | hub 35–45 km | 35–45 km | — | none | **PASS** |
| DMM → Al Khobar | Saudipedia 57.9 km; OSRM 57.1 km | — | — | hub 55–60 km | — | none | **PASS** |
| Cards on the edited pages showing other routes' data | — | — | — | — | — | — | Out of scope (C8) |

## 4. Database advisory side effects

| Check | Result |
|---|---|
| Saved record | Byte-identical to the record read just after the write on 22 Oct (`updated_at` 2026-10-22T17:07:49.357689Z). Status published; `published_at` 2026-10-11 (unchanged) |
| Title / meta | `<title>` and `og:title`: "Riyadh Airport Status October 2026: Latest Updates". The description matches the payload |
| Canonical / indexing | `…/blog/riyadh-airport-closure-october-2026` (slug unchanged); robots `index, follow`; `og:url` matches |
| hreflang | `en` = canonical; `ar` = `/ar/إغلاق-مطار-الرياض-أكتوبر-2026` (HTTP 200 live, content OUTDATED — C19) |
| Structured data | BlogPosting headline equals the title; `dateModified` 2026-10-22T17:07:49Z; one FAQPage with 6 questions identical to the database FAQs |
| Visible FAQs | All 6 questions and answers are visible on the page |
| 129-page side effect | **Proven limited to the advisory.** For all 128 other pages, swapping the new title and excerpt (raw, HTML-escaped and, on `/sitemap`, lower-cased) back to the old values reproduces the pre-update `<main>` hash exactly (128/128). The list order is unchanged (sorted by `published_at`) |
| Live site | Still serves the old advisory until a deployment (pages are prerendered) |

## 5. Complete-release validation (23 Oct)

### 5.1 Build and comparison

| Check | Result |
|---|---|
| `tsc --noEmit` | PASS |
| ESLint | 10 problems (6 errors, 4 warnings) = the existing baseline (nothing new) |
| Production build | PASS, 905/905 |
| Rebuild vs the end-of-Stage-3 build | 0 changed pages (deterministic) |
| vs the original baseline (`HEAD` + Riyadh hub change, pre-Stage-1) | **152 pages** = Stage 1 (7) + database advisory (129) + Stage 3 (17), with `/cities/riyadh` counted once. Every page outside these sets is unchanged |
| Working tree vs `HEAD` | 11 modified + 2 new files. Byte-identical to `33b-working-tree-after-stages-1-3.diff` (no changes since Stage 3) |

### 5.2 Files

**Modified:**
- `app/(main)/airport-transfer/[airport]/page.tsx` (`28`)
- `components/airport-transfer/AirportTransferHub.tsx` (`28`)
- `app/(main)/routes/[slug]/page.tsx` (`31b` + approved `pureDrivingValue`)
- `components/routes/AirportRouteView.tsx` (`31b`)
- `components/routes/CityAirportRouteView.tsx` (`31b`)
- `data/airport-route-content.ts` (`31b` + approved additions + `32b`)
- `data/city-airport-route-content.ts` (`31b`)
- `data/routes.ts` (`31b` + `32b`)
- `data/airports.ts` (`28` + `32b`)
- `data/airport-guides.ts` (`28` + `32b`)
- `data/point-transfer-v2/dammam.ts` (`32b`)

**New:**
- `components/routes/RouteStatusNotice.tsx`
- `data/airport-status.ts`

### 5.3 Scope

| Item | Detail |
|---|---|
| Beyond the original patches | Only the owner-approved Stage 1 additions (22 Oct): the `pureDrivingValue` override and the two distance ranges. Nothing else exceeds scope |
| Database operations already performed | 1 guarded PATCH to `blogs` 099e1ac3… (22 Oct 17:07 UTC). Earlier, approved: the intercity guide insert and its `schema_json` PATCH (19 Oct) |

### 5.4 Affected URLs

| Group | Count | URLs |
|---|---|---|
| Directly edited | 11 | `/airport-transfer/riyadh-airport`, the 5 `/routes/riyadh-…` routes, `/blog/riyadh-airport-closure-october-2026`, `/airport-transfer/dammam-airport`, `/routes/dammam-airport-to-riyadh`, `/dammam/dammam-airport-to-hotels`, `/dammam/hotels-to-dammam-airport` |
| Knock-on (cards or intros) | 14 | `/cities/jeddah`, `/cities/riyadh`, `/cities/dammam`, 8 `/routes/dammam-airport-to-*` routes, `/routes/{abha,jeddah,madinah}-airport-to-riyadh` |
| Knock-on (advisory title in lists) | 128 | 125 blog posts, `/blog`, `/cities/makkah`, `/sitemap` |

The Riyadh hub change was already in the baseline. Total versus the deployed site: 152 pages, plus the Riyadh hub.

## 6. Ranked blockers and recommended corrections (not applied)

| Rank | Issue | Verdict | Exact correction |
|---|---|---|---|
| **B1** | Leftover durations contradict "Confirmed in your quotation" | BLOCKED | `airport-route-content.ts` L744: "One vehicle for the full nine-hour journey rather than a domestic connecting flight." → "One vehicle for the whole long-distance journey rather than a domestic connecting flight." L780: "One vehicle for the whole 8.5-hour journey." → "One vehicle for the whole journey." L813: "One vehicle for the whole eight-hour drive rather than a domestic flight connection." → "One vehicle for the whole drive rather than a domestic flight connection." |
| **B2** | FAQ distances inconsistent with the prose | BLOCKED | L757 (Jeddah FAQ): "The road distance is about 950 km." → "The road distance is about 950–990 km." L789 (Makkah FAQ): "roughly 870–880 km" → "roughly 870–905 km" |
| **B3** | Riyadh→RUH content promises terminal drop-offs and 24/7 availability despite case-by-case status | BLOCKED | `city-airport-route-content.ts` L69: "Your driver drops you at the terminal matching your airline, with time to unload luggage before you head to check-in. Confirm your terminal if you already know it, so the driver can go directly there rather than a general drop-off point." → "Whether a drop-off at King Khalid International Airport can be arranged, and where, is confirmed case by case in your quotation; share your airline and terminal if you know them." L95 FAQ answer: "Yes, this route is available 24/7, including very early departures." → "Early departures can be requested; any drop-off at King Khalid International Airport is confirmed case by case in your quotation while its operations are disrupted." L75 (`whoSuits`): "…a driver who already knows the destination terminal area." → "…a driver who already knows the route." |
| 4 | Date refresh: 4 file locations + database advisory | NEEDS OWNER CONFIRMATION (release-day action) | §1.3 |
| 5 | C4: the "major airports run 24 hours" template line on the RUH advisory | NEEDS OWNER CONFIRMATION | Separate template task (T5). Recommended before or with release |
| 6 | C9: SUV "without changing the price basis" | NEEDS OWNER CONFIRMATION | Wording in §2 |
| 7 | C8: unverified card figures; RUH→Jeddah and →Makkah cards contradict those pages | NEEDS OWNER CONFIRMATION | Site-wide figures task |
| 8 | C5–C7: shared fixed-price / all-in / on-time template strings | NEEDS OWNER CONFIRMATION | Template tasks T1, T2, T5 |
| 9 | C10, C13, C14: DMM meeting location, fleet and child seats, 24/7 service | NEEDS OWNER CONFIRMATION | Owner answers; no release block |
| 10 | C19: Arabic advisory and hub outdated | NEEDS OWNER CONFIRMATION | Arabic pass after native sign-off |
| 11 | Duplicate RUH notice copy in `airports.ts` | Recommended | Import `RUH_STATUS_NOTICE` (engineering) |

**Effect of fixing B1–B3:** all three edits are inside the 5 already-changed RUH route pages. B1/B2 touch `airport-route-content.ts`; B3 touches `city-airport-route-content.ts`. The expected rendered change is those pages only. Each needs approval, followed by tsc, lint, build and a comparison.

## 7. Final deployment checklist

1. ☐ Approve and apply B1–B3. Then run tsc, lint and build. The comparison must change only `/routes/riyadh-airport-to-{jeddah,makkah,madinah}` and `/routes/riyadh-to-riyadh-airport`.
2. ☐ Decide C4 (template line on the advisory): fix in a separate template task before release, or accept for now.
3. ☐ **Release day status:**
   - Re-check GACA (SPA, GACA channels) for RUH and DMM, plus airline notices and FCDO.
   - If nothing changed, update "22 October 2026" to the release date in `data/airport-status.ts` (×2), `data/airports.ts` L115 and `data/airport-guides.ts` L87.
   - Authorise a guarded database PATCH for the advisory's date lines.
   - If anything changed, stop and redraft.
4. ☐ Final tsc, lint, build and a comparison against this audit's snapshot. The only expected differences are B1–B3 and the date strings.
5. ☐ **Commit** (separate authorisation). Commit only the 13 files listed in §5.2; reports are optional. Line endings normalise automatically (`autocrlf`).
6. ☐ **Push to `main`** = Cloudflare auto-deploy (separate explicit authorisation).
7. ☐ **Post-deploy live checks** on the 11 directly edited URLs:
   - HTTP 200;
   - title and description;
   - status notice and date;
   - FAQ schema equals the visible FAQs;
   - canonical and hreflang;
   - no name board or RUH tracking claims;
   - the hub ↔ hotel links work.
   Spot-check 3 knock-on pages (one card page, one blog list, `/sitemap`).
8. ☐ Optional, separately authorised:
   - submit the changed URLs to Bing;
   - record batch 15 (the 37 URLs from 22 Oct) in `docs/bing-submitted-urls.json`.
9. ☐ Open follow-up tasks:
   - figures (C8);
   - templates (T1, T2, T5; hub "no prepayment" default D5);
   - DMM advisory database update (D8);
   - other DMM route figures (D9);
   - border wording (D10);
   - owner fleet and meeting-point answers;
   - the Arabic pass.

## Sources (checked 22–23 October 2026)

**Official:**
- GACA via SPA — [RUH, 10 Oct](https://www.spa.gov.sa/en/N2697867) · [DMM, 11 Oct](https://www.spa.gov.sa/en/N2698805)
- GACA statements on X — [@ksagaca](https://x.com/ksagaca/status/2108965535421489565)
- [UK FCDO travel advice](https://www.gov.uk/foreign-travel-advice/saudi-arabia)

**Reports of the 12 and 22 Oct GACA statements:**
- [Saudi Gazette, 12 Oct](https://saudigazette.com.sa/article/665336)
- [Arab News, 22 Oct](https://www.arabnews.com/saudi-arabia/dammams-king-fahd-airport-resumes-normal-operations-3007672)
- [Argaam, 22 Oct](https://www.argaam.com/en/article/articledetail/id/1946197)
- [Saudi Gazette — DMM toll](https://saudigazette.com.sa/article/665643/saudi-arabia/dammam-airport-attack-death-toll-rises-to-two-eight-injured)

**Secondary (not treated as confirmation):**
- [Inside Aviation](https://insideaviation.news/saudi-arabia-riyadh-airport-reopens-but-not-to-scheduled-traffic/)
- [Aerocorner](https://aerocorner.com/news/riyadh-airport-reopen-notam-october-17-air-india-indigo-akasa/)
- [Gulf Business](https://gulfbusiness.com/en/2026/saudi-arabia/riyadh-airport-reopens-airlines-delay-saudi-services-with-some-routes-pushed-into-2027/)
- [Gulf News](https://gulfnews.com/business/aviation/uae-flight-status-today-cancellations-delays-and-updates-after-saudi-airport-attack-1.500719321)
- [Time Out Riyadh](https://www.timeoutriyadh.com/news/riyadh-airport-latest-update)
- [Wego](https://blog.wego.com/is-dammam-airport-open-live-status-travel-updates-2026/)

**Distances:**
- [Saudipedia — KFIA](https://saudipedia.com/en/article/1118/government-and-politics/transport/king-fahd-international-airport)
- [Rome2rio Riyadh–Makkah](https://www.rome2rio.com/s/Riyadh/Makkah)
- [Rome2rio Riyadh–Jeddah](https://www.rome2rio.com/s/Riyadh/Jeddah-Station)
- [Air Miles Calculator DMM–RUH](https://www.airmilescalculator.com/distance/dmm-to-ruh/)
- OSRM (`router.project-osrm.org`) road routing, queries listed in §3
