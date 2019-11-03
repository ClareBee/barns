import React from "react"
import { css } from "@emotion/core"

const Header = ({ title, subtitle }) => (
  <React.Fragment>
    <h1>{title}</h1>
    {subtitle && (
      <h3
        css={css`
          font-size: 1.5rem;
        `}
      >
        {subtitle}
      </h3>
    )}
  </React.Fragment>
)

export default Header
