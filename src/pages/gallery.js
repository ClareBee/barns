import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/SeoDetails"
import { css } from "@emotion/core"

const Gallery = props => {
  const barns = props.data.allBarnsJson.edges
  return (
    <div>
      <SEO title="Gallery" />
      <h1>Gallery</h1>
      <div
        css={css`
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-gap: 75px;
          @media (max-width: 1500px) {
            grid-template-columns: 600px;
          }
          @media (max-width: 1000px) {
            grid-template-columns: 1fr;
          }
        `}
      >
        {barns.map(barn => (
          <Link to={barn.node.slug} key={barn.node.id}>
            <Img
              fluid={barn.node.image.src.childImageSharp.fluid}
              alt={barn.node.name}
              css={css`
                max-width: 750px;
                /* margin: 1.45rem; */
                border-radius: 5px;
                /* -webkit-box-shadow: 4px 6px 8px 1px rgba(219,216,219,1); */
                /* -moz-box-shadow: 4px 6px 8px 1px rgba(219,216,219,1); */
                box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.3);
              `}
            />
          </Link>
        ))}
      </div>
      <Link to="/">Go back to the homepage</Link>
    </div>
  )
}

export default Gallery

export const query = graphql`
  query {
    allBarnsJson {
      edges {
        node {
          id
          name
          slug
          image {
            src {
              childImageSharp {
                fluid(maxWidth: 300) {
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
