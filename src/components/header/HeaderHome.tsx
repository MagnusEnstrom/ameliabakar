import styled from '@emotion/styled'
import { graphql, useStaticQuery } from 'gatsby'
import React, { useEffect } from 'react'
import colors from '../../lib/colors'
import HomePage from '../buttons/homepage/HomePage'
import InvisibleLink from '../Links/InvisibleLink'
import Slider from '../slider/Slider'
import H1 from '../typography/h1/H1'
import P from '../typography/p/P'
import Header from './Header'

const HeaderImg = styled.div(({imgSrc}: {imgSrc: string}) => {
    return {
        height: ['100vh', '-webkit-fill-available', 'calc(var(--vh, 1vh) * 100)'],
        backgroundImage: `url(${imgSrc})`,
        padding: '20px 20px 30px 20px',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        display: 'grid !important',
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

const StyledTransparentHeader = styled(Header)({
    position:'absolute',
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
            id: string,
            uri: string,
            title:string,

            singlePaketAfc: {
                tidFormat: string,
                tid: number,
                kortBeskrivning: string;
                images: 
                    {
                        localFile: {
                            childrenImageSharp: [
                                {
                                    original: {
                                        src: string
                                    },
                                    fixed: {
                                        src: string
                                    }
                                }
                            ]
                        }
                    }[]
            }
        }[]
    }
}

const HeaderHome = () => {
    const data: LatestQuery = useStaticQuery(graphql`{
        allWpRecept(sort: { fields: [date] order: DESC}) {
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
                  childrenImageSharp {
                    original {
                      src
                    }
                    fixed(width: 400, height: 400) {
                      src
                    }
                  }
                }
              }
            }
          }
        }
      }`)
    const recipies = data.allWpRecept.nodes.filter(node => node.singlePaketAfc.images?.[0].localFile.childrenImageSharp?.[0].original).slice(0, 3)

    return (
        <FullScreenRecipe>
            <StyledTransparentHeader />
            <Slider>
                {recipies.map((node) => {
                    return (
                        <HeaderImg key={node.id} imgSrc={node.singlePaketAfc.images?.[0].localFile.childrenImageSharp?.[0].original.src}>
                            <H1 style={{ color: colors.white, gridArea: 'header', margin: '0px 0px 20px 0px' }} >{node.title}</H1>
                            <Description >
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
