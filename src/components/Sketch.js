import React from "react"
import Img from "gatsby-image"
import { css } from "@emotion/core"

const Sketch = ({ sketch }) => (
  <Img
    css={css`
      border-radius: 5px;
    `}
    alt={sketch.node.name}
    fluid={sketch.node.image.src.childImageSharp.fluid}
  />
)

export default Sketch
