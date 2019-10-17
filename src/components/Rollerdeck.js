import React from "react"
import Img from "gatsby-image"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 15px;
  margin-bottom: 10px;
  @media (max-width: 1300px) {
    grid-template-columns: repeat(2, 1fr);
  }
`
const Rollerdeck = ({ barnImages, selectImage }) => {
  return (
    <Container>
      {barnImages.map(image => (
        <div onClick={() => selectImage(image)}>
          <Img
            key={image.node.image.src.childImageSharp.fluid.src}
            fluid={image.node.image.src.childImageSharp.fluid}
            alt={image.node.name}
            css={css`
              max-width: 750px;
              max-height: 180px;
              background-size: cover;
              overflow: hidden;
              border-radius: 5px;
              box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.3);
            `}
          />
        </div>
      ))}
    </Container>
  )
}

export default Rollerdeck
