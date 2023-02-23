import React, { FC, ReactNode } from 'react'
import Header from './header/Header'
import HeaderImgs from './header/HeaderImgs'
import Footer from './footer/Footer'
import HeaderHome from './header/HeaderHome'
import Instagram from './instagram/instagram'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import { SEOContext } from 'gatsby-plugin-wpgraphql-seo'
import { graphql, useStaticQuery } from 'gatsby'

type Props = {
    isHomePage?: boolean
    navImgs?: IGatsbyImageData[]
    children: ReactNode
}

const Layout = ({ isHomePage, navImgs, children }: Props) => {
    // const {
    //     wp: { seo },
    // } = useStaticQuery(graphql`
    //     query SiteInfoQuery {
    //         wp {
    //             seo {
    //                 contentTypes {
    //                     post {
    //                         title
    //                         schemaType
    //                         metaRobotsNoindex
    //                         metaDesc
    //                     }
    //                     page {
    //                         metaDesc
    //                         metaRobotsNoindex
    //                         schemaType
    //                         title
    //                     }
    //                 }
    //                 webmaster {
    //                     googleVerify
    //                     yandexVerify
    //                     msVerify
    //                     baiduVerify
    //                 }
    //                 schema {
    //                     companyName
    //                     personName
    //                     companyOrPerson
    //                     wordpressSiteName
    //                     siteUrl
    //                     siteName
    //                     inLanguage
    //                     logo {
    //                         sourceUrl
    //                         mediaItemUrl
    //                         altText
    //                     }
    //                 }
    //                 social {
    //                     facebook {
    //                         url
    //                         defaultImage {
    //                             sourceUrl
    //                             mediaItemUrl
    //                         }
    //                     }
    //                     instagram {
    //                         url
    //                     }
    //                     linkedIn {
    //                         url
    //                     }
    //                     mySpace {
    //                         url
    //                     }
    //                     pinterest {
    //                         url
    //                         metaTag
    //                     }
    //                     twitter {
    //                         username
    //                         cardType
    //                     }
    //                     wikipedia {
    //                         url
    //                     }
    //                     youTube {
    //                         url
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // `)
    return (
        // <SEOContext.Provider value={{ global: seo }}>
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
        // </SEOContext.Provider>
    )
}

export default Layout
