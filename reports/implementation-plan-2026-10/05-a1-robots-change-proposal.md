# A1 Change Proposal — remove `/_next/` from robots.txt (G01)

Prepared 16 October 2026. **Proposal only — `app/robots.ts` has not been edited, nothing is committed or deployed.** The diff below was generated against a copy in the session scratchpad; all checks ran either on the unchanged repository or in memory.

## 1. Exact proposed diff

```diff
--- a/app/robots.ts
+++ b/app/robots.ts
@@ -6,7 +6,7 @@ export default function robots(): MetadataRoute.Robots {
     rules: {
       userAgent: "*",
       allow: "/",
-      disallow: ["/api/", "/admin/", "/_next/"],
+      disallow: ["/api/", "/admin/"],
     },
     sitemap: absoluteUrl("/sitemap.xml"),
     host: siteConfig.url,
```

- One line, one file. Line endings preserved (working tree CRLF, repository LF — `git ls-files --eol`: `i/lf w/crlf`), so `git diff` will show a single-line change.
- Commit (after approval) would contain only this file, e.g. "Allow crawlers to fetch /_next/ assets in robots.txt".

### Rendered robots.txt (Next.js's own serializer, `resolveRobots`)

| Current (identical to live production, byte for byte) | Proposed |
|---|---|
| `User-Agent: *`<br>`Allow: /`<br>`Disallow: /api/`<br>`Disallow: /admin/`<br>`Disallow: /_next/`<br><br>`Host: https://saudiprivatetransfers.com`<br>`Sitemap: https://saudiprivatetransfers.com/sitemap.xml` | `User-Agent: *`<br>`Allow: /`<br>`Disallow: /api/`<br>`Disallow: /admin/`<br><br>`Host: https://saudiprivatetransfers.com`<br>`Sitemap: https://saudiprivatetransfers.com/sitemap.xml` |

## 2. Why the change is needed and what it should improve

**Verified:** every page's stylesheets (`/_next/static/chunks/*.css`), JavaScript chunks (`/_next/static/chunks/*.js`) and optimised images (`/_next/image?url=…`) sit under `/_next/`, which robots.txt has blocked since the initial commit (1 Jun 2026). Compliant crawlers (Googlebot, Bingbot, and the AI-search crawlers that respect robots.txt) may fetch the HTML but not the resources needed to render it.

**Expected improvements (not yet measured — see §4):**
- Google and Bing can render pages with their CSS, so layout and mobile-friendliness are evaluated on the real page, not an unstyled one.
- Page images served through `/_next/image` become crawlable (image search, image understanding).
- Consistency with Google's guidance not to block CSS/JS needed for rendering.

**What it will not do:** it does not change any page, URL, canonical, hreflang, sitemap, structured data or user-visible behaviour. Indexed text was already readable from server-rendered HTML; ranking effects are a hypothesis until GSC URL Inspection shows the before/after rendering (evidence E12).

## 3. Non-destructive checks performed (16 Oct 2026)

| # | Check | Method | Result |
|---|---|---|---|
| 1 | Repository state before work | `git status`, `git diff HEAD`, `git log -1` | HEAD `9098f18`; no tracked changes; only `reports/seo-audit-2026-10/` and `reports/implementation-plan-2026-10/` untracked; **no unexpected changes** |
| 2 | Typecheck — current tree | `npx tsc --noEmit` | **Pass** (exit 0) |
| 3 | Typecheck — proposed change | TypeScript API, full project program with `app/robots.ts` replaced **in memory** by the proposed text | **Pass** — 0 diagnostics; confirmed the program used the proposed text |
| 4 | Lint — proposed `app/robots.ts` | ESLint `lintText` with `filePath: app/robots.ts` | **Pass** — 0 errors, 0 warnings (current file: also 0/0) |
| 5 | Lint — whole project (baseline) | `npm run lint` | **Fails on pre-existing issues unrelated to this change:** 10 problems (6 errors, 4 warnings) in `app/(main)/[city]/[route]/page.tsx:385`, `components/quotation/QuotationClientActions.tsx:63`, `components/sections/LatestGuides.tsx:42`, `components/sections/SitemapSearch.tsx:47,65`, `components/sections/StatsBand.tsx:23` (errors) and 4 unused-variable warnings. None in `app/robots.ts`. The change neither adds nor removes any. Recorded as the lint baseline (test S2: "0 new errors") |
| 6 | Production build — current tree | `npm run build` (includes `prebuild`, which clears `.next/cache/fetch-cache`) | **Pass** — compiled in 25.8 s; TypeScript OK; 904/904 static pages generated; 0 errors, 0 warnings in the log; `/robots.txt` prerendered as static (`○`); `.next/server/app/robots.txt.body` equals live production |
| 7 | Rendered output — proposed | Next's `resolveRobots()` on the proposed module | Exactly the current output minus `Disallow: /_next/` (table above) |
| 8 | No other robots source | `public/robots.txt` absent; live file equals Next's output (no Cloudflare-managed robots.txt prepended) | Confirmed |
| 9 | Private routes (live, read-only GET) | curl | `/admin` → 307 to `/admin/login?next=…`; `/admin/leads` → 307 to login; `/admin/login` 200 with `noindex, nofollow, nocache`; `/api/admin/leads` → **401**; `/api/leads` (GET) → 405; `/quote/<invalid>` and `/invoice/<invalid>` → 404 with `noindex` |
| 10 | What `/_next/` exposes | live + build output | `/_next/image` with a remote URL → **400** (no `remotePatterns`; only local images are served); source maps: live `.js.map` → 404 and 0 `.map` files in `.next/static`; no `sourceMappingURL` comment in chunks |

