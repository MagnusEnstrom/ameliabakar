import styled from '@emotion/styled'
import React, { FC } from 'react'
import typography from '../../../lib/typography'

const StyledH3 = styled.h3({
    ...typography.h3
})

const H3: FC<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>> = ({children, ...rest}) => {
    return (
        <StyledH3 {...rest}>
            {children}
        </StyledH3>
    )
}

export default H3
