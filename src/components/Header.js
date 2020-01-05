import React from "react"
import { css } from "@emotion/core"

const Header = ({ title, subtitle, lead }) => (
  <React.Fragment>
    <h1 css={css`margin-bottom: .5rem;`}>{title}</h1>
    {subtitle && (
      <h3
        css={css`
          margin-top: 1rem;
          margin-bottom: .5rem;
          font-size: 1.5rem;
          display: inline-block;
          line-height: 1.75rem;
        `}
      >
        {subtitle}
      </h3>
    )}
    {lead && (
      <h4 css={css`
        color: #3A3C3F;
        line-height: 1.75rem;
        margin-bottom: 1rem;
      `}>{lead}</h4>
    )}
  </React.Fragment>
)

export default Header
