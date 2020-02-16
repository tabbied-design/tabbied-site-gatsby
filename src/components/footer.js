import { Link } from "gatsby"
import React from "react"
import "./footer.scss"

const Footer = () => {
  return (
    <div id="section-footer">
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <h5>Tabbied</h5>

            <ul className="footer-menu">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">About</Link>
              </li>
              <li>
                <Link to="/">Browse Designs</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-2">
            <h5>Company</h5>

            <ul className="footer-menu">
              <li>
                <Link to="/">Terms of Service</Link>
              </li>
              <li>
                <Link to="/">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-2">
            <h5>CSS Developers</h5>

            <ul className="footer-menu">
              <li>
                <Link to="/">Submit an artwork</Link>
              </li>
            </ul>
          </div>

          <div className="col-md-5 offset-md-1 col-lg-4 offset-lg-2">
            <h5>Subscribe</h5>

            <p>
              Sign up to our email list to be notified of updates and news from
              Tabbied.
            </p>

            <div className="email-input-wrapper">
              <input type="email" placeholder="Type your email" />
              <button>Subscribe</button>
            </div>

            <p>
              © 2019 Tabbied.
              <br />
              Built with <span className="color-pink">❤</span> from Dallas and
              Seoul.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
