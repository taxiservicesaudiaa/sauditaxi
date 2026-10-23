# Current-demand SEO, AI-visibility and lead-conversion audit

**Audit date:** 22 October 2026. **Status:** audit and evidence-backed proposal only. No changes were made (see §I).

## Evidence used

| Source | Date range | Access | Notes |
|---|---|---|---|
| CRM `leads` table (read-only; no name, email or phone columns requested) | 8 Jul – 22 Oct 2026 09:43 UTC (185 leads) | Supabase REST, read-only | Lead status and attribution are incomplete (§E, §G) |
| CRM `quotations` table (status and lead link only) | All records (20) | Read-only | — |
| Bing Webmaster Tools API | Traffic 8 Jun – 19 Oct; page and query stats 3 Jul – 16 Oct 2026 | Read-only API calls (key from `.env`, never printed) | Bing data ends 16–19 Oct |
| Google Search Console | **Top-pages export only**, 16 Jul – 15 Oct 2026 (`08-gsc-top-pages-…tsv`, 500 rows) | Static export | **Queries export, indexing report and URL Inspection not available**; no data after 15 Oct |
| Live site scan | 22 Oct 2026 | 421 URLs (every EN and AR URL in clusters A–D, plus all CRM landing pages since 9 Oct) | All returned 200 |
| Local production build (`.next`, built 19 Oct from the same code as production) | 19 Oct 2026 | Inbound-link graph across 898 prerendered pages | Blog content can differ slightly; code is identical |
| Official and press sources on airport, border and advice status | Checked 22 Oct 2026 | Web | §D |
| Repository code | `main` at `23db881` | Read-only | — |

**Labels used in this report:**
- **VERIFIED:** an official or primary source was read.
- **OWNER-CONFIRMED:** recorded owner decision.
- **SOURCE-DERIVED:** from data (CRM, Bing, GSC, scan).
- **INFERRED:** reasoning from evidence.
- **UNVERIFIED:** not established.
- **CONFLICTING:** sources disagree.

## A. Executive summary

### Current-demand findings (SOURCE-DERIVED)

- **Volume.** Enquiries rose from **14** (26 Sep – 9 Oct) to **112** (9–22 Oct). Daily volume peaked at 15 on 12–13 Oct and is **cooling**: 4–7 a day from 17 Oct onward. 99 of the 112 travel within 7 days of enquiring, 21 on the same day.
- **Largest cluster: Qassim ↔ Riyadh, 33–42 enquiries.** The range depends on classification, because several entries say only "Airport → Riyadh" or "مطار القصيم". **21 enquiries name Qassim airport (ELQ).** The top landing page is `/routes/qassim-to-riyadh` (22 of 112), followed by the Arabic Qassim page (7) and `riyadh-to-qassim` (6).
- **Cross-border: 41 enquiries.** Bahrain 12 (11 naming Bahrain International Airport), Qatar 12 (4 naming Hamad International Airport), UAE 11, Kuwait 6.
- **Riyadh ↔ Dammam/Khobar 5; Madinah airport → Riyadh 3–4; Dammam-local 1.** Dammam-airport enquiry demand is small. Its search visibility is large, but not converting (below).
- **AI and Bing referrals.** ChatGPT-attributed enquiries numbered 33 of 112 (29%), plus 1 from Perplexity; 13 of these are in the Qassim cluster. Bing, DuckDuckGo and Yahoo together account for 24. This is source attribution, not proof of ranking (§E).

### Biggest conversion weaknesses (SOURCE-DERIVED, from the scan)

1. **Distance pages carry the visibility but have no call to action.**
   - **All 73 scanned distance pages** (36 English `/distance/…`, 37 Arabic `/ar/المسافة-…`) have **no quote button and no form**.
   - Since 1 Oct they hold most of the site's relevant Bing impressions: Riyadh–Jeddah 359, Riyadh–Dammam 178, Dammam–Riyadh 148, Riyadh–Bahrain 123, Riyadh–Abu Dhabi 75, Riyadh–Dubai 64, Doha–Riyadh 46, Riyadh–Doha 43.
   - None was a first landing page for an enquiry in the last 14 days.
2. **Hubs don't link the routes that convert.**
   - Qatar hub → not `riyadh-to-doha` / `doha-to-riyadh`.
   - Bahrain causeway hub → not `riyadh-to-bahrain`, `bahrain-to-riyadh` or the Bahrain-airport routes.
   - Kuwait and UAE hubs → **no route links at all**.
   - Dammam airport hub → not the Dammam hotel or business pages, which are linked only from each other and the HTML sitemap.
