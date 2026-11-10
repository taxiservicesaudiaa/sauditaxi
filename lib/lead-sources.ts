/**
 * Websites that send leads into this CRM.
 *
 * The original site posts to the public `/api/leads` endpoint and its leads
 * carry `source_site = NULL` (every lead created before this file existed is
 * also NULL). Other websites post server-to-server to `/api/leads/intake`,
 * authenticated with their own bearer token; the endpoint — never the
 * browser — decides which website a lead came from.
 *
 * The two brand names are deliberately spelled out in full wherever an admin
 * sees them: "Saudi Private Transfers" and "Private Transfers Across Saudi"
 * are easy to confuse.
 */

export const PTAS_SOURCE_SITE = "private-transfers-across-saudi" as const;

export interface IntakeSite {
  /** Value stored in `public.leads.source_site`. */
  id: typeof PTAS_SOURCE_SITE;
  /** Full brand name shown in the CRM and in emails. */
  label: string;
  /** Server-only env var holding this site's intake bearer token. */
  tokenEnv: string;
  /** Server-only env var holding this site's verified sender (optional). */
  fromEnv: string;
  /** Server-only env var holding this site's public URL (optional). */
  siteUrlEnv: string;
}

export const INTAKE_SITES: readonly IntakeSite[] = [
  {
    id: PTAS_SOURCE_SITE,
    label: "Private Transfers Across Saudi",
    tokenEnv: "PTAS_INTAKE_TOKEN",
    fromEnv: "PTAS_FROM_EMAIL",
    siteUrlEnv: "PTAS_SITE_URL",
  },
];

/** Label for the original website; also used for legacy NULL leads. */
export const ORIGINAL_SITE_LABEL = "Saudi Private Transfers";

/** Human label for a lead's `sourceSite` (NULL/undefined = original site). */
export function sourceSiteLabel(sourceSite: string | null | undefined): string {
  if (!sourceSite) return ORIGINAL_SITE_LABEL;
  return INTAKE_SITES.find((s) => s.id === sourceSite)?.label ?? sourceSite;
}
