import React from "react"
import { graphql } from "gatsby"
import sketchbook from "../assets/sketchbook.jpg"
import SEO from "../components/SeoDetails"
import Header from "../components/Header"
import MyMap from "../components/Map"
import Resources from "../components/Resources"

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
    font-size: 2rem;
    font-weight: bold;
    color: ${props => props.theme.colors.mountbattenPink};
`
const QuotationMark = styled.span`
  font-size: 2rem;
  line-height: 1.5rem;
  font-weight: bold;
  color: ${props => props.theme.colors.mountbattenPink};
`
const Divider = styled.hr`
  width: 90%;
  height: 5px;
  opacity: 0.7;
  background-color: ${props => props.theme.colors.mountbattenPink};
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    width: 100%;
  }
`

const About = props => (
  <React.Fragment>
    <SEO title="About" />
    <Header title="About" id="top"/>
    <Divider />

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
    <Divider />

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
      <p>
        <QuotationMark>&#8220;</QuotationMark>
        Born and brought up on a Dales farm, I have had a life-long interest in
        painting and have been especially inspired by landscapes and the natural
        beauty of the surrounding area.
      </p>
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
        <QuotationMark>&#8221;</QuotationMark>
      </p>
      <a href="#top">Top</a>
    </Section>

    <Divider />

    <Section>
      <MyMap allBarns={props.data.barns} />
    </Section>
    <Divider />
    <Section id="project">
      <h2>Disappearing Barns - The Yorkshire Dales</h2>
      <Text>
        There are roughly 4,500 barns dotted around the Yorkshire Dales, most them built between the 17th and 18th centuries.
      </Text>
      <p>
         Field barns - also known as laithes - are unusual in being located far from other farm buildings, making them a distinctive feature of the Dales landscape. Darkened slate roofs in the rain, walls bleached light in sunshine, their very presence seems attuned with the weather, somewhere mid-way between man-made and organic.
      </p>
      <p>
        With different dales comes different stones - sandstone, limestone, gritstone - while the buildings themselves still bear the marks of their construction - ‘putlog’ holes where scaffolding poles would have been placed, ‘tiestones’ running through the entire width of a wall and the loadbearing ‘quoins’ at the corners.
      </p>
      <p>
        The shadowed interiors hosted cow in ‘shippen’, hay stored above in the ‘baulks’ and served up in ‘foddergang’, harking back to a forgotten vocabulary and a dwindling skillset.
      </p>
      <p>
        Margaret Blackburne, the artist, recalls that, as a child, it was her and her siblings’ job to trample down the hay for storage - which also provided temporary bedding for passing tramps who would seek shelter in the barns for the night and then venture down to the family farm for hot mugs of tea.
      </p>
      <p>
        While some barns are still in active use, many others have fallen into disrepair, crumbling a little further with each year that passes. Still others have been converted into houses, raising some tensions between the desire to maintain the traditional farming practices of the Dales and the need to provide affordable housing for its inhabitants.
      </p>
      <p>
        This project aims to capture these barns at various points in time. Some of those featured have fallen down completely since they were painted - and, while there are efforts by the Yorkshire Dales National Park to fund their preservation, it is unfortunately already too late for many.
      </p>
      <a href="#top">Top</a>
    </Section>
    <Divider />
    <Section id="resources">
      <Resources />
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
