import React from "react"
import styled from "@emotion/styled"
import { useStaticQuery, graphql } from "gatsby"

const ResourceList = styled.ul`
  font-weight: bold;
`
const Resources = (props) => {
  const { allResourcesJson } = useStaticQuery(
    graphql`
      query {
        allResourcesJson {
          nodes {
            name
            href
          }
        }
      }
    `)
  return (
    <React.Fragment>
      <h2>Resources</h2>

      <ResourceList>
        {allResourcesJson.nodes.map(resource => (
          <li key={resource.href}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={resource.href}
            >
            {resource.name}
            </a>
          </li>
          )
        )}
      </ResourceList>
    </React.Fragment>
  )
}


export default Resources
