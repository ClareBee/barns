import React from "react"
import { Link, gatsby } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

class SecondPage extends React.Component {
  constructor(){
    super()

  }
  render(){
    const images = this.props.data
    return (
      <Layout>
        <SEO title="Page two" />
        <h1>Hi from the second page</h1>
        <p>Welcome to page 2</p>
        <Link to="/">Go back to the homepage</Link>
      </Layout>
    )
  }
}


export default SecondPage

export const query = graphql`
  query {
    allPostsJson {
      edges {
        node {
          text
        }
      }
    }
  }
`
