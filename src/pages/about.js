import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import sketchbook from "../assets/sketchbook.jpg"
import SEO from "../components/SeoDetails"
import Header from "../components/Header"
import MyMap from "../components/Map"

import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { withTheme } from "emotion-theming"

const Text = styled.p`
  line-height: 1.5rem;
  ::first-letter {
    font-size: 200%;
    font-weight: bold;
    color: ${props => props.theme.colors.mountbattenPink};
`

const About = props => (
  <React.Fragment>
    <SEO title="About" />
    <Header title="About" />
    <img
      src={sketchbook}
      alt="Sketchbook"
      css={css`
        max-width: 400px;
        margin: 50px 0;
        box-shadow: ${props.theme.boxShadow};
        border-radius: 5px;
      `}
    />
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Congue nisi vitae
      suscipit tellus mauris a diam maecenas sed. Rhoncus mattis rhoncus urna
      neque viverra justo nec ultrices. Massa id neque aliquam vestibulum
      morbi. Malesuada proin libero nunc consequat interdum. At imperdiet dui
      accumsan sit amet nulla. Aliquam ut porttitor leo a diam sollicitudin
      tempor. Tortor id aliquet lectus proin nibh. Sit amet dictum sit amet
      justo donec enim diam. Nunc sed augue lacus viverra. Nunc lobortis
      mattis aliquam faucibus purus in. Euismod lacinia at quis risus sed
      vulputate odio ut enim. Amet dictum sit amet justo. Eu tincidunt tortor
      aliquam nulla. Quis auctor elit sed vulputate mi sit amet. Bibendum enim
      facilisis gravida neque. Quis viverra nibh cras pulvinar mattis nunc.
      Turpis egestas pretium aenean pharetra magna ac placerat vestibulum
      lectus.
    </Text>
    <MyMap allBarns={props.data.barns}></MyMap>
  </React.Fragment>
)
export default withTheme(About)

export const query = graphql`
  query {
    barns: allBarnsJson {
      edges {
        node {
          id
          name
          lat
          long
        }
      }
    }
  }
`
