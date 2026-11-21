import { CtaButtons } from "@/components/CtaButtons";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  whatsappMessage?: string;
  /** Passed straight through to CtaButtons — Arabic callers supply Arabic strings/hrefs. */
  whatsappLabel?: string;
  contactLabel?: string;
  contactHref?: string;
}

export function CTASection({
  title = "Ready to Book Your Saudi Arabia Taxi?",
  subtitle = "Send your pickup and drop-off details now and get a fast quotation on WhatsApp.",
  whatsappMessage,
  whatsappLabel,
  contactLabel,
  contactHref,
}: CTASectionProps) {
  return (
    <section className="bg-navy">
      <div className="mx-auto max-w-5xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
          {title}
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-white/80">{subtitle}</p>
        <div className="mt-8 flex justify-center">
          <CtaButtons
            whatsappMessage={whatsappMessage}
            whatsappLabel={whatsappLabel}
            contactLabel={contactLabel}
            contactHref={contactHref}
            onDark
          />
        </div>
      </div>
    </section>
  );
}
