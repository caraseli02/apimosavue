// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
// const contentful = require("./plugin.confentful");

module.exports = {
    chainWebpack: config => {
        config.resolve.alias.set('@images', '@/assets/images')
        config.mode("development")
    },
    siteName: "Apimosa",
    siteDescription: "Pinturas especiales y patologías del acero y hormigón",
    siteUrl: "",
    outputDir: "html",
    icon: {
        favicon: "./src/assets/icons/android-icon-96x96.png", // 96x96
        touchicon: "./src/assets/icons/apple-icon-180x180.png" // 180x180
    },
    plugins: [
        {
            use: 'gridsome-plugin-nprogress',
            options: {
                // Setting a color is optional.
                color: '#ffffff',
                // Disable the loading spinner.
                showSpinner: true,
            }
        },
        {
            use: 'gridsome-plugin-tailwindcss',
            /**
             * These are the default options. You don't need to set any options to get
             * going. Seriously, you don't need to declare tailwind.config.js.
             */
            options: {
                tailwindConfig: './tailwind.config.js',
                purgeConfig: {
                    enabled: true,
                    content: [
                        './src/**/*.html',
                        './src/**/*.vue',
                        './src/**/*.jsx',
                    ],
                },
                presetEnvConfig: {},
                shouldPurge: true,
                shouldImport: true,
                shouldTimeTravel: true
            }

        },
        {
            use: 'gridsome-plugin-purgecss',
            // default options, the following will be included if you don't provide anything
            options: {
                content: [
                    './src/**/*.vue',
                    './src/**/*.js',
                    './src/**/*.jsx',
                    './src/**/*.pug',
                    './src/**/*.md'
                ],
                defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
            }
        }
    ],
    templates: {}
};
