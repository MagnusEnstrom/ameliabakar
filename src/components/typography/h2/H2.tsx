import styled from '@emotion/styled'
import React, { FC } from 'react'
import typography from '../../../lib/typography'

const StyledH2 = styled.h2({
    ...typography.h2Mobile
})

const H2: FC<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>> = ({children, ...rest}) => {
    return (
        <StyledH2 {...rest}>
            {children}
        </StyledH2>
    )
}

export default H2
