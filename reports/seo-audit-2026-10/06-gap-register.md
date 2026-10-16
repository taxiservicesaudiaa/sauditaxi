# Report 6 — Prioritised Gap Register

Audit date: 16 October 2026. Every gap cites its evidence. Priority reflects **impact × confidence ÷ effort**:
- **P0** — verified problem that may be suppressing crawling or indexing, or harming conversion, now. Fix first.
- **P1** — verified gap on pages with proven lead or search evidence.
- **P2** — improvement with supporting evidence but uncertain size.
- **P3** — hygiene or speculative work; do it only after higher priorities or after evidence arrives.

"Confidence" is about the *problem*, not the size of the upside. Estimates of traffic or leads are deliberately not given (no volume data, Report 9 E10).

## A. Register

| ID | Priority | Area | Gap | Evidence | Confidence | Effort | Proposed action (requires approval) |
|---|---|---|---|---|---|---|---|
| G01 | **P0** | Crawl / rendering | robots.txt disallows `/_next/`, blocking every CSS file, JS chunk and optimised image | Live robots.txt; `app/robots.ts:9`; route-page HTML loads CSS from `/_next/static` and images from `/_next/image` (Report 2 §2.2) | High (problem); impact unverified (E12) | XS | Remove `/_next/` from `disallow` in `app/robots.ts`, deploy, then request recrawl of key URLs |
| G02 | **P0** | Availability | Transient 503s (241) and empty 200 bodies (9) on `/blog/*` and `/ar/*` during a 4-minute window at ~2 req/s | Crawl log, Report 2 §2.1 | High (occurred); cause unknown | S (investigate) | Pull Workers logs and GSC Crawl Stats (E11). Decide on a fix (e.g. Workers Paid plan CPU limits, bundle size of `ar.ts`) only after the cause is known |
| G03 | **P0** | Trust / claims | Unconfirmed "24/7" and "x/5 customer rating" claims sitewide; cross-border "we handle insurance and documentation" claims | Components listed in Report 2 §9 | High (claims present); truth unknown (E6, E5) | S | Business confirms. Remove or qualify anything not true |
| G04 | **P1** | Internal linking | The top lead page `/routes/qassim-to-riyadh` (13+3 first-landing leads, 9 pair leads) has 5 internal inlinks; the reverse has 4. Other lead routes (Doha, Bahrain, Kuwait, UAE) have 0 blog support | Crawl inlinks; leads table (Reports 2 §4, 5 §3.2) | High | S | Link from home, `/intercity-transfers`, `/taxi-service/riyadh` and `/taxi-service/buraidah`, related routes, and the Riyadh city hub. Add a "popular routes" block driven by lead evidence |
| G05 | **P1** | Coverage (airport) | 9 of 13 airport hubs have no Arabic version, including Dammam (2nd-highest first-landing page, 6 leads) and Madinah | `ar-index.ts`; crawl | High | M | Write AR hubs for Dammam and Madinah first, then the rest |
| G06 | **P1** | Coverage (Qassim) | Qassim (top lead region: 10 lead mentions, Buraidah taxi page at GSC position 9.3) connects only to Riyadh. No Qassim airport (ELQ) page; no Qassim↔RUH, Qassim↔Madinah/Makkah/Dammam routes | `data/routes.ts`, `data/airports.ts`; leads | High (gap); demand for new pairs unproven | M | Confirm which Qassim routes the business serves (E5). Then add only those, starting with Qassim↔Riyadh Airport |
| G07 | **P1** | Content support | 0 blog posts support the highest-lead corridors: Qassim↔Riyadh, Riyadh↔Doha/Qatar border, Riyadh↔Bahrain, Riyadh↔Kuwait, Riyadh↔UAE | Report 5 §3.2 | High | M | One guide per corridor (not per direction), each linking to both directions and to the border hub |
| G08 | **P1** | Blog → service links | 8 posts with no in-body commercial link; 18 linking only to generic hubs | Report 5 §4.2–4.3; `05-blog-to-service-map.csv` | High | S | Add contextual links to the matching route, airport or border page. No new URLs |
| G09 | **P1** | Conversion clarity | No published prices or "from" fares, luggage limits or cancellation policy on route pages. Competitors show them on the same corridors (§B) | Route template; competitor review | Medium-high | M (needs pricing from business) | Business decision: publish "from SAR …" per vehicle class or a price range; add luggage and cancellation facts |
| G10 | **P1** | Entity / local | Schema `telephone` and WhatsApp use a +92 (Pakistan) number; `sameAs` empty; no address and no Google Business Profile link | `lib/schema.ts`, `siteConfig`; live JSON-LD | High (facts); conversion effect inferred | S–M | Business confirms Saudi contact options (E13). Add genuine profiles to `sameAs`. **Do not invent an address or city offices** |
| G11 | **P1** | Measurement | No analytics; 135/143 leads still "New"; no lead-to-booking outcome | Report 9 E4, E8 | High | S | Choose a privacy-light analytics tool; keep lead statuses updated |
| G12 | **P2** | Performance | `/_next/static/*` served with `max-age=0, must-revalidate`; ~966 KB JS on home | Response headers; Report 2 §6 | High (headers); CWV impact unmeasured (E3) | S | Add `public/_headers` with immutable caching for `/_next/static/*`; review client JS weight later |
| G13 | **P2** | Thin content (routes) | 39 route pages under 600 words (AlUla/Tabuk/NEOM/Yanbu/Madinah/Abha corridors, `jeddah↔dammam`) | Crawl word counts | High (thinness); ranking effect unknown | M | Enrich only pages with lead, WhatsApp or GSC signals first; leave the rest until GSC shows impressions |
| G14 | **P2** | Thin content (blogs) | 15 posts under 700 words; the Sep airport batch overlaps the airport hubs | Report 5 §4.1 | High | M | Expand, or merge into the hub with a 301. Decide per post after E1 |
| G15 | **P2** | Time-sensitive content | 3 past-dated posts; 7 event posts need status checks; 2 live advisories (12 and 14 Oct) | Report 5 §4.4 | High | S | Update or retitle. Add "last checked" dates. Re-verify events (E9) |
| G16 | **P2** | Cannibalisation risk | JED→Makkah intent spread over 4 commercial pages and ≥5 blogs; Jeddah↔Madinah over 4 pages | Report 4 §A, Report 5 §3.3 | Medium (needs E1) | S to diagnose | Pull query→page data from GSC before consolidating anything |
| G17 | **P2** | Business / tours | No national or Riyadh business-travel page (Riyadh = 55 lead mentions); hourly and tour pages exist only for Jeddah | Report 4 §F | Medium | M | Riyadh executive/hourly page only if the business offers it |
| G18 | **P2** | Arabic blogs | 67 of 125 posts have no Arabic version, including all pilgrim-guide categories | Report 5 §4.6 | High (gap); demand unproven | L | Wait for Arabic query data (E1); start with posts that already have EN impressions |
| G19 | **P3** | Security headers | No CSP, X-Content-Type-Options, Referrer-Policy; 1-day HSTS; `x-powered-by` exposed | Report 2 §7 | High | XS–S | Add basic headers; `poweredByHeader: false` |
| G20 | **P3** | Schema hygiene | Blog FAQPage JSON-LD on only 54/125 posts (from the DB `schema_json`); Event markup on third-party event guides; LocalBusiness without address | Report 2 §5 | High | S | Generate FAQPage from the visible FAQs; reconsider Event markup |
| G21 | **P3** | International | No `x-default` hreflang | Crawl | High | XS | Add `x-default` → EN for pairs |
| G22 | **P3** | Metadata length | 52 EN + 34 AR titles > 60 chars; 83 descriptions > 160 | Crawl | High | S | Trim only on pages with impressions |
| G23 | **P3** | Blog taxonomy | 16 overlapping categories for 125 posts | Report 5 §1 | High | S | Consolidate to ~6 |
| G24 | **P3** | Click-to-call | 0 `tel:` links | Crawl | High | XS | Add only if the business wants calls (currently WhatsApp-first) |
| G25 | **P3** | AEO | No `/llms.txt`; no machine-readable price or policy facts | Live 404 | High (absent); value unproven | XS | Optional after G09 |

