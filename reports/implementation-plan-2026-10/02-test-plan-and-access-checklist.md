# Test Plan and Access Checklist (for approval)

Companion to `01-implementation-plan.md`. Prepared 16 October 2026; **Revision 2** (same day) updates the claim, rating, cross-border, contact and schema tests for the confirmed business decisions. Technical regression tests (§1, T-A*, T-B*, T-AR/T-D, T-CONV) and the baseline (§3) are unchanged. Nothing here has been run against a changed site; these are the checks that **will** be run before and after each approved change. A change is not reported as fixed until its "after" checks pass on production.

Rendered-text checks below use the read-only crawler on the live (or preview) site and search the **visible text and JSON-LD of rendered HTML**, so they test what users and crawlers see, not just source files.

## 1. Standard checks for every code change (T-STD)

| # | Check | Command / method | Pass criterion |
|---|---|---|---|
| S1 | Typecheck | `npx tsc --noEmit` | 0 errors |
| S2 | Lint | `npm run lint` | 0 new errors vs the baseline. **Baseline recorded 16 Oct (`9098f18`): 10 problems — 6 errors (`app/(main)/[city]/[route]/page.tsx:385`, `components/quotation/QuotationClientActions.tsx:63`, `components/sections/LatestGuides.tsx:42`, `components/sections/SitemapSearch.tsx:47`, `:65`, `components/sections/StatsBand.tsx:23`) and 4 unused-variable warnings.** `npm run lint` therefore exits 1 before any change; a change passes S2 if the set of problems is unchanged (or smaller) |
| S3 | Build | `npm run build` (runs `prebuild`) | Succeeds; page count matches baseline (896 indexable + admin/api) |
| S4 | Arabic index | `npm run check:ar-index` | Pass (required whenever `ar.ts` changes) |
| S5 | Arabic 500 regression | `npm run check:ar-500` (production after deploy; `BASE_URL=` for preview) | All 6 URLs 200 |
| S6 | Status/redirect sample | curl of 20 fixed URLs (home EN/AR, 5 routes incl. `qassim-to-riyadh` EN+AR, 3 airport hubs, 2 border hubs, 2 blogs, `/get-quote`, `/ar/اطلب-عرض-سعر`, 3 retired hotel URLs, `http://`, `www.`) | 200s stay 200; 301/308s unchanged and point to the same targets |
| S7 | Canonical/hreflang sample | Same 20 URLs: parse `<link rel=canonical>` and `hreflang` | Identical to baseline (unless the change is E8) |
| S8 | Full read-only crawl (after template/data changes) | Audit crawler (GET-only, 2 concurrency, 300 ms), records `CF-Ray` | 896/896 clean URLs 200; 0 duplicate titles/H1; 0 canonical mismatches; 0 non-reciprocal hreflang; sitemap 895 and equal to the HTML hreflang alternates |
| S9 | Rendering | Desktop (1280 px) and mobile (390 px) screenshots of home EN/AR, one route EN/AR, one airport hub, one blog, `/get-quote` — before vs after | No visual differences outside the intended change; RTL intact on AR |
| S10 | Deploy health | After deploy: `x-nextjs-cache: HIT` on the sample; Cloudflare Workers errors graph for 30 min | No rise in 5xx vs the previous 24 h |

## 2. Change-specific tests

### T-A1 — robots.txt (G01)
| When | Check | Pass |
|---|---|---|
| Before | `curl -s https://saudiprivatetransfers.com/robots.txt` saved | Contains `Disallow: /_next/` (baseline) |
| After | Same | `Disallow: /api/` and `Disallow: /admin/` present; **no** `/_next/` line; `Sitemap:` line unchanged |
| After | Google robots.txt report in GSC (Settings → robots.txt) | Fetched version shows the new file |
| After | GSC URL Inspection → Test live URL for `/` and `/routes/qassim-to-riyadh` | Screenshot styled; "Page resources" has no blocked CSS/JS/image entries (E12) |
| After | Admin/API still blocked | `/admin/` and `/api/` disallowed |
| +14 days | Workers requests/day and Images transformations vs baseline | Within Free plan limits (R2) |

