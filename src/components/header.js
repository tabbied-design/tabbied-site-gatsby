import React from "react"
import PropTypes from "prop-types"
import { Link, navigate } from "gatsby"
import "./header.scss"
import logoImage from "../images/logo_tabbied.png"

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isMobileMenuOpen: false,
    }

    this.openMobileMenu = this.openMobileMenu.bind(this)
    this.closeMobileMenu = this.closeMobileMenu.bind(this)
  }

  openMobileMenu() {
    this.setState(
      {
        isMobileMenuOpen: true,
      },
      () => {
        console.log(this.state)
      }
    )
  }

  closeMobileMenu() {
    this.setState(
      {
        isMobileMenuOpen: false,
      },
      () => {
        console.log(this.state)
      }
    )
  }

  render() {
    const { siteTitle, location } = this.props
    const { isMobileMenuOpen } = this.state

    const isInHomePage = location && location.pathname === "/"

    const isInSelectArtworkPage =
      location && location.pathname === "/select-artwork/"

    const isInEditArtworkPage =
      location && location.pathname.startsWith("/artwork/")

    const isBurgerMenuOpen = false

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
                {isInHomePage && !isBurgerMenuOpen && (
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

                {(isInSelectArtworkPage || isInEditArtworkPage) && (
                  <h1>Make your art</h1>
                )}
              </div>
            </div>

            <div className="col-md-3 col-6">
              <div className="align-right">
                <div className="d-md-none">
                  {isInHomePage && !isMobileMenuOpen && (
                    <div className="btn-icon" onClick={this.openMobileMenu}>
                      <i className="material-icons">menu</i>
                    </div>
                  )}

                  {isInHomePage && isMobileMenuOpen && (
                    <div className="btn-icon" onClick={this.closeMobileMenu}>
                      <i className="material-icons">close</i>
                    </div>
                  )}
                </div>

                {isInSelectArtworkPage && (
                  <div
                    className="btn-icon"
                    onClick={() => {
                      navigate("/")
                    }}
                  >
                    <i className="material-icons">close</i>
                  </div>
                )}

                {isInHomePage && (
                  <div className="d-none d-md-block">
                    <Link to="/select-artwork/" className="btn-action">
                      Make your art
                    </Link>
                  </div>
                )}

                {isInEditArtworkPage && (
                  <div className="edit-artwork-actions-wrapper">
                    <div id="btn-redraw" className="btn">
                      <i className="material-icons">replay</i>
                      <span className="text">Redraw</span>
                    </div>

                    <div id="btn-export" className="btn">
                      <i className="material-icons">arrow_downward</i>
                      <span className="text">Export</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {isInHomePage && isMobileMenuOpen && (
          <div id="mobile-menu-wrapper">
            <ul id="mobile-menu">
              <li>
                <a href="#section-how-it-works">How it works</a>
              </li>

              <li>
                <a href="#section-browse-artwork">Make your art</a>
              </li>
              <li>
                <a href="#section-example-uses">Example uses</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
