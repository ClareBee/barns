import React, { useState } from "react"
import { Link, graphql } from "gatsby"
import SEO from "../components/SeoDetails"
import Rollerdeck from "../components/Rollerdeck"
import Sketch from "../components/Sketch"
import { DialogOverlay, DialogContent } from "@reach/dialog"
import "@reach/dialog/styles.css"

import { css } from "@emotion/core"
import styled from "@emotion/styled"

const Sketches = ({ data, location }) => {
  const [selectedSketch, setSelectedSketch] = useState(false)
  const [showDialog, setShowDialog] = useState(false)
  const barns = data.allBarnsJson.edges

  const selectImage = image => {
    console.log('clicked', image)
    setSelectedSketch(image)
    setShowDialog(true)
  }

  const Button = styled.button`
    background-color: #627264;
    border-radius: 5px;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);
    color: white;
    margin: 15px 0 0 5px;
    padding: 5px 25px;
  `

  return (
    <React.Fragment>
      <SEO title="Sketches" />
      <h1>Sketches</h1>
      <Rollerdeck
        barnImages={barns}
        selectImage={selectImage}
      />

      {showDialog && (
        <DialogOverlay
          style={{
            background: "hsla(0, 100%, 100%, 0.9)",
          }}
        >
          <DialogContent
            style={{
              padding: "25px",
              border: "1px solid grey",
              borderRadius: "5px",
              boxShadow: "0px 3px 15px rgba(0,0,0,0.3)",
            }}
          >
            <Sketch sketch={selectedSketch} />
            <p>Some details about the sketch</p>
            <Button type="button" onClick={() => setShowDialog(false)}>
              Close
            </Button>
          </DialogContent>
        </DialogOverlay>
      )}
      <Link to="/">Go back to the gallery</Link>
    </React.Fragment>
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
