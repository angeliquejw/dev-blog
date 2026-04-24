export default function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/assets/styles/styles.css");
    eleventyConfig.addPassthroughCopy("./src/assets/img");
    eleventyConfig.addPassthroughCopy({ "./src/robots.txt": "./robots.txt" });
}
