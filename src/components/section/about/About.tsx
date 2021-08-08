import React from "react";
import styled from "styled-components";

// TODO: Use ESM import once Gatsby supports it
const config = require("src/config.ts");

interface AboutProps {
  frontmatter: {
    preTitle: any;
    title: any;
    caption: any;
    subCaption: any;
  };
  html: any;
}

const StyledContent = styled.div`
  a {
    text-decoration: none;
    color: var(${config.theme});
  }
  a:visited {
    text-decoration: none;
    color: var(${config.theme});
  }
`;
const AboutHeader = styled.h1`
  margin-top: 20rem;
`;

const About: React.FC<AboutProps> = ({ frontmatter, html }) => {
  return (
    <>
      <AboutHeader>
        {frontmatter.preTitle} <b style={{ color: `var(${config.theme}-6)` }}>ME</b>
      </AboutHeader>
      <StyledContent dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
};

export default About;
