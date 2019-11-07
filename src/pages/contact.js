import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import SEO from "../components/SeoDetails"
import Header from "../components/Header"
import ContactForm from "../components/ContactForm"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { withTheme } from "emotion-theming"

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, 100px);
  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
`
const Contact = props => (
  <Container>
    <div>
      <SEO title="Contact" />
      <Header
        title="Contact"
        subtitle="Feel free to get in touch"
      />
    </div>
    <figure
      css={css`
        text-align: right;
        @media (max-width: 1300px) {
          text-align: center;
        }
      `}
    >
      <Img
        alt="Disappearing Barn"
        title="Disappearing Barn"
        fluid={props.data.allImageSharp.edges[0].node.fluid}
        css={css`
          max-width: 100%;
          box-shadow: ${props.theme.boxShadow};
          border-radius: 5px;
          grid-column-start: 2;
          grid-row-start: 1;
          grid-row-end: 4;
          margin: 0;
          @media (max-width: 1000px) {
            grid-column-start: 1;
          }
        `}
      />
      <figcaption
        css={css`
          color: ${props.theme.colors.ashGrey};
          font-weight: bold;
        `}
      >
        Disappearing Barn, 2019
      </figcaption>
    </figure>
    <ContactForm
      css={css`
        grid-row-start: 1;
      `}
    />
    <div
      css={css`
        grid-row-start: 5;
        grid-column-start: 2;
        font-style: italic;
        font-weight: bold;
        line-height: 2rem;
        color: ${props.theme.colors.ashGrey};
        padding-left: 2rem;
        border-left: 5px solid ${props.theme.colors.lightGreyGreen};
        @media (max-width: 1300px) {
          grid-column-start: 1;
          margin-top: 40px;
        }
      `}
    >
      The copyright notice which is displayed in this site indicates that all
      materials within the site are the intellectual property of the artist
      Margaret Blackburne (MB). All materials, content and forms contained on
      this website are the intellectual property of MB and may not be copied,
      reproduced, distributed or displayed without MB’s express written
      permission.{" "}
    </div>
  </Container>
)

export default withTheme(Contact)

export const query = graphql`
query {
    allImageSharp(filter: { fields: { slug: { regex: "/disappearing/" }} }) {
      edges {
        node {
          id
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
