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
                <div id="demo-artwork">
                  <style>{`
                  css-doodle#demo-doodle {
                    /* Default colors */
                    --color0:#FFFFFF;
                    --color1:#FFA1C6;
                    --color2:#3FFFB2;
                    --color3:#3EECFF;
                    --color4:#1B4075;
                    --color5:#326DC9;
                
                    /* Random color generator variable */
                    --randomColor: @p(var(--color1), var(--color2), var(--color3), var(--color4), var(--color5));
                    --rule: (
                      /*Frequency options of 0.2, 0.4, 0.6, 0.8, 1.0 */	
                      @random (0.8) { 
                        background-color: var(--randomColor);
                        -webkit-clip-path: polygon(@pick(
                          '0 0, 101% 0, 101% 101%',
                          '0 0, 101% 0, 0 101%',
                          '0 0, 101% 101%, 0 101%',
                          '101% 0, 101% 101%, 0 101%'
                        ));
                        clip-path: polygon(@pick(
                          '0 0, 101% 0, 101% 101%',
                          '0 0, 101% 0, 0 101%',
                          '0 0, 101% 101%, 0 101%',
                          '101% 0, 101% 101%, 0 101%'
                        ));
                        -webkit-transition: .2s ease @rand(200ms);
                        transition: .2s ease @rand(200ms);
                        -webkit-transform: clip-path;
                        transform: clip-path;
                      }
                
                    );
                  }
                  `}</style>
                  <css-doodle
                    id="demo-doodle"
                    ref={this.doodleRef}
                    use="var(--rule)"
                  >{`
                  :doodle {
                    @grid: 12x8 / 100%;
                    width:320px;
                    height:480px;
                    overflow:hidden;
                    -webkit-box-shadow:0 0 5px #ddd;
                    box-shadow:0 0 5px #ddd;
                    position:absolute;
                    left:25%;
                    top:0;
                    margin-left:-160px;
                    text-align:center;
                    box-sizing:border-box
                  }
                  :container {
                    background:var(--color0);
                    overflow:hidden;
                  }
					`}</css-doodle>
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
