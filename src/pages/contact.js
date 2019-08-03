import React from 'react'
import { Link, graphql } from 'gatsby'
import Header from '../components/header'
import ContactForm from '../components/ContactForm'
import MyMap from '../components/Map'

export default ({data}) => (
  <div>
    <p>Send us a message!</p>
    <ContactForm />
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
