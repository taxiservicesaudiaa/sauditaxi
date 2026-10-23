import Link from "next/link";

/** Dated operational notice (e.g. airport disruption) shown under a route hero. */
export interface RouteStatusNoticeContent {
  heading: string;
  paragraphs: string[];
  links?: { label: string; href: string }[];
}

export function RouteStatusNotice({ notice }: { notice: RouteStatusNoticeContent }) {
  return (
    <section className="border-b border-brass/30 bg-brass/10 py-8 sm:py-10" aria-labelledby="route-status-notice">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 id="route-status-notice" className="text-lg font-bold tracking-tight text-ink sm:text-xl">
            {notice.heading}
          </h2>
          {notice.paragraphs.map((p, i) => (
            <p key={i} className="mt-3 text-[15px] leading-relaxed text-ink-soft">
              {p}
            </p>
          ))}
          {notice.links && notice.links.length > 0 && (
            <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold">
              {notice.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-ink underline decoration-brass underline-offset-4 hover:text-brass">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
