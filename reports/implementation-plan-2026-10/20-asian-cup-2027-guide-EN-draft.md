# DRAFT FOR OWNER REVIEW — AFC Asian Cup 2027 transport guide (English)

> **Not published. Not in the database.** Prepared 19 October 2026 from the proposal in `19-events-transport-opportunity-audit.md` §5.
>
> **Revision 2 (19 Oct 2026), following the owner's editorial review.** These drafts are approved for continued editorial preparation only. They are not approved for publication or implementation.
>
> | Owner checklist item | Status |
> |---|---|
> | Verify the official AFC schedule and every fixture in both drafts | **Open.** The AFC's own schedule page could not be retrieved with the research tools (search did not return it; the guessed URL returned 404). Every date and city in the Arab-teams table matches two independent secondary sources: Wikipedia, which cites the AFC, and MeetStadium. **A manual check against the AFC site is still required.** Naming note: MeetStadium calls King Saud University Stadium "Al-Awwal Park" — use the AFC's name. |
> | Align airport wording with JED, DMM and MED; exclude RUH unless verified | **Done.** RUH transfers are removed; JED, DMM and MED are named; the Madinah links are added. |
> | Remove G1/G2 placeholders; reflect confirmed stadium and late-return service | **Done.** The wording states the service and makes no guarantee: points are agreed and confirmed in the quotation, following official traffic arrangements. |
> | Review current travel advice and tournament status on publication day | **Open.** This must happen on the day; the status notice has date placeholders. |
> | Native Arabic review and recorded sign-off | **Open.** See `21-…` §5. |
> | Recheck internal links, canonical/hreflang, FAQs and structured data after implementation | **Open.** Post-implementation. All links in this draft returned 200 on 19 Oct. |
>
> Cross-border pickups on the listed routes (Kuwait City, Bahrain, Doha, Dubai and Abu Dhabi to Riyadh, Dammam or Khobar) rely on the **owner-confirmed** pickup availability for every listed route and on the confirmed cross-border policy.
>
> No distances, durations, prices, vehicle capacities, Saudi phone numbers or service guarantees appear in this draft.

## 1. Record fields (Supabase `blogs`)

| Field | Proposed value |
|---|---|
| `title` | AFC Asian Cup 2027 in Saudi Arabia: Getting Between Riyadh, Jeddah and Khobar |
| `slug` | `afc-asian-cup-2027-saudi-arabia-transport-guide` (unused — checked against all 125 blog records, the sitemap and `data/`) |
| `meta_title` (55 characters) | AFC Asian Cup 2027 Saudi Arabia: Host Cities & Transfers |
| `meta_description` (152 characters) | Travelling to the AFC Asian Cup 2027? Host cities, stadiums, where Gulf teams play and how to arrange transfers between matches. Check official updates first. |
| `excerpt` | The AFC Asian Cup 2027 is scheduled for 7 January – 5 February 2027 in Riyadh, Jeddah and Khobar. Where each Arab team plays, how to travel between host cities and across GCC borders, and what to check before you book. |
| `focus_keyword` | AFC Asian Cup 2027 Saudi Arabia |
| `secondary_keywords` | Asian Cup 2027 host cities; Asian Cup 2027 stadiums; Asian Cup 2027 Riyadh Jeddah Khobar; travel between Riyadh and Khobar for Asian Cup; Kuwait to Riyadh Asian Cup |
| `category` | Travel Guides |
| `tags` | Events; AFC Asian Cup 2027; Riyadh; Jeddah; Khobar; Cross-Border Transfers |
| `featured_image` | `/images/heroes/intercity.webp` (existing site illustration) |
| `featured_image_alt` | Illustration of a black sedan driving along a desert highway at sunset |
| `faqs` | See §3 |
| `schema_json` | `null`. The page template already emits BlogPosting and, from `faqs`, FAQPage. **No `SportsEvent` markup:** the schedule is not yet final, and the page is a travel guide rather than an event listing |
| `reading_time` | 7 |
| `status` | `draft` until the gates pass |
| `published_at` | **Set on publication.** Five existing event posts lack it |
| Arabic counterpart | `21-asian-cup-2027-guide-AR-draft.md` → `/ar/نقل-كأس-آسيا-2027-السعودية` (hreflang pair) |

