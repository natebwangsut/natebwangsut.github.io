import React, { useState, useCallback } from "react";
import { a, useSprings } from "react-spring";
import styled from "styled-components";

import { LandingProps } from "../../../../interface/props/section"

const StyledContainer = styled.section``;

const StyledHeading = styled.div`
  margin-top: 2rem;
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

    font-size: 3.5rem;
    text-align: left;

    text-transform: uppercase;
    font-family: "Manrope", -apple-system, BlinkMacSystemFont, sans-serif;
    font-weight: 400;
    letter-spacing: 0.1rem;
  }

  @media only screen and (max-width: 600px) {
    > div {
      font-size: 2rem;
      line-height: 2.5rem;
    }
  }
`;

const StyledContent = styled.div`
  margin-top: 8rem;
`;

const TRY_HARD_CLICKER = "Enough, stop clicking";

const LandingMe: React.FC<LandingProps> = ({ frontmatter, html }) => {
  const [index, setIndex] = useState(0);
  const handleOnClick = useCallback(() => setIndex(state => state + 1), []);

  const springs = useSprings(
    frontmatter.iam.length,
    frontmatter.iam.map((item, i) => ({
      reset: true,
      from: {
        opacity: 0,
        color: item.color,
        position: "absolute" as any,
        transform: "translate3d(0%,-100%,0)",
      },
      to: {
        opacity: index % frontmatter.iam.length === i ? 1 : 0,
        transform: "translate3d(0,0,0)",
      },
    }))
  );

  return (
    <StyledContainer id="me">
      <StyledHeading>{frontmatter.preTitle}</StyledHeading>
      <StyledAnimation onClick={handleOnClick}>
        {springs.map((props, i) => (
          <a.div style={props}>
            {index < frontmatter.iam.length * 5
              ? frontmatter.iam[i].item
              : TRY_HARD_CLICKER + "!".repeat((index / 10) % 10)}
          </a.div>
        ))}
      </StyledAnimation>
      <StyledContent dangerouslySetInnerHTML={{ __html: html }} />
    </StyledContainer>
  );
};

export default LandingMe;
