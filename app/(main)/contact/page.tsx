import type { Metadata } from "next";
import { ContactPageView } from "@/components/contact/ContactPageView";
import { QuoteForm } from "@/components/QuoteForm";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { siteConfig, whatsappLink } from "@/lib/site";
import { pageHeroes } from "@/lib/hero";

// New design only — same URL (/contact), same canonical/hreflang. Distinct
// from /get-quote and /services in purpose, structure and content: this
// page is about communication and trust ("how do I reach you"), not a
// booking funnel or a service catalog. Only real, functioning contact
// channels are shown (WhatsApp deep link + email) — no invented phone
// number, office address, or support-hour guarantee.
const crumbs = [
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact" },
];

export const metadata: Metadata = buildMetadata({
  title: "Contact Saudi Private Transfers | Get in Touch",
  description:
    "Contact Saudi Private Transfers about a transfer question, an existing booking, or a new quote request — reach us by WhatsApp, email, or the form below.",
  path: "/contact",
  alternateLanguages: { en: "/contact", ar: "/ar/اتصل-بنا" },
});

export default function ContactPage() {
  return (
    <>
      <SchemaScript schema={breadcrumbSchema(crumbs)} />
      <ContactPageView
        eyebrow="Contact Us"
        h1="Contact Saudi Private Transfers"
        intro="Reach us about a transfer question, an existing booking, or a new journey — we reply by WhatsApp or email with clear next steps."
        heroImage={pageHeroes.city}
        heroAlt="Private transfer support across Saudi Arabia's cities"
        topics={["Transfer questions", "Existing bookings", "Quote requests", "Journey planning", "General support"]}
        decisionHeading="Choose the Right Way to Contact Us"
        decisionItems={[
          {
            question: "Need a price for an upcoming transfer?",
            action: "Request a Quote",
            href: "/get-quote",
          },
          {
            question: "Have a question about a journey or how the service works?",
            action: "Send Us a Message",
            href: "#contact-form",
          },
          {
            question: "Already have a booking and need to reach us quickly?",
            action: "Message Us on WhatsApp",
            href: whatsappLink("Hello! I have a question about my transfer booking in Saudi Arabia."),
          },
        ]}
        methodsHeading="Contact Methods"
        methodsIntro="All channels reach the same team — choose whichever is easier for you."
        methods={[
          {
            key: "whatsapp",
            title: "WhatsApp",
            value: "Tap to start a chat",
            href: whatsappLink("Hello! I'd like to get in touch about a transfer in Saudi Arabia."),
            external: true,
            bestFor: "Best for a quick question or a fast quote",
          },
          {
            key: "email",
            title: "Bookings",
            value: siteConfig.bookingEmail,
            href: `mailto:${siteConfig.bookingEmail}`,
            bestFor: "Best for quotes, new bookings and changes to an existing booking",
          },
          {
            key: "email",
            title: "General information",
            value: siteConfig.infoEmail,
            href: `mailto:${siteConfig.infoEmail}`,
            bestFor: "Best for general questions and documentation",
          },
        ]}
        formHeading="Send Us a Message"
        formSubheading="Share your journey details below and we'll get back to you by WhatsApp or email."
        formSlot={<QuoteForm serviceType="Contact page enquiry" twoColumn={false} />}
        infoHeading="What Information Helps Us Assist You?"
        infoItems={[
          "Your pickup location and destination",
          "Your travel date and time",
          "Number of passengers and luggage",
          "Your flight number, if arriving by air",
          "Any existing booking reference, if you have one",
        ]}
        nextStepsHeading="What Happens Next?"
        nextSteps={[
          {
            label: "Send your message",
            text: "Use WhatsApp, email, or the form above with your journey details.",
          },
          {
            label: "We review the details",
            text: "Our team checks your journey and the information you've shared.",
          },
          {
            label: "We respond through the right channel",
            text: "You'll hear back by WhatsApp or email, whichever you used to reach us.",
          },
        ]}
        linksHeading="You might also be looking for:"
        links={[
          { label: "Get a Quote", href: "/get-quote" },
          { label: "Our Services", href: "/services" },
          { label: "About Us", href: "/about" },
        ]}
        crumbs={crumbs}
      />
    </>
  );
}
