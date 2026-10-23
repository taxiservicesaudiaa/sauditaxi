/**
 * Dated airport-status notices shown on airport hub and route pages.
 * Keep wording limited to official statements (see reports 27/29/31 for sources)
 * and update the "last checked" date whenever the status is re-verified.
 */
export const RUH_STATUS_NOTICE = {
  heading: "Riyadh airport status — last checked 22 October 2026",
  paragraphs: [
    "Saudi Arabia's General Authority of Civil Aviation (GACA) announced on 10 October 2026 that operations at King Khalid International Airport were temporarily suspended, and on 12 October that the suspension had been extended for safety checks. We have not found an official GACA announcement that scheduled flights have resumed, and reports since then have differed. Confirm your flight's status directly with your airline before you travel.",
    "Airport operations and our road transfers are separate matters. We are not confirming pickups or drop-offs at King Khalid International Airport in advance; if your journey involves the airport, send us your flight details and any airport pickup or drop-off is confirmed case by case in your quotation.",
    "If your airline has moved your flight to another airport, we can quote a road transfer to or from Riyadh:",
  ],
  links: [
    { label: "Qassim (incl. Qassim airport) to Riyadh", href: "/routes/qassim-to-riyadh" },
    { label: "Dammam Airport to Riyadh", href: "/routes/dammam-airport-to-riyadh" },
    { label: "Madinah Airport to Riyadh", href: "/routes/madinah-airport-to-riyadh" },
    { label: "Jeddah Airport to Riyadh", href: "/routes/jeddah-airport-to-riyadh" },
    { label: "Intercity transfers during flight disruptions", href: "/blog/saudi-arabia-intercity-transfers-flight-disruptions" },
  ],
};

export const DMM_STATUS_NOTICE = {
  heading: "Dammam airport status — last checked 22 October 2026",
  paragraphs: [
    "On 22 October 2026, Saudi Arabia's General Authority of Civil Aviation (GACA) said operations at King Fahd International Airport had resumed and air traffic had returned to normal after a security incident at the airport the previous evening. Some airlines have changed their Dammam schedules, so confirm your flight with your airline before you travel.",
    "Our King Fahd International Airport transfers are operating. Share your flight number when you request a quote — we track your flight and confirm the pickup with your booking.",
  ],
};
