import { ChevronDown } from "lucide-react";
import type { Faq } from "@/data/faqs";
import { inlineLinks } from "@/components/ui/InlineLinks";

/**
 * H2 #12 — homepage FAQ. A near-copy of components/sections/FAQSection.tsx,
 * kept as its own file rather than editing the shared component: that
 * component renders on ~360 pages, and this task is scoped to the homepage
 * only. The one difference is semantic — each question is wrapped in an H3
 * (Tailwind's preflight reset means this is visually identical to the
 * shared component's plain <summary> text).
 */
export function HomeFAQSection({ faqs, heading }: { faqs: Faq[]; heading: string }) {
  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="bg-muted py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-bold tracking-tight text-navy sm:text-3xl">{heading}</h2>

        <div className="mt-10 divide-y divide-border rounded-xl border border-border bg-white">
          {faqs.map((faq, i) => (
            <details key={i} className="group px-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-start [&::-webkit-details-marker]:hidden">
                <h3 className="font-semibold text-navy">{faq.question}</h3>
                <ChevronDown className="size-5 shrink-0 text-gold transition-transform group-open:rotate-180" />
              </summary>
              <p className="pb-4 text-sm leading-relaxed text-muted-foreground">{inlineLinks(faq.answer)}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
