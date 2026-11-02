# Google indexing analysis and top-5 page improvement plan

**Date:** 2 November 2026.

**Inputs:**
- the GSC "Indexed pages" export pasted by the owner (376 URLs, last updated 23 Oct);
- the live build of `4012cf5`;
- CRM leads to 1 Nov;
- Bing data to 30 Oct.

**What was done:**
- Analysis only; no file or database edits.
- **One external action:** 6 updated URLs submitted to Bing (§4).

## 1. What Google has indexed (VERIFIED)

### 1.1 Headline numbers

- **346 of the site's 897 current pages are indexed (39%).**
- The other 30 indexed URLs are 29 old hotel pages that now 301-redirect to `/cities/{city}#hotels`, plus `/blog?category=…`. They'll drop out as Google recrawls them.

### 1.2 By page type

| Page type | Indexed / total | Median words: indexed vs not | Median unique text: indexed vs not |
|---|---|---|---|
| EN city taxi pages | 19/19 (100%) | 675 | 86% |
| EN airport hubs | 11/13 | 1,234 vs 1,220 | — (not indexed: NEOM, Red Sea) |
| EN service hubs | 12/14 | — | — |
| **EN route pages** | **129/194 (66%)** | **1,273 vs 600** | **55% vs 48%** |
| EN point-transfer pages | 33/60 (55%) | 754 vs 760 | 40% vs 40% |
| **EN blogs** | **51/126 (40%)** | 2,622 vs 2,335 | 80% vs 78% |
| AR blogs | 32/58 (55%) | — | — |
| **AR route pages** | **26/194 (13%)** | 676 vs 499 | 49% vs 35% |
| AR point / city / city-hub pages | 11/84 | — | — |
| **Distance pages (EN + AR)** | **0/100** | — | ~90% |

"Unique text" is the share of a page's 6-word phrases that appear on at most 2 other pages. A low figure means the page is mostly shared template text.

### 1.3 What the pattern shows

1. **Route pages:** the non-indexed English routes are **half the length** (median 600 words) and more templated. Thin route pages aren't being indexed.
2. **Blogs — the strongest signal:**

   | Published | Indexed |
   |---|---|
   | June | 22/46 |
   | July | 17/39 |
   | August | **12/12** |
   | September | **0/12** |
   | October | **0/6** |

   **Since September, Google has indexed none of the new content**, even long, unique articles. This matches the Google decline after the 2–7 Sep redesign and the early-October Worker errors. It's a **site-level** problem: more or longer pages won't fix it on their own.
3. **Arabic:** 13% of Arabic route pages are indexed, and 1 of 19 Arabic city taxi pages (median 212 words).
4. **Distance pages:** none are indexed on Google, but they draw the most impressions on Bing (`riyadh-to-jeddah-distance` 578 impressions in October). Google may be treating them as duplicating the route pages' distance answer (HYPOTHESIS).
5. **Crawl recency:** many indexed pages haven't been recrawled since July–September. Examples: `riyadh-to-qassim` (1 Aug), `riyadh-to-bahrain` (20 Aug), `qassim-to-riyadh` (19 Sep, before the 24 Oct correction).
6. **Sitemap `lastmod`:** every non-blog URL (about 770) gets `lastmod` = build time (`app/sitemap.ts`, `lastModified: now`). Each deploy marks all pages as changed, so Google ignores the signal and real updates (like 24 Oct) don't stand out.

### 1.4 Missing evidence (owner action)

The GSC **"Why pages aren't indexed"** report: export the reason breakdown and examples. The fix depends on the reason:

| Reason | Fix |
|---|---|
| "Crawled – currently not indexed" | Quality / duplication |
| "Discovered – currently not indexed" | Crawl priority and internal links |
| "Duplicate, Google chose a different canonical" | Consolidation |

## 2. Is the indexed content value-adding?

**Mostly yes on the strongest pages, no on a large templated tail:**

**Strong** (route-specific, 1,300–1,550 words, 54–77% unique, 5–14 FAQs): `qassim-to-riyadh`, `riyadh-to-qassim`, `riyadh-to-bahrain`, `riyadh-to-doha`, `doha-to-riyadh`, `dammam-to-riyadh`, the Dammam and Riyadh airport hubs.

- Their weakness is **accuracy, not depth**: fixed-price / all-in claims, unverified figures, outdated RUH status.
- They also miss the specific answers customers ask about: which airport, what to send, documents, timing.

**Weak but indexed:** 45 English routes are under 45% unique or under 800 words — mostly short Eastern Province routes (`abqaiq-to-dammam`, `dammam-to-saihat`, `ras-tanura-to-dammam`, `hofuf-to-dammam`) and long template-heavy cross-border pages (`madinah-to-amman` 33% unique, `jeddah-to-dubai` 36%). None has lead or search evidence.

