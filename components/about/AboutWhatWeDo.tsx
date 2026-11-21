import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Airport Transfers",
    description:
      "Private transportation between airports, hotels and destinations, with pickup timing built around your actual flight rather than a fixed slot.",
    href: "/airport-transfers",
    linkLabel: "Airport transfers",
    image: "/images/heroes/airport.webp",
    alt: "An airport terminal in Saudi Arabia",
  },
  {
    title: "City-to-City Transfers",
    description:
      "Direct, private journeys between Saudi cities — no shared vehicle, no fixed timetable, and a quotation you confirm before you travel.",
    href: "/intercity-transfers",
    linkLabel: "City-to-city transfers",
    image: "/images/heroes/city.webp",
    alt: "A Saudi city skyline",
  },
  {
    title: "Cross-Border Transfers",
    description:
      "Selected road journeys between Saudi Arabia and neighbouring GCC destinations, handled by drivers who plan around the crossing.",
    href: "/border-transfers",
    linkLabel: "Cross-border transfers",
    image: "/images/heroes/border.webp",
    alt: "A Saudi border crossing",
  },
  {
    title: "Chauffeur / Private Travel",
    description:
      "Private vehicle service for travellers who want direct, comfortable transportation — for business, leisure, or a longer road journey.",
    href: "/services",
    linkLabel: "All services",
    image: "/images/heroes/taif.webp",
    alt: "A private road journey in Saudi Arabia",
  },
];

/** Editorial, alternating image/text service blocks — not four identical cards. */
export function AboutWhatWeDo() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brass">What We Do</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Private transportation for the journeys that matter
          </h2>
        </div>

        <div className="mt-12 space-y-10">
          {services.map(({ title, description, href, linkLabel, image, alt }, i) => (
            <div
              key={title}
              className="grid items-center gap-6 overflow-hidden rounded-2xl border border-hairline sm:grid-cols-2 sm:gap-0"
            >
              <div className={cn("relative h-56 w-full sm:h-72", i % 2 === 1 && "sm:order-2")}>
                <Image src={image} alt={alt} fill sizes="(min-width: 640px) 50vw, 100vw" className="object-cover" />
              </div>
              <div className={cn("p-6 sm:p-9", i % 2 === 1 && "sm:order-1")}>
                <h3 className="text-xl font-semibold text-ink sm:text-2xl">{title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{description}</p>
                <Link
                  href={href}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-midnight hover:text-brass"
                >
                  {linkLabel}
                  <ArrowRight className="size-3.5 rtl:rotate-180" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
