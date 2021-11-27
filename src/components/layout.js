import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Header from './header/Header';
import HeaderImgs from "./header/HeaderImgs";
import Footer from "./footer/Footer";

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

      <Footer />
    </div>
  )
}

export default Layout
