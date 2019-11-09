import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { withTheme } from "emotion-theming"

const MenuLink = styled.li`
  margin-right: 1rem;
  font-weight: bold;
  font-size: 1.5rem;
  a {
    text-decoration: none;
    background: transparent;
  }
  a:hover {
    color: #89868d;
  }
`

const ListLink = props => (
  <MenuLink>
    <Link
      to={props.to}
      activeStyle={{ color: `${props.theme.colors.mountbattenPink}` }}
    >
      {props.children}
    </Link>
  </MenuLink>
)

const NavHeader = styled.header`
  margin-bottom: 1rem;
  border: 4px solid ${props => props.theme.colors.lightGreyGreen};
  padding: 0.5rem 1.5rem 1.5rem;
  @media (max-width: 1000px) {
    width: 100%;
    margin: 0 auto 25px;
  }
`
const Aside = styled.aside`
  box-sizing: border-box;
  position: fixed;
  height: 100%;
  width: 375px;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-end;
  padding: 25px;
  background: white;
  border-right: 2px solid ${props => props.theme.colors.lightGrey};
  overflow: scroll;

  @media (max-width: 1000px) {
    position: relative;
    width: 100%;
    overflow: visible;
  }
`

const List = styled.ul`
  list-style: none;
  float: right;
  text-align: right;
  margin-right: -10px;
`

const headerLink = css`
  color: #fdfdff;
  background-color: #565656;
  font-size: 2.5rem;
  font-family: "Avenir Next";
  font-weight: bold;
  color: transparent;
  text-shadow: 0px 2px 3px rgba(255, 255, 255, 0.4);
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: #627264;
  }
`

const Sidenav = ({ siteTitle, theme, logo }) => (
  <Aside>
    <NavHeader>
      <Link to="/" css={headerLink}>
        {siteTitle}
      </Link>
      <Img
        fixed={logo}
        fadeIn={false}
        alt="Logo"
        css={css`
          width: 80px;
          float: right;
          opacity: 0.6;
          margin-right: 20px;
        `}
      />

    </NavHeader>
    <List>
      <ListLink theme={theme} to="/">
        Gallery
      </ListLink>
      <ListLink theme={theme} to="/sketches">
        Sketches
      </ListLink>
      <ListLink theme={theme} to="/about/">
        About
      </ListLink>
      <ListLink theme={theme} to="/contact/">
        Contact
      </ListLink>
    </List>
  </Aside>
)

export default withTheme(Sidenav)
