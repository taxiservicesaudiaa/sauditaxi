const steps = [
  { n: "01", title: "Request Your Transfer", detail: "Share your pickup, destination, date, and passenger count on WhatsApp or through our quote form — no account needed." },
  { n: "02", title: "Receive Your Quote", detail: "We reply with a clear quotation and a vehicle recommendation, which you confirm before you travel." },
  { n: "03", title: "Confirm Your Booking", detail: "Approve the quote and your driver is scheduled for the agreed pickup time and location, with no prepayment required." },
  { n: "04", title: "Meet Your Driver", detail: "Your driver waits at the agreed pickup point and takes you directly to your destination." },
];

/** H2 #9 — Booking Process. A simple 4-step process on a subtle sand background, connected by a line. */
export function HomeBookingSteps() {
  return (
    <section className="bg-sand py-16 sm:py-24">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brass">How It Works</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            How to Book a Private Transfer
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft">
            A simple four-step process from first message to meeting your driver — no app, no account, and
            no prepayment required in advance.
          </p>
        </div>

        {/* Desktop: connected by a horizontal line running behind the step markers. */}
        <ol className="relative mt-14 hidden sm:grid sm:grid-cols-4 sm:gap-8">
          <div className="absolute left-0 right-0 top-[9px] hidden h-px bg-brass/30 sm:block" aria-hidden="true" />
          {steps.map((s) => (
            <li key={s.n} className="relative">
              <span className="relative z-10 flex size-[18px] items-center justify-center rounded-full border-2 border-brass bg-sand">
                <span className="size-2 rounded-full bg-brass" />
              </span>
              <p className="mt-4 text-xs font-semibold text-ink-muted">{s.n}</p>
              <p className="mt-1.5 font-semibold text-ink">{s.title}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{s.detail}</p>
            </li>
          ))}
        </ol>

        {/* Mobile: vertical timeline. */}
        <ol className="mt-10 space-y-6 sm:hidden">
          {steps.map((s, i) => (
            <li key={s.n} className="relative ps-8">
              {i !== steps.length - 1 && (
                <span className="absolute top-5 bottom-[-24px] start-[8px] w-px bg-brass/30" aria-hidden="true" />
              )}
              <span className="absolute start-0 top-1 flex size-[18px] items-center justify-center rounded-full border-2 border-brass bg-sand">
                <span className="size-2 rounded-full bg-brass" />
              </span>
              <p className="text-xs font-semibold text-ink-muted">{s.n}</p>
              <p className="mt-1 font-semibold text-ink">{s.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-ink-soft">{s.detail}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