3. **Riyadh airport conversion path.** The airport hub's CTA pre-fills pickup "King Khalid International Airport (RUH)", and its description promises "meet-and-greet". The Arabic hub promises "استقبال داخل الصالة" and has **no quote CTA at all**. Three Riyadh airport route pages still offer RUH pickups with "flight tracking".
4. **Four Arabic hubs have no quote CTA or form:** `/ar/نقل-مطار-الرياض`, `/ar/تاكسي-الرياض`, `/ar/تاكسي-الدمام`, `/ar/تاكسي-الخبر`. So does `/ar/تاكسي-بريدة`.
5. **Raw HTML is visible to readers in FAQ answers on 18 pages,** including `qassim-to-riyadh`, `riyadh-to-qassim`, `riyadh-to-abu-dhabi`, `riyadh-to-khobar`, `khobar-to-riyadh`, `riyadh-to-al-batha-border` and `/border-transfers/bahrain-causeway`. The same markup appears in the FAQ structured data on 12 English pages.

### Most urgent accuracy and trust risks

1. **Both airport advisories are OUTDATED** (EN and AR; §D).
   - **Riyadh:** says the airport was "closed… notice until 17 October" (last updated 14 Oct). Since 17 Oct, a NOTAM requires prior GACA permission for all traffic and **does not allow scheduled traffic** (VERIFIED via aviation press quoting NOTAM A3650/26; no GACA reopening statement found).
   - **Dammam:** last updated 12 Oct; **misses the second attack on 21 Oct** and GACA's 22 Oct statement that operations "have resumed and air traffic have returned to normal".
   - Both posts are linked from about 130 pages through the blog sidebar's recent-posts list.
2. **Fixed-price claims everywhere.** "Fixed price" (or "سعر ثابت") appears on **356 of the 421 pages scanned** — most pages in every cluster. It contradicts the owner-confirmed policy that **the confirmed quotation sets the price and shows what it covers**. The shared CTA wording ("we reply with a fixed price") repeats it on every route page.
3. **Unsupported service claims.** "Flight tracking" appears on 84 scanned pages and "meet-and-greet" on 50, mostly in clusters A and B. Neither is owner-confirmed. Toll and fee-inclusion statements ("no toll", "بدون رسوم") appear on 91 pages.
4. **Unverified figures in metadata.** Distances and durations in titles and descriptions appear on 204 pages. Examples: Qassim pages "~345 km, 3 h 30" (removal already owner-approved); Riyadh–Kuwait "~650 km"; Riyadh–Doha "~570–600 km, 5.5–6.5 h".
5. **Missing causeway entry caveat (cross-border).** Ireland's official advice (current 21 Oct) warns that **some Saudi visas may only allow entry by air**, which can prevent land entry, including via the causeway. Bahrain → Saudi pages don't mention this.

### What to fix first, and why

Qassim pages, the shared fee wording, the Bahrain corridor, airport-status accuracy and the cross-border hubs (§F). These combine the most current enquiries with owner-confirmed capability, and most of the fixes are already drafted or are data-level changes.

## B. Prioritised URL table

**Scoring.** Each component is scored 0–10, then weighted: current qualified-enquiry demand 30%; search demand or visibility 20%; correctable conversion weakness 20%; operational certainty 15%; speed and measurability 15%. The total is out of 10.

"Benefit" is an **estimate, not a guarantee**. Enquiries are not confirmed bookings: CRM status is not maintained (§E).

