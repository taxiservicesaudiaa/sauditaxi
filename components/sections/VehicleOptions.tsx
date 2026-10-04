import { Users, Luggage, Car } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { vehicles } from "@/data/vehicles";

export function VehicleOptions({
  heading = "Choose Your Vehicle",
  subheading = "From economy sedans to group minibuses — pick what fits your party and luggage.",
  background = "white",
  lang = "en",
}: {
  heading?: string;
  subheading?: string;
  background?: "white" | "muted";
  /** Arabic callers pass lang="ar" (alongside their own Arabic heading/subheading,
   *  the existing pattern) to render each vehicle's Arabic name/description/
   *  passengers/luggage fields from data/vehicles.ts instead of the English ones. */
  lang?: "en" | "ar";
}) {
  return (
    <section className={background === "muted" ? "bg-muted py-16 sm:py-20" : "bg-white py-16 sm:py-20"}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-navy sm:text-3xl">{heading}</h2>
          <p className="mt-3 text-muted-foreground">{subheading}</p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {vehicles.map((v, i) => (
            <Reveal key={v.id} delay={(i % 3) * 80} className="h-full [perspective:1000px]">
              <article className="tilt flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
                {/* Premium visual header (stylised stand-in for vehicle photography) */}
                <div className="relative flex h-32 items-center justify-center overflow-hidden bg-gradient-to-br from-navy to-navy-muted">
                  <div
                    className="pointer-events-none absolute -right-6 -top-8 size-32 rounded-full bg-gold/20 blur-2xl"
                    aria-hidden="true"
                  />
                  <Car className="size-14 text-gold drop-shadow" aria-hidden="true" />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-semibold text-navy">{lang === "ar" ? v.nameAr : v.name}</h3>
                  <p className="mt-1 text-xs font-medium text-gold">{v.examples}</p>
                  <p className="mt-3 flex-1 text-sm text-muted-foreground">
                    {lang === "ar" ? v.descriptionAr : v.description}
                  </p>
                  <div className="mt-5 flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1.5 text-sm font-medium text-navy">
                      <Users className="size-4 text-gold" /> {lang === "ar" ? v.passengersAr : v.passengers}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1.5 text-sm font-medium text-navy">
                      <Luggage className="size-4 text-gold" /> {lang === "ar" ? v.luggageAr : v.luggage}
                    </span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
