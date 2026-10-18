# B-1 Proposal — Bahrain route metadata (direction fixes, airport titles, airport descriptions)

**Revision 3 — 18 October 2026.** Proposal only — **not applied.** No application file, content, metadata, database or configuration has been changed; nothing committed, pushed or deployed. The patch below was generated from a scratchpad copy of `data/routes.ts`; both application methods in §4 were tested only on a temporary copy outside the repository, and against the repository only with `git apply --check` (which writes nothing).

| Revision | Change |
|---|---|
| Rev. 1 (18 Oct) | 7 pages: 5 direction-corrected descriptions + 4 airport titles (9 lines) |
| Rev. 2 (18 Oct) | Final review: content approvable; required correction to the patch-application method; optional extension to two airport descriptions |
| **Rev. 3 (18 Oct)** | **§4 corrected** — `data/routes.ts` is LF, not CRLF; plain `git apply` is no longer recommended (repository has `core.autocrlf=true`); exact string replacement or `git -c core.autocrlf=false apply` documented. **Scope extended** to rewrite the meta descriptions of `khobar-to-bahrain-airport` and `dammam-to-bahrain-airport`. Expected diff: **1 file, 11 insertions, 11 deletions**. Mandatory line-ending validation added (§5) |

## 1. Summary

| Item | Result |
|---|---|
| Scope | 7 English route pages, **11 metadata field changes on 11 lines** in one file (`data/routes.ts`): 7 meta descriptions (5 direction fixes + 2 airport-route rewrites) and 4 airport-route titles |
| Count note | The original seven-page proposal was 9 field changes (5 descriptions + 4 titles). Adding the two airport descriptions makes **11**, not 9; all diff statistics below use 11 |
| Status | **Ready for review** — all 7 URLs. No owner decision blocks B-1 (§6) |
| Excluded | Distances/durations in metadata (EN/AR conflicts — package V15); "(BAH)" in titles (code not shown on the official airport site); Arabic metadata (B-3); visible body copy, route data, structured data and shared templates |
| Cross-country risk | **None.** The edited fields are per-route string literals read only by that route's `generateMetadata` (§2) |

## 2. Verified scope (unchanged from the final review)

| Question | Finding (VERIFIED in the repository, 18 Oct 2026) |
|---|---|
| Where are `route.metaTitle` / `route.metaDescription` read? | Only in `app/(main)/routes/[slug]/page.tsx:121–130` (`generateMetadata` → `buildMetadata` in `lib/seo.ts`), which sets `<title>`, meta description, `og:title`/`og:description` and `twitter:title`/`twitter:description` for **that route's URL only**. The layout title template is `%s`, so titles render exactly as written. No OG-image route exists. Other importers of `data/routes.ts` do not read these two fields (checked file by file) |
| Duplicate definitions? | Each of the 7 slugs is defined once; `routes` = `[...baseRoutes, ...makkahRoutes, ...dammamRoutes]` has 194 routes and 194 unique slugs, so no later entry overrides these edits (checked at runtime) |
| Structured data | Uses `route.from`, `route.to` (breadcrumb, service name) and `route.intro` (service description) — not the meta fields. Unaffected |
| Arabic metadata | Separate: `app/ar/[...slug]/page.tsx:387–388` reads `page.metaTitle` / `page.metaDescription` from `data/translations/ar.ts`. Unaffected |
| Qatar, Kuwait, UAE and shared templates | Unaffected. B-1 does not touch `data/gcc-route-content.ts`, `data/gcc-to-saudi-route-content.ts`, the shared English heading "What We Handle vs What the Border Controls", or the shared Arabic strings in `app/ar/[...slug]/page.tsx` (see package V14) |
| Other references to the replaced strings | None outside `data/routes.ts` (searched `app`, `lib`, `components`, `data`, `scripts`, `public`) |
| Indexing | `khobar-to-bahrain-airport`, `dammam-to-bahrain-airport` and `bahrain-airport-to-khobar` are absent from the 16 Jul–15 Oct Top-pages export. **That is not proof of non-indexing**; their status requires Search Console URL Inspection. B-1 does not depend on it |

## 3. B-1 change matrix

