import React from "react";
import styled from "styled-components";
import { LandingProps } from "../interface/props/section";
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

import "../styles/icon.css";

// TODO: Use ESM import once Gatsby supports it
const config = require("src/config.ts");

const SocialBar = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin-bottom: 3rem;
`;

const Social = styled.div`
  color: #aaa;
  padding: calc(3rem / 6);
  padding-bottom: 0px;
  border: 2px solid transparent;
  transition: 0.2s ease-out;

  &:hover {
    cursor: pointer;
    color: black;
    background-color: var(${config.theme});
  }
`;

const SocialLink = styled.a`
  color: inherit;
`;

const Divider = styled.hr`
  flex: 1;
  height: 100%;
  padding: 0;
  background-color: transparent;
  border: 2px solid var(${config.theme});

  display: flex;
  align-self: center;
  margin: 0;
`;

// Allowing
const iconProps = {
  className: "social-icon",
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
          <SocialLink href={link.href} target="_blank" rel="noreferrer noopener">
            {link.icon}
          </SocialLink>
        </Social>
      ))}
      <Divider className="divider" />
    </SocialBar>
  );
};

export default LandingSocial;
