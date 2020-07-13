import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Menu from "../menu/Menu"

////////////////////////////////////////////////////////////////////////////////

interface HeaderPropTypes {
  siteTitle: string
}

const HeaderDefaultProps = {
  siteTitle: ``,
}

////////////////////////////////////////////////////////////////////////////////

const Header: React.FC<HeaderPropTypes> = ({ siteTitle }) => (
  <header
    style={{
      // background: `rebeccapurple`,
      // background: `black`,
      // padding: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.5rem`,
        background: `transparent`,
      }}
    >
      {/* <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        {siteTitle}
      </Link> */}
    </div>
    <Menu />
  </header>
)

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
