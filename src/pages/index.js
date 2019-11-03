import React from "react"
import { Link } from "gatsby"

import Image from "../components/image"
import SEO from "../components/seo"
import ColorPicker from "../components/common/ColorPicker"

import "./index.scss"

const HeroSection = () => {
  return (
    <div id="section-hero">
      <div className="container">
        <div className="row">
          <div className="col-md-12 hero-background">
            <p className="hero-text">
              Customizable,
              <br /> CSS generated artwork
              <br /> for designers.
            </p>

            <div className="hero-actions">
              <a className="btn-action">Try for free</a>
              <a className="btn-watch-video">Watch the video</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const HowItWorksSection = () => {
  return (
    <div id="section-how-it-works">
      <div className="gray-background">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3>How it works</h3>
            </div>
          </div>

          <div id="steps" className="row">
            <div className="col-md-4">
              <div className="step-box">
                <div className="step-number one">
                  <span>1</span>
                </div>
                <p>Pick a design from our growing collection of artwork</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="step-box">
                <div className="step-number two">
                  <span>2</span>
                </div>
                <p>Customize colors and choose settings for your design</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="step-box">
                <div className="step-number three">
                  <span>3</span>
                </div>
                <p>
                  Download your customized design{" "}
                  <span className="highlight">for free</span>
                </p>
              </div>
            </div>
          </div>

          <div id="demo" className="row">
            <div className="col-md-4 offset-1">
              <div id="demo-artwork">
                <img
                  src="/images/demo_artwork_placeholder.png"
                  alt="Demo Artwork"
                />
              </div>
            </div>

            <div className="col-md-4 offset-1">
              <div id="demo-controls">
                <h4>A quick demo</h4>
                <p>
                  <img
                    src="/images/demo_arrow.png"
                    alt="Try changing these colors!"
                    className="demo-arrow"
                  />
                  Try picking your own colors and/or tap redraw to create a
                  unique design.
                  <div className="color-palette">
                    <ColorPicker color="#043C64" />
                    <ColorPicker color="#63BFFE" />
                    <ColorPicker color="#5AE4E1" />
                    <ColorPicker color="#FFC31B" />
                    <ColorPicker color="#FF256F" />
                  </div>
                  <a className="btn-redraw">Redraw</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const BrowseArtworkSection = () => {
  return (
    <div id="section-browse-artwork">
      <div className="gray-background">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <span className="subheading">Browse artwork</span>
              <h3>
                Choose from our growing library of beautiful, minimalistic
                patterns and illustrations.
              </h3>
            </div>
          </div>

          <div className="row artwork-images-row">
            <div className="col-md-4">
              <Link to="/">
                <img
                  src="/images/artwork_the_city.png"
                  alt="The City Artwork Image"
                />
              </Link>
            </div>

            <div className="col-md-4">
              <Link to="/">
                <img
                  src="/images/artwork_super_zario.png"
                  alt="Super Zario Artwork Image"
                />
              </Link>
            </div>

            <div className="col-md-4">
              <Link to="/">
                <img
                  src="/images/artwork_disque.png"
                  alt="Disque Artwork Image"
                />
              </Link>
            </div>
          </div>

          <div className="row artwork-images-row">
            <div className="col-md-4">
              <Link to="/">
                <img
                  src="/images/artwork_symmetry.png"
                  alt="Symmetry Artwork Image"
                />
              </Link>
            </div>

            <div className="col-md-4">
              <Link to="/">
                <img src="/images/artwork_veil.png" alt="Veil Artwork Image" />
              </Link>
            </div>

            <div className="col-md-4">
              <Link to="/">
                <img
                  src="/images/artwork_placeholder.png"
                  alt="Artwork Placeholder Image"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const ExampleUses = () => {
  return (
    <div id="section-example-uses">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <span className="subheading">Example uses</span>
            <h3>
              Timeless art perfect
              <br /> for all your needs
            </h3>
          </div>
        </div>
      </div>

      <div id="uses-digital-images">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h4>
                <span className="number">01</span>
                Digital Images
              </h4>
            </div>
          </div>
        </div>
      </div>

      <div id="uses-wall-art">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h4>
                <span className="number">02</span>
                Wall art
              </h4>
            </div>
          </div>
        </div>
      </div>

      <div id="uses-stationery">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h4>
                <span className="number">03</span>
                Stationery
              </h4>
            </div>
          </div>
        </div>
      </div>

      <div id="uses-packaging">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h4>
                <span className="number">04</span>
                Packaging
              </h4>
            </div>
          </div>
        </div>
      </div>

      <div id="uses-textiles-and-apparel">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h4>
                <span className="number">05</span>
                Textiles and apparel
              </h4>
            </div>
          </div>
        </div>
      </div>

      <div id="uses-endless-possibilities">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h4>Endless possibilities</h4>
              <p>
                Wallpaper, digital images, packaging, posters, t-shirts,
                fabrics…
                <br />
                What can you make with Tabbied?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const IndexPage = () => {
  return (
    <div id="page-main">
      <HeroSection />
      <HowItWorksSection />
      <BrowseArtworkSection />
      <ExampleUses />
    </div>
  )
}

export default IndexPage
