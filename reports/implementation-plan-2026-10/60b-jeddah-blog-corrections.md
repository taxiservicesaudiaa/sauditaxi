# 60b: Corrections for the three Jeddah blog guides (for the CMS)

**For:** the site editor, to apply in the admin blog editor (Supabase CMS).

**This file does not change the CMS.** The posts are stored in the production database, so nothing was written there.

**Read on:** 24 Nov 2026, from the live pages, with a read-only GET request.

**Each post keeps** its URL, title, topic, structure and headings, except where noted.

**How to apply:** each item gives the current text and the replacement. Find the text in the editor and paste the replacement over it. Links in the replacements are written as `[text](/path)`. All 34 internal links in the three posts currently return 200.

---

## 1. `/blog/first-time-in-jeddah-guide`

**Purpose (kept):** a first-visit orientation covering:
- the city layout and neighbourhoods;
- climate;
- getting around;
- Jeddah as the gateway to Makkah and Madinah;
- the work week;
- practical tips.

It answers "first time in Jeddah" well and stays informational.

### Findings

| # | Current statement | Issue | Fix |
|---|---|---|---|
| 1.1 | "With a population of roughly 4.7 million" | The 2022 census gives **3,751,722** (General Statistics Authority). 4.7–4.8 million is a metro-area estimate | Use the census figure |
| 1.2 | "its airport is the busiest pilgrim gateway in the country" (body and FAQ) | The superlative is unsourced. JED is clearly the main air gateway for pilgrims | Soften |
| 1.3 | "a dedicated Hajj Terminal that operates during peak season" | Since October 2026, the Hajj and Umrah terminals also take some scheduled airlines moved from the North Terminal | Update |
| 1.4 | Al-Balad "covers roughly 2.5 square kilometers" | Not verified; sources differ on the boundary | Remove the figure. The UNESCO 2014 inscription, its name and "more than 600 historic buildings" are kept |
| 1.5 | "Tahlia Street, running between Al-Balad and the Corniche" | Inaccurate. Tahlia Street runs inland from the Corniche in north-central Jeddah, well north of Al-Balad | Correct |
| 1.6 | "your driver tracks your flight and meets you in the arrivals hall, so a delayed landing does not turn into a longer wait or a higher fare" | Unsupported operational promise | Use quotation wording |
| 1.7 | "approximately 90 km, typically a 60–90 minute drive" to Makkah (body and FAQ) | Site figure is ≈85 km (OSRM 83 km); "around 1–1.5 hours" matches the Jeddah city page | Align |
| 1.8 | "Your driver tracks your flight, waits in the arrivals hall with a name board… one fixed price agreed before you travel" | Unsupported (flight tracking, name board, fixed price) | Use quotation wording |
| 1.9 | FAQ: "A pre-booked private transfer gives a fixed price and a driver who tracks your flight" | Unsupported | Rewrite |
| 1.10 | "our Jeddah Airport arrivals guide covers SIM and eSIM options" | No link, and not checked | Link it, or remove the sentence (optional) |

**Kept:** the UNESCO inscription (2014, "Historic Jeddah, the Gate to Makkah"), Bayt Nassif, Souq Al-Alawi, the ≈30 km Corniche, King Fahd's Fountain (built 1980–83), the climate figures, the Friday–Saturday weekend and the 20–40 minutes from the airport to central hotels (OSRM ≈26 km).

### Replacements

**1.1**
- Current: `With a population of roughly 4.7 million, it is the Kingdom's second-largest city`
- New: `With about 3.75 million residents at the 2022 census, it is the Kingdom's second-largest city`

**1.2**
- Current: `and its airport is the busiest pilgrim gateway in the country — most Umrah and Hajj travelers land here before continuing overland.`
- New: `and its airport is the main air gateway for pilgrims — most Umrah and Hajj travelers land here before continuing overland.`

**1.3**
- Current: `a dedicated Hajj Terminal that operates during peak season,`
- New: `a separate Hajj Terminal with its distinctive tent-like roofs,`

