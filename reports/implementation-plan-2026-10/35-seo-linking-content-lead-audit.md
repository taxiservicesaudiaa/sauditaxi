# SEO, internal-linking, content-gap and lead-growth audit

**Date:** 24 October 2026. **Type:** read-only audit and plan.

**What was not done:**
- No file, link, metadata, database, CRM or setting was changed.
- Nothing was committed, pushed, deployed or published.
- The working tree is clean and equal to `HEAD`.

**Companions:**
- `35b-page-inventory.csv` — all 897 public pages, with cluster, type, links in and out, live status, GSC, Bing, CRM landings and WhatsApp landings.
- `35c-internal-link-map.csv` — 45 recommended links: exact source, destination, anchor and evidence.

**Evidence labels:**
- **VERIFIED** — checked directly.
- **DATA** — from the CRM, Bing API or GSC export.
- **OWNER** — owner-reported or owner-confirmed.
- **HYPOTHESIS** — an inference that still needs evidence.

## Deliverable 1 — Executive findings

### 1.1 What exists (VERIFIED)

**Stack:** Next.js App Router on Cloudflare Workers (OpenNext); every public page is prerendered.

**Content sources:**
- English commercial content comes from TypeScript data files.
- English blogs come from Supabase `blogs` (126 published).
- Arabic comes from `data/translations/ar.ts`.

**Pages: 897 public, all HTTP 200 live (checked today).**

| Type | Count |
|---|---|
| Route pages (EN) | 194 |
| Point-transfer pages (`/dammam/…`, `/jeddah/…`, etc.) | 60 |
| Distance pages | 50 |
| City taxi pages | 19 |
| Airport hubs | 13 |
| City hubs | 5 |
| Border hubs | 6 |
| Service hubs | about 17 |
| Blogs | 126 |
| Arabic pages | 407 |

**Indexability:**
- No `noindex` anywhere.
- Every canonical is self-referencing.
- `robots.txt` allows everything except `/api` and `/admin`.
- The sitemap lists 896 URLs.

**Release state:**
- The owner's commit `37bc796` (23 Oct) is on `origin/main` and **live**. It contains the Riyadh/Dammam changes, B1–B3 and the advisory.
- The live "last checked 22 October 2026" status dates were **not refreshed** at release.
- Airport status re-checked today: no new GACA statement for RUH (latest 12 Oct) or DMM (latest 22 Oct). The wording is still accurate, but the date should be refreshed.

### 1.2 Lead pipeline — is the "decline" a broken pipeline? (DATA)

| Check | Finding | Verdict |
|---|---|---|
| Form → API → CRM | Leads are being saved; the newest is today, 24 Oct 11:49 UTC. 192 leads since 8 Jul | **Working** |
| Weekly volume | Aug–Sep: 1–11 a week. Week of 5 Oct: 30; **12 Oct: 71**; 19 Oct: 27 (19–24 Oct, today included). Daily: peak 15/day on 12–13 Oct, now 2–6/day | The "decline" is a **return from a disruption spike**. The current level is still about 3–5× the Aug–Sep baseline |
| What caused the spike | All **34 Qassim ↔ Riyadh enquiries arrived 10–24 Oct** (none Jul–Sep). 18 of 34 mention an airport, and 28 of 34 run Qassim → Riyadh. Timing matches the RUH suspension (10–12 Oct) | Disruption-driven demand (DATA + HYPOTHESIS), now easing |
| Email notifications | Sent via Resend (`RESEND_API_KEY` is a dashboard secret). Failures are logged but **don't block the lead**, and nothing records whether an email was sent. `FROM_EMAIL`/`ADMIN_EMAIL` were only added to the config on 6 Oct | **Unverifiable here.** Check Resend delivery logs. Notifications before 6 Oct may never have been sent (HYPOTHESIS) |
| WhatsApp clicks | 198 tracked clicks (68 ChatGPT-attributed). Busiest pages: `qassim-to-riyadh` 34 first landings, AR Qassim 12 | Click is logged; the conversation outcome isn't |
| Attribution | `first_landing_page` 178/192. Referrer 48/192. `utm_source=chatgpt.com` on 74. Google organic 4 | Usable, but 73 leads are "direct/none" (likely AI apps and shared links) |
| Bookings | 184/192 leads are still "New"; 2 "Completed". 20 quotations (9 Accepted), only 7 linked to a lead | **Bookings can't be measured** — the largest measurement gap |
| Site analytics | **None installed** (no GA, Plausible, Clarity or similar in the HTML) | Visits and conversion rate can't be measured |

### 1.3 Search visibility (DATA)

