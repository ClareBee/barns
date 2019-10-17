import React from "react"
import Img from "gatsby-image"

const Sketch = ({ sketch }) => {
  return <Img fluid={sketch.node.image.src.childImageSharp.fluid} />
}

export default Sketch
