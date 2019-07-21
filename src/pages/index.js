import React from "react"
import { Link } from "gatsby"
import Image from "../components/image"
import SEO from "../components/seo"


const IndexPage = () => (
  <div>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/gallery/">Gallery</Link>
  </div>
)

export default IndexPage