**Google:**
- 16 Jul – 6 Aug: about 207 impressions/day (`docs/search_data/Chart.csv`).
- The 16 Jul – 15 Oct top-pages export totals 10,295 impressions / 122 clicks, so 7 Aug – 15 Oct averaged ≤ ~82/day.
- The owner reports 4–5 impressions/day now.
- **A sustained Google decline starting in August.** The daily data needed to date it isn't available here.

**Candidate causes (HYPOTHESIS, to be checked in GSC):**
- the full site redesign of 2–7 Sep and hub restructuring on 17 Sep;
- Worker 1102 errors fixed on 4–5 Oct (`530f8d5`, "root cause of 1102s");
- the broken www → home redirect, fixed 6 Oct;
- a very large set of templated route and distance pages.

`/_next/` was blocked in `robots.txt` from June until 16 Oct, so it **pre-dates** the decline and is unlikely to explain it alone.

**Bing (moving the opposite way):**

| Period | Clicks / impressions |
|---|---|
| August | 21 / 1,287 |
| September | 41 / 2,315 |
| 1–15 Oct | 79 / 3,707 |
| 16–21 Oct | 58 / 2,978 |

Bing and AI assistants are the working discovery channels.

### 1.4 Where leads land (DATA, 192 leads)

| First landing | Leads |
|---|---|
| English route pages | 102 |
| Arabic pages (mostly routes) | 35 |
| Airport hubs | 12 |
| `/get-quote` | 10 |
| Distance pages | 1 |
| **Blog articles** | **0** |

ChatGPT sends visitors **straight to commercial pages**: `qassim-to-riyadh` 7, AR Qassim 6, the Dammam airport hub 5, AR Riyadh–Kuwait 3, `riyadh-to-qatar-border` 3.

**Implication:** blogs haven't directly produced enquiries. New blogs should be judged by whether they **feed a ready commercial page** (links, AI citations), not by their own traffic.

### 1.5 Strongest clusters (DATA)

| Cluster | Leads (all time) | Main landing pages | Visibility |
|---|---|---|---|
| **Qassim ↔ Riyadh** | 34 (all Oct) | `/routes/qassim-to-riyadh` (22 landings, 34 WhatsApp), AR (8), `/routes/riyadh-to-qassim` (8) | Almost none on search (Bing 2 impr; GSC 21 in Jun–Aug). **Driven by ChatGPT/direct** |
| Riyadh ↔ Gulf (Qatar 9, UAE 7, Bahrain 5, Kuwait 3) | about 24 | `riyadh-to-bahrain`, `riyadh-to-doha`, `doha-to-riyadh` (5 each), `riyadh-to-qatar-border`, AR Kuwait | Best Bing converters (`riyadh-to-bahrain` 9c/69i) |
| **Dammam / Eastern Province** | about 17 (DMM ↔ Bahrain 5, ↔ Riyadh 3, ↔ UAE/Kuwait/Khobar/Jubail…) | Dammam airport hub (7), `dammam-to-riyadh` (4), `dammam-to-bahrain-airport` (3) | Bing: KFIA guide 0c/245i; Dammam–Riyadh distance pages 155–194 impr. GSC (Jun–Aug): Bahrain–Khobar/Dammam taxi queries at positions 48–68 |
| Other Saudi | Abha ↔ Najran 6 (Aug), Madinah Airport → Riyadh (AR) 4, Makkah city hub 3 | scattered | — |

### 1.6 Principal gaps (VERIFIED unless marked)

1. **The top lead page isn't ready for more traffic.** `/routes/qassim-to-riyadh`:
   - says nothing about Qassim airport (ELQ), although 18 of 34 enquiries mention an airport;
   - claims "fixed price… fully inclusive", "no toll charges", "on-time" and automatic flight-tracking adjustment.
   - The owner-approved Patch A (ELQ wording) is still unapplied: the English half is unblocked; the Arabic half waits for native review.
   - The distance (~345 km) is **supported**: OSRM Buraidah → Riyadh 347 km.
2. **Name-board claims are still live on 45 cluster pages** (26 EN, 19 AR), contradicting the owner rule. They include lead pages `dammam-to-riyadh` (4 landings), `dammam-airport-to-doha` (2), `dammam-airport-to-jubail` (1), `dammam-airport-to-khafji-border` (1) and `bahrain-airport-to-khobar` (1). Several Riyadh pages (`/taxi-service/riyadh`, `/cities/riyadh`, `/riyadh/king-khalid-airport-to-kafd`, `…-ricec…`) still promise RUH meet-and-greet, despite the case-by-case rule.
3. **Guides that don't link their own service:**
   - `riyadh-to-dammam-taxi-guide` → neither Riyadh–Dammam route;
   - `jeddah-to-riyadh-transfer-guide` and `riyadh-to-abha-transfer-guide` → zero commercial links;
   - `best-hotels-near-dammam-airport` → not the Dammam hotel-transfer page;
   - `bahrain-to-saudi-arabia-by-road` (the highest-visibility blog, GSC 253i) → links only the opposite direction.
   - In total, 8 English blogs have no commercial link in the body.