Sources: current strings from `data/routes.ts` (line numbers below); travel direction from each route's runtime `from`/`to`; official airport name from bahrainairport.bh (accessed 18 Oct 2026: "Bahrain International Airport"); "across the King Fahd Causeway" from the Bahrain country facts rendered on every Bahrain route (`crossingName: "King Fahd Causeway (Passport Island)"`) and bahrain.bh; quote wording from the repository's quote workflow (quote form, `quotations` with line items and totals, customer accept page `/quote/[token]`) and the owner-confirmed policy "tolls and border fees vary by route or quote; the confirmed quotation controls". GSC figures are 16 Jul–15 Oct Top-pages observations, not indexing evidence.

| # | URL (runtime from → to) | Current title | Proposed title | Current meta description | Proposed meta description | Reason | Scope risk | Status |
|---|---|---|---|---|---|---|---|---|
| 1 | `/routes/bahrain-airport-to-dammam` (Bahrain Airport → Dammam) | Bahrain Airport to Dammam Private Transfer – Book Your Taxi (`:1686`) | **Bahrain International Airport to Dammam Private Transfer** (56) | Reserve a private Bahrain Airport to Dammam taxi (~100 km, 1 hr 45 min). Comfortable vehicle for the long-distance drive toward Bahrain, fixed price. (`:1688`) | **Private taxi transfer from Bahrain International Airport to Dammam across the King Fahd Causeway. Request a quote — your confirmed quotation sets the price.** (156) | Wrong direction ("toward Bahrain"); EN/AR figure conflict (~100 km vs 85 km); official airport name | This route only | Ready for review |
| 2 | `/routes/bahrain-to-khobar` (Bahrain → Al Khobar) | Bahrain to Al Khobar Taxi – Private Cross-Border Transfer (`:1753`) — unchanged | — | Book a private cross-border transfer from Bahrain to Al Khobar (~55 km, 1 hr). Door-to-door service into Bahrain, fixed fare. (`:1755`) | **Private cross-border taxi transfer from Bahrain to Al Khobar across the King Fahd Causeway. Request a quote — your confirmed quotation sets the price.** (150) | Wrong direction ("into Bahrain"); unverified figures | This route only | Ready for review |
| 3 | `/routes/manama-to-dammam` (Manama → Dammam) | Manama to Dammam Transfer – Private Cross-Border Taxi (`:1820`) — unchanged | — | Reserve a private Manama to Dammam taxi (~90 km, 1 hr 30 min). Comfortable vehicle for the long-distance drive toward Bahrain, fixed price. (`:1822`) | **Private taxi transfer from Manama to Dammam across the King Fahd Causeway. Request a quote — your confirmed quotation sets the price.** (133) | Wrong direction ("toward Bahrain") | This route only | Ready for review |
| 4 | `/routes/bahrain-to-riyadh` (Bahrain → Riyadh) | Bahrain to Riyadh Taxi – Private Cross-Border Transfer (`:1954`) — unchanged | — | Reserve a private Bahrain to Riyadh taxi (~450 km, 4.5-5 hours). Comfortable vehicle for the long-distance drive toward Bahrain, fixed price. (`:1956`) | **Private long-distance taxi transfer from Bahrain to Riyadh across the King Fahd Causeway. Request a quote — your confirmed quotation sets the price.** (148) | Wrong direction ("toward Bahrain"). "Long-distance" is retained here only (route data ~450 km) | This route only | Ready for review |
| 5 | `/routes/bahrain-airport-to-khobar` (Bahrain Airport → Khobar) | Bahrain Airport to Khobar Private Transfer – Book Your Taxi (`:9335`) | **Bahrain International Airport to Khobar Private Transfer** (56) | Reserve a private Bahrain Airport to Khobar taxi (70 km, 1 hr 15 min). Comfortable vehicle for the long-distance drive toward Bahrain, fixed price. (`:9336`) | **Private taxi transfer from Bahrain International Airport to Khobar across the King Fahd Causeway. Request a quote — your confirmed quotation sets the price.** (156) | Wrong direction ("toward Bahrain"); official airport name | This route only | Ready for review |
| 6 | `/routes/khobar-to-bahrain-airport` (Khobar → Bahrain Airport) | Khobar to Bahrain Airport Private Transfer – Book Your Taxi (`:9288`) | **Khobar to Bahrain International Airport Private Transfer** (56) | Reserve a private Khobar to Bahrain Airport taxi (70 km, 1 hr 15 min). Comfortable vehicle for the long-distance drive toward Bahrain, fixed price. (`:9289`) | **Private taxi transfer from Khobar to Bahrain International Airport across the King Fahd Causeway. Request a quote — your confirmed quotation sets the price.** (156) — **Rev. 3** | Official airport name in title; description: removes unverified figures, "fixed price" and the inaccurate "long-distance" (70 km in route data); keeps title and description consistent | This route only | Ready for review |
| 7 | `/routes/dammam-to-bahrain-airport` (Dammam → Bahrain Airport) | Dammam to Bahrain Airport Transfer – Private Cross-Border Taxi (`:9405`) | **Dammam to Bahrain International Airport Private Transfer** (56) | Reserve a private Dammam to Bahrain Airport taxi (85 km, 1 hr 30 min). Comfortable vehicle for the long-distance drive toward Bahrain, fixed price. (`:9406`) | **Private taxi transfer from Dammam to Bahrain International Airport across the King Fahd Causeway. Request a quote — your confirmed quotation sets the price.** (156) — **Rev. 3** | Same as row 6 (85 km in route data) | This route only | Ready for review |

