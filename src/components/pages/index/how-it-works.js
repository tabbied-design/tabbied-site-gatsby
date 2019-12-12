import React from "react"
import ColorPicker from "../../common/ColorPicker"

import "./how-it-works.scss"
import Doodle from "../../common/Doodle"

const _ = require("lodash/core")
const uuidv4 = require("uuid/v4")
const demoDoodleCode = `
--randomColor: @p(var(--color2), var(--color3), var(--color4), var(--color5));

background: var(--color0);

@random(0.6) {
  :after {
    content: '';
    background: var(--randomColor);
    @size: @rand(8px, 64px);
    clip-path: @pick(polygon(50% 0%, 0% 100%, 100% 100%), circle(50% at 50% 50%), polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%));
    transform:rotate(@pick(0deg, 360deg));
    transition: transform ease @rand(200ms, 600ms);
  }
}

/*Frequency options of 0.2, 0.4, 0.6, 0.8, 1.0 */
@random(0.6) { 
  -webkit-box-shadow:0 -1px 0 var(--color1); 
  box-shadow:0 -1px 0 var(--color1); 
}

/*Frequency options of 0.2, 0.4, 0.6, 0.8, 1.0 */
@random(0.6) { 
  -webkit-box-shadow:-1px 0 0 var(--color1);  
  box-shadow:-1px 0 0 var(--color1);  
}
`

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
              <div className="col-md-5 col-lg-4">
                <div
                  id="demo-artwork"
                  style={{
                    backgroundColor: colors[0],
                    display: "flex",
                    justifyContent: "center",
                    padding: "40px 0",
                  }}
                >
                  <Doodle
                    name="demo-doodle"
                    colors={colors}
                    width={280}
                    height={420}
                    uuid={demoDoodleUuid}
                    doodleCode={demoDoodleCode}
                  />
                </div>
              </div>

              <div className="col-md-6 offset-md-1 col-lg-4 offset-lg-1">
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
                    <a
                      className="btn white btn-redraw"
                      onClick={() => this.redraw()}
                    >
                      Redraw
                    </a>
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
