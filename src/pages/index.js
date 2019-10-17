import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/SeoDetails"
import { css } from "@emotion/core"

const Gallery = props => {
  const barns = props.data.allBarnsJson.edges
  return (
    <React.Fragment>
      <SEO title="Gallery" />
      <h1>Gallery</h1>
      <div
        css={css`
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-gap: 75px;
          margin-bottom: 75px;
          @media (max-width: 1500px) {
            grid-template-columns: 600px 1fr;
          }
          @media (max-width: 1300px) {
            grid-template-columns: 1fr;
          }
        `}
      >
        {barns.map(barn => (
          <React.Fragment>
          <Link to={barn.node.slug} key={barn.node.id}>
            <Img
              fluid={barn.node.image.src.childImageSharp.fluid}
              alt={barn.node.name}
              css={css`
                max-width: 750px;
                border-radius: 5px;
                box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.3);
              `}
            />
          </Link>
          <p css={css`
            color: #B3B2B6;
            font-weight: bold;
          `}>{barn.node.name}</p>
          </React.Fragment>
        ))}
      </div>
      <Link to="/" css={css`
        margin-top: 10px;
      `}>Go back to the gallery</Link>
    </React.Fragment>
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
