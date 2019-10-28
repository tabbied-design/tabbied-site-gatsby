import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"

const Header = ({ siteTitle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="header abs">
      <div className="container-xl">
        <Link id="logo" to="/">
          Tabbied
        </Link>
        <div id="menu">
          <div to="/#" onClick={toggleMenu} className="link link-reveil">
            Menu
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="menu-box">
          <div className="menu-box-slide"></div>
          <div className="container-xl">
            <div className="col-6 col-lg-2 col-sm-hide"></div>
            <ul className="col-3 col-lg-3 col-sm-2 list menu-list">
              <li className="active">
                <Link data-letters="Shop" to="/">
                  Shop
                </Link>
              </li>
              <li>
                <Link data-letters="About" to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link data-letters="Contact" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
            <ul className="col-2 col-lg-2 col-sm-1 list menu-list">
              <li>
                <Link
                  data-letters="Facebook"
                  to="/https://www.facebook.com/TabbiedWallArt/"
                  className="no-animsition"
                  target="_blank"
                >
                  Facebook
                </Link>
              </li>
              <li>
                <Link
                  data-letters="Instagram"
                  to="/https://www.instagram.com/tabbiedart/"
                  className="no-animsition"
                  target="_blank"
                >
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  data-letters="Pinterest"
                  to="/https://www.pinterest.com/tabbiedart/"
                  className="no-animsition"
                  target="_blank"
                >
                  Pinterest
                </Link>
              </li>
            </ul>
            <div id="cross">
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      )}
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
