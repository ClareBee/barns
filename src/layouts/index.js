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
const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2.5rem;
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
        <Footer>
          &copy; 2019 by ClareBee.{' '}
          <a href="">GitHub</a>. Made by{' '}
          <a href="">Blah</a>.
        </Footer>
      </div>
    )}
  />
)
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
export default Layout
