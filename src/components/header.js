import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "./header.scss"
import logoImage from "../images/logo_tabbied.png"

const Header = ({ siteTitle, location }) => {
  console.log({ siteTitle, location })
  const isInCustomizeArtworkPage =
    location.pathname === "/select-artwork/" ||
    location.pathname.startsWith("/artwork/")

  return (
    <div id="header">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-3 col-6">
            <Link id="logo" to="/">
              <img src={logoImage} alt={siteTitle} />
            </Link>
          </div>

          <div className="col-md-6 d-none d-md-block">
            <div className="align-center">
              {!isInCustomizeArtworkPage && (
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
              )}
              {isInCustomizeArtworkPage && <h1>Make your art</h1>}
            </div>
          </div>

          <div className="col-md-3 col-6">
            <div className="align-right">
              {!isInCustomizeArtworkPage && (
                <Link to="/select-artwork/" className="btn-action">
                  Make your art
                </Link>
              )}
              {isInCustomizeArtworkPage && (
                <Link to="/" className="btn-close">
                  <i class="material-icons">close</i>
                </Link>
              )}
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
