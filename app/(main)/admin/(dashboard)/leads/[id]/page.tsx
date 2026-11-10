import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Receipt, FileSignature } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "@/components/admin/StatusBadge";
import { LeadStatusSelect } from "@/components/admin/LeadStatusSelect";
import { DeleteLeadButton } from "@/components/admin/DeleteLeadButton";
import { EmailClientForm } from "@/components/admin/EmailClientForm";
import { WhatsAppLeadButtons } from "@/components/admin/WhatsAppLeadButtons";
import { AdminNotice } from "@/components/admin/AdminNotice";
import { Panel } from "@/components/admin/Panel";
import { Field } from "@/components/admin/Field";
import { sourceSiteLabel } from "@/lib/lead-sources";
import { isSupabaseConfigured } from "@/lib/supabase";
import { getLead, type Lead } from "@/lib/leads";

export const dynamic = "force-dynamic";

export default async function LeadDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  if (!isSupabaseConfigured()) {
    return (
      <AdminNotice title="Supabase is not configured">
        Set <code>SUPABASE_URL</code> and <code>SUPABASE_SERVICE_ROLE_KEY</code> to view lead details.
      </AdminNotice>
    );
  }

  let lead: Lead | null = null;
  try {
    lead = await getLead(id);
  } catch (e) {
    return <AdminNotice title="Could not load lead">{e instanceof Error ? e.message : "Error"}</AdminNotice>;
  }
  if (!lead) notFound();

  const submitted = new Date(lead.createdAt).toLocaleString("en-GB");

  return (
    <div className="space-y-6">
      <Link href="/admin/leads" className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink-soft hover:text-brass">
        <ArrowLeft className="size-4" /> Back to leads
      </Link>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold text-ink">{lead.fullName || "Lead"}</h1>
          <p className="text-sm text-ink-muted">Submitted {submitted}</p>
        </div>
        <div className="flex items-center gap-3">
          <StatusBadge status={lead.status} />
          <LeadStatusSelect leadId={lead.id} status={lead.status} />
          <Button asChild variant="outline" size="sm">
            <Link href={`/admin/quotations/new?leadId=${lead.id}`}>
              <FileSignature className="size-4" /> Create Quotation
            </Link>
          </Button>
          <Button asChild variant="gold" size="sm">
            <Link href={`/admin/invoices/new?leadId=${lead.id}`}>
              <Receipt className="size-4" /> Create Invoice
            </Link>
          </Button>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Panel title="Client details">
          <dl className="grid grid-cols-2 gap-4">
            <Field label="Full name" value={lead.fullName} />
            <Field label="Phone / WhatsApp" value={lead.phone} />
            <Field label="Email" value={lead.email} />
            <Field label="Service" value={lead.serviceType} />
          </dl>
        </Panel>

        <Panel title="Trip details">
          <dl className="grid grid-cols-2 gap-4">
            <Field label="Pickup" value={lead.pickupLocation} />
            <Field label="Drop-off" value={lead.dropoffLocation} />
            <Field label="Date" value={lead.date} />
            <Field label="Time" value={lead.time} />
          </dl>
        </Panel>

        <Panel title="Booking details">
          <dl className="grid grid-cols-2 gap-4">
            <Field label="Passengers" value={lead.passengers} />
            <Field label="Luggage" value={lead.luggage} />
            <Field label="Vehicle type" value={lead.vehicleType} />
            <Field label="Flight number" value={lead.flightNumber} />
          </dl>
        </Panel>

        <Panel title="Source & message">
          <dl className="space-y-4">
            <Field label="Website" value={sourceSiteLabel(lead.sourceSite)} />
            <Field label="Source page" value={lead.sourcePage} />
            <Field label="Message" value={lead.message} />
          </dl>
        </Panel>
      </div>

      <Panel title="Contact the client">
        <div className="space-y-5">
          <WhatsAppLeadButtons lead={lead} />
          <div className="border-t border-hairline pt-5">
            <EmailClientForm leadId={lead.id} defaultEmail={lead.email} />
          </div>
        </div>
      </Panel>

      <div className="flex justify-end">
        <DeleteLeadButton leadId={lead.id} redirectTo="/admin/leads" />
      </div>
    </div>
  );
}
