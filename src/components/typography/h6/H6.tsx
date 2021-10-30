import styled from '@emotion/styled'
import React, { FC } from 'react'
import typography from '../../../lib/typography'

const StyledH6 = styled.h6({
    ...typography.h6
})

const H6: FC<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>> = ({children, ...rest}) => {
    return (
        <StyledH6 {...rest}>
            {children}
        </StyledH6>
    )
}

export default H6
