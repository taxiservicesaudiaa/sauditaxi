import type { Metadata } from "next";
import { LegalPageView, type LegalSectionItem } from "@/components/legal/LegalPageView";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
// Lightweight path-only lookup, not the full ~26,700-line content dataset
import { getArPathForEnPathLight } from "@/data/translations/ar-index";

// New design only — legal wording is unchanged from the previous version of
// this page (same headings, same paragraphs, same lists), just restructured
// into numbered/anchored sections. URL, canonical and metadata intent
// preserved. "Last updated" date carried over unchanged (29 May 2026).
const path = "/terms-and-conditions";
const arPath = getArPathForEnPathLight(path);
const crumbs = [
  { name: "Home", path: "/" },
  { name: "Terms & Conditions", path },
];

export const metadata: Metadata = buildMetadata({
  title: "Terms & Conditions | Saudi Private Transfers",
  description:
    "The terms and conditions for using the Saudi Private Transfers website and requesting taxi, airport, and transfer quotes across Saudi Arabia.",
  path,
  ...(arPath ? { alternateLanguages: { en: path, ar: arPath } } : {}),
});

const sections: LegalSectionItem[] = [
  {
    id: "introduction",
    heading: "Introduction",
    paragraphs: [
      `These Terms & Conditions govern your use of the ${siteConfig.name} website and the booking-request service we provide. By submitting a quote request, contacting us, or otherwise using this website, you agree to these terms. If you do not agree, please do not use the service.`,
    ],
  },
  {
    id: "services-provided",
    heading: "Services Provided",
    paragraphs: [
      "We operate a taxi and transfer lead-generation and booking-coordination service across Saudi Arabia, covering airport transfers, city rides, intercity routes, border crossings, and Umrah, Hajj, and Ziyarat transport.",
      "We connect customers with professional drivers and transport partners. The transport itself is performed by drivers or partner companies, and your trip is subject to their availability.",
    ],
  },
  {
    id: "booking-requests",
    heading: "Booking Requests",
    paragraphs: [
      "Submitting the quote form or contacting us by email is a request for a quote, not a confirmed booking. A booking is only confirmed once we reply and you accept the quoted price and trip details.",
      "You are responsible for providing accurate pickup, drop-off, date, time, passenger, and luggage details so we can quote and arrange your transfer correctly.",
    ],
  },
  {
    id: "quotes-and-pricing",
    heading: "Quotes and Pricing",
    paragraphs: [
      "Quotes are based on the information you provide and are valid for a limited time. Prices may change if trip details change — for example, additional stops, waiting time, route changes, extra passengers, or excess luggage.",
      "Tolls, parking, border fees, and similar third-party charges may be included in or added to your quote and will be communicated before your trip is confirmed.",
    ],
  },
  {
    id: "payment-terms",
    heading: "Payment Terms",
    important: true,
    paragraphs: [
      "Payment terms (cash, card, or other methods) are confirmed at the time of booking. No payment is required simply to receive a quote.",
      "Any deposit or prepayment requirements for specific routes or vehicle types will be communicated clearly before you confirm.",
    ],
  },
  {
    id: "cancellations",
    heading: "Cancellations",
    important: true,
    paragraphs: [
      "If you need to cancel or change a confirmed booking, please notify us as early as possible by email or through our booking form.",
      "Cancellation conditions may vary by route, vehicle type, and how close the cancellation is to the pickup time. Any applicable cancellation terms will be shared at the time of booking.",
    ],
  },
  {
    id: "driver-partner-responsibility",
    heading: "Driver / Partner Responsibility",
    paragraphs: [
      "Transport is provided by professional drivers and partner companies who are responsible for the safe operation and licensing of their vehicles in accordance with Saudi regulations.",
      "We take reasonable care in coordinating reliable partners, but the driver or partner remains responsible for the conduct of the journey.",
    ],
  },
  {
    id: "customer-responsibilities",
    heading: "Customer Responsibilities",
    list: [
      "Provide accurate and complete trip details when requesting a quote.",
      "Be available and ready at the agreed pickup time and location.",
      "Treat drivers, vehicles, and partner staff with respect.",
      "Comply with Saudi laws and any vehicle safety requirements during the trip.",
      "Carry valid travel documents for border transfers (passport and visa where required).",
    ],
  },
  {
    id: "delays-and-waiting-time",
    heading: "Delays and Waiting Time",
    important: true,
    paragraphs: [
      "We track flights for airport pickups and include reasonable wait time. Extended waiting beyond the agreed allowance, or delays caused by the customer, may incur additional charges.",
      "We are not liable for delays caused by traffic, weather, road closures, border processing, or other circumstances beyond our reasonable control.",
    ],
  },
  {
    id: "luggage-and-passenger-information",
    heading: "Luggage and Passenger Information",
    important: true,
    paragraphs: [
      "You must declare the correct number of passengers and luggage items so we assign a suitable vehicle. The driver may decline to carry passengers or luggage that exceed the vehicle's safe and legal capacity.",
    ],
  },
  {
    id: "limitation-of-liability",
    heading: "Limitation of Liability",
    paragraphs: [
      "To the maximum extent permitted by law, our liability is limited to coordinating your transfer request. We are not liable for indirect, incidental, or consequential losses arising from the use of the service or the transport provided by drivers or partners.",
      "Nothing in these terms excludes any liability that cannot be excluded under applicable law.",
    ],
  },
  {
    id: "changes-to-terms",
    heading: "Changes to Terms",
    paragraphs: [
      "We may update these Terms & Conditions from time to time. The latest version will always be available on this page, and your continued use of the service constitutes acceptance of the updated terms.",
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <SchemaScript schema={breadcrumbSchema(crumbs)} />
      <LegalPageView
        h1="Terms & Conditions"
        dek="Please review the conditions that apply when you use our website and request a taxi or transfer quote in Saudi Arabia."
        updatedLabel="Last updated"
        updatedDate="29 May 2026"
        tocLabel="On This Page"
        summaryHeading="Before You Book"
        summaryItems={[
          "Booking requests",
          "Quotes & pricing",
          "Payment terms",
          "Cancellations",
          "Delays & waiting time",
          "Luggage & passenger info",
          "Customer responsibilities",
          "Limitation of liability",
        ]}
        flowHeading="How a Booking Is Confirmed"
        flowSteps={[{ label: "Request" }, { label: "Quote" }, { label: "Confirmation" }, { label: "Transfer" }]}
        sections={sections}
        contactHeading="Questions About These Terms"
        contactText={`For any questions about these terms, contact us by email at ${siteConfig.email} or through our booking form.`}
        quoteLinkLabel="Request a quote"
        quoteLinkHref="/get-quote"
        crumbs={crumbs}
      />
    </>
  );
}