**1.4**
- Current: `It covers roughly 2.5 square kilometers and holds more than 600 historic buildings`
- New: `It is compact enough to explore on foot and holds more than 600 historic buildings`

**1.5**
- Current: `Tahlia Street, running between Al-Balad and the Corniche, is Jeddah's main shopping and hotel corridor, lined with malls and international fashion retailers — a practical base if you want to be within reach of both the old town and the waterfront without committing to either end of the city.`
- New: `Tahlia Street, running inland from the Corniche in north-central Jeddah, is one of the city's main shopping and hotel streets, lined with malls and international fashion retailers — a practical base for shopping and dining, with the waterfront a short drive away.`

**1.6**
- Current: `a [private airport transfer from Jeddah Airport](/airport-transfer/jeddah-airport) is the most predictable option: your driver tracks your flight and meets you in the arrivals hall, so a delayed landing does not turn into a longer wait or a higher fare.`
- New: `a [private airport transfer from Jeddah Airport](/airport-transfer/jeddah-airport) lets you arrange the ride before you fly: share your flight details and destination when you request a quotation, and the pickup point and arrangements are confirmed with you when you book.`

**1.7 (body)**
- Current: `the road distance from Jeddah is approximately 90 km, typically a 60–90 minute drive depending on traffic and your exact hotel`
- New: `the road distance from Jeddah is about 85 km, typically around 1–1.5 hours depending on traffic and your exact hotel`

**1.7 (FAQ "How far is Jeddah from Makkah?")**
- New answer: `About 85 km by road, typically around 1–1.5 hours depending on traffic and your exact hotel.`

**1.8 (section "Private Transfer from Jeddah Airport")**
- Current: `Your driver tracks your flight, waits in the arrivals hall with a name board, and takes you directly to your hotel, Al-Balad, the Corniche, or straight on to Makkah — one fixed price agreed before you travel, with no negotiation on arrival.`
- New: `Tell us your flight details and where you are going — your hotel, Al-Balad, the Corniche, or straight on to Makkah — and we will send you a quotation. The pickup point and arrangements are confirmed with you when you book, so there is nothing to negotiate on arrival.`
- Also add after the existing links: `For an overview of transfers around the city, see [private transfers in Jeddah](/taxi-service/jeddah).` The post already links `/taxi-service/jeddah`, so this sentence is optional.

**1.9 (FAQ "Do I need to pre-book…")**
- New answer: `Both are possible. A pre-booked private transfer is arranged by quotation before you travel, with the pickup confirmed when you book; the airport taxi rank works too, but fares and waiting times vary more.`

**1.2 (FAQ "What is Jeddah known for?")**
- Current: `the busiest pilgrim airport in the Kingdom`
- New: `the main air gateway for pilgrims`

**FAQ "Is Jeddah a good base…"**
- Current: `since it's the Kingdom's busiest pilgrim gateway`
- New: `since it is the main air gateway for pilgrims`

**1.10 (optional)**
- Current: `our Jeddah Airport arrivals guide covers SIM and eSIM options in more detail.`
- New: `our [guide to landing at Jeddah Airport](/blog/what-to-do-after-landing-at-jeddah-airport) covers the arrivals process.`
- Or remove the sentence. I didn't check whether that guide covers SIM cards, so the new text doesn't claim it.

---

## 2. `/blog/jeddah-airport-terminal-guide-jed`

**Purpose (kept):** "which JED terminal do I use, what's inside, how do I get between them and into the city".

**Main problem: the terminal facts are out of date.** The post says that "as of mid-2026" JED runs Terminal 1 plus the "older North and South terminals", and that the Hajj Terminal is "not normally used by regular scheduled passengers". Since then:

