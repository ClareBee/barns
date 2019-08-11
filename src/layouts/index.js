import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
// import { ThemeProvider } from "emotion-theming"
import styled from "@emotion/styled"
import { Global, css } from "@emotion/core"
import theme from "../utils/theme"
import Header from "../components/header"
import SideNav from "../components/sidenav"
import "./layout.css"
import Transition from '../components/transition'

const Container = styled.div`
  display: grid;
  grid-template-columns: 375px 1fr;
  @media (max-width: 1400px}) {
    grid-template-columns: 320px 1fr;
  }
  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`
const PageBody = styled.main`
  padding: 1.45rem;
  @media (min-width: calc(1000px + 1px)) {
     grid-column-start: 2;
   }
`

const Footer = styled.footer`
  position: fixed;
  width: 375px;
  bottom: 0;
  a {
    text-decoration: none;
    &:hover {
      color: green;
    }
  }
  @media (max-width: 1200px) {
    width: 320px;
  }
  @media (max-width: 1000px) {
    position: relative;
    width: 100%;
  }
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
          color: black;
        }
      `} />
      <Container>
        <SideNav siteTitle={data.site.siteMetadata.title} />
        <PageBody>
          <Transition location={location || ''}>
            {children}
          </Transition>
        </PageBody>
        <Footer>
          &copy; 2019 by ClareBee.{' '}
          <a href="">GitHub</a>. Made by{' '}
          <a href="">Blah</a>.
        </Footer>
        </Container>
      </React.Fragment>
    )}
  />
)
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
export default Layout
