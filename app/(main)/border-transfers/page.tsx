import type { Metadata } from "next";
import { ServiceV2View } from "@/components/services/ServiceV2View";
import { borderTransfersContent } from "@/data/service-pages-v2/border-transfers";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, serviceSchema, faqSchema } from "@/lib/schema";
import { SchemaScript } from "@/components/seo/SchemaScript";
// Lightweight path-only lookup, not the full ~26,700-line content dataset
import { getArPathForEnPathLight } from "@/data/translations/ar-index";

const path = "/border-transfers";
const arPath = getArPathForEnPathLight(path);
const crumbs = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Border Transfers", path },
];

export const metadata: Metadata = buildMetadata({
  title: "Cross-Border Transfers From Saudi Arabia | GCC Road Journeys",
  description:
    "Private cross-border road transfers between Saudi Arabia and the GCC — real border routes, honest crossing-time expectations, no invented immigration claims.",
  path,
  ...(arPath ? { alternateLanguages: { en: path, ar: arPath } } : {}),
});

export default function BorderTransfersPage() {
  return (
    <>
      <SchemaScript
        schema={[
          breadcrumbSchema(crumbs),
          serviceSchema({
            name: "Border Transfers",
            description: borderTransfersContent.dek,
            path,
            serviceType: "Cross-Border Transfer",
          }),
          faqSchema(borderTransfersContent.faqs),
        ]}
      />
      <ServiceV2View {...borderTransfersContent} crumbs={crumbs} labels={{ faqHeading: "Border Transfer Questions" }} />
    </>
  );
}
