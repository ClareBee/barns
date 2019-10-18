import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/SeoDetails"
import Header from "../components/Header"
import { css } from "@emotion/core"

const Gallery = props => {
  const barns = props.data.allBarnsJson.edges
  return (
    <React.Fragment>
      <SEO title="Gallery" />
      <Header title="Gallery" subtitle="Barns in the Yorkshire Dales"/>
      <div
        css={css`
          display: grid;
          grid-template-columns: 550px 1fr;
          grid-gap: 100px;
          margin: 75px 0;
          @media (max-width: 1300px) {
            grid-template-columns: 1fr;
            grid-gap: 50px;
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
                transition: all .25s ease-out;
                :hover {
                  opacity: .8;
                }
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