4. **Hubs that don't link their routes:** the UAE and Kuwait border hubs link no routes. The Qatar hub omits `riyadh-to-doha` and `doha-to-riyadh` (5 leads each). The Bahrain hub omits `riyadh-to-bahrain` and `bahrain-to-riyadh`.
5. **Informational pages with the most visibility have no next step.**
   - Distance pages lead Bing impressions (`riyadh-to-jeddah` 393, `riyadh-to-dammam` 194, `dammam-to-riyadh` 155) but have **no quote CTA** and one route link each.
   - The KFIA guide gets 245 Bing impressions with 0 clicks.
6. **Near-orphan commercial pages:**
   - all 14 `/dammam/…` point pages have 2–4 inbound links;
   - `/cities/dammam` (3,895 words) and `/cities/riyadh` (3,240) have 4 inbound each, while the overlapping `/taxi-service/dammam|riyadh` pages have 89–90;
   - `/taxi-service/buraidah` has 3.
7. **Missing commercial page with evidence:** there is **no Qassim airport (ELQ) hub**. 13 airport hubs exist, ELQ isn't one. ELQ pickups are owner-confirmed, and 18 enquiries mention the airport. **Eight of the 13 hubs have no Arabic counterpart**, Dammam's included.
8. **Measurement:** no web analytics; CRM statuses aren't maintained; quotations are mostly unlinked; no record of whether notification emails were sent; WhatsApp outcomes aren't recorded.

## Deliverable 2 — Page inventory

**File:** `35b-page-inventory.csv` (897 rows).

**Clusters:**
- A Dammam/Eastern Province — 65 EN + 65 AR commercial pages
- B Qassim — 3 + 3
- C Riyadh — 41 + 41
- D other Saudi
- E cross-border — 51 + 43

**Fields:**
- URL, language, type, cluster, title, words;
- live status, indexability, canonical, language pair;
- inbound links (total / from blogs / from commercial pages), outbound commercial links;
- GSC clicks and impressions (16 Jul – 15 Oct), Bing clicks and impressions (3 Jul – 16 Oct);
- CRM first landings (all / October), form-submission page, WhatsApp first landings.

**Caveats:**
- GSC covers only the top 500 pages; blank means not in the export, not zero.
- "Inbound from blogs" counts template blocks (sidebar, inline CTA). Contextual body links are analysed separately in §3.

**Priority commercial pages (excerpt):**

| URL | Words | Inbound (all / blog / commercial) | GSC i | Bing c/i | CRM landings | Readiness (§4) |
|---|---|---|---|---|---|---|
| `/routes/qassim-to-riyadh` | 1,128 | 12 / 2 / 10 | 56 | 0/2 | **22** | Needs content + owner verification |
| `/routes/riyadh-to-qassim` | 1,324 | 6 / 1 / 5 | 52 | — | 8 | Needs content + owner verification |
| `/ar/نقل-من-القصيم-الى-الرياض` | 559 | 13 / 0 / 13 | 29 | — | 8 | Needs Arabic review |
| `/airport-transfer/dammam-airport` | 1,303 | 29 / 3 / 26 | 50 | 0/1 | **7** | Ready (updated 22 Oct) — needs links |
| `/routes/dammam-to-riyadh` | 1,155 | 48 / 17 / 29 | 84 | 4/10 | 4 | **Needs correction** (name board) |
| `/routes/dammam-airport-to-riyadh` | 747 | 23 / 2 / 21 | 2 | — | 1 | Ready (updated 22 Oct) |
| `/routes/riyadh-to-dammam` | 1,182 | 163 / 126 / 35 | 44 | — | 0 | Needs content (no-toll / fixed-price wording) |
| `/dammam/dammam-airport-to-hotels` | 751 | 3 / 0 / 3 | 12 | — | 0 | Ready — needs links |
| `/routes/dammam-airport-to-khobar` | 722 | 16 / 0 / 14 | 61 | 0/3 | 0 | **Needs correction** (35 km / 30 min contradicted; tracking wording) |
| `/routes/riyadh-to-bahrain` | 1,212 | 17 / 1 / 14 | 43 | **9/69** | 5 | Needs content (fixed price; border wording pending) |
| `/routes/riyadh-to-doha` / `doha-to-riyadh` | 1,160 / 1,178 | 13 / 12 | 24 / 41 | 3/53, 4/11 | 5 / 5 | Needs content; Hamad airport pickups need owner confirmation |
| `/border-transfers/uae-border`, `/kuwait-border` | — | — | — | — | — | Needs links (no routes linked) |

