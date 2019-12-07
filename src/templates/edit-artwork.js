import React from "react"
import ColorPicker from "../components/common/ColorPicker"
import "./edit-artwork.scss"

const classNames = require("classnames")

class EditArtwork extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      colors: [],
      grid: "6x4",
    }
  }

  setColor(index, hex) {
    console.log(`setColor(index=${index}, hex=${hex})`)
  }

  render() {
    const artworkData = this.props.data.artworksJson

    console.log(this.props)
    console.log(artworkData)

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
                  {artworkData.pallete.map(hex => (
                    <ColorPicker
                      handleColorChange={color => this.setColor(0, color)}
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

              {"sliders" in artworkData &&
                artworkData.sliders.forEach(slider => <h3>{slider.name}</h3>)}
            </div>

            <div className="col-md-6">Doodle here</div>
          </div>
        </div>
      </div>
    )
  }
}

export const query = graphql`
  query ArtworkById($id: String!) {
    artworksJson(id: { eq: $id }) {
      name
      pallete
      grid {
        options
        default
      }
      sliders {
        name
        default
        values
        labels
      }
      shadow {
        on
        off
      }
    }
  }
`

export default EditArtwork
