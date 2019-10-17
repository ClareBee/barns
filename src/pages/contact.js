import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/SeoDetails"
import ContactForm from "../components/ContactForm"
import MyMap from "../components/Map"

export default ({ data }) => (
  <div>
    <SEO title="Contact" />
    <h1>Contact</h1>
    <h3>Get in touch using the form</h3>
    <ContactForm />
    <hr />
    <MyMap allBarns={data.allBarnsJson}></MyMap>
  </div>
)

export const query = graphql`
  query {
    allBarnsJson {
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