**Not feasible without applying the change:** a production build *of the modified file*. Because the change removes one string from a `string[]` that Next serialises (check 7), and checks 3–4 cover type and lint, the risk of a build difference is negligible. After approval, the full build and S-checks will be re-run on the applied change **before** deploying.

Side effect of check 6: `next build` rewrote the git-ignored `.next/` output and cleared the git-ignored `.next/cache/fetch-cache` (as every build does). No tracked file changed.

## 4. Private and sensitive routes — effect of the change

| Area | Current protection | After the change |
|---|---|---|
| `/admin/*` CRM pages | robots `Disallow: /admin/`; `proxy.ts` redirects unauthenticated requests to `/admin/login`; admin layout `noindex` | **Unchanged** — `Disallow: /admin/` stays |
| `/api/*` incl. `/api/admin/*`, `/api/leads`, `/api/quote/[token]/action`, `/api/whatsapp-click` | robots `Disallow: /api/`; `/api/admin/*` returns 401 without a session; public APIs accept POST only | **Unchanged** — `Disallow: /api/` stays |
| `/quote/[token]`, `/invoice/[token]` | `noindex` meta; unguessable tokens; **not** in robots.txt (correct — a disallow would stop crawlers seeing `noindex`) | **Unchanged** |
| `/_next/static/*` | Build-hashed public JS/CSS/fonts that every visitor already downloads; no source maps | Becomes crawlable — **no private data** |
| `/_next/image` | Resizes local `/public` images only (remote URLs rejected) | Becomes crawlable — public images only |

robots.txt is a crawl directive, not access control; private areas remain protected by authentication (`proxy.ts`) and `noindex`, which this change does not touch.

Observation (pre-existing, not changed by this proposal): `Disallow: /admin/` does not literally match the bare `/admin` path, but `/admin` redirects to the `noindex` login page, so there is no exposure. Any tightening (e.g. `Disallow: /admin`) would be a separate, separately approved change.

## 5. Production verification (after approval and deploy)

| Step | Check | Pass criterion |
|---|---|---|
| V1 | `curl -s https://saudiprivatetransfers.com/robots.txt` | Exactly the "Proposed" text in §1 (diff against the saved expected file) |
| V2 | `curl -sI …/robots.txt` | 200, `text/plain` |
| V3 | GSC → Settings → robots.txt report → request recrawl | Fetched version shows no `/_next/` line (usually within 24 h) |
| V4 | GSC URL Inspection → Test live URL: `/` and `/routes/qassim-to-riyadh` | Screenshot styled; "Page resources" lists no robots-blocked CSS/JS/images (E12) |
| V5 | Bing Webmaster → robots.txt tester / URL inspection; optional `BING_API_KEY=… node scripts/submit-bing-urls.mjs / /routes/qassim-to-riyadh` (key passed at run time only) | Bing reports the new rules; URLs accepted |
| V6 | `/admin/`, `/api/` remain disallowed (robots tester for `/admin/leads`, `/api/leads`) | Blocked |

## 6. Regression checks (after deploy)

| Check | Pass criterion |
|---|---|
| S5 `npm run check:ar-500` (production) | 6/6 URLs 200 |
| S6 status sample (20 URLs incl. EN/AR home, `qassim-to-riyadh` EN+AR, airport and border hubs, 2 blogs, `/get-quote`, `/ar/اطلب-عرض-سعر`, 3 retired hotel URLs, `http://`, `www.`) | Identical to baseline (200s, 301/308 targets) |
| S7 canonical/hreflang on the sample | Identical to baseline |
| `/sitemap.xml` | 200; 895 `<loc>` entries |
| Private routes (§4 check 9) | Same responses: 307/401/405/404 + `noindex` |
| `x-nextjs-cache` on the sample | `HIT` |
| Workers errors graph, 30 min after deploy | No increase in 5xx vs the previous 24 h |
| Workers requests/day and Images usage, days 1–14 | Within Free-plan limits (risk R2) |
| Pending blog edits | Before deploy: no unintended Supabase `blogs` rows updated since the last deploy (risk R1) |

## 7. Rollback procedure

1. **Fastest:** Cloudflare dashboard → Workers & Pages → `sauditaxi` → Deployments → roll back to the previous deployment (restores the old robots.txt immediately; no build needed).
2. **Source of truth:** `git revert <A1 commit>` and redeploy through the normal pipeline, so the repository matches production.
3. Verify with V1 (expect `Disallow: /_next/` back) and, if needed, request a robots.txt recrawl in GSC.
4. **Partial rollback** (only if Images/Worker quotas are threatened, R2): replace with `disallow: ["/api/", "/admin/", "/_next/image"]` — a separate approved change.

No database, content, URL or configuration state is involved, so rollback has no data implications.

## 8. Approval requested

Approve A1 to: apply the one-line diff to `app/robots.ts`; re-run typecheck, the proposed-file lint, and the build on the applied change; commit this file alone; deploy; run §5–§6. Nothing else is included.