**Blogs:** long and mostly unique. They produce **no first-landing leads** (CRM, 202 leads), and most link only generic hubs (report 35 §3).

## 3. Decision: improve indexed pages first, or non-indexed ones?

**Improve the indexed, demand-proven commercial pages first, and add one non-indexed page with real lead evidence.**

**Why:**
1. **Leads come from these pages.** Every lead page that matters is a commercial page; 13 of the top 15 are indexed.
2. **Indexed pages can rank as soon as they're recrawled.** Non-indexed pages face a site-level barrier: nothing published since September has been indexed. Rewriting 551 non-indexed pages now would be work Google may not pick up.
3. **Quality signals:** better strong pages and fewer contradictions raise the site's overall quality, which is the likeliest route to getting the rest indexed.
4. **Don't mass-rewrite non-indexed pages.** First get the GSC reasons (§1.4). Then decide, page group by page group:
   - thin Eastern Province routes → enrich or consolidate;
   - distance pages → keep for Bing, add a quote CTA, and consider whether they should exist separately from the route pages (report 35);
   - Arabic → after native review.

## 4. Request indexing — done and pending

### 4.1 Bing (done 2 Nov)

`SubmitUrlbatch`, HTTP 200. 6 URLs updated on 23–24 Oct, all live and accurate today:

- `/routes/qassim-to-riyadh`
- `/routes/dammam-to-riyadh`
- `/airport-transfer/dammam-airport`
- `/routes/dammam-airport-to-riyadh`
- `/dammam/dammam-airport-to-hotels`
- `/dammam/hotels-to-dammam-airport`

Not yet recorded in `docs/bing-submitted-urls.json` (file not edited).

### 4.2 Google (owner action — I have no GSC access)

Google's Indexing API covers only job postings and livestreams, so use **URL Inspection → Request indexing** (about 10 a day).

**Request today (pages already improved and accurate):**

| URL | Indexed? | Last crawled | Why |
|---|---|---|---|
| `/routes/qassim-to-riyadh` | Y | 19 Sep | Top lead page; ELQ wording since 24 Oct |
| `/routes/dammam-to-riyadh` | **N** | — | 5 leads; corrected 24 Oct |
| `/airport-transfer/dammam-airport` | Y | 11 Oct | 7 leads; updated 23 Oct |
| `/routes/dammam-airport-to-riyadh` | Y | 6 Sep | Updated 23 Oct |
| `/dammam/dammam-airport-to-hotels` | Y | 9 Oct | Updated 23 Oct |

