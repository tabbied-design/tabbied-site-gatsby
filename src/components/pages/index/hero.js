import React from "react"
import { Link } from "gatsby"
import "css-doodle"

import "./hero.scss"

class HeroSection extends React.Component {
  constructor(props) {
    super(props)

    this.doodleRef = React.createRef()

    this.doodleAutoUpdateTimer = null
  }

  componentDidMount() {
    this.doodleAutoUpdateTimer = setInterval(() => {
      this.doodleRef.current.update()
    }, 2000)
  }

  componentWillUnmount() {
    if (this.doodleAutoUpdateTimer) {
      clearInterval(this.doodleAutoUpdateTimer)
    }
  }

  render() {
    return (
      <div id="section-hero">
        <div className="doodle-background">
          <div className="doodle-wrapper">
            <style>
              {`
              css-doodle#hero-doodle {
                --color0:#3d80d1;
                --color1:#2e3d52;
                --color2:#41d6f4;
                --color3:#d65ea6;
                --color4:#41d6f4;
                --color5:#d65ea6;
                
                /* set custom colors and inject z-index for the specific color to use for association */
                --randomColor: @p(var(--color1), var(--color2), var(--color3), var(--color4), var(--color5));
                --rule: (
                  /*Frequency options of 0.2, 0.4, 0.6, 0.8, 1.0 */
                  @random(0.2) { 
                    background: var(--randomColor);
                    -webkit-clip-path: @pick(circle(100% at 0 0), circle(100% at 100% 0), circle(100% at 100% 100%), circle(100% at 0 100%), circle(50% at 50% 50%), circle(25% at 50% 50%), polygon(0 0, 0% 100%, 100% 100%), polygon(100% 0, 0 0, 100% 100%), polygon(100% 0, 0 0, 0 100%), polygon(100% 100%, 100% 0, 0 100%));
                    clip-path: @pick(circle(100% at 0 0), circle(100% at 100% 0), circle(100% at 100% 100%), circle(100% at 0 100%), circle(50% at 50% 50%), circle(25% at 50% 50%), polygon(0 0, 0% 100%, 100% 100%), polygon(100% 0, 0 0, 100% 100%), polygon(100% 0, 0 0, 0 100%), polygon(100% 100%, 100% 0, 0 100%));
                    overflow:hidden;
                    
                    /* On or off option for displaying box shadows */
                    -webkit-box-shadow:0 0 @pick(0, 40)px rgba(0,0,0,0.2);
                    box-shadow:0 0 @pick(0, 40)px rgba(0,0,0,0.2);
            
                    -webkit-transition: ease @rand(200ms, 600ms);
                    transition: ease @rand(200ms, 600ms);
                  }
                  @random(0.05) {
                    width:100%;
                    height:100%;
                    overflow:hidden;
                    -webkit-clip-path: @pick(circle(100% at 0 0), circle(100% at 100% 0), circle(100% at 100% 100%), circle(100% at 0 100%));
                    clip-path: @pick(circle(100% at 0 0), circle(100% at 100% 0), circle(100% at 100% 100%), circle(100% at 0 100%));
                    background: repeating-linear-gradient(
                      @pick(45deg, 135deg),
                      var(--color0),
                      var(--color0) 5%,
                      var(--color1) 5%,
                      var(--color1) 10%
                    );
            
                  }
                );
              }`}
            </style>
            <css-doodle ref={this.doodleRef} id="hero-doodle" use="var(--rule)">
              {`
              :doodle {
                @grid: 7x14/ 100%;
                text-align:center;
                box-sizing:border-box;
              }
              :container {
                background: var(--color0);
                overflow:hidden;
              }
            `}
            </css-doodle>
          </div>
        </div>

        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-12">
              <div className="hero-content">
                <p className="hero-text">
                  Customizable, CSS generated
                  <br /> artwork for designers
                </p>

                <div className="hero-actions">
                  <Link to="/select-artwork/" className="btn green">
                    Make your art
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HeroSection
