import React from "react"
import { Link } from "gatsby"
import "./select-artwork.scss"
import thumbBloks from "../images/thumb_bloks.png"
import thumbBlossom from "../images/thumb_blossom.png"
import thumbDisque from "../images/thumb_disque.png"
import thumbFiesta from "../images/thumb_fiesta.png"
import thumbMixtape from "../images/thumb_mixtape.png"
import thumbOdessa from "../images/thumb_odessa.png"
import thumbRadius from "../images/thumb_radius.png"
import thumbRing from "../images/thumb_ring.png"
import thumbSymmetry from "../images/thumb_symmetry.png"
import thumbTerrain from "../images/thumb_terrain.png"
import thumbTrigram from "../images/thumb_trigram.png"
import thumbVeil from "../images/thumb_veil.png"
import thumbZario from "../images/thumb_super_zario.png"

class SelectArtwork extends React.Component {
  render() {
    return (
      <div id="page-select-artwork">
        <div className="gray-background">
          <div className="container">
            <div className="row">
              <div className="col-md-12 align-center">
                <span className="subheading">Step 1 of 2</span>
                <h2>Customize artwork</h2>
              </div>
            </div>

            <div className="row">
              <div className="col-md-8">
                <Link to={`/artwork/mixtape/`}>
                  <div
                    className="gallery-card"
                    style={{
                      padding: "0 80px",
                    }}
                  >
                    <img src={thumbMixtape} alt="Mixtape" />
                  </div>
                </Link>
              </div>

              <div className="col-md-4">
                <Link to={`/artwork/symmetry/`}>
                  <div
                    className="gallery-card full"
                    style={{ backgroundColor: "#abf2fd" }}
                  >
                    <img src={thumbSymmetry} alt="Symmetry" />
                  </div>
                </Link>
              </div>

              <div className="col-md-4">
                <Link to={`/artwork/zario/`}>
                  <div className="gallery-card full">
                    <img src={thumbZario} alt="Zario" />
                  </div>
                </Link>
              </div>

              <div className="col-md-4">
                <Link to={`/artwork/odessa/`}>
                  <div className="gallery-card">
                    <img src={thumbOdessa} alt="Odessa" />
                  </div>
                </Link>
              </div>

              <div className="col-md-4">
                <Link to={`/artwork/disco/`}>
                  <div className="gallery-card">
                    <img src={thumbDisque} alt="Disco" />
                  </div>
                </Link>
              </div>

              <div className="col-md-4">
                <Link to={`/artwork/ring/`}>
                  <div
                    className="gallery-card"
                    style={{ backgroundColor: "#9effd8" }}
                  >
                    <img src={thumbRing} alt="Ring" />
                  </div>
                </Link>
              </div>

              <div className="col-md-8">
                <Link to={`/artwork/fiesta/`}>
                  <div
                    className="gallery-card"
                    style={{
                      padding: "0 80px",
                    }}
                  >
                    <img src={thumbFiesta} alt="Fiesta" />
                  </div>
                </Link>
              </div>

              <div className="col-md-4">
                <Link to={`/artwork/blossom/`}>
                  <div
                    className="gallery-card"
                    style={{
                      padding: "0 64px",
                    }}
                  >
                    <img src={thumbBlossom} alt="Blossom" />
                  </div>
                </Link>
              </div>

              <div className="col-md-4">
                <Link to={`/artwork/terrain/`}>
                  <div
                    className="gallery-card"
                    style={{
                      padding: "0 64px",
                    }}
                  >
                    <img src={thumbTerrain} alt="Terrain" />
                  </div>
                </Link>
              </div>

              <div className="col-md-4">
                <Link to={`/artwork/radius/`}>
                  <div
                    className="gallery-card"
                    style={{
                      padding: "0 64px",
                    }}
                  >
                    <img src={thumbRadius} alt="Radius" />
                  </div>
                </Link>
              </div>

              <div className="col-md-4">
                <Link to={`/artwork/veil/`}>
                  <div
                    className="gallery-card"
                    style={{
                      padding: "0 64px",
                    }}
                  >
                    <img src={thumbVeil} alt="Veil" />
                  </div>
                </Link>
              </div>

              <div className="col-md-4">
                <Link to={`/artwork/trigram/`}>
                  <div
                    className="gallery-card"
                    style={{
                      padding: "0 64px",
                    }}
                  >
                    <img src={thumbTrigram} alt="Trigram" />
                  </div>
                </Link>
              </div>

              <div className="col-md-4">
                <Link to={`/artwork/bloks/`}>
                  <div
                    className="gallery-card"
                    style={{
                      padding: "0 64px",
                    }}
                  >
                    <img src={thumbBloks} alt="Bloks" />
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

export default SelectArtwork
