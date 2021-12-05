import React, { FC } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Header from './header/Header';
import HeaderImgs from "./header/HeaderImgs";
import Footer from "./footer/Footer";

const Layout: FC<{isHomePage: boolean, navImgs: string[]}> = ({ isHomePage, navImgs, children }) => {

    return (
        <div data-is-root-path={isHomePage}>
            
            {navImgs?.length ? <HeaderImgs images={navImgs} /> : <Header />}
            <main>{children}</main>

            <Footer />
        </div>
  )
}

export default Layout
