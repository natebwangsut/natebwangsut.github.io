import React, { useState } from "react";
import styled, { css } from "styled-components";

const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;

  z-index: 10;
  width: 100%;
  height: 0;
`;

const StyledList = styled.div`
  overflow: hidden;
  list-style-type: none;
  float: right;
  margin-right: 10rem;
`;

const StyledListItem = styled.div`

  float: left;
  color: var(--platinum);
  padding: 1.25rem;
  font-size 13.5px;
  cursor: pointer;
  textdecoration: none;

  // Transitions
  // transition: all 0.25s ease-in-out;
  // -o-transition: all 0.25s ease-in-out;
  // -moz-transition: all 0.25s ease-in-out;
  // -webkit-transition: all 0.25s ease-in-out;

  // Hover
  &:hover {
    color: var(--orange-web);
    border-bottom: 1px solid currentColor;
  }

  // Active
  &:active {
    color: var(--orange-web);
    border-bottom: 1px solid currentColor;
  }

  &.active {
    color: var(--orange-web);
    border-bottom: 1px solid currentColor;
  }
`;

const Menu = () => {
  // TODO: Adding responsive function like on https://airbnb.design/cereal/
  const [isOpen, setOpen] = useState(false);
  //
  const [selected, setSelected] = useState("home");

  const handleOnClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
  };

  return (
    <StyledWrapper>
      <StyledList onClick={handleOnClick}>
        <StyledListItem key="home">Home</StyledListItem>
        <StyledListItem key="about">About</StyledListItem>
        <StyledListItem key="project">Projects</StyledListItem>
        <StyledListItem key="blog">Blog</StyledListItem>
      </StyledList>
    </StyledWrapper>
  );
};

export default Menu;
