module.exports = {
  siteMetadata: {
    title: `Nate Bhurinat Wangsutthitham`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@natebwangsut`,
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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `me`,
        path: `${__dirname}/contents/me`,
      },
    },
    // Markdown
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `github`,
        path: `${__dirname}/contents/github`,
      },
    },
    // Markdown
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/contents/projects`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
        displayName: false
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-typescript`,
  ],
}
