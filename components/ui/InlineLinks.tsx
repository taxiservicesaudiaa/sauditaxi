import { Fragment } from "react";
import Link from "next/link";

/**
 * Renders a plain-text string that may contain simple anchor markup, e.g.
 *   "See our <a href='/routes/riyadh-to-hofuf'>Riyadh to Hofuf</a> page."
 * as text with real links — without enabling arbitrary HTML.
 *
 * Only `<a href="...">label</a>` (single or double quotes, no other
 * attributes needed) is recognised. Everything else is rendered as text, so
 * React escapes it. Accepted hrefs:
 *   - internal paths starting with "/" (but not "//") → next/link
 *   - http(s):// URLs → <a target="_blank" rel="noopener noreferrer">
 *   - mailto: / tel:
 * Any other href (javascript:, data:, protocol-relative, …) renders the label
 * as plain text. Tags inside the label are stripped.
 */

const ANCHOR = /<a\s+href\s*=\s*(["'])(.*?)\1[^>]*>([\s\S]*?)<\/a>/gi;

type Kind = "internal" | "external" | "contact" | "none";

function classify(href: string): Kind {
  const h = href.trim();
  if (h.startsWith("/") && !h.startsWith("//")) return "internal";
  if (/^https?:\/\//i.test(h)) return "external";
  if (/^(mailto|tel):/i.test(h)) return "contact";
  return "none";
}

const stripTags = (s: string) => s.replace(/<[^>]*>/g, "");

const DEFAULT_LINK = "font-semibold underline underline-offset-2 hover:text-brass";

/**
 * Function form: returns the original string untouched when it contains no
 * anchor, so pages without links render byte-identically to plain {text}.
 */
export function inlineLinks(text: string, linkClassName = DEFAULT_LINK): React.ReactNode {
  if (!text || !text.includes("<a")) return text;
  return <InlineLinks text={text} linkClassName={linkClassName} />;
}

export function InlineLinks({ text, linkClassName = DEFAULT_LINK }: { text: string; linkClassName?: string }) {
  if (!text || !text.includes("<a")) return <>{text}</>;
  const out: React.ReactNode[] = [];
  let last = 0;
  let i = 0;
  for (const m of text.matchAll(ANCHOR)) {
    const start = m.index ?? 0;
    if (start > last) out.push(<Fragment key={`t${i}`}>{text.slice(last, start)}</Fragment>);
    const href = m[2].trim();
    const label = stripTags(m[3]);
    const kind = classify(href);
    if (kind === "internal") {
      out.push(
        <Link key={`l${i}`} href={href} className={linkClassName}>
          {label}
        </Link>,
      );
    } else if (kind === "external") {
      out.push(
        <a key={`l${i}`} href={href} target="_blank" rel="noopener noreferrer" className={linkClassName}>
          {label}
        </a>,
      );
    } else if (kind === "contact") {
      out.push(
        <a key={`l${i}`} href={href} className={linkClassName}>
          {label}
        </a>,
      );
    } else {
      out.push(<Fragment key={`l${i}`}>{label}</Fragment>);
    }
    last = start + m[0].length;
    i++;
  }
  if (last < text.length) out.push(<Fragment key="tail">{text.slice(last)}</Fragment>);
  return <>{out}</>;
}
