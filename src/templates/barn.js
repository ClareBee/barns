import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Map from '../components/Map'

import Layout from "../components/layout"
export default ({ data }) => {
  console.log('data', data)
  const barn = data.postsJson
  return (
    <Layout>
      <h1>{barn.name}</h1>
      <Img
        fluid={barn.image.src.childImageSharp.fluid}
        alt={barn.name}
        className="gallery-image"
      />
      <Map lat={barn.lat} long={barn.long} />
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
    postsJson(slug: { eq: $slug }) {
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
  }
`
