import styled from '@emotion/styled'
import React, { FC } from 'react'
import colors from '../../../lib/colors'
import radius from '../../../lib/radius'

const StyledButton = styled.button({
    padding: '14px 40px 14px 40px',
    fontSize: '15px',

    backgroundColor: colors.grey,
    color: colors.jet,
    border: 'none',
    borderRadius: radius.button,
    
    '&:hover': {
        backgroundColor: colors.silver,
        color: colors.white,
    },
    '&:disabled': {
        backgroundColor: colors.silver,
        color: colors.jet,
    }

})
const Secondary: FC<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>> = ({children, ...rest}) => {
    return (
        <StyledButton {...rest}>
            {children}
        </StyledButton>
    )
}

export default Secondary
