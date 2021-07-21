import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import styled from "styled-components";

export interface TabPaneProps {
  activeTab?: any;
  key: any;
  label: any;
  role: any;
  start_date: any;
  end_date: any;
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

  color: var(--orange-web);
`;
const TabPaneDate = styled.p`
  margin-bottom: 1rem;
`;

const TabPane: React.FC<TabPaneProps> = ({ role, start_date, end_date, children }) => {
  return (
    <StyledTabPane>
      <TabPaneHeader>{role}</TabPaneHeader>
      <TabPaneDate>{end_date ? `${start_date} - ${end_date}` : start_date + `- Present`}</TabPaneDate>
      <div dangerouslySetInnerHTML={{ __html: children ? children : "" }} />
    </StyledTabPane>
  );
};

export default TabPane;
