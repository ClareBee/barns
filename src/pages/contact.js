import React from 'react'
import { Link } from 'gatsby'
import Header from '../components/header'
import ContactForm from '../components/ContactForm'
import MyMap from '../components/Map'

export default () => (
  <div>
    <p>Send us a message!</p>
    <ContactForm />
    <MyMap></MyMap>
  </div>
)
