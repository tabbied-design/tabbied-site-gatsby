import React from "react"
import styled from "styled-components"

const ColorPickerBox = styled.div`
  display: inline-block;
  width: 24px;
  height: 24px;
`

const ColorPicker = ({ color }) => {
  return (
    <ColorPickerBox
      className="color-picker-box"
      style={{ backgroundColor: color }}
    />
  )
}

export default ColorPicker
