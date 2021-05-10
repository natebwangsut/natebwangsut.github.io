/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

////////////////////////////////////////////////////////////////////////////////

interface SEOPropTypes {
  title: string;
  lang?: string;
  meta?: any[];
  description?: string;
}

const SEODefaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

////////////////////////////////////////////////////////////////////////////////

const SEO: React.FC<SEOPropTypes> = ({
  title,
  lang = SEODefaultProps.lang,
  meta = SEODefaultProps.meta,
  description = SEODefaultProps.description,
}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      link={[
        {
          // DNS Prefetching
          rel: "dns-fetch",
          href: "https://natebwangsut.github.io/",
        },
        {
          // Allowing web to preload font(s)
          rel: "preconnect",
          href: "https://natebwangsut.github.io/",
          crossOrigin: "anonymous",
        },
      ]}
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  );
};

SEO.defaultProps = SEODefaultProps;

export default SEO;
