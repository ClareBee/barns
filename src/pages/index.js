import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/SeoDetails"
import Header from "../components/Header"
import { css } from "@emotion/core"
import { withTheme } from "emotion-theming"

const Gallery = props => {
  console.log("props", props)
  const barns = props.data.allBarnsJson.edges
  return (
    <React.Fragment>
      <SEO title="Gallery" />
      <Header title="Gallery" subtitle="Barns in the Yorkshire Dales" />
      <div
        css={css`
          display: grid;
          grid-template-columns: 550px 1fr;
          grid-gap: 100px;
          margin: 75px 0;
          @media (max-width: ${props.theme.breakpoints.lg}) {
            grid-template-columns: 1fr;
            grid-gap: 50px;
          }
        `}
      >
        {barns.map(barn => (
          <React.Fragment key={barn.node.id}>
            <Link to={barn.node.slug} key={barn.node.id}>
              <Img
                fluid={barn.node.image.src.childImageSharp.fluid}
                alt={barn.node.name}
                css={css`
                  max-width: 750px;
                  border-radius: 5px;
                  box-shadow: ${props.theme.boxShadow};
                  transition: all 0.25s ease-out;
                  :hover {
                    opacity: 0.8;
                  }
                `}
              />
            </Link>
            <h3
              css={css`
                color: ${props.theme.ashGrey};
              `}
            >
              {barn.node.name}
            </h3>
          </React.Fragment>
        ))}
      </div>
    </React.Fragment>
  )
}

export default withTheme(Gallery)

export const query = graphql`
  query allPaintings {
    allBarnsJson(filter: { format: { regex: "/painting/" } }) {
      edges {
        node {
          id
          name
          format
          slug
          image {
            src {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
