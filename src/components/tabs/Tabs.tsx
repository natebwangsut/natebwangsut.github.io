import React, { useState, ReactElement } from "react";
import TabPane, { TabPaneProps } from "./pane/TabPane";
import styled from "styled-components";

const TabList = styled.ol`
  flex: 1.25;
  margin: 8px 0 8px 0;
`;

interface TabListItemProps {
  activeTabId: number;
}

// const TabListItem = styled.div`
//   padding: 8px;
//   transform: translateY(calc(${({ activeTabId }) => activeTabId} * var(--tab-height)));
//   transition: 0.25s ease-out;
//   border: 1px solid transparent;

//   :hover {
//     border: 1px solid var(--orange-web);
//   }
// `;

const TabListItem = styled.div`
  // margin: 8px;
  padding: 8px;
  transition: 0.2s ease-out;
  border-left: 1px solid transparent;

  :hover {
    color: var(--orange-web);
    cursor: pointer;
  }
`;

const TabContent = styled.div`
  flex: 2;
  margin: 8px;
  padding: 8px;
  height: 500px;
`;

const Tabs: React.FC<{ children: ReactElement<TabPaneProps>[] }> = ({ children }) => {
  // Let's put the first children
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  return (
    <>
      <TabList>
        {children &&
          children.map(child => {
            const isActive = child.props.label === activeTab;
            return (
              <TabListItem
                // activeTabId={isActive ? 0 : index}
                // tabId={index}
                key={child.key}
                onClick={() => {
                  setActiveTab(child.key);
                }}
                // Show the coloured border if the tab is active
                style={{
                  color: isActive ? "var(--orange-web)" : "",
                  background: isActive ? "var(--dark-orange)" : "",
                  borderLeft: isActive ? "3px solid var(--orange-web)" : "",
                }}
              >
                {child.props.label}
              </TabListItem>
            );
          })}
      </TabList>
      <TabContent>
        {children &&
          children.map(child => {
            if (child.props.label !== activeTab) return;
            return <TabPane {...child.props} key={child.key} />;
          })}
      </TabContent>
    </>
  );
};

export default Tabs;
