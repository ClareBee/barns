import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import SEO from "../components/seo"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

import Header from '../components/header'

const Text = styled.p`
  line-height: 1.5rem;
  ::first-letter {
    font-size: 200%;
    font-weight: bold;
    color: #8A2BE2;
`

const About = ({ data }) => {
  console.log('data', data)
  return (
  <React.Fragment>
    <SEO title="About" />
    <h1>About</h1>
    <Img
      fluid={data.image.childImageSharp.fluid}
      alt="Sketchbook"
      css={css`
        max-width: 400px;
        margin: 50px 0;
        box-shadow: 0px 3px 15px rgba(0,0,0,0.3);
        border-radius: 5px;
      `} />
    <Text>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Congue nisi vitae suscipit tellus mauris a diam maecenas sed. Rhoncus mattis rhoncus urna neque viverra justo nec ultrices. Massa id neque aliquam vestibulum morbi. Malesuada proin libero nunc consequat interdum. At imperdiet dui accumsan sit amet nulla. Aliquam ut porttitor leo a diam sollicitudin tempor. Tortor id aliquet lectus proin nibh. Sit amet dictum sit amet justo donec enim diam. Nunc sed augue lacus viverra. Nunc lobortis mattis aliquam faucibus purus in. Euismod lacinia at quis risus sed vulputate odio ut enim. Amet dictum sit amet justo. Eu tincidunt tortor aliquam nulla. Quis auctor elit sed vulputate mi sit amet. Bibendum enim facilisis gravida neque. Quis viverra nibh cras pulvinar mattis nunc. Turpis egestas pretium aenean pharetra magna ac placerat vestibulum lectus.
    </Text>
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
