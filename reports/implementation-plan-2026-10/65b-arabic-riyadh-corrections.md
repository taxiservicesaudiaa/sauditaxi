# 65b: Proposed Arabic corrections for Riyadh-related pages (for native-speaker review)

**For:** a native Arabic reviewer.

**Nothing in `data/translations/ar.ts` was changed.** The lines below are current text found on 25 November 2026, each with a proposed replacement that matches the corrected English pages: quotation-based, with no fixed price, no 24/7, no in-hall reception and no flight tracking.

**Please adjust wording for natural Arabic before applying.**

## Recurring replacements (use wherever they occur)

| Current | Proposed |
|---|---|
| بسعر ثابت / سعر ثابت متفق عليه قبل سفرك | بعرض سعر نرسله إليك لتراجعه وتؤكده قبل السفر |
| أسعار ثابتة / بأسعار ثابتة | عروض أسعار حسب رحلتك |
| نؤكد مركبة مناسبة وسعرًا ثابتًا (شاملًا) قبل سفرك، ولا يلزم أي دفع لمجرد معرفة السعر | نقترح مركبة مناسبة ونرسل لك عرض سعر تراجعه وتؤكده قبل السفر |
| على مدار الساعة / حجز على مدار الساعة | (remove) |
| استقبال داخل الصالة | يُؤكَّد ترتيب الاستقبال معك عند الحجز |
| متابعة لرحلتك الجوية | (remove; flight tracking is not offered at RUH) |
| سائقين محترفين | (remove, or keep neutral: سائق خاص) |

## By page

| AR page (`ar.ts` line) | Current | Proposed |
|---|---|---|
| `/taxi-service/riyadh` (1452) | "…والمعالم السياحية، بأسعار ثابتة وسائقين محترفين على مدار الساعة." | "…والمعالم السياحية، بعروض أسعار حسب رحلتك." |
| `/taxi-service/riyadh` (1471) | "…من المطار إلى أي فندق أو عنوان داخل الرياض بسعر ثابت." | "…من المطار إلى أي فندق أو عنوان داخل الرياض، ويُؤكَّد ترتيب الاستقبال معك عند الحجز." |
| `/cities/riyadh` (1675) | "…إلى فندقك في الرياض، بسعر ثابت وسائق محترف ومتابعة لرحلتك الجوية…" | "…إلى فندقك في الرياض، بعرض سعر تؤكده قبل السفر." |
| `/cities/riyadh` (1677, 1682) | "…— أسعار ثابتة، استقبال داخل الصالة، وحجز على مدار الساعة…" | "…— عروض أسعار حسب رحلتك، ويُؤكَّد ترتيب الاستقبال معك عند الحجز." |
| `/cities/riyadh` (1687) | "…نرد بسعر ثابت لنقلك الخاص من مطار الملك خالد الدولي." | "…نرد بعرض سعر لنقلك الخاص من مطار الملك خالد الدولي." |
| `/airport-transfer/riyadh-airport` (1375) | "…— استقبال داخل الصالة، سعر ثابت، ومركبات مناسبة…" | "…— عرض سعر قبل السفر، ومركبات مناسبة…" |
| `/airport-transfer/riyadh-airport` (1396) | "…نغطي جميع هذه الوجهات بسعر ثابت." | "…ويمكنك طلب عرض سعر لأي من هذه الوجهات." |
| `/airport-transfer/riyadh-airport` (1404) | FAQ "هل الأسعار ثابتة لجميع أحياء الرياض؟" | Rewrite as "كيف يُحدَّد سعر الرحلة؟", answered with "يُحدَّد السعر في عرض السعر حسب نقطة الانطلاق والوجهة والتاريخ وعدد الركاب." |
| `/routes/riyadh-to-jeddah` (11944) | "(950 كم، ~9 ساعات)" | "(950 كم، نحو 9.5–10.5 ساعات قيادة)" |
| `/routes/riyadh-to-jeddah` (11948) | `duration: "9 ساعات"` | `duration: "9.5–10.5 ساعات"` |
| `/routes/riyadh-to-jeddah` (11974) | "تستغرق الرحلة حوالي 9 ساعات…" | "تستغرق القيادة عادةً نحو 9.5–10.5 ساعات، إضافةً إلى التوقفات…" |
| `/routes/riyadh-to-alula` (11983) | "(1000 كم)… بسعر ثابت." | "(نحو 1,035–1,045 كم)… بعرض سعر تؤكده قبل السفر." |
| `/routes/riyadh-to-alula` (11986–11987) | `distance: "1000 كم"`, `duration: "9 ساعات و30 دقيقة"` | `distance: "1,035–1,045 كم"`, `duration: "10.5–11 ساعة"` |
| `/routes/riyadh-to-madinah` (7770, 7779, 7785, 7802, 7836) | Fixed price in the meta, body (×2), FAQ and booking text | Recurring replacements above. The FAQ "هل السعر ثابت لرحلة طويلة كهذه؟" becomes "كيف يُحدَّد السعر لرحلة طويلة كهذه؟" |
| `/routes/riyadh-to-madinah` (7815) | "الطريق السريع مُصان جيدًا طوال الرحلة… إدارة إرهاق السائق" | Remove the unverified road-condition and driver-fatigue claims |
| `/routes/riyadh-to-qassim` (7456, 7465, 7471, 7480, 7488, 7514, 7523) | Fixed price (×7); "بدون رسوم طرق" | Recurring replacements; remove "بدون رسوم طرق" (no reliable toll source) |

**Not found on `/routes/riyadh-to-dammam` or `/routes/riyadh-to-makkah`:** the scanned fixed-price phrasing does not appear there. They should still get a full review for parity with the English pages.

**Pages also not reviewed line by line:** the Arabic Riyadh–Madinah and Riyadh–Qassim pages contain other English-era claims. A full parity review is recommended.
