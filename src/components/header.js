import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "./header.scss"
import logoImage from "../images/logo_tabbied.png"

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isMobileMenuOpen: false,
    }

    this.openMobileMenu = this.openMobileMenu.bind(this)
    this.handleCloseIconClick = this.handleCloseIconClick.bind(this)
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

  handleCloseIconClick() {
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

    const isInCustomizeArtworkPage =
      location &&
      (location.pathname === "/select-artwork/" ||
        location.pathname.startsWith("/artwork/"))

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
                {!isBurgerMenuOpen && !isInCustomizeArtworkPage && (
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
                <div className="d-md-none">
                  {!isMobileMenuOpen && (
                    <div onClick={this.openMobileMenu}>
                      <i className="material-icons">menu</i>
                    </div>
                  )}

                  {isMobileMenuOpen && (
                    <div onClick={this.handleCloseIconClick}>
                      <i className="material-icons">close</i>
                    </div>
                  )}
                </div>

                <div className="d-none d-md-block">
                  <Link to="/select-artwork/" className="btn-action">
                    Make your art
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
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
