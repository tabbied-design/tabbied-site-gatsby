import React from "react"
import Two from "two.js"

class TwoTest extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      a: 3,
    }

    this.two = null
    this.backgroundRef = React.createRef()
  }

  componentWillMount() {}

  componentDidMount() {
    let params = {
      width: 800,
      height: 300,
      autostart: true,
    }

    var two = new Two(params).appendTo(this.backgroundRef.current)
    var rect = two.makeRectangle(two.width / 2, two.height / 2, 60, 60)
    two.bind("update", function() {
      rect.rotation += 0.004
    })
  }

  render() {
    return (
      <div
        style={{ maxWidth: "1440px", margin: "0 40px", background: "orange" }}
        ref={this.backgroundRef}
      >
        <div>Hello World</div>
      </div>
    )
  }
}

export default TwoTest
