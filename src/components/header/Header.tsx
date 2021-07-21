import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Menu from "../menu/Menu";

////////////////////////////////////////////////////////////////////////////////

interface HeaderPropTypes {
  siteTitle: string;
}

const HeaderDefaultProps = {
  siteTitle: ``,
};

////////////////////////////////////////////////////////////////////////////////

// const Header: React.FC<HeaderPropTypes> = ({ siteTitle }) => <Menu />;
const Header: React.FC<HeaderPropTypes> = ({ siteTitle }) => <></>;

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
