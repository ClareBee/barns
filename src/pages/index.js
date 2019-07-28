import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

const IndexPage = ({ data }) => (
  <div css={css`
    height: 100%;
    `}>
    <SEO title="Home" keywords={[`barns`, `Yorkshire`, `Dales`]} />
    <h1>Welcome</h1>
    <p>Now go build something great.</p>
      <Img
        fluid={data.image.childImageSharp.fluid}
        alt="Dales Barn"
        css={css`
          width: 400px;
        `} />
  </div>
)

export const query = graphql`
  query {
    image: file(relativePath: { regex: "/newbybrn/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage
