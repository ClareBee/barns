import React from "react"
import { graphql } from "gatsby"
import sketchbook from "../assets/sketchbook.jpg"
import SEO from "../components/SeoDetails"
import Header from "../components/Header"
import MyMap from "../components/Map"

import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { withTheme } from "emotion-theming"

const Links = styled.ul`
  display: block;
  margin: 0 0 20px 0;
  li {
    display: inline-block;
    font-weight: bold;
    margin: 0 20px 0 0;
    a {
      text-decoration: none;
      padding-right: 20px;
    }
  }
`
const Section = styled.section`
  width: 90%;
  line-height: 2rem;
  margin: 2rem 0;
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    width: 100%;
    line-height: 1.5rem;
  }
`
const Text = styled.p`
  ::first-letter {
    font-size: 150%;
    font-weight: bold;
    color: ${props => props.theme.colors.mountbattenPink};
`
const Resources = styled.ul`
  font-weight: bold;
`

const About = props => (
  <React.Fragment id="top">
    <SEO title="About" />
    <Header title="About" />
    <Links>
      <li>
        <a href="#artist">The Artist</a>/
      </li>
      <li>
        <a href="#project">The Barns</a>/
      </li>
      <li>
        <a href="#resources">Resources</a>
      </li>
    </Links>
    <img
      src={sketchbook}
      alt="Sketchbook"
      css={css`
        width: 400px;
        margin: 25px 0;
        box-shadow: ${props.theme.boxShadow};
        border-radius: 5px;
        @media (max-width: ${props.theme.breakpoints.sm}) {
          width: 300px;
        }
      `}
    />
    <Section id="artist">
      <h2>Margaret Blackburne - The Artist</h2>
      <Text>
        Born and brought up on a Dales farm, I have had a life-long interest in
        painting and have been especially inspired by landscapes and the natural
        beauty of the surrounding area.
      </Text>
      <p>
        Over the years, I have painted many of the barns in the Dales and have
        become increasingly concerned about the disappearance and decay of many
        of them. I have been gradually putting together a collection of
        paintings and sketches as a record of their existence and disappearance.
      </p>
      <p>
        This website is intended as an ongoing project to share this collection
        with a wider audience, so that others may also witness this changing
        history.
      </p>
      <a href="#top">Top</a>
    </Section>
    <Section>
      <MyMap allBarns={props.data.barns} />
    </Section>
    <Section id="project">
      <h2>Disappearing Barns - The Yorkshire Dales</h2>
      <Text>
        There are roughly 4,500 barns dotted around the Yorkshire Dales, most of
        them built between the 17th and 18th centuries.
      </Text>
      <p>
        Dales barns - also known as laithes - are unusual in being located far
        from other farm buildings.
      </p>
      <a href="#top">Top</a>
    </Section>
    <Section>
      <h2>Resources</h2>

      <Resources id="resources">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.outofoblivion.org.uk/barns.asp"
        >
          Out Of Oblivion
        </a>
        <br />
      </Resources>
      <a href="#top">Top</a>
    </Section>
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
