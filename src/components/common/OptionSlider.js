import React from "react"
import PropTypes from "prop-types"
import Tooltip from "rc-tooltip"
import Slider from "rc-slider"
import "rc-slider/assets/index.css"
import "./OptionSlider.scss"

const Handle = Slider.Handle

const handle = props => {
  const { value, dragging, index, ...restProps } = props

  const displayValue = parseInt(value * 100) + "%"

  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={displayValue}
      visible={dragging}
      placement="top"
      key={index}
    >
      <Handle value={value} {...restProps} />
    </Tooltip>
  )
}

class OptionSlider extends React.Component {
  formatTip(v) {
    console.log(`formatTip(v=${v})`)
    const { displayUnit } = this.props

    if (displayUnit === "percentage") {
      return v * 100 + "%"
    }

    return v
  }

  render() {
    const { value, values, step, handleChange } = this.props

    return (
      <div className="artwork-option-slider-wrapper">
        <Slider
          min={values[0]}
          max={values[values.length - 1]}
          step={step}
          marks={{
            0.2: 20,
            0.4: 40,
            0.6: 60,
            0.8: 80,
            1: 100,
          }}
          onChange={handleChange}
          value={value}
          className="artwork-option-slider"
          handle={handle}
        />
      </div>
    )
  }
}

export default OptionSlider

OptionSlider.propTypes = {
  value: PropTypes.number,
  values: PropTypes.arrayOf(PropTypes.number),
  step: PropTypes.number,
  displayUnit: PropTypes.string,
  onChange: PropTypes.func,
}
