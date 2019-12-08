import React from "react"
import Tooltip from "rc-tooltip"
import Slider from "rc-slider"
import "rc-slider/assets/index.css"
import "./ArtworkOptionSlider.scss"

const Handle = Slider.Handle

const handle = props => {
  const { value, dragging, index, ...restProps } = props
  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={value}
      visible={dragging}
      placement="top"
      key={index}
    >
      <Handle value={value} {...restProps} />
    </Tooltip>
  )
}

class ArtworkOptionSlider extends React.Component {
  render() {
    return (
      <div className="artwork-option-slider-wrapper">
        <Slider
          min={20}
          max={100}
          step={20}
          marks={{
            20: 20,
            40: 40,
            60: 60,
            80: 80,
            100: 100,
          }}
          defaultValue={60}
          className="artwork-option-slider"
          handle={handle}
        />
      </div>
    )
  }
}

export default ArtworkOptionSlider
