import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

const PageHeader = styled.header`
  position: fixed;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 1rem;
  background-color: #ecebf6;
  padding: 1.5rem;
  z-index: 10;
`
const headerLink = css`
  color: grey;
  text-decoration: none;
  &:hover {
    color: #533747;
  }
`

const Header = ({ siteTitle }) => (
  <PageHeader>
    <h1>
      <Link to="/" css={headerLink}>
        {siteTitle}
      </Link>
    </h1>
  </PageHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
