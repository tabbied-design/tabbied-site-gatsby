import React from "react"
import "css-doodle"

class DoodleTest extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="doodle-wrapper">
              <style>{`
                  css-doodle {
                    --color0:#FFFFFF;
                    --color1:#CED3D9;
                    --color2:#FF3D8B;
                    --color3:#3FFFB2;
                    --color4:#275AA6;
                    --color5:#3EECFF;
                    /* set custom colors and inject z-index for the specific color to use for association */
                    --randomColor: @p(var(--color2), var(--color3), var(--color4), var(--color5));
                    --rule: (
                      /*Frequency options of 0.2, 0.4, 0.6, 0.8, 1.0 */
                      @random(0.6) { 
                        :after {
                        content: '';
                        background: var(--randomColor);
                        @size: @rand(16%, 96%);
                        -webkit-clip-path: @pick(polygon(50% 0%, 0% 100%, 100% 100%), circle(50% at 50% 50%), polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%));
                        clip-path: @pick(polygon(50% 0%, 0% 100%, 100% 100%), circle(50% at 50% 50%), polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%));
                        -webkit-transform:rotate(@pick(0deg, 360deg));
                        transform:rotate(@pick(0deg, 360deg));
                        -webkit-transition: transform ease @rand(200ms, 600ms);
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
                      
                    );
                  }
                  `}</style>
              <css-doodle
                id="demo-doodle"
                ref={this.doodleRef}
                use="var(--rule)"
              >{`
                  :doodle {
                    @grid: 6x4 / 100%;
                    width:320px;
                    height:480px;
                    overflow:hidden;
                    -webkit-box-shadow:0 0 5px #ddd;
                    text-align:center;
                    box-sizing:border-box
                  }
                  :container {
                    background: var(--color0);
                    overflow:hidden;
                  }
					`}</css-doodle>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DoodleTest
