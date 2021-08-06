import React from "react";
import styled from "styled-components";
import { LandingProps } from "../../../../interface/props/section"

import { FaTwitter, FaInstagram, FaLinkedin, FaGithub, FaGitlab } from 'react-icons/fa';

const SocialBar = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin-bottom: 3rem;
`;

const Social = styled.div`
  color: gray;
  padding: calc(3rem / 6);
  padding-bottom: 0px;
  border: 2px solid transparent;
  transition: 0.2s ease-out;

  &:hover {
    cursor: pointer;
    color: black;
    background-color: var(--orange-web);
    border: 2px solid currentColor;
  }
`;

const Divider = styled.hr`
  flex: 1;
  display: block;
  height: 0px;
  background-color: transparent;
  border: 2px solid var(--orange-web);
  margin-top: calc(4rem / 2 + 1px);
  margin-bottom: calc(4rem / 2 + 1px);
  padding: 0;
`

const iconProps = {
  size: "3rem"
}


const LandingSocial: React.FC<LandingProps> = ({ frontmatter, html }) => {

  const items = [
    <FaTwitter {...iconProps}/>,
    <FaInstagram {...iconProps}/>,
    <FaLinkedin {...iconProps}/>,
    <FaGithub {...iconProps}/>,
    // <FaGitlab {...iconProps}/>,
  ]

  return (
    <SocialBar>
      {items.map(icon => <Social>{icon}</Social>)}
      {/* {items.map(icon => icon)} */}
      <Divider />
    </SocialBar>
  );
};

export default LandingSocial;
