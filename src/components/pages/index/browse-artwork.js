import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import Doodle from "../../common/Doodle"
import "./browse-artwork.scss"

const uuidv4 = require("uuid/v4")

export const query = graphql`
  query Artworks {
    allArtworksJson {
      nodes {
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
  }
`

class BrowseArtworkSection extends React.Component {
  constructor(props) {
    super(props)

    console.log(this)
  }

  render() {
    let artworks = this.props.data.allArtworksJson.nodes

    artworks = artworks.map(artwork => {
      console.log(artwork)

      if (artwork.frequency !== null) {
        artwork.code.style = artwork.code.style.replace(
          artwork.frequency.replace,
          artwork.frequency.default
        )

        artwork.code.doodle = artwork.code.doodle.replace(
          artwork.frequency.replace,
          artwork.frequency.default
        )
      }

      if (artwork.shadow !== null) {
        artwork.code.style = artwork.code.style.replace(
          artwork.shadow.replace,
          artwork.shadow.default ? artwork.shadow.value : ""
        )

        artwork.code.doodle = artwork.code.doodle.replace(
          artwork.shadow.replace,
          artwork.shadow.default ? artwork.shadow.value : ""
        )
      }

      return artwork
    })

    return (
      <div id="section-browse-artwork">
        <div className="gray-background">
          <div className="container">
            <div className="row">
              <div className="col-md-9">
                <span className="subheading">Browse artwork</span>
                <h3>
                  Choose from our curated designs of beautiful, minimalistic
                  patterns and illustrations.
                </h3>
              </div>
            </div>

            <div className="row">
              {artworks.map(artwork => (
                <div key={artwork.slug} className="col-md-4">
                  <Link to={`/artwork/${artwork.slug}`}>
                    <div className="doodle-wrapper">
                      <div className="doodle-frame">
                        <Doodle
                          name={artwork.id}
                          grid={artwork.grid.default}
                          colors={artwork.palette}
                          width={280}
                          height={420}
                          uuid={uuidv4()}
                          styleCode={artwork.code.style}
                          doodleCode={artwork.code.doodle}
                        />
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default props => (
  <StaticQuery
    query={query}
    render={data => <BrowseArtworkSection data={data} {...props} />}
  />
)
