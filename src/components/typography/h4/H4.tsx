import styled from '@emotion/styled'
import React, { FC } from 'react'
import typography from '../../../lib/typography'

const StyledH4 = styled.h4({
    ...typography.h4
})

const H4: FC<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>> = ({children, ...rest}) => {
    return (
        <StyledH4 {...rest}>
            {children}
        </StyledH4>
    )
}

export default H4
