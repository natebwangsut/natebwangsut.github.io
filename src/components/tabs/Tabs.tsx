import React, { useState, ReactElement } from "react";
import TabPane, { TabPaneProps } from "./pane/TabPane";
import styled from "styled-components";

const TabList = styled.ol`
  margin: 0;
`;

const Tabs: React.FC<{ children: ReactElement<TabPaneProps>[] }> = ({ children }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  return (
    <div className="tabs">
      <TabList>
        {children.map(child => {
          return (
            <div key={child.key} onClick={() => setActiveTab(child.key)}>
              {child.props.label}
            </div>
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
