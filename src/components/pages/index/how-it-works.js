import React from "react"
import ColorPicker from "../../common/ColorPicker"

import "./how-it-works.scss"

class HowItWorksSection extends React.Component {
  constructor(props) {
    super(props)

    this.doodleRef = React.createRef()
  }

  componentDidMount() {
    /*
    setInterval(() => {
      this.doodleRef.current.update()
    }, 2000)
    */
  }

  redraw() {
    this.doodleRef.current.update()
  }

  render() {
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
                <div id="demo-artwork">Demo Artwork Here</div>
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
                    <button
                      className="btn-redraw"
                      onClick={() => this.redraw()}
                    >
                      Redraw
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HowItWorksSection
