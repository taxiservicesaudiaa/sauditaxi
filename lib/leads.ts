import { getSupabaseAdmin } from "@/lib/supabase";

export const LEAD_STATUSES = [
  "New",
  "Contacted",
  "Quoted",
  "Confirmed",
  "Cancelled",
  "Completed",
] as const;

export type LeadStatus = (typeof LEAD_STATUSES)[number];

export interface Lead {
  id: string;
  fullName: string | null;
  email: string | null;
  phone: string | null;
  pickupLocation: string | null;
  dropoffLocation: string | null;
  date: string | null;
  time: string | null;
  passengers: string | null;
  luggage: string | null;
  vehicleType: string | null;
  flightNumber: string | null;
  message: string | null;
  sourcePage: string | null;
  serviceType: string | null;
  firstLandingPage?: string | null;
  firstReferrer?: string | null;
  firstUtmSource?: string | null;
  firstUtmMedium?: string | null;
  firstUtmCampaign?: string | null;
  landingPage?: string | null;
  referrer?: string | null;
  utmSource?: string | null;
  utmMedium?: string | null;
  utmCampaign?: string | null;
  gclid?: string | null;
  searchSource?: string | null;
  /**
   * Which website sent the lead (`public.leads.source_site`). NULL — every
   * lead from the original site, including all legacy rows — means Saudi
   * Private Transfers. Set only by the authenticated `/api/leads/intake`
   * endpoint; see `lib/lead-sources.ts`.
   */
  sourceSite?: string | null;
  status: LeadStatus;
  createdAt: string;
  updatedAt: string;
}

/** Fields accepted when creating a lead (camelCase, from the public forms). */
export type NewLeadInput = Partial<
  Omit<Lead, "id" | "status" | "createdAt" | "updatedAt" | "sourceSite">
>;

type LeadRow = {
  id: string;
  full_name: string | null;
  email: string | null;
  phone: string | null;
  pickup_location: string | null;
  dropoff_location: string | null;
  date: string | null;
  time: string | null;
  passengers: string | null;
  luggage: string | null;
  vehicle_type: string | null;
  flight_number: string | null;
  message: string | null;
  source_page: string | null;
  service_type: string | null;
  first_landing_page?: string | null;
  first_referrer?: string | null;
  first_utm_source?: string | null;
  first_utm_medium?: string | null;
  first_utm_campaign?: string | null;
  landing_page?: string | null;
  referrer?: string | null;
  utm_source?: string | null;
  utm_medium?: string | null;
  utm_campaign?: string | null;
  gclid?: string | null;
  search_source?: string | null;
  source_site?: string | null;
  status: string;
  created_at: string;
  updated_at: string;
};

const TABLE = "leads";

