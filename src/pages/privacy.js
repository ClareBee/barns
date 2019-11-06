import React from "react"
import Header from "../components/Header"
import { withTheme } from "emotion-theming"

const Contact = props => (
  <div>
    <div>
      <Header title="Privacy" subtitle="This website is GDPR-compliant."/>
    </div>
    <p>
      We use anonymised Google Analytics for our site, purely to record page hits.
    </p>

    <p>
      You can block this with a tool like <a href="https://tools.google.com/dlpage/gaoptout">Google Analytics OptOut</a>
    </p>
    <p>
      If you contact us using our form, you are consenting to share your email with us. We delete your messages after 10 days, or earlier if requested, and will never share your email address or details with any Third Party.
    </p>
  </div>
)

export default withTheme(Contact)
