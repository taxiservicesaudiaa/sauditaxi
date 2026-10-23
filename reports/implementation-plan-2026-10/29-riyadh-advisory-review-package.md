# Riyadh advisory update — final review package

**Prepared:** 22 October 2026.
**Status:** for review only. The database, the Arabic page and production are unchanged; nothing is committed or deployed.

**Covers:**
- the English advisory `/blog/riyadh-airport-closure-october-2026` (Supabase `blogs`, id `099e1ac3-0394-4c5f-8da4-19b1ba661197`, last `updated_at` 2026-10-14T13:26:15Z);
- its Arabic counterpart `/ar/إغلاق-مطار-الرياض-أكتوبر-2026` (`data/translations/ar.ts`, line ~26691);
- the retained Arabic review list for the Riyadh airport hub (from `27-…` §5).

**Companion files:**
- `29b-riyadh-advisory-proposed-payload.json`: exact PATCH body for the English record;
- `29c-riyadh-advisory-content.diff`: line diff of `content` (current → proposed).

**Owner position applied:** RUH jobs stay case by case until the applicable operating and permission requirements are confirmed.

## 1. Evidence used (checked 22 Oct 2026)

| # | Source | Date | Supports | Status |
|---|---|---|---|---|
| S1 | SPA/GACA: "Operations Temporarily Suspended" (`spa.gov.sa/en/N2697867`) | 10 Oct | Suspension after the attack | VERIFIED (official headline) |
| S2 | SPA/GACA: "Suspension… Extended for Safety Checks" (`N2699133`) | 12 Oct | Extension, no end date | VERIFIED (official headline) |
| S3 | Search of GACA/SPA channels | to 22 Oct | No official announcement of resumed scheduled operations found | Recorded as "we have not found" |
| S4 | Inside Aviation | 18 Oct 13:21Z | NOTAM A3650/26 from 17 Oct 18:45Z: prior GACA permission for all traffic | Reported (aviation press) — **attributed, not asserted** |
| S5 | Time Out Riyadh | 19–21 Oct | Still closed; diversions to Madinah and Qassim | Reported — **attributed, not asserted** |
| S6 | Arab News, quoting GACA | 22 Oct 10:17 | Second Dammam attack on 21 Oct; DMM operations resumed and traffic normal | VERIFIED (GACA quote) |
| S7 | Gulf Business and aggregators | 12–18 Oct | Some airlines pushed their return into November or 2027 | Reported — summarised generally |
| S8 | Owner decisions | 18–22 Oct | RUH case by case; ELQ, DMM, MED and JED transfers; the confirmed quotation sets the price | OWNER-CONFIRMED |

**Status rule:** S4 and S5 conflict. The advisory states only S1–S3 as fact, attributes S4 and S5 by name, and makes **no claim that RUH is open or closed**.

## 2. English record — database field changes (proposed)

| Field | Current | Proposed |
|---|---|---|
| `title` (also the H1) | Riyadh Airport Closure October 2026: Latest Updates and Travel Advice | **Riyadh Airport Status October 2026: Latest Updates and Travel Advice** (68 characters). *Editorial choice:* "closure" is now contested. The slug and URL are unchanged |
| `meta_title` | Riyadh Airport Closure October 2026: Latest Updates | **Riyadh Airport Status October 2026: Latest Updates** (50) |
| `meta_description` | King Khalid International Airport in Riyadh suspended operations on 10 October 2026. Latest status, reopening updates, flight advice and what to do next. | **Riyadh's King Khalid International Airport has been disrupted since 10 October 2026. What GACA has announced, what to check, and onward travel options.** (151) |
| `excerpt` | …suspended operations after an attack on 10 October 2026. The latest status, what we know about reopening… | **GACA suspended operations at Riyadh's King Khalid International Airport after an attack on 10 October 2026. What has been officially announced, what remains unconfirmed, and what travellers should do now.** |
| `content` | See 2.1 | 16 targeted replacements (`29c` diff); every replacement verified to match exactly once |
| `faqs` | 6 FAQs; Q1, Q3 and Q6 stale | Q1, Q3 and Q6 answers replaced (2.2); Q2, Q4 and Q5 unchanged |
| `schema_json` (FAQPage) | Mirrors the current FAQs | Regenerated from the proposed FAQs (verified identical) |
| `updated_at` | 2026-10-14T13:26:15Z | Set to the time of the approved update |
| Unchanged | slug, status, `published_at`, category, tags, keywords, featured image, author | — |

