import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import type { RouteBlock } from "@/data/routes";
import { CtaButtons } from "@/components/CtaButtons";
import { inlineLinks } from "@/components/ui/InlineLinks";

/**
 * Presentational renderers for `Route.customLayout` blocks — a small,
 * reusable component vocabulary that individual route pages compose in
 * whatever order and mix suits that route's story, instead of every route
 * page rendering the same fixed section stack. See data/routes.ts for the
 * RouteBlock union and app/(main)/routes/[slug]/page.tsx for the loop that
 * calls this. Only routes with a `customLayout` ever reach this file — every
 * other route page is untouched.
 *
 * Currently used exclusively by border-category routes, which are out of
 * scope for the Phase 3 domestic city-to-city redesign — kept on the
 * original design tokens so that redesign never touches this file. The new
 * brand version for domestic routes lives in RouteJourneyBlocks.tsx.
 */

function Prose({ heading, paragraphs }: Extract<RouteBlock, { type: "prose" }>) {
  return (
    <div>
      <h2 className="text-xl font-bold text-navy sm:text-2xl">{heading}</h2>
      <div className="mt-3 space-y-4 text-[15px] leading-relaxed text-muted-foreground [&_a]:font-medium [&_a]:text-gold [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-navy">
        {paragraphs.map((p, i) => (
          <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
        ))}
      </div>
    </div>
  );
}

