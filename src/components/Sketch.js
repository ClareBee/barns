import React, { Component } from "react"
import Img from "gatsby-image"
import styled from "@emotion/styled"

const Sketch = ({ sketch }) => {
  console.log("sketch", sketch)
  return <Img fluid={sketch.node.image.src.childImageSharp.fluid} />
}

export default Sketch
