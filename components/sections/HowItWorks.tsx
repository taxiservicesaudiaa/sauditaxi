import { MessageCircle, FileText, Car } from "lucide-react";

const icons = [MessageCircle, FileText, Car];

const defaultSteps = [
  {
    title: "Send your trip details",
    text: "Share pickup, drop-off, date, time, and passengers via WhatsApp or the quote form.",
  },
  {
    title: "Get a quotation",
    text: "We reply quickly with a clear quotation and the right vehicle for your group.",
  },
  {
    title: "Travel with a driver",
    text: "Your professional driver arrives on time and takes you door-to-door, stress-free.",
  },
];

/**
 * Stays a Server Component — Arabic callers pass `heading`/`subheading`/
 * `steps`/`stepLabel` in Arabic (see data/translations/ar.ts callers) instead
 * of this component detecting locale itself.
 */
export function HowItWorks({
  background = "white",
  heading = "How Booking Works",
  subheading = "Three simple steps from request to ride — no app, no account.",
  steps = defaultSteps,
  stepLabel = (n: number) => `Step ${n}`,
}: {
  background?: "white" | "muted";
  heading?: string;
  subheading?: string;
  steps?: { title: string; text: string }[];
  stepLabel?: (n: number) => string;
}) {
  return (
    <section className={background === "muted" ? "bg-muted py-16 sm:py-20" : "bg-white py-16 sm:py-20"}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-navy sm:text-3xl">
            {heading}
          </h2>
          <p className="mt-3 text-muted-foreground">{subheading}</p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {steps.map((step, i) => {
            const Icon = icons[i] ?? Car;
            return (
              <div key={step.title} className="relative text-center">
                <span className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-gold text-navy">
                  <Icon className="size-6" />
                </span>
                <span className="mt-3 inline-block text-sm font-bold text-gold">
                  {stepLabel(i + 1)}
                </span>
                <h3 className="mt-1 text-lg font-semibold text-navy">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{step.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
