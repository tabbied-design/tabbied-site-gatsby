import React from "react"
import { Link } from "gatsby"

import Image from "../components/image"
import SEO from "../components/seo"

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
    </div>
  )
}

export default IndexPage
