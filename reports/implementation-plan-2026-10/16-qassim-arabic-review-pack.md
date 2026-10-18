# Arabic review pack — Qassim ↔ Riyadh route pages (Patch A, Revision 2)

**For:** a qualified native Arabic reviewer (Saudi audience). **Status:** awaiting review. Patch A is not applied until this pack is signed off.

**Pages:**
- `/ar/نقل-من-الرياض-الى-القصيم` (Riyadh → Qassim)
- `/ar/نقل-من-القصيم-الى-الرياض` (Qassim → Riyadh)

**Source:** `data/translations/ar.ts`. Exact diff: `14-qassim-opp08-route-pages-rev2.patch`.

## What to check for every string

1. **Natural phrasing.** Modern Standard Arabic suitable for Saudi travellers, not a word-for-word translation.
2. **Clarity.** The text is easy to follow.
3. **Same meaning as the English.** Use the gloss in each table.
4. **The four business facts are stated accurately:**
   - **Price:** the confirmed quotation sets the price and states what it covers. There is no "fixed price" and no claim that tolls are included or excluded.
   - **Qassim airport (ELQ):** pickup and drop-off are offered. Flight times and meet-and-greet are **not** guaranteed.
   - **Riyadh airport (RUH):** drop-off depends on the airport's current operations and is confirmed in each quotation. It is **not** promised.
   - **Distance, duration and road number:** none is stated.
5. **Spelling, place names and right-to-left punctuation.**

**Rendered** strings are what visitors see, together with the metadata that appears in search results. Review these first.

**Unrendered** strings sit in the stored `contentHtml`, which the current template never displays. They were corrected only so the stored copy doesn't contradict the pages. A lighter review is enough.

## Specific questions for the reviewer

| # | Question |
|---|---|
| R1 | The airport name is written "مطار الأمير نايف بن عبدالعزيز الدولي بالقصيم". Is that the correct and natural form? Should it be "بن عبد العزيز" with a space? |
| R2 | The vehicle names (Economy, Comfort, Business, SUV, Van, Minibus) are left in Latin script because the quote form shows them that way on Arabic pages. Is that acceptable, or should Arabic equivalents be added in brackets? |
| R3 | "رحلة" is used both for the journey and for a flight ("رحلة طيران", "رقم رحلتك"). Is "رقم رحلتك" clear enough in A25, A45, A48 and A64, or should it say "رقم رحلة الطيران"? |
| R4 | Is "عرض السعر المؤكد" (confirmed quotation) the natural term, or would "عرض السعر المعتمد" be better? |
| R5 | Titles A01 and A36 use "القصيم وبريدة". Is that natural, or would "القصيم (بريدة)" be better? |

## Strings — Riyadh → Qassim (`نقل-من-الرياض-الى-القصيم`)