| # | URL(s) | Lang | Cluster | Evidence (dates) | Confirmed weakness | Recommended change | Est. benefit | Facts to confirm | Risk | Priority (score) | AR review |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | `/routes/qassim-to-riyadh`, `/routes/riyadh-to-qassim`, `/ar/نقل-من-القصيم-الى-الرياض`, `/ar/نقل-من-الرياض-الى-القصيم` | EN+AR | B | CRM 9–22 Oct: 33–42 enq. (21 name ELQ); 22+7+6+2 first landings; 13 ChatGPT-attributed. GSC 16 Jul–15 Oct: 56/52/29/27 impr. Bing: ~0 | No ELQ wording; "fixed price", "no tolls", tracking (AR), RUH drop-off; unverified 345 km / 3 h 30 / Highway 65; raw HTML in FAQs and FAQ schema | Apply **Patch A Rev. 2** (`14-…-rev2.patch`), already owner-approved in scope | High: largest cluster; clearer ELQ answer | None new (ELQ owner-confirmed; RUH excluded) | Low; **Arabic half blocked on native review** | **P1 (8.3)** | **Yes** (pack `16-…`) |
| 2 | Shared CTA and form wording on every route page (EN + AR domestic and cross-border views; `QuoteForm` success text) | EN+AR | All | Seen on every route page scanned | "we reply with a fixed price", "Fixed price for your private transfer", "سعر ثابت لرحلتك" | Replace with "Request a quote — your confirmed quotation sets the price and shows what it covers" (the planned C2a/C2b item) | Trust and dispute reduction on every enquiry page | None (owner policy) | Low; shared template | **P1 (7.4)** | Yes (short strings) |
| 3 | `/routes/riyadh-to-bahrain`, `/routes/bahrain-to-riyadh`, `/routes/dammam-to-bahrain-airport`, `/routes/khobar-to-bahrain-airport`, `/border-transfers/bahrain-causeway` (+ AR) | EN+AR | C | CRM: 12 Bahrain enq., 11 naming BAH. Bing since 1 Oct: riyadh-to-bahrain **8c/67i** (best converter), bahrain-to-riyadh 3c/14i. GSC: 43 / 74 / dammam-airport-to-bahrain 128 / khobar-to-bahrain 80 | Riyadh page has no Bahrain International Airport section; "fixed price"; unverified distance in meta; hub doesn't link these routes; no air-only-visa caveat | Add a BAH section and FAQ to `riyadh-to-bahrain`; hub → all Bahrain routes; neutral border wording plus the visa caveat; remove "fixed price" and figures from meta | Medium–high | **O4: Riyadh → BAH drop-offs** | Low | **P1 (7.35)** | Yes |
| 4 | `/airport-transfer/riyadh-airport`, `/ar/نقل-مطار-الرياض`, `/routes/riyadh-airport-to-riyadh`, `/routes/riyadh-to-riyadh-airport`, `/routes/riyadh-airport-to-jeddah` (+ `-to-makkah`/`-to-madinah`), both advisories (EN + AR) | EN+AR | B/A | GSC: RUH hub **159 impr** (highest of these pages). CRM: 5 RUH mentions. Advisories linked from about 130 pages | RUH CTA pre-fill and meet-and-greet; AR hub has no CTA; advisories OUTDATED (§D) | Dated status box (VERIFIED wording only); "Flight now uses another airport?" section linking the alternatives; neutral CTA pre-fill; qualify or hide RUH service claims; update both advisories | High accuracy value; medium lead value | RUH service decision | Medium (fast-changing facts) | **P1 (7.25)** | Yes |
| 5 | `/border-transfers/uae-border`, `/border-transfers/kuwait-border`, `/border-transfers/qatar-border` + routes `riyadh-to-abu-dhabi`, `riyadh-to-dubai`, `riyadh-to-al-batha-border`, `al-batha-border-to-riyadh`, `riyadh-to-kuwait-city`, `kuwait-city-to-riyadh`, `riyadh-to-doha`, `doha-to-riyadh`, `riyadh-to-qatar-border` | EN (+AR routes) | C | CRM: UAE 11, Qatar 12, Kuwait 6. Bing since 1 Oct: riyadh-to-doha 3c/53i, doha-to-riyadh 4c/11i, riyadh-to-abu-dhabi 3c/44i. GSC: riyadh-to-qatar-border 72, doha-to-riyadh 41, kuwait-city-to-riyadh 40 | UAE and Kuwait hubs link no routes; Qatar hub skips the Doha routes; `riyadh-to-qatar-border` doesn't link `riyadh-to-doha`; raw HTML in FAQ on `riyadh-to-abu-dhabi` and `riyadh-to-al-batha-border`; "fixed price", tracking, unverified durations | Hub → route links (data); fix the raw FAQ HTML; meta without "fixed price" or figures; neutral entry-rule wording (no Kuwait residency claim) | Medium | Hamad International Airport pickups/drop-offs; Kuwait acceptance | Low | **P1 (7.1)** | Yes (route pages) |
| 6 | 73 distance pages (36 EN `/distance/…`, 37 AR `/ar/المسافة-…`) for corridors in A–C | EN+AR | A–C | Bing since 1 Oct: ~1,000+ impressions across these pages (figures above); 0 enquiry first-landings in 14 days | No quote CTA or form (template); figures in body need verification (V15) | Add a pre-filled "Request a quote for this journey" CTA linking the route page (template). Leave the figures pending the verification programme | Medium (largest untapped visibility) | None for a CTA | Low–medium (shared template) | P2 (6.95) | Yes (CTA string) |
| 7 | `/airport-transfer/dammam-airport`, `/dammam/dammam-airport-to-hotels`, `/dammam/hotels-to-dammam-airport`, `/dammam/dammam-airport-to-business-district`, `/blog/king-fahd-international-airport-complete-guide`, `/blog/best-hotels-near-dammam-airport`, `/routes/dammam-airport-to-riyadh` | EN (hub has no AR) | A | Bing since 1 Oct: KFIA guide **0c/239i**, query "king fahd international airport" 0c/179i. GSC: guide 68, hotels blog 54, hub 50, dammam-to-riyadh 84. CRM: 5 DMM ↔ Riyadh, 3 DMM airport mentions | Hotel pages near-orphaned (2 inbound); hub doesn't link them; guide's sidebar routes point to Jeddah/Makkah; tracking and meet-and-greet unconfirmed; no dated note after the 21 Oct attack; `dammam-airport-to-riyadh` thin (685 words) | Link hub ↔ hotel pages ↔ guides; contextual route links in the guides; dated DMM status line; remove unconfirmed claims; extend `dammam-airport-to-riyadh` with what-to-send and connection guidance | Medium | DMM meet-and-greet, flight-time adjustment, hotel coverage | Low | P2 (6.35) | n/a (EN); AR route pages yes |
| 8 | `/ar/نقل-من-مطار-المدينة-الى-الرياض`, `/routes/madinah-airport-to-riyadh` | AR+EN | B | CRM: 4 AR first landings + 2 AR form submissions (14 d) | 679 words; "fixed price", tracking | Remove claims; add what-to-send and flight-connection guidance | Low–medium | None (MED owner-confirmed) | Low | P2 (5.65) | Yes |
| 9 | `components/blog/BlogSidebar.tsx` (all blog pages) | EN | All | Every blog scanned shows the same 5 routes (`routes.slice(0, 5)` → Jeddah/Makkah/Madinah) | Off-topic links on the DMM, Riyadh and Bahrain guides | Topic-matched sidebar routes (category/tag/slug match) | Low–medium | None | Low–medium (shared template) | P2 | No |
| 10 | Arabic city hubs `/ar/تاكسي-الرياض`, `/ar/تاكسي-الدمام`, `/ar/تاكسي-الخبر`, `/ar/تاكسي-بريدة` | AR | A/B | Scan | No quote CTA or form; extra sections render as plain text (no links) | Add a quote CTA, and allow links in the city view (template) | Low–medium | None | Medium (template) | P3 | Yes |

