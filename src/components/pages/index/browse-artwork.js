import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import Doodle from "../../common/Doodle"
import "./browse-artwork.scss"

import galleryBloks from "../../../images/gallery_bloks.png"
import galleryBlossom from "../../../images/gallery_blossom.png"
import galleryDisco from "../../../images/gallery_disco.png"
import galleryFiesta from "../../../images/gallery_fiesta.png"
import galleryMixtape from "../../../images/gallery_mixtape.png"
import galleryOdessa from "../../../images/gallery_odessa.png"
import galleryRadius from "../../../images/gallery_radius.png"
import galleryRing from "../../../images/gallery_ring.png"
import gallerySymmetry from "../../../images/gallery_symmetry.png"
import galleryTerrain from "../../../images/gallery_terrain.png"
import galleryTrigram from "../../../images/gallery_trigram.png"
import galleryVeil from "../../../images/gallery_veil.png"
import galleryZario from "../../../images/gallery_zario.png"

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
              <div className="col-md-4">
                <Link to={`/artwork/mixtape/`}>
                  <div className="gallery-image-wrapper">
                    <img src={galleryMixtape} alt="Mixtape" />
                  </div>
                </Link>
              </div>

              <div className="col-md-4">
                <Link to={`/artwork/symmetry/`}>
                  <div className="gallery-image-wrapper">
                    <img src={gallerySymmetry} alt="Symmetry" />
                  </div>
                </Link>
              </div>

              <div className="col-md-4">
                <Link to={`/artwork/zario/`}>
                  <div className="gallery-image-wrapper">
                    <img src={galleryZario} alt="Zario" />
                  </div>
                </Link>
              </div>

              <div className="col-md-4">
                <Link to={`/artwork/odessa/`}>
                  <div className="gallery-image-wrapper">
                    <img src={galleryOdessa} alt="Odessa" />
                  </div>
                </Link>
              </div>

              <div className="col-md-4">
                <Link to={`/artwork/terrain/`}>
                  <div className="gallery-image-wrapper">
                    <img src={galleryTerrain} alt="Terrain" />
                  </div>
                </Link>
              </div>
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
