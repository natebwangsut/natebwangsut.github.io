import React, { useState } from "react";
import styled from "styled-components";

const MenuWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;

  z-index: 10;
  width: 100%;
  height: 4rem;
  background-color: var(--black);
`;

const MenuList = styled.div`
  overflow: hidden;
  list-style-type: none;
  float: right;
  margin-right: 4rem;
`;

const MenuListItem = styled.div`
  float: left;
  color: var(--platinum);
  padding: 1.25rem;
  cursor: pointer;
  textdecoration: none;
  border-bottom: 0px solid transparent;

  // Transitions
  transition: 0.2s ease-out;

  // Hover
  &:hover {
    color: var(--orange-web);
    border-bottom: 3px solid currentColor;
  }

  // Active
  &:active {
    color: var(--orange-web);
    border-bottom: 3px solid currentColor;
  }

  &.active {
    color: var(--orange-web);
    border-bottom: 3px solid currentColor;
  }
`;

const menuItems = ["me", "experience", "project", "contributions", "blog"];

const Menu = () => {
  // TODO: Adding responsive function like on https://airbnb.design/cereal/
  const [selected, setSelected] = useState(menuItems[0]);

  return (
    <MenuWrapper>
      <MenuList>
        {menuItems.map(item => {
          const isActive = selected === item;
          return (
            <MenuListItem
              key={item}
              onClick={() => setSelected(item)}
              // Show the coloured border if the tab is active
              // style={{
              //   color: isActive ? "var(--orange-web)" : "",
              //   background: isActive ? "var(--dark-orange)" : "",
              //   borderBottom: isActive ? "3px solid var(--orange-web)" : "",
              // }}
            >
              {item}
            </MenuListItem>
          );
        })}
      </MenuList>
    </MenuWrapper>
  );
};

export default Menu;