### 2.1 Content changes (summary; exact text in `29c`)

| # | Section | Change |
|---|---|---|
| 1 | Last-updated line | 14 Oct → **22 Oct 2026** |
| 2 | Short answer | "has been closed since…" / "keeps the airport closed until 17 October" → S1–S3 facts. The 17 Oct notice is described as past. S4 and S5 are attributed ("reports have differed…"). "We have not found an official GACA announcement that scheduled passenger flights have resumed" |
| 3 | Dammam pointer | Adds the 21 Oct incident (S6) |
| 4 | Status table header | "as of 14 October" → "as of 22 October 2026" |
| 5 | Operations row | Adds "We have not found a later official GACA statement on operations" |
| 6 | "Reported closure period" row | Renamed "Aviation notices (as reported)": the 17 Oct notice, plus NOTAM A3650/26 attributed to Inside Aviation |
| 7 | Reopening row | "Not officially confirmed. Reports since 17 October differ…" |
| 8 | Diversions row | Adds the Time Out Riyadh 21 Oct report (attributed) |
| 9 | Airline paragraph | Day-by-day cancellations from 12–14 Oct replaced by a general, attributed summary and "check your own airline" |
| 10 | Rerouting paragraph | Dammam note updated (21 Oct attack; GACA says operations resumed on 22 Oct) |
| 11 | Distance/time table (420 km / 4 h; 950 km / 9 h) | **Removed** (unverified figures). Replaced by a list of quotable routes: Qassim incl. ELQ, Dammam Airport, Madinah Airport and Jeddah Airport → Riyadh |
| 12 | SAR paragraph | Route links moved to the list above; adds a link to the intercity disruption guide |
| 13 | RUH transfers | "While the airport is closed, we cannot run pickups… We'll move the pickup" → "not confirming… in advance… confirmed case by case in your quotation… we'll review the booking with you" (S8) |
| 14 | Guides paragraph | **Rev. 2 (22 Oct, 16:10 UTC): paragraph removed.** It linked `/blog/riyadh-airport-driver-meeting-point`, which promises a name board ("your driver waits inside the arrivals hall holding a name board"). The owner confirmed on 22 Oct that name-board meet-and-greet is **not offered**. That guide needs its own correction (flagged in `31-…`) |
| 15 | Sources | Adds Inside Aviation (18 Oct), Time Out Riyadh (21 Oct) and Arab News (22 Oct) |
| 16 | Closing lines | "available on 14 October" → 22 October; "reply with a fixed price" → "reply with a quotation — the confirmed quotation sets the price"; "how pickups work once flights resume" → "current guidance" |

Kept unchanged because they are historical, sourced and still accurate: the "What happened" section (10, 11 and 8 Oct events and casualty figures with sources), "What travellers should do now", and FAQs 2, 4 and 5.

### 2.2 FAQ answers (proposed)

1. **Is Riyadh airport open?**
   > GACA suspended operations at King Khalid International Airport (RUH) on 10 October 2026 and extended the suspension on 12 October for safety and operational-readiness checks. Since 17 October, reports have differed: aviation press reported a notice requiring prior GACA permission for all flights, while other outlets reported continued closure. We have not found an official GACA announcement that scheduled flights have resumed (last checked 22 October 2026). Check your flight directly with your airline.
2. **When will Riyadh airport reopen?**
   > GACA had not announced when scheduled passenger operations will resume, as of 22 October 2026. Even after operations restart, each airline decides when to resume its own Riyadh flights.
