// import { Component, children, createSignal } from 'solid-js';

import { Children, FC, useState } from "react";
import config from "../config";

// const TabPane = ({
//   header,
//   subHeader,
//   children,
//   childrenStyle,
// }) => {
//   return (
//     <div>
//       <div>{header}</div>
//       <div>{subHeader}</div>
//       <div style={{ ...childrenStyle }}>
//         {children}
//       </div>
//     </div>
//   );
// };

const Tabs: FC<{
  items: {
    title;
    role;
    company;
    start_date;
    end_date;
    value;
    component;
  }[];
}> = (props) => {
  // Let's put the first children
  const [activeTab, setActiveTab] = useState(0);

  // console.log(props.children)

  // const list = children(() => props.children);
  // console.log(list())

  return (
    <div style={{ display: "flex" }}>
      <ol style={{ flex: 1, margin: 0 }}>
        {props.items.map((item, index) => {
          const isActive = index === activeTab;
          return (
            <div
              // activeTabId={isActive ? 0 : index}
              // tabId={index}
              key={index}
              onClick={() => {
                console.log("clicked");
                setActiveTab(index);
              }}
              // Show the coloured border if the tab is active
              style={{
                cursor: "pointer",
                padding: 8,
                color: isActive ? `var(${config.theme})` : "",
                background: isActive ? `var(${config.theme}-bg)` : "",
                borderLeft: isActive ? `3px solid var(${config.theme})` : "",
              }}
            >
              {item.company}
            </div>
          );
        })}
      </ol>
      <div style={{ flex: 3 }}>
        {Children.map(props.children, (child, index) => {
          if (index !== activeTab) return;
          return child;
        })}
      </div>
    </div>
  );
};

export default Tabs;
