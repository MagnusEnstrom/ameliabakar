import styled from '@emotion/styled'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import React from 'react'
import Slider from '../slider/Slider'
import Header from './Header'

const HeaderImg = styled.div(() => {
    return {
        height: ['70vh', 'calc(var(--vh, 1vh) * 70)'],
        display: 'grid !important',

        '.header-img': {
            width: '100%',
            maxWidth: '100vh',
            height: '100%',
            zIndex: '-1',
        },
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

const HeaderImgs = ({ images, ...rest }: { images?: IGatsbyImageData[] }) => {
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
                    {dots}
                </ul>
            </StyledDotsContainer>
        ),
    }

    return (
        <FullScreenRecipe {...rest}>
            <StyledTransparentHeader />
            <Slider customSettings={settings}>
                {images.map((image, i) => {
                    return (
                        <HeaderImg key={image.images.fallback.src + i}>
                            <GatsbyImage
                                image={image}
                                alt={' '}
                                className="gatsby-img"
                                objectFit="cover"
                            />
                        </HeaderImg>
                    )
                })}
            </Slider>
        </FullScreenRecipe>
    )
}

export default HeaderImgs
