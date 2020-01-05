import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/SeoDetails"
import Header from "../components/Header"
import { css } from "@emotion/core"
import { withTheme } from "emotion-theming"

const gridSupportMsg = css`
  @supports (display: grid) {
    display: none;
  }
`
const Gallery = props => {
  const barns = props.data.allBarnsJson.edges
  return (
    <React.Fragment>
      <SEO title="Gallery" />
      <Header
        title="Gallery"
        subtitle="Barns in the Yorkshire Dales"
        lead="A series of paintings by Margaret Blackburne. Click on each image to discover more."
      />
      <div css={gridSupportMsg}>
        <p>
           This site is best viewed on an up-to-date browser. <a target="_blank" href="https://www.whatismybrowser.com/" rel="noopener noreferrer">www.whatismybrowser.com</a>
        </p>
      </div>
      <div
        css={css`
          width: 500px;
          @media (max-width: ${props.theme.breakpoints.md}){
            width: 100%;
          }
          @supports(display: grid){
            width: auto;
            display: grid;
            grid-template-columns: 550px 1fr;
            grid-gap: 100px;
            margin: 75px 0;
            @media (max-width: ${props.theme.breakpoints.lg}) {
              grid-template-columns: 1fr;
              grid-gap: 30px;
            }
            @media (max-width: ${props.theme.breakpoints.md}) {
              grid-template-columns: 1fr;
              margin: 15px 0;
            }
          }
        `}
      >
        {barns.map(barn => (
          <React.Fragment key={barn.node.id}>
            <Link to={barn.node.slug} key={barn.node.id}>
              <Img
                fluid={barn.node.image.src.childImageSharp.fluid}
                alt={barn.node.name}
                css={css`
                  max-width: 750px;
                  border-radius: 5px;
                  box-shadow: ${props.theme.boxShadow};
                  transition: all 0.25s ease-out;
                  :hover {
                    opacity: 0.8;
                  }
                `}
              />
            </Link>
            <h3
              css={css`
                color: ${props.theme.ashGrey};
              `}
            >
              {barn.node.name}
            </h3>
          </React.Fragment>
        ))}
      </div>
    </React.Fragment>
  )
}

export default withTheme(Gallery)

export const query = graphql`
  query allBarnPaintings {
    allBarnsJson(filter: { format: { regex: "/painting/" } }) {
      edges {
        node {
          id
          name
          format
          slug
          image {
            src {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
