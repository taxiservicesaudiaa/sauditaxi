/** Format an ISO date as e.g. "6 June 2026" for blog metadata. */
export function formatBlogDate(iso: string): string {
  try {
    // UTC so the browser (e.g. the client-filtered /blog list) shows the same
    // date as the server-rendered pages, whatever the visitor's timezone.
    return new Date(iso).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: "UTC",
    });
  } catch {
    return "";
  }
}