- **South Terminal → Terminal 4.** It closed to passengers in June 2020, when its flights moved to Terminal 1. It reopened as **Terminal 4** in phases from **27 September 2026**, as a terminal mainly for international low-cost carriers (Saudi Gazette; Arabian Business; Gulf News; airport announcement on X).
- **North Terminal.** From **17 October 2026**, the airport said all North Terminal flights would move to **Terminal 4 and the Hajj and Umrah terminals** (Khaleej Times; MENAFN). Earlier notices moved specific airlines between 28 September and 15 October. The airport hasn't said whether the North Terminal building is closed for good.
- **Hajj and Umrah terminals.** These now also handle **some scheduled airlines** moved from the North Terminal (Wego, citing the airport). Exact airline-by-airline lists differ between sources, so **the article should not list airlines per terminal**.
- **Passenger numbers.** JED handled a record **53.4 million passengers in 2025**, so "tens of millions" stays accurate.

**Unsupported service claims:**
- "a driver is waiting when you land and the fare is agreed before you travel"
- "Private transfer: best for comfort, fixed pricing, meet-and-greet"
- the "Book Your Private Transfer" paragraph: fixed-price, professional drivers, clean vehicles, no surge pricing, "in under a minute"
- FAQ "For comfort and a fixed fare… a private airport transfer that meets them on arrival"

**Not verified** (kept but softened): that terminal transfers are "handled by shuttle buses and internal roadways"; the list of facilities.

