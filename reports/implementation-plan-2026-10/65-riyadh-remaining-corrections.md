# 65: Remaining Riyadh corrections from report 64 (local only)

**Date:** 25 November 2026.

**Not done:** no commit, push or deployment; no form submission or indexing request. Arabic was not edited (proposals are in 65b). No page was deleted, redirected or noindexed, and none was removed from the sitemap.

**Not rebuilt:** the Riyadh city page. Its only change is the terminal notice.

**Preserved:** the uncommitted work from reports 61–64.

## 1. Files changed

| File | Change |
|---|---|
| `data/routes.ts` | `riyadh-to-jeddah`: time wording only. `riyadh-to-alula`: time and distance wording only |
| `data/service-pages-v2/intercity-transfers.ts` | Riyadh → Jeddah card: "9 hours" → "9.5–10.5 hours" |
| `data/city-guides.ts` | Riyadh `hubFaqs`: the early/late-flight answer only (renders on `/cities/riyadh`) |
| `data/riyadh-city-page.ts` | Airport terminal notice made neutral; facts comment updated |
| `reports/…/65-riyadh-remaining-corrections.md`, `65b-arabic-riyadh-corrections.md` | New |

## 2. Route times

Routing checked on 25 Nov 2026 from central Riyadh (24.7136, 46.6753).

| Route | OSRM | Valhalla | Before | After |
|---|---|---|---|---|
| Riyadh → Jeddah (21.4858, 39.1925) | 948 km · 10.4 h | 960 km · 8.8 h | 950 km · 9 hours | 950 km · **9.5–10.5 hours** |
| Riyadh → AlUla (26.6085, 37.9214; Old Town 26.6175, 37.9136) | 1,034–1,035 km · 10.9–11.0 h | 1,040–1,042 km · 10.3–10.4 h | 1,000 km · 9 h 30 | **1,035–1,045 km · 10.5–11 hours** |

**Jeddah:** the suggested 10–10.5 hours was only partly supported, because the two engines disagree by 1.6 h. I published **9.5–10.5 hours**, which covers both engines with a realistic margin.

**AlUla:** 10.5–11 hours is supported. The distance was also off by about 3.5%, so I corrected it.

**Wording changed in each record:** the meta description, `duration` (and `distance` for AlUla), the overview paragraph, the time FAQ, and the "nine-hour" references ("the entire nine-hour journey", "Nine hours is a real commitment", "across the nine hours", "the whole nine hours", "near-ten-hour distance").

**Not changed in these records** (outside the brief; see section 7): "fixed price", "no tolls anywhere in Saudi Arabia", "Professional driver".

**Pages affected:** 29 in the build, all expected.
- **The two route pages:** meta, JSON-LD and body.
- **`intercity-transfers`:** the edited card.
- **Pages whose related-route cards list either route:**
  - `index`, `cities/jeddah`;
  - `routes/{alula-to-riyadh, jeddah-to-riyadh, abha-to-jeddah, kaec-to-jeddah, neom-to-alula}`;
  - `routes/riyadh-to-{al-kharj, dammam, diriyah, hail, hofuf, jizan, jubail, khobar, madinah, makkah, qassim, tabuk, taif}`;
  - `routes/{tabuk-to-alula, taif-to-jeddah, yanbu-to-alula, yanbu-to-jeddah}`.
- **`cities/riyadh`:** FAQ. **`taxi-service/riyadh`:** notice.

**Scan of all 494 built English pages:** "9.5–10.5 hours" appears 46 times and "10.5–11 hours" 25 times. No stale Riyadh→Jeddah or Riyadh→AlUla figure remains on any route record, route page or route card. The two exceptions outside the brief are in section 7.

## 3. `/cities/riyadh` hotel directory

| FAQ | Before | After |
|---|---|---|
| "Is airport pickup available for early morning or late night Riyadh flights?" | "Yes, pickups and drop-offs run 24/7 at King Khalid International Airport regardless of your flight's arrival or departure time." | "You can request a pickup or drop-off at King Khalid International Airport for early-morning or late-night flights. Share your flight number and time when you request a quotation; availability and pickup arrangements are confirmed with you individually." |

Nothing else in the directory was touched, including the hotel entries and the `lastUpdated` date. The built page has no "24/7", and the visible FAQs match the FAQPage 6/6.

## 4. Riyadh Airport terminal notice

- **Official source:** riyadhairports.com could not be reached (25 Nov).
- **What was found:** news coverage of the airport's 24 October announcement:
  - [Anadolu](https://www.aa.com.tr/en/middle-east/riyadh-airport-announces-new-terminal-arrangements-for-domestic-international-flights/4099869)
  - [Gulf Business](https://gulfbusiness.com/en/2026/saudi-arabia/saudis-riyadh-airport-officially-resumes-operations-at-two-terminals-after-houthi-attacks/)
  - [Time Out Riyadh](https://www.timeoutriyadh.com/news/riyadh-airport-latest-news)
  - [AeroCorner](https://aerocorner.com/news/riyadh-airport-reopens-october-25-terminal-1-terminal-2/)

  The latest of these dates from late October.
- **Decision:** as briefed, the dated claim was removed.
  - **Before:** "Terminals 1 and 2 resumed operations on 25 October 2026 after a suspension, and no date has been announced for the other terminals…"
  - **After:** "Terminal arrangements at King Khalid International Airport can change. Please confirm your flight and terminal with your airline before you travel."
- **Not touched:** `/airport-transfer/riyadh-airport` still carries its own dated status FAQ ("…resumed operations on 25 October 2026…", checked 2 November). See section 7.

## 5. Operational claims

Nothing was reintroduced: no flight tracking, name boards, day-rates or waiting between meetings. The Riyadh city page's claims scan is still 0.

## 6. QA

| Check | Result |
|---|---|
| TypeScript | 0 errors |
| Lint | Repo 10 (the same pre-existing set). Changed files: 0 |
| Production build (isolated worktree with all current changes and `.env`) | Exit 0, 906/906 |
| Site diff vs the report-64 build | 29 changed (section 2), 0 added or removed |
| Arabic | 0 files changed |
| Pages and URLs | Unchanged; no redirects, noindex or deletions |

## 7. Related issues found (not changed)

1. **`/distance/riyadh-to-jeddah-distance`** still says "~9 hours" / "Around nine hours by road including stops" / "~8.5 hours non-stop". That fits Valhalla but not OSRM. Should it be aligned with 9.5–10.5 h?
2. **CMS blog `/blog/riyadh-to-alula-road-trip-guide`:** its title or excerpt says "1,000 km". It appears in blog listings and related-guide cards on 10 pages. This needs a CMS edit.
3. **`/distance/riyadh-to-alula-distance`** says "10–12 hours", which already includes 10.5–11. Left as is.
4. **Reverse records:**
   - `jeddah-to-riyadh` says 10–11 h (report 60, OSRM-based) while `riyadh-to-jeddah` now says 9.5–10.5 h. Align both to 9.5–10.5 h?
   - `alula-to-riyadh` says 1,050 km / 10 hours. Align to 1,035–1,045 km / 10.5–11 h?
5. **`riyadh-to-jeddah` and `riyadh-to-alula` still contain:**
   - "fixed price agreed before you travel";
   - "no toll roads anywhere on Saudi Arabia's highway network";
   - "Professional driver".

   Should they get a wording pass?
6. **`/airport-transfer/riyadh-airport`:** its dated terminal-status FAQ (2 Nov). Should it be neutralised the same way?

## 8. Git status

Nothing was committed, pushed or deployed. The working tree holds the uncommitted work from reports 61–65.
