import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import SEO from "../components/seo"
import { css } from "@emotion/core"

import Header from '../components/header'

const About = ({ data }) => {
  console.log('data', data)
  return (
  <React.Fragment>
    <SEO title="About" />
    <h1>About</h1>
    <Img
      fluid={data.image.childImageSharp.fluid}
      alt="Dales Barn"
      css={css`
        max-width: 400px;
      `} />
  </React.Fragment>
  )
}
export default About

export const query = graphql`
  query {
    image: file(relativePath: { regex: "/sketchbook/" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
