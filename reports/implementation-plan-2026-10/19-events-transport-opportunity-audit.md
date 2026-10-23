# Upcoming events — transport SEO opportunity audit

**19 October 2026. Research and proposal only.** No code, content, database or production change was made. Database access was read-only: the `blogs` and `leads` tables, with no personal fields requested.

**Research window:** 19 October 2026 – 17 January 2027 (90 days).

## 0. Headline findings

1. **Live security conditions dominate every recommendation.** The current picture:
   - Riyadh King Khalid Airport (RUH) was attacked on 10 and 11 October 2026, and Dammam was attacked on 11 October.
   - Sources still disagree on 18–19 October about whether RUH has reopened. Time Out Riyadh says it was still closed on 19 October; Wego and Karmactive report reopening from 18 October.
   - **UK FCDO:** the GOV.UK page current at 12 October advises against all but essential travel to Riyadh Province, Jeddah, Dammam and every Saudi airport except Madinah. Press reports say it has since been widened to the whole country.
   - **US State Department:** Level 3, "Reconsider Travel", with Level 4 areas.
   - Several events have already been postponed or cancelled.

   **Recommendation: no active event-booking promotion while these advisories stand.** Prepare content now and publish it behind status gates (§5).
2. **Event content has produced no measurable demand.**
   - The site has 17 event-related posts.
   - From 16 July to 15 October only two appeared in Search Console: the Jeddah Season guide (28 impressions) and the Riyadh Season guide (4), both with 0 clicks.
   - Of 167 enquiries, only **1** has an event signal, and **none** has a blog page as its first landing page.
   - More event pages are therefore not justified by volume alone.
3. **Existing event posts carry stale or wrong facts.** This should be fixed before anything new is published (§3).
4. **The strongest genuine new gap is the AFC Asian Cup Saudi Arabia 2027.**
   - Dates: 7 January – 5 February 2027.
   - Cities: Riyadh, Jeddah and Khobar, all served by the business.
   - The site has no Asian Cup content.
   - The tournament is multi-city and includes five GCC teams plus Jordan, Iraq, Yemen, Syria and Palestine, so fans may travel by road on routes the site already serves.
   - Its status is **conditional**. The local organising committee said on 15 October that it is "on schedule". The AFC president said a move to 2028 is possible and a decision could wait until the end of November.

## 1. Existing website audit

| Asset | State | Finding |
|---|---|---|
| Event posts (Supabase `blogs`, all `published`) | 17 event-related | All are informational blogs; there is no event route type. Arabic counterparts exist for at least the Crown Jewel and F1H2O posts (sitemap hreflang). |
| Search Console (Top-pages, 16 Jul – 15 Oct) | 2 event URLs appear | Jeddah Season 0 clicks / 28 impressions; Riyadh Season 0 / 4. No event-specific post appears. |
| Enquiries | 167 rows | 1 event-signal enquiry: Doha → a Riyadh convention-centre hotel, travelling 11 Oct, landing page `/routes/doha-to-riyadh`. 0 enquiries with a blog first-landing page. |
| Five posts with `published_at` = null | WWE Crown Jewel, Black Hat MEA, Gulf Cup 27, WRC Rally, F1H2O | Their BlogPosting JSON-LD omits `datePublished`, and the page shows `createdAt`. A data fix is needed (separate approval). |
| Supporting commercial pages | Present | Routes: Riyadh ↔ Jeddah, Riyadh ↔ Khobar/Dammam, Jeddah ↔ Dammam, Jeddah Airport → Riyadh, Dammam Airport → Khobar/Riyadh, Kuwait City ↔ Riyadh/Dammam, Bahrain ↔ Riyadh/Khobar/Dammam, Doha ↔ Riyadh, UAE ↔ Riyadh/Dammam/Jeddah. Airport hubs: Riyadh, Jeddah, Dammam. Border hubs: Bahrain, Qatar, UAE, Kuwait, Jordan. |
| Gaps in route coverage | — | No Khobar ↔ Jeddah route (Dammam ↔ Jeddah exists); no Kuwait City ↔ Khobar route (Kuwait City ↔ Dammam exists). |

## 2. Event research — candidates in the window (verified 19 Oct 2026)