## Deliverable 3 — Internal-link audit

### 3.1 How the clusters connect (VERIFIED from the rendered HTML)

**Global navigation** (53 links on every page) covers:
- all 13 airport hubs and 19 city taxi pages;
- the service hubs and three distance pages.

It does **not** cover individual routes, `/cities/*`, `/dammam/*` point pages or any Qassim page.

**Blog template blocks:**
- The sidebar and inline CTA link a fixed set: Jeddah–Makkah, Makkah–Madinah, Madinah–Makkah, Jeddah–Madinah, Riyadh–Dammam and service hubs.
- That's why `/routes/riyadh-to-dammam` shows 126 "blog" inbound links but 0 CRM landings: **template links, not contextual relevance.**

**Contextual body links (EN blogs, from the database content):**
- median 5 commercial links per blog;
- 8 blogs have none;
- many link only generic hubs (`/airport-transfers`, `/city-transfers`, `/intercity-transfers`).

**Breadcrumbs and route cards:**
- Route pages link 4–9 related routes.
- Point pages link 4.
- Hubs are consistent, except the border hubs (3.3) and the Dammam hub (no blog links out).

### 3.2 Contextual blog links to priority pages (current)

| Commercial page | Blogs linking from the body |
|---|---|
| Dammam airport hub | 3 (`dammam-travel-guide`, KFIA guide, DMM advisory) |
| `dammam-airport-to-riyadh` | 2 (both disruption pieces) |
| `dammam-to-riyadh` | 1 |
| `riyadh-to-dammam` | 4 (none is `riyadh-to-dammam-taxi-guide`) |
| `/dammam/dammam-airport-to-hotels` | **0** |
| `dammam-airport-to-khobar` | **0** |
| `qassim-to-riyadh` | 2 (disruption pieces) |
| `riyadh-to-qassim` | 1 |
| `/taxi-service/buraidah` | **0** |
| `riyadh-to-bahrain`, `riyadh-to-doha`, `doha-to-riyadh`, `riyadh-to-kuwait-city`, `riyadh-to-abu-dhabi`, `riyadh-to-dubai` | 1 each (the intercity disruption guide only) |
| `/border-transfers/bahrain-causeway` | 5 |
| `/airport-transfer/riyadh-airport` | 16 |
| `/taxi-service/riyadh` | 23 |

### 3.3 Answers to the brief's questions (summary)

1. **Most valuable commercial pages:** `qassim-to-riyadh` (+ AR, reverse); the Dammam airport hub; `dammam-to-riyadh`; `riyadh-to-bahrain`; `riyadh-to-doha` / `doha-to-riyadh`; `riyadh-to-qatar-border`; AR Riyadh–Kuwait; `riyadh-to-al-batha-border` (5 WhatsApp landings).
2. **Blogs that link them:** see 3.2. They are few, and mostly the two October disruption guides.
3. **Mentions without a link:** see the link map, rows 1–12 and 20–34.
4. **Pages with very few relevant links:** the 14 `/dammam/*` pages, `/cities/dammam` and `/cities/riyadh`, `/taxi-service/buraidah`, `dammam-to-khobar` / `-dhahran` (3–4), `dammam-to-bahrain-airport` (3) and `khobar-to-bahrain-airport` (4) — the last two have 3 and 2 CRM landings.
5. **Isolated from navigation:** all Qassim pages, all `/dammam/*` pages, `/cities/*`.
6. **Contextual vs generic:** most relevance comes from template blocks and route cards; contextual body links are thin outside the Riyadh/Jeddah/Makkah pilgrim set.
7. **Anchors:**
   - Body anchors are mostly descriptive.
   - Template anchors such as "RiyadhDammam" are a concatenated label without a separator.
   - Blog CTA wording ("fixed quote") conflicts with the quotation policy.
8. **Structural reinforcement:** the RUH/DMM hubs, breadcrumbs and route cards agree. The border hubs and Dammam point pages break the structure.
9. **Over-linking or competing pages:**
   - The template links `riyadh-to-dammam` from every blog (126×) — irrelevant on most of them.
   - `/cities/{city}` and `/taxi-service/{city}` serve overlapping "city transfer" intent: **merge-review** (do not remove; check queries and links first).
10. **Informational → enquiry path:**
    - Blogs reach the quote form via the template CTA.
    - Distance pages have **no** quote path.
    - The KFIA guide doesn't reach the Khobar, Riyadh or hotel transfers.

