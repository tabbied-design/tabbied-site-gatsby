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
import "reset-css"
import "../styles/bootstrap-grid-custom.scss"
import "../styles/global.scss"

import Header from "./header"
import Footer from "./footer"

const Layout = ({ children, location }) => {
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
      <Header siteTitle={data.site.siteMetadata.title} location={location} />
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </FirebaseContext.Provider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