### T-A2 — static asset caching (G12)
| When | Check | Pass |
|---|---|---|
| Build | `.open-next/assets/_headers` exists after the OpenNext build | Present |
| Preview | `curl -sI` on one `/_next/static/chunks/*.js`, one `*.css`, one `/images/*` | JS/CSS: `public, max-age=31536000, immutable`; images: `public, max-age=604800` |
| Production | Same three + HTML for `/`, one route, one AR page | Assets as above; **HTML `Cache-Control` unchanged** (`s-maxage=31536000`, no `immutable`, no `max-age` added) |
| Production | Browser hard reload then normal reload of `/` | Second load serves JS/CSS from cache (DevTools "memory/disk cache") |

### T-A4/A5 — reliability investigation (G02)
| Check | Pass |
|---|---|
| Workers Logs visible in the dashboard after A4 | Requests appear with outcome and CPU time |
| Reproduction crawl records `CF-Ray` for every non-200 | 100% of failures matched to a log entry with an outcome (e.g. `exceededMemory`, `exceededCpu`, `exception`) — or 0 failures across a full crawl, which is recorded as "not reproduced", **not** as "fixed" |
| Any later fix (A6) | Re-run the same reproduction: 0 × 5xx and 0 empty 200 bodies across 1,230 requests, twice, on different days |

### T-A7 — security headers (G19)
| Check | Pass |
|---|---|
| `curl -sI /` | `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, no `x-powered-by` |
| WhatsApp, quote form (non-submitting check, see T-CONV), admin login page load | No console errors related to headers |

### T-B1 — internal links (G04)
| Check | Pass |
|---|---|
| Crawl inlink counts | `/routes/qassim-to-riyadh` and `/routes/riyadh-to-qassim` ≥ 20 inlinks (from 5/4); each of `riyadh-to-bahrain`, `riyadh-to-doha`, `doha-to-riyadh`, `riyadh-to-kuwait-city`, `dammam-to-riyadh` ≥ 15 |
| New links | Every new link returns 200 (no redirects, no 404s); AR pages link to AR routes, EN to EN |
| Layout | S9 screenshots of `/`, `/intercity-transfers`, `/taxi-service/riyadh`, border hubs — grids wrap correctly at 390 px |

### T-B6 — Supabase blog edits (G08, G15)
| When | Check | Pass |
|---|---|---|
| Before | Export each target row (`slug`, `content`, `updated_at`) to a local backup outside the repo | File per row exists |
| Before deploy | List rows with `updated_at` after the last deploy | Only the intended rows |
| After deploy | For each edited post: the new links are present in the live HTML and return 200 | 100% |
| After deploy | Re-run the blog link analysis | Zero-commercial-link posts 8 → 0 (B6); generic-only 18 → 0 (B7) |
| B8 | Each factual statement in advisories/event posts has a cited official source dated ≤ 7 days before publishing | 100% |

### T-C (common to every claim batch, G03)
| Check | Pass | Fail |
|---|---|---|
| Diff scope | Only lines listed in the batch's CSV rows (`03-…csv` / `04-…csv`) change | Any other line changed |
| Titles, H1s, slugs, meta titles | Unchanged unless the claim is inside them and the diff lists it | Unlisted change |
| Arabic batches | Written native-speaker sign-off per batch | Missing sign-off |
| Standard checks | S1–S9 pass | Any failure |

### T-C-SUPPORT — 24/7 and availability wording (C4a–C4d)
| When | Check | Pass | Fail |
|---|---|---|---|
| Before | Re-run `classify2` worklist; record counts (baseline: S1 20, S2 50, S3 266, S4 32, S5 43, S6 2) | Counts recorded | — |
| After C4a (Rev. 3 scope) | Rendered-text search on all 896 URLs for outcome-guarantee patterns: `never leaves you stranded`, `arrivals are no problem`, `are no problem — we run 24/7`, and the reviewed AR sentence at `ar.ts:27567` | **0 matches** (or the AR sentence matches its approved revision) | ≥ 1 unapproved match |
| After C4a | Each reworded sentence still states 24/7 operation / flight tracking | 100% | Availability statement lost |
| After C4a | Availability claims confirmed in Rev. 3 are **not** removed: count of S3 lines (266) and the 25 retained "regardless of … arrival time" / "same standard at any hour" lines unchanged | Unchanged | Any accidental removal |
| Homepage labels (C4b, Rev. 3: no change) | "24/7 availability" on home hero and trust strip | Unchanged | Changed without approval |
| All | Rendered-text search for `instant confirmation`, `immediate response`, `guaranteed driver`, `driver always available`, `تأكيد فوري`, `سائق مضمون` | **0 matches** (baseline: 0) | ≥ 1 match |
| All | S1/S2 support and booking claims | Count unchanged (70) unless an edit was approved | Accurate support claims removed |
| After C4d | Each retained third-party hours statement (crossings, airports) has an entry in the source register: official URL, access date ≤ 7 days before deploy, quote of the relevant text | 100% of retained S5 lines | Any retained line without a source |
| After C4d / B8 | AR night-arrival guide no longer states RUH operates 24/7 while the Riyadh closure advisory is live (or both carry the same dated status) | Consistent | Contradiction remains |

### T-C-RATING — customer rating (C3a, C3b)
| When | Check | Pass | Fail |
|---|---|---|---|
| Before C3a-ii | Trustpilot evidence pack received: profile URL for the business, current TrustScore/stars, review count, date, screenshot, and the score-displaying widget type permitted on the account (Trustpilot Business) | All items present | Any missing → C3a-ii does not ship |
| Before C3a-ii | Cross-check: the profile URL is `trustpilot.com/review/saudiprivatetransfers.com` (or the URL supplied) and shows the business's own name/domain; screenshot ≤ 7 days old | Match | Mismatch |
| After C3a-i | Rendered-text search for the testimonial-derived figures on `/`, `/about`, `/ar`, AR about: "Customer rating" stat, "Rated 5.0 / 5", the `x/5` badge | **No score derived from `data/testimonials.ts`** anywhere | Any testimonial-derived number |
| After C3a-ii (Rev. 3: official live widget only) | The widget loads from `widget.trustpilot.com` with the business's own TrustBox configuration and renders Trustpilot's own score; no hard-coded score or count in HTML or source; widget shows a fallback link (not a fabricated score) if the script is blocked | Score rendered by the widget only | Hard-coded or static score |
| After C3a-ii | Page layout/CLS: widget container has reserved space; no console errors | No layout shift visible; 0 errors | Layout shift or errors |
| After C3a | JSON-LD on all pages contains **no** `aggregateRating` or `Review` | 0 occurrences (baseline: 0) | ≥ 1 |
| After C3b | Testimonials shown only if the owner confirmed them as genuine; if from the platform, attributed to it | Confirmation on file | Unconfirmed quotes shown |

### T-C-XB — cross-border wording (C2a–C2e)
| When | Check | Pass | Fail |
|---|---|---|---|
| Before | Record baseline classes from `04-cross-border-claim-inventory.csv` (X1 71: fee-inclusion 7, handles insurance/toll 9, arranges paperwork 41, already correct 11, other 3; X3 34) | Recorded | — |
| After C2a | Rendered-text search EN+AR: `arranged as part of the fixed price`, `no separate fees to settle`, `nothing extra to settle at the border`, `toll .{0,40}included` (as an unconditional statement), `مشمولة في السعر`, `لا رسوم إضافية` (in border context) | **0 matches** (Rev. 3: no blanket inclusion is allowed — fees vary by route/quote) | ≥ 1 match |
| After C2a | Every EN/AR FAQ or paragraph about tolls/border fees (incl. "Is the causeway toll included in the price?", `routes.ts:9417`, `ar.ts:11205`) states that fees vary by route and the **confirmed quotation** controls | 100% of the 7 lines + any found in review | Any unconditional yes/no |
| After C2b/C2c | Rendered-text search: `which we handle`, `both of which we handle`, `we handle the toll`, `paperwork arranged when you book`, `documentation \(arranged when you book\)`, `we arrange the appropriate paperwork`, and AR equivalents (`نتولى`, `نرتب الأوراق`, `تُرتَّب عند الحجز` in border context) | **0 matches** | ≥ 1 |
| After C2b/C2c | Every cross-border route page (47 EN + 47 AR) states the coordination position at least once (business coordinates vehicle/driver; passenger and driver confirm documents, insurance, permits, fees) | 94/94 | Any missing |
| After C2d | Each retained country-specific requirement (insurance, visa schemes, biometrics, vehicle-age limits, fee amounts) has a source-register entry: official authority URL, access date, quoted text, page(s) using it | 100% of retained X3 statements | Any unsourced statement |
| After C2e | Caution line present on every cross-border page and border hub (EN+AR) | 99/99 (47 EN + 47 AR routes + 5 EN hubs; 104/104 once D4 adds AR hubs) | Missing |
| All | Model wording lines (11 "already correct") unchanged | Unchanged | Changed without approval |

### T-CONTACT — contact identity (C5, C6)
| Check | Pass | Fail |
|---|---|---|
| WhatsApp links (`wa.me/923148932631`) on all pages | Identical to baseline | Number changed |
| JSON-LD `telephone` | `+92 314 8932631` on Organization (and on any node that keeps it) | Different or `+966` value |
| Business contact fields in HTML and JSON-LD | No `+966` business number, no street address, no Saudi office text, no Google Business Profile link. The quote-form placeholder `+966 5X XXX XXXX` (customer field) is allowed | Any business `+966`/address/office/GBP |
| Email | `taxiservicesaudiaa@gmail.com` unchanged in footer, contact, legal pages, schema | Changed |
| `twitter:site` (Rev. 3a — `@sauditaxi` not owned) | Before C5b: unchanged (no unapproved edits). After C5b: no `twitter:site` meta on any crawled page; `twitter:card` still present; rendered-text and source search for `@sauditaxi` / `twitterHandle` returns 0 | `@sauditaxi` present after C5b, or `twitter:card` lost |
| X/Twitter in structured data | No `x.com`, `twitter.com` or `@sauditaxi` value in any JSON-LD (baseline 16 Oct: 0) | ≥ 1 occurrence |
| Visible contact page | No new contact elements beyond those approved | Unapproved additions |

### T-SCHEMA — schema changes (G10, G20, G21)
| Check | Pass | Fail |
|---|---|---|
| JSON-LD parse on all crawled pages | 0 errors | Any error |
| Google Rich Results Test on 5 URLs (home, route, airport hub, blog, AR route) | No new errors or warnings vs baseline | New error/warning |
| `LocalBusiness` node (C5) | Absent from all pages; `Organization` present with `name`, `url`, `logo`, `email`, `telephone`, `areaServed`; service node references the Organization as `provider` | `LocalBusiness` still present without `address`, or Organization fields lost |
| `sameAs` | Exactly the 4 owned `siteConfig.social` URLs (Instagram, Facebook, Pinterest, Reddit), plus the Trustpilot profile only after C3a-ii verification; **no X/Twitter URL (Rev. 3a)**; each URL resolves (some social sites block bots — a manual browser check is acceptable and recorded) | Any other URL, or a profile URL that does not resolve |
| No address / no `aggregateRating` / no `Review` | 0 occurrences | ≥ 1 |
| Existing types elsewhere (`BreadcrumbList`, `FAQPage`, `Service`, `BlogPosting`) | Counts equal to baseline (1,220 / 805 / 646 / 127) except where a change is intended | Unintended change |
| `x-default` (E8, if approved) | Present on every EN/AR pair in HTML and sitemap, pointing to the EN URL | Mismatch |

### T-AR / T-D — Arabic airport hubs (G05)
| Check | Pass |
|---|---|
| `npm run gen:ar-index` then `check:ar-index` | Pass |
| New AR URL | 200, `lang="ar" dir="rtl"`, self-canonical, hreflang `en` → `/airport-transfer/{hub}` |
| EN hub | Now shows hreflang `ar` → the new URL (reciprocal) |
| Sitemap | Count rises by exactly the number of new AR hubs (895 → 896 after D1, etc.); alternates match HTML |
| Structured data | Rich Results Test / schema parse: 0 errors; same types as the existing AR airport pages |
| Content | Facts match the EN hub; no claim beyond C1 |

### T-SCHEMA — schema changes (G10, G20, G21)
| Check | Pass |
|---|---|
| JSON-LD parse on all crawled pages | 0 errors |
| Google Rich Results Test on 5 URLs | No new errors or warnings |
| `sameAs` entries | Each URL resolves (200) and is the business's own profile |

### T-CONV — quote form and WhatsApp (no real messages)
| Check | Method | Pass |
|---|---|---|
| Quote form renders and validates | Local or preview build: fill the form, confirm client-side validation; submission tested only against a local server with `/api/leads` mocked or a non-production Supabase project | Payload contains the expected attribution fields; **no request reaches the production `leads` table or Resend** |
| WhatsApp links | Inspect `href` values only (do not open conversations) | `https://wa.me/<number>?text=…` unchanged; encoded text correct in EN/AR |
| WhatsApp click logging (F4) | Local/preview: click with network inspector; confirm a `POST /api/whatsapp-click` beacon with `sourcePage` — against a non-production database | Beacon sent; link still opens |
| Attribution (F3) | Local: land on a blog URL with `?utm_source=test`, navigate to `/get-quote`, inspect `localStorage.spt_first_touch` | `firstLandingPage` = the blog URL; referrer class recorded; expiry set |

## 3. Measurement baseline and targets

Baseline (16 Oct 2026, read-only):

| Metric | Value |
|---|---|
| Leads (all time, from Jul 2026) | 144 — New 136, Contacted 1, Completed 2, Cancelled 5 |
| Quotations | 14 (Accepted 6, Sent 3, Draft 5); 3 linked to a lead |
| Invoices | 2; 1 linked to a lead |
| WhatsApp clicks logged | 149 (sticky button only) |
| Leads with first landing = `/get-quote` | 7; first landing missing 14; first referrer missing 109 |
| GSC | Only the 3 Jun – 6 Aug 2026 export (74 clicks / 6,982 impressions) — current export needed (E1) |

Reported monthly (no targets set until E1/E2 give a current baseline):
- Organic landing sessions by page and source (Cloudflare Web Analytics referrers; GSC/Bing clicks)
- Quote requests and WhatsApp clicks by landing page and source class (google / bing / duckduckgo / chatgpt / perplexity / direct / other)
- Qualified leads = status ≥ Quoted; bookings = Confirmed + Completed; revenue = linked `invoices.total_amount` (or accepted `quotations.total_amount`)

A form submission is **not** counted as a booking. Lead personal data stays in Supabase and is never sent to analytics.

## 4. Dependency and access checklist (E1–E13)

| # | Item | Who | Needed before | Status |
|---|---|---|---|---|
| E1 | GSC: Performance (pages, queries, countries, devices; last 3 months + 28 days), Page indexing, Crawl stats, Sitemaps — or read access | You | Baseline (F1); B9, E1/E5/E9 steps | ☐ |
| E2 | Bing Webmaster Tools: search performance, URL inspection, crawl errors; `BING_API_KEY` for URL submission (passed at run time, never stored) | You | Baseline; after A1 | ☐ |
| E3 | Field CWV: PSI for 5 URLs or a CrUX API key | You / me | After A2 (to measure) | ☐ |
| E4 | Lead outcomes: update statuses; link quotations to leads | You | F5/F6 | ☐ |
| E5 | List of routes actually operated (incl. cross-border countries and directions, seasonal limits). **Rev. 2:** coordination model confirmed; still needed — per-country answer on whether any toll/border charge is ever included in a quote (7c-f) | You | C2a, D4, E2, E4 | ◐ policy answered; route list + 7c-f open |
| E6 | **Rev. 2:** 24-hour support — ✅ confirmed by owner 16 Oct. Still needed: (a) pickups at any hour on listed routes (7a-f); (b) rating evidence pack — platform name + profile URL, score, review count, date, screenshot, branding permission (7b); (c) whether the 5 testimonials are genuine (C3b). A public Trustpilot check on 16 Oct returned 403 and no indexed data, so **nothing about the rating has been independently verified** | You | C3a, C3b, C4c | ◐ support answered; a–c open |
| E7 | Workers logs/analytics for 1–6 Oct (zero-lead period) | You | A3 | ☐ |
| E8 | Analytics decision (Cloudflare Web Analytics recommended) | You | F2 | ☐ |
| E9 | Official status of upcoming events | Me (web sources) + you | B8 | ☐ |
| E10 | Keyword volume export (optional) | You | E-phase prioritisation | ☐ |
| E11 | Workers logs for 16 Oct 09:15–09:21 UTC; or approval for A4 + A5 | You | A3–A6 | ☐ |
| E12 | GSC URL Inspection (live test) for `/` and `/routes/qassim-to-riyadh` | You | Before and after A1 | ☐ |
| E13 | **Rev. 2:** Saudi number / office / GBP — ✅ answered: none; Pakistan-based contact details only (nothing to be added). **Rev. 3a:** Instagram, Facebook, Pinterest, Reddit confirmed owned and authorised; X `@sauditaxi` **not** owned — excluded from `sameAs` and all tasks; existing `twitter:site` removal proposed (C5b) | You | C5, C5b | ✅ answered |
| — (Rev. 2, unnumbered) | **Official-source register** for country-specific border statements kept on the site (Bahrain, Qatar, Kuwait, UAE, Jordan: visas, vehicle insurance, biometrics, vehicle rules, fees) and for crossing/airport operating hours — URL, access date, quoted text | Me (research at implementation time) + your review | C2d, C4d | ☐ |

