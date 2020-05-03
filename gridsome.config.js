// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const contentful = require("./plugin.confentful");

module.exports = {
  chainWebpack: config => config.mode("development"),
  siteName: "",
  siteDescription: "",
  siteUrl: "",
  icon: {
    favicon: "./src/assets/icons/android-icon-192x192.png", // 96x96
    touchicon: "./src/assets/icons/android-icon-192x192.png" // 180x180
  },
  plugins: [contentful,
    {
      use: 'gridsome-plugin-tailwindcss',
      /**
       * These are the default options. You don't need to set any options to get
       * going. Seriously, you don't need to declare tailwind.config.js.

       options: {
        tailwindConfig: './tailwind.config.js',
        purgeConfig: {},
        presetEnvConfig: {},
        shouldPurge: true,
        shouldImport: true,
        shouldTimeTravel: true
      }
       */
    }],
  templates: {
    ContentfulGallery: "/gallery/:slug",
    ContentfulPost: "/blog/:slug",
    ContentfulPage: "/:slug"
  }
};
