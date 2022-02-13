import styled from '@emotion/styled'
import React, { FC } from 'react'
import H2 from '../typography/h2/H2'
import WheatSmallLeft from '../../assets/wheat-decor-small-left.svg' 
import WheatSmallRight from '../../assets/wheat-decor-small-right.svg' 
import WheatBigLeft from '../../assets/wheat-decor-big-left.svg' 
import WheatBigRight from '../../assets/wheat-decor-big-right.svg' 

const Decoration = styled.div({
    display: 'grid',
    gridTemplateColumns: 'min-content auto min-content'
})

const BigLeft = styled(WheatBigLeft)({
    justifySelf: 'start',
    display: 'none',
    alignSelf: 'center',
    ['@media only screen and (min-width: 70ch)']: {
        display: 'block',
    }
})
const BigRight = styled(WheatBigRight)({
    display: 'none',
    justifySelf: 'end',
    alignSelf: 'center',
    ['@media only screen and (min-width: 70ch)']: {
        display: 'block',
    }
})
const SmallLeft = styled(WheatSmallLeft)({
    justifySelf: 'start',
    alignSelf: 'center',
    ['@media only screen and (min-width: 70ch)']: {
        display: 'none',
    }
})
const SmallRight = styled(WheatSmallRight)({
    justifySelf: 'end',
    alignSelf: 'center',
    ['@media only screen and (min-width: 70ch)']: {
        display: 'none',
    }
})
const H2Decoration= ({text, ...rest}: {text: string} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
    return (
        <Decoration {...rest}>
            <BigLeft />
            <SmallLeft />
            <H2 style={{placeSelf: 'center', margin: '0px auto'}}>{text}</H2> 
            <SmallRight />
            <BigRight />
        </Decoration>
    )
}

export default H2Decoration
