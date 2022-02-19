import styled from '@emotion/styled'
import React from 'react'
import Slider from '../slider/Slider'
import Header from './Header'

const HeaderImg = styled.div(({ imgSrc }: { imgSrc: string }) => {
    return {
        height: '70vh',
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
    }
})

const StyledDotsContainer = styled.div({
    bottom: '0px',
    right: '0px',
    left: '0px',

    li: {
        display: 'grid',
        placeItems: 'center',
    },
})

const StyledTransparentHeader = styled(Header)({
    position: 'absolute',
    top: '0px',
    right: '0px',
    left: '0px',
    zIndex: 20,
})

const FullScreenRecipe = styled.div({
    position: 'relative',

    '@media print': {
        display: 'none',
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
                        childrenImageSharp: [
                            {
                                original: {
                                    src: string
                                }
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

const HeaderImgs = ({ images }: { images: string[] }) => {
    const settings = {
        appendDots: dots => (
            <StyledDotsContainer>
                <ul
                    style={{
                        display: 'flex',
                        width: '100%',
                        justifyContent: 'center',
                        margin: '0px',
                        padding: '10px',
                    }}
                >
                    {' '}
                    {dots}{' '}
                </ul>
            </StyledDotsContainer>
        ),
    }

    return (
        <FullScreenRecipe>
            <StyledTransparentHeader />
            <Slider customSettings={settings}>
                {images.map((src, i) => {
                    return <HeaderImg key={src + i} imgSrc={src} />
                })}
            </Slider>
        </FullScreenRecipe>
    )
}

export default HeaderImgs
