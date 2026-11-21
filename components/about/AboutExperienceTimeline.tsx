const steps = [
  { n: "01", title: "Plan", detail: "Share your pickup, destination, date, time and passenger details with us." },
  { n: "02", title: "Arrange", detail: "We review the journey and come back with the right vehicle and a quotation." },
  { n: "03", title: "Confirm", detail: "You confirm the details, and your transfer is scheduled for the agreed time." },
  { n: "04", title: "Travel", detail: "Your driver meets you at the agreed point and takes you directly to your destination." },
];

/** The customer experience, from the customer's own perspective — connected steps. */
export function AboutExperienceTimeline() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brass">The Customer Experience</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            From request to journey
          </h2>
        </div>

        <ol className="relative mt-14 hidden sm:grid sm:grid-cols-4 sm:gap-8">
          <div className="absolute left-0 right-0 top-[9px] hidden h-px bg-brass/30 sm:block" aria-hidden="true" />
          {steps.map((s) => (
            <li key={s.n} className="relative">
              <span className="relative z-10 flex size-[18px] items-center justify-center rounded-full border-2 border-brass bg-white">
                <span className="size-2 rounded-full bg-brass" />
              </span>
              <p className="mt-4 text-xs font-semibold text-ink-muted">{s.n}</p>
              <p className="mt-1.5 font-semibold text-ink">{s.title}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{s.detail}</p>
            </li>
          ))}
        </ol>

        <ol className="mt-10 space-y-6 sm:hidden">
          {steps.map((s, i) => (
            <li key={s.n} className="relative ps-8">
              {i !== steps.length - 1 && (
                <span className="absolute top-5 bottom-[-24px] start-[8px] w-px bg-brass/30" aria-hidden="true" />
              )}
              <span className="absolute start-0 top-1 flex size-[18px] items-center justify-center rounded-full border-2 border-brass bg-white">
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
