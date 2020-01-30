import React from "react"
import { Link } from "gatsby"
import "./browse-artwork.scss"

import galleryMixtape from "../../../images/thumb_mixtape.png"
import galleryOdessa from "../../../images/thumb_odessa.png"
import gallerySymmetry from "../../../images/thumb_symmetry.png"
import gallerySuperZario from "../../../images/thumb_super_zario.png"

class BrowseArtworkSection extends React.Component {
  render() {
    return (
      <div id="section-browse-artwork">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <span className="subheading">Browse artwork</span>
              <h3>
                Start designing with our curated artwork of
                <br />
                timeless patterns and illustrations.
              </h3>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <Link to={`/artwork/mixtape/`}>
                <div className="gallery-card">
                  <img src={galleryMixtape} alt="Mixtape" />
                </div>
              </Link>

              <Link to={`/artwork/symmetry/`}>
                <div className="gallery-card">
                  <img src={gallerySymmetry} alt="Symmetry" />
                </div>
              </Link>

              <Link to={`/artwork/zario/`}>
                <div className="gallery-card">
                  <img src={gallerySuperZario} alt="Zario" />
                </div>
              </Link>

              <Link to={`/artwork/odessa/`}>
                <div className="gallery-card">
                  <img src={galleryOdessa} alt="Odessa" />
                </div>
              </Link>

              <Link to={`/select-artwork/`}>
                <div className="gallery-card card-action">
                  <span>View all</span>

                  <span className="icon-circle">
                    <i className="material-icons">arrow_right_alt</i>
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BrowseArtworkSection
