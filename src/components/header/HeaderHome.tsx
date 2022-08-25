import styled from '@emotion/styled'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage, ImageDataLike } from 'gatsby-plugin-image'
import React, { useEffect } from 'react'
import colors from '../../lib/colors'
import HomePage from '../buttons/homepage/HomePage'
import InvisibleLink from '../Links/InvisibleLink'
import Slider from '../slider/Slider'
import H1 from '../typography/h1/H1'
import P from '../typography/p/P'
import Header from './Header'

const HeaderImg = styled.div(() => {
    return {
        height: [
            '100vh',
            '-webkit-fill-available',
            'calc(var(--vh, 1vh) * 100)',
        ],
        padding: '20px 20px 30px 20px',
        display: 'grid !important',
        position: 'relative',
        placeItems: 'end center',
        gridTemplateRows: '1fr min-content min-content min-content',
        gridTemplateAreas: `
            "...."
            "header"
            "description"
            "button"
        `,
        ['@media only screen and (min-width: 90ch)']: {
            placeItems: 'end start',
            gridTemplateColumns: '1fr 1fr',
            gridTemplateAreas: `
                ".... ...."
                "header header"
                "description ...."
                "button ...."
            `,
        },
        ['@media only screen and (min-width: 170ch)']: {
            padding: '20px 20px 30px 70px',
        },

        '.header-img': {
            width: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
        },
    }
})

const StyledTransparentHeader = styled(Header)({
    position: 'absolute',
    top: '0px',
    right: '0px',
    left: '0px',
    zIndex: 20,
})

const Description = styled(P)({
    textAlign: 'center',
    color: colors.white,
    gridArea: 'description',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: 3,
    lineClamp: 3,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    ['@media only screen and (min-width: 90ch)']: {
        WebkitLineClamp: 4,
        lineClamp: 4,
        textAlign: 'start',
    },
})
const FullScreenRecipe = styled.div({
    position: 'relative',
})
const StyledInvisibleLink = styled(InvisibleLink)({
    justifySelf: 'center',
    gridArea: 'button',
    ['@media only screen and (min-width: 90ch)']: {
        justifySelf: 'start',
    },
})

type LatestQuery = {
    allWpRecept: {
        nodes: {
            id: string
            uri: string
            title: string

            singlePaketAfc: {
                tidFormat: string
                tid: number
                kortBeskrivning: string
                images: {
                    localFile: {
                        childImageSharp: {
                            gatsbyImageData: ImageDataLike
                        }
                    }
                }[]
            }
        }[]
    }
}

const HeaderHome = () => {
    const data: LatestQuery = useStaticQuery(graphql`
        {
            allWpRecept(sort: { fields: [date], order: DESC }) {
                nodes {
                    id
                    uri
                    title
                    singlePaketAfc {
                        tidFormat
                        tid
                        kortBeskrivning
                        images {
                            localFile {
                                childImageSharp {
                                    gatsbyImageData
                                }
                            }
                        }
                    }
                }
            }
        }
    `)
    console.log(
        'images',
        data.allWpRecept.nodes.map(
            node =>
                node.singlePaketAfc.images?.[0].localFile.childImageSharp
                    ?.gatsbyImageData
        )
    )
    const recipies = data.allWpRecept.nodes.slice(0, 3)

    return (
        <FullScreenRecipe>
            <StyledTransparentHeader />
            <Slider>
                {recipies.map(node => {
                    const image = getImage(
                        node.singlePaketAfc.images[0].localFile.childImageSharp
                    )
                    return (
                        <HeaderImg key={node.id}>
                            <GatsbyImage
                                image={image}
                                alt={node.title || ''}
                                className="header-img"
                                objectFit="cover"
                            />
                            <H1
                                style={{
                                    color: colors.white,
                                    gridArea: 'header',
                                    margin: '0px 0px 20px 0px',
                                }}
                            >
                                {node.title}
                            </H1>
                            <Description>
                                {node.singlePaketAfc.kortBeskrivning}
                            </Description>
                            <StyledInvisibleLink to={node.uri}>
                                <HomePage>Till Recept</HomePage>
                            </StyledInvisibleLink>
                        </HeaderImg>
                    )
                })}
            </Slider>
        </FullScreenRecipe>
    )
}

export default HeaderHome
