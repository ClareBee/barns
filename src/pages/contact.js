import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import SEO from "../components/SeoDetails"
import Header from "../components/Header"
import ContactForm from "../components/ContactForm"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 100px);
  @media (max-width: 1300px){
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
`
export default ({ data }) => (
  <Container>
    <div>
      <SEO title="Contact" />
      <Header title="Contact" subtitle="Feel free to get in touch" />
    </div>
    <Img
      fluid={data.image.childImageSharp.fluid}
      alt="Barn Photo"
      css={css`
        max-width: 300px;
        box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.3);
        border-radius: 5px;
        grid-column-start: 2;
        grid-row-start: 1;
        grid-row-end: 4;
        @media (max-width: 1300px){
          grid-column-start: 1;
          max-width: 100px;
          margin: 25px 0;
        }
      `}
    />
    <ContactForm css={css`
      grid-row-start: 1;
    `}/>

  </Container>
)

export const query = graphql`
  query {
    image: file(relativePath: { regex: "/barn_photo/" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