3. **Can I still book an airport transfer in Riyadh?**
   > We are not confirming pickups or drop-offs at King Khalid International Airport in advance while its operations are disrupted; any airport pickup or drop-off is confirmed case by case in your quotation. If your airline rebooks you through another airport, such as Qassim, Dammam, Madinah or Jeddah, we can quote the road journey to or from Riyadh.

### 2.3 Link check (22 Oct)

- All internal links in the proposed content return 200: the Qassim, Dammam Airport, Madinah Airport and Jeddah Airport routes, the disruption guide, the Dammam advisory, the driver-meeting and delayed-flight guides, `/get-quote` and the Riyadh hub.
- External sources:
  - CP24 and The National redirect (301/302). These were already in the article.
  - Times of Israel and Time Out Riyadh return 403 to automated checks (bot blocking).
  - Arab News 301-redirects.
  - **Open these once in a browser before publishing.**

### 2.4 Dependencies and consistency

- **Dammam advisory.** Point 3 links the Dammam advisory, which is itself OUTDATED (last updated 12 Oct; misses the 21 Oct attack). Update it in the Dammam pass, ideally in the same release (see `30-…`).
- **Riyadh hub.** The proposed wording matches the locally changed Riyadh hub (`27-…`). Deploy both together so the hub and the advisory agree.
- **Rebuild.** Blog pages are prerendered at build time, so the database update reaches production only after a rebuild/deploy (separate approval).

## 3. Arabic advisory `/ar/إغلاق-مطار-الرياض-أكتوبر-2026` — field-by-field review list (NOT edited)

**For a qualified native Arabic reviewer:** write the Arabic for each item, keeping it equivalent to the English. Do not translate mechanically.

| Field | Current Arabic (summary) | Issue | English source text to adapt |
|---|---|---|---|
| `metaTitle` | إغلاق مطار الرياض: آخر المستجدات وإرشادات السفر | "Closure" now contested | §2 `meta_title` |
| `metaDescription` | تابع آخر المستجدات حول إغلاق مطار الملك خالد… | Same | §2 `meta_description` |
| `h1` | إغلاق مطار الرياض في أكتوبر 2026… | Same | §2 `title` |
| `intro` | …ولم يُعلَن بعد موعد مؤكد لإعادة التشغيل… | Stale framing | §2 `excerpt` |
| `dateModified` | 2026-10-14T13:26:12Z | Stale | Date of the approved update |
| `sections[0]` "الوضع الحالي" | Ends with the notice "until 17 October" | Stale | Proposed short answer (§2.1 #2), shortened |
| `sections[1]` "ماذا يفعل المسافر الآن؟" | Generic advice | OK | — |
| `faqs[0]` "هل مطار الرياض مفتوح؟" → "لا. حتى 14 أكتوبر…" | Stale definitive "No" | §2.2 Q1 |
| `faqs[1]` "لماذا أُغلق مطار الرياض؟" | OK (historical) | — |
| `faqs[2]` "متى يُعاد فتح…" → "…حتى 14 أكتوبر… حتى 17 أكتوبر" | Stale | §2.2 Q2 |
| `faqs[3]`, `faqs[4]` | OK | — |
| `faqs[5]` "هل يمكنني حجز نقل…" → "لا يمكن تنفيذ الاستقبال… أثناء إغلاقه… الدمام أو جدة" | Stale; missing Qassim and Madinah | §2.2 Q3 |
| `breadcrumbs[1].name` "إغلاق مطار الرياض أكتوبر 2026" | Contested label | Mirror the new title (optional; the path is unchanged) |
| `contentHtml` | Mirrors the current EN body | Same issues as EN | Apply §2.1 #1–#16 equivalently. In particular: last-updated date; short answer; status-table rows (header, operations, "مدة الإغلاق المعلنة" → aviation notices as reported, reopening, diversions); airline paragraph; Dammam note; **remove the distance table (420/950 km)**; RUH transfers paragraph ("خلال إغلاق المطار لا يمكننا…" → case by case); guides paragraph; add the three new sources; closing "بسعر ثابت" → confirmed-quotation wording |

**Arabic internal links to use:**
- Qassim → Riyadh `/ar/نقل-من-القصيم-الى-الرياض`
- Dammam Airport → Riyadh `/ar/نقل-من-مطار-الدمام-الى-الرياض`
- Madinah Airport → Riyadh `/ar/نقل-من-مطار-المدينة-الى-الرياض`
- Jeddah Airport → Riyadh `/ar/نقل-من-مطار-جدة-الى-الرياض`

The Arabic disruption guide is drafted but not published (`24-…`). Until it is, don't link it.

**After sign-off and authorisation:** edit `ar.ts`; run `gen:ar-index`, `check:ar-index`, `check:ar-500`; rebuild.

## 4. Retained: Arabic Riyadh airport hub `/ar/نقل-مطار-الرياض` — field-by-field review list (NOT edited)

| Field (current Arabic, summarised) | Problem | English text to adapt (from the changed EN hub) |
|---|---|---|
| `metaDescription` "…استقبال داخل الصالة، سعر ثابت…" | Meet-in-arrivals and fixed-price promise | "Riyadh airport (RUH) transfers and onward road travel. Check your flight with your airline, then request a quote — your confirmed quotation sets the price." |
| `intro` "…استقبالًا احترافيًا داخل الصالة مع متابعة رحلتك الجوية…" | Meet-and-greet, tracking | "King Khalid International Airport (RUH) is the main airport serving the Saudi capital. Check your flight with your airline, then tell us your journey — we confirm what can be arranged in a quotation." |
| New first section (status notice) | Missing | EN `hubOverrides.notice` (3 paragraphs; heading "Riyadh airport status — last checked 22 October 2026"); keep the dates exact |
| Section "خدمة موثوقة لرجال الأعمال" | Implies RUH reception | "Private transfers to Olaya, King Abdullah Financial District and the Diplomatic Quarter for business travellers and visiting teams, priced in a quotation you confirm before you travel." |
| Section "استقبال داخل الصالة مباشرة" (name board, automatic flight tracking) | Unconfirmed | Heading "If your journey involves King Khalid International Airport" + the two EN arrival paragraphs |
| Section "نقل إلى جميع أحياء الرياض وخارجها" ("…بسعر ثابت") | Fixed price | Same meaning, ending "…priced in a quotation you confirm before you travel." |
| FAQ "أين يستقبلني السائق في مطار الرياض؟" | Name board | EN FAQ "Can you pick me up or drop me off at Riyadh airport?" |
| FAQ "هل تناسب خدمتكم رجال الأعمال؟" | Reception claim | "Yes. Business trips are booked the same way as any other transfer — share your pickup point, destination and timing, and the price is set in the quotation you confirm." |
| FAQ "هل يمكن السفر من مطار الرياض إلى الدمام مباشرة؟" | RUH pickup | EN FAQ "Can I travel by road from Riyadh to another Saudi city or a neighbouring country?" |
| FAQ "هل الأسعار ثابتة…؟" | Fixed-price framing | EN FAQ "How is the price for a Riyadh transfer set?" |
| New FAQs | Missing | EN FAQ "Is King Khalid International Airport operating?" (dated) and "My flight was moved to another airport…" |
| (template) | The Arabic hub has no quote CTA | Separate template item |

## 5. Execution plan (only after separate authorisation)

1. **Database:** a single `PATCH /rest/v1/blogs?id=eq.099e1ac3-0394-4c5f-8da4-19b1ba661197` with `29b` plus `updated_at = now()`. Pre-check that the current `updated_at` still equals 2026-10-14T13:26:15Z; abort if the record changed. Re-read and verify every field.
2. **Arabic** (after native sign-off): edit `ar.ts` for the advisory (§3) and the hub (§4); run the index and regression checks.
3. **Build and compare:** local build plus a before/after snapshot. Expect changes only on the two English pages (advisory, hub) and the Arabic pages edited.
4. **Deploy** (separate approval). Then live checks: title, description, status text, FAQ schema, links. Optionally submit the changed URLs to Bing (separate authorisation).
5. **Re-verify the status** on the day of release. If GACA has published a statement, update §1 S3 and the notice wording first.
