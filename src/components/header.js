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
              <img src="/images/logo_symbol.png" alt={siteTitle} />
            </Link>
          </div>

          <div className="col-md-6">
            <div className="align-center">
              <ul id="page-navigation">
                <li>
                  <Link to="#section-how-it-works">How it works</Link>
                </li>
                <li>
                  <Link to="#section-browse-artwork">Browse artwork</Link>
                </li>
                <li>
                  <Link to="#section-example-uses">Example uses</Link>
                </li>
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
