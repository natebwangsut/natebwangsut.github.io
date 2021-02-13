import React, { useState, useCallback, useEffect } from "react";
import { useTransition, animated } from "react-spring";
import styled from "styled-components";
import LandingTitle from "../landing/LandingTitle";

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

const StyledContainer = styled.section``;

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

const TRY_HARD_CLICKER = "Enough, stop clicking";

const Me: React.FC<MeProps> = ({ frontmatter, html }) => {
  const [index, setIndex] = useState(0);
  const handleOnClick = useCallback(() => setIndex(state => state + 1), []);

  const transitions = useTransition(index % frontmatter.iam.length, p => p, {
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
      <StyledHeading>{frontmatter.preTitle}</StyledHeading>
      <StyledAnimation onClick={handleOnClick}>
        {transitions.map(({ item, props: { ...rest }, key }) => (
          <animated.div key={key} style={{ ...rest, color: frontmatter.iam[item].color }}>
            {index > frontmatter.iam.length * 10
              ? TRY_HARD_CLICKER + "!".repeat((index / 10) % 10)
              : frontmatter.iam[item].item}
          </animated.div>
        ))}
      </StyledAnimation>
      <StyledContent dangerouslySetInnerHTML={{ __html: html }} />
    </StyledContainer>
  );
};

export default Me;
