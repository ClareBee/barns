import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"
import Rollerdeck from "../components/Rollerdeck"
import { css } from "@emotion/core"

const Sketches = ({ data}) => {
  const barns = data.allBarnsJson.edges
  return (
    <div>
      <SEO title="Sketches" />
      <h1>Sketches</h1>
      <Rollerdeck barnImages={barns} />
      <Link to="/">Go back to the homepage</Link>
    </div>
  )
}



export default Sketches

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