The unnumbered row is a working checklist item for this plan only; it extends neither the audit's E1–E13 list nor the G01–G25 register.

### Evidence still outstanding after Revision 2 (summary)

| Evidence | Blocks | Status |
|---|---|---|
| Trustpilot evidence pack (profile URL, score, review count, date, screenshot, permitted widget) — platform choice confirmed Rev. 3 | C3a-ii | Not supplied; not independently verifiable (Trustpilot returned 403) |
| Testimonial provenance (are the 5 quotes genuine customer reviews?) | C3b | Not supplied |
| Pickups at any hour on listed routes (7a-f) | — | ✅ Confirmed by owner (Rev. 3) |
| Toll/border-fee policy (7c-f) | — | ✅ Confirmed: varies by route/quote; confirmed quotation controls (Rev. 3) |
| Official sources for retained regulatory and operating-hours statements | C2d, C4d | To be researched at implementation |
| Social-profile ownership | — | ✅ Corrected (Rev. 3a): Instagram, Facebook, Pinterest, Reddit owned; X `@sauditaxi` **not** owned — excluded |

### Local validation results — A1 and C5b (16 Oct 2026, uncommitted working tree on `9098f18`)

Changed files: `app/robots.ts` (A1); `lib/site.ts`, `lib/seo.ts`, `app/(main)/layout.tsx`, `app/ar/layout.tsx` (C5b). 3 lines changed, 2 removed; original line endings kept.

| Check | Result |
|---|---|
| `npx tsc --noEmit` | Pass |
| Lint, 5 changed files | 0 errors, 0 warnings |
| Lint, whole project | Same 10 pre-existing problems as the baseline (no new ones) |
| `npm run build` | Pass — 904/904 pages, no errors/warnings; `/robots.txt` static |
| Built robots.txt | Exactly the proposed text (no `/_next/`; `/api/` and `/admin/` kept) |
| All 4,496 built HTML/RSC/body files | `@sauditaxi` 0; `twitter:site` 0 |
| All 896 indexable built pages | `twitter:card`, `twitter:title`, `twitter:image`, `og:image` present on 896/896 (only `_not-found` and `_global-error` lack them) |
| Local `next start`, 16 pages (12 EN, 4 AR) vs live baseline | Only difference: `twitter:site` removed. All `og:*` and other `twitter:*` values, title, canonical, hreflang, robots meta, `lang`/`dir` identical; `twitter:image` = `og:image` on 16/16; `og:locale` `en_US` / `ar_SA` unchanged; `/og-image.png` 200 `image/png`; no X reference in JSON-LD |
| `check:ar-500` (local) | 3 of 4 runs pass (6/6). One run failed on the two alias redirects (`fetch` saw a duplicated Location header, then 404). Not reproduced in 3 further runs, including a fresh server; production passes; the changed files do not touch Arabic routing. Re-run against production after deploy |
| Private routes (local) | `/admin` → 307 login; `/admin/leads` → 307 login; `/api/admin/leads` → 401 |

### A1 pre-implementation results (Rev. 3)

Recorded in `05-a1-robots-change-proposal.md` §3: repository state clean (HEAD `9098f18`); `tsc` pass on the current tree; in-memory full-project typecheck of the proposed `app/robots.ts` 0 diagnostics; ESLint on the proposed file 0/0; project lint baseline 10 pre-existing problems (none in `robots.ts`); `npm run build` of the current tree pass (904/904 pages, `/robots.txt` static); proposed robots.txt rendered with Next's serializer; private routes verified (307/401/405/404 + `noindex`). The post-apply build and T-A1 production checks run only after approval.
| GSC, Bing, CrUX, Workers logs, operated-routes list (E1, E2, E3, E5, E7, E11, E12) | As in Revision 1 | Not supplied |

Access I would need for implementation: repository (have), Supabase service key in `.env` (have; read-only use so far), Cloudflare dashboard view of the `sauditaxi` Worker (you, or screenshots/exports), GSC and Bing (exports are sufficient).
