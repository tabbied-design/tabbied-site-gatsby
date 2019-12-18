import React from "react"
import Pickr from "@simonwep/pickr"
import "@simonwep/pickr/dist/themes/monolith.min.css"
import "../../styles/pickr.scss"

class ColorPicker extends React.Component {
  componentDidMount() {
    const { color, handleColorChange } = this.props

    // Simple example, see optional options for more configuration.
    const pickr = Pickr.create({
      el: ".color-picker",
      theme: "monolith",

      default: color,
      defaultRepresentation: "HEX",
      swatches: [],
      components: {
        // Main components
        preview: true,
        opacity: true,
        hue: true,

        // Input / output Options
        interaction: {
          hex: false,
          rgba: false,
          hsva: false,
          input: true,
          clear: false,
          save: true,
        },
      },
    })

    pickr.on("save", (color, instance) => {
      const hex = color.toHEXA().toString()

      handleColorChange(hex)
    })
  }

  render() {
    const { color } = this.props

    return (
      <div>
        <div className="color-picker" style={{ backgroundColor: color }} />
      </div>
    )
  }
}

export default ColorPicker