## C. Detailed findings for the top-priority pages

### C1. Qassim ↔ Riyadh (EN + AR)

- **Current:** EN title "Qassim to Riyadh Taxi – Private Transfer & Chauffeur". Description: "…(~345 km, about 3 hours 30 min)… Reliable, on-time, fixed price." H1 "Private Transfer from Qassim to Riyadh". 1,267 words; form ✓; CTA `/get-quote?pickup=Qassim&dropoff=Riyadh` ✓. Out-links: 2 routes. Inbound: 6 pages (EN), 14 (AR).
- **Claims to remove or verify:**
  - "fixed price"; "no toll"; "Reliable, on-time" (guarantee);
  - RUH drop-off;
  - "track your departure and adjust automatically" (AR FAQ);
  - 345 km, 3 h 30 and Highway 65 — removal owner-approved.
- **Missing:** an ELQ answer. The single most frequent request (21 enquiries) isn't addressed on the page.
- **Technical:** raw HTML visible in two EN FAQ answers on each page, and the same markup in the FAQPage JSON-LD.
- **Ready fix:** Patch A Rev. 2 covers all of the above. The English half can ship independently of the Arabic half if you approve the split. Until the Arabic review finishes, the two languages would be inconsistent.

### C2. Shared fee wording (templates)

- **Strings:**
  - EN: `ctaText` "…we reply with a fixed price."; form subheading "Fixed price for your private transfer."; `QuoteForm` success "We'll reply with a fixed price for your journey"; return block "for fixed pricing" (`lib/route-composer.ts`).
  - AR equivalents in `app/ar/[...slug]/page.tsx`.
- **Proposal:** one consistent, owner-policy line in both languages. Arabic needs native review.
- **Effect:** every route page, including the five priority clusters, stops promising a fixed price that the business does not offer as policy.

