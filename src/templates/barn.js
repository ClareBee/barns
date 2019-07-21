import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
export default ({ data }) => {
  // const barn = data.imageSharp
  // console.log(barn)
  return (
    <Layout>
      <div>
      </div>
    </Layout>
  )
}
// export const query = graphql`
//   query($slug: String!) {
//     imageSharp(fields: { slug: { eq: $slug } }) {
//       name
//     }
//   }
// `
