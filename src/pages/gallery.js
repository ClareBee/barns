import React from "react"
import { Link, gatsby } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

class Gallery extends React.Component {
  constructor(){
    super()
  }
  render(){
    const barns = this.props.data.allPostsJson.edges
    console.log(barns)
    return (
      <Layout>
        <SEO title="Page two" />
        <h1>Hi from the second page</h1>
        <p>Welcome to page 2</p>
        {barns.map(barn =>
          <Img fluid={barn.node.image.src.childImageSharp.fluid}
               alt={barn.node.name}
               key={barn.node.id}/>
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
          image {
            src {
              childImageSharp {
                fluid {
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
