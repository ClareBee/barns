import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

const PageHeader = styled.header`
  margin: 0 auto;
  margin-bottom: 1rem;
  background-color: #ECEBF6;
  padding: 1.45rem;
`
const headerLink = css`
  color: grey;
  text-decoration: none;
`
const menuLink = css`
  display: inline-block;
  margin-right: 1rem;
`
const ListLink = props => (
  <li css={menuLink}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const Header = ({ siteTitle }) => (
  <PageHeader>
    <h1 style={{ margin: 0 }}>
      <Link
        to="/"
        css={headerLink}
      >
        {siteTitle}
      </Link>
    </h1>
    <ul style={{ listStyle: `none`, float: `right` }}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/gallery">Gallery</ListLink>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
    </ul>
  </PageHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
