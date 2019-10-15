import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/SeoDetails"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

const Text = styled.p`
  line-height: 1.5rem;
  ::first-letter {
    font-size: 200%;
    font-weight: bold;
    color: #A2708A;
  }
`
const TextBox = styled.div`
  width: 80%;
`
const imageStyle = css`
  max-width: 400px;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  margin: 50px 0;
`

const IndexPage = ({ data }) => (
  <div
    css={css`
      height: 100%;
    `}
  >
    <SEO title="Home" keywords={[`barns`, `Yorkshire`, `Dales`]} />
    <h1>Welcome</h1>
    <h3>
      Subtitle about the website goes here
    </h3>
    <Img
      fluid={data.image.childImageSharp.fluid}
      alt="Dales Barn"
      css={imageStyle}
    />
    <TextBox>
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
    </TextBox>
  </div>
)

export const query = graphql`
  query {
    image: file(relativePath: { regex: "/barn_photo/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage
