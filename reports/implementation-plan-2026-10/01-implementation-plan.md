# Implementation Plan — Saudi Private Transfers (for approval)

**Revision 3 — 16 October 2026.** Adds the owner's follow-up decisions (pickups at any hour on every listed route; official Trustpilot live widget only after verification; tolls and border fees vary and the confirmed quotation controls; all listed social profiles owned) and the prepared A1 change proposal (`05-a1-robots-change-proposal.md`). Revision 2 (same day) covered 24-hour support, the third-party rating source, cross-border coordination and Pakistan-only contact details; Revision 1 was prepared from the audit in `reports/seo-audit-2026-10/`. **Planning only — nothing has been changed.** Every item still needs your explicit approval before work starts.

Files in this directory:

| File | Contents |
|---|---|
| `01-implementation-plan.md` | This plan |
| `02-test-plan-and-access-checklist.md` | Tests, pass/fail criteria, baseline, evidence checklist |
| `03-support-claim-classification.csv` | **New.** All 413 "24/7"-type occurrences (406 lines, 31 files) with class and recommended action |
| `04-cross-border-claim-inventory.csv` | 1,037 cross-border lines mentioning documents/insurance/permits/fees/visas, classified |
| `05-a1-robots-change-proposal.md` | **New (Rev. 3).** Exact A1 diff, rationale, check results, verification, regression and rollback — awaiting approval |

## Status log

| Date | Step | Status |
|---|---|---|
| 16 Oct 2026 | A1 robots.txt (G01) | **Applied locally, validated, not committed, not deployed** — awaiting deployment review |
| 16 Oct 2026 | C5b remove `twitter:site` / `twitterHandle` (G10) | **Approved; applied locally as a separate change, validated, not committed, not deployed** — awaiting review. Share-card metadata (`twitter:card/title/description/image`, all `og:*`) preserved |
| 16 Oct 2026 | A1 + C5b committed | Branch `seo/robots-and-x-metadata`: `85cf334` (A1 robots.txt), `682d88f` (C5b twitter:site). Fast-forwarded into `main`; pushed by the owner together with commit `bdeb47e` ("v1", reports) on 16 Oct |
| 18 Oct 2026 | A1 + C5b live check | Production robots.txt has no `/_next/` line (`/api/`, `/admin/` kept); `twitter:site` absent and `twitter:card` present on `/`, `/ar`, `/routes/qassim-to-riyadh`. **Remaining post-deploy checks from `05-a1-robots-change-proposal.md` §5–§6 (GSC robots report, URL Inspection, `check:ar-500`, private routes, Workers usage) not yet run** |
| 18 Oct 2026 | Content opportunity analysis | `06-content-opportunity-analysis.md`, `07-content-opportunities.csv`, `08-gsc-top-pages-2026-07-16_2026-10-15.tsv` — planning only |
| 16 Oct 2026 | C5 `sameAs` policy | Confirmed by owner: only Instagram, Facebook, Pinterest, Reddit, plus the Trustpilot profile once verified. **Not implemented** (C5 not yet approved for implementation) |

Validation details: `02-test-plan-and-access-checklist.md` → "Local validation results — A1 and C5b".

## Revision 3a correction (16 Oct 2026)

| Section | Change |
|---|---|
| §0.1 decision 8, §0.2.4, §4 decision 8 | Owner correction: the X account `@sauditaxi` is **not** owned or authorised. Confirmed profiles are only Instagram, Facebook, Pinterest, Reddit |
| §1 C5 | `sameAs` limited to those 4 (+ Trustpilot after verification); no X URL anywhere in structured data |
| §1 C5b (new step under G10) | Proposed removal of the live `twitter:site` = `@sauditaxi` meta tag and the `twitterHandle` setting — needs separate approval |
| Scope | No website change authorised by this correction; A1 (robots.txt) review continues unchanged |

## Revision 3 change log

| Section | Change |
|---|---|
| §0.1 | Follow-up decisions 7a-f, 7b (option), 7c-f and social-profile ownership recorded as confirmed |
| §1 Phase C | C2a wording now determined (quotation controls); C3a fixed to option 1 (official Trustpilot live widget) after verification; C4a narrowed to outcome-guarantee phrases; C4b and C4c become "retain" (no rewording); C5 `sameAs` unblocked |
| Gap reassessment | G03 support subset largely closed; cross-border and rating subsets unchanged in priority |
| §3 Schedule | Phase C effort reduced (≈ 22–34 h) |
| §4 Decisions | 7a, 7b, 7c, 8 fully answered; remaining items are evidence, not decisions |
| §5 | A1 prepared and checked; still awaiting approval. No other step started |

## Revision 2 change log

