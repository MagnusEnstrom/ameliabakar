import React, { FC } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Header from './header/Header';
import HeaderImgs from "./header/HeaderImgs";
import Footer from "./footer/Footer";
import HeaderHome from "./header/HeaderHome";

const Layout: FC<{isHomePage?: boolean, navImgs?: string[]}> = ({ isHomePage, navImgs, children }) => {

    return (
        <div data-is-root-path={isHomePage} style={{ overflowY: 'hidden'}}>
            
            {isHomePage ? 
                <HeaderHome />
            : navImgs?.length ? <HeaderImgs images={navImgs} /> : <Header />}
            <main>{children}</main>

            <Footer />
        </div>
  )
}

export default Layout
