import React, { FC, ReactNode } from 'react'
import Header from './header/Header'
import HeaderImgs from './header/HeaderImgs'
import Footer from './footer/Footer'
import HeaderHome from './header/HeaderHome'
import Instagram from './instagram/instagram'
import { IGatsbyImageData } from 'gatsby-plugin-image'

type Props = {
    isHomePage?: boolean
    navImgs?: IGatsbyImageData[]
    children: ReactNode
}

const Layout = ({ isHomePage, navImgs, children }: Props) => {
    return (
        <div data-is-root-path={isHomePage} style={{ overflowY: 'hidden' }}>
            {isHomePage ? (
                <HeaderHome />
            ) : navImgs?.length ? (
                <HeaderImgs images={navImgs} />
            ) : (
                <Header onlynav={true} />
            )}
            <main>{children}</main>

            <Instagram />
            <Footer />
        </div>
    )
}

export default Layout
