import React from "react"
import styled from "@emotion/styled"
import { withTheme } from "emotion-theming"

const Footer = styled.footer`
  position: fixed;
  width: 375px;
  margin: 8px;
  bottom: 0;
  a {
    text-decoration: none;
    color: ${props => props.theme.colors.ashGrey};

    &:hover {
      color: ${props => props.theme.colors.granite};
    }
  }
  @media (max-width: 1200px) {
    width: 320px;
  }
  @media (max-width: 1000px) {
    position: relative;
    width: 100%;
  }
`
const SiteFooter = () => (
  <Footer>
    <a
      href="https://www.github.com/ClareBee"
      target="_blank"
      rel="noopener noreferrer"
    >
      &copy; 2019 by ClareBee
    </a>
  </Footer>
)

export default withTheme(SiteFooter)
