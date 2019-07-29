import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import { Global, css } from "@emotion/core"
import Header from "../components/header"
import SideNav from "../components/sidenav"
import "./layout.css"
import Transition from '../components/transition'

const PageBody = styled.main`
  padding: 1.45rem;
  margin-left: 375px;
  min-height: 100vh;
  padding-left: 150px;
`
const Layout = ({ children, location }) => (
  <StaticQuery
    query={graphql`query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }`}
    render={data => (
      <React.Fragment>
      <Global styles={css`
        p {
          color: red;
        }
      `} />
        <SideNav siteTitle={data.site.siteMetadata.title} />
        <PageBody>
          <Transition location={location}>
            {children}
          </Transition>
        </PageBody>
      </React.Fragment>
    )}
  />
)
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
export default Layout
