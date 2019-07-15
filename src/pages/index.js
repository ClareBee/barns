import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Image from "../components/image"
import SEO from "../components/seo"
const Container = styled.div`
  margin: 3rem auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: teal;
`

const IndexPage = () => (
  <Container className={`container`}>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Container>
)

export default IndexPage
