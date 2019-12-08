import React from "react"
import ColorPicker from "../components/common/ColorPicker"
import Doodle from "../components/common/Doodle"
import ArtworkOptionSlider from "../components/common/ArtworkOptionSlider"
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
      colors: artworkData.pallete,
      grid: artworkData.grid.default,
      frequency:
        "frequency" in artworkData ? artworkData.frequency.default : null,
      shadow: "shadow" in artworkData ? artworkData.shadow.default : null,
    }
  }

  setColor(index, hex) {
    const clonedColors = _.clone(this.state.colors)
    clonedColors[index] = hex

    this.setState({
      colors: clonedColors,
    })

    this.redraw()
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

    if ("frequency" in artworkData) {
      styleCode = styleCode.replace(
        artworkData.frequency.replace,
        this.state.frequency
      )
    }

    if ("shadow" in artworkData) {
      doodleCode = doodleCode.replace(
        artworkData.shadow.replace,
        this.state.shadow
      )
    }

    return (
      <div id="section-edit-artwork">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <span>Step 2 of 2</span>
              <h2>Customize artwork</h2>

              {"pallete" in artworkData && (
                <div>
                  <h3>Pallete</h3>
                  {artworkData.pallete.map((hex, index) => (
                    <ColorPicker
                      key={"color" + index}
                      handleColorChange={color => this.setColor(index, color)}
                      color={hex}
                    />
                  ))}
                </div>
              )}

              {"grid" in artworkData && (
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

              {"frequency" in artworkData && (
                <div className="slider-wrapper">
                  <h3>Frequency</h3>
                </div>
              )}

              <h3>Frequency of shapes</h3>
              <ArtworkOptionSlider />

              <h3>Shadows</h3>

              <div>
                <div onClick={() => this.redraw()} className="btn white">
                  Redraw
                </div>
                <div
                  style={{
                    display: "inline-block",
                    width: "40px",
                    height: "8px",
                  }}
                />
                <div className="btn">Export art</div>
              </div>
            </div>

            <div className="col-md-6">
              <Doodle
                name={artworkData.slug}
                grid={this.state.grid}
                colors={this.state.colors}
                width={280}
                height={420}
                uuid={this.state.doodleUuid}
                styleCode={styleCode}
                doodleCode={doodleCode}
              />
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
      pallete
      slug
      frequency {
        default
        values
        labels
        replace
      }
      shadow {
        default
        values
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
