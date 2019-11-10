import React from "react"
import styled from "@emotion/styled"
import { withTheme } from "emotion-theming"
import SocialMedia from "./SocialMedia"

const Footer = styled.footer`
  position: fixed;
  width: 375px;
  margin: 8px;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  a {
    text-decoration: none;
    color: ${props => props.theme.colors.ashGrey};

    &:hover {
      color: ${props => props.theme.colors.granite};
    }
  }
  @media (max-width: 1000px) {
    position: relative;
    width: 100%;
  }
`
const Copyright = styled.div`
  width: 100%;
`

const SiteFooter = () => (
  <Footer>
    <Copyright>
      <a
        href="https://www.github.com/ClareBee"
        target="_blank"
        rel="noopener noreferrer"
      >
        &copy; 2019 by ClareBee
      </a>
    </Copyright>
    <SocialMedia />
  </Footer>
)

export default withTheme(SiteFooter)
