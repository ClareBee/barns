import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Header from '../components/header'

const About = ({ data }) => {
  return (
  <div style={{ color: `teal` }}>
    <Header headerText="About" />
    <Img
      fluid={data.image.childImageSharp.fluid}
      alt="Gatsby Docs are awesome" />
  </div>
  )
}
export default About

export const query = graphql`
  query {
    image: file(relativePath: { regex: "/newbybrn/" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
