import Image from "next/image";

/** Who We Are — split image/text, facts only (no invented history/numbers). */
export function AboutWhoWeAre() {
  return (
    <section className="bg-sand py-16 sm:py-24">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brass">Who We Are</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Private Travel, Built Around the Journey
            </h2>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-soft">
              <p>
                Saudi Private Transfers arranges private, pre-booked transportation for
                travellers moving around the Kingdom. Customers travel in their own vehicle
                rather than sharing a ride, with a driver, a route and a price agreed before
                the journey starts.
              </p>
              <p>
                The service is built around the journey itself: an airport arrival that
                needs coordinating with a flight, a hotel or city pickup, a long drive
                between Saudi cities, or a cross-border trip into the GCC. There is no app
                to install and no account to create — trip details are shared through
                WhatsApp or the quote form, and confirmed with a quotation before travel.
              </p>
              <p>
                Vehicles are matched to the trip rather than offered as a single default —
                a sedan for a solo traveller, an SUV or van for a family or group with
                luggage, sized to what the journey actually needs.
              </p>
            </div>
          </div>
          <div className="relative h-72 w-full overflow-hidden rounded-2xl sm:h-96">
            <Image
              src="/images/journey/kuwait-towers.jpg"
              alt="A long-distance regional road journey"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