## 2. Article body (`content`, HTML)

```html
<p><strong>Last updated: [PUBLICATION DATE]. Tournament status checked: [DATE].</strong></p>

<p><strong>Short answer:</strong> The AFC Asian Cup Saudi Arabia 2027 is scheduled from <strong>7 January to 5 February 2027</strong> across eight stadiums in <strong>Riyadh, Jeddah and Khobar</strong>. The opening match and the final are at King Fahd Sports City Stadium in Riyadh. Many teams play group matches in more than one city, so supporters following a team often need to travel between Riyadh, Jeddah and Khobar during the tournament — or drive in from a neighbouring Gulf country. This guide explains where each Arab team is scheduled to play, how to get between the host cities, and what to arrange before you book.</p>

<p><em>Before you plan anything: travel conditions in Saudi Arabia have been disrupted since attacks on Riyadh and Dammam airports on 10–11 October 2026, and several governments currently advise against all but essential travel. In October 2026 the Saudi organising committee said the tournament remains on schedule, while the AFC said a decision on any change could be made around the end of November. Check the <a href="https://www.the-afc.com/" rel="noopener">AFC</a>, your government's travel advice and your airline before booking, and see our <a href="/blog/riyadh-airport-closure-october-2026">Riyadh airport advisory</a> and <a href="/blog/dammam-airport-attack-october-2026">Dammam airport advisory</a>.</em></p>

<h2 id="dates-venues">AFC Asian Cup 2027: Dates, Host Cities and Stadiums</h2>
<p>Twenty-four national teams take part. The tournament is scheduled to run from 7 January to 5 February 2027, with the group stage from 7 to 20 January, the round of 16 from 22 to 25 January, the quarter-finals on 28–29 January, the semi-finals on 1 and 2 February, and the final on 5 February.</p>
<table>
  <thead><tr><th>City</th><th>Stadium</th><th>Notable matches</th></tr></thead>
  <tbody>
    <tr><td rowspan="5">Riyadh</td><td>King Fahd Sports City Stadium</td><td>Opening match (7 Jan) and final (5 Feb)</td></tr>
    <tr><td>King Saud University Stadium</td><td>Group matches, round of 16</td></tr>
    <tr><td>Kingdom Arena</td><td>Group matches, round of 16, quarter-final</td></tr>
    <tr><td>Imam Mohammad Ibn Saud University Stadium</td><td>Group matches, round of 16</td></tr>
    <tr><td>Al Shabab Stadium</td><td>Group matches, round of 16</td></tr>
    <tr><td rowspan="2">Jeddah</td><td>King Abdullah Sports City Stadium</td><td>Group matches, round of 16, quarter-final, semi-final (2 Feb)</td></tr>
    <tr><td>Prince Abdullah Al Faisal Sports City Stadium</td><td>Group matches, round of 16</td></tr>
    <tr><td>Khobar</td><td>Aramco Stadium</td><td>Group matches, round of 16, quarter-final, semi-final (1 Feb)</td></tr>
  </tbody>
</table>
<p>Kick-off times and any changes are published by the AFC. Always check the official match schedule before you book travel around a specific match.</p>

<h2 id="arab-teams">Where the Gulf and Arab Teams Play</h2>
<p>Group-stage fixtures for Saudi Arabia and the other Arab teams, as published in the tournament schedule. Knockout venues depend on results.</p>
<table>
  <thead><tr><th>Team (group)</th><th>Match 1</th><th>Match 2</th><th>Match 3</th></tr></thead>
  <tbody>
    <tr><td>Saudi Arabia (A)</td><td>7 Jan — Riyadh</td><td>12 Jan — Riyadh</td><td>17 Jan — Jeddah</td></tr>
    <tr><td>Kuwait (A)</td><td>8 Jan — Riyadh</td><td>12 Jan — Khobar</td><td>17 Jan — Jeddah</td></tr>
    <tr><td>Oman (A)</td><td>8 Jan — Riyadh</td><td>12 Jan — Riyadh</td><td>17 Jan — Riyadh</td></tr>
    <tr><td>Palestine (A)</td><td>7 Jan — Riyadh</td><td>12 Jan — Khobar</td><td>17 Jan — Riyadh</td></tr>
    <tr><td>Bahrain (B)</td><td>8 Jan — Riyadh</td><td>13 Jan — Jeddah</td><td>18 Jan — Jeddah</td></tr>
    <tr><td>Jordan (B)</td><td>8 Jan — Jeddah</td><td>13 Jan — Jeddah</td><td>18 Jan — Riyadh</td></tr>
    <tr><td>Syria (C)</td><td>9 Jan — Riyadh</td><td>14 Jan — Jeddah</td><td>18 Jan — Riyadh</td></tr>
    <tr><td>Iraq (D)</td><td>10 Jan — Riyadh</td><td>14 Jan — Riyadh</td><td>19 Jan — Khobar</td></tr>
    <tr><td>UAE (E)</td><td>10 Jan — Riyadh</td><td>15 Jan — Riyadh</td><td>20 Jan — Riyadh</td></tr>
    <tr><td>Yemen (E)</td><td>10 Jan — Jeddah</td><td>15 Jan — Riyadh</td><td>20 Jan — Jeddah</td></tr>
    <tr><td>Qatar (F)</td><td>11 Jan — Riyadh</td><td>16 Jan — Khobar</td><td>20 Jan — Riyadh</td></tr>
  </tbody>
</table>
<p>Supporters of Saudi Arabia, Kuwait, Palestine, Bahrain, Jordan, Syria, Iraq, Yemen and Qatar are scheduled to see their team in at least two different cities during the group stage — which is where most intercity travel happens.</p>

<h2 id="arriving">Arriving by Air</h2>
<p>We arrange airport transfers at three airports for the tournament: King Abdulaziz International Airport in Jeddah (JED), King Fahd International Airport in Dammam (DMM), which serves Khobar, and Prince Mohammad bin Abdulaziz International Airport in Madinah (MED). See <a href="/airport-transfer/jeddah-airport">Jeddah airport transfers</a>, <a href="/airport-transfer/dammam-airport">Dammam airport transfers</a> and <a href="/airport-transfer/madinah-airport">Madinah airport transfers</a>.</p>
<p>If you fly into Madinah, we can drive you on to a host city — see <a href="/routes/madinah-to-jeddah">Madinah to Jeddah</a> and <a href="/routes/madinah-airport-to-riyadh">Madinah Airport to Riyadh</a>.</p>
<p>Riyadh's King Khalid International Airport (RUH) is not covered by this guide while its operations are being verified; check its status with your airline. Airport operations and airline schedules were disrupted in October 2026, so confirm that your flight is operating before you travel, and share your flight number when you request a transfer.</p>

<h2 id="between-cities">Travelling Between Riyadh, Jeddah and Khobar</h2>
<p>A private transfer takes your group door to door between hotels in different host cities in one vehicle, which suits supporters following a team from one city to the next with luggage. Plan these journeys around the match schedule rather than on match day itself where you can.</p>
<ul>
  <li><strong>Riyadh ↔ Khobar:</strong> see <a href="/routes/riyadh-to-khobar">Riyadh to Khobar</a> and <a href="/routes/khobar-to-riyadh">Khobar to Riyadh</a>. Saudi Arabia Railways (SAR) also runs passenger trains between Riyadh and Dammam — check <a href="https://www.sar.com.sa/" rel="noopener">SAR</a> for current schedules.</li>
  <li><strong>Riyadh ↔ Jeddah:</strong> see <a href="/routes/riyadh-to-jeddah">Riyadh to Jeddah</a> and <a href="/routes/jeddah-to-riyadh">Jeddah to Riyadh</a>. This is a long cross-country road journey; many travellers fly between the two cities instead, subject to airline schedules.</li>
  <li><strong>Jeddah ↔ Khobar/Dammam:</strong> see <a href="/routes/jeddah-to-dammam">Jeddah to Dammam</a> and <a href="/routes/dammam-to-jeddah">Dammam to Jeddah</a> — the longest of the three journeys.</li>
</ul>
<p>Journey times depend on your exact pickup and drop-off addresses, traffic and any stops, so give yourself a generous margin before a match.</p>

<h2 id="gcc-road">Driving In from Kuwait, Bahrain, Qatar or the UAE</h2>
<p>Supporters from neighbouring Gulf countries can travel by road to the host cities. We list private transfers on these routes:</p>
<ul>
  <li><strong>Kuwait:</strong> <a href="/routes/kuwait-city-to-riyadh">Kuwait City to Riyadh</a>, <a href="/routes/kuwait-city-to-dammam">Kuwait City to Dammam</a> — see also our <a href="/border-transfers/kuwait-border">Kuwait border transfer guide</a>.</li>
  <li><strong>Bahrain:</strong> <a href="/routes/bahrain-to-riyadh">Bahrain to Riyadh</a>, <a href="/routes/bahrain-to-khobar">Bahrain to Khobar</a> via the King Fahd Causeway — see our <a href="/border-transfers/bahrain-causeway">Bahrain causeway guide</a>.</li>
  <li><strong>Qatar:</strong> <a href="/routes/doha-to-riyadh">Doha to Riyadh</a> — see our <a href="/border-transfers/qatar-border">Qatar border guide</a>.</li>
  <li><strong>UAE:</strong> <a href="/routes/dubai-to-riyadh">Dubai to Riyadh</a>, <a href="/routes/abu-dhabi-to-riyadh">Abu Dhabi to Riyadh</a> — see our <a href="/border-transfers/uae-border">UAE border guide</a>.</li>
</ul>
<p>We coordinate the transport. Passengers and drivers must confirm the applicable travel documents, insurance, permits, border-crossing requirements and fees. Border, vehicle-document and insurance requirements may vary depending on your journey, so please confirm the requirements that apply to you with the relevant authorities before you travel.</p>

<h2 id="match-day">Getting to and from the Stadium on Match Day</h2>
<p>Stadium areas are busy before and after matches, and traffic and access arrangements are set by the organisers and local authorities on the day. Follow official match-day guidance and allow extra time.</p>
<p>We arrange transfers to and from the stadium on match days. Tell us the stadium and kick-off time when you request your quote. The drop-off point — and, if you want one, a pickup point after the match — is agreed with you and confirmed in your quotation, in line with the official traffic arrangements on the day.</p>
<p>We also arrange late-evening returns after matches. Tell us when you expect to leave the stadium so your return to the hotel is planned in advance; support is available 24 hours a day.</p>

<h2 id="booking">Booking a Private Transfer for the Asian Cup</h2>
<p>To get an accurate quotation, send us:</p>
<ul>
  <li>The cities and dates you are travelling between, and the matches you plan to attend</li>
  <li>Your pickup and drop-off addresses (hotel, home, Jeddah, Dammam or Madinah airport, or a city across the border)</li>
  <li>The number of passengers and pieces of luggage, and your preferred vehicle type</li>
  <li>Flight numbers, if your trip connects to a flight</li>
</ul>
<p>You receive a quotation before you travel. The confirmed quotation sets the price and shows what it covers — if your plans include extra stops or waiting time, mention it when you request the quote. No payment is needed to receive a quote. <a href="/get-quote">Request a quote</a> or message us on WhatsApp.</p>

<h2 id="sources">Official Sources</h2>
<ul>
  <li>Asian Football Confederation — tournament information and official match schedule: <a href="https://www.the-afc.com/" rel="noopener">the-afc.com</a></li>
  <li>Saudi Press Agency — "AFC Asian Cup Saudi Arabia 2027 Dates and Venues Announced": <a href="https://www.spa.gov.sa/en/w2238680" rel="noopener">spa.gov.sa</a></li>
  <li>Saudi Press Agency — "AFC Announces Match Schedule for AFC Asian Cup Saudi Arabia 2027": <a href="https://www.spa.gov.sa/en/N2526833" rel="noopener">spa.gov.sa</a></li>
  <li>Organising committee statement, 15 October 2026, as reported by AFP: <a href="https://www.france24.com/en/live-news/20261016-saudi-organisers-say-2027-asian-cup-on-schedule-after-attacks" rel="noopener">France 24</a></li>
  <li>General Authority of Civil Aviation (GACA): <a href="https://gaca.gov.sa/" rel="noopener">gaca.gov.sa</a> — and your airline, for flight status</li>
  <li>Saudi Arabia Railways: <a href="https://www.sar.com.sa/" rel="noopener">sar.com.sa</a></li>
  <li>Your government's travel advice, for example <a href="https://www.gov.uk/foreign-travel-advice/saudi-arabia" rel="noopener">GOV.UK</a> or <a href="https://travel.state.gov/en/international-travel/travel-advisories/destination.sau.html" rel="noopener">travel.state.gov</a></li>
</ul>
<p><em>This guide summarises official and published information available on [DATE]. Tournament dates, venues and kick-off times are set by the AFC and may change.</em></p>
```

