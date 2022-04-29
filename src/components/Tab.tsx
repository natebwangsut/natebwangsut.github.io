import { Children, ReactElement, useState } from "react";
import config from "../config";

const TabPane = ({
  header,
  subHeader,
  children,
  childrenStyle,
}) => {
  return (
    <div>
      <div>{header}</div>
      <div>{subHeader}</div>
      <div
        style={{ ...childrenStyle }}
        dangerouslySetInnerHTML={{ __html: children ?? "" }}
      />
    </div>
  );
};

const Tabs: React.FC<{ children: ReactElement[] }> = ({
  children,
}) => {
  // Let's put the first children
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  return (
    <>
      <ol>
        {children &&
          children.map((child) => {
            const isActive = child.props.label === activeTab;
            return (
              <div
                // activeTabId={isActive ? 0 : index}
                // tabId={index}
                key={child.key}
                onClick={() => {
                  setActiveTab(child.key);
                }}
                // Show the coloured border if the tab is active
                style={{
                  color: isActive ? `var(${config.theme})` : "",
                  background: isActive ? `var(${config.theme}-bg)` : "",
                  borderLeft: isActive ? `3px solid var(${config.theme})` : "",
                }}
              >
                {child.props.label}
              </div>
            );
          })}
      </ol>
      <div>
        {children &&
          children.map((child) => {
            if (child.props.label !== activeTab) return;
            return <TabPane {...child.props} key={child.key} />;
          })}
      </div>
    </>
  );
};

// export default Tabs;


export const Random = ({ children }) => {
  return (
  <>{children}</>)
}


export default Random;
