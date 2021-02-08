/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Header from "../header/Header";

////////////////////////////////////////////////////////////////////////////////
// Styling
////////////////////////////////////////////////////////////////////////////////

// Normalised browsers
import "normalize.css";

// Import dependencies
import "./fonts.css";
import "./palette.css";

// Actual layout styling
import "./Layout.css";

////////////////////////////////////////////////////////////////////////////////
// Component
////////////////////////////////////////////////////////////////////////////////

const Layout: React.FC = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginBottom: "2rem",
          }}
        >
          © {new Date().getFullYear()} | designed and developed by <u>@natebwangsut</u>
        </footer>
      </div>
    </>
  );
};

export default Layout;
