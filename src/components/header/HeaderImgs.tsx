import styled from '@emotion/styled'
import React from 'react'
import Header from './Header'
import HeaderTransparent from './HeaderTransparent'

const HeaderImg = styled.div(({imgSrc}: {imgSrc: string}) => {
    return {
        minHeight: '470px',
        backgroundImage: `url(${imgSrc})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        display: 'grid',
        placeItems: 'start',
    }
})

const HeaderImgs = ({images}: {images: string[]}) => {
    console.log(images[0])
    return (
        <HeaderImg imgSrc={images?.[0]}>
            <HeaderTransparent />
        </HeaderImg>
    )
}

export default HeaderImgs