| Section | Change |
|---|---|
| §0.1 (new) | Business decisions received; confirmed facts separated from evidence still required |
| §0.2 (new) | Results of the 24/7, rating, cross-border and contact-identity audits |
| §0 table | Rating row corrected: **5** first-party testimonials (Revision 1 said 6 — the sixth grep hit was the TypeScript interface field) |
| §1 Phase C | Rewritten: C1 answered; scope narrowed for support claims, widened for cross-border fee claims; rating and entity steps now evidence-gated |
| §1 Phases A, B, D, E, F | Dependencies updated; content unchanged otherwise |
| §2 Risk register | R5 updated; R10–R14 added |
| §3 Schedule | High-risk claim fixes moved earlier (right after Phase A's first deploys); Phase C effort re-estimated |
| §4 Decisions | Decisions 7 and 8 marked answered with outstanding verification; new follow-up decisions listed |
| §5 First phase | **Unchanged** — robots.txt only |

## 0. Revalidation of the audit findings (from Revision 1, still valid)

| Finding | Re-check | Verdict |
|---|---|---|
| G01 robots.txt `Disallow: /_next/` | `app/robots.ts:9` `disallow: ["/api/", "/admin/", "/_next/"]`; live robots.txt matches; route-page CSS loads from `/_next/static/chunks/*.css`, images from `/_next/image` | **Verified defect.** Ranking impact is a hypothesis until GSC URL Inspection (E12) |
| G02 transient 503s / blank 200s | 241 × 503 + 9 × empty 200, only `/blog/*` and `/ar/*`, beginning after ~408 distinct URLs; all recovered; not reproducible in an 80-request probe. `next.config.ts` and `wrangler.jsonc` comments document the same pattern, mitigated on 5–6 Oct. `data/translations/ar.ts` is 2.85 MB. `wrangler.jsonc` has no `observability` block | **Verified incident; cause is a hypothesis** (H1 isolate memory / 1102; H2 CPU limit) |
| G12 static asset caching | `/_next/static/*` and `/images/*` → `Cache-Control: public, max-age=0, must-revalidate`; `next.config.ts` `headers()` not applied to Workers Static Assets; no `public/_headers` | **Verified defect** |
| G04 internal links to lead routes | Home `featured` and `/intercity-transfers` `routesBlock` hard-code the same 5 routes; Riyadh `popularRoutes` omits Qassim, Bahrain, Doha, Kuwait, Dubai; `/routes/qassim-to-riyadh` has 5 inlinks | **Verified** |
| G08 blog → service links | 8 posts with 0 commercial links, 18 generic-only | **Verified** (Supabase edits + deploy) |
| G03 claims | See §0.2 — re-audited in Revision 2 | Updated |
| G05 Arabic airport hubs | 4 of 13 exist; adding one = one `ar.ts` entry + `gen:ar-index` | **Verified gap; low structural risk** |
| G11 attribution | First touch recorded only in `QuoteForm`; only `StickyWhatsApp` logs clicks; `searchSource` recognises Google only | **Verified** |
| Funnel data (16 Oct, read-only) | Leads 144 (New 136); quotations 14 (3 linked to a lead); invoices 2 (1 linked); WhatsApp clicks 149 | **Verified** |

### 0.1 Business decisions received (16 Oct 2026)

| Topic | Owner statement (confirmed fact) | What it settles | Documentary evidence still required |
|---|---|---|---|
| 24/7 support | Genuine 24-hour support is available | Claims that **support/enquiries/bookings** are available 24/7 are accurate and stay | None for support itself. **Not settled:** whether *pickups/drivers* operate at any hour on every listed route (support availability ≠ guaranteed driver availability) — owner confirmation needed (decision 7a-follow-up) |
| Customer rating | The rating comes from a verified third-party review platform | That a third-party source exists | Platform name and profile URL; current score; review count; date checked; screenshot; branding/permission terms. **Not available in the repo or reports, and not independently verified** (see §0.2.2) |
| Cross-border documentation | The business **coordinates** transportation; passengers and drivers must confirm documents, insurance, permits, border requirements and fees | Target wording: coordination, not provision or guarantee | Per-country official sources for any regulatory statement kept on the site; whether any fee (e.g. the causeway toll) is included in a given quote |
| Contact identity | Pakistan-based contact details only | No Saudi number, Saudi office, local address or Google Business Profile will be added | ~~Confirmation that the 4 social profiles in `siteConfig.social` and the `@sauditaxi` X handle are genuinely the business's own~~ → resolved in Rev. 3a: the 4 profiles are owned; `@sauditaxi` is **not** |

#### Follow-up decisions received (Revision 3, 16 Oct 2026)

| Topic | Owner decision (confirmed fact) | Effect on the plan | Evidence still required |
|---|---|---|---|
| 7a-f Pickup availability | Pickup availability is confirmed for **every listed route** | S3 operating-availability claims (266) are accurate → retain. Availability phrasing in S4 ("regardless of your flight's arrival time", "same standard at any hour") is now substantively supported; only outcome guarantees still need rewording | None |
| 7b Rating display | Use the **official Trustpilot live widget**, only **after verification** | C3a = option 1. Until verified, no score is shown from any other source; the testimonial-derived "5.0/5" should not remain as the displayed rating | Trustpilot profile URL for the business, current TrustScore/star rating, review count, date, screenshot, and the widget type permitted on the account (from Trustpilot Business) — **not yet supplied; not independently verified** |
| 7c-f Tolls and border fees | Tolls and border fees **vary by route or quote; the confirmed quotation controls** | C2a wording determined: no blanket "included"/"nothing extra" statements; refer to the confirmed quotation | None for wording; X3 regulatory statements still need official sources |
| 8 Social profiles | **Corrected (Rev. 3a):** the business owns and authorises **only** its Instagram, Facebook, Pinterest and Reddit profiles (`siteConfig.social`). It does **not** own or authorise the X account `@sauditaxi` | C5 `sameAs` lists only those 4 profiles. `@sauditaxi` is excluded from structured data and from every implementation task. The existing `twitter:site` = `@sauditaxi` tag (live on every page) is a verified misattribution → removal proposed as C5b | None |

### 0.2 Audit results for the four decision areas

#### 0.2.1 "24/7" claims — 413 occurrences, 406 lines, 31 files

Automated first-pass classification by the clause around each occurrence. **Every line still needs a human review before editing**; the classifier is a worklist, not a verdict. Full list: `03-support-claim-classification.csv`.

| Class | EN | AR | Total | Example | Recommended action |
|---|---|---|---|---|---|
| S1 Support availability | 19 | 1 | 20 | `TrustSection.tsx:48` "24/7 support"; `WhyChooseUs.tsx:18` "24/7 WhatsApp support"; `lib/email.ts:561` "Available 24/7 for assistance" | **Retain** (confirmed) |
| S2 Booking/enquiries at any hour | 26 | 24 | 50 | "24/7 booking", "Book 24/7", "24/7 WhatsApp booking"; AR "نستقبل الحجوزات على مدار الساعة" | **Retain** (covered by 24-hour support); must not promise instant confirmation |
| S3 Operating / pickup availability | 180 | 86 | 266 | `HomeHero.tsx:6` and `HomeTrustStrip.tsx:6` "24/7 availability"; "Fixed price, 24/7"; "We operate 24/7" | **Needs owner confirmation** that pre-booked pickups run at any hour on listed routes. If yes → retain, with "pre-booked" where the sentence could read as on-demand. If no → reword to support/booking availability. The two homepage "24/7 availability" labels are ambiguous either way — propose "24/7 support" |
| S4 Guarantee-like wording | 30 | 2 | 32 | `city-guides.ts:174/473/612/777/1319` "pickups run 24/7 … **regardless of** your flight's arrival time"; 20 × `dammam-routes.ts` "available 24/7 with the **same** … standard **at any hour**"; `routes.ts:5190` "a late departure **never leaves you stranded**"; `jeddah.ts:135` "**no problem** — we run 24/7"; AR `ar.ts:27567` "يُعامل وصول الثانية فجرًا بالطريقة نفسها تمامًا" | **Reword**: keep availability, drop the implied guarantee; e.g. "Pickups can be booked for any arrival time, including late-night flights — book in advance and we confirm your driver before you travel." |
| S5 Third-party facts | 8 | 35 | 43 | Causeway / Salwa / Al Batha / Al Haditha crossings "operate around the clock"; AR night-arrival guide (`ar.ts:27474–27535`) "Saudi major airports operate 24 hours" | **Not a business claim.** Keep only if verified against a current official source. **Urgent:** the AR night-arrival content states RUH operates 24/7 while the Riyadh airport closure advisory (Oct 2026) is live — the two contradict |
| S6 Code comments | 2 | 0 | 2 | `TrustBadges.tsx:15` | No action |

No wording found promising **instant confirmation** or a **response time**; the guarantee risk is concentrated in "regardless of", "same standard at any hour", "never stranded", "no problem".

#### 0.2.2 Customer rating — verified inconsistency

| Evidence | Source |
|---|---|
| The site integrates **Trustpilot**: a Review Collector TrustBox (`components/TrustpilotWidget.tsx`, used in `components/home/HomeCustomerTrust.tsx` under "Reviewed on Trustpilot") and a "Rate us on Trustpilot" link to `https://www.trustpilot.com/review/saudiprivatetransfers.com` (`components/StickyWhatsApp.tsx:63`) | Repository |
| The **displayed** "x/5 Customer rating" is **not** taken from Trustpilot. It is the average of the 5 first-party testimonials in `data/testimonials.ts` (all rated 5), rendered in `AboutStatsStrip.tsx:16`, `TestimonialSection.tsx:31`, `TrustSection.tsx:89` ("Rated 5.0 / 5 by our travellers…") | Repository |
| The code comments in `data/testimonials.ts:51–55` and `lib/schema.ts:59–66` already state the testimonials are first-party and unverified and must not feed review counts unless wired to a real source such as the Trustpilot API | Repository |
| Public Trustpilot profile: a read-only fetch returned HTTP 403 (bot verification) and a web search found no indexed profile data for the domain | Live check, 16 Oct |

**Conclusion:** the platform is *probably* Trustpilot (repo evidence), but its **name, score, review count and permissions are unverified**, and the number currently shown is computed from first-party testimonials — so it does not match the owner's description of the source. Do not display any score until the owner supplies the evidence in §0.1. The Review Collector widget itself (which asks for reviews, showing no score) is fine.

#### 0.2.3 Cross-border claims — verified inconsistency across pages

Scope: 1,037 lines in 34 files mention documents/insurance/permits/fees/visas in a cross-border context (`04-cross-border-claim-inventory.csv`). Classes: X1 company-handles claims 71; X3 regulatory/fee facts 34; X2 customer guidance 376; X4 neutral mentions/labels 556.

X1 breakdown (high-risk first):

| Sub-type | Lines | Examples | Action |
|---|---|---|---|
| Fee inclusion promised | 7 | `routes.ts:9297/9418` FAQ "Is the causeway toll included in the price?" → "**Yes.** The causeway toll and cross-border vehicle documentation are arranged as part of the fixed price, so there's nothing extra to settle at the border"; `gcc-route-content.ts:443` "no separate fees to settle at the border yourself"; AR `ar.ts:11205/11328/11349` | **Highest priority.** Conflicts with the owner's position that passengers/drivers confirm fees. Replace with "Your quote lists what is included; any border, toll or insurance charge not itemised in your quote is payable at the crossing" — exact wording depends on decision 7c-follow-up |
| Company handles insurance/documentation/toll | 9 | `border-guides.ts:81` "We handle the toll and vehicle paperwork as part of the transfer"; `gcc-route-content.ts:192/249`, `routes.ts:1012/1028/1061/1077` "insurance and documentation, both of which we handle"; AR `ar.ts:12085/12161` | Reword to coordination |
| Company arranges paperwork | 41 | `gcc-route-content.ts:141` "Correct cross-border vehicle documentation (arranged when you book)"; `:813` "Correct cross-border paperwork arranged when you book"; `gcc-to-saudi-route-content.ts:837/899` "We arrange the appropriate paperwork when you book"; AR equivalents in `app/ar/[...slug]/page.tsx:113/164` | Reword: "We coordinate the vehicle and driver for the crossing and tell you what is usually required; you and the driver confirm the documents, insurance and fees that apply" |
| Already correct (model wording) | 11 | `city-guides.ts:759` "we handle the driving, not the paperwork"; `gcc-route-content.ts:145` "eligibility decisions belong to Saudi and Emirati border officials, not to us"; `app/ar/[...slug]/page.tsx:281` | Keep; use as the template |
| Other | 3 | `border-guides.ts:50`, `routes.ts:7706`, `ar.ts:12187` | Manual review |

X3 regulatory/fee facts (34 lines): e.g. "mandatory third-party UAE vehicle insurance, generally purchased at the border" (`distance-guide-v2.ts:90`, `routes.ts:3396/3657`, AR `app/ar/[...slug]/page.tsx:110/189`); Bahrain/UAE eVisa or visa-on-arrival eligibility (`border-guides.ts:43/71/251/279`, `gcc-route-content.ts:50`); Salwa biometric checks and vehicle-age rules (`city-to-border-route-content.ts:195`, `ar.ts:10222/12787`). **None has been verified against an official source in this planning task.** Each must be verified (source URL + access date recorded) or generalised to "requirements vary — confirm with [authority]" before publication.

Separation of content types (proposed rule for C5):

| Type | Treatment |
|---|---|
| General customer guidance (passport, visa if required, allow extra time, check rules before travel) | Keep; standard caution line on every cross-border page |
| What the business does (vehicle, driver, timing, advice) | Coordination wording only |
| Country-specific legal/border requirements (insurance rules, visa schemes, biometrics, vehicle-age limits, fee amounts) | Only with a cited official source and access date, kept in a source register; otherwise generalise |

#### 0.2.4 Contact identity and organisation schema

| Item | Current | Consistent with confirmed facts? | Recommendation |
|---|---|---|---|
| Phone/WhatsApp | `+92 314 8932631` in `siteConfig` (`lib/site.ts:17–21`); used in WhatsApp links and Organization/LocalBusiness `telephone`; intentionally not displayed as text | **Yes** | Keep unchanged. No `+966` number. The `+966 5X XXX XXXX` text in `QuoteForm.tsx:228` is the placeholder for the **customer's** phone field, not a business number — keep |
| Email | `taxiservicesaudiaa@gmail.com` in schema, footer, contact, legal pages | Yes | Keep |
| Address | None (removed earlier; `lib/site.ts:34–41` and `lib/schema.ts:53–56` forbid re-adding an unverified one) | Yes | Keep absent. No office or city pages |
| Local-presence wording | Searched EN/AR content for "Saudi-based", "our Riyadh office", "headquartered", "+966", "شركة سعودية", "مقرنا/مكتبنا": **no business claims found** (hits are third-party headquarters such as Aramco) | Yes | None |
| `LocalBusiness` JSON-LD (`lib/schema.ts:45–60`) on every page | `LocalBusiness` with no `address`; Google lists `address` as required for LocalBusiness rich results | **Verified inconsistency** — typed as a local premises business though there are no premises | Retype: keep `Organization` (with `telephone`, `email`, `areaServed: Saudi Arabia`, `sameAs`) and describe the service as `Service`/`TaxiService` with `provider` → Organization; remove the `LocalBusiness` node. No visual change |
| `sameAs` (`lib/schema.ts:27`) | Empty array, while `siteConfig.social` lists Pinterest, Facebook, Instagram, Reddit (Facebook and Instagram linked in the footer) | **Verified inconsistency** (genuine profiles not declared) | Add only profiles the owner confirms as genuine and active (+ Trustpilot profile URL once confirmed) |
| `twitter:site` = `@sauditaxi` (`siteConfig.twitterHandle` in `lib/site.ts:27`, emitted via `lib/seo.ts:82`, `app/(main)/layout.tsx:65`, `app/ar/layout.tsx:50`) | **Rev. 3a: not owned or authorised by the business.** Live check 16 Oct: emitted as `<meta name="twitter:site" content="@sauditaxi">` on `/`, `/routes/qassim-to-riyadh`, `/ar` (and every page using the shared metadata); **not** present in any JSON-LD | **Verified inconsistency** (attributes the site to an account the business does not control) | Remove the `site` field and the `twitterHandle` setting (C5b); keep `twitter:card` |
| `legalName` used as `name` | "Saudi Private Transfers" | Not a property assertion of legal registration (rendered as `name`) | No change |
| Click-to-call | No `tel:` links (phone deliberately not displayed) | Consistent with WhatsApp-first contact | G24 default: **no change** |

### 0.3 What can be fixed where (updated)

| Fix location | Items |
|---|---|
| Repository (code/data, deploy required) | G01, G12, G19, G21, G04, G05, G13, G20, G22, G23 (sidebar), G25, attribution part of G11; G03 wording (support S4/S3, cross-border X1, rating display); G10 schema (`LocalBusiness` retype, `sameAs`, `twitter:site`) |
| Supabase `blogs` table (content edit + deploy) | G08, G14, G15, G07 (new posts), G18 |
| Cloudflare dashboard | G02 investigation, Web Analytics (G11), deployment rollback |
| Google Search Console / Bing Webmaster | E1, E2, E12 |
| Owner-supplied evidence | Rating evidence (E6), pickup-hours confirmation (E6), per-country fee inclusion (E5), operated routes (E5), social-profile ownership (E13), lead/quote status discipline (E4) |
| Official sources (research at implementation time, recorded with access date) | X3 regulatory statements; S5 crossing/airport hours |

## 1. Prioritised plan mapped to G01–G25

Approval column: **Yes** = needs your explicit go-ahead; **Decision** = needs a business answer first; **Evidence** = needs documents before publication.

### Phase A — Critical technical fixes and reliability investigation (unchanged)

| Step | Gap | Files / URLs | Current → proposed | Benefit | SEO/AEO/GEO | Risk & dependencies | Verify | Rollback | Approval |
|---|---|---|---|---|---|---|---|---|---|
| A1 | G01 | `app/robots.ts`; live `/robots.txt` | `disallow: ["/api/", "/admin/", "/_next/"]` → `["/api/", "/admin/"]` | Google renders pages with CSS and can index page images | Rendering, mobile evaluation, image search | **Low.** `/_next/image` crawling counts toward Worker requests and Images quota; deploy publishes pending Supabase blog edits (R1) | T-A1 | `git revert` + redeploy, or Cloudflare rollback | Yes |
| A2 | G12 | new `public/_headers` | `/_next/static/*` → `public, max-age=31536000, immutable`; `/images/*` → `public, max-age=604800` | Faster repeat visits | CWV | **Medium-low.** Verify `_headers` is honoured under OpenNext in a preview; never cache HTML long | T-A2 | Delete file, redeploy | Yes |
| A3 | G02 | Cloudflare dashboard | Review Workers Metrics/Logs for 16 Oct 09:15–09:21 UTC and 1–6 Oct | Cause before fix | Crawl reliability | Logs may not exist | Written findings | n/a | You / access |
| A4 | G02 | `wrangler.jsonc` | Add `"observability": { "enabled": true, "head_sampling_rate": 1 }` | Persistent logs with request IDs | — | Low; config only | Logs visible | Remove, redeploy | Yes |
| A5 | G02 | Read-only reproduction crawl recording `CF-Ray` | — | Ties failures to logged causes | — | Brief load on production at a quiet hour | Report with CF-Ray IDs | Stop crawl | Yes |
| A6 | G02 | Depends on A5 (Paid plan, splitting `ar.ts`, payload reduction) | — | — | — | Separate plan; no speculative change | — | — | Yes (separate) |
| A7 | G19 | `public/_headers`, `next.config.ts` (`poweredByHeader: false`), `proxy.ts` or Cloudflare Transform Rules | `X-Content-Type-Options`, `Referrer-Policy`; drop `x-powered-by`; CSP deferred (the Trustpilot widget script must be allowed if CSP is added later) | Hardening | — | Low | T-A7 | Revert | Yes |

### Phase B — Internal linking and existing blog-to-service improvements (unchanged except B8)

| Step | Gap | Files / URLs | Change | Risk & dependencies | Verify | Approval |
|---|---|---|---|---|---|---|
| B1 | G04 | `data/cities.ts` Riyadh `popularRoutes` | Add `riyadh-to-qassim`, `riyadh-to-bahrain`, `riyadh-to-doha`, `riyadh-to-kuwait-city`, `riyadh-to-dubai` | Low; grid layout check | T-B1 | Yes |
| B2 | G04 | `components/home/HomeRouteExplorer.tsx` | Swap or add lead-proven routes | Editorial choice | T-B1 | Yes + Decision |
| B3 | G04 | `data/service-pages-v2/intercity-transfers.ts` | "Most requested" set | Low | T-B1 | Yes |
| B4 | G04 | `data/borders.ts` | List Riyadh-origin cross-border routes on each crossing hub | Low | T-B1 | Yes |
| B5 | G04 | `data/translations/ar.ts`, `app/ar/page.tsx` | Mirror B1–B4 in Arabic | `gen:ar-index`, `check:ar-index`, `check:ar-500` | T-B1, T-AR | Yes |
| B6 | G08 | Supabase `blogs.content` (8 zero-link posts) | Add contextual links | Row backups; deploy publishes all pending edits | T-B6 | Yes |
| B7 | G08 | Supabase `blogs.content` (18 generic-only posts) | Add specific links | Same | T-B6 | Yes |
| B8 | G15 | Advisories, past-dated posts, event posts | Refresh with sourced, dated facts. **Added in Rev. 2:** reconcile the Arabic night-arrival guide (`ar.ts:27474–27567`, "airports operate 24 hours") with the live Riyadh airport closure advisory | Factual accuracy | T-B6 | Yes (per post) |
| B9 | G16 | Analysis | Diagnose JED→Makkah overlap from GSC | Needs E1 | Written | No |

### Phase C — Correction of unsupported or inaccurate business claims (rewritten in Rev. 2)

C1 (owner answers) is **done** for the four policy questions. Remaining steps are split so each is a small, separately reviewable change. Wording proposals are drafts for your approval; Arabic batches need native-speaker review.

| Step | Gap | Files / URLs | Current → proposed | Benefit | Relevance | Risk & dependencies | Verify | Rollback | Approval |
|---|---|---|---|---|---|---|---|---|---|
| C1 | G03 | — | Owner answers received 16 Oct (see §0.1), follow-ups 7a-f, 7b, 7c-f and profiles answered (Rev. 3) | — | — | Remaining: Trustpilot evidence (C3a-ii), testimonial provenance (C3b), official sources (C2d, C4d) | — | — | **Answered** |
| C2a | G03 | **Cross-border fee promises** — `data/routes.ts:9297, 9417–9418`, `data/gcc-route-content.ts:443`, `data/translations/ar.ts:11205, 11328, 11349` (7 lines) | "toll and documentation arranged as part of the fixed price / nothing extra to settle" → **(Rev. 3, wording determined)** "Tolls and border fees vary by route. Your confirmed quotation states exactly what is included; anything not listed in it is paid at the crossing." FAQ "Is the causeway toll included in the price?" → "It depends on your route and booking — your confirmed quotation states whether the causeway toll is included." | Prevents a pricing dispute at the border | Trust; AI engines quote FAQ answers verbatim | **Medium-low.** Decision 7c-f answered | T-C-XB | Revert commit | Yes |
| C2b | G03 | **Company-handles insurance/documentation/toll** — `data/border-guides.ts:81`, `data/gcc-route-content.ts:192, 249`, `data/routes.ts:1012, 1028, 1061, 1077`, `ar.ts:12085, 12161` (9 lines) | → coordination wording, modelled on `city-guides.ts:759` | Same | Same | Low-medium | T-C-XB | Revert | Yes |
| C2c | G03 | **Arranges paperwork** — 41 lines in `data/gcc-route-content.ts`, `data/gcc-to-saudi-route-content.ts`, `data/saudi-jordan-route-content.ts`, `data/service-pages-v2/border-transfers.ts`, `data/routes.ts`, `app/ar/[...slug]/page.tsx`, `ar.ts` (list: CSV class X1) | "documentation arranged when you book" → "we coordinate the vehicle and driver and advise on what's usually needed; you and the driver confirm the documents, insurance and fees that apply" | Same | Same | Medium (volume; AR review) | T-C-XB | Revert per file | Yes |
| C2d | G03 | **Regulatory/fee facts** — 34 X3 lines (UAE insurance at the border, eVisa/visa-on-arrival eligibility, Salwa biometrics, vehicle-age rules) | Verify each against a current official source and record it (URL + access date) in a source register kept with the change; otherwise generalise and point to the authority | Accurate legal statements | E-E-A-T | **Evidence-gated**; facts may have changed in 2026 | T-C-XB | Revert | Yes + Evidence |
| C2e | G03 | Cross-border pages without a caution line (from CSV X2/X4 review) | Add one standard sentence: requirements vary by nationality and change; confirm with the official authority before travel | Consistency | — | Low | T-C-XB | Revert | Yes |
| C3a | G03 | **Rating display** — `components/about/AboutStatsStrip.tsx:16`, `components/sections/TestimonialSection.tsx:31`, `components/sections/TrustSection.tsx:89` | **(Rev. 3: option 1 chosen.)** Stop showing the testimonial-derived "5.0/5"; once the Trustpilot evidence is verified, show the official Trustpilot live widget (a score-displaying TrustBox permitted on the account), which renders Trustpilot's own score. No hard-coded score. Proposed sequencing: **C3a-i** remove the testimonial-derived score (can ship before verification, separate approval); **C3a-ii** add the live widget after verification | Honest social proof; brand compliance | Trust; review-snippet policy | C3a-ii **evidence-gated** (profile URL, score, count, widget permitted). Third-party script: privacy note and CSP allowance (A7) | T-C-RATING | Revert | Yes (C3a-i); Yes + Evidence (C3a-ii) |
| C3b | G03 | `data/testimonials.ts`, `TestimonialSection.tsx`; stale comment `components/templates/PointTransferView.tsx:23` | Keep the 5 quotes only if the owner confirms they are genuine customer reviews (and, if taken from the platform, attribute them to it); fix the stale comment | Same | — | Owner confirmation | T-C-RATING | Revert | Yes + Decision |
| C4a | G03 | **Guarantee wording** — 32 S4 lines: `data/city-guides.ts:174, 473, 612, 777, 1319`; 20 lines in `data/dammam-routes.ts`; `data/routes.ts:4247, 5129, 5190`; `data/point-transfer-v2/jeddah.ts:135`; `ar.ts:27558, 27567` (CSV class S4) | **(Rev. 3, narrowed.)** Availability at any hour is confirmed, so "regardless of your flight's arrival time" and "same … standard at any hour" (25 lines) are retained. Reword only the **outcome guarantees**: `routes.ts:5129` "late-night and early-morning arrivals are no problem", `routes.ts:5190` "a late departure never leaves you stranded", `point-transfer-v2/jeddah.ts:135` "are no problem — we run 24/7"; review `ar.ts:27567` ("treated exactly the same at 2 am") — e.g. "We track your flight and operate 24/7, so late-night and early-morning arrivals can be booked like any other." | Avoids implied outcome guarantee | Trust | Low (≈ 4 lines) | T-C-SUPPORT | Revert | Yes |
| C4b | G03 | Homepage labels "24/7 availability" | **(Rev. 3) No change** — accurate given confirmed 24-hour support and pickup availability | — | — | — | — | — | — |
| C4c | G03 | Operating availability — 266 S3 lines | **(Rev. 3) Retain** — confirmed for every listed route. Optional: add "pre-booked" only where a sentence could read as on-demand street hail (review during C4a; no separate batch) | — | — | — | T-C-SUPPORT | — | — |
| C4d | G03 | **Third-party hours** — 43 S5 lines (crossings; AR airport-hours content) | Verify against official sources (border authorities, airport operators); date-stamp; AR airport-hours content handled with B8 | Accuracy during the 2026 disruption | Freshness | Evidence-gated | T-C-SUPPORT | Revert | Yes + Evidence |
| C5 | G10 | `lib/schema.ts` (`LocalBusiness` node, `sameAs`), `lib/site.ts` (`social`) | Remove the address-less `LocalBusiness` node and attach the service to `Organization`; **(Rev. 3a)** populate `sameAs` with **only** the 4 owned profiles from `siteConfig.social` (Instagram, Facebook, Pinterest, Reddit) and, once verified, the Trustpilot profile URL. **No X/Twitter URL. Telephone, email unchanged; no address, no +966, no GBP** | Entity consistency | Entity/GEO | Low; no visual change | T-SCHEMA, T-CONTACT | Revert | Yes |
| C5b (Rev. 3a) | G10 | `lib/site.ts:27` (`twitterHandle`), `lib/seo.ts:82`, `app/(main)/layout.tsx:65`, `app/ar/layout.tsx:50` | Remove `twitter.site` (`@sauditaxi`) from page metadata and delete the `twitterHandle` setting; keep `twitter: { card: "summary_large_image" }` so share previews still work | Stops attributing the site to an X account the business does not own or authorise | Entity accuracy | Low; no visual change; separate small commit | T-CONTACT, T-SCHEMA | Revert | Yes |
| C6 | G24 | — | **No change recommended** (phone intentionally not displayed; WhatsApp-first) | — | — | — | — | — | Decision (default no) |

### Phase D — Arabic airport pages and confirmed localisation gaps

| Step | Gap | Change | Dependency (Rev. 2) | Approval |
|---|---|---|---|---|
| D1 | G05 | AR hub for `/airport-transfer/dammam-airport` | New text uses Rev. 2 wording rules: "24/7 support" and pre-booked pickups only; no guarantee phrasing; no cross-border fee promises (Dammam hub links to Bahrain routes). **No longer blocked by C1** | Yes |
| D2 | G05 | AR hub for `/airport-transfer/madinah-airport` | Same | Yes |
| D3 | G05 | AR hubs for the other 7 airports | After D1–D2 measured | Yes |
| D4 | — | AR border hubs (5) | Coordination wording template (C2) agreed; E5 route list | Yes + Decision |
| D5 | G18 | AR blog translations | E1 | Yes |

### Phase E — Existing route pages and selected supporting guides (unchanged; guides not started)

| Step | Gap | Change | Dependency | Approval |
|---|---|---|---|---|
| E1 | G13 | Enrich thin route pages with lead/GSC signals | Rev. 2 wording rules | Yes |
| E2 | G07 | 4 corridor guides (only new URLs) — **not to be implemented until separately approved** | E5; C2 template; X3 facts verified | Yes (per post) |
| E3 | G09 | Fares, luggage, cancellation facts | Your figures; must state what each quote includes at a border (links to C2a) | Decision |
| E4 | G06 | Qassim routes/airport | E5 confirmation | Decision |
| E5 | G14 | Thin blogs: expand or merge | E1 | Yes |
| E6 | G17 | Riyadh business/hourly page | Owner confirms service | Decision |
| E7 | G20 | Blog FAQPage from visible FAQs; review Event markup (`LocalBusiness` retype moved to C5) | — | Yes |
| E8 | G21 | `x-default` hreflang | — | Yes |
| E9 | G22 | Metadata trims on pages with impressions | E1 | Yes |
| E10 | G23 | Blog category consolidation | — | Yes |
| E11 | G25 | `public/llms.txt` | After C (so it repeats only accurate claims) | Yes |

### Phase F — Analytics, lead attribution and conversion measurement (unchanged)

| Step | Gap | Change | Approval |
|---|---|---|---|
| F1 | G11 | Baseline snapshot before Phase A deploys | Yes (read-only) |
| F2 | G11 | Cloudflare Web Analytics (cookieless) | Yes |
| F3 | G11 | Site-wide first-touch capture component; referrer classes (google, bing, duckduckgo, chatgpt, perplexity); 90-day expiry | Yes |
| F4 | G11 | WhatsApp click logging for `BlogInlineCta`, `BlogSidebar`, `/contact` | Yes |
| F5 | G11 | Lead → quotation → invoice status process | Decision |
| F6 | G11 | Monthly aggregate report; no personal data to third parties | Yes |

### Gap register reassessment (Rev. 2)

| Gap | Rev. 1 | Rev. 2 | Why |
|---|---|---|---|
| G03 (Rev. 3) | — | **P0:** cross-border fee/insurance promises (C2a/C2b, 16 lines — wording now determined) and the testimonial-derived rating (C3a-i). **P1:** paperwork wording (C2c, 41), regulatory facts (C2d, 34), third-party hours (C4d, 43), Trustpilot widget (C3a-ii, evidence-gated). **P2:** 4 outcome-guarantee lines (C4a). **Closed:** support/booking (70), operating availability (266), availability phrasing in S4 (25), homepage labels | Pickup availability, toll policy and widget choice confirmed |
| G03 (Rev. 2) | P0, all claims unconfirmed | **P0 for three subsets:** cross-border fee/insurance promises (C2a/C2b, 16 lines), testimonial-derived rating (C3a), guarantee wording (C4a, 32 lines). **P1:** paperwork wording (C2c, 41), regulatory facts (C2d, 34), third-party hours (C4d, 43). **P2:** operating-availability lines (C4c, 266) pending 7a-f. **Closed:** support/booking claims (70 lines) — confirmed | Owner answers |
| G10 | P1, incl. possible Saudi number/GBP | **P2**, narrowed to schema consistency (`LocalBusiness` retype, `sameAs` with the 4 owned profiles) and **(Rev. 3a)** removal of the misattributed `twitter:site` = `@sauditaxi` (C5b). Saudi number / office / GBP **out of scope** | Pakistan-only contact confirmed; only 4 profiles owned |
| G24 | P3 | **Closed — no change** unless you ask for click-to-call | Phone deliberately not displayed |
| G20 | P3 | P3; `LocalBusiness` retype moved to G10/C5 | Contact identity review |
| G15 | P2 | **P1** for the Arabic night-arrival guide contradiction with the live Riyadh airport advisory | S5 finding |
| G09 | P1 | P1; now explicitly linked to C2a (what a cross-border quote includes) | Fee wording |
| G05, G07, G13 | P1/P1/P2 | Unchanged; no longer blocked by C1 (wording rules exist) | — |
| All others | — | Unchanged | — |

## 2. Risk register

| ID | Risk | Likelihood | Impact | Mitigation | Rollback |
|---|---|---|---|---|---|
| R1 | Any deploy republishes all pending Supabase blog edits | Medium | Medium | Check `blogs.updated_at` since last deploy before every deploy | Restore row backups |
| R2 | Opening `/_next/` raises `/_next/image` Worker requests / Images quota | Low-medium | Low-medium | Monitor 14 days | Narrow `Disallow: /_next/image` |
| R3 | `_headers` not applied or applied to HTML | Low | High | Scope to `/_next/static/*`, `/images/*`; verify HTML unchanged | Delete file |
| R4 | Reproduction crawl affects visitors | Low-medium | Medium | Quiet hour, gentle rate | Stop |
| R5 | Claim rewrites change keywords, FAQ meaning or Arabic grammar (**Rev. 2:** larger volume — up to ~400 lines across support and cross-border classes) | Medium | Medium | Small batches by class and file; titles/H1/slugs untouched; native AR review; diff per batch | Revert batch |
| R6 | New AR entries break the index or hreflang | Low | Medium | `gen:ar-index`, checks, crawl | Remove entry |
| R7 | Attribution component breaks QuoteForm | Low | High | Same storage key; no production submissions in tests | Revert |
| R8 | Build/deploy failures | Low | Medium | Post-deploy checks | Cloudflare rollback |
| R9 | 503 "fix" without known cause | Medium | High | Fix only after A5 | n/a |
| R10 (new) | A rating is shown without verified evidence or brand permission | Medium (current state) | High (consumer-protection / platform terms) | No score until evidence; prefer the platform's official widget, which renders its own live score | Remove score |
| R11 (new) | Regulatory statements kept on the site are outdated (visas, insurance, vehicle rules) | Medium | High | Official source + access date per statement; generalise when unverifiable; 90-day review | Generalise wording |
| R12 (new) | Removing guarantee wording reduces conversion | Low | Low | Keep confirmed 24/7 support and pre-booked availability prominent | Revert |
| R13 (new) | Fee wording change conflicts with how quotes are actually written | Medium | Medium | Decision 7c-f before C2a; align with quotation line items (`quotations.line_items`) | Revert |
| R14 (new) | Schema retype removes a type some tool expected | Low | Low | `LocalBusiness` without address is ineligible for rich results today; validate with Rich Results Test | Revert |

Global rollback unchanged: one commit and deploy per step; `git revert` or Cloudflare deployment rollback; Supabase edits restored from row backups.

## 3. Phased schedule and effort (developer hours; weeks start on approval)

| Week | Work | Effort | Gate |
|---|---|---|---|
| 0 | F1 baseline; E1/E2/E12 exports; A3 dashboard check | 2 h + your exports | Approval |
| 1 | **A1 robots.txt** (deploy 1) | 1 h | Baseline |
| 1 | A2 `_headers` (deploy 2, after preview) + A4 observability | 2.5–3.5 h | A1 verified |
| 1–2 | A5 reproduction + findings | 2–3 h | A4 |
| 2 | **C2a + C2b** cross-border fee/insurance promises, EN+AR, 16 lines (deploy) | 3–4 h + AR review | 7c-f answered ✅ |
| 2 | **C3a-i** remove testimonial-derived score (deploy) | 1–2 h | Approval |
| After evidence | **C3a-ii** official Trustpilot live widget | 1–2 h | Trustpilot evidence verified |
| 2 | **C4a** outcome-guarantee wording (≈ 4 lines, can join the C2a/b deploy only if you approve bundling; otherwise separate) | 1 h + AR review | — |
| 2 | A7 security headers | 1–2 h | A2 verified |
| 2–3 | B1, B3, B4, B5 internal links | 3–4 h | — |
| 2–3 | B6, B8 blog links batch 1 + advisories/AR night-arrival reconciliation | 5–7 h | Row backups |
| 3 | B7 blog links batch 2 | 4–5 h | B6 verified |
| 2–3 | F2–F4 analytics and attribution | 4–6 h | — |
| 3 | C5 schema/entity (`sameAs` = 4 owned profiles) | 2 h | Approval |
| 3 | C5b remove `twitter:site` `@sauditaxi` (separate commit) | 0.5–1 h | Approval |
| 3–4 | C2c paperwork wording (41 lines) + C2e caution lines | 5–7 h + AR review | C2a/b live |
| 3–5 | C2d regulatory verification (34 lines) + C4d third-party hours (43 lines) | 8–12 h | Official sources |
| 3–5 | D1 + D2 AR Dammam/Madinah hubs | 4–6 h | Rev. 2 wording rules |
| — | C4c operating-availability lines (266) | **0 h — retained (Rev. 3)** | 7a-f answered ✅ |
| 5–8 | D3 remaining AR hubs | 8–12 h | D1–D2 measured |
| After E1 | B9, E1, E5, E7–E10 | 15–25 h | GSC data |
| After decisions | E2 guides (separate approval), E3, E4, E6 | TBD | — |

Phase C total: **~22–34 h** (Rev. 2: 33–52 h; Rev. 1: 10–16 h). Rev. 3 removes the 266-line availability batch and most of the guarantee batch; the remaining effort is cross-border wording (C2a–C2e), official-source verification (C2d, C4d), the rating change (C3a) and the schema change (C5).

## 4. Decisions requiring your approval

| # | Decision | Status (Rev. 2) |
|---|---|---|
| 1 | Approve the plan, specifically A1 (robots.txt) as the first change | Open |
| 2 | Approve A2 `_headers` (7-day cache for `/images/*`) | Open |
| 3 | Approve A4 Workers Logs and A5 reproduction crawl; choose the time window | Open |
| 4 | Approve A7 security headers (CSP deferred) | Open |
| 5 | Choose home-page routes (B2); grow or swap Riyadh list (B1) | Open |
| 6 | Approve Supabase blog edits (B6–B8) with row backups | Open |
| 7a | 24/7 claims | **Answered** — 24-hour support is genuine; **(Rev. 3)** pickup availability confirmed for every listed route |
| 7b | Customer rating | **Answered** — verified third-party platform; **(Rev. 3)** use the official Trustpilot live widget only after verification. *Outstanding evidence:* Trustpilot profile URL, current score, review count, date, screenshot, widget permitted on the account. *Still open:* are the 5 on-site testimonials genuine reviews (C3b)? Approve interim removal of the testimonial-derived score (C3a-i)? |
| 7c | Cross-border documentation and fees | **Answered** — coordination only; **(Rev. 3)** tolls and border fees vary by route or quote; the confirmed quotation controls. *Outstanding evidence:* official sources for any country-specific rules kept on the site (C2d) |
| 8 | Contact identity | **Answered** — Pakistan-based contact details only; **(Rev. 3a, corrected)** only Instagram, Facebook, Pinterest and Reddit are owned and authorised; the X account `@sauditaxi` is **not** owned — excluded from `sameAs` and all tasks; removal of the existing `twitter:site` tag proposed as C5b (needs approval) |
| 9 | Enable Cloudflare Web Analytics (F2); approve F3/F4 | Open |
| 10 | Adopt lead → quotation → invoice process (F5) | Open |
| 11 | Confirm operated routes (E5) before D4, E2, E4 | Open |
| 12 | Pricing: publish fares, luggage and cancellation terms (E3) | Open |
| 13 | Approve the 4 corridor guides (E2) — only new URLs; not started | Open |

## 5. Recommended first phase — smallest safe scope (**unchanged**)

**Phase A-1 = F1 baseline + A1 (robots.txt) + A3 (dashboard check, no code).**

- Code change: one line in `app/robots.ts` (remove `"/_next/"`), alone in its own commit and deploy.
- Before: baseline capture; confirm no unintended pending Supabase blog edits (R1).
- After: T-A1; GSC live test and Request indexing for `/` and `/routes/qassim-to-riyadh`; Bing submission via `scripts/submit-bing-urls.mjs` with `BING_API_KEY` passed at run time.
- The business decisions do not touch this step; it remains the safest first change.

**Rev. 3 status:** A1 is **prepared and checked** — exact diff, rendered robots.txt, typecheck/lint/build results, sensitive-route review, verification, regression and rollback are in `05-a1-robots-change-proposal.md`. `app/robots.ts` has not been edited. Awaiting your approval.

**Recommended second change:** C2a + C2b (16 cross-border fee/insurance promise lines, EN + AR) — decision 7c-f is now answered, so the wording is ready for drafting once A1 is approved and verified. Not started.

**Waiting for your explicit approval before changing any code, content, configuration, database or the live website.**
