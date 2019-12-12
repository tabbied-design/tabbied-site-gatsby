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
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-6 order-2 order-sm-1">
              <p className="hero-text">
                Customizable,
                <br /> CSS generated artwork
                <br /> for designers.
              </p>

              <div className="hero-actions">
                <Link to="/select-artwork/" className="btn">
                  Make your art
                </Link>
              </div>
            </div>

            <div className="col-sm-6 offset-sm-0 order-1 order-sm-2">
              <div className="doodle-wrapper">
                <style>
                  {`
                  css-doodle#hero-doodle {
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
                    -webkit-transform: scaleX(@pick(-1, 1));
                    transform: scaleX(@pick(-1, 1));
                    
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
                    -webkit-transform: scaleX(@pick(-1, 1));
                    transform: scaleX(@pick(-1, 1));

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
                <css-doodle
                  ref={this.doodleRef}
                  id="hero-doodle"
                  use="var(--rule)"
                >
                  {`
                  :doodle {
                    @grid: 13x1/ 100%;
                    overflow:hidden;
                    text-align:center;
                    box-sizing:border-box;
                  }
                  :container {
                    transform: rotate(@p(-45deg, 135deg));
                    -webkit-transition: ease 1000ms;
                    transition: ease 1000ms;
                  }
                  `}
                </css-doodle>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HeroSection
