/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";

const config = require("src/config.ts");

/******************************************************************************
 * Styling
 ******************************************************************************/

// Normalised browsers
import "normalize.css";

// Import dependencies
import "../styles/fonts.css";
import "../styles/palette.css";

// Actual layout styling
import "../styles/layout.css";

/******************************************************************************
 * Component
 ******************************************************************************/

const Footer = styled.footer`
  color: #aaa;
  margin-bottom: 2rem;

  a {
    transition: 0.2s ease-out;
    text-decoration: none;
    color: var(${config.theme}-4);
  }

  a:hover,
  a:active {
    color: var(${config.theme}-8);
  }
`;

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
      <div
        style={{
          margin: "0 auto",
          padding: "24px",
          maxWidth: 960,
        }}
      >
        <main>{children}</main>
        <Footer>
          © {new Date().getFullYear()} | designed and developed by{" "}
          <a target="_blank" href="https://natebwangsut.github.io">
            <u>@natebwangsut</u>
          </a>
        </Footer>
      </div>
    </>
  );
};

export default Layout;
