import styled from '@emotion/styled'
import React, { FC } from 'react'
import typography from '../../../lib/typography'

const StyledH1 = styled.h1({
    ...typography.h1Mobile
})

const H1: FC<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>> = ({children, ...rest}) => {
    return (
        <StyledH1 {...rest}>
            {children}
        </StyledH1>
    )
}

export default H1
