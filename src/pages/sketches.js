import React, { useState } from "react"
import { Link, graphql } from "gatsby"
import SEO from "../components/Seo"
import Rollerdeck from "../components/Rollerdeck"
import Sketch from '../components/Sketch'
import { DialogOverlay, DialogContent } from "@reach/dialog"
import '@reach/dialog/styles.css'


import { css } from "@emotion/core"
import styled from "@emotion/styled"

const Sketches = ({ data, location }) => {
  const [selectedSketch, setSelectedSketch] = useState(false)
  const [showDialog, setShowDialog] = useState(false)
  const barns = data.allBarnsJson.edges

  const selectImage = image => {
    setSelectedSketch(image)
    setShowDialog(true)
  }

  const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
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

      {showDialog &&

        <DialogOverlay
          style={{
            background: "hsla(0, 100%, 100%, 0.9)"
          }}>
          <DialogContent
            style={{
              padding: '25px',
              border: '1px solid grey',
              borderRadius: '5px',
              boxShadow: '0px 3px 15px rgba(0,0,0,0.3)',
            }}
          >
            <Sketch sketch={selectedSketch} />
            <p>Some details about the sketch</p>
            <button type="button" onClick={() => setShowDialog(false)}>
              Close
            </button>
          </DialogContent>
        </DialogOverlay>
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
