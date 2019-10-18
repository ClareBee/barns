import React from "react"

const Header = ({ title, subtitle }) => (
  <React.Fragment>
    <h1>{title}</h1>
    {subtitle && (
      <h3>{subtitle}</h3>
    )}
  </React.Fragment>
)

export default Header
