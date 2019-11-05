import React from "react"
import Header from "../components/Header"
import { withTheme } from "emotion-theming"

const Contact = props => (
  <div>
    <div>
      <Header title="Privacy" subtitle="This website is GDPR-compliant."/>
    </div>
    <p>
      We use anonymised Google Analytics for our site which you can block with
    </p>
    <p>
      If you contact us using our form, we delete your messages after 10 days or earlier if requested.</p>
  </div>
)

export default withTheme(Contact)