### C3. Riyadh → Bahrain and Bahrain International Airport

- **Current:** title "Riyadh to Bahrain Private Transfer – Book Your Taxi". Description "(~450 km, 4.5–5 hours)… fixed price". Form ✓; CTA pre-fill `dropoff=Bahrain`. Out-links: 5 Bahrain/Kuwait routes. Inbound: 16 pages; **not linked from the Bahrain causeway hub**.
- **Missing:**
  - a Bahrain International Airport section (11 of 12 Bahrain enquiries name BAH);
  - an FAQ "Can you drop me at Bahrain International Airport from Riyadh?" — **only after O4**;
  - the visa-entry caveat for Bahrain → Saudi.
- **CTA:** add a second pre-filled button, "Riyadh → Bahrain International Airport", once O4 is confirmed.
- **Links:**
  - hub → `riyadh-to-bahrain`, `bahrain-to-riyadh`, `dammam-to-bahrain-airport`, `khobar-to-bahrain-airport`, `bahrain-airport-to-dammam`, `bahrain-airport-to-khobar`;
  - `riyadh-to-bahrain` → `dammam-to-bahrain-airport` (for travellers already in the Eastern Province).
- **Combine with:** planned step B-2 (fee copy and toll notes on the Bahrain pages).

### C4. Riyadh airport hub, Riyadh airport routes and advisories

- **Hub:**
  - Title "Private Riyadh Airport Transfer (RUH)"; description "…Fixed price, meet-and-greet."; no form.
  - CTA pre-fill "King Khalid International Airport (RUH)".
  - Links only to `riyadh-airport-to-*` routes and `riyadh-to-khobar`.
  - 26 inbound pages.
- **AR hub:** 311 words; "استقبال داخل الصالة، سعر ثابت"; **no CTA**.
- **Recommended outline:**
  1. **Dated status box.** Only VERIFIED wording: "Since 17 Oct a NOTAM requires prior GACA permission for all flights; scheduled traffic has not resumed (as reported on 18 Oct). Check with your airline. Last checked [date]."
  2. **"If your flight now uses another airport".** Links: `qassim-to-riyadh` (ELQ, after Patch A), `dammam-airport-to-riyadh`, `madinah-airport-to-riyadh`, `jeddah-airport-to-riyadh`, `riyadh-to-bahrain`, `riyadh-to-doha`, and `/blog/saudi-arabia-intercity-transfers-flight-disruptions`.
  3. **Existing evergreen content,** with RUH-pickup claims qualified ("when RUH operations allow and the quotation confirms it").
  4. **CTA** "Tell us your airport and destination".
- **Riyadh airport routes:** add the same status line; remove "flight tracking", "meet-and-greet" and "English-speaking drivers" unless confirmed.
- **Advisories:** update both, in EN and AR, to the §D status. Add the new disruption guide to the advisories' sidebar match sets.

### C5. Cross-border hubs and routes

- **Hubs:**
  - UAE and Kuwait hubs: 0 route links. Qatar: 2 (border-only routes). Bahrain: 3.
  - The hubs have no forms; each has one pre-filled `/get-quote` CTA.
- **Proposed link map** (data-level in `data/borders.ts`, if hub links are data-driven — confirm at implementation):

  | Hub | Add links to |
  |---|---|
  | Kuwait | `riyadh-to-kuwait-city`, `kuwait-city-to-riyadh`, `dammam-to-kuwait-city`, `kuwait-city-to-dammam`, `dammam-to-kuwait-airport`, `kuwait-airport-to-dammam` |
  | UAE | `riyadh-to-al-batha-border`, `al-batha-border-to-riyadh`, `riyadh-to-dubai`, `dubai-to-riyadh`, `riyadh-to-abu-dhabi`, `abu-dhabi-to-riyadh`, `dammam-to-dubai`, `dubai-to-dammam` |
  | Qatar | `riyadh-to-doha`, `doha-to-riyadh`, `dammam-airport-to-doha`, `doha-to-dammam-airport`, `al-khobar-to-doha`, `doha-to-al-khobar` |
  | Bahrain | see C3 |

  Also add `riyadh-to-qatar-border` → `riyadh-to-doha`, with a role note: border-only vs door-to-door Doha.
