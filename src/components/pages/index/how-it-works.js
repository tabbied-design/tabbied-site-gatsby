import React from "react"
import "./how-it-works.scss"
import demoVideoPlaceholder from "../../../images/demo_video_placeholder.jpg"

class HowItWorksSection extends React.Component {
  render() {
    return (
      <div id="section-how-it-works">
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
        </div>
        <div className="container container-fluid-on-mobile">
          <div className="row">
            <div className="col-12">
              <div style={{ marginTop: "40px" }}>
                <img src={demoVideoPlaceholder} alt="Demo Video Placeholder" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HowItWorksSection
