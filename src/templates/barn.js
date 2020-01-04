import React from "react"
import { graphql } from "gatsby"
import { css } from "@emotion/core"
import Img from "gatsby-image"
import SEO from "../components/SeoDetails"
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
const photo = css`
  grid-area: photo;
`

const fullGrid = css`
  > div {
    padding-top: 10px;
  }
@supports (display: grid) {
  > div {
    padding-top: 0;
  }
  > div.leaflet-popup-content {
    padding-top: 8px;
  }
  display: grid;
  grid-gap: 50px;
  grid-template-columns: 35% 35% auto 1%;
  grid-template-rows: auto;
  grid-template-areas:
    "header header header header"
    "main main text text"
    "map photo photo photo";
  @media (max-width: 1400px) {
    grid-template-areas:
      "header header header ."
      "main main main ."
      "text photo photo ."
      "map map map .";
  }
  @media (max-width: 768px) {
    grid-template-areas:
      "header header header ."
      "main main main ."
      "text text text ."
      "photo photo photo ."
      "map map map .";
  }
}
`

const partialGrid= css`
  > div {
    padding-top: 10px;
  }
  @supports (display: grid) {
    > div {
      padding-top: 0;
    }
    display: grid;
    grid-gap: 50px;
    grid-template-columns: 35% 35% auto 1%;
    grid-template-rows: auto;
    grid-template-areas:
      "header header header header"
      "main main text text"
      "map map map map";
    @media (max-width: 1400px) {
      grid-template-areas:
        "header header header ."
        "main main main ."
        "text text text ."
        "map map map .";
    }
    @media (max-width: 768px) {
      grid-template-areas:
        "header header header ."
        "main main main ."
        "text text text ."
        "map map map .";
    }
  }
`

export default ({ data }) => {
  const barn = data.barnsJson
  return (
    <div
      css={barn.photo ? fullGrid : partialGrid}
    >

      <div css={header}>
        <SEO title={barn.name} description={`Painting of ${barn.name}`} />

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
      <div css={text}>{barn.description}</div>
      <div css={map}>
        <Map
          lat={barn.lat}
          long={barn.long}
          barnName={barn.name}
          allBarns={data.allBarns}
          zoom={14}
          css={css`
            height: 350px;
          `}
        />
        </div>
        {barn.photo &&

        <div css={photo}>
          <div>
          <Img
            fluid={barn.photo.src.childImageSharp.fluid}
            alt={barn.name}
            css={css`
              border-radius: 5px;
              box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);
            `}
          />
        </div>
      </div>}
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
      photo {
        src {
          childImageSharp {
            fluid(maxWidth: 450) {
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
