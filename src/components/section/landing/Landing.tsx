import React from "react";
import styled from "styled-components";
import LandingTitle from "./LandingTitle";

const LandingHeader = styled.div`
  margin-top: 15rem;
`;
const LANDING_TITLE_NAME = "Nate Bhurinat Wangsutthitham";

const Landing: React.FC = () => {
  return (
    <>
      <LandingHeader />
      <LandingTitle open>
        {LANDING_TITLE_NAME.split(" ").map((word: string) => (
          <span key={word}>{word}</span>
        ))}
      </LandingTitle>
    </>
  );
};

export default Landing;
