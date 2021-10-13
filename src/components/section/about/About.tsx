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

const AboutContent = styled.div`
  color: #aaa;

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

const AboutHeader = styled.h1`
  margin-top: 20rem;
`;

const About: React.FC<AboutProps> = ({ frontmatter, html }) => {
  return (
    <>
      <AboutHeader>
        {frontmatter.preTitle} <span style={{ color: `var(${config.theme}-6)`, fontWeight: 400 }}>ME</span>
      </AboutHeader>
      <AboutContent dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
};

export default About;
