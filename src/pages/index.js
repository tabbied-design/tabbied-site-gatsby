import React from "react"
import { Link } from "gatsby"
import "css-doodle"

import HeroSection from "../components/pages/index/hero"
import HowItWorksSection from "../components/pages/index/how-it-works"
import BrowseArtworkSection from "../components/pages/index/browse-artwork"
import "./index.scss"
import testimonialPerson from "../images/testimonial_person.png"
import wallArtImage from "../images/uses_wall_art.jpg"
import notebookImage from "../images/uses_notebook.jpg"
import tshirtImage from "../images/uses_tshirt.jpg"
import packagingImage from "../images/uses_packaging.jpg"
import devicesImage from "../images/uses_devices.jpg"
import builtByPeopleImage from "../images/built_by_people.png"

const ExampleUsesSection = () => {
  return (
    <div id="section-example-uses">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <span className="subheading">Example uses</span>
            <h3>Use your design for just about anything</h3>
          </div>
        </div>
      </div>

      <div className="container container-fluid-on-mobile">
        <div className="row no-gutters">
          <div className="col-md-4 col-6">
            <div className="image-wrapper">
              <img src={wallArtImage} alt="Wall Art" />
            </div>
          </div>

          <div className="col-md-4 col-6">
            <div className="image-wrapper">
              <img src={notebookImage} alt="Stationery" />
            </div>
          </div>

          <div className="col-md-4 col-6">
            <div className="image-wrapper">
              <img src={tshirtImage} alt="Tshirt" />
            </div>
          </div>

          <div className="col-md-4 col-6">
            <div className="image-wrapper">
              <img src={packagingImage} alt="Packaging" />
            </div>
          </div>
          <div className="col-md-8">
            <div className="image-wrapper">
              <img src={devicesImage} alt="Devices" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const TestimonialsSection = () => {
  return (
    <div id="section-testimonials">
      <div className="background">
        <div className="rectangle-1"></div>
        <div className="circle-1"></div>
        <div className="circle-2"></div>
        <div className="circle-3"></div>
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-3 offset-md-1">
            <img src={testimonialPerson} alt="Jane Doe" />
          </div>

          <div className="col-md-5 offset-md-1">
            <h3>Testimonials</h3>

            <blockquote>
              <p>"So simple but magical. My mind is blown."</p>

              <span className="author">Don Relyea</span>

              <span className="role">Digital artist, inventor, speaker</span>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  )
}

const BuiltBySection = () => {
  return (
    <div id="section-built-by">
      <div className="container">
        <div className="row">
          <div className="col-md-7 order-2 order-md-1">
            <div className="image-wrapper">
              <img
                src={builtByPeopleImage}
                alt="Built by Sy Hong and Ye Joo Park"
              />
            </div>
          </div>

          <div className="col-md-5 order-1 order-md-2">
            <div className="text-header">
              <span className="subheading">Creators of Tabbied</span>
              <h3>
                Built by design and <span className="nowrap">dev geeks</span>
              </h3>
            </div>
            <div className="text-content">
              <p>
                We aim to build simple design tools that energize your
                creativity. Tabbied was initially developed as a tool for making
                wall art, but we quickly realized that it could be used for many
                other purposes. We're very excited to see what you can make
                using our platform.
              </p>

              <p>
                We also like to give a special thanks to{" "}
                <Link className="link-underline">Chuan Yuan</Link> from China.
                Chuan is the developer of{" "}
                <Link className="link-underline">CSS-Doodle</Link>, which made
                Tabbied possible. Thanks to all the supporters of both
                CSS-Doodle and Tabbied. You are inspiring us to keep on making.
              </p>

              <div className="people">
                <span className="names">Sy &amp; Ye Joo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const TryForFreeSection = () => {
  return (
    <div id="section-try-for-free">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="center">
              <div className="message-wrapper">
                <p className="message">
                  Create your beautiful design in under a minute.
                </p>
              </div>

              <Link to="/select-artwork" className="btn green">
                Make your art
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const SubmitArtworkSection = () => {
  return (
    <div id="section-submit-artwork">
      <div className="background">
        <div className="inner-background">
          <div className="circle-5" />
          <div className="circle-6" />
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <h3>Want to submit an original artwork?</h3>

            <p>
              If you got some CSS skills, you can create and submit your own
              customizable artwork that could be featured here on Tabbied.
            </p>

            <Link to="/" className="btn">
              Learn more
            </Link>
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
      <ExampleUsesSection />
      <TestimonialsSection />
      <BuiltBySection />
      <TryForFreeSection />
      <SubmitArtworkSection />
    </div>
  )
}

export default IndexPage
