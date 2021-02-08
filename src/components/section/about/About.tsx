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

const StyledContent = styled.div``;

const About: React.FC<AboutProps> = ({ frontmatter, html }) => {
  return (
    <div style={{ fontSize: "1em" }}>
      {frontmatter.preTitle} <b style={{ color: "var(--orange-web)" }}>ME</b>
      <StyledContent dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
};

export default About;
