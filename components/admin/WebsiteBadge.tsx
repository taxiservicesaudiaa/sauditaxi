import { sourceSiteLabel } from "@/lib/lead-sources";
import { cn } from "@/lib/utils";

/**
 * Which website a lead came from. Legacy and original-site leads have no
 * `sourceSite` and show "Saudi Private Transfers"; leads from the
 * KSA Rehla Transfers website get a distinct blue badge so the
 * two similar brand names cannot be confused at a glance.
 */
export function WebsiteBadge({ sourceSite, className }: { sourceSite?: string | null; className?: string }) {
  const isOriginal = !sourceSite;
  return (
    <span
      className={cn(
        "inline-flex items-center whitespace-nowrap rounded-full px-2.5 py-0.5 text-xs font-semibold ring-1 ring-inset",
        // Blue, not green: green already means "Confirmed" in StatusBadge.
        isOriginal ? "bg-sand-soft text-ink-soft ring-sand-soft" : "bg-sky-100 text-sky-800 ring-sky-200",
        className
      )}
      title={isOriginal ? "Original website (Saudi Private Transfers)" : `Website: ${sourceSiteLabel(sourceSite)}`}
    >
      {sourceSiteLabel(sourceSite)}
    </span>
  );
}
