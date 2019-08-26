import React, { useState } from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"
import Rollerdeck from "../components/Rollerdeck"
import Sketch from '../components/Sketch'
import { css } from "@emotion/core"
import styled from "@emotion/styled"

const Sketches = ({ data}) => {
  const [selectedSketch, setSelectedSketch] = useState(data.allBarnsJson.edges[0])
  const barns = data.allBarnsJson.edges

  const selectImage = image => {
    setSelectedSketch(image)
  }

  const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 10px;
    max-height: 150px;
    overflow: hidden;
    margin-bottom: 10px;
    `

  return (
    <div>
      <SEO title="Sketches" />
      <h1>Sketches</h1>
      <Container>
        <Rollerdeck barnImages={barns} selectImage={selectImage} css={css`grid-area: deck;`}/>
      </Container>
      {selectedSketch &&
        <Sketch sketch={selectedSketch} css={css`width: 80%;`}/>
      }
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
                fluid {
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
