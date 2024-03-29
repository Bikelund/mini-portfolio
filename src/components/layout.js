/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
          position: "relative",
          minHeight: "80vh",
        }}
      >
        <main
        style={{
          paddingBottom: "2.5rem",
        }}>{children}</main>
        <footer
        style={{
          padding: "20px 0",
          textAlign: "center",

          position: "absolute",
          bottom: "0",
          width: "100%",
        }}>
          © Bikelund {new Date().getFullYear()}, Visit my
          {` `}
          <a href="https://github.com/Bikelund">Github</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
