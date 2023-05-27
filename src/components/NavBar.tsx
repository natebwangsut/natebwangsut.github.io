/** @jsxImportSource solid-js */

import { For } from "solid-js";

import "./NavBar.css";

const menuItems = [
  {
    name: "~",
    link: "/",
  },
  {
    name: "./blog",
    link: "/blog",
    disabled: false,
  },

];

const NavBar = (props: {}) => {
  return (
    <div class="navbar">
      <div style={{ flex: 1 }} />
      <For each={menuItems}>
        {(item, index) => (
          // TODO: Use monospace font
          <a class="link" {...(!item.disabled ? { href: item.link } : {})}>
            <div
              class="navbar-items"
              style={{
                "padding-left": "2rem",
                "padding-right": "2rem",
                flex: 0,
              }}
            >
              {item.name}
            </div>
          </a>
        )}
      </For>
    </div>
  );
};

export default NavBar;