**Do NOT request yet — the Riyadh status is outdated.** On 24 Oct, King Khalid International Airport said Terminal 1 (domestic) and Terminal 2 (international, national carriers) would resume on Sunday 25 Oct ([Kuwait Times / KUNA](https://kuwaittimes.com/article/52299/world/riyadhs-king-khalid-airport-resumes-operations-at-2-terminals/)). The announcement came from the airport, not GACA. Secondary reports say prior-permission restrictions and airline suspensions continue ([Airways](https://www.airwaysmag.com/new-post/riyadh-airport-reopens-restrictions-airline-suspensions), [Business Standard](https://www.business-standard.com/amp/world-news/saudi-arabia-partly-reopens-riyadh-airport-despite-renewed-houthi-threats-126102600086_1.html)).

Our live pages still say *"We have not found an official GACA announcement that scheduled flights have resumed."* Update these first, after **owner decision R1** (are RUH pickups/drop-offs still case by case?):
- the Riyadh hub;
- the 5 RUH routes;
- the advisory (EN + AR);
- the RUH lines on the Qassim and Dammam pages.

Reported but not in our copy: Riyadh Air moved selected operations to Qassim's Prince Naif airport from 25 Oct — relevant context for Qassim demand.

### 4.3 After the top-5 work

Request indexing for each improved page (Google manually, Bing via API).

## 5. Top-5 pages to improve (greatest opportunity)

**Selection rule:**
- proven demand (CRM first landings, WhatsApp, Bing/GSC);
- commercial intent;
- a fixable content gap;
- no new URL.

| # | Page | Indexed | Evidence | Why it's the opportunity |
|---|---|---|---|---|
| 1 | `/routes/riyadh-to-qassim` | Y (crawled **1 Aug**) | 11 CRM landings — **3 of the 10 leads since 24 Oct, the top current page**; Bing 8c/31i; GSC 52i | The approved Patch A English hunks for this route are still unapplied. Fixed-price / no-toll claims; no Qassim airport drop-off answer |
| 2 | `/routes/riyadh-to-bahrain` | Y (20 Aug) | Best Bing converter (12c/119i Oct); 5 CRM landings; GSC 43i | "Fixed, all-in price"; no Bahrain International Airport section; unverified ~450 km / 4.5–5 h in meta |
| 3 | `/routes/riyadh-to-doha` (with `doha-to-riyadh`) | Y | 7c/146i Bing; 5 + 5 CRM landings | Same gaps; the Qatar border hub doesn't link it |
| 4 | `/routes/dammam-to-riyadh` | **N** | 5 CRM landings; GSC 84i; Bing 4c/23i | Dammam priority; corrected 24 Oct but not indexed. Needs depth (Causeway / airport connection guidance) and contextual links (`riyadh-to-dammam-taxi-guide`, KFIA guide) to earn indexing |
| 5 | `/airport-transfer/dammam-airport` | Y (11 Oct) | 7 CRM landings (5 ChatGPT); Dammam priority | No links out to the KFIA guide or the Doha route; no Arabic hub. Customer questions not yet answered on the page |

**Backups** (if cross-border owner confirmation is slow):
- `/routes/riyadh-to-jeddah` — indexed, Bing distance demand;
- `/cities/makkah` — 3 leads.

### 5.1 What "improve" means for each page

All new text must be verified or owner-confirmed; no invented prices, times or rules. Each page gets:

1. **Answer-first block** (for AI and search snippets): 3–4 sentences answering who it's for, where pickup happens, how the price is set, and what to send.
2. **Customer-question sections**, drawn from real CRM enquiry patterns:
   - Riyadh → Qassim: Qassim airport (ELQ) drop-off; Buraidah vs Unaizah; return trip.
   - Riyadh → Bahrain: Bahrain airport vs Manama addresses; documents (official links only); how the crossing affects timing (owner-confirmed wording).
   - Riyadh → Doha: the Salwa route; Hamad airport drop-off (if confirmed); documents.
   - Dammam → Riyadh: DMM vs Causeway vs Khobar pickup; a road-vs-flight-vs-train comparison (SAR rail exists).
   - Dammam hub: meeting point (once confirmed), Khobar/Dhahran/Jubail distances (verified ranges), hotels, onward to Riyadh/Bahrain/Doha.
3. **"What to send for a quote" checklist** matching the quote form fields.
4. **FAQ expansion** (4–6 real questions); FAQ structured data generated from the same list.
5. **Internal links:** about 3–5 contextual links in and out per page, from report 35c (rows 7–8, 13–14, 17, 33, 35–38).
6. **Claim cleanup:** quotation wording; remove "all-in", "no tolls" and unverified durations.
7. Verified distance ranges, with the method stated.

### 5.2 Owner confirmations these five pages need

- **Pages 2–3:** border charges and crossing-delay wording; Bahrain and Hamad airport drop-offs.
- **Page 5:** the Dammam airport meeting point; the free-waiting allowance (optional).
- **Page 1:** none new (ELQ is confirmed).

## 6. Site-level fixes (separate approvals)

These run alongside the top-5 work because they affect indexing of everything:

1. **Riyadh status update** (§4.2): R1 decision → edit → deploy → request indexing.
2. **Sitemap `lastmod`:** use each page's real `lastUpdated` instead of the build time (`app/sitemap.ts`).
3. **GSC "Why pages aren't indexed" export** (§1.4) → decide on thin Eastern Province routes, distance pages and Arabic.
4. **Crawl stats** (GSC Settings → Crawl stats) for 5xx or response-time spikes since September.
5. **Shared-template accuracy** (fixed-price strings site-wide; report 34/35).

## Sources

- GSC Indexed pages export (owner, last update 23 Oct 2026).
- Local prerender of `4012cf5`.
- CRM `leads` (to 1 Nov).
- Bing Webmaster API (page stats to 30 Oct; traffic to 31 Oct).
- [Kuwait Times / KUNA — RUH T1/T2 resumption, 25 Oct](https://kuwaittimes.com/article/52299/world/riyadhs-king-khalid-airport-resumes-operations-at-2-terminals/)
- [Airways — reopens with restrictions](https://www.airwaysmag.com/new-post/riyadh-airport-reopens-restrictions-airline-suspensions)
- [Business Standard — partial reopening](https://www.business-standard.com/amp/world-news/saudi-arabia-partly-reopens-riyadh-airport-despite-renewed-houthi-threats-126102600086_1.html)
- [Gulf News — DMM resumption](https://gulfnews.com/world/gulf/saudi/saudi-arabias-dammam-airport-resumes-operations-after-attack-kills-two-injures-eight-1.500719434)
