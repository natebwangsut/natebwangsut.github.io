import React, { useState } from "react";
import styled from "styled-components";
import { Title } from "src/components/text/Text";
import { ProjectProps } from "src/interface/props/section";
import { FaCode, FaGithub } from "react-icons/fa";

// TODO: Use ESM import once Gatsby supports it
const config = require("src/config.ts");

const ProjectWrapper = styled.div`
  margin-bottom: 20rem;
`;

const ProjectGrid = styled.div`
  display: grid;

  row-gap: 20px;
  column-gap: 20px;

  // I want 3 cols
  grid-template-rows: auto;
  grid-template-columns: repeat(3, 1fr);

  // Use single column for mobile
  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }

  //
  margin-bottom: 20px;
`;

const ProjectGridItem = styled.div`
  min-height: 100px;
  place-self: stretch stretch;

  padding: 20px;

  display: flex;
  flex-direction: column;

  transition: 0.2s ease-out;

  border: 1px dashed var(${config.theme}-2);
  :hover {
    border: 1px dashed var(${config.theme}-8);
  }
`;

const ProjectGridDescription = styled.div`
  color: #aaa;
  font-size: 0.9rem;

  a {
    text-decoration: none;
    transition: 0.2s ease-out;
    color: var(${config.theme}-1);
  }

  a:hover,
  a:active {
    color: var(${config.theme}-6);
  }

  // Not adding bottom margin for last child in the card
  p:last-child {
    margin-bottom: 0px;
  }
`;

const ProjectGridHeading = styled.div`
  display: flex;
  align-items: stretch;
`;

const ProjectGridTitle = styled.h4`
  flex: 3;
  font-size: 1.3rem;
`;

const ProjectGridHeadingLink = styled.a`
  padding-left: 5px;
  padding-right: 5px;

  color: gray;
  transition: 0.2s ease-out;

  :hover {
    color: white;
  }
`;

const ProjectButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProjectButton = styled.div`
  padding: 5px;
  padding-left: 20px;
  padding-right: 20px;

  transition: 0.2s ease-out;

  border: 1px solid var(${config.theme}-3);
  :hover {
    cursor: pointer;
    border: 1px solid var(${config.theme}-6);
  }
`;

const ProjectGridTagWrapper = styled.div`
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: 10px;
`;

const ProjectGridTag = styled.div`
  color: var(${config.theme}-7);
  border: 1px solid var(${config.theme}-7);
  background-color: var(${config.theme}-bg);

  font-size: 0.8rem;
  text-transform: lowercase;
  padding-left: 0.4rem;
  padding-right: 0.4rem;
`;

const ProjectGridTagItems = styled.div``;

interface ProjectEdges {
  edges: [{ node: ProjectProps }];
}

const ROW = 2;
const ROW_SIZE = 3;

const Project: React.FC<ProjectEdges> = ({ edges }) => {
  const [isHidden, setIsHidden] = useState<boolean>(true);

  return (
    <ProjectWrapper>
      <Title>Projects</Title>
      <ProjectGrid>
        {edges.map((edge, n) => {
          const isExtended = n >= ROW * ROW_SIZE;
          if (isExtended && isHidden) return;
          return (
            <ProjectGridItem key={edge.node.frontmatter.title}>
              <ProjectGridHeading>
                <ProjectGridTitle>{edge.node.frontmatter.title}</ProjectGridTitle>
                {
                  // Do not show GitHub links if frontmatter is not present
                  edge.node.frontmatter.github && (
                    <ProjectGridHeadingLink href={edge.node.frontmatter.github} target="__blank">
                      <FaGithub size="1.5rem" />
                    </ProjectGridHeadingLink>
                  )
                }
                {
                  // Do not show website links if frontmatter is not present
                  edge.node.frontmatter.website && (
                    <ProjectGridHeadingLink href={edge.node.frontmatter.website} target="__blank">
                      <FaCode size="1.5rem" />
                    </ProjectGridHeadingLink>
                  )
                }
              </ProjectGridHeading>
              <ProjectGridDescription dangerouslySetInnerHTML={{ __html: edge.node.html }} />
              {
                // Show tags
                edge.node.frontmatter.stack && (
                  <ProjectGridTagWrapper>
                    {edge.node.frontmatter.stack.map(tag => (
                      <ProjectGridTag key={tag}>{tag}</ProjectGridTag>
                    ))}
                  </ProjectGridTagWrapper>
                )
              }
            </ProjectGridItem>
          );
        })}
      </ProjectGrid>
      <ProjectButtonWrapper>
        <ProjectButton onClick={() => setIsHidden(hidden => !hidden)}>
          {isHidden ? "Show More" : "Show Less"}
        </ProjectButton>
      </ProjectButtonWrapper>
    </ProjectWrapper>
  );
};

export default Project;
