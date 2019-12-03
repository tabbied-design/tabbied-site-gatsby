import React from "react"
import PropTypes from "prop-types"
import "css-doodle"

class Doodle extends React.Component {
  constructor(props) {
    super(props)

    this.doodleRef = React.createRef()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.uuid !== this.props.uuid) {
      this.redraw()
    }
  }

  redraw() {
    this.doodleRef.current.update()
  }

  render() {
    const { colors, grid, width, widthHeightRatio } = this.props

    return (
      <div className="doodle-wrapper">
        <css-doodle id="demo-doodle" ref={this.doodleRef} grid={grid}>
          {`
                --color0: ${colors[0]};
                --color1: ${colors[1]};
                --color2: ${colors[2]};
                --color3: ${colors[3]};
                --color4: ${colors[4]};
                --color5: ${colors[5]};

                --randomColor: @p(var(--color2), var(--color3), var(--color4), var(--color5));

                background: var(--color0);
                
                :doodle {
                  width: ${width}px; 
                  height: ${width * widthHeightRatio}px; 
                }

                :container {
                }

                @random(0.6) {
                  :after {
                    content: '';
                    background: var(--randomColor);
                    @size: @rand(12px, 72px);
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
      </div>
    )
  }
}

Doodle.defaultProps = {
  colors: ["#ffffff", "#dddddd", "#cccccc", "#aaaaaa", "#999999", "#777777"],
  grid: "6x4",
  width: 320,
  height: 480,
  widthHeightRatio: 1.5,
}

Doodle.propTypes = {
  colors: PropTypes.array,
  grid: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  widthHeightRatio: PropTypes.number,
}

export default Doodle
