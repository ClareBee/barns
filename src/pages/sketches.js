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
    color: #627264;
    font-size: 1.5rem;
    border: none;
    cursor: pointer;
    :focus {
      outline:0;
    }
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
          css={css`
            background: hsla(0, 100%, 100%, 0.9);
          `}
        >
          <DialogContent
            css={css`
              padding: 5px 25px;
              border: 1px solid silver;
              border-radius: 5px;
              box-shadow: 0px 3px 15px rgba(0,0,0,0.3);
            `}
          >
          <div css={css`
            display: flex;
            flex-direction: row-reverse;
          `}>
            <Button
              type="button"
              onClick={() => setShowDialog(false)}
            >
              <span aria-hidden="true">&times;</span>
            </Button>
          </div>
            <Sketch sketch={selectedSketch} />
            <p>Some details about the sketch</p>

          </DialogContent>
        </DialogOverlay>
      )}
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
