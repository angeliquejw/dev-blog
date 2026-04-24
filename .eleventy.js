import pluginReadingTime from "@myxotod/eleventy-plugin-readingtime";
import pluginRss from "@11ty/eleventy-plugin-rss";
import pluginSyntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import { VentoPlugin } from 'eleventy-plugin-vento';

import collectionsConfig from "./src/_config/collections.js";
import filesConfig from "./src/_config/files.js";
import filtersConfig from "./src/_config/filters.js";
import markdownConfig from "./src/_config/markdown.js";
import shortcodesConfig from "./src/_config/shortcodes.js";

export default async function (eleventyConfig) {
	eleventyConfig.addPlugin(pluginReadingTime, {
		suffixText: " min"
	});
	eleventyConfig.addPlugin(pluginRss);
	eleventyConfig.addPlugin(pluginSyntaxHighlight);

	eleventyConfig.addPlugin(collectionsConfig);
	eleventyConfig.addPlugin(filesConfig);
	eleventyConfig.addPlugin(filtersConfig);
	eleventyConfig.addPlugin(markdownConfig);
	eleventyConfig.addPlugin(shortcodesConfig);

	eleventyConfig.setDataDeepMerge(true);

	eleventyConfig.addLayoutAlias("post", "layouts/post.vto");

	// load last pls
	eleventyConfig.addPlugin(VentoPlugin);

	return {
		templateFormats: ["md", "vto", "html", "njk"],
		passthroughFileCopy: true,
		markdownTemplateEngine: "vto",
		htmlTemplateEngine: "vto",

		// These are all optional, defaults are shown:
		dir: {
			input: "src",
			// includes: "_includes",
			// data: "_data",
			// output: "_site"
		},
	};
};
