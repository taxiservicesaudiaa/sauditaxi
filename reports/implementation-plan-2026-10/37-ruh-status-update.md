# Riyadh airport (RUH) status and service wording update

**Date:** 2 November 2026.

**Status:** local English changes made and validated. **Not committed or deployed.**

**Exact diff:** `37b-ruh-status-update.diff` — 6 files, 32 insertions, 46 deletions.

**Not done here** (each needs separate approval):
- database records (§4);
- Arabic content (§5, native review).

## 1. Verified status (checked 2 November 2026)

**What the airport announced:**
- King Khalid International Airport announced on Saturday 24 October that **Terminal 1 (domestic flights)** and **Terminal 2 (international flights operated by Saudi national carriers)** would resume operations on **Sunday 25 October 2026**.
- Source: [Kuwait Times / KUNA](https://kuwaittimes.com/article/52299/world/riyadhs-king-khalid-airport-resumes-operations-at-2-terminals/); also [ThePrint](https://theprint.in/world/riyadh-airport-resumes-operations-at-terminals-1-2-amid-houthi-threat/3081165/), [Time Out Riyadh](https://www.timeoutriyadh.com/news/riyadh-airport-latest-news), [Travelling for Business](https://travellingforbusiness.co.uk/news/riyadh-airport-reopens-terminals-disruption/).
- The announcement was made **by the airport, not GACA**.

**Not announced:**
- No date for the other terminals.
- Foreign airlines' status is unconfirmed; several remain suspended into November (e.g. Lufthansa to 18 Nov, reported by [Airways](https://www.airwaysmag.com/new-post/riyadh-airport-reopens-restrictions-airline-suspensions)).
- No newer official statement found as of 2 Nov.

**Owner policy:** Riyadh airport pickups and drop-offs are available **case by case**; every booking needs individual availability confirmation.

**Wording rules applied:**
- Airport status is kept separate from airline schedules and flight status.
- No claim that all terminals or airlines have resumed.
- No guarantee of availability.
- Customers are asked for flight number, terminal, pickup requirements and destination.

## 2. Files changed (EN only)

| File | Change |
|---|---|
| `data/airport-status.ts` | `RUH_STATUS_NOTICE`: heading "last checked 2 November 2026". Paragraph 1 is the T1/T2 resumption, with other terminals and airlines not confirmed (check with your airline). Paragraph 2: pickups and drop-offs can be requested, subject to availability, with what to send. Alternative-airport links kept |
| `data/airports.ts` | The Riyadh hub uses the shared `RUH_STATUS_NOTICE` instead of its own duplicate copy (one place to update). `about`, `meetGreetHeading` ("Riyadh Airport Pickups and Drop-offs") and steps 1 and 3 reworded. Code comment updated |
| `data/airport-guides.ts` | Riyadh guide: `lastUpdated` 2026-11-02. Core-paragraph sentence reworded. FAQ "Is King Khalid International Airport operating?" now gives the T1/T2 resumption. FAQ "Can you pick me up or drop me off at Riyadh airport?" now says "Yes, you can request…; each transfer is subject to availability…" |
| `data/airport-route-content.ts` | RUH arrival steps ("which terminal it uses"; "each pickup … subject to availability and confirmed individually"). `riyadh-airport-to-riyadh` FAQ "Will someone be waiting…" |
| `data/city-airport-route-content.ts` | RUH departure step "Confirm the drop-off"; `riyadh-to-riyadh-airport` early-departure FAQ |
| `data/routes.ts` | Meta descriptions for the 5 RUH routes (143–155 chars; one shortened from 165 to 151). Service-schema intros for `riyadh-airport-to-jeddah` and `riyadh-to-riyadh-airport`. **Qassim → Riyadh:** the "Best time to travel" RUH sentence and the "Can you drop me directly at Riyadh airport?" FAQ. **Dammam → Riyadh:** the same-day Riyadh flight FAQ. No other content on those two pages changed |

**Removed everywhere it was rendered in English page data:**
- "We have not found an official GACA announcement…"
- "We are not confirming pickups or drop-offs… in advance"
- "while (airport) operations are disrupted"
- "depends on the airport's current operations"

**Kept:** "confirmed case by case in your quotation" on the Jeddah, Makkah and Madinah arrival lines, which matches the owner policy.

## 3. Pages updated and validation

**Rendered changes vs a same-week build of `HEAD` — exactly 10 pages:**

| Page | What changed |
|---|---|
| `/airport-transfer/riyadh-airport` | Notice, steps, FAQs, HowTo schema |
| `/routes/riyadh-airport-to-riyadh`, `/routes/riyadh-to-riyadh-airport`, `/routes/riyadh-airport-to-jeddah`, `/routes/riyadh-airport-to-makkah`, `/routes/riyadh-airport-to-madinah` | Notice, steps, metadata, FAQs |
| `/routes/qassim-to-riyadh`, `/routes/dammam-to-riyadh` | The Riyadh-airport lines only |
| `/cities/riyadh`, `/cities/jeddah` | Their route lists show the edited intros |

No Arabic page and no other route changed.

**Comparison method:** a build made on 24 Oct and one made today differ on about 125 more pages. The cause is `components/sections/LatestGuides.tsx`, which rotates its guides by calendar week (`Date.now()`). I therefore rebuilt `HEAD` today as the baseline; the 10 pages above are the true diff.

| Check | Result |
|---|---|
| `tsc --noEmit` | Pass |
| ESLint | 10 problems (6 errors, 4 warnings) = the existing baseline |
| `next build` | 905/905 |
| Outdated suspension wording on the 10 pages (text, meta, JSON-LD) | None |
| FAQ structured data = visible FAQs | Pass (all 10) |
| Broken internal links | None |
| Canonicals | Self |
| Hub notice | "Riyadh airport status — last checked 2 November 2026"; HowTo has 3 steps |

## 4. Database records — proposed, NOT executed (separate approval)

### 4.1 `blogs` 099e1ac3… — `/blog/riyadh-airport-closure-october-2026` (EN advisory)

Update with the same guarded-PATCH method as before. The current `updated_at` is 2026-10-22T17:07:49Z.

| Block | Current (exact start) | Proposed |
|---|---|---|
| Last-updated line | "Last updated: 22 October 2026. This is a developing situation…" | "Last updated: 2 November 2026. This is a developing situation…" |
| Short answer | "Saudi Arabia's General Authority of Civil Aviation (GACA) suspended operations… As of 22 October 2026, we have not found an official GACA announcement that scheduled passenger flights have resumed. Do not go to the airport…" | Keep the 10–12 Oct history, then: "On 24 October, King Khalid International Airport announced that Terminal 1 (domestic flights) and Terminal 2 (international flights operated by Saudi national carriers) would resume operations on Sunday 25 October 2026. It has not announced when its other terminals will reopen, and some airlines have not yet restarted Riyadh flights. Confirm your flight and terminal with your airline before you go to the airport." |
| Status table — Operations | "Suspended by GACA… We have not found a later official GACA statement on operations" | "Suspended by GACA on 10 October 2026 (struck again on 11 October; suspension extended on 12 October). Terminals 1 and 2 resumed operations on 25 October 2026, according to the airport." |
| Status table — Reopening | "Not officially confirmed. Reports since 17 October differ…" | "Partial: Terminal 1 (domestic) and Terminal 2 (international, Saudi national carriers) from 25 October. Other terminals: no date announced." |
| Transfer paragraph | "We are not confirming pickups or drop-offs at King Khalid International Airport in advance while its operations are disrupted; any airport pickup or drop-off is confirmed case by case…" | "Private pickups and drop-offs at King Khalid International Airport can be requested. Each transfer is subject to availability and is confirmed individually — send your flight number, terminal, pickup requirements and destination when you request a quotation." Rest unchanged |
| Footer | "…available on 22 October 2026…" | "…available on 2 November 2026…" |
| FAQ "Is Riyadh airport open?" | "…We have not found an official GACA announcement that scheduled flights have resumed (last checked 22 October 2026)…" | "Partly. The airport announced that Terminals 1 (domestic) and 2 (international flights by Saudi national carriers) resumed operations on 25 October 2026; no date has been given for the other terminals. Check your flight and terminal with your airline." |
| FAQ "When will Riyadh airport reopen?" | "GACA had not announced when scheduled passenger operations will resume, as of 22 October 2026…" | Retitle "Have all terminals reopened?": "No reopening date had been announced for the other terminals as of 2 November 2026. Each airline decides when to resume its own Riyadh flights." |
| FAQ "Can I still book an airport transfer in Riyadh?" | "We are not confirming pickups or drop-offs… while its operations are disrupted…" | "Yes, you can request one. Each pickup or drop-off is subject to availability and confirmed individually in your quotation. If your airline rebooks you through another airport, such as Qassim, Dammam, Madinah or Jeddah, we can quote the road journey to or from Riyadh." |
| FAQ "Is it safe to go to the airport…?" | "No… Several governments, including the United States, have advised their citizens to avoid the airport…" | **Re-verify the current US/UK advice before publishing.** If it can't be confirmed: "Check your flight through your airline before travelling, and follow instructions from Saudi authorities and your government's current travel advice." |

**Also:**
- `schema_json` (FAQPage) must be regenerated from the updated FAQs.
- Consider retitling: the slug stays the same; the title is already "Riyadh Airport Status October 2026…".

### 4.2 `blogs` f3f5b707… — `/blog/dammam-airport-attack-october-2026`

Link text "the Riyadh airport closure" → "Riyadh airport status". The advisory itself is still dated 12 Oct (report 35, D8).

## 5. Arabic — review list (NOT edited; a qualified native reviewer must write the Arabic)

| Page | Current (exact) | Required meaning |
|---|---|---|
| `/ar/إغلاق-مطار-الرياض-أكتوبر-2026` (`ar.ts` ~L26700–26800) | FAQ "هل مطار الرياض مفتوح؟" → "لا. حتى 14 أكتوبر 2026 ما زالت العمليات…"; summary "مطار الملك خالد الدولي (RUH) بالرياض مغلق منذ…"; table row "العمليات التشغيلية: معلّقة منذ عصر 10 أكتوبر 2026…"; FAQ "متى يُعاد فتح مطار الرياض؟" → "لم تُعلن الهيئة…" | The same meaning as the EN proposals in §4.1: T1/T2 resumed on 25 Oct per the airport; other terminals not announced; check with your airline; pickups and drop-offs can be requested, subject to availability |
| `/ar/نقل-مطار-الرياض` (AR hub) and the 5 AR RUH routes | Older RUH promises (report 31 §5 list: tracking, name board, "60 minutes free waiting", "on-time") | Report 31 §5 list, updated to the new status: pickups and drop-offs can be requested; each is subject to availability; no tracking, name board or waiting promise at RUH |
| `/ar/الهجوم-على-مطار-الدمام-أكتوبر-2026` | References the Riyadh closure | "Riyadh airport status" wording |

`/ar/مهرجان-سماء-العلا-2026` only says "check the Riyadh airport updates" and links the advisory — **no change needed**.

## 6. Flagged, not changed

1. **Terminal list:** the Riyadh hub data lists "Terminal 1 & 2 (international), Terminal 3 & 4 (domestic), Terminal 5 (low-cost)". It's rendered on `/cities/riyadh` and the Arabic hub, and conflicts with the current temporary arrangement (T1 domestic, T2 international). Owner/source decision: remove the list, or replace it once the airport publishes a stable terminal allocation.
2. **Riyadh hub popular routes** still show city-origin routes (`riyadh-to-qassim`, …) rather than the `riyadh-airport-to-*` routes. That stays consistent with case-by-case availability; revisit if RUH service becomes routine.
3. **After deployment:**
   - request indexing (Google URL Inspection; Bing API) for the Riyadh hub, the 5 RUH routes and `qassim-to-riyadh`;
   - submit the advisory after its database update;
   - re-check the status weekly while it keeps changing.
