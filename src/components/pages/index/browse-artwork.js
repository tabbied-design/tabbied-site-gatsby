import React from "react"
import { Link } from "gatsby"
import "./browse-artwork.scss"

import galleryMixtape from "../../../images/gallery_mixtape.png"
import galleryOdessa from "../../../images/gallery_odessa.png"
import gallerySymmetry from "../../../images/gallery_symmetry.png"
import galleryZario from "../../../images/gallery_zario.png"

class BrowseArtworkSection extends React.Component {
  render() {
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
              <div className="col-md-8">
                <Link to={`/artwork/mixtape/`}>
                  <div
                    className="gallery-card"
                    style={{
                      backgroundColor: "white",
                      padding: "0 80px",
                      maxHeight: "600px",
                    }}
                  >
                    <img src={galleryMixtape} alt="Mixtape" />
                  </div>
                </Link>
              </div>

              <div className="col-md-4">
                <Link to={`/artwork/symmetry/`}>
                  <div
                    className="gallery-card full"
                    style={{ backgroundColor: "#abf2fd" }}
                  >
                    <img src={gallerySymmetry} alt="Symmetry" />
                  </div>
                </Link>
              </div>

              <div className="col-md-4">
                <Link to={`/artwork/zario/`}>
                  <div className="gallery-card full">
                    <img src={galleryZario} alt="Zario" />
                  </div>
                </Link>
              </div>

              <div className="col-md-4">
                <Link to={`/artwork/odessa/`}>
                  <div className="gallery-card">
                    <img src={galleryOdessa} alt="Odessa" />
                  </div>
                </Link>
              </div>

              <div className="col-md-4">
                <Link to={`/select-artwork/`}>
                  <div
                    className="gallery-card card-action"
                    style={{ backgroundColor: "transparent" }}
                  >
                    <span>View all</span>

                    <span className="icon-circle">
                      <i class="material-icons">arrow_right_alt</i>
                    </span>
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

export default BrowseArtworkSection