| ID | Shown? | Field | Arabic (proposed) | Intended meaning (English) | OK / correction |
|---|---|---|---|---|---|
| A01 | rendered | meta title | تاكسي من الرياض إلى القصيم وبريدة \| نقل خاص من الباب إلى الباب | Taxi from Riyadh to Qassim and Buraidah \| Door-to-door private transfer | |
| A02 | rendered | meta description | نقل خاص من عنوانك في الرياض إلى بريدة أو عنيزة أو أي مكان في القصيم. أرسل نقطة الانطلاق وعدد الركاب والأمتعة، ويحدد عرض السعر المؤكد قيمة رحلتك. | Private transfer from your Riyadh address to Buraidah, Unaizah or anywhere in Qassim. Send your pickup point, passengers and luggage — the confirmed quotation sets your price. | |
| A03 | rendered | summary paragraph | ننقلك من عنوانك في الرياض شمالًا إلى بريدة أو عنيزة أو أي مكان في منطقة القصيم، من الباب إلى الباب حتى المنزل أو الفندق أو المزرعة أو مطار الأمير نايف بن عبدالعزيز الدولي بالقصيم — في مركبة واحدة لمجموعتك كاملة، وبسعر يحدده عرض السعر الذي تؤكده قبل السفر. | We take you north from your Riyadh address to Buraidah, Unaizah or anywhere in Qassim, door to door to a home, hotel, farm or Prince Naif bin Abdulaziz International Airport — one vehicle for your whole group, at the price set by the quotation you confirm before travelling. | |
| A04 | rendered | new section heading | كيف يُحدَّد السعر | How the price is set | |
| A05 | rendered | new section | يصلك قبل السفر عرض سعر خاص برحلتك، ويحدد عرض السعر المؤكد قيمة الرحلة وما تشمله. إن كانت خطتك تتضمن توقفًا إضافيًا أو وقت انتظار أو تغييرًا في العنوان، فاذكر ذلك عند طلب العرض ليُضمَّن فيه. | Before you travel you receive a quotation for your journey. The confirmed quotation sets the price and what it covers. If your plans include an extra stop, waiting time or an address change, mention it when you ask for the quote so it is included. | |
| A06 | rendered | new section heading | المعلومات المطلوبة لطلب عرض السعر | Information needed to request a quote | |
| A07 | rendered | new section | أرسل نقطة الانطلاق في الرياض، ووجهتك في القصيم، وتاريخ الرحلة ووقتها، وعدد الركاب والحقائب، ونوع المركبة المفضّل. وإن كنت تخطط للعودة، فاذكر موعد رحلة العودة في خانة الرسالة. | Send your pickup point in Riyadh, destination in Qassim, date and time, number of passengers and bags, and preferred vehicle. If you plan to return, give the return date in the message field. | |
| A08 | rendered | new section heading | الاستراحة والسفر مع العائلة | Rest stops and travelling with family | |
| A09 | rendered | new section | إن رغبت في استراحة على الطريق، أو كان معك أطفال صغار أو كبار في السن، فاذكر ذلك عند طلب عرض السعر ليُتفق عليه مسبقًا. | If you would like a break on the way, or are travelling with young children or older relatives, mention it when you ask for the quote so it can be agreed in advance. | |
| A10 | rendered | FAQ question | كم تستغرق الرحلة من الرياض إلى القصيم؟ | How long does the trip from Riyadh to Qassim take? | |
| A11 | rendered | FAQ answer | تعتمد المدة على عنوانك في الرياض ووجهتك في القصيم وحركة المرور وأي استراحة تطلبها. اذكر وقت الانطلاق المفضّل وأي موعد وصول تحتاجه عند طلب عرض السعر، ليُخطَّط وقت الاستلام على أساسه. | It depends on your Riyadh address, your Qassim destination, traffic and any break you ask for. Give your preferred departure time and any arrival deadline when you ask for a quote, so the pickup time can be planned around them. | |
| A12 | rendered | FAQ question | كيف يُحدَّد سعر الرحلة؟ | How is the price of the trip set? | |
| A13 | rendered | FAQ answer | يصلك قبل السفر عرض سعر خاص برحلتك، ويحدد عرض السعر المؤكد قيمة الرحلة وما تشمله. راجعه للتأكد من تضمين ما تحتاجه، مثل التوقفات الإضافية أو وقت الانتظار. | Before you travel you receive a quotation for your trip. The confirmed quotation sets the price and what it covers. Check that it includes what you need, such as extra stops or waiting time. | |
| A14 | rendered | FAQ answer (farm visit; question unchanged) | نعم، يمكن طلب التنزيل في مزرعة داخل منطقة القصيم — أرسل الموقع عند الحجز، واختر SUV أو Van في نموذج عرض السعر إن احتجت مساحة إضافية. | Yes, drop-off at a farm in the Qassim region can be requested. Send the location when booking, and choose SUV or Van in the quote form if you need extra space. | |
| A15 | rendered | FAQ question | هل يمكن التوقف للاستراحة في الطريق؟ | Can we stop for a break on the way? | |
| A16 | rendered | FAQ answer | اطلب الاستراحة عند طلب عرض السعر ليُتفق عليها مسبقًا. | Ask for the break when you request the quote, so it is agreed in advance. | |
| A17 | rendered | FAQ answer (continue to Hail) | نعم، تغطي صفحة النقل من الرياض إلى حائل هذه الرحلة الأطول شمالًا مرورًا بالقصيم. | Yes, the Riyadh to Hail transfer page covers this longer journey north through Qassim. | |
| A18 | rendered | FAQ answer (return) | نعم، تغطي صفحة النقل من القصيم إلى الرياض رحلة العودة، ويمكنك ذكر موعد العودة في خانة الرسالة عند طلب عرض السعر. | Yes, the Qassim to Riyadh page covers the return, and you can give the return date in the message field when requesting a quote. | |
| A19 | rendered | FAQ answer (business) | نعم، تُحجز رحلات العمل بالطريقة نفسها: أرسل نقطة الانطلاق والوجهة والتوقيت، ويحدد عرض السعر المؤكد قيمة الرحلة. | Yes, business trips are booked the same way: send pickup, destination and timing, and the confirmed quotation sets the price. | |
| A20 | rendered | FAQ question | هل تناسب الرحلة الأطفال وكبار السن؟ | Is the trip suitable for children and older travellers? | |
| A21 | rendered | FAQ answer | اذكر احتياجاتك عند طلب عرض السعر، مثل استراحة على الطريق. وإن كنت تسافر مع أطفال صغار، فاسأل عن مقاعد الأطفال قبل تأكيد الحجز. | Mention your needs when requesting the quote, such as a break on the way. If you travel with young children, ask about child seats before confirming. | |
| A22 | rendered | new FAQ question | ما أنواع المركبات التي يمكن طلبها؟ | Which vehicle types can be requested? | |
| A23 | rendered | new FAQ answer | يتيح نموذج طلب عرض السعر اختيار Economy أو Comfort أو Business أو SUV أو Van أو Minibus، وتُؤكَّد المركبة المقدَّمة لرحلتك في عرض السعر. | The quote form lets you choose Economy, Comfort, Business, SUV, Van or Minibus; the vehicle offered is confirmed in your quotation. | |
| A24 | rendered | new FAQ question | هل يمكن توصيلي إلى مطار القصيم؟ | Can you take me to Qassim airport? | |
| A25 | rendered | new FAQ answer | نعم، يتوفر التوصيل إلى مطار الأمير نايف بن عبدالعزيز الدولي بالقصيم. أرسل رقم رحلتك وموعد إقلاعها عند طلب عرض السعر ليُحدَّد وقت الاستلام في الرياض على أساسه، وتحقّق من حالة رحلتك لدى شركة الطيران قبل الانطلاق. | Yes, drop-off at Prince Naif bin Abdulaziz International Airport (Qassim) is available. Send your flight number and departure time when requesting a quote so the Riyadh pickup time can be planned around it, and check your flight status with the airline before setting off. | |
| A26 | unrendered | stored intro | النقل الخاص من الرياض إلى القصيم رحلة عبر الطريق السريع شمالًا … نوصلك من الباب إلى الباب لمنزل أو فندق أو مزرعة — في مركبة واحدة، وبسعر يحدده عرض السعر الذي تؤكده قبل السفر. | (Only the final sentence changed:) door to door to a home, hotel or farm — one vehicle, at the price set by the quotation you confirm. | |
| A27 | unrendered | stored overview | تتجه الرحلة من الرياض شمالًا إلى القصيم، ومركزها مدينة بريدة، عبر طريق الرياض–القصيم الرئيسي. وتعتمد المدة الفعلية على عنوانَي الانطلاق والوصول وحركة المرور وأي استراحة تطلبها. | The trip heads north from Riyadh to Qassim, centred on Buraidah, on the main Riyadh–Qassim highway. Actual time depends on the pickup and drop-off addresses, traffic and any break you request. | |
| A28 | unrendered | stored heading | الطريق الرئيسي شمالًا | The main route north | |
| A29 | unrendered | stored paragraph | يمر الطريق المعتاد شمالًا من الرياض عبر طريق الرياض–القصيم الرئيسي، وهو الممر نفسه الذي يستمر شمالًا نحو حائل. | The usual route runs north from Riyadh on the main Riyadh–Qassim highway, the same corridor that continues north toward Hail. | |
| A30 | unrendered | stored paragraph | تشتهر القصيم وطنيًا بأسواق الإبل وبإنتاج التمور والقمح. … | Qassim is known nationally for its camel markets and its date and wheat production (the "largest in the world" claim was removed). | |
| A31 | unrendered | stored paragraph | (same text as A09) | (as A09) | |
| A32–A33 | unrendered | stored price section | (same text as A04–A05) | (as A04–A05) | |
| A34 | unrendered | stored business paragraph | … يحجزون الرحلة بالطريقة نفسها، ويحدد عرض السعر المؤكد قيمتها. | … book the trip the same way, and the confirmed quotation sets its price. | |
| A35 | unrendered | stored booking paragraph | … نرد بعرض سعر لمركبة مناسبة، ويحدد عرض السعر المؤكد قيمة الرحلة، ولا يلزم أي دفع للحصول على العرض. اطلب عرض السعر عبر واتساب أو من خلال نموذج طلب عرض السعر. | … we reply with a quotation for a suitable vehicle; the confirmed quotation sets the price; no payment is needed to receive it. Request it on WhatsApp or through the quote form. | |

