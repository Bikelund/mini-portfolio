import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `beige`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0, display: `inline-block`, }}>
        <Link
          to="/"
          style={{
            color: `tomato`,
            textDecoration: `none`,
            fontSize: `1.5rem`,
            margin: 0,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <ul style={{ listStyle: `none`, float: `right`, marginTop: `18px` }}>
        <Link to="/" style={{
          textDecoration: `none`,
          color: `black`,
          paddingRight: `10px`,
        }}>Home</Link>
        <Link to="/page-2/" style={{
          textDecoration: `none`,
          color: `black`,
          paddingRight: `10px`,
        }}>Works</Link>
        <Link to="/contact/" style={{
          textDecoration: `none`,
          color: `black`,
          paddingRight: `10px`,
        }}>Contact</Link>
      </ul>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
