import React from 'react'
import { Link } from 'gatsby'
import Header from '../components/header'
import MyMap from '../components/Map'

export default () => (
  <div style={{ color: `teal` }}>
    <Link to="/">Home</Link>
    <Header headerText="Contact" />
    <p>Send us a message!</p>
    <MyMap></MyMap>
  </div>
)
