import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"

const Header = ({ siteTitle }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <Link id="logo" to="/">
            {siteTitle}
          </Link>
        </div>

        <div className="col-lg-4">
          <ul id="main-page-navigation">
            <li>How it works</li>
            <li>Browse Artworks</li>
            <li>Example uses</li>
          </ul>
        </div>

        <div className="col-lg-4">
          <ul id="top-right-menu">
            <li>Sign in</li>
            <li>Try for free</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
