import React from "react";
import styled from "styled-components";
import { LandingProps } from "../../../../interface/props/section";
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { IconType } from "react-icons";

// TODO: Use ESM import once Gatsby supports it
const config = require("src/config.ts");

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

const SocialLink = styled.a`
  color: inherit;
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
`;

const iconProps = {
  size: "3rem",
};

const socialLinks: { icon: React.ReactNode; href: string }[] = [
  {
    icon: <FaTwitter {...iconProps} />,
    href: config.links.twitter,
  },
  {
    icon: <FaInstagram {...iconProps} />,
    href: config.links.instagram,
  },
  {
    icon: <FaLinkedin {...iconProps} />,
    href: config.links.linkedin,
  },
  {
    icon: <FaGithub {...iconProps} />,
    href: config.links.github,
  },
];

const LandingSocial: React.FC<LandingProps> = ({ frontmatter, html }) => {
  return (
    <SocialBar>
      {socialLinks.map(link => (
        <Social key={link.href}>
          <SocialLink href={link.href}>{link.icon}</SocialLink>
        </Social>
      ))}
      <Divider />
    </SocialBar>
  );
};

export default LandingSocial;
