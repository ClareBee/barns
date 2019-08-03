import React from 'react'
import { Link } from 'gatsby'
import Header from '../components/header'
import ContactForm from '../components/ContactForm'
import MyMap from '../components/Map'

export default () => (
  <div style={{ color: `teal` }}>
    <p>Send us a message!</p>
    <MyMap></MyMap>
  </div>
)
