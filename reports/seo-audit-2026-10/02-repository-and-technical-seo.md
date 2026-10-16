# Report 2 — Repository Architecture and Technical SEO

Audit date: 16 October 2026. Repository `main` @ `9098f18`. Live evidence comes from a read-only GET crawl of https://saudiprivatetransfers.com on 16 Oct 2026, 14:12–14:23 PKT: 1,230 URLs fetched (896 clean URLs plus 334 query-string variants), with 2 concurrent requests and a 300 ms delay, user agent `SPT-SEO-Audit/1.0 (read-only)`. No forms were submitted.

Status labels: **Verified** = observed directly in code or live responses. **Inferred** = a reasoned conclusion that still needs confirming evidence (listed in Report 9).

## 1. Architecture

| Layer | Implementation |
|---|---|
| Framework | Next.js 16.3.8, App Router, Turbopack build |
| Hosting | Cloudflare Workers via OpenNext Cloudflare 1.20.8 (Workers **Free** plan) |
| Incremental cache | OpenNext static-assets incremental cache; `prebuild` clears `.next/cache/fetch-cache` so database edits reach production on deploy |
| Data | Route, airport, border, city, point-transfer and distance pages: TypeScript data files in `data/` and `lib/`. English blogs: Supabase `blogs` table (fetched at build; no `revalidate`, so **a deploy is required to publish blog edits**). Arabic: `data/translations/ar.ts` + generated `ar-index.ts` |
| Routing / middleware | `proxy.ts` — 301s the 174 EN + 41 AR retired hotel-transfer pages to `/cities/{city}#hotels`, decodes Arabic paths |
| Leads | `app/api/leads/route.ts` (zod schema with first-touch attribution fields; in-memory per-isolate rate limit of 5/min/IP; Resend email notification) → Supabase `leads`. `app/api/whatsapp-click` → `whatsapp_clicks` |
| Analytics | **None installed** (no GA4, GTM, Clarity, Plausible). First-party lead and WhatsApp-click logging only |
| Admin | `/admin/*` (noindex, disallowed in robots), token-protected quote and invoice pages (noindex) |

### Page generators (all verified; 0 duplicate URLs across generators)

| Template | File | Source data | EN pages | AR pages |
|---|---|---|---|---|
| Static and service pages | `app/(main)/*/page.tsx` | inline | 17 | 15 (about, contact, quote, services, 8 services, 2 legal, home) |
| Route | `app/(main)/routes/[slug]/page.tsx` (2,095 lines) | `data/routes.ts`, `makkah-routes.ts`, `dammam-routes.ts` | 194 | 194 |
| Airport hub | `app/(main)/airport-transfer/[airport]/page.tsx` | `data/airports.ts` | 13 | **4** |
| Border hub | `app/(main)/border-transfers/[border]/page.tsx` | `data/borders.ts` | 5 | 0 |
| City taxi | `app/(main)/taxi-service/[city]/page.tsx` | `data/cities.ts` | 19 | 19 |
| City hotel/airport hub | `app/(main)/cities/[city]/page.tsx` | `lib/hotel-transfers.ts` | 5 | 5 |
| Point-to-point | `app/(main)/[city]/[route]/page.tsx` | `lib/point-transfers-v2.ts` | 61 | 61 |
| Distance / journey | `app/(main)/distance/[slug]/page.tsx` | `data/distance-guide-v2.ts`, `journey-guide-v2.ts` | 50 | 50 |
| Blog | `app/(main)/blog/[slug]/page.tsx` | Supabase | 125 | 59 (58 translations + 1 Arabic-only) |
| Retired hotel pages | `proxy.ts` | `lib/hotel-transfers.ts` | 174 → 301 | 41 → 301 |

**Reconciliation (verified):** code + database produce 896 indexable URLs. Sitemap = 895 URLs; the 896th is `/sitemap` (the HTML sitemap page), which is linked but not in sitemap.xml. Every code URL was found in the live crawl, and no live URL was found that the code does not generate.

## 2. Crawl and indexability

| Check | Result | Status |
|---|---|---|
| Final HTTP status of 896 clean URLs | 896 × 200 | Verified |
| Sitemap URLs returning non-200 | 0 | Verified |
| Retired hotel pages | Sample of 7 (5 EN, 2 AR) all 301 to the correct hub `#hotels` anchor | Verified |
| `http://` → `https://` | 301 | Verified |
| `www.` → apex | 308 | Verified |
| Unknown URL | 404 | Verified |
| noindex on public pages | 0 | Verified |
| Canonical present / self-referencing (clean URLs) | 896 / 896 | Verified |
| Query-string variants | 313 `/get-quote?pickup=…`, 5 `/get-quote?dropoff=…`, 16 `/blog?category=…` — all canonicalise to the clean URL | Verified; minor crawl-budget cost only |
| Orphans (zero internal inlinks) | 0 | Verified |
| **Transient 503s during crawl** | **241 of 1,230 requests (20%) returned 503, plus 9 returned 200 with an empty body**, all between crawl positions 408–896 (~14:16–14:20), only on `/blog/*` and `/ar/*` URLs, alternating with successful responses. All 250 returned 200 with full content when refetched minutes later, and an 80-request probe at the same concurrency could not reproduce it | **Verified incident, cause unknown** — see §2.1 |
| **robots.txt `Disallow: /_next/`** | Blocks `/_next/static/*` (all CSS and JS) and `/_next/image` (all page images) for every crawler. Present since the initial commit (1 Jun 2026) in `app/robots.ts` | **Verified defect** — see §2.2 |

### 2.1 Transient 503 / empty-body incident

- **What was observed.** About half of the blog and Arabic requests in a four-minute window failed fast (median 0.52 s) with no `x-nextjs-cache` header. Requests for other page families before that window, all 680 of them, succeeded at the same request rate.
- **Why it matters.**
  - Googlebot receiving 503s at this rate will slow crawling.
  - A 200 with an empty body is worse: it can be stored as a blank page.
  - This resembles the 1102 "Worker exceeded resource limits" episodes earlier in October (Report 9, E7). That link is **inferred, not proven**.
- **Evidence needed.** Cloudflare Workers logs or analytics for 16 Oct 14:15–14:21 PKT (error type: 1102 / CPU / memory / subrequest), and GSC Crawl Stats (host status, 5xx share). Recorded as Report 9 **E11**.

### 2.2 robots.txt blocks rendering resources

```
User-Agent: *
Allow: /
Disallow: /api/
Disallow: /admin/
Disallow: /_next/
```

- **What is blocked.** Every stylesheet (`/_next/static/chunks/*.css`), every JS chunk, and every optimised image (`/_next/image?url=…`) on the site.
- **Why it matters.**
  - Google's guidance is not to block the CSS and JS needed to render a page. Because the HTML is server-rendered, the text content is still readable.
  - Google renders the page without styles. That can affect mobile-usability and layout evaluation, and page images cannot be crawled for Google Images.
  - The actual effect on rankings is **unverified**. GSC URL Inspection ("View crawled page" → screenshot and "Page resources couldn't be loaded") would confirm it (E1).
- **Fix scope (for approval).** A one-line change in `app/robots.ts`, with very low risk.

## 3. International (EN/AR)

| Check | Result |
|---|---|
| Pages with hreflang | 799 of 896 (all AR pages + EN pages that have an AR counterpart) |
| Non-reciprocal pairs | 0 |
| hreflang target not 200 | 0 |
| Sitemap `xhtml:link` alternates vs HTML hreflang | identical on all 895 sitemap URLs |
| `x-default` | Not used anywhere. Optional, but recommended for the home page and hubs |
| `lang`/`dir` | Correct on all 896 (EN `lang=en`; AR `lang=ar dir=rtl`) |
| EN pages without an AR counterpart | 97: 65 blogs, **9 airport hubs** (Madinah, Dammam, Taif, Abha, Tabuk, Yanbu, AlUla, Jazan, Hail), **5 border hubs**, 18 static/utility |
| AR content depth | AR median main-content length 652 words vs EN route median 1,003. 25 AR titles are under 30 characters (e.g. `نقل خاص من الدمام إلى الخبر`) — short but not wrong |

Arabic URLs are percent-encoded Arabic slugs, served correctly and matched case-sensitively. The 2026-10 hreflang cleanup holds.

## 4. On-page

