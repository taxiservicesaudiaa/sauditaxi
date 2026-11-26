# 66b: CMS corrections for two blog posts (manual review; not applied)

**For:** the site editor, to apply in the admin blog editor (Supabase CMS).

**Nothing here was published.** The posts were read on 25 Nov 2026 from the live site with read-only GET requests. No repository file holds these posts; the CMS is the only source.

**Verified figures** (OSRM and Valhalla, central-city endpoints, 25 Nov 2026):

| Route | Distance | Driving time |
|---|---|---|
| Riyadh ↔ AlUla | ≈1,035–1,045 km | roughly 10.5–11 hours of driving |
| Riyadh ↔ Jeddah | ≈950 km | roughly 9.5–10.5 hours of driving |

---

## 1. `/blog/riyadh-to-alula-road-trip-guide`

### Where its summary appears

The listing card shows the post's title plus its **excerpt**: "1,000 km separate Riyadh from AlUla…". The build shows this card on **9 pages**:

1. `/blog`
2. `/blog/riyadh-to-alula-road-trip-guide` (the post itself)
3. `/blog/jeddah-to-riyadh-transfer-guide`
4. `/blog/jeddah-to-taif-taxi-guide`
5. `/blog/makkah-to-madinah-private-taxi-guide`
6. `/blog/riyadh-to-abha-transfer-guide`
7. `/dammam/hotels-to-dammam-airport`
8. `/jeddah/al-balad-to-jeddah-airport`
9. `/routes/riyadh-to-hail`

Report 65's "ten pages" counted the post page twice (its card and its body sentence). Fixing the **excerpt** field fixes all nine.

### Field-by-field replacements

| CMS field | Current | Replacement |
|---|---|---|
| **Excerpt** | "1,000 km separate Riyadh from AlUla. Here's the honest breakdown of the route, realistic timing, where to break the journey, and whether driving actually beats flying for this trip." | "About 1,035–1,045 km separate Riyadh from AlUla. Here's the honest breakdown of the route, realistic timing, where to break the journey, and whether driving actually beats flying for this trip." |
| Title, meta title, meta description | Contain no figures | No change |
| Body, intro | "At roughly 1,000 km, Riyadh to AlUla is one of the longest intercity trips within Saudi Arabia…" | "At about 1,035–1,045 km, Riyadh to AlUla is one of the longest intercity trips within Saudi Arabia…" |
| Body, distance section | "Riyadh and AlUla are separated by approximately 1,000 kilometres by road. In a private vehicle, the drive itself takes about 9.5 hours, not including rest stops, meals, or fuel breaks — with those factored in, treat the journey as a genuine 10 to 11-hour day if driven straight through." | "Riyadh and AlUla are separated by about 1,035–1,045 kilometres by road. In a private vehicle, the drive itself takes roughly 10.5–11 hours, not including rest stops, meals or fuel breaks — with those factored in, treat it as a 12-hour-plus day if driven straight through." |
| Body, table "Distance" | "~1,000 km" | "~1,035–1,045 km" |
| Body, table "Pure drive time" | "~9.5 hours" | "~10.5–11 hours" |
| Body, table "With rest stops" | "~10.5–11.5 hours" | "~12–13 hours" |
| Body, comparison table "Total time" | "~10–11 hours door-to-door" | "~12–13 hours door-to-door" |
| Body | "A 1,000 km drive is a genuinely different proposition…" | "A drive of more than 1,000 km is a genuinely different proposition…" |
| Body | "…stay alert behind the wheel for 9-plus hours." and "…over 9-plus hours on the road." | "…for 10-plus hours." and "…over 10-plus hours on the road." |
| Body, conclusion | "Riyadh to AlUla is a genuine 1,000 km commitment…" | "Riyadh to AlUla is a genuine 1,000 km-plus commitment…" |
| FAQ: distance and time | "The driving distance is approximately 1,000 km, and the journey takes about 9.5 hours of drive time in a private vehicle, not counting rest stops…" | "The driving distance is about 1,035–1,045 km, and the journey takes roughly 10.5–11 hours of drive time in a private vehicle, not counting rest stops…" |
| FAQ: fly or drive | "…since it turns a 9.5-hour drive into roughly a 2-hour flight." | "…since it turns a drive of about 10.5–11 hours into roughly a 2-hour flight." |
| FAQ: same day | "Yes, technically — the drive itself is about 9.5 hours…" | "Yes, technically — the drive itself is roughly 10.5–11 hours…" |
| FAQ: rent or transfer | "…removes the fatigue of a 9.5-hour self-drive…" | "…removes the fatigue of a 10-hour-plus self-drive…" |

**Not verified, so left as written:** "fuel stations, restaurants and hotels roughly every 100 to 150 km". The Qassim and Ha'il routing is consistent with the verified OSRM path, which passes Hail at about 426 km and Buraydah at about 685 km from AlUla.

---

## 2. `/blog/jeddah-to-riyadh-transfer-guide`

**Listing card excerpt:** "Jeddah to Riyadh is 950 km — the longest domestic route…" This contains no time figure, so no change is needed.

| CMS field | Current | Replacement |
|---|---|---|
| **Meta description** | "Jeddah to Riyadh is 950 km, about 9 hours by road. Here's how…" | "Jeddah to Riyadh is about 950 km, roughly 9.5–10.5 hours of driving. Here's how…" |
| Body, intro | "…950 km apart — a genuinely long domestic route, roughly nine hours by road." | "…about 950 km apart — a genuinely long domestic route, roughly 9.5–10.5 hours of driving." |
| Body | "The nine-hour drive is unambiguously slower…" | "The drive of around ten hours is unambiguously slower…" |
| Body | "…a business traveler who wants a working car for nine hours…" | "…a business traveler who wants a working car for most of a day…" |
| Body | "Nine hours is a genuinely long single drive…" | "Around ten hours is a genuinely long single drive…" |
| Body | "…will be comfortable for nine hours with a full family and bags." | "…will be comfortable for around ten hours with a full family and bags." |
| FAQ | "About nine hours for the 950 km route along Route 40…" | "Roughly 9.5–10.5 hours of driving for the 950 km route along Route 40…" |
| FAQ | "…against nine hours by road." | "…against roughly 9.5–10.5 hours of driving." |
| FAQ | "For a nine-hour drive, worth choosing deliberately…" | "For a drive of around ten hours, worth choosing deliberately…" |

---

## 3. Also noticed (separate post, not reviewed in this task)

The "Riyadh to Abha" card excerpt (shown in related-guide lists) says: "Riyadh to Abha is roughly 830 km and nearly nine hours by road".

The verified route figures (report 51 and `/routes/riyadh-to-abha`) are **940–960 km and about 11–12 hours**. Suggested excerpt start: "Riyadh to Abha is about 940–960 km and roughly 11–12 hours by road…"
