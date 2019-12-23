import React from "react"
import { Link, graphql } from "gatsby"
import ColorPicker from "../components/common/ColorPicker"
import Doodle from "../components/common/Doodle"
import OptionSlider from "../components/common/OptionSlider"
import ToggleSwitch from "../components/common/ToggleSwitch"
import "./edit-artwork.scss"

const _ = require("lodash/core")
const uuidv4 = require("uuid/v4")
const classNames = require("classnames")

class EditArtwork extends React.Component {
  constructor(props) {
    super(props)

    const artworkData = props.data.artworksJson

    this.state = {
      doodleUuid: uuidv4(),
      colors: artworkData.palette !== null ? artworkData.palette : [],
      grid: artworkData.grid.default,
      frequency:
        artworkData.frequency !== null ? artworkData.frequency.default : null,
      shadow: artworkData.shadow !== null ? false : null,
      screenSize: null,
    }

    this.matchMediaEventListeners = []

    this.setFrequency = this.setFrequency.bind(this)
    this.setShadow = this.setShadow.bind(this)
  }

  componentDidMount() {
    let listener

    /*
    $grid-breakpoints: (
      xs: 0,
      sm: 748px,
      md: 992px,
      lg: 1300px,
    );
    */

    const mediaQueries = {
      xs: "(max-width: 747px)",
      sm: "(min-width: 748px) and (max-width: 991px)",
      md: "(min-width: 992px) and (max-width: 1299px)",
      lg: "(min-width: 1300px)",
    }

    Object.entries(mediaQueries).forEach(([screenSize, mediaQuery]) => {
      console.log(`${screenSize}: ${mediaQuery}`)

      let matchMedia = window.matchMedia(mediaQuery)

      if (matchMedia.matches) {
        this.setState({
          screenSize: screenSize,
        })
      }

      let listener = matchMedia.addEventListener("change", e => {
        if (e.matches) {
          this.setState({
            screenSize: screenSize,
          })
        }
      })

      this.matchMediaEventListeners.push(listener)
    })

    console.log(this.matchMediaEventListeners)
  }

  componentWillUnmount() {
    this.matchMediaEventListeners.forEach(listener => {
      window.removeEventListener(listener)
    })
  }

  setColor(index, hex) {
    const clonedColors = _.clone(this.state.colors)
    clonedColors[index] = hex

    this.setState(
      {
        colors: clonedColors,
      },
      () => {
        this.redraw()
      }
    )
  }

  setFrequency(frequency) {
    this.setState(
      {
        frequency,
      },
      () => {
        this.redraw()
      }
    )
  }

  setShadow(isActive) {
    this.setState(
      {
        shadow: isActive,
      },
      () => {
        this.redraw()
      }
    )
  }

  redraw() {
    this.setState({
      doodleUuid: uuidv4(),
    })
  }

  render() {
    const artworkData = this.props.data.artworksJson

    let styleCode = artworkData.code.style
    let doodleCode = artworkData.code.doodle

    if (artworkData.frequency !== null) {
      styleCode = styleCode.replace(
        artworkData.frequency.replace,
        this.state.frequency
      )

      doodleCode = doodleCode.replace(
        artworkData.frequency.replace,
        this.state.frequency
      )
    }

    if (artworkData.shadow !== null && this.state.shadow) {
      styleCode = styleCode.replace(
        artworkData.shadow.replace,
        artworkData.shadow.code
      )

      doodleCode = doodleCode.replace(
        artworkData.shadow.replace,
        artworkData.shadow.code
      )
    }

    return (
      <div id="section-edit-artwork">
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              {this.state.screenSize}
              <div className="sidebar">
                <Link to="/select-artwork/" className="btn-back">
                  <i className="material-icons">keyboard_backspace</i>
                </Link>
              </div>
            </div>

            <div className="col-md-5 order-2 order-md-1 align-self-center">
              <span className="subheading">Step 2 of 2</span>
              <h2>Customize artwork</h2>

              {artworkData.palette !== null && (
                <div>
                  <h3>Palette</h3>
                  <div className="colors">
                    {artworkData.palette.map((hex, index) => (
                      <ColorPicker
                        key={"color" + index}
                        handleColorChange={color => this.setColor(index, color)}
                        color={hex}
                      />
                    ))}
                  </div>
                </div>
              )}

              {artworkData.grid !== null && (
                <div className="box-options-selector">
                  <h3>Rows and columns</h3>
                  {artworkData.grid.options.map(grid => (
                    <div
                      key={grid}
                      className={classNames("option", {
                        selected: this.state.grid === grid,
                      })}
                      onClick={() => {
                        this.setState({
                          grid,
                        })
                      }}
                    >
                      {grid}
                    </div>
                  ))}
                </div>
              )}

              {artworkData.frequency !== null && (
                <>
                  <h3>Frequency of shapes</h3>
                  <OptionSlider
                    value={this.state.frequency}
                    values={artworkData.frequency.values}
                    step={artworkData.frequency.step}
                    displayUnit={artworkData.frequency.displayUnit}
                    handleChange={this.setFrequency}
                  />
                </>
              )}

              {artworkData.shadow !== null && (
                <>
                  <h3>Shadows</h3>
                  <ToggleSwitch
                    isActive={this.state.shadow}
                    handleChange={this.setShadow}
                  />
                </>
              )}

              <div className="buttons-wrapper">
                <div onClick={() => this.redraw()} className="btn white">
                  Redraw
                </div>
                <div
                  style={{
                    display: "inline-block",
                    width: "32px",
                    height: "8px",
                  }}
                />
                <div className="btn">Export art</div>
              </div>
            </div>

            <div
              className="col-md-5 order-1 order-md-2  align-self-center"
              style={{
                backgroundColor: "transparent",
              }}
            >
              <div className="doodle-wrapper">
                <div
                  className="doodle-frame"
                  style={{
                    backgroundColor: this.state.colors[0],
                  }}
                >
                  <Doodle
                    name={artworkData.slug}
                    grid={this.state.grid}
                    colors={this.state.colors}
                    width={360}
                    mdWidth={320}
                    widthHeightRatio={1.5}
                    uuid={this.state.doodleUuid}
                    styleCode={styleCode}
                    doodleCode={doodleCode}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export const query = graphql`
  query ArtworkById($id: String!) {
    artworksJson(id: { eq: $id }) {
      id
      name
      description
      grid {
        default
        options
      }
      palette
      slug
      frequency {
        default
        values
        step
        displayUnit
        replace
      }
      shadow {
        default
        code
        replace
      }
      code {
        style
        doodle
      }
    }
  }
`

export default EditArtwork
