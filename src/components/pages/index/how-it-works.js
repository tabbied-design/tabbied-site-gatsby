import React from "react"
import ColorPicker from "../../common/ColorPicker"

import "./how-it-works.scss"
import Doodle from "../../common/Doodle"

const _ = require("lodash/core")

const uuidv4 = require("uuid/v4")

class HowItWorksSection extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      demoDoodleUuid: uuidv4(),
      colors: [
        "#367DE7",
        "#70A8FF",
        "#FFA1C6",
        "#1B4075",
        "#3FFFB2",
        "#3EECFF",
      ],
    }
  }

  redraw() {
    this.setState({
      demoDoodleUuid: uuidv4(),
    })
  }

  setColor(index, hex) {
    // do nothing at the moment
    console.log(`setColor(index=${index}, hex=${hex})`)

    const clonedColors = _.clone(this.state.colors)
    clonedColors[index] = hex

    this.setState({
      colors: clonedColors,
    })

    this.redraw()
  }

  render() {
    const { demoDoodleUuid, colors } = this.state

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
              <div className="col-md-4">
                <div
                  id="demo-artwork"
                  style={{
                    backgroundColor: colors[0],
                    display: "flex",
                    justifyContent: "center",
                    padding: "30px 0",
                  }}
                >
                  <Doodle colors={colors} uuid={demoDoodleUuid} />
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
                      <ColorPicker
                        handleColorChange={color => this.setColor(0, color)}
                        color={colors[0]}
                      />
                      <ColorPicker
                        handleColorChange={color => this.setColor(1, color)}
                        color={colors[1]}
                      />
                      <ColorPicker
                        handleColorChange={color => this.setColor(2, color)}
                        color={colors[2]}
                      />
                      <ColorPicker
                        handleColorChange={color => this.setColor(3, color)}
                        color={colors[3]}
                      />
                      <ColorPicker
                        handleColorChange={color => this.setColor(4, color)}
                        color={colors[4]}
                      />
                      <ColorPicker
                        handleColorChange={color => this.setColor(5, color)}
                        color={colors[5]}
                      />
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
