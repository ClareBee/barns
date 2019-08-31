import React, { Component } from 'react';
import Img from 'gatsby-image';
import { css } from "@emotion/core"

const Rollerdeck = ({ barnImages, selectImage }) => {
  console.log(barnImages)
  return (
    <React.Fragment>
      {barnImages.map(image => (
        <div
        key={image.node.image.src.childImageSharp.fluid.src}
        onClick={() => selectImage(image)}>
        <Img
          key={image.node.image.src.childImageSharp.fluid.src}
          fluid={image.node.image.src.childImageSharp.fluid}
        />
        </div>
      ))}
    </React.Fragment>
  );
}

export default Rollerdeck
