export default function (eleventyConfig) {
    eleventyConfig.addShortcode(
        "currentYear",
        () => `${new Date().getFullYear()}`
    );

}