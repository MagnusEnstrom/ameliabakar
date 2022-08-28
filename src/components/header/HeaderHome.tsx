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
        gridArea: '1/1',
        background: 'transparent',
        height: '100%',
        overflow: 'hidden',
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
    }
})

const HeaderWrapper = styled.div({
    height: ['100vh', '-webkit-fill-available', 'calc(var(--vh, 1vh) * 100)'],
    width: '100%',
    display: 'grid !important',

    '.image has-horizontal': {
        ['@media only screen and (min-width: 90ch)']: {
            display: 'none',
        },
    },
    '.image-horizontal': {
        display: 'none',
        ['@media only screen and (min-width: 90ch)']: {
            display: 'block',
        },
        ['@media only screen and (min-width: 170ch)']: {
            display: 'block',
        },
    },
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
                horizontalImage?: {
                    localFile: {
                        childImageSharp: {
                            gatsbyImageData: ImageDataLike
                        }
                    }
                } | null
            }
        }[]
    }
}

const HeaderHome = () => {
    const data: LatestQuery = useStaticQuery(graphql`
        {
            allWpRecept(sort: { fields: [date], order: DESC }, limit: 6) {
                nodes {
                    id
                    uri
                    title
                    singlePaketAfc {
                        tidFormat
                        tid
                        kortBeskrivning
                        horizontalImage {
                            localFile {
                                childImageSharp {
                                    gatsbyImageData
                                }
                            }
                        }
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
    const recipies = data.allWpRecept.nodes.slice(0, 3)

    return (
        <FullScreenRecipe>
            <StyledTransparentHeader />
            <Slider>
                {recipies.map(node => {
                    const image = getImage(
                        node.singlePaketAfc.images[0].localFile.childImageSharp
                    )
                    const horizontalImage =
                        node.singlePaketAfc.horizontalImage &&
                        getImage(
                            node.singlePaketAfc.horizontalImage?.localFile
                                .childImageSharp
                        )
                    return (
                        <HeaderWrapper key={node.id}>
                            <GatsbyImage
                                image={image}
                                alt={node.title || ''}
                                objectFit="cover"
                                style={{
                                    gridArea: '1/1',
                                    maxHeight: '100%',
                                    maxWidth: '100%',

                                    // You can set a maximum height for the image, if you wish.
                                    // maxHeight: 600,
                                }}
                                className={`image ${
                                    horizontalImage ? 'has-horizontal' : ''
                                }`}
                            />
                            {horizontalImage && (
                                <GatsbyImage
                                    image={horizontalImage}
                                    alt={node.title || ''}
                                    objectFit="cover"
                                    style={{
                                        gridArea: '1/1',
                                        maxHeight: '100%',
                                        maxWidth: '100%',

                                        // You can set a maximum height for the image, if you wish.
                                        // maxHeight: 600,
                                    }}
                                    className={`image-horizontal `}
                                />
                            )}
                            <HeaderImg>
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
                        </HeaderWrapper>
                    )
                })}
            </Slider>
        </FullScreenRecipe>
    )
}

export default HeaderHome
