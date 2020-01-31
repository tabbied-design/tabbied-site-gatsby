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
import thumbEmpty from "../images/thumb_empty.png"

class SelectArtwork extends React.Component {
  render() {
    return (
      <div id="page-select-artwork">
        <div className="gray-background">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2>First, pick a design from our artwork gallery.</h2>
              </div>
            </div>

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
                <Link to={`/artwork/fiesta/`}>
                  <div className="gallery-card">
                    <h4 className="white">Fiesta</h4>
                    <img src={thumbFiesta} alt="Fiesta" />
                  </div>
                </Link>
              </div>
            </div>

            <div className="row no-gutters">
              <div className="col-md-3 col-sm-6">
                <Link to={`/artwork/disque/`}>
                  <div className="gallery-card">
                    <h4>Disque</h4>
                    <img src={thumbDisque} alt="Disque" />
                  </div>
                </Link>
              </div>

              <div className="col-md-3 col-sm-6">
                <Link to={`/artwork/ring/`}>
                  <div className="gallery-card">
                    <h4 className="white">Ring</h4>
                    <img src={thumbRing} alt="Ring" />
                  </div>
                </Link>
              </div>
              <div className="col-md-3 col-sm-6">
                <Link to={`/artwork/trigram/`}>
                  <div className="gallery-card">
                    <h4 className="white">Trigram</h4>
                    <img src={thumbTrigram} alt="Trigram" />
                  </div>
                </Link>
              </div>

              <div className="col-md-3 col-sm-6">
                <Link to={`/artwork/bloks/`}>
                  <div className="gallery-card">
                    <h4>Bloks</h4>
                    <img src={thumbBloks} alt="Bloks" />
                  </div>
                </Link>
              </div>
            </div>

            <div className="row no-gutters">
              <div className="col-md-3 col-sm-6">
                <Link to={`/artwork/terrain/`}>
                  <div className="gallery-card">
                    <h4 className="white">Terrain</h4>
                    <img src={thumbTerrain} alt="Terrain" />
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
