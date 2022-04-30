import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import styled from "styled-components";

// TODO: Use ESM import once Gatsby supports it
const config = require("src/config.ts");

export interface TabPaneProps {
  activeTab?: any;
  key: any;
  label: any;
  header: any;
  // start_date: any;
  // end_date: any;
  subHeader: string;
  children?: string;
  childrenStyle?: React.CSSProperties;
  dangerouslySetInnerHTML?: any | DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
}

const TabPaneSection = styled.section`
  position: relative;
`;

const TabPaneHeader = styled.header`
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
  font-weight: 400;

  color: var(${config.theme});
`;
const TabPaneSubHeader = styled.p`
  margin-bottom: 1rem;
`;

const TabPane: React.FC<TabPaneProps> = ({ header, subHeader, children, childrenStyle }) => {
  return (
    <TabPaneSection>
      <TabPaneHeader>{header}</TabPaneHeader>
      <TabPaneSubHeader>{subHeader}</TabPaneSubHeader>
      <div style={{ ...childrenStyle }} dangerouslySetInnerHTML={{ __html: children ?? "" }} />
    </TabPaneSection>
  );
};

export default TabPane;
