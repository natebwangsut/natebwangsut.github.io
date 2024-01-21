/** @jsxImportSource solid-js */

import { createSignal, For, Show } from "solid-js";

import "./Tab.css";

const TabPane = ({ header, subHeader, children, childrenStyle = {} }) => {
  return (
    <div class="tab-content">
      <h2 class="tab-header">{header}</h2>
      <p class="tab-subheader">{subHeader}</p>
      <div style={{ ...childrenStyle }}>{children}</div>
    </div>
  );
};

const Tabs = (props: {
  items: readonly {
    company: string;
    role: string;
    start_date: string;
    end_date: string;
    compiled: any;
  }[];
}) => {
  const [activeTab, setActiveTab] = createSignal(0);
  return (
    <div style={{ display: "flex" }}>
      <ol style={{ flex: 1, margin: 0, "list-style": "none" }}>
        <For each={props.items}>
          {(item, index) => (
            <li
              class="tab-list"
              classList={{ active: activeTab() === index() }}
              onClick={() => setActiveTab(index())}
            >
              {item.company}
            </li>
          )}
        </For>
      </ol>
      <div style={{ flex: 3 }}>
        {props.items.map((item, index) => {
          const isActive = index === activeTab();
          return (
            <Show when={isActive}>
              <TabPane
                header={item.role}
                subHeader={`${item.start_date} - ${item.end_date}`}
              >
                <div innerHTML={item.compiled} />
              </TabPane>
            </Show>
          );
        })}
      </div>
    </div>
  );
};

export default Tabs;
