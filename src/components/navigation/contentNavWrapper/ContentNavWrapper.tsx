import styled from '@emotion/styled'
import React, { FC } from 'react'

const Wrapper = styled.div({
    display: 'flex',
    gap: '50px',
    margin: '32px 10px',
    ['@media only screen and (min-width: 90ch)']: {
        margin: '32px 20px',
    },
})
const ContentNavWrapper: FC = ({children, ...rest}) => {
    return (
        <Wrapper {...rest}>
            {children}
        </Wrapper>
    )
}

export default ContentNavWrapper
