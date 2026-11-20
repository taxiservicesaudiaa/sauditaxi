# Optimize your crawl budget


This guide describes how to optimize Google's crawling of very large and frequently updated sites.


If your site doesn't have a large number of pages that change rapidly, or if your pages seem
to be crawled the same day that they are published, you don't need to read this guide. For Google
Search specifically,
[keeping your sitemap up to date](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap) and
[checking the Page Indexing report](https://support.google.com/webmasters/answer/7440203)
regularly is adequate.

## Who this guide is for


While the recommendations in this guide are generally good practices, this is an advanced guide
intended primarily for the following types of sites:

- Large sites (1 million+ unique pages) with content that changes moderately often (once a week)
- Medium or larger sites (10,000+ unique pages) with very rapidly changing content (daily)
- Sites with a large portion of their total URLs classified by Search Console as [Discovered - currently not indexed](https://support.google.com/webmasters/answer/7440203#information-status)

> [!NOTE]
> The numbers given here are a **rough estimate** to help you classify your site. These are not exact thresholds.

## General theory of crawling

[Video](https://www.youtube.com/watch?v=am4g0hXAA8Q)


The web is a nearly infinite space, exceeding Google's ability to explore every publicly
accessible URL. As a result, there are limits to how much time and resources Google can devote to
crawling any single site. The allocation of these resources is commonly called a site's
*crawl budget*. In this context, Google's crawling infrastructure defines a *site* as a
unique hostname. For example, `https://www.example.com/` and
`https://code.example.com/` are treated as separate sites and have separate crawl
budgets. A site's crawl budget is determined by two main elements: *crawl capacity limit* and
*crawl demand*.

> [!NOTE]
> For Google Search, not every page that is crawled will necessarily be indexed. After crawling, each page must be evaluated, [consolidated](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls), and assessed to determine its suitability for the index.

### Crawl capacity limit


Google wants to crawl your site without overwhelming your servers. To prevent this, Google's
crawlers calculate a *crawl capacity limit* (also known as
[*hostload*](https://support.google.com/webmasters/answer/9012289#site-wide-error-inspection&zippy=%2Csite-wide-availability-issues)).
This limits the total amount of time your server spends holding connections open for Google,
factoring in both the number of parallel connections and their duration. This ensures Google
can cover all your important content without overloading your servers.


Every site starts with the same default, conservative crawl capacity limit. If there is demand to
crawl more and the site remains healthy, Google's systems will automatically adjust this limit
over time.

The crawl capacity limit can go up and down based on a few factors:

- **Crawl health:** If the site responds consistently and its response times (including latency and Time-to-First Byte) remain stable or improve, the limit goes up, meaning more connections can be used to crawl. If the site slows down (latency increases or response times become longer), or responds with server errors (`5xx HTTP` status codes) or rate-limiting signals (such as `HTTP 429`), the limit goes down and Google crawls less.
- **Google's crawling limits:** While Google's resources are extensive, they are finite, and we must prioritize resource allocation across the web.

### Crawl demand


Each crawler has its own "demand" when it comes to crawling the web, determined by factors
unique to that crawler. For example, AdsBot generally has a higher demand when a site is running
dynamic ad targets, and Google Shopping has a higher demand for products you have in your merchant
feeds.


For [Googlebot](https://googlebot.com/), demand varies based on
a site's size, update frequency, page quality, and relevance, compared to other sites. The
primary factors you can influence are:

- **Perceived inventory:** Without guidance from you, Google tries to crawl all or most of the URLs that it knows about on your site. If many of these URLs are duplicates, or you don't want them crawled for some other reason (removed, unimportant, and so on), this wastes a lot of Google crawling time on your site. This is the factor that you can positively control the most.
- **Popularity:** URLs that are more popular on the Internet tend to be crawled more often to keep them fresher in our systems.
- **Staleness:** Our systems want to recrawl documents frequently enough to pick up any changes.


Additionally, site-wide events like site moves may trigger an increase in crawl demand in order
to reprocess the content under the new URLs.

> [!IMPORTANT]
> While each crawler has a different *crawl demand*, the *crawl capacity limit* is shared across all crawlers. This means that high demand from one crawler can reduce the capacity available for others.

### Summary


Taking crawl capacity and crawl demand together, Google defines a site's crawl budget as the set
of URLs that Google can and wants to crawl. Even if the crawl capacity limit isn't reached, if
crawl demand is low, Google will crawl your site less.

## Best practices

To maximize your crawling efficiency, follow these best practices:

- **Manage your URL inventory:** Use the appropriate tools to tell Google which pages to crawl and which not to crawl. If Google spends too much time crawling URLs that it shouldn't, Google's crawlers might not explore the rest of your site, or might not increase your crawl budget.
  - **[Consolidate duplicate content](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls).** Eliminate duplicate content to focus crawling on unique content rather than unique URLs.
  - [**Block crawling of URLs using robots.txt**](https://developers.google.com/search/docs/crawling-indexing/troubleshoot-crawling-errors#hide_urls). Some pages might be important to users, but you don't necessarily want them to appear on Google surfaces or get reprocessed by Google's systems. Examples include infinite scrolling pages that duplicate information on linked pages, or differently sorted versions of the same page. If you can't consolidate them as described in the first bullet, block these unimportant pages using [robots.txt](https://developers.google.com/crawling/docs/robots-txt/create-robots-txt). Blocking URLs with robots.txt prevents Google from crawling them, and significantly decreases the chance the URLs will be processed by other Google systems (such as getting indexed by Google Search).

    > [!CAUTION]
    > **Don't use `noindex`** , as Google will still request, but then drop the page when it sees a `noindex` `meta` tag or header in the HTTP response, wasting crawling time. **Don't use robots.txt to temporarily reallocate crawl budget** for other pages; use robots.txt to block pages or resources that you don't want Google to crawl at all. Google won't shift this newly available crawl budget to other pages unless Google is already hitting your site's crawl capacity limit.

  - **Return a `404` or `410` status code for permanently removed pages.** Google won't forget a URL that it knows about, but a `404` status code is a strong signal not to crawl that URL again. Blocked URLs, however, will stay part of your crawl queue much longer, and will be recrawled when the block is removed.
  - **[Eliminate `soft 404` errors](https://developers.google.com/search/docs/crawling-indexing/troubleshoot-crawling-errors#soft-404-errors).** `soft 404` pages will continue to be crawled, and waste your budget. Check the [Page Indexing report](https://support.google.com/webmasters/answer/7440203) for `soft 404` errors.
  - **Keep your sitemaps up to date.** Google reads your sitemap regularly, so be sure to include all the content that you want Google to crawl. If your site includes updated content, we recommend including the `<lastmod>` tag.
  - **Avoid long redirect chains**, which have a negative effect on crawling.
- **[Make your pages efficient to load](https://developers.google.com/search/docs/crawling-indexing/troubleshoot-crawling-errors#improve_crawl_efficiency).** If Google can load and render your pages faster, we might be able to read more content from your site.
  - **Improve loading speed:** Optimize your server response times and resources to make pages load faster.
  - **Use HTTP caching:** Support [`304 (Not Modified)` HTTP status codes](https://developers.google.com/search/docs/crawling-indexing/troubleshoot-crawling-errors#if-modified-since). If a page hasn't changed since Google last crawled it, returning a `304` code tells Google to reuse the cached version, saving your server bandwidth and resources.
- **[Debug issues with crawl budget](https://developers.google.com/search/docs/crawling-indexing/troubleshoot-crawling-errors).** Check whether your site had any availability issues during crawling, and look for ways to make your crawling more efficient.

## How do I get more crawl budget?

There are two ways to increase crawl budget:

- **Add more server resources** : If your site can't be crawled because of server capacity on your end (for example, you're getting [**Hostload exceeded**](https://support.google.com/webmasters/answer/9012289#site-wide-error-inspection&zippy=%2Csite-wide-availability-issues) in the URL inspection tool), add more server resources if that makes sense for your business.
- **Optimize your content's quality for the Google product you're targeting**: Google determines the crawling resources allocated to each site by factoring in elements that are relevant to the specific Google product. For example, for Google Search, this includes things like popularity, overall user value, content uniqueness, and serving capacity.


# Myths and facts about crawling | Google Crawling Infrastructure

# Myths and facts about crawling


Test your knowledge on how Google crawls websites.
Compressing my sitemaps can increase my crawl budget. True False It won't. Zipped sitemaps still have to be fetched from the server, so you're not really saving much crawling time or effort on Google's part by sending compressed sitemaps. Google prefers fresher content, so I'd better keep tweaking my page. True False For Google Search, content is rated by quality, regardless of age. Create and update your content as necessary, but there's no additional value in making pages artificially appear to be fresh by making trivial changes and updating the page date. Google prefers old content (it has more weight) over fresh content. True False If your page is useful, it's useful, whether it's new or old. Google prefers clean URLs and doesn't like query parameters. True False We can crawl parameters. The faster your pages load and render, the more Google is able to crawl. True True, in that our resources are limited by a combination of time and number of crawling bots. If you can serve us more pages in a limited time, we will be able to crawl more of them. However, we might devote more time crawling a site that has more important information, even if it is slower. It's probably more important for you to make your site faster for your users than to make it faster to increase your crawl coverage. It's much simpler to help Google crawl the right content than it is to crawl all your content every time. Note that crawling a site involves both retrieving and rendering the content. Time spent rendering the page counts as much as time spent requesting the page. So making your pages faster to render will also increase the crawl speed. False Small sites aren't crawled as often as big ones. True False If a site has important content that changes often, we crawl it often, regardless of the size. The closer your content is to the home page the more important it is to Google. True Partly true Your site's home page is often the most important page on your site, and so pages linked directly to the home page may be seen as more important, and therefore crawled more often. However, this doesn't mean that these pages will be ranked more highly than other pages on your site. False URL versioning is a good way to encourage Google to recrawl my pages. True Partly true Using a versioned URL for your page in order to entice Google to crawl it again sooner will probably work, but often this is not necessary, and will waste crawl resources if the page is not actually changed. If you do use versioned URLs to indicate new content, we recommend that you only change the URL when the page content has changed meaningfully. False Site speed and errors affect my crawl budget. True Making a site faster improves the users' experience while also increasing crawl rate. For Google's crawlers, a speedy site is a sign of healthy servers, so it can get more content over the same number of connections. On the flip side, a significant number of [`5xx` HTTP response status codes](https://developers.google.com/crawling/docs/troubleshooting/http-status-codes#http-status-codes) (server errors) or connection timeouts signal the opposite, and crawling slows down. We recommend paying attention to the Crawl Stats report in Search Console and keeping the number of server errors low. False Crawling is a ranking factor in Google Search. True False Improving your crawl rate won't necessarily lead to better positions in Google Search results. Google uses many signals to rank the results, and while crawling is necessary for a page to be in search results, it's not a ranking signal. Alternate URLs and embedded content count in the crawl budget. True Generally, any URL that Googlebot crawls will count towards a site's crawl budget. Alternate URLs, like AMP or hreflang, as well as embedded content, such as CSS and JavaScript, including [XHR fetches](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest), may have to be crawled and will consume a site's crawl budget. False I can control Google's crawlers with the "crawl-delay" rule. True False The non-standard "crawl-delay" robots.txt rule is not processed by Google's crawlers. The `nofollow` rule affects crawl budget. True Partly true Any URL that is crawled affects crawl budget, so even if your page marks a URL as `nofollow`, it can still be crawled if another page on your site, or any page on the web, doesn't label the link as `nofollow`. False I can use `noindex` to control crawl budget. True Partly true Any URL that is crawled affects crawl budget, and Google has to crawl the page in order to find the `noindex` rule.   

However, `noindex` is there to help you keep things out of the index. If you want to ensure that those pages don't end up in Google's index, continue using `noindex` and don't worry about crawl budget. It's also important to note that if you remove URLs from Google's index with `noindex` or otherwise, Google's crawlers can focus on other URLs on your site, which means `noindex` can indirectly free up some crawl budget for your site in the long run. False Pages that serve `4xx` HTTP status codes are wasting crawl budget. True False Pages that serve [`4xx` HTTP status codes](https://developers.google.com/crawling/docs/troubleshooting/http-status-codes#4xx-client-errors) (except `429`) don't waste crawl budget. Google attempted to crawl the page, but received a status code and no other content.


# Managing crawling of faceted navigation URLs | Google Crawling Infrastructure

# Managing crawling of faceted navigation URLs


Faceted navigation is a common feature of websites that allows its visitors to change how items
(for example, products, articles, or events) are displayed on a page. It's a popular and useful
feature, however its most common implementation, which is based on URL parameters, can generate
infinite URL spaces which harms the website in a couple ways:

- **Overcrawling**: Because the URLs created for the faceted navigation seem to be novel and crawlers can't determine whether the URLs are going to be useful without crawling first, the crawlers will typically access a very large number of faceted navigation URLs before the crawlers' processes determine the URLs are in fact useless.
- **Slower discovery crawls**: Stemming from the previous point, if crawling is spent on useless URLs, the crawlers have less time to spend on new, useful URLs.


A typical faceted navigation URL may contain various parameters in the query string related to the
properties of items they filter for. For example:

```
https://example.com/items.shtm?products=fish&color=radioactive_green&size=tiny
```


Changing any of the URL parameters `products`, `color`, and
`size` would show a different set of items on the underlying page. This often means a
very large number of possible combinations of filters, which translates to a very large number of
possible URLs. To save your resources, we recommend dealing with these URLs one of the following
ways:

- If you don't need the faceted navigation URLs potentially indexed, prevent crawling of these URLs.
- If you need the faceted navigation URLs potentially indexed, ensure that the URLs follow our best practices outlined in the following section. Keep in mind that crawling faceted URLs tends to cost sites large amounts of computing resources due to the sheer amount of URLs and operations needed to render those pages.

## Prevent crawling of faceted navigation URLs


If you want to save server resources and you don't need your faceted navigation URLs to show up in
Google Search or other Google products, you can prevent crawling of these URLs with one of the following ways.

- **Use [robots.txt](https://developers.google.com/crawling/docs/robots-txt/create-robots-txt) to disallow crawling of faceted navigation URLs.** Oftentimes there's no good reason to allow crawling of filtered items, as it consumes server resources for no or negligible benefit; instead, allow crawling of just the individual items' pages along with a dedicated listing page that shows all products without filters applied.

  ```
  user-agent: Googlebot
  disallow: /*?*products=
  disallow: /*?*color=
  disallow: /*?*size=
  allow: /*?products=all$
  ```
- **Use URL fragments to specify filters.** [Google Search generally doesn't support URL fragments in crawling and indexing](https://developers.google.com/search/docs/crawling-indexing/url-structure#fragments). If your filtering mechanism is based on URL fragments, it will have no impact on crawling (positive or negative). For example, instead of URL parameters, use URL fragments:

  ```
  https://example.com/items.shtm#products=fish&color=radioactive_green&size=tiny
  ```


Other ways to signal a preference of which faceted navigation URLs (not) to crawl is using
`rel="canonical"` `link` element and the `rel="nofollow"` anchor
attribute. However, these methods are generally less effective in the long term than the
previously mentioned methods.

- **Using [`rel="canonical"`](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls#rel-canonical-link-method)
  to specify which URL is the canonical version of a faceted navigation URL** may, over time, decrease the crawl volume of non-canonical versions of those URLs. For example, if you have 3 filtered page types, consider pointing the `rel="canonical"` to the unfiltered version: `https://example.com/items.shtm?products=fish&color=radioactive_green&size=tiny` specifies `<link rel="canonical" href="https://example.com/items.shtm?products=fish" >`.
- **Using
  [`rel="nofollow"`](https://developers.google.com/search/docs/crawling-indexing/qualify-outbound-links#nofollow)
  attributes on anchors pointing to filtered results pages** may be beneficial, however keep in mind that every anchor pointing to a specific URL must have the `rel="nofollow"` attribute in order for it to be effective.

## Ensure the faceted navigation URLs are optimal for the web


If you need your faceted navigation URLs to be potentially crawled and indexed, ensure you're
following these best practices to minimize the negative effects of crawling the large number of
potential URLs on your site:

> [!WARNING]
> Keep in mind that having these URLs crawled means an increased resource usage on your server and, potentially, slower discovery of new URLs on your site.

1. **Use the industry standard URL parameter separator '`&`'.** Characters like comma (`,`), semicolon (`;`), and brackets (`[` and `]`) are hard for crawlers to detect as parameter separators (because most often they're not separators).
2. If you're encoding filters in the URL path, such as `/products/fish/green/tiny`, ensure that the logical order of the filters always stays the same and that no duplicate filters can exist.
3. **Return an HTTP `404` status code when a filter combination doesn't return
   results.** If there are no green fish in the site's inventory, users as well as crawlers should receive a "not found" error with the proper HTTP status code (`404`). This should also be the case if the URL contains duplicate filters or otherwise nonsensical filter combinations, and nonexistent pagination URLs. Similarly, if a filter combination has no results, don't redirect to a common "not found" error page. Instead, serve a "not found" error with the `404` HTTP status code under the URL where it was encountered.

   > [!NOTE]
   > If [you have a single-page app](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics#avoid-soft-404s) this might not be possible. Follow the best practices for single page apps.