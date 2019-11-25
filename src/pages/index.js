import React from "react"
import { Link } from "gatsby"
import "css-doodle"

import ColorPicker from "../components/common/ColorPicker"
import "./index.scss"
import usesDigitalImages from "../images/uses_digital_images.jpg"
import usesWallArt from "../images/uses_wall_art.jpg"
import usesStationery from "../images/uses_stationery.jpg"
import usesPackaging from "../images/uses_packaging.jpg"
import usesTextileApparel from "../images/uses_textile_apparel.jpg"
import usesEndlessPossibilities from "../images/uses_endless_possibilities.jpg"
import testimonialPerson from "../images/testimonial_person.png"

const HeroSection = () => {
  return (
    <div id="section-hero">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 order-2 order-md-1">
            <p className="hero-text">
              Customizable,
              <br /> CSS generated artwork
              <br /> for designers.
            </p>

            <div className="hero-actions">
              <Link className="btn">Make your art</Link>
            </div>
          </div>

          <div className="col-md-5 offset-md-1 order-1 order-md-2">
            <style>
              {`
            css-doodle {
              --color0: transparent;
              --color1: transparent;
              --color2: #00FFF3;
              --color3: #00A1FF;
              --color4: #FF8DFF;
              --color5: #FF007E;
              
              --rule: (
          @nth(1,2,3,4,5,6) {
            width: @calc(70 - @i() * 10)%;
            height:@calc(23.33 - @i() * 3.33)%;
            position:absolute;
            top: @calc(26.66 + @i() * 3.33)%;
            left:20%;
              border-top-left-radius: 320px;
              border-top-right-radius: 320px;
            background-image: linear-gradient(45deg, var(--color2), var(--color3));
            overflow:hidden;
            
            /* 0.2 could be 0.2, 0.4, 0.6, 0.8, 1.0 */
            -webkit-transform: scaleX(@pick(@rand(-0.2, -1), @rand(0.2, 1)));
            transform: scaleX(@pick(@rand(-0.2, -1), @rand(0.2, 1)));
            
            -webkit-transition: ease @rand(400ms, 1000ms);
            transition: ease @rand(400ms, 1000ms);
            z-index: @i();	
          }
          @nth(7,8,9,10,11,12) {
            width: @calc(70 - (@i() - 6) * 10)%;
            height:@calc(23.33 - (@i() - 6) * 3.33)%;
            position:absolute;
            top: 50%;
            left: @calc(10 + (@i() - 6) * 10)%;
              border-bottom-left-radius: 320px;
              border-bottom-right-radius: 320px;
            background-image: linear-gradient(45deg, var(--color4), var(--color5));
            overflow:hidden;

            /* 0.2 could be 0.2, 0.4, 0.6, 0.8, 1.0 */
            -webkit-transform: scaleX(@pick(@rand(-0.2, -1), @rand(0.2, 1)));
            transform: scaleX(@pick(@rand(-0.2, -1), @rand(0.2, 1)));

            -webkit-transition: ease @rand(400ms, 1000ms);
            transition: ease @rand(400ms, 1000ms);
            z-index: @i();	
          }
          /* Background */
          @nth(13) {
            position:absolute;
            background: linear-gradient(0deg, var(--color1) 50%, var(--color0) 50%);
            width:300%;
            left:-100%;
            top:-50%;
            height:200%;
          }

              );
            }`}
            </style>
            <css-doodle id="hero-doodle" use="var(--rule)">
              {`
            :doodle {
              @grid: 13x1/ 100%;
              overflow:hidden;
              text-align:center;
              box-sizing:border-box;
            }
            :container {
              transform: rotate(@p(0deg, -180deg, 180deg));
              -webkit-transition: ease 1000ms;
              transition: ease 1000ms;
            }
            `}
            </css-doodle>
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
                  <span className="highlight">
                    <span className="text">for free</span>
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div id="demo" className="row">
            <div className="col-md-5">
              <div id="demo-artwork">
                <img
                  src="/images/demo_artwork_placeholder.png"
                  alt="Demo Artwork"
                />
              </div>
            </div>

            <div className="col-md-4 offset-md-1">
              <div id="demo-controls">
                <h4>Try a quick demo</h4>
                <div>
                  <p>
                    Try picking your own colors and/or tap redraw to create a
                    unique design.
                  </p>
                  <div className="color-palette">
                    <ColorPicker color="#043C64" />
                    <ColorPicker color="#63BFFE" />
                    <ColorPicker color="#5AE4E1" />
                    <ColorPicker color="#FFC31B" />
                    <ColorPicker color="#FF256F" />
                  </div>
                  <button className="btn-redraw">Redraw</button>
                </div>
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
            <div className="col-md-9">
              <span className="subheading">Browse artwork</span>
              <h3>
                Choose from our curated designs of beautiful, minimalistic
                patterns and illustrations.
              </h3>
            </div>
          </div>

          <div className="row artwork-images-row">
            <div className="col-md-4">
              <Link to="/">
                <img
                  src="/images/artwork_the_city.png"
                  alt="The City Artwork"
                />
              </Link>
            </div>

            <div className="col-md-4">
              <Link to="/">
                <img
                  src="/images/artwork_super_zario.png"
                  alt="Super Zario Artwork"
                />
              </Link>
            </div>

            <div className="col-md-4">
              <Link to="/">
                <img src="/images/artwork_disque.png" alt="Disque Artwork" />
              </Link>
            </div>
          </div>

          <div className="row artwork-images-row">
            <div className="col-md-4">
              <Link to="/">
                <img
                  src="/images/artwork_symmetry.png"
                  alt="Symmetry Artwork"
                />
              </Link>
            </div>

            <div className="col-md-4">
              <Link to="/">
                <img src="/images/artwork_veil.png" alt="Veil Artwork" />
              </Link>
            </div>

            <div className="col-md-4">
              <Link to="/">
                <img
                  src="/images/artwork_placeholder.png"
                  alt="Artwork Placeholder"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const ExampleUsesSection = () => {
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

      <div className="example-use-image-wrapper">
        <img src={usesDigitalImages} alt="Digital" />
      </div>

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

      <div className="example-use-image-wrapper">
        <img src={usesWallArt} alt="Wall art" />
      </div>

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

      <div className="example-use-image-wrapper">
        <img src={usesStationery} alt="Stationery" />
      </div>

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

      <div className="example-use-image-wrapper">
        <img src={usesPackaging} alt="Packaging" />
      </div>

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

      <div className="example-use-image-wrapper">
        <img src={usesTextileApparel} alt="Textiles and apparel" />
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

        <div className="image-wrapper">
          <img src={usesEndlessPossibilities} alt="Endless possibilities" />
        </div>
      </div>
    </div>
  )
}

const TestimonialsSection = () => {
  return (
    <div id="section-testimonials">
      <div className="container">
        <div className="row">
          <div className="col-md-3 offset-md-1">
            <img src={testimonialPerson} alt="Jane Doe" />
          </div>

          <div className="col-md-5 offset-md-1">
            <h3>Testimonials</h3>
            <p>
              <blockquote>
                "So simple but magical. My mind is blown."
              </blockquote>

              <author>Don Relyea</author>

              <span className="role">Digital artist, inventor, speaker</span>
            </p>
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
                src="/images/built_by_01.png"
                alt="Built by Sy Hong and Ye Joo Park"
              />
            </div>
          </div>

          <div className="col-md-5 order-1 order-md-2">
            <h3>
              Built by design and <span class="nowrap">dev geeks</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              molestiae labore suscipit non, maxime praesentium rem tenetur
              debitis vitae.
            </p>

            <div className="people">
              <span className="names">Sy &amp; Ye Joo</span>
              <br />
              Founders
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-5 offset-md-3">
            <h3>A special thanks to</h3>

            <div className="people">
              <span className="names">Chuan Yuan</span>
              <br />
              Creator of CSS-Doodle
            </div>

            <p>
              Saepe beatae quis expedita praesentium est corporis ab distinctio,
              odio debitis suscipit voluptate aperiam deleniti eius ducimus modi
              rem accusantium aspernatur veritatis.
            </p>
          </div>

          <div className="col-md-4">
            <div className="image-wrapper">
              <img src="/images/built_by_02.png" alt="Thanks to Chuan Yuan" />
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
      <div className="black-background">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p className="message">
                Create your beautiful design in under a minute.
              </p>

              <Link to="/" className="btn white">
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
