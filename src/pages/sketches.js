import React, { useState } from "react"
import { graphql } from "gatsby"
import SEO from "../components/SeoDetails"
import Header from "../components/Header"
import Rollerdeck from "../components/Rollerdeck"
import Sketch from "../components/Sketch"
import { DialogOverlay, DialogContent } from "@reach/dialog"
import "@reach/dialog/styles.css"

import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { withTheme } from "emotion-theming"

const Sketches = ({ data, location, theme }) => {
  const [selectedSketch, setSelectedSketch] = useState(false)
  const [showDialog, setShowDialog] = useState(false)
  const barns = data.allBarnsJson.edges

  const selectImage = image => {
    setSelectedSketch(image)
    setShowDialog(true)
  }

  const Button = styled.button`
    color: ${props => props.theme.colors.granite};
    font-size: 1.5rem;
    border: none;
    cursor: pointer;
    :focus {
      outline: 0;
    }
  `

  return (
    <React.Fragment>
      <SEO title="Sketches" />
      <Header title="Sketches" />
      <Rollerdeck barnImages={barns} selectImage={selectImage} />

      {showDialog && (
        <DialogOverlay
          css={css`
            background: hsla(0, 100%, 100%, 0.9);
          `}
        >
          <DialogContent
            css={css`
              padding: 5px 25px;
              border: 1px solid ${theme.colors.lightGrey};
              border-radius: 5px;
              box-shadow: ${theme.boxShadow};
            `}
          >
            <div
              css={css`
                display: flex;
                flex-direction: row-reverse;
              `}
            >
              <Button type="button" onClick={() => setShowDialog(false)}>
                <span aria-hidden="true">&times;</span>
              </Button>
            </div>
            <figure>
              <Sketch sketch={selectedSketch} />
              <figcaption><strong>{selectedSketch.node.name}</strong></figcaption>
            </figure>
          </DialogContent>
        </DialogOverlay>
      )}
    </React.Fragment>
  )
}

export default withTheme(Sketches)

export const query = graphql`
  query allSketches {
    allBarnsJson(filter: { format: { regex: "/sketch/" } }) {
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