function rowToLead(row: LeadRow): Lead {
  return {
    id: row.id,
    fullName: row.full_name,
    email: row.email,
    phone: row.phone,
    pickupLocation: row.pickup_location,
    dropoffLocation: row.dropoff_location,
    date: row.date,
    time: row.time,
    passengers: row.passengers,
    luggage: row.luggage,
    vehicleType: row.vehicle_type,
    flightNumber: row.flight_number,
    message: row.message,
    sourcePage: row.source_page,
    serviceType: row.service_type,
    firstLandingPage: row.first_landing_page ?? null,
    firstReferrer: row.first_referrer ?? null,
    firstUtmSource: row.first_utm_source ?? null,
    firstUtmMedium: row.first_utm_medium ?? null,
    firstUtmCampaign: row.first_utm_campaign ?? null,
    landingPage: row.landing_page ?? null,
    referrer: row.referrer ?? null,
    utmSource: row.utm_source ?? null,
    utmMedium: row.utm_medium ?? null,
    utmCampaign: row.utm_campaign ?? null,
    gclid: row.gclid ?? null,
    searchSource: row.search_source ?? null,
    sourceSite: row.source_site ?? null,
    status: (LEAD_STATUSES as readonly string[]).includes(row.status)
      ? (row.status as LeadStatus)
      : "New",
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}

function inputToRow(input: NewLeadInput): Partial<LeadRow> {
  return {
    full_name: input.fullName ?? null,
    email: input.email ?? null,
    phone: input.phone ?? null,
    pickup_location: input.pickupLocation ?? null,
    dropoff_location: input.dropoffLocation ?? null,
    date: input.date ?? null,
    time: input.time ?? null,
    passengers: input.passengers ?? null,
    luggage: input.luggage ?? null,
    vehicle_type: input.vehicleType ?? null,
    flight_number: input.flightNumber ?? null,
    message: input.message ?? null,
    source_page: input.sourcePage ?? null,
    service_type: input.serviceType ?? null,
    first_landing_page: input.firstLandingPage ?? null,
    first_referrer: input.firstReferrer ?? null,
    first_utm_source: input.firstUtmSource ?? null,
    first_utm_medium: input.firstUtmMedium ?? null,
    first_utm_campaign: input.firstUtmCampaign ?? null,
    landing_page: input.landingPage ?? null,
    referrer: input.referrer ?? null,
    utm_source: input.utmSource ?? null,
    utm_medium: input.utmMedium ?? null,
    utm_campaign: input.utmCampaign ?? null,
    gclid: input.gclid ?? null,
    search_source: input.searchSource ?? null,
  };
}

export async function createLead(
  input: NewLeadInput,
  options: { sourceSite?: string } = {}
): Promise<Lead> {
  const supabase = getSupabaseAdmin();
  // `source_site` is only sent when a trusted caller supplies it, so the
  // original site's insert is byte-for-byte what it was before the column
  // existed (and keeps working even if the migration has not run yet).
  const row = options.sourceSite
    ? { ...inputToRow(input), source_site: options.sourceSite }
    : inputToRow(input);
  const { data, error } = await supabase
    .from(TABLE)
    .insert(row)
    .select("*")
    .single();
  if (error) throw new Error(error.message);
  return rowToLead(data as LeadRow);
}

export async function listLeads(status?: LeadStatus): Promise<Lead[]> {
  const supabase = getSupabaseAdmin();
  let query = supabase.from(TABLE).select("*").order("created_at", { ascending: false });
  if (status) query = query.eq("status", status);
  const { data, error } = await query;
  if (error) throw new Error(error.message);
  return (data as LeadRow[]).map(rowToLead);
}

export async function getLead(id: string): Promise<Lead | null> {
  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase.from(TABLE).select("*").eq("id", id).maybeSingle();
  if (error) throw new Error(error.message);
  return data ? rowToLead(data as LeadRow) : null;
}

export async function updateLeadStatus(id: string, status: LeadStatus): Promise<Lead> {
  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase
    .from(TABLE)
    .update({ status })
    .eq("id", id)
    .select("*")
    .single();
  if (error) throw new Error(error.message);
  return rowToLead(data as LeadRow);
}

export async function deleteLead(id: string): Promise<void> {
  const supabase = getSupabaseAdmin();
  const { error } = await supabase.from(TABLE).delete().eq("id", id);
  if (error) throw new Error(error.message);
}

export interface LeadStats {
  total: number;
  byStatus: Record<LeadStatus, number>;
  today: number;
}

export async function getLeadStats(): Promise<LeadStats> {
  const leads = await listLeads();
  const startOfToday = new Date();
  startOfToday.setHours(0, 0, 0, 0);

  const byStatus = LEAD_STATUSES.reduce(
    (acc, s) => ({ ...acc, [s]: 0 }),
    {} as Record<LeadStatus, number>
  );
  let today = 0;
  for (const lead of leads) {
    byStatus[lead.status] += 1;
    if (new Date(lead.createdAt) >= startOfToday) today += 1;
  }
  return { total: leads.length, byStatus, today };
}

export async function logEmail(input: {
  leadId?: string;
  subject: string;
  message: string;
  sentTo: string;
}): Promise<void> {
  const supabase = getSupabaseAdmin();
  const { error } = await supabase.from("email_logs").insert({
    lead_id: input.leadId ?? null,
    subject: input.subject,
    message: input.message,
    sent_to: input.sentTo,
  });
  if (error) throw new Error(error.message);
}