- **Route pages:**
  - fix the raw FAQ HTML (`riyadh-to-abu-dhabi`, `riyadh-to-al-batha-border`, `dammam-to-al-batha-border`);
  - remove "fixed price" and tracking;
  - meta without figures.
  - Kuwait: neutral wording only — "entry requirements can change at short notice; confirm with the Kuwaiti authorities". **No residency-only claim** (UNVERIFIED).

### C6. Dammam airport cluster

- **KFIA guide:** 3,799 words; title "King Fahd International Airport (DMM) Complete Guide". Bing 0 clicks from 239 impressions at average position 7.7, so it's visible but not clicked.
  - Weak points: the title and description don't mention current status or transfers to Riyadh, Bahrain or hotels; the sidebar links are Jeddah/Makkah.
  - It *does* link the DMM hub.
- **Recommendations:**
  - a dated status line after the 21 Oct attack, quoting the GACA statement;
  - title and description that match what searchers need now (airport + onward transfers), **without status claims in the title**;
  - contextual links to `/dammam/dammam-airport-to-hotels`, `dammam-airport-to-khobar`, `dammam-airport-to-riyadh` and `dammam-airport-to-bahrain`.
- **Hotel pages:** these are generic "any Dammam hotel" pages, not per-hotel pages. They're appropriate: **no new per-hotel pages are justified** (no hotel-specific demand in the CRM beyond 1–2 mentions).
  - Link them from the DMM hub and the two guides.
  - Remove the meet-and-greet and flight-tracking claims unless confirmed.

## D. Current-status findings (checked 22 Oct 2026)

| Claim | Where it appears | Source checked (date) | Status |
|---|---|---|---|
| RUH "closed since 10 Oct… NOTAM until 21:00 UTC 17 Oct; reopening not confirmed" | `/blog/riyadh-airport-closure-october-2026` (+ AR), last updated 14 Oct | Inside Aviation, 18 Oct 13:21Z, quoting NOTAM A3650/26 (from 17 Oct 18:45Z: all traffic requires prior GACA permission) and A3651/26 | **OUTDATED** |
| RUH current status: reopened under prior permission; scheduled traffic not resumed | Not on site | Inside Aviation (18 Oct); Gulf Business, Al Jazeera, Time Out Riyadh ("closed as of 19 Oct") | **CONFLICTING.** NOTAM content VERIFIED via press; no GACA reopening statement found |
| DMM "attack 11 Oct; no closure announced" | `/blog/dammam-airport-attack-october-2026` (+ AR), last updated 12 Oct | Arab News, 22 Oct 10:17: GACA says a second attack on 21 Oct (2 killed, 8 injured) and that "operations… have resumed and air traffic have returned to normal" | **OUTDATED** (current position VERIFIED via GACA quote) |
| Airlines still suspending Riyadh/Dammam services | Advisories (older lists) | Gulf Business; aggregators citing Lufthansa, Air France-KLM, Etihad, Qatar Airways (Oct) | **UNVERIFIED** per airline — the site should say "check your airline" |
| All land crossings, including King Fahd Causeway, operating | Not on site | US Embassy security alerts dated 20 and 21 Oct (search excerpts; direct fetch blocked) | **VERIFIED** (official, excerpt) |
| Some Saudi visas may only allow entry by air (affects causeway entry) | Not on site | Ireland DFA travel advice (current 21 Oct; page updated 12 Oct) | **VERIFIED** (official, excerpt) |
| Kuwait land entry limited to Kuwaiti residents | Not on site (correctly) | Australia Smartraveller via search only | **UNVERIFIED** |
| US advisory Level 3 "Reconsider travel" | Not on site | US Embassy travel-advisory update, 10 Oct | **VERIFIED** |
| UK FCDO advice scope | Asian Cup drafts only | GOV.UK page (12 Oct) vs press reports of widening | **CONFLICTING** |
| RUH meet-and-greet / "استقبال داخل الصالة" | RUH hub (EN/AR), `riyadh-airport-to-*` routes | — | **OUTDATED/UNVERIFIED service claim** while RUH runs on prior permission |
| "Last checked 2026" lines on distance pages | 70 distance pages (EN/AR) | — | Undated in practice (year only); evergreen figures, not status |
| New guide `/blog/saudi-arabia-intercity-transfers-flight-disruptions` | Live since 19 Oct; "Last checked: 19 October 2026" | — | No status claims (by design). Its date should be refreshed when status changes |

**Rule for any status copy:** date it; separate airport status from our service availability; link the official sources; never use status in titles or meta; and don't imply road travel is safer.

## E. AI-originated enquiry analysis (SOURCE-DERIVED + INFERRED)

