import { ChevronDown } from "lucide-react";
import type { Faq } from "@/data/faqs";
import { inlineLinks } from "@/components/ui/InlineLinks";

/**
 * FAQ accordion using native <details>/<summary> — accessible, no client JS,
 * and the content is in the static HTML for SEO. Pair with faqSchema() for
 * FAQPage rich results. Stays a Server Component: Arabic callers just pass
 * `heading` in Arabic (see data/translations/ar.ts callers) rather than this
 * component detecting locale itself, so the ~360 English pages that render
 * it never pay for client-side hydration they don't need.
 */
export function FAQSection({
  faqs,
  heading = "Frequently Asked Questions",
  background = "white",
}: {
  faqs: Faq[];
  heading?: string;
  background?: "white" | "muted";
}) {
  if (!faqs || faqs.length === 0) return null;

  return (
    <section className={background === "muted" ? "bg-muted py-16 sm:py-20" : "bg-white py-16 sm:py-20"}>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-bold tracking-tight text-navy sm:text-3xl">
          {heading}
        </h2>

        <div className="mt-10 divide-y divide-border rounded-xl border border-border bg-white">
          {faqs.map((faq, i) => (
            <details key={i} className="group px-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-start font-semibold text-navy [&::-webkit-details-marker]:hidden">
                {faq.question}
                <ChevronDown className="size-5 shrink-0 text-gold transition-transform group-open:rotate-180" />
              </summary>
              <p className="pb-4 text-sm leading-relaxed text-muted-foreground">
                {inlineLinks(faq.answer)}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
