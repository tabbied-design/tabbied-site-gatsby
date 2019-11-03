import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import "./header.scss"

const Header = ({ siteTitle }) => {
  return (
    <div id="header">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <Link id="logo" to="/">
              {siteTitle}
            </Link>
          </div>

          <div className="col-md-6">
            <div className="align-center">
              <ul id="page-navigation">
                <li>How it works</li>
                <li>Browse artwork</li>
                <li>Example uses</li>
              </ul>
            </div>
          </div>

          <div className="col-md-3">
            <div className="align-right">
              <ul id="top-right-menu">
                <li>Sign in</li>
                <li className="btn-action">Try for free</li>
              </ul>
            </div>
          </div>
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
