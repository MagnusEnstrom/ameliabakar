import styled from '@emotion/styled'
import React, { FC } from 'react'
import H2 from '../typography/h2/H2'
import WheatSmallLeft from '../../assets/wheat-decor-small-left.svg' 
import WheatSmallRight from '../../assets/wheat-decor-small-right.svg' 

const Decoration = styled.div({
    display: 'grid',
    gridTemplateColumns: 'min-content 1fr min-content'
})

const SmallLeft = styled(WheatSmallLeft)({
    justifySelf: 'start',
    alignSelf: 'center',
})
const SmallRight = styled(WheatSmallRight)({
    justifySelf: 'end',
    alignSelf: 'center',
})
const H2Decoration= ({text, ...rest}: {text: string} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
    return (
        <Decoration {...rest}>
            <SmallLeft />
            <H2 style={{placeSelf: 'center', margin: '0px'}}>{text}</H2> 
            <SmallRight />
        </Decoration>
    )
}

export default H2Decoration
