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

  getColorsString(colors) {
    let colorStyleVariables = ""

    colors.forEach((color, idx) => {
      colorStyleVariables += `--color${idx}: ${color};\n`
    })

    return colorStyleVariables
  }

  redraw() {
    this.doodleRef.current.update()
  }

  render() {
    const { name, colors, grid, width, height, doodleCode } = this.props
    const colorsString = this.getColorsString(colors)

    console.log(colorsString)

    return (
      <div className="doodle-wrapper">
        <style>{`
          css-doodle#${name} {
            ${colorsString}

            width: ${width}px; 
            height: ${height}px; 
          }
        `}</style>

        <css-doodle id={name} ref={this.doodleRef} grid={grid}>
          {`
            ${doodleCode}
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