function MapBlock({ heading, note, origin, destination, size, from, to }: Extract<RouteBlock, { type: "map" }> & { from: string; to: string }) {
  const large = size === "large";
  return (
    <div>
      <h2 className="text-xl font-bold text-navy sm:text-2xl">{heading}</h2>
      <div className={`mt-4 overflow-hidden rounded-xl border border-border shadow-sm ${large ? "" : "max-w-2xl"}`}>
        <div className={`relative w-full ${large ? "aspect-[4/3] sm:aspect-[16/8]" : "aspect-[4/3] sm:aspect-[16/9]"}`}>
          <iframe
            title={`${from} to ${to} route map`}
            src={`https://maps.google.com/maps?saddr=${encodeURIComponent(origin)}&daddr=${encodeURIComponent(destination)}&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 size-full border-0"
          />
        </div>
      </div>
      <p className="mt-2 text-xs text-muted-foreground">{note}</p>
    </div>
  );
}

function Facts({ heading, layout, items }: Extract<RouteBlock, { type: "facts" }>) {
  if (layout === "snapshot") {
    return (
      <div>
        <h2 className="text-xl font-bold text-navy sm:text-2xl">{heading}</h2>
        <div className="mt-4 flex flex-wrap divide-x divide-border overflow-hidden rounded-xl border border-border rtl:divide-x-reverse">
          {items.map((item) => (
            <div key={item.label} className="min-w-[9rem] flex-1 px-4 py-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{item.label}</p>
              <p className={item.emphasis ? "mt-1.5 text-lg font-bold text-gold" : "mt-1.5 text-base font-semibold text-navy"}>
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return (
    <div>
      <h2 className="text-xl font-bold text-navy sm:text-2xl">{heading}</h2>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <div
            key={item.label}
            className={
              item.emphasis
                ? "rounded-lg border border-gold/40 bg-gold/[0.06] p-4"
                : "rounded-lg border border-border bg-muted/40 p-4"
            }
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{item.label}</p>
            <p className="mt-1 text-sm font-semibold text-navy">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Timeline({ heading, orientation, steps, note }: Extract<RouteBlock, { type: "timeline" }>) {
  if (orientation === "horizontal") {
    return (
      <div>
        <h2 className="text-xl font-bold text-navy sm:text-2xl">{heading}</h2>
        <ol className="mt-5 flex min-w-max items-stretch gap-2 overflow-x-auto pb-1 sm:min-w-0 sm:flex-wrap">
          {steps.map((step, i) => (
            <li key={step.label} className="flex items-center gap-2">
              <div className="w-40 rounded-lg border border-gold/30 bg-gold/5 px-3 py-2.5 sm:w-44">
                <p className="text-xs font-semibold text-navy">{step.label}</p>
                {step.detail && <p className="mt-1 text-[11px] leading-snug text-muted-foreground">{step.detail}</p>}
              </div>
              {i < steps.length - 1 && (
                <ArrowRight className="size-4 shrink-0 text-gold rtl:rotate-180" aria-hidden="true" />
              )}
            </li>
          ))}
        </ol>
        {note && <p className="mt-3 text-sm text-muted-foreground">{note}</p>}
      </div>
    );
  }
  return (
    <div>
      <h2 className="text-xl font-bold text-navy sm:text-2xl">{heading}</h2>
      <ol className="mt-6 space-y-0">
        {steps.map((step, i) => (
          <li key={step.label} className="relative ps-10 pb-7 last:pb-0">
            {i !== steps.length - 1 && (
              <span className="absolute top-8 bottom-0 start-[15px] w-px bg-border" aria-hidden="true" />
            )}
            <span className="absolute start-0 top-0 flex size-8 items-center justify-center rounded-full bg-navy text-sm font-bold text-gold">
              {i + 1}
            </span>
            <p className="font-semibold text-navy">{step.label}</p>
            {step.detail && <p className="mt-1 text-sm text-muted-foreground">{step.detail}</p>}
          </li>
        ))}
      </ol>
      {note && <p className="mt-2 text-sm text-muted-foreground">{note}</p>}
    </div>
  );
}

function Comparison({ heading, intro, columns, rows }: Extract<RouteBlock, { type: "comparison" }>) {
  return (
    <div>
      <h2 className="text-xl font-bold text-navy sm:text-2xl">{heading}</h2>
      {intro && <p className="mt-2 text-[15px] text-muted-foreground">{intro}</p>}
      <div className="mt-4 overflow-x-auto rounded-xl border border-border">
        <table className="w-full min-w-[480px] border-collapse text-sm">
          <thead>
            <tr className="bg-navy text-white">
              <th className="px-4 py-3 text-start font-semibold">Consideration</th>
              <th className="px-4 py-3 text-start font-semibold">{columns[0]}</th>
              <th className="px-4 py-3 text-start font-semibold">{columns[1]}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={row.criterion} className={i % 2 === 0 ? "bg-white" : "bg-muted/40"}>
                <td className="px-4 py-3 font-medium text-navy">{row.criterion}</td>
                <td className="px-4 py-3 text-muted-foreground">{row.a}</td>
                <td className="px-4 py-3 text-muted-foreground">{row.b}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Scenarios({ heading, items }: Extract<RouteBlock, { type: "scenarios" }>) {
  return (
    <div>
      <h2 className="text-xl font-bold text-navy sm:text-2xl">{heading}</h2>
      <dl className="mt-5 space-y-4">
        {items.map((item) => (
          <div key={item.title} className="border-s-4 border-gold/40 ps-4">
            <dt className="font-semibold text-navy">{item.title}</dt>
            <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.description}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

function Checklist({ heading, intro, items }: Extract<RouteBlock, { type: "checklist" }>) {
  return (
    <div>
      <h2 className="text-xl font-bold text-navy sm:text-2xl">{heading}</h2>
      {intro && <p className="mt-2 text-[15px] text-muted-foreground">{intro}</p>}
      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-navy">
            <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-gold" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function BorderPanel({ heading, paragraphs }: Extract<RouteBlock, { type: "borderPanel" }>) {
  return (
    <div className="rounded-2xl border border-navy/15 bg-navy/[0.03] p-6 sm:p-8">
      <h2 className="text-xl font-bold text-navy sm:text-2xl">{heading}</h2>
      <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-muted-foreground">
        {paragraphs.map((p, i) => (
          <p key={i}>{inlineLinks(p)}</p>
        ))}
      </div>
    </div>
  );
}

function CtaBanner({ heading, body, whatsappMessage }: Extract<RouteBlock, { type: "ctaBanner" }>) {
  return (
    <div className="rounded-2xl border border-gold/30 bg-gold/[0.06] p-6 sm:p-7">
      <div className="flex items-start gap-3">
        <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-navy text-gold">
          <MessageCircle className="size-4" />
        </span>
        <div>
          <h2 className="text-lg font-bold text-navy">{heading}</h2>
          <p className="mt-1.5 text-sm text-muted-foreground">{body}</p>
        </div>
      </div>
      <div className="mt-4">
        <CtaButtons whatsappMessage={whatsappMessage} />
      </div>
    </div>
  );
}

export function RouteBlockRenderer({ block, from, to }: { block: RouteBlock; from: string; to: string }) {
  switch (block.type) {
    case "prose":
      return <Prose {...block} />;
    case "map":
      return <MapBlock {...block} from={from} to={to} />;
    case "facts":
      return <Facts {...block} />;
    case "timeline":
      return <Timeline {...block} />;
    case "comparison":
      return <Comparison {...block} />;
    case "scenarios":
      return <Scenarios {...block} />;
    case "checklist":
      return <Checklist {...block} />;
    case "borderPanel":
      return <BorderPanel {...block} />;
    case "ctaBanner":
      return <CtaBanner {...block} />;
    default:
      return null;
  }
}

export function RouteCustomBody({ blocks, from, to }: { blocks: RouteBlock[]; from: string; to: string }) {
  return (
    <div className="space-y-10">
      {blocks.map((block, i) => (
        <div key={`${block.type}-${block.heading ?? i}`} className={i > 0 ? "border-t border-border pt-10" : ""}>
          <RouteBlockRenderer block={block} from={from} to={to} />
        </div>
      ))}
    </div>
  );
}
