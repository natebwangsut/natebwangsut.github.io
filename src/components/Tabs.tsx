import React, { useState, ReactElement } from "react";
import { TabPaneProps } from "./TabPane";
import styled from "styled-components";

// TODO: Use ESM import once Gatsby supports it
const config = require("src/config.ts");

const TabList = styled.ol`
  flex: 1;
  margin: 8px 0 8px 0;
`;

const TabListItem = styled.div`
  padding: 8px;
  transition: 0.2s ease-out;
  border-left: 1px solid transparent;

  :hover {
    color: var(${config.theme});
    cursor: pointer;
  }
`;

const TabContent = styled.div`
  flex: 3;
  margin: 8px;
  padding: 8px;
  min-height: 500px;
`;

const Tabs: React.FC<{ children: ReactElement<TabPaneProps>[] }> = ({ children }) => {
  // Let's put the first children
  const [activeTab, setActiveTab] = useState(0);
  return (
    <>
      <TabList>
        {children &&
          children.map((child, index) => {
            const isActive = activeTab === index;
            return (
              <TabListItem
                key={index}
                onClick={() => setActiveTab(index)}
                // Show the coloured border if the tab is active
                style={{
                  color: isActive ? `var(${config.theme})` : "",
                  background: isActive ? `var(${config.theme}-bg)` : "",
                  borderLeft: isActive ? `3px solid var(${config.theme})` : "",
                }}
              >
                {child.key}
              </TabListItem>
            );
          })}
      </TabList>
      <TabContent>
        {children &&
          children.map((child,index) => {
            if (index !== activeTab) return;
            return child;
          })}
      </TabContent>
    </>
  );
};

export default Tabs;