## 3. FAQs (`faqs` field → visible FAQ section + FAQPage schema)

| # | Question | Answer |
|---|---|---|
| 1 | When and where is the AFC Asian Cup 2027? | The AFC Asian Cup Saudi Arabia 2027 is scheduled from 7 January to 5 February 2027 in three cities: Riyadh, Jeddah and Khobar. Check the AFC for any updates before you travel. |
| 2 | Which stadium hosts the opening match and the final? | King Fahd Sports City Stadium in Riyadh hosts both the opening match on 7 January 2027 and the final on 5 February 2027. |
| 3 | Which stadiums are used in Riyadh, Jeddah and Khobar? | Riyadh: King Fahd Sports City Stadium, King Saud University Stadium, Kingdom Arena, Imam Mohammad Ibn Saud University Stadium and Al Shabab Stadium. Jeddah: King Abdullah Sports City Stadium and Prince Abdullah Al Faisal Sports City Stadium. Khobar: Aramco Stadium. |
| 4 | Do I need to travel between cities to follow my team? | Often, yes. Many teams play group matches in two or three different cities — for example, Kuwait is scheduled to play in Riyadh, Khobar and Jeddah. Check your team's fixtures on the official AFC schedule. |
| 5 | Can I book a private transfer between Riyadh, Jeddah and Khobar? | Yes. We list private transfers between Riyadh, Jeddah and Khobar/Dammam. Send your dates, hotels, passengers and luggage, and you receive a quotation before you travel. |
| 6 | Can you pick us up in Kuwait, Bahrain, Qatar or the UAE and drive us to a host city? | Yes, on our listed routes from Kuwait City, Bahrain, Doha, Dubai and Abu Dhabi. We coordinate the transport; passengers and drivers must confirm the applicable travel documents, insurance, permits, border-crossing requirements and fees. |
| 7 | Can you take us to the stadium and back on match day? | Yes, including late-evening returns after the match. Tell us the stadium, the kick-off time and when you expect to leave when you request a quote. The drop-off and pickup points are agreed with you and confirmed in your quotation, in line with the official traffic arrangements on the day. |
| 7a | Which airports can you collect us from? | For the tournament, we arrange airport transfers at Jeddah (JED), Dammam (DMM) and Madinah (MED). Riyadh's King Khalid International Airport (RUH) is not covered while its operations are being verified. Share your flight number when you request a quote. |
| 8 | How is the price set, and what does it include? | You receive a quotation for your journey before you travel. The confirmed quotation sets the price and shows what it covers, so check that it includes anything you need, such as extra stops or waiting time. |
| 9 | What if the tournament schedule changes? | Dates and venues are set by the AFC. If the schedule changes, contact us with your new plans and we will send an updated quotation. |

