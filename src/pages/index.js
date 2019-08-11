import React from "react"
import Img from "gatsby-image"
import SEO from "../components/seo"
import { css } from "@emotion/core"

const IndexPage = ({ data }) => (
  <div css={css`
    height: 100%;
    `}>
    <SEO title="Home" keywords={[`barns`, `Yorkshire`, `Dales`]} />
    <h1>Welcome</h1>
    <Img
      fluid={data.image.childImageSharp.fluid}
      alt="Dales Barn"
      css={css`
        max-width: 400px;
      `} />
  </div>
)

export const query = graphql`
  query {
    image: file(relativePath: { regex: "/barn_photo/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage
