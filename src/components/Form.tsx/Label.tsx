import styled from '@emotion/styled'
import React, { FC } from 'react'
import typography from '../../lib/typography'

const StyledLabel = styled.label({
    ...typography.note,
})

const Label: FC<React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>> = ({children, ...rest}) => {
    return (
        <StyledLabel {...rest}>
            {children}
        </StyledLabel>
    )
}

export default Label