**Link relevance:** the "King Salman Airport transfers guide" (Riyadh's future airport) is unrelated to JED. I suggest replacing it with the first-time-in-Jeddah guide and the Jeddah city page.

### Replacements

**Intro, second paragraph.** Keep it, and append:
`JED's terminal arrangements changed in autumn 2026, so this guide was updated in November 2026.`

**Section "How many terminals does King Abdulaziz International Airport have?"**
- Replace the first paragraph with:
  `As of November 2026, the main passenger terminal is Terminal 1, the large modern terminal that opened in stages from 2019. The former South Terminal has been redeveloped and reopened as Terminal 4, which began operating in phases from 27 September 2026 and mainly serves international low-cost airlines. The airport also has the Hajj and Umrah terminals, known for their tent-like roofs, which handle pilgrimage flights and, since October 2026, some scheduled airlines that previously used the North Terminal. In October 2026 the airport announced that all North Terminal flights were moving to Terminal 4 and the Hajj and Umrah terminals.`
- Keep the second paragraph. Then add:
  `Because so many airlines changed terminals in late 2026, check your terminal on your booking confirmation or with your airline shortly before you travel, even if you have flown into Jeddah before.`

**Table "JED terminals at a glance".** Replace the rows:

| Terminal | Who typically uses it | Notes |
|---|---|---|
| Terminal 1 (main terminal) | Most international airlines and many domestic flights | The newest and largest terminal, and the one connected to the Haramain railway station |
| Terminal 4 (former South Terminal) | Mainly international low-cost airlines | Reopened in phases from 27 September 2026 |
| Hajj and Umrah terminals | Pilgrimage flights, plus some scheduled airlines since October 2026 | Known for their large tent-like roofs; check whether your airline now uses them |
| North Terminal | Flights moved out in October 2026 | The airport announced that its flights were moving to Terminal 4 and the Hajj and Umrah terminals |

**Heading "The North and South terminals"**
- New heading: `The North Terminal and the new Terminal 4`
- Replace the two paragraphs with:
  - `For many years the North and South terminals carried most of Jeddah's traffic. The South Terminal closed to passengers in 2020, when its flights moved to Terminal 1, and has since been redeveloped as Terminal 4, which reopened in phases from 27 September 2026, mainly for international low-cost airlines.`
  - `In October 2026 the airport announced that all flights using the North Terminal were moving to Terminal 4 and the Hajj and Umrah terminals. The practical point is simple: do not rely on what you remember from an earlier trip, and do not assume you will be at Terminal 1. Check the terminal on your booking or with your airline, and allow extra time if you are unsure.`
- Keep the "How to confirm the right terminal" list.

**Section "The Hajj Terminal explained"**
- Replace the second paragraph's opening, `For the typical scheduled passenger, the key thing to understand is that you will not usually use the Hajj Terminal for an ordinary flight. It operates on a different rhythm from the year-round terminals and is geared to pilgrimage logistics.`, with:
  `Since October 2026, the Hajj and Umrah terminals have also handled some scheduled airlines moved from the North Terminal, so you may use them even if you are not travelling for Hajj or Umrah. Check your terminal with your airline.`
- Keep the rest of that paragraph.

**Section "How do I get between terminals…"**
- Current: `Inter-terminal transfers are handled by shuttle buses and internal roadways rather than an automated train, so if you need to switch terminals you should allow generous time and follow the signage to the shuttle pick-up points, or ask airport staff to point you in the right direction.`
- New: `There is no indoor walkway between the separate terminal buildings, so if you need to switch terminals, allow generous time and ask airport staff or an information desk about the current transfer options.`
- In the FAQ "How do I get between terminals at JED?", replace `Terminal transfers are handled by shuttle buses and internal roadways rather than a rail link, and the terminals sit some distance apart.` with:
  `The terminals are separate buildings some distance apart, so ask airport staff or an information desk about the current transfer options.`

**Section "Getting from Jeddah Airport into the city and beyond"**
- Current: `For most visitors arriving after a long flight, however, the simplest and most predictable option is to arrange a private transfer in advance, so a driver is waiting when you land and the fare is agreed before you travel.`
- New: `If you would rather have your ride arranged before you fly, you can request a private transfer in advance by quotation; the pickup point and arrangements are confirmed with you when you book.`
- Current: `We recommend pre-booking a private [Jeddah airport transfer](/airport-transfer/jeddah-airport) for exactly this reason: no queuing, no fare negotiation, and a vehicle sized for your group and luggage.`
- New: `A pre-arranged [Jeddah airport transfer](/airport-transfer/jeddah-airport) means no fare negotiation on arrival, and you can tell us your group size and luggage so a suitable vehicle is suggested in your quotation.`
- `Rail` bullet. New: `Rail: the Haramain high-speed railway station is at Terminal 1, with trains to Makkah and Madinah. If you land at another terminal, allow time to reach Terminal 1.`
- `Private transfer` bullet. New: `Private transfer: arranged by quotation before you travel; useful for families, groups and luggage`
- Add one line after the bullets: `For an overview of transfers around the city, the airport and onward to Makkah, see [private transfers in Jeddah](/taxi-service/jeddah).`

**Related guides / companion read**
- Replace `[King Salman Airport Transfers Guide](/blog/king-salman-airport-transfers-guide)` with `[First Time in Jeddah: What to Know Before You Arrive](/blog/first-time-in-jeddah-guide)`, in both the paragraph and the "Related Guides" list.
- Rewrite the paragraph sentence: `And if this is your first visit to the city, our [first-time guide to Jeddah](/blog/first-time-in-jeddah-guide) is a helpful companion read.`

**Section "Book Your Private Transfer"**
- New paragraph: `Need a ride from JED? Request a quotation for an [airport transfer](/airport-transfers), a [city transfer](/city-transfers) or a longer [intercity journey](/intercity-transfers). Share your flight details, destination, passengers and luggage, and we will reply with a quotation; the details are confirmed with you when you book. [Request a quotation](/get-quote).`

**FAQ answers to replace**
- **"How many terminals…"**: `As of November 2026, JED's main terminal is Terminal 1. The former South Terminal reopened as Terminal 4 from 27 September 2026, mainly for international low-cost airlines, and the Hajj and Umrah terminals handle pilgrimage flights and, since October 2026, some scheduled airlines moved from the North Terminal. Assignments have changed recently, so always confirm your terminal with your airline before travelling.`
- **"Which terminal do I use…"**: `Most international and many domestic flights use Terminal 1. Some airlines now use Terminal 4 or the Hajj and Umrah terminals after the changes in autumn 2026. Check your boarding pass or the airline's confirmation, as terminal allocations at JED can change.`
- **"What is the Hajj Terminal…"**: `The Hajj and Umrah terminals are large facilities with tent-like roofs, built for the seasonal surge of pilgrims. Since October 2026 they also handle some scheduled airlines moved from the North Terminal, so check with your airline whether your flight uses them.`
- **"How do I get from Jeddah Airport to the city or Makkah?"**: `Options include private transfers, taxis, ride-hailing apps, and the Haramain railway from Terminal 1 to Makkah and Madinah. A private transfer can be requested in advance by quotation, which many families and groups with luggage find convenient after a long flight.`

**Sources for the terminal changes**
- [Saudi Gazette: Jeddah airport begins gradual operations at Terminal 4](https://saudigazette.com.sa/article/664885)
- [Arabian Business: Jeddah airport starts Terminal 4 operations](https://www.arabianbusiness.com/business/transport/saudi-arabias-jeddah-airport-starts-terminal-4-operations)
- [Khaleej Times: North Terminal flights to T4 and the Hajj and Umrah terminals from 17 October](https://www.khaleejtimes.com/aviation/jeddah-airport-move-north-terminal-flights-to-t4-hajj-umrah-terminals-oct-17)
- [Wego: airlines moving from the North Terminal to the Hajj Terminal](https://blog.wego.com/jeddah-hajj-terminal-airlines/)
- [Arab News: South Terminal closes (2020)](https://www.arabnews.com/node/1697001/amp)
- Airport announcement on X: [KAIAirport](https://x.com/KAIAirport/article/2103939922377752954)

**Please recheck** the airport's own announcements just before publishing, as the moves were still recent.

---

## 3. `/blog/jeddah-islamic-port-passenger-guide`

**Purpose (kept):** for cruise passengers and crew leaving the port, covering getting to a hotel, the airport or Makkah. It is distinct from the airport guides.

### Findings

| # | Current | Issue | Fix |
|---|---|---|---|
| 3.1 | "lets your driver position the vehicle precisely rather than searching for you at the gate" | Operational promise | Use confirmed-pickup wording; keep "port access is controlled" |
| 3.2 | Hotels "about 10 to 25 km from the port, roughly 20 to 40 minutes" | OSRM from the port: Al-Balad ≈5 km; central hotels ≈17 km; northern Corniche ≈26 km | "about 5–25 km, roughly 10–40 minutes" |
| 3.3 | "a fixed-price option that includes luggage help" | Unsupported | Remove |
| 3.4 | Port → airport "around 40 km, typically 40 to 55 minutes" | OSRM ≈33 km | "around 30–35 km, typically 35–55 minutes" |
| 3.5 | "with reasonable waiting built in so a slower disembarkation doesn't add to the price" | Unsupported waiting and price promise | Remove |
| 3.6 | Makkah "about 85 km, roughly an hour and fifteen minutes… the price is fixed regardless of how the day actually unfolds" | Distance acceptable (OSRM 82 km from the port); the price promise is unsupported | "about 80–85 km, typically 1–1.5 hours"; remove the price promise |
| 3.7 | "Group vehicles are available" | Availability claim | "A larger vehicle can be requested" |
| 3.8 | "every transfer here is priced fixed in advance and includes reasonable waiting time" | Unsupported | Rewrite |
| 3.9 | FAQs repeat 3.2, 3.4, 3.5 and 3.6 | — | Align |

**Kept:**
- "one of the busiest ports on the Red Sea" (a well-established description);
- cruise disembarkation runs by groups;
- the general check-in guidance (about 3 hours international, 2 hours domestic), reframed as airline guidance.

### Replacements

**3.1**
- Current: `lets your driver position the vehicle precisely rather than searching for you at the gate, since port access itself is controlled.`
- New: `helps us confirm a practical pickup point with you in advance, since port access itself is controlled.`

**3.2 and 3.3**
- Current: `Jeddah hotels sit anywhere from about 10 to 25 km from the port, roughly 20 to 40 minutes depending on which part of the city you're staying in. See our [Jeddah Islamic Port to hotels transfer](/jeddah/jeddah-islamic-port-to-hotels) for a fixed-price option that includes luggage help — useful whether you're carrying cruise luggage or a seafarer's kit bags.`
- New: `Jeddah hotels sit anywhere from about 5 km (around Al-Balad) to 25 km (the northern Corniche) from the port, roughly 10 to 40 minutes depending on where you're staying and the traffic. See our [Jeddah Islamic Port to hotels transfer](/jeddah/jeddah-islamic-port-to-hotels) — tell us how many people and bags you have, whether cruise luggage or a seafarer's kit bags, and a suitable vehicle will be suggested in your quotation.`

**3.4 and 3.5**
- Current: `The drive from the port to [Jeddah Airport](/airport-transfer/jeddah-airport) is around 40 km, typically 40 to 55 minutes, longer at peak hours or around prayer times.`
- New: `The drive from the port to [Jeddah Airport](/airport-transfer/jeddah-airport) is around 30–35 km, typically 35 to 55 minutes, longer at peak hours.`
- Current: `As a general guide, aim to reach the airport around three hours before an international departure and two hours before a domestic one`
- New: `Airlines commonly advise arriving around three hours before an international departure and two hours before a domestic one — check your airline's own guidance`
- Current: `Our [port to airport transfer](/jeddah/jeddah-islamic-port-to-jeddah-airport) covers this exact route, with reasonable waiting built in so a slower disembarkation doesn't add to the price.`
- New: `Our [port to airport transfer](/jeddah/jeddah-islamic-port-to-jeddah-airport) covers this exact route; share your expected clearance time and flight time when you request a quotation, and the pickup time is confirmed with you.`

**3.6**
- Current: `the road distance from Jeddah is about 85 km, roughly an hour and fifteen minutes, using the same private-transfer approach as any other leg — agree the pickup time and destination in advance, and the price is fixed regardless of how the day actually unfolds at the port.`
- New: `the drive from the port is about 80–85 km, typically around 1–1.5 hours depending on traffic. Share your pickup time and destination when you request a quotation, and the details are confirmed with you in advance. See also the [Jeddah to Makkah route](/routes/jeddah-to-makkah).`
- Optional note: Makkah is open only to Muslims. Add this only if the editor wants it for cruise passengers; it is a well-established fact.

**3.7**
- Current: `Group vehicles are available where a whole crew or cruise group is travelling together, which is usually simpler than arranging several separate cars.`
- New: `If a whole crew or cruise group is travelling together, you can request a larger vehicle, which is usually simpler than arranging several separate cars.`

**3.8**
- Current: `Because port timings rarely run exactly to schedule, every transfer here is priced fixed in advance and includes reasonable waiting time, so a delayed disembarkation or a slower clearance process doesn't change what you pay.`
- New: `Because port timings rarely run exactly to schedule, share your ship, expected arrival and clearance time when you request a quotation, and tell us if anything changes.`
- Keep the rest of that paragraph.

**FAQ answers**
- **"How far is Jeddah Islamic Port from Jeddah Airport?"**: `Around 30–35 km, typically a 35 to 55 minute drive, longer at peak hours.`
- **"How do I get from Jeddah Islamic Port to my hotel?"**: `Jeddah hotels are roughly 5 to 25 km from the port, about 10 to 40 minutes depending on the area and traffic. You can request a private transfer from the port to your hotel by quotation.`
- **"Can you time a pickup around cruise disembarkation?"**: `Cruise lines publish disembarkation groups and clearance times. Share yours when you request a quotation and the pickup time is confirmed with you.`
- **"How far is Makkah from Jeddah Islamic Port?"**: `About 80–85 km by road, typically around 1–1.5 hours depending on traffic.`
- **"Can you transfer a whole ship's crew together?"**: `You can request a larger vehicle for several people and their kit; tell us the numbers and luggage and a suitable vehicle will be suggested in your quotation.`
- **"What if my flight…"**: keep, but change `as a guide, aim to reach` to `airlines commonly advise reaching`.

---

## 4. Shared blog component (not part of any post)

The CTA box on every post reads **"Clear quotations, professional drivers, fast reply."** It is a site-wide component (`components/blog/BlogInlineCta.tsx`), first flagged in report 53b and not changed here. "Professional drivers" and "fast reply" should be reviewed as claims.
