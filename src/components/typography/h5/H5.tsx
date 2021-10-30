import styled from '@emotion/styled'
import React, { FC } from 'react'
import typography from '../../../lib/typography'

const StyledH5 = styled.h5({
    ...typography.h5
})

const H5: FC<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>> = ({children, ...rest}) => {
    return (
        <StyledH5 {...rest}>
            {children}
        </StyledH5>
    )
}

export default H5
