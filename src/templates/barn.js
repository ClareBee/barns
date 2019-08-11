import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import Img from "gatsby-image"
import Map from '../components/Map'

export default ({ data }) => {
  console.log('data', data)
  const barn = data.barnsJson
  return (
    <div>
      <h1>{barn.name}</h1>
      <Link to='/gallery'>Back to Gallery</Link>
      <Img
        fluid={barn.image.src.childImageSharp.fluid}
        alt={barn.name}
        css={css`
          max-width: 960px;
          margin: 1.45rem;
          border-radius: 5px;
        `}
      />
      <Map lat={barn.lat} long={barn.long} barnName={barn.name} allBarns={data.allBarns} zoom={14}/>
    </div>
  )
}
export const query = graphql`
  query($slug: String!) {
    barnsJson(slug: { eq: $slug }) {
      id
      name
      lat
      long
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
    allBarns: allBarnsJson {
      edges {
        node {
          id
          name
          lat
          long
        }
      }

    }
  }
`
