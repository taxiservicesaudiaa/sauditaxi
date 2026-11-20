# What Is a Sitemap | Google Search Central

# Learn about sitemaps

[Video](https://www.youtube.com/watch?v=JlamLfyFjTA)


A *sitemap* is a file where you provide information about the pages, videos, and other
files on your site, and the relationships between them. Search engines like Google read this
file to crawl your site more efficiently. A sitemap tells search engines which pages and files you
think are important in your site, and also provides valuable information about these files.
For example, when the page was last updated and any alternate language versions of the page.


You can use a sitemap to provide information about specific types of content on your pages,
including [video](https://developers.google.com/search/docs/crawling-indexing/sitemaps/video-sitemaps),
[image](https://developers.google.com/search/docs/crawling-indexing/sitemaps/image-sitemaps), and
[news](https://developers.google.com/search/docs/crawling-indexing/sitemaps/news-sitemap) content. For example:

- A sitemap *video entry* can specify the video running time, rating, and age-appropriateness rating.
- A sitemap *image entry* can include the location of the images included in a page.
- A sitemap *news entry* can include the article title and publication date.

> [!NOTE]
> If you're using a CMS such as WordPress, Wix, or Blogger, it's likely that your CMS has already [made a sitemap available to search engines](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap#cmssitemap) and you don't have to do anything.

## Do I need a sitemap?


If your site's pages are properly linked, Google can usually discover most of your site.
Proper linking means that all pages that you deem important can be reached through some form
of navigation, be that your site's menu or links that you placed on pages. Even so, a sitemap
can improve the crawling of larger or more complex sites, or more specialized files.

> [!NOTE]
> A sitemap helps search engines discover URLs on your site, but it doesn't guarantee that all the items in your sitemap will be crawled and indexed. However, in most cases, your site will benefit from having a sitemap.

**You might need a sitemap if:**

- **Your site is large.** Generally, on large sites it's more difficult to make sure that every page is linked by at least one other page on the site. As a result, it's more likely [Googlebot](https://developers.google.com/search/docs/crawling-indexing/googlebot) might not discover some of your new pages.
- **Your site is new and has few external links to it.** Googlebot and other web crawlers crawl the web by accessing URLs found in previously crawled pages. As a result, Googlebot might not discover your pages if no other sites link to them.
- **Your site has a lot of rich media content (video, images) or is shown in Google News.** Google can take additional information from sitemaps into account for Search.

**You might not need a sitemap if:**

- **Your site is "small".** By small, we mean about 500 pages or fewer on your site. Only pages that you think need to be in search results count toward this total.
- **Your site is comprehensively linked internally.** This means that Googlebot can find all the important pages on your site by following links starting from the home page.
- **You don't have many media files (video, image) or news pages** that you want to show in search results. Sitemaps can help Google find and understand video and image files, or news articles, on your site. If you don't need these results to appear in Search you might not need a sitemap.

## Build a sitemap


If you decided that you need a sitemap,
[learn more about how to create one](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap).


# Build and submit a sitemap


This page describes how to build a sitemap and make it available to Google. If you're new to
sitemaps,
[read our introduction first](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview).


Google supports the sitemap formats defined by the
[sitemaps protocol](https://www.sitemaps.org/protocol.html#otherformats).
Each format has its own benefits and shortcomings; choose the one that is the most appropriate for
your site and setup (Google doesn't have a preference). The following table compares the different
sitemap formats:

| Sitemaps comparison ||
|---|---|
| [XML sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap#xml) | XML sitemaps are the most versatile of the sitemaps formats. It's extensible and can be used to supply additional data about [images](https://developers.google.com/search/docs/crawling-indexing/sitemaps/image-sitemaps), [video](https://developers.google.com/search/docs/crawling-indexing/sitemaps/video-sitemaps), and [news](https://developers.google.com/search/docs/crawling-indexing/sitemaps/news-sitemap) content, as well as the [localized versions](https://developers.google.com/search/docs/specialty/international/localized-versions) of your pages. |---|---| | **Pros:** - Extensible and versatile. - It can provide the most information about your URLs. - Most content management systems (CMS) automatically generate sitemaps or CMS users can find plenty of sitemap plugins. | **Cons:** - Can be cumbersome to work with. - Can be complex to maintain the mapping on larger sites, or sites where the URLs change often. | |
| [RSS, mRSS, and Atom 1.0](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap#rss) | RSS, mRSS, and Atom 1.0 sitemaps are similar in structure to XML sitemaps, however they are often the easiest to provide because CMSes automatically create them. |---|---| | **Pros:** - Most CMSes automatically generate RSS and Atom feeds. - Can be used to provide Google information about your videos. | **Cons:** - Besides [HTML and other indexable textual content](https://developers.google.com/search/docs/crawling-indexing/indexable-file-types), it can only provide information about videos, not images or news. - Can be cumbersome to work with. | |
| [Text sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap#text) | The simplest of sitemap formats, it can only list URLs to HTML and other indexable pages. |---|---| | **Pros:** - Simple to do and maintain, especially on large sites. | **Cons:** - Limited to HTML and other indexable textual content. | |

## Sitemap best practices


The best practices for sitemaps are defined by the
[sitemaps protocol](https://www.sitemaps.org/protocol.html).
The most overlooked best practices are related to the size limits, sitemap location, and the
URLs included in the sitemaps.


**Sitemap size limits:**
All formats limit a single sitemap to 50MB (uncompressed) or 50,000 URLs. If you have a larger
file or more URLs, you must break your sitemap into multiple sitemaps. You can optionally
create a [sitemap index](https://developers.google.com/search/docs/crawling-indexing/sitemaps/large-sitemaps)
file and submit that single index file to Google. You can submit multiple sitemaps and sitemap
index files to Google. This may be useful if you want to track the search performance of each
individual sitemap in Search Console.


**Sitemap file encoding and location:**
The sitemap file must be UTF-8 encoded. You can host your sitemaps anywhere on your site, but
unless you submit your sitemap through [Search Console](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap#addsitemap), a sitemap
affects only descendants of the parent directory. Therefore, a sitemap posted at the site root
can affect all files on the site, which is where we recommend posting your sitemaps.


**Referenced URLs' properties:**
Use fully-qualified, absolute URLs in your sitemaps. Google will attempt to crawl your URLs
exactly as listed. For example, if your site is at `https://www.example.com/`, don't
specify a URL such as `/mypage.html` (a relative URL), use the complete, absolute URL:
`https://www.example.com/mypage.html`.


Include the URLs in your sitemap that you want to see in Google's search results. Google
generally shows the
[canonical URLs](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls) in its
search results, which you can influence with sitemaps. If you have different URLs for mobile
and desktop versions of a page, we recommend pointing to only one version in a sitemap.
However, if you want to point to both URLs,
[annotate](https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing#additional-best-practices)
your URLs to indicate the desktop and mobile versions.


For a complete list of best practices, check out the
[sitemaps protocol](https://www.sitemaps.org/protocol.html).

## XML sitemap


The XML sitemap format is the most versatile of the supported formats. Using the Google
supported sitemap extensions, you can also provide additional information about your
[images](https://developers.google.com/search/docs/crawling-indexing/sitemaps/image-sitemaps),
[video](https://developers.google.com/search/docs/crawling-indexing/sitemaps/video-sitemaps), and
[news](https://developers.google.com/search/docs/crawling-indexing/sitemaps/news-sitemap) content, as well as
the [localized versions](https://developers.google.com/search/docs/specialty/international/localized-versions)
of your pages.

Here is a very basic XML sitemap that includes the location of a single URL:

```
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.example.com/foo.html</loc>
    <lastmod>2022-06-04</lastmod>
  </url>
</urlset>
```


You can find more complex examples and full documentation at
[sitemaps.org](https://www.sitemaps.org/protocol.html).

### Additional notes about XML sitemaps

- As with all XML files, all tag values must be [entity escaped](https://www.sitemaps.org/protocol.html#escaping).
- Google ignores `<priority>` and `<changefreq>` values.
- Google uses the `<lastmod>` value if it's consistently and verifiably (for example by comparing to the last modification of the page) accurate.

  > [!NOTE]
  > The `<lastmod>` value should reflect the date and time of the last significant update to the page. For example, an update to the main content, the structured data, or links on the page is generally considered significant, however an update to the copyright date is not.

## RSS, mRSS, and Atom 1.0


If your CMS generates an RSS or Atom feed, you can submit the feed's URL as a sitemap.
Most CMSes create a feed for you, however keep in mind that this feed only provides information on
recent URLs.

### Additional notes about RSS, mRSS, and Atom 1.0

- Google accepts RSS 2.0 and Atom 1.0 feeds.
- You can use an [mRSS (media RSS) feed](https://developers.google.com/search/docs/crawling-indexing/sitemaps/video-sitemaps) to provide Google details about video content on your site.
- As with all XML files, all tag values must be [entity escaped](https://www.sitemaps.org/protocol.html#escaping).

## Text sitemap


If you only want to provide web page URLs, you can create a common text file that contains one URL
per line and submit that to Google. For example, if you have two pages on your site, you could add
them to your text sitemap located at `https://www.example.com/sitemap.txt` as follows:

```
https://www.example.com/file1.html
https://www.example.com/file2.html
```

### Additional notes for text file sitemaps

- Don't put anything other than URLs in the sitemap file.
- You can name the text file anything you want, provided it has a `.txt` extension (for instance, sitemap.txt).

## How to create a sitemap

[Video](https://www.youtube.com/watch?v=zLKuG0C7dUw)


When creating a sitemap, you're telling search engines about which URLs you prefer to show in
search results. These are the
[canonical URLs](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls). If you
have the same content accessible under different URLs, choose the URL you prefer
and include that in the sitemap instead of all URLs that lead to the same content.


Once you've decided which URLs to include in the sitemap, pick one of the following ways to
create a sitemap, depending on your site architecture and size:

- [Let your CMS generate a sitemap for you](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap#cmssitemap).
- For sitemaps with less than a few dozen URLs, you can [manually create a sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap#manualsitemap).
- For sitemaps with more than a few dozen URLs, [automatically generate a sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap#autositemap).

### Let your CMS generate a sitemap for you


If you're using a CMS such as WordPress, Wix, or Blogger, it's likely that your CMS has
already made a sitemap available to search engines. Try searching for information about how
your CMS generates sitemaps, or how to create a sitemap if your CMS doesn't generate a sitemap
automatically. For example, in case of Wix, search for "wix sitemap", or in case of Blogger,
search for "Blogger RSS".

### Manually create a sitemap


For sitemaps with less than a few dozen URLs, you may be able to manually create a sitemap.
For this, open a text editor such as
[Windows Notepad](https://www.microsoft.com/en-us/search?q=windows+notepad) or
[Nano (Linux, MacOS)](https://www.nano-editor.org/),
and follow a syntax described in the [Sitemap Formats](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap#sitemapformat) section. You
can name the file anything you like as long as
[the characters are allowed in a URL](https://developers.google.com/maps/url-encoding).


You can manually create larger sitemaps, but it's a tedious process and hard to maintain long
term.

### Automatically generate a sitemap with tools


For sitemaps with more than a few dozen URLs, you will need to generate the sitemap. There are
various tools that can
[generate a sitemap](https://www.google.com/search?q=generate+sitemap).
However, the best way is to have your website software generate it for you. For example, you
can extract your site's URLs from your website's database and then export the URLs to either
the screen or actual file on your web server. Talk to your developers or server manager about
this solution. If you need inspiration for the code, check out our old, unmaintained
collection of
[third-party sitemap generators](http://code.google.com/p/sitemap-generators/wiki/SitemapGenerators).


You don't have to worry about the order of the URLs in your sitemap, it doesn't matter to
Google. Note the
[size requirements for sitemaps](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap#general-guidelines); if the sitemap becomes too
large, you must split it into smaller sitemaps. Learn more about
[managing large sitemaps](https://developers.google.com/search/docs/crawling-indexing/sitemaps/large-sitemaps).

## Submit your sitemap to Google


Keep in mind that submitting a sitemap is merely a hint: it doesn't guarantee that Google will
download the sitemap or use the sitemap for crawling URLs on the site. There are a few
different ways to make your sitemap available to Google.

- **Submit a sitemap in Search Console** using the [Sitemaps report](https://support.google.com/webmasters/answer/7451001). This will allow you to see when Googlebot accessed the sitemap and also potential processing errors.
- **Use the Search Console API** to programmatically [submit a sitemap](https://developers.google.com/webmaster-tools/v1/sitemaps/submit).
- **Insert the following line anywhere in your robots.txt file** , specifying the path to your sitemap. We will find it the next time we crawl your robots.txt file:

  ```
  Sitemap: https://example.com/my_sitemap.xml
  ```

  You can specify multiple sitemap lines, and there's no limit
  to the number of sitemaps you can include in your robots.txt file.
- If you use Atom or RSS, you can use [WebSub](https://www.w3.org/TR/websub/) to broadcast your changes to search engines, including Google.

## How to cross-submit sitemaps for multiple sites


If you have multiple websites, you can simplify the submission process by creating one or
more sitemaps that include URLs for all your verified sites, and saving the sitemaps to a
single location. You can choose to use:

- A single sitemap that includes URLs for multiple websites, including sites from different domains. For example, the sitemap located at `https://host1.example.com/sitemap.xml` can include the following URLs.
  - `https://host1.example.com`
  - `https://host2.example.com`
  - `https://host3.example.com`
  - `https://host1.example1.com`
  - `https://host1.example.ch`
- Individual sitemaps (one for each site) that all reside in a single location. For example, `https://host1.example.com` may host all of these sitemaps:
  - `https://host1.example.com/host1-example-sitemap.xml`
  - `https://host1.example.com/host2-example-sitemap.xml`
  - `https://host1.example.com/host3-example-sitemap.xml`
  - `https://host1.example.com/host1-example1-sitemap.xml`
  - `https://host1.example.com/host1-example-ch-sitemap.xml`


To submit cross-site sitemaps that are hosted in a single location, you can either use Search
Console or robots.txt.

### Sitemap cross-submission with Search Console

1. Make sure that you have [verified ownership](https://support.google.com/webmasters/answer/35181) of all the sites that you will add in the sitemap.
2. [Create a sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap#createsitemap) (or more if you prefer) that includes URLs from all the sites that you want to cover. You can include the sitemaps in a [sitemap index](https://developers.google.com/search/docs/crawling-indexing/sitemaps/large-sitemaps) file if you prefer and work with that sitemap index from here on.
3. Using Google Search Console, [submit your sitemaps or sitemap index file](https://support.google.com/webmasters/answer/7451001).

### Sitemap cross-submission with robots.txt

1. [Create one or more sitemaps](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap#createsitemap) for each individual site. For each individual sitemap file, make sure you include only URLs from that particular site.
2. Upload all sitemaps to a single site you have control over, for example `https://sitemaps.example.com`.
3. For each individual site, make sure that the robots.txt file references the sitemap for that individual site. For example, if you created a sitemap for `https://example.com/` and you're hosting the sitemap at `https://sitemaps.example.com/sitemap-example-com.xml`, reference the sitemap in the robots.txt file at `https://example.com/robots.txt`.

   ```
   # robots.txt file of https://example.com/
   sitemap: https://sitemaps.example.com/sitemap-example-com.xml
   ```

## Troubleshooting sitemaps


If you're having trouble with your sitemap, you can investigate the errors with Google Search Console.
See Search Console's
[sitemaps troubleshooting guide](https://support.google.com/webmasters/answer/7451001#errors)
for help.


# Manage Your Sitemaps With Sitemap Index Files | Google Search Central

# Manage your sitemaps with a sitemap index file


If you have a sitemap that exceeds the
[size limits](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap),
you'll need to split up your large sitemap into multiple sitemaps such that each new sitemap
is below the size limit. Once you've split up your sitemap, you can use a sitemap index file
as a way to submit many sitemaps at once.

## Sitemap index best practices


The XML format of a sitemap index file is very
similar to the XML format of a sitemap file, and it's defined by the
[Sitemap Protocol](https://www.sitemaps.org/protocol.html#index).
This means that all the sitemap requirements apply to sitemap index files also.


The referenced sitemaps must be hosted on the same site as your sitemap index file. This
requirement is waived if you set up
[cross-site submission](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap#cross-submit).


Sitemaps that are referenced in the sitemap index file must be in the same
directory as the sitemap index file, or lower in the site hierarchy. For example, if the
sitemap index file is at `https://example.com/public/sitemap_index.xml`, it can
only contain sitemaps that are in the same or deeper directory, like
`https://example.com/public/shared/...`.


You can submit up to 500 sitemap index files for each site in your Search Console account.

## Example sitemap index


The following example shows a sitemap index in XML format that lists two sitemaps:

```
<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>https://www.example.com/sitemap1.xml.gz</loc>
    <lastmod>2024-08-15</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://www.example.com/sitemap2.xml.gz</loc>
    <lastmod>2022-06-05</lastmod>
  </sitemap>
</sitemapindex>
```

## Sitemap index reference


The sitemap index tags are defined by the same namespace as generic sitemaps:
[`http://www.sitemaps.org/schemas/sitemap/0.9`](http://www.sitemaps.org/schemas/sitemap/0.9)

To make sure Google can use your sitemap index, you must use the following required tags:

| Required tags ||
|---|---|
| `sitemapindex` | The root tag of the XML tree. It contains all the other tags. |
| `sitemap` | The parent tag for each sitemap listed in the file. It's the only direct child of the `sitemapindex` tag. |
| `loc` | The location (URL) of the sitemap. It's a child of the `sitemap` tag. A sitemap index file may have up to 50,000 `loc` tags. |


Additionally, the following optional tags may help Google schedule your sitemaps for crawling:

| Optional tags ||
|---|---|
| `lastmod` | Identifies the time that the corresponding sitemap file was modified. It can be a child of a `sitemap` tag. The value for the `lastmod` tag must be in [W3C Datetime format](https://www.w3.org/TR/NOTE-datetime). |

## Troubleshooting sitemaps


If you're having trouble with your sitemap, you can investigate the errors with Google Search Console.
See Search Console's
[sitemaps troubleshooting guide](https://support.google.com/webmasters/answer/7451001#errors)
for help.

## Additional resources


Want to learn more? Check out the following resources:

- [Submit your sitemap to Google](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap#addsitemap)
- [Learn how to combine sitemap extensions](https://developers.google.com/search/docs/crawling-indexing/sitemaps/combine-sitemap-extensions)



# Image Sitemaps | Google Search Central

# Image sitemaps


Image sitemaps are a way of telling Google about other images on your site, especially those that
we might not otherwise find (such as images your site reaches with JavaScript code). You can
create a separate image sitemap or add image sitemap tags to your existing sitemap; either
approach is equally fine for Google.


Image sitemaps are based on generic sitemaps so the
[general sitemap best practices](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap#general-guidelines)
also apply to image sitemaps. We also recommend that you follow the
[general best practices for publishing images](https://developers.google.com/search/docs/appearance/google-images).

## Example image sitemap


The following example shows a regular sitemap with image sitemap extension, with two
`<url>` elements:

- `https://example.com/sample1.html`, which contains two images
- `https://example.com/sample2.html`, which contains one image

```
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>https://example.com/sample1.html</loc>
    <image:image>
      <image:loc>https://example.com/image.jpg</image:loc>
    </image:image>
    <image:image>
      <image:loc>https://example.com/photo.jpg</image:loc>
    </image:image>
  </url>
  <url>
    <loc>https://example.com/sample2.html</loc>
    <image:image>
      <image:loc>https://example.com/picture.jpg</image:loc>
    </image:image>
  </url>
</urlset>
```

## Image sitemap reference


The `image` tags are defined in the Image Sitemaps namespace:
[`http://www.google.com/schemas/sitemap-image/1.1`](http://www.google.com/schemas/sitemap-image/1.1)


To make sure Google can use your image sitemap, you must use the following required tags:

| Required tags ||
|---|---|
| `<image:image>` | Encloses all information about a single image. Each `<url>` tag can contain up to 1,000 `<image:image>` tags. |
| `<image:loc>` | The URL of the image. In some cases, the image URL may not be on the same domain as your main site. This is fine, as long as you verify both domains in Search Console. If, for example, you use a content delivery network such as Google Sites to host your images, make sure that the hosting site is verified in Search Console. In addition, make sure that your [robots.txt](https://developers.google.com/search/docs/crawling-indexing/robots/intro) file doesn't disallow the crawling of any content you want indexed. |

### Deprecated tags and attributes


We removed the following tags and attributes from our documentation:
`<image:caption>`, `<image:geo_location>`,
`<image:title>`, `<image:license>`. See the
[deprecation announcement](https://developers.google.com/search/blog/2022/05/spring-cleaning-sitemap-extensions)
for more information.

## Troubleshooting sitemaps


If you're having trouble with your sitemap, you can investigate the errors with Google Search Console.
See Search Console's
[sitemaps troubleshooting guide](https://support.google.com/webmasters/answer/7451001#errors)
for help.

## Additional resources


Want to learn more? Check out the following resources:

- [Submit your sitemap to Google](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap#addsitemap)
- [Learn how to combine sitemap extensions](https://developers.google.com/search/docs/crawling-indexing/sitemaps/combine-sitemap-extensions)



# Create a News Sitemap | Google Search Central

# News sitemaps


If you are a news publisher, use news sitemaps to tell Google about your news articles and
additional information about them. You can either extend your existing sitemap with news
specific tags, or create a separate news sitemap that's reserved just for your news articles.
Either option is fine with Google, however creating a separate sitemap just for your news
articles may enable better tracking of your content in Search in Search Console.

## News sitemap best practices


News sitemaps are based on generic sitemaps, so the
[general sitemap best practices](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap#general-guidelines)
also apply to news sitemaps.


Update your news sitemap with fresh articles as they're published. Don't create a new sitemap
with each update. Google News crawls news sitemaps as often as it crawls the rest of your
site.


Only include recent URLs for articles that were created in the last two days. Once the
articles are older than two days, either remove those URLs from the news sitemap or remove
the `<news:news>` metadata in your sitemap from the older URLs.


If you choose the method of removing old URLs from your news sitemap, this could mean that
your sitemap becomes empty for a period of time (for example, if you haven't published
articles in the last few days). You may see an Empty Sitemap warning in Search Console,
but this is just to make sure it was intentional on your behalf. It won't cause any problems with
Google Search if the file is empty.

## Example news sitemap


The following example shows a regular sitemap with news extension. It contains one
`<url>` tag and a single `<news:news>` tag with its required
child tags:

```
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
  <url>
  <loc>http://www.example.org/business/article55.html</loc>
  <news:news>
    <news:publication>
      <news:name>The Example Times</news:name>
      <news:language>en</news:language>
    </news:publication>
    <news:publication_date>2008-12-23</news:publication_date>
    <news:title>Companies A, B in Merger Talks</news:title>
  </news:news>
  </url>
</urlset>
```

## News sitemap reference

The `news` tags are defined in the news sitemap namespace:
[`http://www.google.com/schemas/sitemap-news/0.9`](http://www.google.com/schemas/sitemap-news/0.9)


To make sure Google can use your news sitemap, you must use the following required tags:

| Required tags ||
|---|---|
| `<news:news>` | The parent tag of other tags in the `news:` namespace. Each `url` sitemap tag can have only one `news:news` tag (plus the respective closing tag) and a sitemap may have up to 1,000 `news:news` tags. If there are more than 1,000 `<news:news>` tags in a news sitemap, [split your sitemap into several smaller sitemaps](https://developers.google.com/search/docs/crawling-indexing/sitemaps/large-sitemaps). |
| `<news:publication>` | The parent tag for the `<news:name>` and `<news:language>` tags. Each `<news:news>` parent tag may only have one `<news:publication>` tag. |
| `<news:name>` | The `<news:name>` tag is the name of the news publication. It must exactly match the name as it appears on your articles on [news.google.com](https://news.google.com/), omitting anything in parentheses. |
| `<news:language>` | The `<news:language>` tag is the language of your publication. Use an [ISO 639 language code](http://www.loc.gov/standards/iso639-2/php/code_list.php) (two or three letters). **Exception** : For Simplified Chinese, use `zh-cn` and for Traditional Chinese, use `zh-tw`. |
| `<news:publication_date>` | The article publication date in [W3C format](http://www.w3.org/TR/NOTE-datetime). Use either the "complete date" format (`YYYY-MM-DD`) or the "complete date plus hours, minutes, and seconds" format with time zone designator format (`YYYY-MM-DDThh:mm:ssTZD`). Specify the original date and time when the article was first published on your site. Don't specify the time when you added the article to your sitemap. Google accepts any of the following formats: - Complete date: `YYYY-MM-DD (1997-07-16)` - Complete date plus hours and minutes: `YYYY-MM-DDThh:mmTZD (1997-07-16T19:20+01:00)` - Complete date plus hours, minutes, and seconds: `YYYY-MM-DDThh:mm:ssTZD (1997-07-16T19:20:30+01:00)` - Complete date plus hours, minutes, seconds, and a decimal fraction of a second: `YYYY-MM-DDThh:mm:ss.sTZD` (`1997-07-16T19:20:30.45+01:00`) |
| `<news:title>` | The title of the news article. > [!TIP] > **Tip:** Google may shorten the title of the news article for space reasons when displaying the article on various devices. Include the title of the article as it appears on your site. Don't include the author name, publication name, or publication date in the `<news:title>` tag. Learn more about [creating better titles](https://developers.google.com/search/docs/appearance/title-link). |

## Troubleshooting sitemaps


If you're having trouble with your sitemap, you can investigate the errors with Google Search Console.
See Search Console's
[sitemaps troubleshooting guide](https://support.google.com/webmasters/answer/7451001#errors)
for help.

## Additional resources


Want to learn more? Check out the following resources:

- [Submit your sitemap to Google](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap#addsitemap)
- [Learn how to combine sitemap extensions](https://developers.google.com/search/docs/crawling-indexing/sitemaps/combine-sitemap-extensions)


# How to Combine Sitemap Extensions | Google Search Central

# How to combine sitemap extensions


Sitemap extensions are a great way to tell Google about the different kinds of content and
their metadata that you're using on your site. Often the content on your pages may fit into
multiple kinds of extensions; for example, you might be publishing news articles that embed
images and videos. Additionally, your pages may be localized as well, which might mean that
you could add `hreflang` annotations for your localized pages.

## Namespaces


For each sitemap extension that you want to use in a sitemap you need to specify the
respective namespace that declares the tags the extension supports. This is done with the
`xmlns` attribute of the `urlset` tag. The namespaces for the sitemap
extensions Google supports are:

| Extension tags and their namespace definitions ||
|---|---|
| `image:` | [`http://www.google.com/schemas/sitemap-image/1.1`](http://www.google.com/schemas/sitemap-image/1.1) |
| `news:` | [`http://www.google.com/schemas/sitemap-news/0.9`](http://www.google.com/schemas/sitemap-news/0.9) |
| `video:` | [`http://www.google.com/schemas/sitemap-video/1.1`](http://www.google.com/schemas/sitemap-video/1.1) |
| `xhtml:` (for `hreflang`) | [`http://www.w3.org/1999/xhtml`](http://www.w3.org/1999/xhtml) |

### Declaring multiple namespaces


To declare multiple namespaces, add the respective namespace references to your sitemap as
described in the documentation of the respective extensions. Here's an example that shows how
to add the news, video, and xhtml (for `hreflang`) extensions to a sitemap:

```
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
           xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
           xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"
           xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
<!-- rest of the sitemap -->
```

## Combining sitemap extensions


Once you declared the namespaces, follow the implementation details from the respective sitemap
extension documentation you're going to use.

- [Image sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/image-sitemaps)
- [News sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/news-sitemap)
- [Video sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/video-sitemaps)
- [`hreflang`](https://developers.google.com/search/docs/specialty/international/localized-versions#sitemap)


To combine extensions, add the tags from whatever sitemap extensions you're using, one after the
other, to the appropriate `<url>` tag, as described in each sitemap extension's
documentation.


For example, to add news, video, and xhtml (`hreflang`) extensions to a sitemap:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
    xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"
    xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
    <loc>https://www.example.com/english/page.html</loc>
    <!-- Starting with the news extension tags -->
    <news:news>
      <news:publication>
        <news:name>The Example Times</news:name>
        <news:language>en</news:language>
      </news:publication>
      <news:publication_date>2008-12-23</news:publication_date>
      <news:title>Companies A, B in Merger Talks</news:title>
    </news:news>
    <!-- Next we add video extension tags -->
    <video:video>
      <video:thumbnail_loc>https://www.example.com/thumbs/123.jpg</video:thumbnail_loc>
      <video:title>Lizzi is painting the wall</video:title>
      <video:description>
        Gary is watching the paint dry on the wall Lizzi painted.
      </video:description>
      <video:player_loc>
        https://player.example.com/video/987654321
      </video:player_loc>
    </video:video>
    <!-- And finally the xhtml tags for hreflang -->
    <xhtml:link
                rel="alternate"
                hreflang="de"
                href="https://www.example.de/deutsch/page.html"/>
    <xhtml:link
                rel="alternate"
                hreflang="de-ch"
                href="https://www.example.de/schweiz-deutsch/page.html"/>
    <xhtml:link
                rel="alternate"
                hreflang="en"
                href="https://www.example.com/english/page.html"/>
  </url>
<!-- Add more <url> tags -->
```


The order of the extension in the sitemap is irrelevant after the `<loc>`
tag. Keep in mind the
[general sitemap best practices](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap#general-guidelines),
especially the file size limits. Combining sitemap extensions increases the file size of your
sitemap significantly.

## Troubleshooting sitemaps


If you're having trouble with your sitemap, you can investigate the errors with Google Search Console.
See Search Console's
[sitemaps troubleshooting guide](https://support.google.com/webmasters/answer/7451001#errors)
for help.


