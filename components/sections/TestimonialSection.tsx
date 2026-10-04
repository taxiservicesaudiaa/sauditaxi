import { Star, Quote } from "lucide-react";
import { Card } from "@/components/ui/card";
import { testimonials, aggregateRating } from "@/data/testimonials";

export function TestimonialSection({
  heading = "What Travellers Say",
  subheading = "Trusted by tourists, pilgrims, families, and business travellers across Saudi Arabia.",
  limit = 3,
}: {
  heading?: string;
  subheading?: string;
  limit?: number;
}) {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-navy sm:text-3xl">
            {heading}
          </h2>
          <p className="mt-3 text-muted-foreground">
            {subheading}
          </p>
          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-2">
            <span className="flex gap-0.5 text-gold">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-current" />
              ))}
            </span>
            <span className="text-sm font-semibold text-navy">
              {aggregateRating.ratingValue.toFixed(1)}/5
            </span>
            <span className="text-sm text-muted-foreground">
              average from our travellers
            </span>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.slice(0, limit).map((t) => (
            <Card key={t.name} className="relative p-6">
              <Quote className="absolute right-5 top-5 size-8 text-muted" />
              <div className="flex gap-0.5 text-gold">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-navy">“{t.text}”</p>
              <div className="mt-5">
                <p className="text-sm font-semibold text-navy">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.trip}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