Wording checks on all proposed strings: correct direction for each route; no distances or durations; no "fixed price/fare"; no toll or fee inclusion/exclusion; no border procedure, visa, waiting-time, availability or instant-booking statement. "Your confirmed quotation sets the price" describes the existing quote process and the owner's policy; it promises no price level and no inclusion of fees. (Strictly, the owner statement concerned tolls and border fees; its application to the price generally is inferred from the quote workflow — low risk.)

Known minor residual, unchanged by B-1: page H1s and body text still read "Bahrain Airport" (from route `from`/`to` data) while the titles use "Bahrain International Airport". Not incorrect; aligning it would be a route-data change outside B-1.

### Not in B-1

| Item | Status | Reason |
|---|---|---|
| Distances/durations in any of these descriptions | Blocked | EN/AR figure conflicts (package V15); "duration" values exclude the border crossing and were never labelled as driving time |
| "(BAH)" in titles | Blocked (optional) | IATA code not shown on the official airport site content retrieved |
| Descriptions of `khobar-to-bahrain`, `dammam-to-bahrain`, `dammam-airport-to-bahrain`, `riyadh-to-bahrain` | Out of scope | Direction-correct; review with B-2 |
| Arabic metadata, visible body copy, route data, structured data, shared templates | Out of scope | B-3 / later steps / cross-country review |

## 4. Exact proposed patch and application method (NOT applied)

**Target:** `data/routes.ts` only. **Expected diff: 1 file changed, 11 insertions(+), 11 deletions(−).**

**Line endings (corrected in Rev. 3):** `data/routes.ts` is **LF** in both index and working tree (`git ls-files --eol` → `i/lf w/lf`; 0 CR bytes). The repository has `core.autocrlf=true`. In the final review, applying this patch with **plain `git apply`** in a temporary repository with the same setting rewrote **all 9,605 lines to CRLF**. **Do not use plain `git apply`.**

**Approved application methods (tested on a temporary copy outside the repository; both produced byte-identical output, 0 CR bytes, `i/lf w/lf`, 11/11):**

- **Method A (preferred) — exact, targeted string replacement.** Replace each of the 11 old strings in the table above with its new string, requiring each old string to occur exactly once and inside the intended route block (the scratchpad build script already enforces both). Edits only the 11 metadata lines and preserves LF.
- **Method B (alternative) — `git -c core.autocrlf=false apply <patch>`** using the patch below exactly as written. `git -c core.autocrlf=false apply --check` passed against the current repository (dry run).

