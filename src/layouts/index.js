import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { ThemeProvider } from "emotion-theming"
import styled from "@emotion/styled"
import { Global, css } from "@emotion/core"
import theme from "../utils/theme"
import SideNav from "../components/sidenav"
import SiteFooter from "../components/Footer"
import "../styles/layout.css"
import Transition from "../components/transition"

console.log("theme", theme)
const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 375px 1fr;
  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`
const PageBody = styled.main`
  padding: 40px 100px;
  @media (min-width: calc(1000px + 1px)) {
    grid-column-start: 2;
  }
  @media (max-width: 1000px) {
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
          <SideNav siteTitle={data.site.siteMetadata.title} />
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
