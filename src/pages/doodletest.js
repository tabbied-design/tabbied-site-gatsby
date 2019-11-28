import React from "react"
import "css-doodle"

class DoodleTest extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      grid: "6x4",
    }

    this.doodleRef = React.createRef()
  }

  changeGrid() {
    this.setState({
      grid: "12x8",
    })
  }

  redraw() {
    this.doodleRef.current.update()
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <style>
              {`
              css-doodle#demo-doodle {
                --color0: #ff6655;
                --color1: #CED3D9;
              }
              `}
            </style>
            <css-doodle
              id="demo-doodle"
              ref={this.doodleRef}
              grid={this.state.grid}
            >
              {`
                --color0: #FFFFFF;
                --color1: #CED3D9;
                --color2: #FF3D8B;
                --color3: #3FFFB2;
                --color4: #275AA6;
                --color5: #3EECFF;

                --randomColor: @p(var(--color2), var(--color3), var(--color4), var(--color5));
                
                :doodle {
                  width: 320px; 
                  height: 480px; 
						      box-shadow:0 0 5px #ddd;
                }

                :container {
                }

                @random(0.6) {
                  :after {
                    content: '';
                    background: var(--randomColor);
                    @size: @rand(20px);
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
              `}
            </css-doodle>
            <div onClick={() => this.redraw()}>Redraw</div>
          </div>
        </div>
      </div>
    )
  }
}

export default DoodleTest
