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
  dangerouslySetInnerHTML?: any | DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
}

const StyledTabPane = styled.section`
  position: relative;
  // padding-top: 20rem;
  // padding-bottom: 20rem;
`;

const TabPaneHeader = styled.header`
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
  font-weight: bold;

  color: var(${config.theme});
`;
const TabPaneSubHeader = styled.p`
  margin-bottom: 1rem;
`;

const TabPane: React.FC<TabPaneProps> = ({ header, subHeader, children }) => {
  return (
    <StyledTabPane>
      <TabPaneHeader>{header}</TabPaneHeader>
      <TabPaneSubHeader>{subHeader}</TabPaneSubHeader>
      <div dangerouslySetInnerHTML={{ __html: children ? children : "" }} />
    </StyledTabPane>
  );
};

export default TabPane;
