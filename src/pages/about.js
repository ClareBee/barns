import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
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
    <Img
      fluid={props.data.image.edges[0].node.fluid}
      alt="Sketchbook"
      css={css`
        width: 400px;
        margin: 20px 0;
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
        painting and have been especially inspired by the landscapes and natural
        beauty of the surrounding area.
      </p>
      <p>
        Over the years, I have painted many of the barns in the Dales and have
        become increasingly concerned about their disappearance and decay. I have gradually been putting together a collection of
        paintings and sketches as a record of their existence.
      </p>
      <p>
        This website is intended as an ongoing project to share this with a wider audience, so that others may also witness this changing
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
        There are roughly <strong><a href="https://www.yorkshirepost.co.uk/news/analysis/barns-reborn-in-the-dales-1-2330175" target="_blank" rel="noopener noreferrer">4,500 barns</a></strong> dotted around the Yorkshire Dales, most built between the 17<sup>th</sup> and 18<sup>th</sup> centuries.
      </Text>
      <p>
         Field barns - also known as <strong>laithes</strong> - are unusual in being located far from other farm buildings, making them a distinctive feature of the Dales landscape. Darkened slate roofs in the rain, walls bleached light in sunshine, their very presence seems attuned with the weather, somewhere mid-way between man-made and organic.
      </p>
      <p>
        Different dales feature different stone - sandstone, limestone, gritstone - while the buildings themselves still bear the marks of their construction - <strong>‘putlog’</strong> holes where scaffolding poles would have been placed, <strong>‘tiestones’</strong> running through the entire width of a wall, and the loadbearing <strong>‘quoins’</strong> at each corner.
      </p>
      <p>
        The shadowed interiors hosted cows in <strong>‘shippen’</strong>, hay stored above in the wooden <strong>‘baulks’</strong> and served up in <strong>‘foddergang’</strong>, harking back to a <strong><a href="https://everybarn.yorkshiredales.org.uk/tag/yorkshiredales/" target="_blank" rel="noopener noreferrer">forgotten vocabulary</a></strong> and a dwindling skillset.
      </p>
      <p>
        Margaret Blackburne, the artist, recalls that, as a child, it was her and her siblings’ job to trample down the hay that was forked up through the <strong>'forking hole'</strong> onto the baulks - and which also provided temporary bedding for passing tramps who would occasionally seek shelter in barns for the night and then venture down to the family farm for hot mugs of tea.
      </p>
      <blockquote cite="http://www.northcravenheritage.org.uk/NCHTJto2009/Journals/1992/J92A11.html">
      <QuotationMark><small>&#8220;All old farm buildings have a story to tell. Farm buildings should therefore be the subject of serious conservation policy.&#8221;</small></QuotationMark>
      <footer css={css`
        text-align: right;
        font-weight: bold;`}>— Peter Walker, <cite>North Craven Heritage Trust, 1992</cite></footer>
      </blockquote>
      <p>
        While some barns are still in active use, many have fallen into disrepair, crumbling a little further with each passing year. Still others have been converted into houses, raising <strong><a href="https://www.yorkshirepost.co.uk/news/latest-news/contentious-yorkshire-dales-barn-conversion-plans-rejected-at-tense-meeting-1-9488215" target="_blank" rel="noopener noreferrer">some tension</a></strong> between a desire to maintain traditional farming practices and the need to provide affordable housing for locals.
      </p>
      <p>
        This project aims to capture these barns at various points in time. Some of those featured have already completely collapsed - and, while there are efforts by the <strong><a href="https://www.yorkshiredales.org.uk/about/national-park-management-plan/a-cultural-landscape/objective-a9/" target="_blank" rel="noopener noreferrer">Yorkshire Dales National Park</a></strong> to fund their preservation, for many it is unfortunately too late.
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
    image: allImageSharp(filter: { fields: { slug: { regex: "/sketchbook/" } } }) {
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
