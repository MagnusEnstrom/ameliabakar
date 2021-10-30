import styled from '@emotion/styled'
import React, { FC } from 'react'
import colors from '../../../lib/colors'
import radius from '../../../lib/radius'
import typography from '../../../lib/typography'

const StyledButton = styled.button({
    ...typography.button,
    padding: '14px 40px 14px 40px',

    backgroundColor: colors.laruelGreen,
    color: colors.white,
    border: 'none',
    borderRadius: radius.button,
    
    '&:hover': {
        backgroundColor: colors.jet,
    },
    '&:disabled': {
        backgroundColor: colors.grey,
        color: colors.silver,
    }

})
const Primary: FC<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>> = ({children, ...rest}) => {
    return (
        <StyledButton {...rest}>
            {children}
        </StyledButton>
    )
}

export default Primary
