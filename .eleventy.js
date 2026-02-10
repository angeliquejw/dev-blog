import path from "node:path";
import { DateTime } from "luxon";
import eleventyPluginSass from "@jgarber/eleventy-plugin-sass";
import pluginRss from "@11ty/eleventy-plugin-rss";
import pluginSyntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import readingTime from "eleventy-plugin-reading-time";
import getWebmentionsForUrl from "./src/_11ty/getWebmentionsForUrl.js";
import markdownIt from "markdown-it";
import markdownItAbbr from "markdown-it-abbr";
import markdownItAnchor from "markdown-it-anchor";
import markdownItAttr from "markdown-it-attrs";
import markdownItCodePen from "markdown-it-code-embed";
import markdownItPrism from "markdown-it-prism";

export default function (eleventyConfig) {
	eleventyConfig.addPlugin(eleventyPluginSass);
	eleventyConfig.addPlugin(pluginRss);
	eleventyConfig.addPlugin(pluginSyntaxHighlight);
	eleventyConfig.addPlugin(readingTime);

	eleventyConfig.setDataDeepMerge(true);

	eleventyConfig.addLayoutAlias("post", "layouts/post.njk");

	eleventyConfig.addPassthroughCopy("src/assets/img");

	eleventyConfig.addShortcode(
		"currentYear",
		() => `${new Date().getFullYear()}`
	);

	eleventyConfig.addFilter("getWebmentionsForUrl", getWebmentionsForUrl);

	eleventyConfig.addFilter("outOfDate", (dateObj) => {
		return (
			DateTime.fromJSDate(dateObj, "dd.MM.yyyy").diffNow("years").toObject()
				.years < -2
		);
	});

	eleventyConfig.addFilter("readableDate", (dateObj) => {
		return DateTime.fromJSDate(dateObj).toFormat("LLLL dd, yyyy");
	});

	eleventyConfig.addFilter("dateMoYr", (dateObj) => {
		return DateTime.fromISO(dateObj).toFormat("MMM yyyy");
	});

	// https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
	eleventyConfig.addFilter("htmlDateString", (dateObj) => {
		return DateTime.fromJSDate(dateObj).toFormat("yyyy-LL-dd");
	});

	eleventyConfig.addFilter("readableDateFromISO", (dateObj) => {
		return DateTime.fromISO(dateObj).toFormat("LLL dd yyyy");
	});

	// Get the first `n` elements of a collection.
	eleventyConfig.addFilter("head", (array, n) => {
		if (n < 0) {
			return array.slice(n);
		}

		return array.slice(0, n);
	});

	eleventyConfig.addCollection("tagList", function(collectionsApi) {
		let tagSet = new Set();
		collectionsApi.getAll().forEach(function(item) {
			if( "tags" in item.data ) {
			let tags = item.data.tags;

			tags = tags.filter(function(item) {
				switch(item) {
				// this list should match the `filter` list in tags.njk
				case "all":
				case "nav":
				case "post":
				case "posts":
					return false;
				}

				return true;
			});

			for (const tag of tags) {
				tagSet.add(tag);
			}
			}
		});

		// returning an array in addCollection works in Eleventy 0.5.3
		return [...tagSet];

	});
	eleventyConfig.addCollection("tagCount", function(collectionsApi) {
		let tagCountMap = new Map();
		collectionsApi.getAllSorted().forEach(function(item) {
			if( "tags" in item.data ) {
				let tags = item.data.tags;
				if( typeof tags === "string" ) {
				tags = [tags];
				}
		
				tags = tags.filter(function(item) {
				switch(item) {
					// this list should match the `filter` list in tags.njk
					case "all":
					case "nav":
					case "post":
					case "posts":
					return false;
				}
		
				return true;
				});
		
				for (const tag of tags) {
					if (tagCountMap.has(tag)) {
						let cnt = tagCountMap.get(tag);
						tagCountMap.set(tag, cnt+1);
					} else {
						tagCountMap.set(tag, 1);
					}
				}
			}
		});
		//val sort desc
		return new Map([...tagCountMap.entries()].sort((a, b) => b[1] - a[1]));
		//key sort asc
		// return new Map([...tagCountMap.entries()].sort());
	});

	eleventyConfig.addCollection("bits", function (collectionsApi) {
		return collectionsApi.getFilteredByTag("bits");
	});

	eleventyConfig.addCollection("posts", function (collectionsApi) {
		const coll = collectionsApi.getFilteredByTag("posts");

		for (let i = 0; i < coll.length; i++) {
			const prevPost = coll[i - 1];
			const nextPost = coll[i + 1];

			coll[i].data["prevPost"] = prevPost;
			coll[i].data["nextPost"] = nextPost;
		}

		return coll;
	});

	/* Markdown Overrides */
	let markdownOptions = {
		html: true,
		linkify: true,
		typographer: true,
	};

	const markdownEngine = markdownIt(markdownOptions);
	markdownEngine.use(markdownItAbbr);
	markdownEngine.use(markdownItAnchor, {
		permalink: true,
		permalinkClass: "direct-link",
		permalinkAttrs: () => ({
			"aria-label": "Link to this heading",
		}),
		permalinkSymbol: "#",
	});
	markdownEngine.use(markdownItAttr, {
		// optional, these are default options
		leftDelimiter: "{:",
	});
	markdownEngine.use(markdownItCodePen, {
		user: "angeliquejw",
	});
	markdownEngine.use(markdownItPrism, {
		defaultLanguage: "html",
	});
	eleventyConfig.setLibrary("md", markdownEngine);

	return {
		templateFormats: ["md", "njk", "html", "liquid"],
		passthroughFileCopy: true,

		// If your site lives in a different subdirectory, change this.
		// Leading or trailing slashes are all normalized away, so don’t worry about those.

		// If you don’t have a subdirectory, use "" or "/" (they do the same thing)
		// This is only used for link URLs (it does not affect your file structure)
		// Best paired with the `url` filter: https://www.11ty.io/docs/filters/url/

		// You can also pass this in on the command line using `--pathprefix`
		// pathPrefix: "/",

		markdownTemplateEngine: "njk",
		htmlTemplateEngine: "njk",
		dataTemplateEngine: "njk",

		// These are all optional, defaults are shown:
		dir: {
			input: "src",
			// includes: "_includes",
			// data: "_data",
			// output: "_site"
		},
	};
};
