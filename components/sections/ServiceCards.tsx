import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { featuredServices, services } from "@/data/services";

export function ServiceCards({
  heading = "Our Saudi Arabia Transfer Services",
  subheading = "Private transfers for every kind of journey across the Kingdom, quoted before you travel.",
  only,
}: {
  heading?: string;
  subheading?: string;
  /** Restrict to specific service slugs, in the given order (e.g. curated homepage picks). */
  only?: string[];
}) {
  const list = only
    ? (only.map((s) => services.find((svc) => svc.slug === s)).filter(Boolean) as typeof services)
    : featuredServices;
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-navy sm:text-3xl">
            {heading}
          </h2>
          <p className="mt-3 text-muted-foreground">{subheading}</p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((service) => {
            const Icon = service.icon;
            return (
              <Link key={service.slug} href={service.href} className="group">
                <Card className="h-full p-6 transition-all hover:-translate-y-1 hover:border-gold hover:shadow-md">
                  <span className="flex size-12 items-center justify-center rounded-xl bg-navy text-gold transition-colors group-hover:bg-gold group-hover:text-navy">
                    <Icon className="size-6" />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-navy">
                    {service.name}
                  </h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">
                    {service.tagline}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-navy group-hover:text-gold">
                    Learn more
                    <ArrowRight className="size-4 rtl:rotate-180 transition-transform ltr:group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                  </span>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
