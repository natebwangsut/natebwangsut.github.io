import React, { PropsWithChildren, Props } from "react";
import styled from "styled-components";
import Tabs from "../../tabs/Tabs";
import TabPane from "../../tabs/pane/TabPane";

interface ExperienceProps {
  edges: [
    {
      node: {
        frontmatter: {
          title: any;
          role: any;
          company: any;
          start_date: any;
          end_date: any;
        };
        html: any;
      };
    }
  ];
}

const StyledContainer = styled.section`
  position: relative;

  padding-top: 20rem;
  padding-bottom: 20rem;
`;

const StyledTitle = styled.h1`
  margin-bottom: 2rem;
  color: var(--orange-web);
`;

const StyledTab = styled.div`
  display: flex;
  align-items: flex-start;

  position: relative;
`;

const StyledTabButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

const StyledTabButton = styled.button`
  display: block;
  color: inherit;
  background-color: inherit;

  padding: 0.5rem;

  width: 100%;
  border: none;
  outline: none;
  text-align: left;
  cursor: pointer;

  transition: 0.3s;

  :hover {
    background-color: var(--orange-web);
    // border: 1px solid currentColor;
  }
`;

const StyledTabContent = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding: 2rem;

  &:hover,
  &:focus {
    background-color: var(--orange-web);
  }
`;

const Experience: React.FC<ExperienceProps> = ({ edges }) => {
  return (
    <StyledContainer id="experience">
      <StyledTitle>Experience</StyledTitle>
      <StyledTab>
        <Tabs>
          {edges.map(edge => {
            return (
              <TabPane key={edge.node.frontmatter.title} label={edge.node.frontmatter.title}>
                {edge.node.html}
              </TabPane>
            );
          })}
        </Tabs>
      </StyledTab>
    </StyledContainer>
  );
};

export default Experience;
