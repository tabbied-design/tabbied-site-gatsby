import React from "react"
import { Link } from "gatsby"

import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <section>
    <div className="container-xl">
      <div className="row offset-top06">
        <div className="col-5 col-md-hide"></div>
        <div className="col-4 col-xl-6 col-md-6 col-sm-4">
          <h2 className="min-title">
            Tabbied is a place to create and order customizable, minimally
            generated wall art.
          </h2>
          <p>
            <Link to="/about" className="link link-reveil faint" title="About">
              Learn More
            </Link>
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col-1 col-xl-hide"></div>
        <div className="col-4 col-xl-5 col-sm-4 offset-top04">
          <Link to="/super-zario" className="product-title-list">
            Super Zario <span>$7</span>
          </Link>
          <Link to="/super-zario">
            <img src="images/art_super_zario.jpg" alt="Super Zario" />
          </Link>
        </div>
        <div className="col-2 col-xl-2 col-sm-hide"></div>
        <div className="col-4 col-xl-5 col-sm-4 offset-top04">
          <Link to="/horizon" className="product-title-list">
            Horizon <span>$7</span>
          </Link>
          <Link to="/horizon">
            <img src="images/art_horizon.jpg" alt="Horizon" />
          </Link>
        </div>
        <div className="col-1 col-xl-hide"></div>
      </div>

      <div className="row">
        <div className="col-1 col-xl-hide"></div>
        <div className="col-4 col-xl-5 col-sm-4 offset-top05">
          <Link to="/disque" className="product-title-list">
            Disque <span>$5</span>
          </Link>
          <Link to="/disque">
            <img src="images/art_disque.jpg" alt="Disque" />
          </Link>
        </div>
        <div className="col-2 col-xl-2 col-sm-hide"></div>
        <div className="col-4 col-xl-5 col-sm-4 offset-top05">
          <Link to="/labyrinth" className="product-title-list">
            Labyrinth <span>$5</span>
          </Link>
          <Link to="/labyrinth">
            <img src="images/art_labyrinth.jpg" alt="Labyrinth" />
          </Link>
        </div>
        <div className="col-1 col-xl-hide"></div>
      </div>

      <div className="row">
        <div className="col-1 col-xl-hide"></div>
        <div className="col-4 col-xl-5 col-sm-4 offset-top05">
          <Link to="/veil" className="product-title-list">
            Veil <span>$5</span>
          </Link>
          <Link to="/veil">
            <img src="images/art_veil.jpg" alt="Veil" />
          </Link>
        </div>
        <div className="col-2 col-xl-2 col-sm-hide"></div>
        <div className="col-4 col-xl-5 col-sm-4 offset-top05">
          <Link to="/ascender" className="product-title-list">
            Ascender <span>$5</span>
          </Link>
          <Link to="/ascender">
            <img src="images/art_ascender.jpg" alt="Ascender" />
          </Link>
        </div>
        <div className="col-1 col-xl-hide"></div>
      </div>

      <div className="row offset-top05">
        <div className="col-4 col-sm-4"></div>
        <div className="col-4 col-xl-5 col-sm-4">
          <Link to="/the-city" className="product-title-list">
            The City <span>$5</span>
          </Link>
          <Link to="/the-city">
            <img src="images/art_the_city.jpg" alt="The City" />
          </Link>
        </div>
      </div>

      <div className="row offset-top05">
        <div className="col-4 col-lg-2 col-sm-hide"></div>
        <div className="col-4 col-xl-5 col-lg-5 col-sm-4">
          <p className="center">
            Thanks for browsing! Sign up to our email list to be notified of new
            artwork from Tabbied.
          </p>
          <form
            id="subForm"
            className="js-cm-form"
            action="https://www.createsend.com/t/subscribeerror?description="
            method="post"
            data-id="2BE4EF332AA2E32596E38B640E90561920AB37638DB92F082F211BBB2B09CF866FB0C13F74E8689D516C23793926414AD99E932B21D7FAE250CF2453E5DA179A"
          >
            <div className="subscribe">
              <input
                id="fieldEmail"
                placeholder="Type your email"
                name="cm-shksj-shksj"
                type="email"
                className="def-input js-cm-email-input"
                required
              />
              <button
                id="subscribe-button"
                className="js-cm-submit-button"
                type="submit"
              >
                Subscribe
              </button>
            </div>
          </form>
          <script
            type="text/javascript"
            src="https://js.createsend1.com/javascript/copypastesubscribeformlogic.js"
          ></script>
        </div>
      </div>
    </div>
  </section>
)

export default IndexPage
