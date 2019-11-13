import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { ThemeProvider } from "emotion-theming"
import styled from "@emotion/styled"
import { Global, css } from "@emotion/core"
import theme from "../utils/theme"
import "../styles/layout.css"
import Transition from "../components/transition"
import SideNav from "../components/sidenav"
import SiteFooter from "../components/Footer"

const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 375px 1fr;
  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`
const PageBody = styled.div`
  padding: 40px 100px;
  float: right;
  max-width: 70%;
  @supports(display: grid){
    max-width: 100%;
    clear: both;
    @media (min-width: calc(1000px + 1px)) {
      grid-column-start: 2;
    }
  }
  @media (max-width: 1000px) {
    float: none;
    max-width: 100%;
    padding: 5px 25px;
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
        logo: allImageSharp(filter: {fields: { slug: { regex: "/logo/"} }}) {
          nodes {
            id
            fixed(width: 80) {
              ...GatsbyImageSharpFixed
            }
            fields {
              slug
            }
          }
        }
      }
    `}
    render={data => (
      <ThemeProvider theme={theme}>
        <Global
          styles={css`
            h1,
            a {
              color: ${theme.colors.granite};
            }
            a {
              transition: all 0.3s ease-in-out;
            }
            a:hover {
              color: ${theme.colors.mountbattenPink};
            }
            h2,
            h3 {
              color: ${theme.colors.ashGrey};
            }
            h4,
            h5,
            p,
            label {
              color: ${theme.colors.olive};
            }
          `}
        />
        <Container>
          <SideNav
            siteTitle={data.site.siteMetadata.title}
            logo={data.logo.nodes[0].fixed}
          />
          <PageBody>
            <Transition location={location || ""}>{children}</Transition>
          </PageBody>
          <SiteFooter />
        </Container>
      </ThemeProvider>
    )}
  />
)
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
export default Layout
