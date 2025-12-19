export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("styles/style.css");
  eleventyConfig.addPassthroughCopy("script.js");
  eleventyConfig.addPassthroughCopy("images");

  eleventyConfig.addCollection("Personal", function (collectionApi) {
    return collectionApi.getFilteredByTag("Personal");
  });
  eleventyConfig.addCollection("Letters", function (collectionApi) {
    return collectionApi.getFilteredByTag("Letters");
  });
  eleventyConfig.addCollection("Stuff", function (collectionApi) {
    return collectionApi.getFilteredByTag("Stuff");
  });

  return {
    htmlTemplateEngine: "njk",
    pathPrefix: "/MorgansJournal/",

    dir: {
      input: ".",
      output: "_site",
    },
  };
}