| Check (896 clean URLs) | EN (489) | AR (407) |
|---|---|---|
| Missing title / description / H1 | 0 / 0 / 0 | 0 / 0 / 0 |
| Duplicate titles / descriptions / H1 | 0 / 0 / 0 (sitewide) | |
| Multiple H1 | 0 | 0 |
| Titles > 60 chars | 52 | 34 |
| Descriptions > 160 chars | 44 | 39 |
| Images without alt | 1 image on `/ar` | |

Main-content length by template (p10 / median words):

| Template | p10 | median | Note |
|---|---|---|---|
| Route | 534 | 1,003 | **39 routes under 600 words** — mainly AlUla/Tabuk/NEOM/Yanbu/Madinah/Abha corridors and `jeddah↔dammam` |
| Point-to-point | 663 | 767 | |
| Distance / journey | 650 | 758 | |
| City taxi | 591 | 675 | |
| Airport hub | 1,150 | 1,220 | |
| Border hub | 989 | 1,070 | |
| City hub | 1,972 | 2,648 | |
| Blog | 1,369 | 2,439 | (crawl counts the whole `<main>`, incl. FAQs and related links) |
| Arabic (all) | 374 | 652 | |

### Internal linking (verified from crawl inlink counts)

- Sitewide navigation and footer give the 13 airport hubs, 19 city taxi pages and service pages about 820 inlinks each.
- **Route pages have a median of 7 inlinks; point-to-point 4; distance pages 3; city hubs 3–5.**
- **`/routes/qassim-to-riyadh`, the single largest lead-generating page, has 5 internal inlinks; `/routes/riyadh-to-qassim` has 4.** Lead evidence and internal prominence are mismatched.
- The lowest-linked commercial pages (2–3 inlinks) include `makkah-train-station-to-haram-hotels`, `madinah-train-station-to-prophets-mosque`, `red-sea-airport↔umluj`, `alula-to-yanbu` and `makkah-to-abha`.
- The 5 city hubs (`/cities/*`) absorbed the 215 hotel redirects but are linked from only 3–5 pages each.

## 5. Structured data (verified on all 896 pages, 0 JSON-LD parse errors)

| Type | Pages | Notes |
|---|---|---|
| Organization, WebSite, LocalBusiness, TaxiService | ~all (sitewide in layout) | **LocalBusiness has no `address`**, `sameAs` is empty, and `telephone` is the +92 (Pakistan) business number from `siteConfig`. No `aggregateRating` (correct — no self-serving review markup) |
| BreadcrumbList | all except `/` | Expected on the home page |
| FAQPage | 805 incl. variants | All routes, hubs, distance and point pages. **Blogs: only 54/125 emit FAQPage** — the schema comes from the per-post `schema_json` DB field, not from the visible FAQ list rendered on all 125. Google limits FAQ rich results to authoritative government and health sites, so this is AEO/consistency value only |
| Service | 646 | Route/hub/point/AR pages |
| BlogPosting | 127 | EN blogs + AR blogs with `datePublished` |
| HowTo | 13 | Google no longer shows HowTo rich results — harmless |
| Event | 7 | Event posts (WWE, Black Hat, WRC, F1H2O, GP 2027, AlUla Skies, Jeddah Season). The site does not organise these events; Event markup on a third-party transport guide may be ineligible or misleading if event details change. Review |

## 6. Performance (lab only — no field data, see E3)

| Measure | Result | Status |
|---|---|---|
| HTML response time (crawl, from Cloudflare HKG PoP) | median 0.55 s, p90 0.83 s (full HTML download) | Verified, single vantage |
| Earlier single-request TTFB samples (10–16 Oct) | 1.4–2.4 s on some HIT pages | Verified, variable |
| HTML edge caching | `Cache-Control: s-maxage=31536000`, but no `CF-Cache-Status` on HTML — every HTML request runs the Worker (served from the OpenNext incremental cache, `x-nextjs-cache: HIT`) | Verified |
| **Static asset caching** | `/_next/static/*` JS/CSS served with `Cache-Control: public, max-age=0, must-revalidate` (CF-Cache-Status HIT at edge, but browsers revalidate every visit). The `immutable` header in `next.config.ts` `headers()` is not applied to Cloudflare static assets, and there is no `public/_headers` file | **Verified defect** |
| JavaScript | Homepage loads ~966 KB decompressed JS across 12 scripts | Verified |
| PageSpeed Insights / CrUX | API returned HTTP 429 | Not measured (E3) |

