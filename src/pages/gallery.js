import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

class Gallery extends React.Component {
  constructor(){
    super()
  }
  render(){
    const barns = this.props.data.allPostsJson.edges
    const paths = this.props.data.allImageSharp.edges
    console.log(paths)
    return (
      <Layout>
        <SEO title="Page two" />
        <h1>Hi from the second page</h1>
        <p>Welcome to page 2</p>
        {barns.map(barn =>
          <Link
            to={barn.node.slug}
            >
          <Img fluid={barn.node.image.src.childImageSharp.fluid}
               alt={barn.node.name}
               key={barn.node.id}
               className="gallery-image"
               />
          </Link>
        )}
        <Link to="/">Go back to the homepage</Link>
      </Layout>
    )
  }
}


export default Gallery

export const query = graphql`
  query {
    allPostsJson {
      edges {
        node {
          id
          name
          slug
          image {
            src {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
    allImageSharp {
      edges {
        node {
          fields {
            slug
          }
        }
      }
    }
  }
`
