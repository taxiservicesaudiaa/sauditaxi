# Patch B — Riyadh hub link to Riyadh → Qassim: implementation and validation

**18 October 2026.** Applied locally and validated. **Not committed, not pushed, not deployed.** Patch A is unapplied; it waits for the native Arabic sign-off of `16-qassim-arabic-review-pack.md`.

## Change

| Item | Detail |
|---|---|
| Approved patch | `15-qassim-opp08-riyadh-hub-link.patch` |
| Applied diff | `17-patch-b-applied.diff`. Its changed lines are identical to the approved patch. |
| File changed | `data/city-guides.ts`: 1 insertion, 0 deletions |
| What changed | One card added to the Riyadh guide's "Private Transfers from Riyadh to Other Cities" section: **Riyadh to Qassim** → `/routes/riyadh-to-qassim`. Link label: "Riyadh to Qassim route". Body: "A private transfer north to Buraidah, Unaizah and the wider Qassim region." |
| Page affected | `/taxi-service/riyadh` (English only) |
| Baseline | `HEAD` = `origin/main` = `6c6d8a8` |
| Method | `git -c core.autocrlf=false apply --check` passed, then `git -c core.autocrlf=false apply` |

```diff
@@ -63,6 +63,7 @@ export const cityGuides: Record<string, CityGuide> = {
             { title: "Riyadh to AlUla", body: "A private long-distance transfer to the heritage sites and resorts of AlUla.", href: "/routes/riyadh-to-alula", linkLabel: "Riyadh to AlUla route" },
+            { title: "Riyadh to Qassim", body: "A private transfer north to Buraidah, Unaizah and the wider Qassim region.", href: "/routes/riyadh-to-qassim", linkLabel: "Riyadh to Qassim route" },
           ],
```

## Line endings

`data/routes.ts` and `data/city-guides.ts` were CRLF in the working tree. In both cases the content was identical to `HEAD`, which `git diff --quiet HEAD` confirmed before anything was touched. The `routes.ts` conversion was a side effect of the B-1 branch checkout. Both files were re-checked-out with `core.autocrlf=false`.

Result: both are `i/lf w/lf` with 0 CR bytes. `routes.ts` has no diff. `city-guides.ts` differs only by Patch B. `git diff --check` is clean.

Git's warning "LF will be replaced by CRLF the next time Git touches it" comes from the repository's `core.autocrlf=true` setting. On commit, git normalises line endings to LF in the index anyway.

## Validation

| Check | Before (baseline) | After Patch B | Result |
|---|---|---|---|
| `npx tsc --noEmit` | 0 errors | 0 errors | Pass |
| `npm run lint` | 10 problems (6 errors, 4 warnings) | Same 10 problems; the problem list is identical | **No new problems.** The 10 are pre-existing and in other files |
| `npx eslint data/city-guides.ts` | — | Clean | Pass |
| `npm run build` | 904/904 static pages | 904/904 | Pass |
| Before/after comparison of all 898 prerendered HTML pages: title, every meta tag, canonical, hreflang, `lang`/`dir`, JSON-LD hash, `<main>` hash | — | **1 page changed**: `/taxi-service/riyadh`, `<main>` only | Pass. Title, metadata, canonical, hreflang and JSON-LD are unchanged there too |
| Arabic pages | — | 0 changed | Pass |
| Blog pages (Supabase-backed) | — | 0 changed | Pass |
| Other routes and hubs | — | 0 changed | Pass |
| Local `next start` (port 3311): `/taxi-service/riyadh` | — | 200 | Pass |
| Hub section "Private Transfers from Riyadh to Other Cities" | 5 cards | 6 cards; the new card is last | Pass |
| New card markup | — | Same component markup as the AlUla card (tags and classes compared with text removed) | Pass |
| Links in the hub's `<main>` | — | 9 unique internal links, all 200, including `/routes/riyadh-to-qassim` | Pass |
| Sitemap (`/sitemap.xml`, local) | — | 895 `<loc>` entries, the same count as production; `/taxi-service/riyadh` listed once | Pass. No URL added or removed |
| `npm run check:ar-index` | — | "ar-index.ts matches getArPages() exactly (447 entries)" | Pass |
| `npm run check:ar-500` (local) | — | **Run 1 failed.** After a server restart, runs 2–4 passed 6/6 | See below |
| `npm run check:ar-500` (production) | — | 6/6 | Pass |

**`check:ar-500` history.** The first local run, against a server started about a minute earlier, reported "one or more Arabic pages are broken". Only the summary line was captured, so **which page failed was not recorded** — an evidence gap.

After restarting the server, three consecutive runs passed 6/6. Patch B cannot be the cause:
- it changes no Arabic data;
- all Arabic prerendered pages were identical before and after.

This matches the cold-start pattern seen during the A1 and B-1 validations. Treat it as a known intermittent issue in the local check, not as a regression. It's worth investigating separately.

## Not changed (verified)

- Arabic content, including the Arabic city pages
- Shared templates (`app/`, `components/`, `lib/`)
- Database-backed blogs
- Other route pages and the other hub cards or sections
- Patch A files: `data/routes.ts` content and `data/translations/ar.ts`

The `M reports/implementation-plan-2026-10/01-implementation-plan.md` entry is the earlier, preserved planning edit.

## Next steps (each needs separate approval)

1. Owner review of this diff, then a commit if approved. Deployment is a separate approval.
2. Patch A is applied only after the native Arabic sign-off, with the reviewed corrections and the full validation checklist.
3. Riyadh airport (RUH) drop-off availability is still unverified. Patch A's wording stays quotation-dependent and is flagged for the owner.
