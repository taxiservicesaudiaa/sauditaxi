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
// preserved. "Last updated" date carried over unchanged (29 May 2026) —
// not refreshed, since the underlying policy text was not revised.
const path = "/privacy-policy";
const arPath = getArPathForEnPathLight(path);
const crumbs = [
  { name: "Home", path: "/" },
  { name: "Privacy Policy", path },
];

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy | Saudi Private Transfers",
  description:
    "How Saudi Private Transfers collects, uses, and protects your personal information when you request a taxi or transfer quote in Saudi Arabia.",
  path,
  ...(arPath ? { alternateLanguages: { en: path, ar: arPath } } : {}),
});

const sections: LegalSectionItem[] = [
  {
    id: "information-we-collect",
    heading: "Information We Collect",
    paragraphs: [
      `${siteConfig.name} collects the information you provide when you request a quote or contact us. This helps us understand your trip and respond with availability and pricing.`,
    ],
    list: [
      "Your name and contact details (phone/WhatsApp number and, optionally, email).",
      "Trip details: pickup and drop-off locations, date, time, passengers, and luggage.",
      "Vehicle preference, flight number (if provided), and any message you send.",
      "Technical data such as the page you submitted from, and basic analytics data.",
    ],
  },
  {
    id: "how-we-use-information",
    heading: "How We Use Your Information",
    list: [
      "To respond to your quote request and arrange your transfer.",
      "To contact you with availability, pricing, and booking confirmation.",
      "To coordinate your trip with drivers and transport partners.",
      "To improve our service and respond to enquiries and support requests.",
    ],
  },
  {
    id: "lead-form-data",
    heading: "Lead Form Data",
    paragraphs: [
      "When you submit a quote or contact form, the details are stored securely so our team can manage your request through our internal CRM. Access to this data is restricted to authorised staff.",
    ],
  },
  {
    id: "whatsapp-and-email",
    heading: "WhatsApp and Email Communication",
    paragraphs: [
      "When you choose to contact us by WhatsApp, your message and number are processed to handle your request. If you provide an email address, we may send you a confirmation and follow-up messages relating to your booking.",
      "We do not send unsolicited marketing. Communication is focused on your transfer request.",
    ],
  },
  {
    id: "sharing-with-partners",
    heading: "Sharing Information with Transport Partners",
    paragraphs: [
      "To fulfil your booking we share the necessary trip details (such as pickup, drop-off, time, and contact number) with the assigned driver or transport partner. We share only what is needed to complete your transfer.",
      "We do not sell your personal information to third parties.",
    ],
  },
  {
    id: "cookies-and-analytics",
    heading: "Cookies and Analytics",
    paragraphs: [
      "We may use cookies and analytics tools to understand how visitors use the website and to improve performance and content. You can control cookies through your browser settings.",
    ],
  },
  {
    id: "data-security",
    heading: "Data Security",
    important: true,
    paragraphs: [
      "We take reasonable technical and organisational measures to protect your information. Lead data is stored in a secured database, and administrative access is password-protected and restricted to authorised staff.",
    ],
  },
  {
    id: "user-rights",
    heading: "User Rights",
    important: true,
    paragraphs: [
      "You may request access to, correction of, or deletion of the personal information we hold about you. To make a request, contact us using the details below and we will respond within a reasonable time.",
    ],
  },
  {
    id: "data-retention",
    heading: "Data Retention",
    paragraphs: [
      "We retain lead and booking information for as long as needed to provide our service, respond to enquiries, and meet legal or operational requirements. When data is no longer needed, it is deleted or anonymised.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <SchemaScript schema={breadcrumbSchema(crumbs)} />
      <LegalPageView
        h1="Privacy Policy"
        dek="How Saudi Private Transfers collects, uses and protects information when you request a taxi or transfer quote in Saudi Arabia."
        updatedLabel="Last updated"
        updatedDate="29 May 2026"
        tocLabel="On This Page"
        trustHeading="Your Privacy Matters"
        trustText="We collect only the information needed to arrange your transfer, access to it is restricted to authorised staff, and we do not sell your personal information to third parties."
        sections={sections}
        contactHeading="Contact Us About Your Data"
        contactText={`If you have any questions about this Privacy Policy or your data, contact us by email at ${siteConfig.email} or through our booking form.`}
        quoteLinkLabel="Request a quote"
        quoteLinkHref="/get-quote"
        crumbs={crumbs}
      />
    </>
  );
}
