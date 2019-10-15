import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
// import { ThemeProvider } from "emotion-theming"
import styled from "@emotion/styled"
import { Global, css } from "@emotion/core"
import theme from "../utils/theme"
import Header from "../components/Heading"
import SideNav from "../components/Sidenav"
import "./layout.css"
import Transition from "../components/Transition"

const Container = styled.div`
  height: 100vh;
  display: grid;
  background-colour: #FDFDFF;
  grid-template-columns: 375px 1fr;
  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`
const PageBody = styled.main`
  background-colour: #FDFDFF;
  padding: 2.45rem;
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
      color: ;
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
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <React.Fragment>
        <Global
          styles={css`
            h1, a {
              color: #627264;
            }
            a {
              transition: all .3s ease-in-out;
            }
            a:hover {
              color: #A2708A;
            }
            h2, h3 {
              color: #B3B2B6;
            }
            h4, h5, p, label {
              color: #3A3C3F;
            }
          `}
        />
        <Container>
          <SideNav siteTitle={data.site.siteMetadata.title} />
          <PageBody>
            <Transition location={location || ""}>{children}</Transition>
          </PageBody>
          <Footer>
            &copy; 2019 by ClareBee. <a href="">GitHub</a>. Made by{" "}
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
