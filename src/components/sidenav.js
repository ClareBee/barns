import React from 'react'
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2.5rem;
  z-index: 10;
`
const menuLink = css`
  margin-right: 1rem;
  font-weight: bold;
  font-size: 1.5rem;
`
const ListLink = props => (
  <li css={menuLink}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const PageHeader = styled.header`
  margin: 0 auto;
  margin-bottom: 1rem;
  background-color: #ECEBF6;
  padding: 1.5rem;
`
const headerLink = css`
  color: grey;
  text-decoration: none;
  &:hover {
    color: pink;
  }
`

const SideNav = ({siteTitle}) => {
  return (
    <aside css={css`
      box-sizing: border-box;
      position: fixed;
      height: 100vh;
      width: 375px;
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      -webkit-box-pack: justify;
      align-items: flex-end;
      padding: 1.45rem;
      background: white;
      border-right: 2px solid grey;
      z-index: 5;
    `}>
    <PageHeader >
      <h1>
        <Link
          to="/"
          css={headerLink}
        >
          {siteTitle}
        </Link>
      </h1>
    </PageHeader>
      <ul style={{ listStyle: `none`, float: `right` }}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/gallery">Gallery</ListLink>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/contact/">Contact</ListLink>
      </ul>
    <Footer>
      &copy; 2019 by ClareBee.{' '}
      <a href="">GitHub</a>. Made by{' '}
      <a href="">Blah</a>.
    </Footer>
    </aside>
  )
}

export default SideNav
