import React from "react";
import styled from "styled-components";
import LandingSocial from "./social/LandingSocial";
import LandingTitle from "./title/LandingTitle";

import { LandingProps } from "../../../interface/props/section";

const LandingHeader = styled.div`
  margin-top: 15rem;
`;

const LandingSubtitle = styled.div``;

const LANDING_TITLE_NAME = "Nate Bhurinat Wangsutthitham";

const Landing: React.FC<LandingProps> = props => {
  return (
    <>
      <LandingHeader />
      <LandingTitle open>
        {LANDING_TITLE_NAME.split(" ").map((word: string) => (
          <span key={word}>{word}</span>
        ))}
      </LandingTitle>
      <LandingSocial {...props} />
      <LandingSubtitle dangerouslySetInnerHTML={{ __html: props.html }}></LandingSubtitle>
    </>
  );
};

export default Landing;
