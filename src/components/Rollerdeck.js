import React, { Component } from 'react';
import Img from 'gatsby-image';
import { css } from "@emotion/core"

const Rollerdeck = ({ barnImages, selectImage }) => {
  return (
    <React.Fragment>
      {barnImages.map(image => (
        <div onClick={() => selectImage(image)}>
        <Img
          css={css`display: flex; flex-direction: row;`}
          key={image.node.image.src.childImageSharp.fluid.src}
          fluid={image.node.image.src.childImageSharp.fluid}
        />
        </div>
      ))}
    </React.Fragment>
  );
}

export default Rollerdeck
