import React from "react"
import { Link } from "gatsby"
import "./select-artwork.scss"
import galleryBloks from "../images/gallery_bloks.png"
import galleryBlossom from "../images/gallery_blossom.png"
import galleryDisco from "../images/gallery_disco.png"
import galleryFiesta from "../images/gallery_fiesta.png"
import galleryMixtape from "../images/gallery_mixtape.png"
import galleryOdessa from "../images/gallery_odessa.png"
import galleryRadius from "../images/gallery_radius.png"
import galleryRing from "../images/gallery_ring.png"
import gallerySymmetry from "../images/gallery_symmetry.png"
import galleryTerrain from "../images/gallery_terrain.png"
import galleryTrigram from "../images/gallery_trigram.png"
import galleryVeil from "../images/gallery_veil.png"
import galleryZario from "../images/gallery_zario.png"

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
                <Link to={`/artwork/disco/`}>
                  <div className="gallery-card">
                    <img src={galleryDisco} alt="Disco" />
                  </div>
                </Link>
              </div>

              <div className="col-md-4">
                <Link to={`/artwork/ring/`}>
                  <div className="gallery-card">
                    <img src={galleryRing} alt="Ring" />
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
                    <img src={galleryFiesta} alt="Fiesta" />
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
                    <img src={galleryBlossom} alt="Blossom" />
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
                    <img src={galleryTerrain} alt="Terrain" />
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
                    <img src={galleryRadius} alt="Radius" />
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
                    <img src={galleryVeil} alt="Veil" />
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
                    <img src={galleryTrigram} alt="Trigram" />
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
                    <img src={galleryBloks} alt="Bloks" />
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
