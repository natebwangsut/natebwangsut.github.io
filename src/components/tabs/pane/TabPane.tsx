import React, { ReactNode, DetailedHTMLProps, HTMLAttributes } from "react";
import styled from "styled-components";

export interface TabPaneProps {
  activeTab?: any;
  key: any;
  label: any;
  children?: string;
  dangerouslySetInnerHTML?: any | DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
}

const StyledTabPane = styled.section`
  position: relative;

  // padding-top: 20rem;
  // padding-bottom: 20rem;
`;

const TabPane: React.FC<TabPaneProps> = ({ children }) => {
  return <StyledTabPane dangerouslySetInnerHTML={{ __html: children ? children : "" }} />;
};

export default TabPane;