## Strings — Qassim → Riyadh (`نقل-من-القصيم-الى-الرياض`)

| ID | Shown? | Field | Arabic (proposed) | Intended meaning (English) | OK / correction |
|---|---|---|---|---|---|
| A36 | rendered | meta title | تاكسي من القصيم وبريدة إلى الرياض \| نقل خاص من الباب إلى الباب | Taxi from Qassim and Buraidah to Riyadh \| Door-to-door private transfer | |
| A37 | rendered | meta description | نقل خاص من بريدة أو عنيزة أو أي مكان في القصيم إلى عنوانك في الرياض. أرسل نقطة الانطلاق وعدد الركاب والأمتعة، ويحدد عرض السعر المؤكد قيمة رحلتك. | Private transfer from Buraidah, Unaizah or anywhere in Qassim to your Riyadh address. Send pickup point, passengers and luggage — the confirmed quotation sets your price. | |
| A38 | rendered | intro (also Service schema description) | النقل الخاص من القصيم إلى الرياض رحلة برية من بريدة ومنطقة القصيم جنوبًا إلى العاصمة، يختارها المقيمون، والعائدون من زيارة الأسواق والمزارع، ورجال الأعمال المتجهون إلى الرياض. | The private transfer from Qassim to Riyadh is a road journey south from Buraidah and the Qassim region to the capital, chosen by residents, people returning from markets and farms, and business travellers heading to Riyadh. (The old wording "connecting to Riyadh airport" was removed.) | |
| A39 | rendered | summary paragraph | نستلمك من منزلك أو فندقك أو مزرعتك في بريدة أو عنيزة أو أي مكان في منطقة القصيم، أو من مطار الأمير نايف بن عبدالعزيز الدولي بالقصيم، وننقلك جنوبًا إلى وجهتك في الرياض — في مركبة واحدة لمجموعتك كاملة، وبسعر يحدده عرض السعر الذي تؤكده قبل السفر. | We collect you from your home, hotel or farm in Buraidah, Unaizah or anywhere in Qassim, or from Prince Naif bin Abdulaziz International Airport, and take you south to your Riyadh destination — one vehicle for your group, at the price set by the quotation you confirm. | |
| A40–A41 | rendered | new price section | (same text as A04–A05) | (as A04–A05) | |
| A42 | rendered | new section heading | المعلومات المطلوبة لطلب عرض السعر | Information needed to request a quote | |
| A43 | rendered | new section | أرسل نقطة الانطلاق في القصيم، ووجهتك في الرياض، وتاريخ الرحلة ووقتها، وعدد الركاب والحقائب، ونوع المركبة المفضّل. وإن كانت لديك رحلة طيران من الرياض، فأضف رقم الرحلة وموعدها. | Send your pickup point in Qassim, destination in Riyadh, date and time, passengers and bags, and preferred vehicle. If you have a flight from Riyadh, add its number and time. | |
| A44 | rendered | new section heading | إذا كانت رحلتك متصلة برحلة طيران | If your trip connects to a flight | |
| A45 | rendered | new section | أرسل رقم رحلتك وموعد إقلاعها عند طلب عرض السعر. ويعتمد التوصيل إلى مطار الملك خالد الدولي على وضع تشغيل المطار حاليًا، ويُؤكَّد في عرض السعر. وتحقّق من حالة رحلتك لدى شركة الطيران قبل الانطلاق. | Send your flight number and departure time when requesting a quote. Drop-off at King Khalid International Airport depends on the airport's current operations and is confirmed in the quotation. Check your flight status with the airline before setting off. **(RUH — owner review)** | |
| A46 | rendered | FAQ question | كم تستغرق الرحلة من القصيم إلى الرياض؟ | How long does the trip from Qassim to Riyadh take? | |
| A47 | rendered | FAQ answer | تعتمد المدة على عنوانك في القصيم ووجهتك في الرياض وحركة المرور وأي استراحة تطلبها. وإن كنت تحتاج الوصول إلى الرياض في موعد محدد، كرحلة طيران مثلًا، فاذكره عند طلب عرض السعر ليُخطَّط وقت الاستلام على أساسه. | It depends on your Qassim address, Riyadh destination, traffic and any break you request. If you need to reach Riyadh by a set time, such as for a flight, mention it when requesting a quote so the pickup time is planned around it. | |
| A48 | rendered | FAQ answer (Riyadh airport; question unchanged) | يعتمد التوصيل إلى مطار الملك خالد الدولي على وضع تشغيل المطار حاليًا، لذا يُؤكَّد لكل رحلة على حدة. أرسل رقم رحلتك وموعد إقلاعها عند طلب عرض السعر، وسيوضح عرض السعر إن كان التوصيل إلى المطار ممكنًا. | Drop-off at King Khalid International Airport depends on the airport's current operations, so it is confirmed trip by trip. Send your flight number and departure time when requesting a quote; the quotation will state whether an airport drop-off is possible. **(RUH — owner review)** | |
| A49–A50 | rendered | FAQ (price) | (same text as A12–A13) | (as A12–A13) | |
| A51 | rendered | FAQ answer (produce/luggage) | نعم، أدخل عدد الحقائب في نموذج عرض السعر، واذكر في خانة الرسالة أي أغراض كبيرة أو منتجات زراعية، ليُقترح في عرض السعر مركبة بمساحة كافية. | Yes — enter your number of bags in the quote form and mention large items or farm produce in the message, so a vehicle with enough space is offered in the quotation. | |
| A52–A53 | rendered | FAQ (rest stop) | (same text as A15–A16) | (as A15–A16) | |
| A54 | rendered | FAQ answer (return) | نعم، تغطي صفحة النقل من الرياض إلى القصيم هذا الاتجاه، ويمكنك ذكر موعد العودة في خانة الرسالة عند طلب عرض السعر. | Yes, the Riyadh to Qassim page covers that direction; you can give the return date in the message field. | |
| A55 | rendered | FAQ answer (business) | (same text as A19) | (as A19) | |
| A56–A57 | rendered | FAQ (older travellers, children) | هل تناسب الرحلة كبار السن والأطفال؟ / (answer same as A21) | Is the trip suitable for older travellers and children? / (as A21) | |
| A58 | rendered | FAQ answer (from Hail) | نعم، تغطي صفحة النقل من حائل إلى الرياض هذه الرحلة الأطول مرورًا بالقصيم. | Yes, the Hail to Riyadh page covers this longer journey through Qassim. | |
| A59 | rendered | FAQ question | هل يمكن السفر ليلًا؟ | Can I travel at night? | |
| A60 | rendered | FAQ answer | نعم، يمكنك طلب الانطلاق ليلًا — اذكر وقت الاستلام المفضّل عند طلب عرض السعر. خدمة العملاء متاحة على مدار الساعة. | Yes, you can request a night-time departure — give your preferred pickup time when requesting a quote. Customer support is available 24/7. | |
| A61–A62 | rendered | new FAQ (vehicles) | (same text as A22–A23) | (as A22–A23) | |
| A63 | rendered | new FAQ question | هل يمكن استلامي من مطار القصيم؟ | Can I be picked up at Qassim airport? | |
| A64 | rendered | new FAQ answer | نعم، يتوفر الاستلام من مطار الأمير نايف بن عبدالعزيز الدولي بالقصيم. أرسل رقم رحلتك وموعد وصولها المتوقع عند طلب عرض السعر، ويُؤكَّد وقت الاستلام وترتيبات اللقاء في عرض السعر. | Yes, pickup at Prince Naif bin Abdulaziz International Airport (Qassim) is available. Send your flight number and expected arrival time when requesting a quote; the pickup time and meeting arrangements are confirmed in the quotation. | |
| A65–A76 | unrendered | stored `contentHtml` | Same corrections as the rendered strings above: the intro (as A38), overview, "main route south", rest stops, price (as A05), flight paragraph (as A45, RUH), business, popular stops ("وتنتهي في منزل أو فندق أو مقر عمل في الرياض"), and booking (as A35) | Stored copy aligned with the rendered pages | |

## Sign-off

| Item | Entry |
|---|---|
| Reviewer name and qualification | |
| Date | |
| Outcome | Approved / Approved with corrections / Rejected |
| Corrections, by ID | |
