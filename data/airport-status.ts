/**
 * Dated airport-status notices shown on airport hub and route pages.
 * Keep wording limited to official statements (see reports 27/29/31 for sources)
 * and update the "last checked" date whenever the status is re-verified.
 */
export const RUH_STATUS_NOTICE = {
  heading: "Riyadh airport status — last checked 2 November 2026",
  paragraphs: [
    "King Khalid International Airport announced that Terminal 1 (domestic flights) and Terminal 2 (international flights operated by Saudi national carriers) resumed operations on 25 October 2026, after operations were suspended on 10 October. It has not announced when its other terminals will reopen, and some airlines have not yet restarted Riyadh flights. Airport operations are separate from airline schedules — confirm your flight's status and terminal with your airline before you travel.",
    "Private pickups and drop-offs at King Khalid International Airport can be requested. Each transfer is subject to availability and is confirmed individually: send your flight number, terminal, pickup requirements and destination when you request a quotation.",
    "If your airline has moved your flight to another airport, we can also quote a road transfer to or from Riyadh:",
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