**Data:** CRM, 9–22 Oct; 112 enquiries.

**Attribution method:** `first_utm_source`, `utm_source`, `first_referrer` and `referrer`. ChatGPT appends `utm_source=chatgpt.com` to outbound links.

| Source | Enquiries | Main first-landing pages |
|---|---|---|
| ChatGPT | 33 | `qassim-to-riyadh` 7; AR Qassim → Riyadh 5; `riyadh-to-qassim` 3; `riyadh-to-qatar-border` 2; AR Jeddah → Riyadh 2; then single pages (Bahrain-airport, Kuwait, UAE, Abha, Hail, Red Sea airport) |
| Perplexity | 1 | — |
| Bing / DuckDuckGo / Yahoo | 16 / 7 / 1 | `riyadh-to-doha` 3; `/cities/makkah` 3; `riyadh-to-bahrain` 2; `qassim-to-riyadh` 2; `doha-to-riyadh` 2; others single |
| No referrer | 35 | — |
| Internal only (first touch lost) | 19 | — |

**By cluster (ChatGPT + Perplexity):** Qassim 13 (plus about 8 "Riyadh other" that are mostly Qassim-airport requests); Bahrain 3; Kuwait 2; Qatar 2; UAE 2.

**What this does and does not show:**
- It shows that ChatGPT users clicked through to these pages and then enquired.
- It does **not** prove that ChatGPT ranked, recommended or cited a specific page. Referral captures only clicked links.
- The Qassim pages have almost no Bing visibility (Bing page stats to 16 Oct), yet attract the most ChatGPT referrals. So the assumption that "ChatGPT visibility comes from Bing ranking" is **not supported** for these pages (INFERRED).
- The 35 no-referrer and 19 internal-only enquiries make every source share uncertain.

**AI-readability weaknesses that could cause misrepresentation (INFERRED):**
- fixed-price and fee-inclusion claims that contradict the quotation policy;
- stale advisories still indexed, with dates inside the content;
- RUH service promises;
- unverified distances and durations repeated in metadata;
- raw HTML inside FAQ text and FAQ schema.

Fixing these improves accuracy if an AI system reproduces the page. It does not guarantee citation.

## F. First 5 actions

1. **Ship Patch A Rev. 2 for the Qassim pages** (score 8.3). Ideally EN now and AR after native sign-off; this needs your split approval, otherwise both after the review.
2. **Fix the shared fee wording** (C2a/C2b; 7.4). One template change in EN and AR; Arabic strings reviewed.
3. **Bahrain corridor** (7.35). Hub → route links, BAH section (after O4), visa-entry caveat, meta clean-up, combined with B-2.
4. **Airport-status accuracy bundle** (7.25). Update both advisories (EN + AR) to §D; status box and alternatives section on the RUH hub; CTA on the Arabic RUH hub; qualify the RUH route claims.
5. **Cross-border hub links and route clean-up for UAE, Kuwait and Qatar** (7.1). Data-level links; fix the raw FAQ HTML on the UAE route pages; neutral Kuwait wording.

Next in line: the distance-page CTA (template, 6.95), the Dammam airport cluster links and claims (6.35), the Madinah → Riyadh page (5.65), and the blog sidebar (P2).

## G. Measurement plan

**Baselines** (record before any change; same windows after):

| Measure | Baseline window | Baseline value | Source |
|---|---|---|---|
| Quote submissions (all) | 9–22 Oct (14 d) | 112 | CRM `leads` |
| …by first landing page / route cluster | 9–22 Oct | §A, §B | CRM |
| Qualified leads, confirmed bookings, completed transfers | — | **Not measurable.** 177 of 185 leads still "New"; only 7 leads linked to a quotation; 9 quotations "Accepted" vs 2 leads "Completed" | CRM — **fix process first** |
| Organic clicks and impressions (Google) | 16 Jul – 15 Oct | Top-pages export | GSC — **request Queries + Pages export for 1 Oct – today** |
| Bing clicks and impressions, CTR, query coverage | 1–16 Oct (pages/queries); to 19 Oct (traffic) | e.g. `riyadh-to-bahrain` 8c/67i; KFIA guide 0c/239i | Bing API |
| AI-attributed enquiries | 9–22 Oct | ChatGPT 33, Perplexity 1 | CRM UTM/referrer |
| WhatsApp/contact actions | — | Not analysed — a `whatsapp_clicks` table exists (`lib/leads.ts`) | Pull read-only next time |

