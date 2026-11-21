import {
  ShieldCheck,
  Clock,
  CreditCard,
  Headset,
  Car,
  MapPin,
} from "lucide-react";

const reasons = [
  {
    icon: CreditCard,
    title: "Fixed, transparent quotes",
    text: "Review and confirm your quotation before you travel, so there are no surprises.",
  },
  {
    icon: Headset,
    title: "24/7 WhatsApp support",
    text: "Book and get help any time of day in English and Arabic through WhatsApp.",
  },
  {
    icon: Clock,
    title: "On-time, flight-tracked",
    text: "We monitor your flight and adjust pickup automatically so you never wait.",
  },
  {
    icon: Car,
    title: "Clean, modern vehicles",
    text: "Well-maintained sedans, SUVs, vans, and minibuses for any group size.",
  },
  {
    icon: ShieldCheck,
    title: "Professional drivers",
    text: "Experienced, vetted drivers who know the cities, routes, and holy sites.",
  },
  {
    icon: MapPin,
    title: "Kingdom-wide coverage",
    text: "Airports, cities, intercity routes, borders, Umrah, Hajj, and Ziyarat.",
  },
];

export function WhyChooseUs({
  heading = "Why Book With Us",
  background = "muted",
}: {
  heading?: string;
  background?: "white" | "muted";
}) {
  return (
    <section className={background === "muted" ? "bg-muted py-16 sm:py-20" : "bg-white py-16 sm:py-20"}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-navy sm:text-3xl">
            {heading}
          </h2>
          <p className="mt-3 text-muted-foreground">
            Reliable private transfers built around comfort, safety, and clear pricing.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r) => {
            const Icon = r.icon;
            return (
              <div key={r.title} className="flex gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-navy text-gold">
                  <Icon className="size-5" />
                </span>
                <div>
                  <h3 className="font-semibold text-navy">{r.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{r.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
