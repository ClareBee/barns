import React from "react"
import Img from "gatsby-image"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { withTheme } from "emotion-theming"

const Container = styled.div`
  display: grid;
  /* -ms-grid-columns: repeat(3, 1fr); */
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 15px;
  margin-bottom: 10px;
  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    /* -ms-grid-columns: repeat(2, 1fr); */
    grid-template-columns: repeat(2, 1fr);
  }
`
const Rollerdeck = ({ barnImages, selectImage, theme }) => {
  return (
    <Container>
      {barnImages.map(image => (
        <div onClick={() => selectImage(image)} key={image.node.image.src.childImageSharp.fluid.src}>
          <Img
            fluid={image.node.image.src.childImageSharp.fluid}
            alt={image.node.name}
            css={css`
              max-width: 750px;
              max-height: 180px;
              background-size: cover;
              overflow: hidden;
              border-radius: 5px;
              box-shadow: ${theme.boxShadow};
              cursor: pointer;
              transition: all 0.1s ease-out;
              :hover {
                transform: scale(0.99);
                opacity: 0.8;
              }
            `}
          />
        </div>
      ))}
    </Container>
  )
}

export default withTheme(Rollerdeck)
