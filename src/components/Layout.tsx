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

const Container = styled.section`
  margin: 0 auto;
  padding: 24px;
  max-width: 960px;
`;

const Paragraph = styled.p`
  margin-bottom: 0.5rem;
`;

const Layout: React.FC = ({ children }) => {
  return (
    <Container>
      <main>{children}</main>
      <Footer>
        <Paragraph>
          © {new Date().getFullYear()} | designed and developed by{" "}
          <a href={config.links.github} target="_blank" rel="noreferrer noopener">
            @natebwangsut
          </a>
        </Paragraph>
      </Footer>
    </Container>
  );
};

export default Layout;
