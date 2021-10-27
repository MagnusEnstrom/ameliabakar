import styled from '@emotion/styled'
import React, { FC } from 'react'
import colors from '../../../lib/colors'
import radius from '../../../lib/radius'

const StyledH1 = styled.h1({
    fontWeight: 700,
    fontSize: '24px',
    lineHeight: '150%',
    fontFamily: "'Lusitana', serif",

})

const H1: FC<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>> = ({children, ...rest}) => {
    return (
        <StyledH1 {...rest}>
            {children}
        </StyledH1>
    )
}

export default H1
