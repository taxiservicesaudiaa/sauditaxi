# Bing URL submission — 37 pending URLs (result)

**Date:** 22 October 2026. **Scope:** validation and Bing submission of the 37 pending URLs only. No site content, code, metadata, sitemap, database or production setting was changed. No commit, push or deploy.

## 1. Source of the list

The list was **not reconstructed by hand**. It comes from the method already established for Bing batches: live `sitemap.xml` URLs minus every URL recorded in `docs/bing-submitted-urls.json` (14 batches, 859 URLs).

On 22 Oct this produced **37 unique URLs**. The result **exactly matches** the 36 URLs identified on 19 Oct plus the intercity flight-disruption guide published that day (0 missing, 0 extra).

## 2. Validation (all 37 passed)

| Check | Result |
|---|---|
| Absolute URL on the verified property (`https://saudiprivatetransfers.com/`; Bing `GetUserSites`: verified = true) | 37/37 |
| HTTP 200 without redirect | 37/37 |
| Canonical equals the URL | 37/37 |
| Meta robots | `index, follow` on all 37 |
| `X-Robots-Tag: noindex` | none |
| `robots.txt` (applies `Allow /`, `Disallow /api/`, `Disallow /admin/`) | none blocked |

Rejected or skipped: **none**.

## 3. Submission

| Item | Result |
|---|---|
| Method | Existing integration `scripts/submit-bing-urls.mjs` (Bing Webmaster API `SubmitUrlbatch`). Key read from `.env` and passed only to that process; not logged |
| Pre-submission quota (`GetUrlSubmissionQuota`) | Daily 100, monthly 1,000 |
| Batches | 1 batch of 37 (within the daily quota) |
| Bing response | HTTP success. Script output: `Batch 1/1: submitted 37 URLs.` / `Done. 37/37 URLs submitted to Bing.` (the script raises an error with Bing's response body on any non-success response; none occurred) |
| Post-submission quota | Daily **63**, monthly **963** — a reduction of exactly 37, confirming Bing counted the submission |
| Quota or API errors | None |

**Meaning:** Bing **accepted the submission request** for all 37 URLs. This does **not** mean they are crawled or indexed. Check indexing later in Bing Webmaster Tools (URL Inspection / Site Explorer).

## 4. Submitted URLs (37)

**English blog (19):**
- `/blog/dammam-to-jubail-transfer-guide`
- `/blog/alula-skies-festival-2026-travel-guide`
- `/blog/dammam-airport-attack-october-2026`
- `/blog/riyadh-airport-closure-october-2026`
- `/blog/saudi-arabian-grand-prix-2027-jeddah-transfer`
- `/blog/riyadh-airport-driver-meeting-point`
- `/blog/first-time-in-jeddah-guide`
- `/blog/late-night-airport-transfers-saudi-arabia`
- `/blog/jeddah-vs-madinah-airport-for-umrah`
- `/blog/jeddah-to-yanbu-transfer-guide`
- `/blog/jeddah-airport-driver-meeting-point`
- `/blog/f1h2o-jeddah-grand-prix-transfer`
- `/blog/wrc-rally-saudi-arabia-transfer`
- `/blog/gulf-cup-27-jeddah-transfer`
- `/blog/black-hat-mea-riyadh-transfer`
- `/blog/wwe-crown-jewel-riyadh-transfer`
- `/blog/jeddah-to-madinah-transfer-guide`
- `/blog/first-time-in-riyadh-guide`
- **`/blog/saudi-arabia-intercity-transfers-flight-disruptions`** (the new guide)

**Arabic (18):**
- `/ar/جدة-لأول-مرة`
- `/ar/استقبال-السائق-في-مطار-الرياض`
- `/ar/الرياض-لأول-مرة`
- `/ar/زيارة-المدينة-قبل-مكة-من-جدة`
- `/ar/نقل-فعالية-كراون-جول-الرياض`
- `/ar/نقل-مؤتمر-بلاك-هات-الرياض`
- `/ar/نقل-كأس-الخليج-27-جدة`
- `/ar/دليل-التنقل-بين-الدمام-والجبيل`
- `/ar/مهرجان-سماء-العلا-2026`
- `/ar/الهجوم-على-مطار-الدمام-أكتوبر-2026`
- `/ar/إغلاق-مطار-الرياض-أكتوبر-2026`
- `/ar/نقل-سباق-جائزة-السعودية-الكبرى-فورمولا-1-جدة-2027`
- `/ar/نقل-رالي-السعودية-دبليو-آر-سي`
- `/ar/نقل-جائزة-جدة-الكبرى-f1h2o`
- `/ar/استقبال-السائق-في-مطار-جدة`
- `/ar/ينبع-مدينتان-التخطيط-للرحلة-من-جدة`
- `/ar/مطار-جدة-أو-المدينة-للعمرة`
- `/ar/النقل-من-المطار-ليلاً-في-السعودية`

All are on `https://saudiprivatetransfers.com` and were submitted percent-encoded, exactly as listed in the sitemap.

## 5. Notes and follow-ups (not done — outside this task's scope)

- **Tracking file not updated.** `docs/bing-submitted-urls.json` was left unchanged because this task excluded file edits. Until a batch-15 entry with these 37 URLs is added, the next "next batch" calculation would select them again. Updating the file needs approval.
- **Content-accuracy caveat.** Submission invites Bing to crawl pages that the 22 Oct audit (`25-…`) flagged as inaccurate:
  - both airport advisories (EN + AR) are outdated;
  - the WRC and Gulf Cup 27 posts are stale.

  Updating those pages is a separate approval item; Bing will pick up changes on its next crawl.
