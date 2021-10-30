import styled from '@emotion/styled'
import React, { FC } from 'react'
import typography from '../../../lib/typography'

const StyledP = styled.p({
    ...typography.p
})

const P: FC<React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>> = ({children, ...rest}) => {
    return (
        <StyledP {...rest}>
            {children}
        </StyledP>
    )
}

export default P
