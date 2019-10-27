import React from "react"
import { graphql } from "gatsby"
import { css } from "@emotion/core"
import Img from "gatsby-image"
import Header from "../components/Header"
import Map from "../components/Map"

const header = css`
  grid-area: header;
`
const text = css`
  grid-area: text;
`
const map = css`
  grid-area: map;
`
export default ({ data }) => {
  const barn = data.barnsJson
  return (
    <div
      css={css`
        display: grid;
        grid-gap: 25px 50px;
        grid-template-columns: 65% auto 1%;
        grid-template-rows: auto;
        grid-template-areas:
          "header header header"
          "main text ."
          "map map .";
        @media (max-width: 1400px) {
          grid-template-areas:
            "header header ."
            "main main ."
            "text text ."
            "map map .";
        }
        @media (max-width: 768px) {
          grid-template-areas:
            "header header header"
            "main main main"
            "text text text"
            "map map map";
        }
      `}
    >
      <div css={header}>
        <Header title={barn.name} />
      </div>
      <Img
        fluid={barn.image.src.childImageSharp.fluid}
        alt={barn.name}
        css={css`
          grid-area: main;
          border-radius: 5px;
          box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);
        `}
      />
      <div css={text}>
        {barn.description}
      </div>
      <div css={map}>
        <Map
          lat={barn.lat}
          long={barn.long}
          barnName={barn.name}
          allBarns={data.allBarns}
          zoom={14}
        />
      </div>
    </div>
  )
}
export const query = graphql`
  query($slug: String!) {
    barnsJson(slug: { eq: $slug }) {
      id
      name
      lat
      long
      description
      image {
        src {
          childImageSharp {
            fluid(maxWidth: 550) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    allBarns: allBarnsJson {
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
