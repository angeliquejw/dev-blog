import markdownIt from "markdown-it";
import markdownItAbbr from "markdown-it-abbr";
import markdownItAnchor from "markdown-it-anchor";
import markdownItAttr from "markdown-it-attrs";
import markdownItCodePen from "markdown-it-code-embed";
import markdownItPrism from "markdown-it-prism";

export default function (eleventyConfig) {
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
}