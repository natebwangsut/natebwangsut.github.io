const config = {
  siteTitle: "natebwangsut",                                                              // Site title.
  siteTitleShort: "natebwangsut",                                                         // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "natebwangsut",                                                           // Alternative site title for SEO.
  // siteLogo: "/logos/logo-1024.png",                                                    // Logo used for SEO and manifest.
  siteUrl: "https://natebwangsut.github.io",                                              // Domain of your website without pathPrefix.
  pathPrefix: "/",                                                                        // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "Just another software engineer living on the planet as you do.",       // Website description used for RSS feeds/meta description tag.
  author: "natebwangsut",                                                                 // author for site metadata

  // TODO: Implement theme switching
  theme: "--mint",
  // Theme Options
  // theme: "--orange-web",                                                                  // please see palette.css for more options
  // theme: "--geek-blue",                                                                   // please see palette.css for more options
  // theme: "--mint",                                                                        // please see palette.css for more options
  // theme: "--veri-peri",                                                                   // please see palette.css for more options

  // External links
  links: {
    github: "https://github.com/natebwangsut",
    instagram: "https://www.instagram.com/natebwangsut",
    linkedin: "https://www.linkedin.com/in/natebwangsut",
    twitter: "https://twitter.com/natebwangsut",
  },
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix !== "/") {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/") config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
// if (config.siteRss && config.siteRss[0] !== "/")
//   config.siteRss = `/${config.siteRss}`;

module.exports = config;
