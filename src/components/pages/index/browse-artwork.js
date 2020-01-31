import React from "react"
import { Link } from "gatsby"
import "./browse-artwork.scss"

import thumbZario from "../../../images/thumb_super_zario.png"
import thumbOdessa from "../../../images/thumb_odessa.png"
import thumbSymmetry from "../../../images/thumb_symmetry.png"
import thumbRadius from "../../../images/thumb_radius.png"
import thumbMixtape from "../../../images/thumb_mixtape.png"
import thumbBlossom from "../../../images/thumb_blossom.png"
import thumbVeil from "../../../images/thumb_veil.png"
import thumbEmpty from "../../../images/thumb_empty.png"

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
        </div>

        <div className="container">
          <div className="row no-gutters">
            <div className="col-md-3 col-sm-6">
              <Link to={`/artwork/zario/`}>
                <div className="gallery-card">
                  <h4 className="white">Super Zario</h4>
                  <img src={thumbZario} alt="zario" />
                </div>
              </Link>
            </div>

            <div className="col-md-3 col-sm-6">
              <Link to={`/artwork/odessa/`}>
                <div className="gallery-card">
                  <h4 className="white">Odessa</h4>
                  <img src={thumbOdessa} alt="odessa" />
                </div>
              </Link>
            </div>

            <div className="col-md-3 col-sm-6">
              <Link to={`/artwork/symmetry/`}>
                <div className="gallery-card">
                  <h4>Symmetry</h4>
                  <img src={thumbSymmetry} alt="Symmetry" />
                </div>
              </Link>
            </div>

            <div className="col-md-3 col-sm-6">
              <Link to={`/artwork/radius/`}>
                <div className="gallery-card">
                  <h4 className="white">Radius</h4>
                  <img src={thumbRadius} alt="Radius" />
                </div>
              </Link>
            </div>
          </div>

          <div className="row no-gutters">
            <div className="col-md-3 col-sm-6">
              <Link to={`/artwork/mixtape/`}>
                <div className="gallery-card">
                  <h4>Mixtape</h4>
                  <img src={thumbMixtape} alt="Mixtape" />
                </div>
              </Link>
            </div>

            <div className="col-md-3 col-sm-6">
              <Link to={`/artwork/blossom/`}>
                <div className="gallery-card">
                  <h4 className="white">Blossom</h4>
                  <img src={thumbBlossom} alt="Blossom" />
                </div>
              </Link>
            </div>
            <div className="col-md-3 col-sm-6">
              <Link to={`/artwork/veil/`}>
                <div className="gallery-card">
                  <h4>Veil</h4>
                  <img src={thumbVeil} alt="Veil" />
                </div>
              </Link>
            </div>

            <div className="col-md-3 col-sm-6">
              <Link to={`/select-artwork/`}>
                <div className="gallery-card card-action">
                  <img src={thumbEmpty} alt="View All" />
                  <div className="center">
                    <span className="text">View All &#8594;</span>
                  </div>
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