| # | Event | City / venue | Dates | Organiser / source | Status (19 Oct) | Transport intent | Existing page |
|---|---|---|---|---|---|---|---|
| E1 | **AFC Asian Cup Saudi Arabia 2027** | Riyadh: King Fahd Sports City (opener and final), King Saud University, Kingdom Arena, Imam Mohammad Ibn Saud University, Al Shabab. Jeddah: King Abdullah Sports City, Prince Abdullah Al Faisal. Khobar: Aramco Stadium | 7 Jan – 5 Feb 2027 (group stage from 7 Jan) | AFC / Saudi LOC ([SPA](https://www.spa.gov.sa/en/w2238680); [France 24, 16 Oct](https://www.france24.com/en/live-news/20261016-saudi-organisers-say-2027-asian-cup-on-schedule-after-attacks)) | **Confirmed by LOC, "on schedule" (15 Oct). AFC: a 2028 move is possible; decision by about end of November** | Airport arrivals, hotel ↔ stadium, **intercity between host cities** (Group A plays in Riyadh, Khobar and Jeddah), **cross-border road travel by GCC fans** (Kuwait, Bahrain and Oman in Groups A/B; UAE in E; Qatar in F) | **None — a gap** |
| E2 | Riyadh Season 2026 | Riyadh, multiple zones | Opens 21 Oct; about 10 weeks | GEA ([SPA, 26 Sep](https://www.spa.gov.sa/en/N2686677)) | Announced. **Not re-confirmed after the attacks.** One unverified analysis says GEA is weighing changes ([House of Saud](https://houseofsaud.com/riyadh-events-calendar-under-fire/)) | Hotel ↔ zones, airport | `/blog/riyadh-season-transport-guide` (needs updating, not a new URL) |
| E3 | WWE Crown Jewel | Riyadh Season Stadium, KAFD | 7 Nov 2026 | WWE ([corporate.wwe.com](https://corporate.wwe.com/about/news/2026/09-01-2026)) | **Unverified for the date:** officially unchanged, but there are reports of a US backup city ([F4W](https://www.f4wonline.com/news/wwe/wwe-crown-jewel-2026-still-planned-for-riyadh-backup-us-city-on-the-table-exclusive/); [Slam Wrestling](https://slamwrestling.net/news/wwe-crown-jewel-2026-status-update-amid-saudi-arabia-security-concerns/)) | Airport, hotel ↔ venue | `/blog/wwe-crown-jewel-riyadh-transfer`: no status note; date unsourced |
| E4 | AlUla Skies Festival 2026 | AlUla (Hegra, AlUla Fort, Elephant Rock) | 6–15 Nov 2026 | Experience AlUla / AlUla Moments ([SPA](https://www.spa.gov.sa/en/N2689058); [Arab News](https://www.arabnews.com/saudi-arabia/alula-skies-festival-returns-in-november-with-balloons-stargazing-and-night-sky-events-3003888)) | Confirmed (pre-event announcements). No post-attack change found | AlUla airport, Madinah → AlUla, hotel ↔ sites | `/blog/alula-skies-festival-2026-travel-guide` (sourced; updated 14 Oct) |
| E5 | Rally Saudi Arabia (FIA Middle East Rally Championship only) | Jeddah | 11–14 or 12–15 Nov (sources conflict) | FIA ([FIA notice](https://www.fia.com/news/fia-and-wrc-promoter-confirm-final-round-2026-fia-world-rally-championship)); [The National, 18 Sep](https://www.thenationalnews.com/sport/2026/09/18/wrc-final-round-moved-from-saudi-arabia-to-italy-amid-middle-east-unrest/) | **Changed:** removed from the WRC calendar on 18 Sep; runs as a regional round | Lower; regional | `/blog/wrc-rally-saudi-arabia-transfer`: **factually wrong** (calls it the WRC season-deciding final round) |
| E6 | F1H2O Grand Prix of Jeddah | Jeddah waterfront | 26–28 Nov (aggregator only) | H2O Racing ([2026 calendar](https://f1h2o.com/post/kyrgyzstan-included-for-first-time-ever-as-full-2026-uim-f1h2o-calendar-is-announced)) | **Unverified dates** — the official calendar says only "November" | Hotel ↔ waterfront | `/blog/f1h2o-jeddah-grand-prix-transfer` (dates and venue unsourced) |
| E7 | Black Hat MEA 2026 | Riyadh Exhibition & Convention Center, Malham | 1–3 Dec 2026 | Tahaluf ([blackhatmea.com](https://blackhatmea.com/about-us-blackhat-mea)) | Confirmed on the official site; no postponement found. Riyadh advisories apply | Airport, hotel ↔ Malham (about 30+ km outside the city; distance unverified) | `/blog/black-hat-mea-riyadh-transfer` (no sources) |
| E8 | Six Kings Slam | Riyadh | Moved from Oct to Dec (exact dates unknown) | Reported ([Cyprus Mail, 17 Oct](https://cyprus-mail.com/2026/10/17/asian-cup-remains-on-track-but-golf-and-cycling-events-affected-after-riyadh-attack)) | **Changed; dates unverified** | Hotel ↔ venue | None |
| E9 | Winter at Tantora 2026–27 | AlUla | Not announced (last edition 18 Dec 2025 – 10 Jan 2026) | Experience AlUla | **Unverified** | AlUla transfers | None |

**Excluded (not active):**
- PIF Saudi International golf, 18–21 Nov: postponed indefinitely ([Haaretz, 16 Oct](https://www.haaretz.com/middle-east-news/2026-10-16/ty-article/flagship-saudi-golf-tournament-postponed-after-deadly-riyadh-airport-attack/000001a1-4375-d1eb-abe1-777d30530000)).
- Urban Cycling World Championships, 3–7 Nov: cancelled.
- FIFAe Finals in Jeddah: postponed.
- Soundstorm, and Riyadh Fashion Week moved to 2027: single-source reports only.
- Gulf Cup 27: completed on 6 Oct (Saudi Arabia beat the UAE 2–0) ([Gulf News](https://gulfnews.com/sport/football/saudi-arabia-clinch-27th-arabian-gulf-cup-1.500700989)).
- Saudi Arabian Grand Prix: 19–21 March 2027, outside the window; a post already exists.

## 3. Content-gap findings (fix existing pages before creating new ones)

| Page | Problem | Proposed action (separate approval; database edit) |
|---|---|---|
| `/blog/wrc-rally-saudi-arabia-transfer` (+ Arabic version if present) | Says WRC "season-deciding final round"; the WRC dropped it on 18 Sep. Dates conflict | Correct it to the MERC regional round, cite the FIA, and show the date as "11–14 or 12–15 Nov — confirm with the organiser" until verified |
| `/blog/wwe-crown-jewel-riyadh-transfer` (+ AR) | No status note while relocation is reported; no sources | Add a dated status line and official links; remove booking urgency until confirmed |
| `/blog/gulf-cup-27-jeddah-transfer` | Event finished on 6 Oct; post still reads as upcoming | Turn it into a past-event note, or keep it with a "concluded" note. **No removal or redirect without approval** |
| `/blog/f1h2o-jeddah-grand-prix-transfer` (+ AR) | Dates and venue unverified against the official calendar | Mark dates as unconfirmed until H2O Racing publishes them |
| `/blog/black-hat-mea-riyadh-transfer` | Dates correct but unsourced | Add the official source; add a travel-advice line |
| `/blog/riyadh-season-transport-guide` | Says dates are "announced closer to the season" — the 2026 opening (21 Oct) is now announced | Add 2026 dates with the GEA source and a status line |
| Five posts with `published_at` null | No `datePublished` in structured data | Set `published_at` to the actual first-publication date (from records) |

## 4. Ranking

Scores run from 1 (worst) to 5 (best). For risk and overlap, 5 means *low* risk or overlap.

| Event | Demand | Lead intent | Time to publish | Intent specificity | Real gap | Service fit | Change risk (5 = low) | Overlap (5 = none) | **Total /40** |
|---|---|---|---|---|---|---|---|---|---|
| **E1 AFC Asian Cup 2027** | 5 | 5 | 4 | 4 | 5 | 5 | 2 | 5 | **35** |
| E4 AlUla Skies (improve existing) | 3 | 4 | 2 | 4 | 1 | 4 | 4 | 1 | 23 |
| E7 Black Hat MEA (improve existing) | 3 | 4 | 3 | 4 | 1 | 4 | 3 | 1 | 23 |
| E2 Riyadh Season (improve existing) | 4 | 3 | 4 | 2 | 1 | 4 | 2 | 1 | 21 |
| E3 WWE Crown Jewel | 3 | 4 | 1 | 4 | 1 | 4 | 1 | 1 | 19 |
| E5 Rally Saudi (MERC) | 1 | 2 | 2 | 3 | 1 | 4 | 2 | 1 | 16 |
| E6 F1H2O Jeddah | 2 | 2 | 2 | 3 | 1 | 4 | 2 | 1 | 17 |
| E8 Six Kings Slam / E9 Winter at Tantora | — | — | — | — | — | — | 1 | — | Excluded until dates are verified |

Demand scores are judgments based on event scale, the multi-city format and cross-border fan travel. They are not measured search volumes; the GSC Queries export is still missing.

**Why E1 beats the alternatives:**
- It is the only candidate with a genuine content gap.
- It is the only one whose format creates intercity and cross-border trips — the routes that are the business's core product — rather than a single hotel-to-venue run.
- It is 11 weeks away.
- Its main risk (postponement) has a known decision point at the end of November, which lets publication be gated cleanly.

## 5. Recommended proposal — AFC Asian Cup Saudi Arabia 2027 transport guide

**Format:** an **informational blog that supports the existing route, airport and border pages.** Not a durable "events transport" hub (no evidence yet that event pages produce enquiries), and not a commercial event landing page (the commercial intent already belongs to the route pages).

**Go/no-go gates before publication:**
1. The AFC/LOC confirms January 2027 after the end-of-November decision, with the official match schedule (fixture → venue → date) re-verified.
2. **Owner confirmation:**
   - airport and stadium-area pickups and drop-offs on match days in Riyadh, Jeddah and Khobar;
   - cross-border pickups from Kuwait, Bahrain, Qatar and the UAE for fans;
   - RUH, JED and DMM operating status.
3. Travel-advice review on the publication date. If the FCDO and US advisories still advise against travel, publish only with a prominent official-advice notice and no urgency language — or hold.

**English:**
- **URL:** `/blog/afc-asian-cup-2027-saudi-arabia-transport-guide` (unused; checked against `blogs` and the sitemap).
- **Title:** "AFC Asian Cup 2027 in Saudi Arabia: Getting Between Riyadh, Jeddah and Khobar"
- **Meta description (≈150 characters):** "Travelling to the AFC Asian Cup 2027? Host cities, stadiums, airports and how to arrange private transfers between matches. Check official updates first."
- **Primary intent:** "how do I get to and between Asian Cup host cities and stadiums". Supporting: stadium names plus "how to get there"; "Kuwait/Bahrain to Riyadh/Khobar by road for the Asian Cup".
- **Audience:** GCC and Middle East fans travelling by road or air; international fans arriving at RUH, JED or DMM; families and groups.

**Outline:**
1. **Short answer.** Dates, three host cities, eight stadiums; "check the AFC and your airline before travelling". Status line with a "last verified" date.
2. **Host cities and stadiums.** A table from the official AFC/SPA list, with each stadium linked to its city's airport and route pages.
3. **Which teams play where.** Group → city (from the official schedule only); highlights Group A's Riyadh–Khobar–Jeddah spread.
4. **Arriving by air.** RUH, JED, DMM and current operating status (official links); links to the three airport hubs.
5. **Travelling between host cities.** Riyadh ↔ Jeddah, Riyadh ↔ Khobar/Dammam, Jeddah ↔ Dammam. Links to route pages; **no distances or durations unless verified**; mentions that SAR rail links Riyadh and Dammam (check SAR).
6. **Driving in from GCC countries.** Kuwait, Bahrain (causeway), Qatar (Salwa), UAE (Batha). Links to border hubs and routes; neutral wording on border requirements (as agreed for Bahrain).
7. **Match-day planning.** Agree drop-off and pickup points in advance; stadium road closures follow official guidance (link only if an official source exists).
8. **Booking a private transfer.** What to send (cities, match date, hotel, passengers, luggage, flight number); "your confirmed quotation sets the price and what it covers".
9. **FAQs** (below).
10. **Official sources and safety advice:** AFC, LOC/SPA, GACA, the airlines, FCDO and US travel advice.

**FAQs** (answers only from verified facts or owner-confirmed policy):
- When and where is the AFC Asian Cup 2027?
- Which stadium hosts the opening match and the final? (Official: King Fahd Sports City, Riyadh.)
- Can I travel between Riyadh, Jeddah and Khobar during the tournament by private car?
- Can you pick us up in Kuwait / Bahrain / Qatar / the UAE and drive us to a match city? (Only after owner confirmation.)
- Can you collect us from the stadium after the match? (Only after owner confirmation of match-day pickups.)
- How do I request a quote, and what does it include?
- What happens if the tournament schedule changes? (Changes follow the AFC; contact us to adjust; no refund or fee promise unless the policy is confirmed.)

**Internal links (existing URLs only):**
- **Routes:**
  - `riyadh-to-jeddah`, `jeddah-to-riyadh`, `riyadh-to-khobar`, `khobar-to-riyadh`, `jeddah-to-dammam`, `dammam-to-jeddah`
  - `kuwait-city-to-riyadh`, `kuwait-city-to-dammam`, `bahrain-to-riyadh`, `bahrain-to-khobar`, `doha-to-riyadh`, `dubai-to-riyadh`
- **Airport hubs:** `/airport-transfer/riyadh-airport`, `/airport-transfer/jeddah-airport`, `/airport-transfer/dammam-airport`
- **Border hubs:** `/border-transfers/kuwait-border`, `/border-transfers/bahrain-causeway`, `/border-transfers/qatar-border`, `/border-transfers/uae-border`
- **Inbound:** the Riyadh, Jeddah and Khobar city hubs, and the Riyadh Season guide (contextual link, after approval)

**Quote CTA:** `/get-quote` with a match-city pre-fill where the form supports it. Text: "Tell us your match dates, cities, hotel and passenger count — we reply with a quotation; the confirmed quotation sets the price and what it covers." No "fixed price", availability or response-time promise.

**Arabic:**
- Produce an independent Arabic edition; GCC and Arab fans are the core road-travel audience.
- Slug following the existing pattern, e.g. `/ar/نقل-كأس-آسيا-2027-السعودية` (to be confirmed against the blog routing at implementation).
- Arabic terminology: "كأس آسيا 2027"; stadium names as officially written.
- Native-speaker review is required.

**Structured data:** BlogPosting with `datePublished` set (unlike the five undated posts), and FAQPage only for visible FAQs. Use **no `SportsEvent` markup** unless the page carries the verified official schedule and status, and remove or update it if the event moves.

**Measurement:**
- Baseline: 0 event-signal enquiries; 0 blog first-landing enquiries.
- Track: GSC and Bing impressions for the URL; clicks from the guide to the linked route pages; enquiries whose `first_landing_page` is the guide; referrers (bing.com, chatgpt.com, perplexity.ai).
- Report English and Arabic separately.
- No forecast of traffic, citations or leads.

## 6. Owner and evidence questions

1. Match-day service in Riyadh, Jeddah and Khobar (stadium-area pickups and drop-offs; late-night returns)?
2. Cross-border pickups for fans from Kuwait, Bahrain, Qatar and the UAE in January?
3. Are you accepting RUH, JED and DMM airport jobs now? (RUH remains unverified.)
4. Do you want event content published at all while the FCDO and US advise against travel? This is an owner judgment; the recommendation is to prepare now and gate publication.
5. The GSC Queries export, so event query demand can be measured rather than inferred.

## 7. Approval items (separate)

| Item | Type |
|---|---|
| A. Fix the existing event posts (§3) | Database content edits + Arabic counterparts |
| B. Draft the Asian Cup guide (EN + AR) for owner review; **publication held until the §5 gates pass** | New blog record (draft) |
| C. Set `published_at` on the five undated posts | Database data fix |

Nothing is implemented. Deployment, where needed (the blog requires a deploy to publish), is a separate approval.
