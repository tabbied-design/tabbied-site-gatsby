/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { FirebaseContext, useAuth } from "../firebase"

import Header from "./header"
import "reset-css"
// import "bootstrap/dist/css/bootstrap-grid.css"
import "./bootstrap-grid-custom.scss"
import "./layout.scss"

const Layout = ({ children }) => {
  const { user, firebase, loading } = useAuth()

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  // Enable smooth scrolls on all internal anchor links
  if (typeof window !== "undefined") {
    // eslint-disable-next-line global-require
    require("smooth-scroll")('a[href*="#"]')
  }

  return (
    <FirebaseContext.Provider value={{ user, firebase, loading }}>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div>
        <main>{children}</main>
      </div>
    </FirebaseContext.Provider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
