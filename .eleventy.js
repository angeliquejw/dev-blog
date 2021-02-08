const {
  DateTime
} = require("luxon");
const fs = require("fs");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const readingTime = require('eleventy-plugin-reading-time');
const getWebmentionsForUrl = require("./src/_11ty/getWebmentionsForUrl");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(pluginSyntaxHighlight);
  eleventyConfig.addPlugin(readingTime);

  eleventyConfig.setDataDeepMerge(true);

  eleventyConfig.addLayoutAlias("post", "layouts/post.njk");

  eleventyConfig.addPassthroughCopy("assets/img");

  eleventyConfig.addShortcode("currentYear", () => `${new Date().getFullYear()}`);

  eleventyConfig.addFilter("getWebmentionsForUrl", getWebmentionsForUrl);

  eleventyConfig.addFilter('outOfDate', (dateObj) => {
    return DateTime.fromJSDate(dateObj, 'dd.MM.yyyy').diffNow('years').toObject().years < -2;
  });

  eleventyConfig.addFilter("readableDate", dateObj => {
    return DateTime.fromJSDate(dateObj, {
      zone: 'utc'
    }).toFormat("LLLL dd, yyyy");
  });

  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
  eleventyConfig.addFilter('htmlDateString', (dateObj) => {
    return DateTime.fromJSDate(dateObj, {
      zone: 'utc'
    }).toFormat('yyyy-LL-dd');
  });

  eleventyConfig.addFilter("readableDateFromISO", (dateObj) => {
    return DateTime.fromISO(dateObj).toFormat('LLL dd yyyy');
  });

  // Used in life in weeks page
  eleventyConfig.addFilter('shortDateFromYear', (dateObj) => {
    return DateTime.fromObject({
      year: dateObj
    }).toISODate();
  });

  eleventyConfig.addFilter('addDaysToDate', (dateObj, daysInt) => {
    return DateTime.fromISO(dateObj).plus({
      days: daysInt
    }).toFormat('yyyy-LL-dd');
  });

  // Get the first `n` elements of a collection.
  eleventyConfig.addFilter("head", (array, n) => {
    if (n < 0) {
      return array.slice(n);
    }

    return array.slice(0, n);
  });

  eleventyConfig.addCollection("tagList", require("./src/_11ty/getTagList"));
  eleventyConfig.addCollection("tagCount", require("./src/_11ty/getTagCount"));

  eleventyConfig.addCollection("bits", function (collection) {
    return collection.getFilteredByTag("bits");
  });

  eleventyConfig.addCollection("posts", function (collection) {
    const coll = collection.getFilteredByTag("posts");

    for (let i = 0; i < coll.length; i++) {
      const prevPost = coll[i - 1];
      const nextPost = coll[i + 1];

      coll[i].data["prevPost"] = prevPost;
      coll[i].data["nextPost"] = nextPost;
    }

    return coll;
  });

  /* Markdown Overrides */
  const markdownIt = require("markdown-it");
  const markdownItAbbr = require("markdown-it-abbr");
  const markdownItAnchor = require("markdown-it-anchor");
  const markdownItAttr = require("markdown-it-attrs");
  const markdownItCodePen = require("markdown-it-code-embed");
  const markdownItPrism = require("markdown-it-prism");

  let markdownOptions = {
    html: true,
    linkify: true,
    typographer: true
  }

  const markdownEngine = markdownIt(markdownOptions);
  markdownEngine.use(markdownItAbbr);
  markdownEngine.use(markdownItAnchor, {
    permalink: true,
    permalinkClass: "direct-link",
    permalinkAttrs: () => ({
      'aria-label': 'Link to this heading'
    }),
    permalinkSymbol: "#"
  });
  markdownEngine.use(markdownItAttr, {
    // optional, these are default options
    leftDelimiter: "{:",
  });
  markdownEngine.use(markdownItCodePen, {
    user: "angeliquejw"
  });
  markdownEngine.use(markdownItPrism, {
    defaultLanguage: "html"
  });
  eleventyConfig.setLibrary("md", markdownEngine);

  // Browsersync Overrides
  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready: function (err, browserSync) {
        const content_404 = fs.readFileSync('_dev/404.html');

        browserSync.addMiddleware("*", (req, res) => {
          // Provides the 404 content without redirect.
          res.write(content_404);
          res.end();
        });
      },
    },
    ui: false,
    ghostMode: false
  });

  return {
    templateFormats: [
      "md",
      "njk",
      "html",
      "liquid"
    ],
    passthroughFileCopy: true,

    // If your site lives in a different subdirectory, change this.
    // Leading or trailing slashes are all normalized away, so don’t worry about those.

    // If you don’t have a subdirectory, use "" or "/" (they do the same thing)
    // This is only used for link URLs (it does not affect your file structure)
    // Best paired with the `url` filter: https://www.11ty.io/docs/filters/url/

    // You can also pass this in on the command line using `--pathprefix`
    // pathPrefix: "/",

    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",

    // These are all optional, defaults are shown:
    dir: {
      input: "src"
      // includes: "_includes",
      // data: "_data",
      // output: "_site"
    }
  };
};
