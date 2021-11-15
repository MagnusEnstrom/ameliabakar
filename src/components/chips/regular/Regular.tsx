import styled from '@emotion/styled'
import React from 'react'
import colors from '../../../lib/colors'
import radius from '../../../lib/radius'
import typography from '../../../lib/typography'

const StyledChip = styled.button({
    ...typography.button,
    backgroundColor: colors.white,
    color: colors.jet,
    border: `2px solid ${colors.silver}`,
    borderRadius: radius.button,
    padding: '8px 15px',
    
    '&:hover': {
        backgroundColor: colors.silver,
        color: colors.white,
    },
    
    '&:disabled': {
        border: `2px solid ${colors.cultured}`,
        color: colors.silver,
        backgroundColor: colors.white,
    }

})

type Props = {
    text: string;
} & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
const Regular = ({text, ...rest}: Props) => {
    return (
        <StyledChip {...rest}>
            {text}
        </StyledChip>
    )
}

export default Regular
