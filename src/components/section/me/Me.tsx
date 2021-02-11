import React, { useState, useCallback } from "react";
import { useTransition, animated } from "react-spring";
import styled from "styled-components";
import MeTitle from "./MeTitle";

interface MeProps {
  frontmatter: {
    preTitle: any;
    title: any;
    caption: any;
    subCaption: any;
    iam: [
      {
        item: string;
        color: string;
      }
    ];
  };
  html: any;
}

const StyledContainer = styled.section`
  position: relative;

  padding-top: 20rem;
  padding-bottom: 20rem;
`;

const StyledHeading = styled.div`
  margin-bottom: 2rem;
`;

const StyledTitle = styled.div`
  font-size: 1.1rem;
  margin-bottom: 2rem;
  color: var(--orange-web);
`;

const StyledAnimation = styled.div`
  height: 100%;
  user-select: none;
  margin-bottom: 2rem;

  > div {
    cursor: pointer;
    position: "absolute";
    display: "flex";
    justifycontent: "center";
    alignitems: "center";
    willchange: "transform, opacity";

    font-size: 3rem;
    text-align: left;

    text-transform: uppercase;
    font-weight: 700;
    font-family: "Cereal App Bold";
  }
`;

const StyledContent = styled.div`
  margin-top: 6rem;
`;

const Me: React.FC<MeProps> = ({ frontmatter, html }) => {
  const [index, setIndex] = useState(0);
  const onClick = useCallback(() => setIndex(state => (state + 1) % frontmatter.iam.length), [frontmatter.iam.length]);

  const transitions = useTransition(index, p => p, {
    from: {
      opacity: 0,
      position: "absolute",
      transform: "translate3d(0%,-100%,0)",
    },
    enter: { opacity: 1, transform: "translate3d(0,0,0)" },
    leave: { opacity: 0, transform: "translate3d(0,0,0)" },
  });

  return (
    <StyledContainer id="me">
      {/* <code>
        <StyledTitle>{frontmatter.title.split(" ")}</StyledTitle>
      </code> */}
      <MeTitle>
        {frontmatter.title.split(" ").map((word: string) => <span>{word}</span>)}
      </MeTitle>
      <StyledHeading>{frontmatter.preTitle}</StyledHeading>
      <StyledAnimation onClick={onClick}>
        {transitions.map(({ item, props: { ...rest }, key }) => (
          <animated.div key={key} style={{ ...rest, color: frontmatter.iam[item].color }}>
            {frontmatter.iam[item].item}
          </animated.div>
        ))}
      </StyledAnimation>
      <StyledContent dangerouslySetInnerHTML={{ __html: html }} />
    </StyledContainer>
  );
};

export default Me;
