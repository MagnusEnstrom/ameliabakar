import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Header from './header/Header';
import HeaderImgs from "./header/HeaderImgs";

const Layout = ({ isHomePage, navImgs, children }) => {
  const {
    wp: {
      generalSettings: { title },
    },
  } = useStaticQuery(graphql`
    query LayoutQuery {
      wp {
        generalSettings {
          title
          description
        }
      }
    }
  `)

  return (
    <div data-is-root-path={isHomePage}>
    {navImgs?.length ? <HeaderImgs images={navImgs} /> : <Header />}
      <main>{children}</main>

      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
        {` `}
        And <a href="https://wordpress.org/">WordPress</a>
      </footer>
    </div>
  )
}

export default Layout
