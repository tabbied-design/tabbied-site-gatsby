import React from "react"
import { Link } from "gatsby"

const AboutPage = () => {
  return (
    <div class="container-xl project">
      <div class="row offset-top01">
        <div class="col-5 col-md-1 col-md-hide"></div>
        <div class="col-6 col-md-6 col-sm-4">
          <h2 class="min-title faint offset-bot-med">About</h2>
          <p class="med-headline">
            Tabbied allows you to generate your own unique wall art that blends
            in with your interior decor.
          </p>
        </div>
      </div>

      <div class="row">
        <div class="col col-10 col-md-8 col-center">
          <p>
            <img src="/images/about_hero_shot.jpg" alt="" />
          </p>
        </div>
      </div>

      <div class="row about-section-demo offset-top04">
        <div class="col-1 col-md-hide"></div>
        <div class="col-4 col-md-4 col-sm-4">
          <h3>What makes Tabbied unique?</h3>
          <p>
            Tabbied uses generated code that mostly determines the art form.
            Then, you choose the random placement of patterns which makes your
            artwork truly unique. It will almost be improbable to generate the
            exact, same art.
          </p>
          <p>
            <Link to="/" class="primary_btn autowidth">
              See All Artwork
            </Link>
          </p>
        </div>
        <div class="col-1 col-md-hide"></div>
        <div class="col-5 col-md-4 col-sm-4 video-container">
          <video autoplay loop muted playsinline>
            <source src="/images/twiddle_demo.mp4" type="video/mp4" />
            <source src="/images/twiddle_demo.ogg" type="video/ogg" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <div class="row offset-top08">
        <div class="col-1 fright col-md-hide"></div>
        <div class="col-4 fright col-md-4 col-sm-4">
          <h3>What else is neat about Tabbied?</h3>
          <p>
            Colors are an important component to your interior space, whether
            that be your home or your workplace. We know it's difficult finding
            an art piece that ties in with your desired color scheme of a room.
            Along with simple and timeless patterns, Tabbied lets you pick your
            colors for a custom artwork to compliment your joyful space.
          </p>
          <p class="offset-bot03">
            <a href="veil.html" class="primary_btn autowidth">
              Try Now
            </a>
          </p>
        </div>
        <div class="col-1 fright col-md-1"></div>
        <div class="col-4 fright col-md-3 col-sm-4">
          <p>
            <img src="/images/colorful_room.jpg" alt="" />
          </p>
        </div>
      </div>
      <div class="row offset-top04">
        <div class="col-6 col-md-6 col-sm-4 col-center">
          <h3>Other FAQs</h3>
          <h4 class="offset-bot-small">
            Is there going to be more selections of customizable art?
          </h4>
          <p>
            Yes, we will release more generated art with customization options.
            We also plan to be a marketplace for artists to create and sell
            their own digitally generated art.
          </p>
          <h4 class="offset-bot-small">What are digital downloads?</h4>
          <p>
            Digital downloads are files that you will download. No physical
            products will be shipped. Files are high resolution (300dpi) ready
            to use for good quality print.
          </p>
          <h4 class="offset-bot-small">Do you offer prints and/or frames?</h4>
          <p>
            No, we do not offer prints or frames at the moment. However, there
            are likely many printing services available around you at physical
            stores or even online. Stores such as Sam's Club or Costcos can
            print your artwork quickly at a bargain price with good quality,
            usually within 1 hour after you send them the digital file(s) for
            your artwork.
          </p>
          <h4 class="offset-bot-small">How do I use the files to print?</h4>
          <p>
            You can print it at home with your printer. For sizes outside the
            range of your printer's capabilities, you can take it to your local
            print shop.
          </p>
          <h4 class="offset-bot-small">What is aspect ratio?</h4>
          <p>
            An aspect ratio is the proportional relationship between the width
            and height of a rectangle. We offer our prints in different aspect
            ratios. That means you need to choose the one that best fits the
            frame you want to use. The most common aspect ratios for frames are
            4:5, 3:4, 2:3 and International Paper Size (A4, A3, A2, A1).
          </p>
          <h4 class="offset-bot-small">How can I contact Tabbied?</h4>
          <p>Email: hi@tabbied.com</p>
        </div>
      </div>
      <div class="row offset-top03">
        <div class="col-6 col-md-6 col-sm-4 col-center">
          <p class="min-title offset-bot-med">Thanks for visiting</p>
          <h3 class="med-headline">Happy Tabby!</h3>
          <p>
            <a href="../">
              <img class="logo-symbol" src="/images/symbol_dark_bg.png" />
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
