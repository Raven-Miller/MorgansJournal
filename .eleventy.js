export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("styles/style.css");
  eleventyConfig.addPassthroughCopy("script.js");
  eleventyConfig.addPassthroughCopy("images");

  return {
    htmlTemplateEngine: "njk",
    dir: {
      input: ".",
      output: "_site",
    },
  };
}
