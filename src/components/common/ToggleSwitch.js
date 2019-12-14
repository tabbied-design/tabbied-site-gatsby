import React from "react"
import "./ToggleSwitch.scss"

const uuidv4 = require("uuid/v4")

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props)

    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(event) {
    const target = event.target
    const value = target.type === "checkbox" ? target.checked : target.value

    this.props.handleChange(value)
  }

  render() {
    const { isActive } = this.props
    const checkboxId = uuidv4()

    return (
      <div>
        <input
          id={checkboxId}
          type="checkbox"
          checked={isActive}
          onChange={this.handleInputChange}
          className="toggle-checkbox"
        />
        <label htmlFor={checkboxId} className="toggle-switch" />
      </div>
    )
  }
}

export default ToggleSwitch
