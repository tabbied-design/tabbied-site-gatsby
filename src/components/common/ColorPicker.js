import React from "react"
import styled from "styled-components"
import Pickr from "@simonwep/pickr"
import "@simonwep/pickr/dist/themes/monolith.min.css"

const ColorPickerBoxWrapper = styled.div`
  display: inline-block;
  width: 24px;
  height: 24px;
  margin-right: 32px;
  box-shadow: -3px 3px 6px 0 rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  border-radius: 2px;
`

class ColorPicker extends React.Component {
  constructor(props) {
    super(props)
  }

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
      <ColorPickerBoxWrapper>
        <div className="color-picker" style={{ backgroundColor: color }} />
      </ColorPickerBoxWrapper>
    )
  }
}

export default ColorPicker
