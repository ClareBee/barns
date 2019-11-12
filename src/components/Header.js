import React from "react"
import { css } from "@emotion/core"

const Header = ({ title, subtitle, lead }) => (
  <React.Fragment>
    <h1>{title}</h1>
    {subtitle && (
      <h3
        css={css`
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
        line-height: 1.75rem;
        @media (max-width: 1000px) {
          margin-bottom: 5px;
        }
      `}>{lead}</h4>
    )}
  </React.Fragment>
)

export default Header