```diff
diff --git a/data/routes.ts b/data/routes.ts
--- a/data/routes.ts
+++ b/data/routes.ts
@@ -1684,7 +1684,7 @@ const baseRoutes: Route[] = [
     ],
     relatedCitySlugs: ["dammam", "khobar"],
-    metaTitle: "Bahrain Airport to Dammam Private Transfer – Book Your Taxi",
+    metaTitle: "Bahrain International Airport to Dammam Private Transfer",
     metaDescription:
-      "Reserve a private Bahrain Airport to Dammam taxi (~100 km, 1 hr 45 min). Comfortable vehicle for the long-distance drive toward Bahrain, fixed price.",
+      "Private taxi transfer from Bahrain International Airport to Dammam across the King Fahd Causeway. Request a quote — your confirmed quotation sets the price.",
     sections: [
       {
@@ -1753,5 +1753,5 @@ const baseRoutes: Route[] = [
     metaTitle: "Bahrain to Al Khobar Taxi – Private Cross-Border Transfer",
     metaDescription:
-      "Book a private cross-border transfer from Bahrain to Al Khobar (~55 km, 1 hr). Door-to-door service into Bahrain, fixed fare.",
+      "Private cross-border taxi transfer from Bahrain to Al Khobar across the King Fahd Causeway. Request a quote — your confirmed quotation sets the price.",
     sections: [
       {
@@ -1820,5 +1820,5 @@ const baseRoutes: Route[] = [
     metaTitle: "Manama to Dammam Transfer – Private Cross-Border Taxi",
     metaDescription:
-      "Reserve a private Manama to Dammam taxi (~90 km, 1 hr 30 min). Comfortable vehicle for the long-distance drive toward Bahrain, fixed price.",
+      "Private taxi transfer from Manama to Dammam across the King Fahd Causeway. Request a quote — your confirmed quotation sets the price.",
     sections: [
       {
@@ -1954,5 +1954,5 @@ const baseRoutes: Route[] = [
     metaTitle: "Bahrain to Riyadh Taxi – Private Cross-Border Transfer",
     metaDescription:
-      "Reserve a private Bahrain to Riyadh taxi (~450 km, 4.5-5 hours). Comfortable vehicle for the long-distance drive toward Bahrain, fixed price.",
+      "Private long-distance taxi transfer from Bahrain to Riyadh across the King Fahd Causeway. Request a quote — your confirmed quotation sets the price.",
     sections: [
       {
@@ -9286,6 +9286,6 @@ const baseRoutes: Route[] = [
     ],
     relatedCitySlugs: ["khobar","dammam"],
-    metaTitle: "Khobar to Bahrain Airport Private Transfer – Book Your Taxi",
-    metaDescription: "Reserve a private Khobar to Bahrain Airport taxi (70 km, 1 hr 15 min). Comfortable vehicle for the long-distance drive toward Bahrain, fixed price.",
+    metaTitle: "Khobar to Bahrain International Airport Private Transfer",
+    metaDescription: "Private taxi transfer from Khobar to Bahrain International Airport across the King Fahd Causeway. Request a quote — your confirmed quotation sets the price.",
     faqs: [
       {
@@ -9333,6 +9333,6 @@ const baseRoutes: Route[] = [
     ],
     relatedCitySlugs: ["khobar","dammam"],
-    metaTitle: "Bahrain Airport to Khobar Private Transfer – Book Your Taxi",
-    metaDescription: "Reserve a private Bahrain Airport to Khobar taxi (70 km, 1 hr 15 min). Comfortable vehicle for the long-distance drive toward Bahrain, fixed price.",
+    metaTitle: "Bahrain International Airport to Khobar Private Transfer",
+    metaDescription: "Private taxi transfer from Bahrain International Airport to Khobar across the King Fahd Causeway. Request a quote — your confirmed quotation sets the price.",
     sections: [
       {
@@ -9403,6 +9403,6 @@ const baseRoutes: Route[] = [
     ],
     relatedCitySlugs: ["dammam","khobar"],
-    metaTitle: "Dammam to Bahrain Airport Transfer – Private Cross-Border Taxi",
-    metaDescription: "Reserve a private Dammam to Bahrain Airport taxi (85 km, 1 hr 30 min). Comfortable vehicle for the long-distance drive toward Bahrain, fixed price.",
+    metaTitle: "Dammam to Bahrain International Airport Private Transfer",
+    metaDescription: "Private taxi transfer from Dammam to Bahrain International Airport across the King Fahd Causeway. Request a quote — your confirmed quotation sets the price.",
     faqs: [
       {
```

Generation checks (Rev. 3): each of the 11 old strings occurs exactly once in `data/routes.ts` and inside the intended route block; patch contains 0 CR bytes; regenerated from the current working tree (HEAD `bdeb47e`, `data/routes.ts` unmodified).

## 5. Validation plan (to run only after explicit implementation approval)

**Mandatory line-ending and diff checks:**

| # | Check | Pass criterion |
|---|---|---|
| L1 | `git status` and `git ls-files --eol data/routes.ts` **before** applying | `data/routes.ts` unmodified; `i/lf w/lf` |
| L2 | Apply with Method A or Method B (§4) — never plain `git apply` | — |
| L3 | `git ls-files --eol data/routes.ts` **after** applying | Still `i/lf w/lf`; 0 CR bytes in the file |
| L4 | `git diff --stat` | Exactly **1 file changed (`data/routes.ts`), 11 insertions(+), 11 deletions(−)** |
| L5 | `git diff` read in full | Only the 11 `metaTitle`/`metaDescription` lines in §4; no other line, no whitespace or line-ending churn; identical to the §4 patch |
| L6 | Final reinspection of the complete diff by you | Approved before any commit or deployment |

