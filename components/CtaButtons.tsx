import Link from "next/link";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CtaButtonsProps {
  /** Retained for backward compatibility — no longer used (no WhatsApp CTA). */
  whatsappMessage?: string;
  /** Label for the primary "get a quote" button. */
  whatsappLabel?: string;
  /** Href for the primary button — Arabic callers pass their own. */
  quoteHref?: string;
  /** Show a secondary "Contact Us" link. */
  showQuoteLink?: boolean;
  /** Label + href for the secondary link — Arabic callers pass their own. */
  contactLabel?: string;
  contactHref?: string;
  className?: string;
  /** Use light styling for dark backgrounds. */
  onDark?: boolean;
}

/**
 * Stays a Server Component — Arabic pages pass Arabic strings/hrefs directly
 * (see data/translations/ar.ts callers) instead of this component detecting
 * locale itself, so the ~360 English pages that render it never pay for
 * client-side hydration they don't need.
 */
export function CtaButtons({
  whatsappLabel = "Get a Quote",
  quoteHref = "/get-quote",
  showQuoteLink = true,
  contactLabel = "Contact Us",
  contactHref = "/contact",
  className,
  onDark = false,
}: CtaButtonsProps) {
  return (
    <div className={cn("flex flex-wrap gap-3", className)}>
      <Button asChild variant="gold" size="lg">
        <Link href={quoteHref}>
          <Send className="size-5" />
          {whatsappLabel}
        </Link>
      </Button>
      {showQuoteLink && (
        <Button
          asChild
          variant="outline"
          size="lg"
          className={onDark ? "border-white/40 text-white hover:bg-white hover:text-navy" : ""}
        >
          <Link href={contactHref}>{contactLabel}</Link>
        </Button>
      )}
    </div>
  );
}