## 7. Security and headers

| Header | Value |
|---|---|
| HSTS | `max-age=86400` (1 day; no `includeSubDomains`/`preload`) |
| Content-Security-Policy, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy | **Not set** |
| `x-powered-by: Next.js` | Exposed |
| `/.well-known/security.txt` | 404 |
| Secrets in repo | None tracked (`.env` git-ignored); the previously pasted Resend key should already have been rotated — confirm |
| Lead endpoint | Rate-limited per isolate only (in-memory), so limits reset per Worker isolate. No CAPTCHA/Turnstile. Acceptable at current volume; monitor for spam |

None of these is a ranking factor on its own. The missing `X-Content-Type-Options`/`Referrer-Policy` and the short HSTS are low-effort hardening items.

## 8. AEO / GEO (answer-engine visibility)

- **ChatGPT is the largest identified lead source:** 47 of 143 leads (33%) have `first_utm_source=chatgpt.com`. That is more than Bing (12), DuckDuckGo (6), Google (4) and Perplexity (1) combined. Verified from the `leads` table. This is the strongest channel evidence the site has.
- robots.txt allows all user agents (GPTBot, OAI-SearchBot, PerplexityBot, ClaudeBot are not blocked). Bing indexing matters because ChatGPT search draws on Bing (E2).
- `/llms.txt` returns 404. It is optional and unproven as a ranking input, so it is low priority.
- What helps answer engines and is already present: consistent route facts (distance and duration per route), FAQ blocks on every commercial page, and bilingual pages.
- What is missing:
  - No published prices or "from" fares. Competitors publish per-route fares (Report 6 §B), and answer engines quote them.
  - No luggage, vehicle-capacity or cancellation policy per route.
  - No verifiable entity signals (`sameAs` empty, no address, no Google Business Profile link).

## 9. Local and entity

- **No physical Saudi address** anywhere in schema or on the contact page. That is acceptable for a service-area business, and **no city offices should be invented**.
- The business contact number in schema and WhatsApp is a **+92 (Pakistan)** number. For a Saudi transfer brand this weakens local trust signals and may reduce conversion from Saudi visitors. That is **inferred** and needs business input on whether a Saudi (+966) number exists.
- `sameAs` is empty: no Google Business Profile, social or directory profiles are linked.
- **Visible claims that need confirmation (E6):**
  - "24/7 availability/support" appears in `HomeHero`, `HomeTrustStrip`, `TrustBadges`, `TrustSection`, `WhyChooseUs` and `AboutStatsStrip`, and the terms page does not support it.
  - The visible "x/5 customer rating" is computed from first-party testimonials in `data/testimonials.ts`.
  - The cross-border templates claim the business "handles" vehicle insurance and documentation (`data/gcc-route-content.ts`, `data/gcc-to-saudi-route-content.ts`).

## 10. Conversion and lead generation

| Item | Finding |
|---|---|
| Lead volume | 143 leads, Jul–Oct 2026 (Jul 12, Aug 24, Sep 28, Oct 79 to 16 Oct; Oct spike on 10–15 Oct coincides with airport-disruption advisories) |
| Where leads are submitted | `/get-quote` 84 of 143; the rest on route/point forms |
| Top first landing pages | `/routes/qassim-to-riyadh` 13 (+3 AR), `/airport-transfer/dammam-airport` 6, `/routes/doha-to-riyadh` 5, `/`, `/routes/riyadh-to-doha`, `/routes/riyadh-to-bahrain`, `/routes/dammam-to-riyadh` 4 each |
| CTA coverage | Every commercial page has a WhatsApp link and a quote link (0 pages missing either). Inline forms on all 194 route pages, 61 point pages and 258 AR pages; hubs link to `/get-quote` instead |
| Click-to-call | **0 pages** have a `tel:` link |
| WhatsApp clicks | 148 logged (Aug–Oct); top sources `/get-quote` 29, AR Qassim→Riyadh 9, `/routes/qassim-to-riyadh` 7, `/ar` 6 |
| Lead follow-up | 135 of 143 leads still "New" in the table, so conversion to booking cannot be measured (E4) |
| Gap 1–5 Oct | 0 leads recorded (E7) |
