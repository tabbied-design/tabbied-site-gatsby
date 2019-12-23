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

    this.mediaQueries = {
      xs: {
        doodleWidth: 280,
        query: "(max-width: 747px)",
      },
      sm: {
        doodleWidth: 600,
        query: "(min-width: 748px) and (max-width: 991px)",
      },
      md: {
        doodleWidth: 280,
        query: "(min-width: 992px) and (max-width: 1299px)",
      },
      lg: {
        doodleWidth: 360,
        query: "(min-width: 1300px)",
      },
    }

    console.log(artworkData)

    this.state = {
      doodleUuid: uuidv4(),
      colors: artworkData.palette !== null ? artworkData.palette : [],
      grid: artworkData.grid.default,
      frequency:
        artworkData.frequency !== null ? artworkData.frequency.default : null,
      shadow: artworkData.shadow !== null ? artworkData.shadow.default : null,
      roundedCorners:
        artworkData.roundedCorners !== null
          ? artworkData.roundedCorners.default
          : null,
      screenSize: Object.keys(this.mediaQueries)[0],
    }

    this.mediaQueryLists = []
    this.matchMediaEventHandlers = []

    this.setFrequency = this.setFrequency.bind(this)
    this.setShadow = this.setShadow.bind(this)
    this.setRoundedCorners = this.setRoundedCorners.bind(this)
  }

  componentDidMount() {
    Object.entries(this.mediaQueries).forEach(([screenSize, queryInfo]) => {
      let mediaQueryList = window.matchMedia(queryInfo.query)

      // Initialize
      if (mediaQueryList.matches) {
        this.setState({
          screenSize: screenSize,
        })
      }

      let eventHandler = e => {
        if (e.matches) {
          this.setState({
            screenSize: screenSize,
          })
        }
      }

      mediaQueryList.addListener(eventHandler)

      this.mediaQueryLists.push(mediaQueryList)
      this.matchMediaEventHandlers.push(eventHandler)
    })
  }

  componentWillUnmount() {
    this.mediaQueryLists.forEach((mql, index) => {
      mql.removeListener(this.matchMediaEventHandlers[index])
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

  setRoundedCorners(isActive) {
    this.setState(
      {
        roundedCorners: isActive,
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
    const doodleWidth = this.mediaQueries[this.state.screenSize].doodleWidth

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

    if (artworkData.shadow !== null) {
      if (this.state.shadow === true) {
        styleCode = styleCode
          .split(artworkData.shadow.replace)
          .join(artworkData.shadow.code)

        doodleCode = doodleCode
          .split(artworkData.shadow.replace)
          .join(artworkData.shadow.code)
      } else {
        styleCode = styleCode.split(artworkData.shadow.replace).join("")
        doodleCode = doodleCode.split(artworkData.shadow.replace).join("")
      }
    }

    if (artworkData.roundedCorners !== null) {
      const re = new RegExp(artworkData.roundedCorners.replace, "g")

      if (this.state.roundedCorners === true) {
        styleCode = styleCode
          .split(artworkData.roundedCorners.replace)
          .join(artworkData.roundedCorners.code)
        doodleCode = doodleCode
          .split(artworkData.roundedCorners.replace)
          .join(artworkData.roundedCorners.code)
      } else {
        styleCode = styleCode.split(artworkData.roundedCorners.replace).join("")
        doodleCode = doodleCode
          .split(artworkData.roundedCorners.replace)
          .join("")
      }
    }

    console.log(styleCode)

    return (
      <div id="section-edit-artwork">
        <div className="container">
          <div className="row">
            <div className="col-md-2">
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

              {artworkData.roundedCorners !== null && (
                <>
                  <h3>Rounded Corners</h3>
                  <ToggleSwitch
                    isActive={this.state.roundedCorners}
                    handleChange={this.setRoundedCorners}
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
                    width={doodleWidth}
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
      roundedCorners {
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
