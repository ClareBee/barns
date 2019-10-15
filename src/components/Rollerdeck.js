import React from "react"
import Img from "gatsby-image"
import { css } from "@emotion/core"

const Rollerdeck = ({ barnImages, selectImage }) => {
  return (
    <React.Fragment>
      {barnImages.map(image => (
        <div key={image.node.id} onClick={() => selectImage(image)}>
          <Img
            key={image.node.image.src.childImageSharp.fluid.src}
            fluid={image.node.image.src.childImageSharp.fluid}
          />
        </div>
      ))}
    </React.Fragment>
  )
}

export default Rollerdeck
