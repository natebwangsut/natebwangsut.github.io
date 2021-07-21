import React from "react";
import styled from "styled-components";

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
    color: var(--orange-web);
  }
  a:visited {
    text-decoration: none;
    color: var(--orange-web);
  }
`;
const AboutHeader = styled.h1`
  margin-top: 20rem;
`;

const About: React.FC<AboutProps> = ({ frontmatter, html }) => {
  return (
    <>
      <AboutHeader>
        {frontmatter.preTitle} <b style={{ color: "var(--orange-web)" }}>ME</b>
      </AboutHeader>
      <StyledContent dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
};

export default About;