**Build and regression checks:**

| # | Check | Pass criterion |
|---|---|---|
| V1 | `npx tsc --noEmit` | 0 errors |
| V2 | `npx eslint data/routes.ts` and `npm run lint` | No new problems (project baseline: 10 pre-existing — 6 errors, 4 warnings — none in `data/routes.ts`) |
| V3 | `npm run build` | Succeeds; 904 static pages as before |
| V4 | Built HTML for the 7 URLs | `<title>`, meta description, `og:title`/`og:description`, `twitter:title`/`twitter:description` equal the proposed strings; canonical and hreflang unchanged |
| V5 | Direction check on the 7 URLs | 0 occurrences of "toward Bahrain" or "into Bahrain" in the metadata of Bahrain → Saudi pages; Saudi → Bahrain Airport pages name Bahrain International Airport as the destination |
| V6 | Other Bahrain routes (`khobar-to-bahrain`, `dammam-to-bahrain`, `dammam-airport-to-bahrain`, `riyadh-to-bahrain`) | Metadata byte-identical to before |
| V7 | Non-Bahrain sample (`/routes/riyadh-to-doha`, `/routes/dammam-to-kuwait-city`, `/routes/riyadh-to-dubai`, 2 domestic routes) | Metadata and rendered body identical to before |
| V8 | Arabic counterparts of the 7 URLs; `npm run check:ar-500` | AR metadata unchanged; reciprocal hreflang intact; 6/6 pass |
| V9 | JSON-LD on the 7 URLs | Identical to before (structured data does not use these fields) |
| V10 | Local `next start`: the 7 URLs | 200; no runtime errors |
| V11 | After any separately approved deploy | Live metadata matches; then Search Console URL Inspection for the 3 airport routes (status recorded, not assumed) |

## 5a. Implementation record (18 Oct 2026, after explicit approval of Rev. 3)

**Applied locally** with Method A (exact string replacement). Not pushed or deployed. Commit: see §5b.

| Check | Result |
|---|---|
| Pre-apply | HEAD `bdeb47e`; `data/routes.ts` unmodified, `i/lf w/lf`, 0 CR bytes; all 11 old strings found exactly once in the intended route blocks; dry-run output byte-identical to the reviewed proposal |
| L3 line endings | `i/lf w/lf`, 0 CR bytes; `git diff --check` clean |
| L4 diffstat | `data/routes.ts` only — **11 insertions, 11 deletions** (the pre-existing planning edit in `01-implementation-plan.md` was untouched) |
| L5 diff content | Changed lines identical to the §4 patch; no other edits |
| V1 `npx tsc --noEmit` | Pass (0 errors) |
| V2 lint | `npx eslint data/routes.ts` clean; `npm run lint` problem set identical to baseline (6 errors, 4 warnings, all pre-existing in other files) |
| V3 `npm run build` | Pass — 904/904 static pages, 0 errors (baseline build run immediately before applying also 904/904) |
| V4–V9 full before/after comparison of all 898 prerendered HTML pages (title, all meta tags, canonical, hreflang, `lang`/`dir`, JSON-LD hash, `<main>` hash) | **Exactly the 7 intended pages changed**; 0 pages added/removed; JSON-LD, canonical, hreflang, `lang`/`dir` and `<main>` identical on all 898 pages |
| Other Bahrain routes; non-Bahrain sample (Doha ×2, Kuwait ×2, Dubai, Abu Dhabi, Jeddah, Makkah, Qassim) | Unchanged (4/4, 9/9) |
| Arabic | All 406 Arabic pages unchanged, including the 7 counterparts; hreflang EN↔AR reciprocal on all 7 pairs (local HTTP check) |
| V10 local `next start` | 7 EN + 7 AR URLs → 200; no server errors |

**Side effect recorded — `og:image:alt`:** on the 4 retitled pages (`bahrain-airport-to-dammam`, `bahrain-airport-to-khobar`, `khobar-to-bahrain-airport`, `dammam-to-bahrain-airport`) the `og:image:alt` value also changed, because `buildMetadata` sets the OG image alt text to the page title (`lib/seo.ts:75`). It now equals the new title on all 4 pages. This was not listed in §2 (which named only OG/Twitter title and description) but is the same route's social metadata, follows automatically from the approved title change, and affects no other page.

**Regression-test history:**

| Test | History |
|---|---|
| `check:ar-500` (local, `BASE_URL=http://localhost:3311`) | First run on a freshly started server reported a failure; the next **3 consecutive runs passed 6/6**. Same cold-start pattern seen once during the A1 validation on 16 Oct (alias redirects `/ar/تاكسي-عمرة`, `/ar/النقل-الحدودي` failing once, then passing). Not caused by B-1: none of the 6 checked pages is a Bahrain route and all 406 Arabic pages were byte-identical in the before/after comparison. Re-run against production after any deploy |
| Blog pages in the before/after comparison | A quick whole-object comparison flagged 2 blog pages; key-sorted comparison showed identical values — only the position of Next.js's internal `next-size-adjust` font meta tag differed between builds. All 125 blog pages unchanged |

**Out-of-scope finding (for B-2, not changed):** the `notes` arrays of `khobar-to-bahrain-airport` and `dammam-to-bahrain-airport` (`data/routes.ts:9285, 9402`) say "Fixed price agreed before you travel, including the causeway toll". Not rendered on these pages (absent from the built HTML; `route.notes` is used only by the default route template, `page.tsx:1984`), but it contradicts the owner policy that the confirmed quotation controls toll inclusion. Add to B-2; keep B-1 isolated.

### 5b. Commit and deployment status

| Item | Status |
|---|---|
| Commit | `6c6d8a8` "Fix Bahrain route metadata direction and airport naming (B-1)" on branch `seo/b1-bahrain-metadata` (from `main` @ `bdeb47e`). Contains **only** `data/routes.ts`, 11 insertions / 11 deletions; committed blob has 0 CR bytes; working tree `i/lf w/lf` |
| Isolation | No B-2 fee-copy or other rollout changes included; planning files not committed |
| Merge to `main` / push / deploy | **Done (18 Oct 2026, after explicit approval).** Pre-checks: branch `seo/b1-bahrain-metadata`, commit `6c6d8a8`, parent `bdeb47e` = `main` = `origin/main` (after fetch); commit contains only `data/routes.ts` 11/11; changed lines identical to the §4 patch; 0 CR bytes. `main` fast-forwarded to `6c6d8a8` (no merge commit; `origin/main..main` = this commit only) and pushed 10:42 UTC (`bdeb47e..6c6d8a8`). Cloudflare GitHub-integration deploy live by 10:45 UTC. **Deployed commit: `6c6d8a8`.** Uncommitted planning files untouched |
| Live verification (production, 18 Oct, ~10:46 UTC) | Before/after snapshot of 32 live URLs — the 7 B-1 pages, 4 other Bahrain routes, 5 non-Bahrain controls (Doha, Kuwait City, Dubai, Jeddah Airport→Madinah, Qassim) and the 16 Arabic counterparts (found via each page's `hreflang="ar"`); baseline fetched twice before the push, 0 differences between fetches. Result: **0 failures.** All 7 pages: `<title>`, meta description, `og:title`/`og:description`, `twitter:title`/`twitter:description` and `og:image:alt` equal the reviewed strings (`og:image:alt` = title; changed on the 4 retitled pages only); no "toward/into Bahrain". Canonical, hreflang, `lang`/`dir`, JSON-LD and `<main>` content unchanged on all 32 URLs; all 16 Arabic pages' metadata unchanged; all control and other-Bahrain metadata unchanged; all 200 |
| `check:ar-500` against production | **Pass 6/6** on first run |
| Search Console URL Inspection (`/routes/khobar-to-bahrain-airport`, `/routes/dammam-to-bahrain-airport`, `/routes/bahrain-airport-to-khobar`) | **Not yet performed — requires the owner's Search Console access.** No indexing status is assumed; record the actual result (coverage status, last crawl, Google-selected canonical) here when run |

## 6. Decisions that block B-1

**None beyond your explicit approval of this diff and the application method.** The proposal relies only on the routes' own `from`/`to` data, the official airport name, the repository's quote workflow, and owner-confirmed policies already on record (pickup availability on every listed route; the confirmed quotation controls toll/fee inclusion).

Not required for B-1 but required for later steps: O4, O8, verified distance/duration figures (V15), official sources for regulatory statements, native Arabic review, Search Console URL Inspection results.