## B. Competitor benchmark (web search, 16 Oct 2026; US-based results, not Saudi SERPs)

| Corridor | Who appears | What they publish that this site does not |
|---|---|---|
| Riyadh ↔ Doha | Daytrip (`/transfers/riyadh-sa/doha-qa`, "from US$153 per person", 584 km, 6 h 10 min, free cancellation up to 24 h), 12go, Transfeero, Rome2Rio | Price anchor, cancellation window |
| Dammam ↔ Bahrain / BAH airport | Daytrip ("from US$36 per person", ~83 km, flight tracking), Bookaway (private transfer "from US$319"), Rome2Rio, Marriott Activities | Price anchor, flight tracking statement |
| Qassim ↔ Riyadh | Only Rome2Rio route pages (taxi+train SAR ~650–1,100; train 2 h 37 m, SAR 80–160; bus ~5.5 h) — **no dedicated private-transfer competitor page surfaced** | Train comparison: the SAR train is the main substitute and the site does not address it |
| Dubai ↔ Riyadh | Airssist (chauffeur service page) | — |

Reading: the site's strongest lead corridor (Qassim↔Riyadh) appears to have little dedicated competition, which is consistent with it producing leads at position ~9.6. On Gulf cross-border corridors, the competitors that rank are aggregators with explicit prices and policies. The prices above are as published by those third parties on the search date; they were not verified further.

## C. Search performance evidence (GSC export 3 Jun – 6 Aug 2026 only)

- Total: 74 clicks, 6,982 impressions. Saudi Arabia 2,932 impressions (34 clicks); mobile 53 of 74 clicks.
- **Long-tail regional pages rank; head terms do not.**
  - `/taxi-service/najran` 7 clicks at position 8.3; `/airport-transfer/hail-airport` 3 at 9.8; `/taxi-service/jazan` 2 at 10.0; `/routes/al-khobar-to-doha` 2 at 14.8; `/routes/tabuk-to-riyadh` 2 at 9.6.
  - Versus `/umrah-taxi-service` at position 83, `/ziyarat-taxi-service` 82, `/routes/jeddah-to-makkah` 74, `/airport-transfer/madinah-airport` 60 with 170 impressions, `/taxi-service/dammam` 65.
- Highest-impression queries are head terms where the site sits at position 60–95 (`makkah ziyarat taxi` 92 impressions at position 84, `airport transfers saudi arabia` 72 at 78, `umrah airport transfer` 44 at 89).
- This export predates the Cloudflare migration and every October change. **It is directional only (E1).**