FAQ 9 deliberately makes no refund or cancellation-fee promise; no policy has been confirmed.

## 4. Internal links (all existing; verified 19 Oct 2026)

| Anchor in the text | Destination |
|---|---|
| Riyadh airport advisory / Dammam airport advisory | `/blog/riyadh-airport-closure-october-2026`, `/blog/dammam-airport-attack-october-2026` |
| Jeddah / Dammam / Madinah airport transfers | `/airport-transfer/jeddah-airport`, `/airport-transfer/dammam-airport`, `/airport-transfer/madinah-airport` |
| Madinah to Jeddah / Madinah Airport to Riyadh | `/routes/madinah-to-jeddah`, `/routes/madinah-airport-to-riyadh` |
| Riyadh to Khobar / Khobar to Riyadh | `/routes/riyadh-to-khobar`, `/routes/khobar-to-riyadh` |
| Riyadh to Jeddah / Jeddah to Riyadh | `/routes/riyadh-to-jeddah`, `/routes/jeddah-to-riyadh` |
| Jeddah to Dammam / Dammam to Jeddah | `/routes/jeddah-to-dammam`, `/routes/dammam-to-jeddah` |
| Kuwait City to Riyadh / to Dammam; Kuwait border guide | `/routes/kuwait-city-to-riyadh`, `/routes/kuwait-city-to-dammam`, `/border-transfers/kuwait-border` |
| Bahrain to Riyadh / to Khobar; causeway guide | `/routes/bahrain-to-riyadh`, `/routes/bahrain-to-khobar`, `/border-transfers/bahrain-causeway` |
| Doha to Riyadh; Qatar border guide | `/routes/doha-to-riyadh`, `/border-transfers/qatar-border` |
| Dubai / Abu Dhabi to Riyadh; UAE border guide | `/routes/dubai-to-riyadh`, `/routes/abu-dhabi-to-riyadh`, `/border-transfers/uae-border` |
| Request a quote | `/get-quote` |

