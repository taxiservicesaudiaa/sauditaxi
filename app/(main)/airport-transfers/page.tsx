import type { Metadata } from "next";
import { AirportTransfersHub } from "@/components/services/AirportTransfersHub";
import { airportTransfersContent } from "@/data/service-pages-v2/airport-transfers";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, serviceSchema, faqSchema } from "@/lib/schema";
import { SchemaScript } from "@/components/seo/SchemaScript";
// Lightweight path-only lookup, not the full ~26,700-line content dataset
import { getArPathForEnPathLight } from "@/data/translations/ar-index";

const path = "/airport-transfers";
const arPath = getArPathForEnPathLight(path);
const crumbs = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Airport Transfers", path },
];

export const metadata: Metadata = buildMetadata({
  title: "Airport Transfers Saudi Arabia | Private Chauffeur Pickup",
  description:
    "Private airport transfers across Saudi Arabia — a driver waiting after you land, flight-aware pickup timing, and a direct drive to your destination.",
  path,
  ...(arPath ? { alternateLanguages: { en: path, ar: arPath } } : {}),
});

export default function AirportTransfersPage() {
  return (
    <>
      <SchemaScript
        schema={[
          breadcrumbSchema(crumbs),
          serviceSchema({
            name: "Airport Transfers",
            description: airportTransfersContent.dek,
            path,
            serviceType: "Airport Transfer",
          }),
          faqSchema(airportTransfersContent.faqs),
        ]}
      />
      <AirportTransfersHub content={airportTransfersContent} crumbs={crumbs} />
    </>
  );
}
