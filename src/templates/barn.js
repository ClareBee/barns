import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
export default ({ data }) => {
  console.log('data', data)
  // const barn = data.imageSharp
  // console.log(barn)
  return (
    <Layout>
      <h1>{data.postsJson.name}</h1>
      <Img fluid={data.postsJson.image.src.childImageSharp.fluid}
           alt={data.postsJson.name}
           className="gallery-image"
           />
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
