import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

class Gallery extends React.Component {
  constructor(){
    super()
  }
  render(){
    const barns = this.props.data.allBarnsJson.edges
    return (
      <div>
        <SEO title="Gallery" />
        <h1>Gallery</h1>
        <div css={css`
          display: grid;
        `}>
        {barns.map(barn =>
          <Link
            to={barn.node.slug}
            key={barn.node.id}
            >
            <Img fluid={barn.node.image.src.childImageSharp.fluid}
               alt={barn.node.name}
               css={css`
                 max-width: 750px;
                 margin: 1.45rem;
                 border-radius: 5px;
               `}
               />
          </Link>
        )}
        </div>
        <Link to="/">Go back to the homepage</Link>
      </div>
    )
  }
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