**Suggested inbound links (separate approval):** add one contextual link from `/blog/riyadh-season-transport-guide` and from the Riyadh, Jeddah and Khobar city hubs. Do this only after publication, and remove it if the event moves.

## 5. Claim register

| Claim | Source | Status |
|---|---|---|
| Dates 7 Jan – 5 Feb 2027; three cities; eight stadiums | SPA "Dates and Venues" release (headline retrieved; body not retrievable by fetcher); Wikipedia citing the AFC; AFP/France 24 (16 Oct) | Verified (secondary + official headline). **Re-verify on the AFC site at publication** |
| Opening match and final at King Fahd Sports City Stadium | SPA (via search summary); Wikipedia | Verified (as above) |
| Group fixtures by city and date; knockout venues and dates | Wikipedia "2027 AFC Asian Cup" (reproducing the AFC schedule); MeetStadium (all 25 Arab-team fixtures match by date and city); knockout dates also match footballpath2026.com | **Corroborated by two secondary sources. The official AFC check is still open (owner checklist item 1)** |
| LOC "on schedule" (15 Oct); AFC decision possibly by end of November | AFP via France 24, The Daily Star, Jakarta Globe (16 Oct) | Verified (news) |
| Airport attacks 10–11 Oct; disruption | Site advisories (sourced); GACA statements via SPA | Verified |
| Government advice against all but essential travel | GOV.UK (12 Oct page); travel.state.gov | Verified, **changing — re-check on the day** |
| SAR passenger trains between Riyadh and Dammam | Site's Riyadh advisory; SAR | Generally known; the text tells readers to check SAR. No schedule claimed |
| Cross-border pickups on listed routes | Owner-confirmed pickup availability on all listed routes | Owner-confirmed |
| Cross-border responsibility wording | Owner-confirmed policy | Owner-confirmed |
| Confirmed quotation sets the price | Owner-confirmed policy + quote workflow | Owner-confirmed |
| 24-hour support | Owner-confirmed | Owner-confirmed |
| Match-day stadium drop-off and pickup; late-evening returns | Owner editorial review, 19 Oct 2026 | Owner-confirmed (no guarantee wording; points confirmed per quotation) |
| Airport transfers at JED, DMM and MED; RUH excluded | Owner editorial review, 19 Oct 2026 | Owner-confirmed. RUH stays excluded until verified |
