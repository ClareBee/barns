import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import Header from "../components/header"
import SideNav from "../components/sidenav"
import "./layout.css"
import Transition from '../components/transition'

const PageBody = styled.div`
  padding: 0 1.45rem;
  padding-top: 0;
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
      <div>
        <Header siteTitle={data.site.siteMetadata.title} />
        <PageBody>
          <Transition location={location}>
            {children}
          </Transition>
        </PageBody>
      </div>
    )}
  />
)
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
export default Layout
