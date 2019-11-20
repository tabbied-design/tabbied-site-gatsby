import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import "./header.scss"

const Header = ({ siteTitle }) => {
  return (
    <div id="header">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-6">
            <Link id="logo" to="/">
              <img src="/images/logo_symbol.png" alt={siteTitle} />
            </Link>
          </div>

          <div className="col-md-6 d-none d-md-block">
            <div className="align-center">
              <ul id="page-navigation">
                <li>
                  <a href="#section-how-it-works">How it works</a>
                </li>
                <li>
                  <a href="#section-browse-artwork">Browse artwork</a>
                </li>
                <li>
                  <a href="#section-example-uses">Example uses</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-3 d-none d-md-block">
            <div className="align-right">
              <ul id="top-right-menu">
                <li>
                  <Link to="/">Sign in</Link>
                </li>
                <li className="btn-action">
                  <Link to="/">Try for free</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-3 col-6 d-block d-md-none">
            <div className="align-right">Burger</div>
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
