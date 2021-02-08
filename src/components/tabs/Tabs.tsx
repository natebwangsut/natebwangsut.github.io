import React, { useState, ReactElement } from "react";
import TabPane, { TabPaneProps } from "./pane/TabPane";
import styled from "styled-components";

const TabList = styled.ol`
  flex: 1.25;
  margin: 8px 0 8px 0;
`;

const TabListItem = styled.div`
  transition: 0.25s ease-out;
  margin: 8px;
  padding: 8px;
  border: 1px solid transparent;

  :hover {
    border: 1px solid var(--orange-web);
  }

  :active {
    border: 1px solid var(--orange-web);
  }
`;

const TabContent = styled.div`
  flex: 2;
  margin: 8px;
  padding: 8px;
  height: 500px;
`;

const Tabs: React.FC<{ children: ReactElement<TabPaneProps>[] }> = ({ children }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  return (
    <>
      <TabList>
        {children.map(child => {
          const isActive = child.props.label === activeTab;
          return (
            <TabListItem
              key={child.key}
              onClick={() => setActiveTab(child.key)}
              style={{ border: isActive ? "1px solid var(--orange-web)" : "" }}
            >
              {child.props.label}
            </TabListItem>
          );
        })}
      </TabList>
      <TabContent>
        {children.map(child => {
          if (child.props.label !== activeTab) return;
          return <TabPane {...child.props} key={child.key} />;
        })}
      </TabContent>
    </>
  );
};

export default Tabs;
