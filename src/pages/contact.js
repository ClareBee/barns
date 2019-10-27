import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/SeoDetails"
import Header from "../components/Header"
import ContactForm from "../components/ContactForm"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { withTheme } from "emotion-theming"

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 100px);
  @media (max-width: ${props => props.theme.breakpoints.lg}){
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
`
const Contact = props => (
  <Container>
    <div>
      <SEO title="Contact" />
      <Header title="Contact" subtitle="Feel free to get in touch" />
    </div>
    <img
      alt="Barn Photo"
      src=""
      // css={css`
      //   max-width: 300px;
      //   box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.3);
      //   border-radius: 5px;
      //   grid-column-start: 2;
      //   grid-row-start: 1;
      //   grid-row-end: 4;
      //   @media (max-width: 1300px){
      //     grid-column-start: 1;
      //     max-width: 100px;
      //     margin: 25px 0;
      //   }
      // `}
    />
    <ContactForm css={css`
      grid-row-start: 1;
    `}/>

  </Container>
)

export default withTheme(Contact)
