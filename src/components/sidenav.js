import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import logo from "../assets/logo2.png"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

const menuLink = css`
  margin-right: 1rem;
  font-weight: bold;
  font-size: 1.5rem;
  a {
    text-decoration: none;
  }
  a:hover {
    color: #89868D;
  }
  a:active {
    text-decoration: none;
    background: transparent;
    color: #A2708A;
  }
`

const ListLink = props => (
  <li css={menuLink}>
    <Link to={props.to} activeStyle={{ color: "#A2708A" }}>
      {props.children}
    </Link>
  </li>
)

const NavHeader = styled.header`
  margin-bottom: 1rem;
  border: 4px solid #BAC7BE;
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
  border-right: 2px solid #D5D5D7;
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
  color: #FDFDFF;
  background-color: #565656;
  font-size: 2.5rem;
  font-family: "Avenir Next";
  font-weight: bold;
  color: transparent;
  text-shadow: 0px 2px 3px rgba(255,255,255,0.4);
  -webkit-background-clip: text;
     -moz-background-clip: text;
          background-clip: text;
  text-decoration: none;
  transition: all .3s ease-in-out;
  &:hover {
    color: #627264;
  }
`

export default ({ siteTitle }) => (
    <Aside>
      <NavHeader>
        <Link to="/" css={headerLink}>
          {siteTitle}
        </Link>
        <img
          src={logo}
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
        <ListLink to="/">Gallery</ListLink>
        <ListLink to="/sketches">Sketches</ListLink>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </List>
    </Aside>
  )
