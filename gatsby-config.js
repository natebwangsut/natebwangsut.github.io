const config = require("./src/config.ts");

module.exports = {
  siteMetadata: {
    author: config.author,
    title: config.siteTitle,
    description: config.siteDescription,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    // Images
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // Markdown
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "contents",
        path: `${__dirname}/contents/`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
        displayName: false,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.siteTitle,
        short_name: config.siteTitleShort,
        description: config.siteDescription,
        start_url: config.pathPrefix,
        // background_color: `#663399`,
        // theme_color: `#663399`,
        // display: `minimal-ui`,
        // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
        icon: `src/images/favicon-32x32.png`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          // {
          //   // https://www.gatsbyjs.org/packages/gatsby-remark-external-links
          //   resolve: 'gatsby-remark-external-links',
          //   options: {
          //     target: '_blank',
          //     rel: 'nofollow noopener noreferrer',
          //   },
          // },
          // {
          //   // https://www.gatsbyjs.org/packages/gatsby-remark-images
          //   resolve: 'gatsby-remark-images',
          //   options: {
          //     maxWidth: 700,
          //     linkImagesToOriginal: true,
          //     quality: 90,
          //     tracedSVG: { color: config.colors.green },
          //   },
          // },
          // {
          //   // https://www.gatsbyjs.org/packages/gatsby-remark-code-titles/
          //   resolve: 'gatsby-remark-code-titles',
          // }, // IMPORTANT: this must be ahead of other plugins that use code blocks
          {
            // https://www.gatsbyjs.org/packages/gatsby-remark-prismjs
            resolve: `gatsby-remark-prismjs`,
            options: {
              // Class prefix for <pre> tags containing syntax highlighting;
              // defaults to 'language-' (e.g. <pre class="language-js">).
              // If your site loads Prism into the browser at runtime,
              // (e.g. for use with libraries like react-live),
              // you may use this to prevent Prism from re-processing syntax.
              // This is an uncommon use-case though;
              // If you're unsure, it's best to use the default value.
              classPrefix: "language-",
              // This is used to allow setting a language for inline code
              // (i.e. single backticks) by creating a separator.
              // This separator is a string and will do no white-space
              // stripping.
              // A suggested value for English speakers is the non-ascii
              // character '›'.
              inlineCodeMarker: null,
              // This lets you set up language aliases.  For example,
              // setting this to '{ sh: "bash" }' will let you use
              // the language "sh" which will highlight using the
              // bash highlighter.
              aliases: {},
              // This toggles the display of line numbers globally alongside the code.
              // To use it, add the following line in gatsby-browser.js
              // right after importing the prism color scheme:
              //  require("prismjs/plugins/line-numbers/prism-line-numbers.css")
              // Defaults to false.
              // If you wish to only show line numbers on certain code blocks,
              // leave false and use the {numberLines: true} syntax below
              showLineNumbers: false,
              // If setting this to true, the parser won't handle and highlight inline
              // code used in markdown i.e. single backtick code like `this`.
              noInlineHighlight: false,
              // This adds a new language definition to Prism or extend an already
              // existing language definition. More details on this option can be
              // found under the header "Add new language definition or extend an
              // existing language" below.
              languageExtensions: [
                {
                  language: "superscript",
                  extend: "javascript",
                  definition: {
                    superscript_types: /(SuperType)/,
                  },
                  insertBefore: {
                    function: {
                      superscript_keywords: /(superif|superelse)/,
                    },
                  },
                },
              ],
              // Customize the prompt used in shell output
              // Values below are default
              prompt: {
                user: "root",
                host: "localhost",
                global: false,
              },
            },
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-typescript`,
  ],
};
