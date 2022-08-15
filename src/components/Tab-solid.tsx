import { createSignal } from "solid-js";
import config from "../config";

const TabPane = ({ header, subHeader, children, childrenStyle = {} }) => {
  return (
    <div>
      <div>{header}</div>
      <div>{subHeader}</div>
      <div style={{ ...childrenStyle }}>{children}</div>
    </div>
  );
};

const Tabs = (props) => {
  // Let's put the first children
  const [activeTab, setActiveTab] = createSignal(0);

  return (
    <div style={{ display: "flex" }}>
      <ol style={{ flex: 1, margin: 0 }}>
        {props.items.map((item, index) => {
          const isActive = index === activeTab();
          return (
            <div
              // activeTabId={isActive ? 0 : index}
              // tabId={index}
              // key={index}
              onClick={() => {
                setActiveTab(index);
              }}
              // Show the coloured border if the tab is active
              style={{
                cursor: "pointer",
                padding: "8px",
                transition: "all 0.2s ease-out",
                // transition: "all 0.1s ease-out",
                color: isActive ? `var(${config.theme})` : "",
                background: isActive ? `var(${config.theme}-bg)` : "",


                // "border-left": isActive ? `3px solid var(${config.theme})` : "",

                "&:hover": {
                  color: `var(${config.theme})`
                },
              }}
            >
              {item.company}
            </div>
          );
        })}
      </ol>
      <div style={{ flex: 3 }}>
        {props.items.map((item, index) => {
          const isActive = index === activeTab();
          console.log(isActive, item.compiled);
          if (!isActive) return <></>;
          else
            return <div innerHTML={item.compiled} />;
        })}
      </div>
    </div>
  );
};

export default Tabs;
