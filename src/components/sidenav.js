import React from 'react'
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

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

const List = styled.ul`
  list-style: none;
  float: right;
`

const headerLink = css`
  color: grey;
  text-decoration: none;
  &:hover {
    color: pink;
  }
`


const SideNav = ({ siteTitle }) => {
  return (
    <aside css={css`
      box-sizing: border-box;
      position: fixed;
      height: 100%;
      width: 375px;
      display: flex;
      /* flex-direction: column; */
      /* flex-wrap: nowrap; */
      flex-flow: column nowrap;
      /* check this */
      -webkit-box-pack: justify;
      align-items: flex-end;
      padding: 1.45rem;
      background: white;
      border-right: 2px solid grey;

      @media (max-width: 1200px) {
        width: 320px;
      }
      @media (max-width: 1000px) {
        position: relative;
        width: 100%;
      }
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
      <List>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/gallery">Gallery</ListLink>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </List>

    </aside>
  )
}

export default SideNav
