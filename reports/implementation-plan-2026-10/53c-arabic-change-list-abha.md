# 53c: Arabic change list for the Abha pages (for a native Arabic reviewer)

**For:** a qualified native Arabic reviewer or translator. **No Arabic content has been changed.**
Source file: `data/translations/ar.ts`. Line numbers are approximate (24 Nov 2026).

**How to use this list:**
- Each row gives the current Arabic, the problem, and the **approved English meaning** the Arabic should carry.
- Please write natural Arabic for each row. Machine translation isn't acceptable.
- Keep each page's existing URL (`arPath`).

## Facts and wording rules (apply to every row)
| Item | Approved English |
|---|---|
| Riyadh ↔ Abha (city centres) | "about 940–960 km", "roughly 11–12 hours of driving, before breaks" |
| Abha International Airport (AHB) → Riyadh | "about 935–950 km", "roughly 11–12 hours of driving, before breaks" |
| Route | South-west from Riyadh across the Riyadh Region, past Bisha, through Khamis Mushait (**not** "via Wadi ad-Dawasir") |
| Pricing | Quotation-based: "The confirmed quotation sets the price and explains what it covers." Never "fixed price" |
| Abha airport pickup | "The pickup point is confirmed with your booking." No arrivals-hall reception, name board or flight tracking |
| Overnight stops (Riyadh ↔ Abha, AHB → Riyadh) | Not offered: "a single-day journey with breaks" |
| Child seats | "Available on request, subject to availability. Please tell us the number of seats and the children's ages." |
| Never state | Fixed price, 24-hour booking or 24/7, "no tolls/road fees", free rest stops, "no extra cost", driver experience |

## 1. `/routes/riyadh-to-abha` (Arabic block from ≈line 8077)
| # | Current Arabic | Problem | Approved English meaning |
|---|---|---|---|
| 1 | تاكسي من الرياض إلى أبها \| نقل خاص إلى جبال عسير (~8 ساعات و45 دقيقة) | Wrong time in title | "Riyadh to Abha Private Transfer \| Road Trip to Asir" |
| 2 | احجز تاكسي خاص من الرياض إلى أبها (~830 كم). سعر ثابت، من الباب إلى الباب، توقفات راحة، حجز 24 ساعة. | 830 km; fixed price; 24-hour booking | "Plan a private road transfer from Riyadh to Abha, about 950 km into the Asir mountains. Share your pickup, Abha destination, date and passengers for a quotation." |
| 3 | ~830 كم | Distance | "940–960 km" |
| 4 | حوالي 8 ساعات و45 دقيقة | Time | "approx. 11–12 hours" |
| 5 | نغطي المسار الجنوبي الطويل… — سعر ثابت ومرونة توقفات راحة طوال الرحلة. | Fixed price | "Riyadh to Abha is about 940–960 km by road, roughly 11–12 hours of driving before breaks, climbing from about 630 m to 2,220 m. The vehicle, timing and price are set out in a quotation you confirm." |
| 6 | المسافة تقريبًا 830 كم، وتستغرق الرحلة حوالي 8 ساعات و45 دقيقة… | Distance and time | "About 940–960 km from central Riyadh to central Abha, roughly 11–12 hours of driving before breaks." |
| 7 | هل السعر ثابت متضمنًا الجزء الجبلي؟ / نعم، تُتفق الأجرة… دون عداد أو تسعير ذروة أو رسوم طرق. | Fixed price; road-fee claim | Replace with Q "How is the price worked out?" / A "It is quotation-based. The confirmed quotation sets the price and explains what it covers." |
| 8 | نعم، نظرًا للمسافة التي تقارب تسع ساعات، ندرج توقفات راحة حسب الحاجة دون تكلفة إضافية. | "Nine hours"; "no extra cost" | "Yes. A drive of this length needs breaks; tell us your preferences when you request a quote." |
| 9 | *(add)* | Missing owner rules | Add: "Overnight stops aren't offered on this route; it is a single-day journey with breaks." and "Child seats can be provided on request, subject to availability; tell us the number of seats and the children's ages." |

The English page now has 14 FAQs and a new editorial layout. The Arabic page keeps its own template; parity of facts and rules matters more than matching layout.

