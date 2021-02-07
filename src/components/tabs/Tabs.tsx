import React, { useState, ReactElement } from "react";
import TabPane, { TabPaneProps } from "./pane/TabPane";
import styled from "styled-components";

const TabList = styled.ol`
  margin: 0;
`;

const TabItem = styled.div`
  padding: 8px;
  border: 1px solid #000;

  :hover {
    border: 1px solid var(--orange-web);
  };
`;

const Tabs: React.FC<{ children: ReactElement<TabPaneProps>[] }> = ({ children }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  return (
    <div className="tabs">
      <TabList style={{ margin: "8px 0 8px 0" }}>
        {children.map(child => {
          return (
            <TabItem key={child.key} onClick={() => setActiveTab(child.key)}>
              {child.props.label}
            </TabItem>
          );
        })}
      </TabList>
      <div className="tab-content">
        {children.map(child => {
          if (child.props.label !== activeTab) return;
          return <TabPane {...child.props} key={child.key} />;
        })}
      </div>
    </div>
  );
};

export default Tabs;
