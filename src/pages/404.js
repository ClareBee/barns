import React from "react"
import SEO from "../components/SeoDetails"
import Header from "../components/Header"

const NotFoundPage = () => (
  <React.Fragment>
    <SEO title="404: Not found" />
    <Header title="Not Found" />
    <p>
      You just hit a route that doesn&#39;t exist... Try another link from the
      menu.
    </p>
  </React.Fragment>
)

export default NotFoundPage
