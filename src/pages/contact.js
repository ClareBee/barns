import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/SeoDetails"
import ContactForm from "../components/ContactForm"

export default ({ data }) => (
  <React.Fragment>
    <SEO title="Contact" />
    <h1>Contact</h1>
    <h3>Feel free to get in touch</h3>
    <br/>
    <ContactForm />
  </React.Fragment>
)