## 2. `/routes/abha-to-riyadh` (≈line 8155)
| # | Current Arabic | Problem | Approved English meaning |
|---|---|---|---|
| 1 | تاكسي من أبها إلى الرياض \| نقل خاص من الجبال (~8 ساعات و45 دقيقة) | Time | "Abha to Riyadh Private Transfer \| Road Journey North" |
| 2 | احجز تاكسي خاص من أبها إلى الرياض (~830 كم). سعر ثابت، توصيل للمطار، توقفات راحة، حجز 24 ساعة. | 830 km; fixed price; 24-hour | "Request a private road transfer from Abha to Riyadh, about 950 km. Share your Abha pickup, Riyadh destination or flight time, passengers and luggage for a quotation." |
| 3 | ~830 كم / حوالي 8 ساعات و45 دقيقة | Figures | "940–960 km" / "approx. 11–12 hours" |
| 4 | نستلمك من فندق… — مركبة واحدة، سعر ثابت واحد. | Fixed price; "mountain descent" framing | "The journey north starts at the Abha address you confirm and ends at your home, hotel or office in Riyadh, or at King Khalid International Airport. Expect roughly 11–12 hours of driving before breaks. The vehicle, timing and price are set out in a quotation you confirm." |
| 5 | المسافة تقريبًا 830 كم… متضمنة النزول الجبلي… | Figures; the road is a gradual descent, not a mountain descent | "About 940–960 km from central Abha to central Riyadh, roughly 11–12 hours of driving before breaks." |
| 6 | هل الأجرة ثابتة…؟ / نعم، يُتفق على السعر… دون… رسوم طرق. | Fixed price; road fees | Q "How is the price for Abha to Riyadh worked out?" / A "It is quotation-based…" |
| 7 | نعم، مركباتنا توفر مساحة أمتعة كافية للمشتريات من المنطقة. | Unconditional luggage claim | "Tell us about extra luggage so the vehicle can be confirmed in your quotation." |
| 8 | نعم، نقدم نفس الخدمة بسعر ثابت ومتابعة لرجال الأعمال كما لزوار الترفيه. | Fixed price and "tracked" service | Remove |
| 9 | *(check)* any FAQ about Riyadh airport saying flights are tracked or pickup adjusts automatically | No automatic tracking at RUH | "Share your departure time when you request a quote… Flight changes aren't tracked automatically, so message us if anything changes." |
| 10 | *(add)* | Owner rules | Overnight stops not offered; child seats on request (as section 1, row 9) |

## 3. `/routes/abha-airport-to-riyadh` (≈line 10066)
| # | Current Arabic | Problem | Approved English meaning |
|---|---|---|---|
| 1 | نقل من مطار أبها إلى الرياض \| تاكسي خاص بسعر ثابت | Fixed price | "Abha Airport (AHB) to Riyadh Private Transfer" |
| 2 | خدمة استقبال من صالة مطار أبها ونقل طويل المدى… | Arrivals-hall reception (not confirmed) | "Private road transfer from Abha International Airport (AHB) to Riyadh, about 940 km. Share your flight, Riyadh destination, passengers and luggage for a quotation." |
| 3 | 950 كم / 9 ساعات | Time too short | "935–950 km" / "approx. 11–12 hours" |
| 4 | تقطع الرحلة مسافة 950 كم عبر وادي الدواسر وتستغرق حوالي 9 ساعات مع توقفات مريحة في المحطات النموذجية. | Route wording; time; "model stations" claim | "From the airport the road runs north-east past Khamis Mushait and Bisha, then across the Riyadh Region to the capital: about 935–950 km, roughly 11–12 hours of driving before breaks." |
| 5 | تستغرق حوالي 9 ساعات مع التوقفات للاستراحة. | Time | "Roughly 11–12 hours of driving for about 935–950 km, before breaks." |
| 6 | *(check)* any text on flight tracking, name boards, waiting or luggage help | AHB rules not confirmed | "Your pickup point at Abha International Airport is confirmed with your booking." |
| 7 | *(add)* | Owner rules | Overnight stops not offered; child seats on request |

## 4. `/taxi-service/abha` (≈line 24898)
| # | Current Arabic | Problem | Approved English meaning |
|---|---|---|---|
| 1 | خدمة تاكسي خاص في أبها — استقبال من المطار، تلفريك السودة والجبل الأخضر، وجولات هبالة. أسعار ثابتة، مركبات عائلية مريحة. | Fixed prices; "airport reception" | "Private transfers in Abha: airport pickups, hotels, Al-Soudah, Green Mountain and Habala. Share your journey for a quotation." |
| 2 | *(check)* any sentence on drivers waiting in the arrivals hall with a name board | AHB rules not confirmed | "For pickups at Abha International Airport, share your flight details when you request a quotation; the pickup point is confirmed with your booking." |
| 3 | *(check)* Najran / Jazan transfers "بسعر ثابت" | Fixed price | "…can be requested, priced in a quotation you confirm." |
| 4 | Fog sentences (lines 40–41 of the extract) | ✅ accurate | No change |

**Note:** the English `/taxi-service/abha` page is being rebuilt separately (report 54). Once it's approved, a fuller parity list for that page will follow.

## 5. `/blog/riyadh-to-abha-transfer-guide`
There is no Arabic counterpart, so nothing to change.

## 6. Shared Arabic route-card text
Route cards on Arabic listing pages may also show "~830 كم" for Riyadh–Abha. Please search `ar.ts` for `830 كم` (14 occurrences found) and confirm each one relates to Riyadh ↔ Abha before changing it.