### 3.4 Recommended links

`35c-internal-link-map.csv` lists 45 links, with exact source, destination, anchor, placement, reader value, evidence, implementation scope and blocker:
- 16 Dammam;
- 3 Qassim;
- 5 Riyadh;
- 5 other Saudi;
- 16 cross-border.

**Rules applied:**
- only where the article already discusses that journey;
- one link per destination per article;
- descriptive anchors without keyword stuffing;
- no link to a page that still makes a contradicted claim until that page is corrected (flagged in `status_note`).

## Deliverable 4 — Commercial-page readiness

| Page | Classification | Required before more traffic |
|---|---|---|
| `/routes/qassim-to-riyadh`, `/routes/riyadh-to-qassim` | **Needs content + owner verification** | **Patch A (EN):** add ELQ (owner-confirmed). Remove "fully inclusive", "no toll charges", "on-time" and automatic-adjustment wording (tracking isn't confirmed for ELQ). Keep ~345 km (verified); label 3 h 30 as driving time. **AR:** native review |
| `/airport-transfer/dammam-airport` | **Ready** — needs links | Refresh the status date; add the KFIA guide link and the `dammam-airport-to-doha` link (border wording pending) |
| `/routes/dammam-airport-to-riyadh` | **Ready** | Refresh the status date |
| `/dammam/dammam-airport-to-hotels`, `/dammam/hotels-to-dammam-airport` | **Ready** — needs links | Template "all-in price" / "arrives on time" (shared template task) |
| `/routes/dammam-to-riyadh` | **Needs correction** | Remove name board and "meet-and-greet". Use the "meeting point confirmed in your booking" wording. Distance 400 km vs measured 413 km (city centre): acceptable as "about 400–415 km" |
| `/routes/riyadh-to-dammam` | Needs content | "No tolls… fixed price covers the complete journey" vs owner policy (tolls vary; quotation controls) |
| `/routes/dammam-airport-to-khobar` / `-dhahran` / `-jubail` | **Needs correction** | Figures contradicted (Khobar 35 km vs 57; Dhahran 25 vs 47–53; Jubail 70 vs 81–93). Name-board wording on Jubail |
| Riyadh ↔ Bahrain, Qatar, UAE, Kuwait routes | Needs content + **owner verification** | "Fixed, all-in price"; border charges and crossing-delay wording pending; Hamad / Bahrain airport pickups; Kuwait entry acceptance |
| `/taxi-service/riyadh`, `/cities/riyadh`, `/riyadh/*` point pages | Needs correction | RUH meet-and-greet / name-board claims vs case-by-case |
| Distance pages | Needs conversion work | Add a quote CTA (shared template) |
| All pages | Needs pipeline investigation | Analytics absent; confirm notification delivery; CRM status hygiene |

## Deliverable 5 — Keyword and content-gap matrix

**Evidence sources:**
- Bing queries, 3 Jul – 16 Oct;
- GSC queries, Jun – Aug (older export);
- CRM enquiry text.

**No search volumes are claimed.** Without quantitative data, opportunities are labelled HYPOTHESIS.

| # | Topic / main query | Variations (evidence) | Intent | Existing URL for the intent | New URL needed? | Link to | Anchor | Overlap risk | Priority / confidence |
|---|---|---|---|---|---|---|---|---|---|
| K1 | Qassim airport (ELQ) to Riyadh transfer | CRM: 18 airport mentions; Bing "qassim airport how long going to riyadh? how much taxi?" (2i) | Transactional | `/routes/qassim-to-riyadh` (no ELQ section) | **No — improve the route page** (Patch A) | — | — | Low | **P1 / high** |
| K2 | Qassim airport transfers (hub) | ELQ owner-confirmed; there are 13 other airport hubs | Commercial | none | **Yes — `/airport-transfer/qassim-airport`** (evidence: 18 enquiries; there's no hub) | `qassim-to-riyadh`, `riyadh-to-qassim`, `/taxi-service/buraidah` | "Qassim Airport to Riyadh" | Medium (with the route page) — keep the hub generic, route-specific detail stays on the route | P2 / medium |
| K3 | King Fahd International Airport (DMM) | Bing "king fahd international airport" 179i pos 7.3, 0 clicks; "(dmm)" variants | Informational / navigational | `/blog/king-fahd-international-airport-complete-guide` | No — **improve the title/snippet** and add onward transfer links | Hub, Khobar, Riyadh, hotels | rows 1–3 of the link map | Low | **P1 / high** |
| K4 | Dammam ↔ Riyadh distance / taxi / fare | Bing "dammam to riyadh distance" 72i, "riyadh to dammam distance" 41i; GSC "dammam to riyadh taxi", "…fare", "…price" | Mixed | distance pages + routes | No — quote CTA on the distance pages; fix route claims | Routes | "Request a quote for this journey" | Low | **P1 / high** |
| K5 | Bahrain ↔ Khobar / Dammam taxi, Bahrain airport ↔ Dammam | GSC: about 15 queries at 15–31i each (positions 48–68) | Transactional | `khobar-to-bahrain`, `bahrain-airport-to-dammam`, `bahrain-to-khobar`, `dammam-to-bahrain` | No — **improve the existing routes** (border wording pending) + hub links | — | — | Medium (many near-duplicate Bahrain pages) | P2 / medium |
| K6 | Dammam airport hotels | GSC "dammam airport hotels" 14i | Informational → transactional | `best-hotels-near-dammam-airport` + `/dammam/dammam-airport-to-hotels` | No — link the two | Hotel transfer | row 4 | Low | P1 / medium |
| K7 | Riyadh → Bahrain / Doha / Abu Dhabi / Dubai by road | Bing "riyadh to bahrain by road" 23i, "riyadh to abu dhabi by road" 12i, "riyadh to doha drive", "doha to riyadh by road" | Mixed | Routes + border hubs + `gcc-residents…` blog | No — hub ↔ route links; route content corrections | Routes | rows 35–42 | Low | P2 / high |
| K8 | Dammam → Dubai / UAE by road | Bing "dammam to dubai by road" 8i; "private cab… dammam from dubai" | Mixed | `/routes/dammam-to-dubai`, distance page | No | Route | — | Low | P3 / medium |
| K9 | Riyadh → Jeddah distance / road | Bing "riyadh to jeddah distance" 117i (+ variants) | Informational | `/distance/riyadh-to-jeddah-distance` (393i) | No — CTA + links from `jeddah-to-riyadh-transfer-guide` | Routes | rows 20–21, 24 | Low | P2 / high |
| K10 | RUH terminal car service (pre-disruption) | GSC "ruh terminal 2 car service" 22i, "ruh terminal 5 taxi" 8i | Transactional | RUH hub | **Not now** — RUH case by case | — | — | — | Deferred |
| K11 | Business transfers Dammam / Dhahran / Jubail (Aramco, Jubail Industrial) | HYPOTHESIS (KFIA guide traveller profiles; Jubail guide exists) | Commercial | `dammam-airport-to-dhahran`, `-jubail`, `/dammam/dammam-airport-to-business-district` | No new URL; improve the business-district page and fix figures | — | — | Medium | P3 / low |
| K12 | "What to send when requesting a long-distance transfer" (flight, passengers, luggage, airport) | HYPOTHESIS (CRM: many incomplete pickup fields — "airport", "home") | Informational | partly on the hubs (booking steps) | Possibly one evergreen guide, **only after** the route fixes; it must link the routes | Qassim, Dammam, Riyadh routes | "Qassim to Riyadh transfer" etc. | Medium (with the booking-step sections) | P3 / low |
| K13 | Airline moved my arrival airport — getting to Riyadh | Already covered by `saudi-arabia-intercity-transfers-flight-disruptions` (live 19 Oct) | Informational | that guide | **No new article**; keep it dated and maintained | Already links 24 routes | — | High if duplicated | Maintain |

**Not recommended:**
- new Dammam disruption articles (the advisory exists and should be **updated**, not duplicated);
- mass city pages;
- more distance pages;
- near-duplicate Bahrain/Khobar articles.

## Deliverable 6 — Prioritised roadmap

Every task needs separate approval. **Type key:**
- **C** — existing content
- **L** — internal linking
- **N** — new article
- **P** — commercial page
- **T** — technical SEO
- **CV** — conversion
- **O** — owner verification
- **M** — measurement

### 0. Cross-cutting (do first)

| # | Task | Type | Why first |
|---|---|---|---|
| 0.1 | Refresh the airport-status dates (4 file locations + advisory database) after a same-day GACA re-check | C | Live pages show "last checked 22 October" |
| 0.2 | **Google visibility investigation:** export the GSC Performance daily chart (16 months), Pages/Queries for the last 3 months, the Page indexing report, Crawl stats (host status, 5xx, response time) and URL Inspection for 10 priority URLs. Date the decline against the redesign (2–7 Sep), the 1102 errors and the redirect fix | T / M | Google is near zero; the cause isn't known from the data available here |
| 0.3 | Confirm lead notification delivery in Resend; record email outcome per lead | M / CV | Emails fail silently |
| 0.4 | Install privacy-respecting analytics (e.g. Cloudflare Web Analytics or GA4 with consent) | M | No visit or conversion data |
| 0.5 | CRM hygiene: update statuses; link quotations to leads; add a "booked" outcome and a WhatsApp outcome | M | Bookings can't be measured |

### A. Dammam

| # | Task | Type | Evidence / reason |
|---|---|---|---|
| A1 | Fix `dammam-to-riyadh` (name board → meeting-point wording; distance range) | P | 4 landings; contradicts the owner rule |
| A2 | Fix figures on `dammam-airport-to-khobar`, `-dhahran`, `-jubail` (verified ranges from Saudipedia/OSRM; remove durations or label them) and the name-board text on Jubail | P | Contradicted figures; GSC 61i on Khobar |
| A3 | Links: KFIA guide → Khobar / Riyadh / hotels / Bahrain; best-hotels → hotel pages and hub; `dammam-travel-guide` and `business-travel` → hub and routes; hub → KFIA guide and `dammam-airport-to-doha` | L | link map rows 1–6 and 10–14 |
| A4 | KFIA guide: title/description aimed at onward transfers; dated status line; remove tracking/meet-and-greet claims | C (database) | 245 Bing impressions, 0 clicks |
| A5 | Update the DMM advisory (12 Oct → 22 Oct GACA) | C (database) | Outdated |
| A6 | Remove name-board claims on 7 `/dammam/*` point pages (port, city, Corniche, business-district), `/cities/dammam`, `/taxi-service/dammam`, `/taxi-service/hofuf`, `dammam-airport-to-abqaiq`, the DMM ↔ Bahrain/Doha/Khafji/Kuwait airport routes and 12 AR Eastern Province pages | P | Owner rule |
| A7 | Distance-page quote CTA (shared template) — Dammam–Riyadh pair first | CV / T | 349 Bing impressions on the pair |
| A8 | Merge-review `/cities/dammam` vs `/taxi-service/dammam` (intent, queries, links) | T | Overlap; `/cities` near-orphan |
| A9 | Arabic DMM hub (template gap) + Arabic corrections | P (AR) | Arabic leads exist; native review needed |

### B. Qassim ↔ Riyadh

| # | Task | Type | Evidence / reason |
|---|---|---|---|
| B1 | Apply Patch A (EN) — the ELQ section and claim cleanup (§4) | P | 34 enquiries; 18 mention an airport |
| B2 | AR Qassim pages — Patch A Arabic after native sign-off | P (AR) | 10 landings |
| B3 | `/taxi-service/buraidah` → `riyadh-to-qassim`; remove its name-board claim; consider Unaizah/ELQ mentions | L / P | Near-orphan; owner rule |
| B4 | Decide on `/airport-transfer/qassim-airport` (K2) | O → P | No hub; owner-confirmed service |
| B5 | Watch demand as RUH reopens: if Qassim enquiries fall back to near zero, the cluster's value was disruption-driven | M | Benchmark interpretation |

**Benchmark lesson for Dammam (HYPOTHESIS):**
- Qassim converts because a **specific route page** answers an urgent, specific need, and ChatGPT cites that page directly.
- Dammam's equivalent is the hub plus `dammam-airport-to-riyadh` and `dammam-to-riyadh`.
- Make those three exact, current and linked, rather than adding articles.

### C. Broader Riyadh

| # | Task | Type |
|---|---|---|
| C1 | Remove RUH meet-and-greet / name-board claims on `/taxi-service/riyadh`, `/cities/riyadh`, `/riyadh/king-khalid-airport-to-kafd`, `/riyadh/…ricec…`, `/riyadh/riyadh-to-diriyah-transfers`, `abha-airport-to-riyadh` and the AR equivalents | P |
| C2 | Links: `jeddah-to-riyadh-transfer-guide` and `riyadh-to-abha-transfer-guide` → their routes (link map rows 20–23) | L |
| C3 | Distance-page CTA: `riyadh-to-jeddah` (393 Bing impressions) | CV |
| C4 | `riyadh-to-dammam`: no-toll / fixed-price wording | P |
| C5 | Merge-review `/cities/riyadh` vs `/taxi-service/riyadh` | T |

### D. Other Saudi destinations

| # | Task | Type |
|---|---|---|
| D1 | The 5 airport-arrival guides with zero links (Taif, Abha, Yanbu, AlUla, Madinah pickup) → their airport hubs, after removing any name-board claim | L / C |
| D2 | `meet-and-greet-airport-service-saudi-arabia` blog — the topic conflicts with "no name board" | C + O |
| D3 | `/cities/makkah` (3 landings), AR Madinah Airport → Riyadh (4): verify claims and figures | P |
| D4 | Abha ↔ Najran (6 enquiries, Aug): check whether a route page exists and whether the service is offered | O |

### E. Cross-border

| # | Task | Type |
|---|---|---|
| E1 | Border hubs → routes (link map rows 35–42) | L |
| E2 | `bahrain-to-saudi-arabia-by-road`, `king-fahd-causeway-guide`, `travel-documents…`, `gcc-residents…` → direction-correct routes and hubs | L |
| E3 | Owner verification: border charges and crossing-delay wording; Hamad / Bahrain / Kuwait airport pickups; Kuwait entry acceptance; vehicle permits | O |
| E4 | Route content: remove "fixed, all-in price" after E3; neutral, sourced entry-requirement wording | P |

## Deliverable 7 — Measurement plan

### 7.1 Baseline (24 Oct 2026, DATA)

| Metric | Value |
|---|---|
| Leads | 192 total (8 Jul – 24 Oct). 8 Jul – 30 Sep: 64 (about 5.3/week); 1–24 Oct: 128 (about 5.3/day); 19–24 Oct: 27 |
| Lead sources (all) | ChatGPT 74, direct/none 73, Bing 21, DuckDuckGo 7, Google 4 |
| WhatsApp clicks | 198 (Oct 122) |
| Quotations | 20 (9 Accepted) |
| Bing traffic | 1–15 Oct 79c/3,707i; 16–21 Oct 58c/2,978i |
| GSC | 16 Jul – 15 Oct, 122c/10,295i (top 500 pages); owner-reported last 28 days ~4–5 impressions/day |

### 7.2 Tracking

| What | How (needs approval) |
|---|---|
| Organic impressions and clicks | Monthly GSC Pages + Queries export, filtered by cluster URL prefixes (§2 CSV) |
| Bing | Weekly Bing API pull (GetPageStats, GetQueryStats, GetRankAndTrafficStats), stored per cluster |
| AI / referral | Keep `utm_source` capture. Report ChatGPT, Perplexity and other assistants separately. Treat "direct/none" as unattributed, **not** as AI |
| Landing-page visits | Analytics (0.4); per-cluster page groups |
| Form submissions | The `leads` table (already captured) |
| Qualified enquiries | New CRM field: qualified yes/no + reason (route feasible, date, contactable) |
| Completed bookings | Quotation linked to the lead, `Accepted` → `Completed`; a `booked` flag on the lead |
| Route and source | Normalised pickup/dropoff region (the region mapping used in this audit) + first landing + utm |
| Before/after | For each approved phase: record the deploy date; compare 4 weeks before vs after per cluster |

**Interpreting before/after:**
- control for the RUH/DMM disruption timeline, seasonality (Umrah and events) and the Google recovery work (0.2);
- don't attribute changes to content alone.

## Unresolved decisions for the owner

1. **Approval order:**
   - 0.1–0.5 first;
   - then A1–A3 and B1 (EN);
   - then links (35c) in batches.
2. **ELQ hub page (K2):** yes or no.
3. **Border wording and airport pickups (E3).**
4. **Meeting point at DMM** (where exactly) and the free-waiting allowance.
5. **`/cities/*` vs `/taxi-service/*` overlap:** keep both with distinct intent, or merge after review.
6. **Native Arabic reviewer** for Patch A (AR), Arabic DMM / RUH and the Arabic advisories.
7. **GSC access** for the Google investigation (exports listed in 0.2).

## Sources

**Repository and site:**
- `.next` prerender (897 pages), live HTTP checks on 24 Oct, `git log`.

**Data:**
- CRM — Supabase `leads`, `whatsapp_clicks`, `quotations`, `email_logs`, `blogs`; read-only, aggregates only.
- Bing Webmaster API — page, query and traffic stats.
- GSC exports: `docs/search_data` (Jun–Aug) and `08-gsc-top-pages-…tsv` (16 Jul – 15 Oct).

**Distances:**
- OSRM road routing (Buraidah / Unaizah / ELQ → Riyadh; Dammam / Khobar → Riyadh).
- [Saudipedia — KFIA](https://saudipedia.com/en/article/1118/government-and-politics/transport/king-fahd-international-airport).

**Airport status:**
- GACA via SPA — [RUH, 10 Oct](https://www.spa.gov.sa/en/N2697867), [RUH extension, 12 Oct](https://www.spa.gov.sa/en/N2699133), [DMM, 11 Oct](https://www.spa.gov.sa/en/N2698805).
- [Arab News, DMM resumption, 22 Oct](https://www.arabnews.com/saudi-arabia/dammams-king-fahd-airport-resumes-normal-operations-3007672).
- Re-checked 24 Oct: no newer statement found.