**Process fixes needed for valid measurement:**
1. Update lead status as leads progress, and link quotations to leads.
2. `search_source` is blank on 112 of 112 recent leads — fix capture.
3. Keep `first_landing_page`; it's complete on 112 of 112, which is good.

**Confounders:**
- Demand is driven by the disruption and is already cooling (peak 12–13 Oct).
- Compare like-for-like windows: 14 days after each change vs the 14 days before.
- Report results as correlation.
- Note any new attack, reopening or border change in each window.

## H. Unresolved questions for the owner

**Operational** (these affect accuracy):
1. **RUH:** with the airport running on prior permission and no scheduled traffic, do you take any Riyadh airport jobs? Until answered, RUH stays excluded.
2. **O4: Riyadh → Bahrain International Airport drop-offs.** Yes or no? This gates the BAH section.
3. **Hamad International Airport (Doha)** pickups and drop-offs on the Qatar routes. Yes or no, and on what terms?
4. **Meet-and-greet and flight-time adjustment** at DMM, JED and MED. Real practice, or remove?
5. **Dammam hotel pickups:** any hotel in Dammam/Khobar, or specific areas only?
6. **Residential compound pickups** (gate coordination) in Riyadh and the Eastern Province?
7. **Corporate invoicing and group moves:** offered? (`lib/invoices.ts` exists; customer-facing use is not confirmed.)
8. **Kuwait:** any current restriction on accepting Riyadh/Dammam → Kuwait jobs?

**Editorial and process:**
9. Approve **splitting Patch A** (EN now, AR after review)?
10. Who is the **native Arabic reviewer**, and when? This blocks Patch A AR, the Asian Cup AR, the disruption-guide AR and the Arabic CTA strings.
11. Approve the **shared fee-wording template change** (C2a/C2b)?
12. **CRM practice:** can lead statuses and quotation links be kept current, so qualified and booking rates can be measured?
13. **Bing batch** from the 19 Oct request: 37 sitemap URLs not yet submitted, including the new guide. It was interrupted before running. Submit now?

## I. Final safety and scope check

- No code, content, translation, configuration, metadata, schema or database record was changed. The only file written is this report; scratch analysis lives outside the repository.
- No commit, push, deploy, publish, URL change or Bing submission occurred in this audit.
- No new pages or blog records were created.
- Every recommendation is labelled as VERIFIED, OWNER-CONFIRMED, SOURCE-DERIVED, INFERRED, UNVERIFIED or CONFLICTING.
- The recommendations prioritise current enquiries and existing pages; nothing depends on 2027 events.

## Sources (checked 22 Oct 2026)

- [Inside Aviation — Riyadh reopens but not to scheduled traffic (18 Oct)](https://insideaviation.news/saudi-arabia-riyadh-airport-reopens-but-not-to-scheduled-traffic/)
- [Arab News — Dammam's King Fahd Airport resumes normal operations (22 Oct)](https://www.arabnews.com/saudi-arabia/dammams-king-fahd-airport-resumes-normal-operations-3007672)
- [Al Jazeera — attack on King Fahd airport (22 Oct)](https://www.aljazeera.com/news/2026/10/22/one-killed-eight-injured-in-attack-on-saudi-arabias-king-fahd-airport-2)
- [Gulf Business — Riyadh airport reopens, airlines delay](https://gulfbusiness.com/en/2026/saudi-arabia/riyadh-airport-reopens-airlines-delay-saudi-services-with-some-routes-pushed-into-2027/)
- [Time Out Riyadh — Riyadh airport latest](https://www.timeoutriyadh.com/news/riyadh-airport-latest-update)
- [US Embassy security alert, 21 Oct](https://sa.usembassy.gov/security-alert-u-s-mission-to-saudi-arabia-october-21-2026/)
- [US Embassy security alert, 20 Oct](https://sa.usembassy.gov/security-alert-u-s-mission-to-saudi-arabia-october-20-2026/)
- [US Embassy travel advisory update, 10 Oct](https://sa.usembassy.gov/travel-advisory-update-saudi-arabia-october-10-2026/)
- [Ireland DFA — Saudi Arabia](https://www.ireland.ie/en/dfa/overseas-travel/advice/saudi-arabia/)
- [Smartraveller — Saudi Arabia](https://www.smartraveller.gov.au/destinations/middle-east/saudi-arabia)
- [GOV.UK — Saudi Arabia travel advice](https://www.gov.uk/foreign-travel-advice/saudi-arabia)
