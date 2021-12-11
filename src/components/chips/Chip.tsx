import styled from '@emotion/styled'
import React, { useState } from 'react'
import colors from '../../lib/colors'
import radius from '../../lib/radius'
import typography from '../../lib/typography'
import Close from '../../assets/close-white.svg';

const CloseIcon = styled(Close)({
    width: '14px',
    height: '14px',
})

const StyledChip = styled.button(() => {
    return {
        ...typography.button,
        backgroundColor: colors.white,
        color: colors.jet,
        border: `2px solid ${colors.silver}`,
        borderRadius: radius.button,
        padding: '8px 15px',
        display: 'flex',
        gap: '6px',

        '&[aria-label="selected"]': {
            backgroundColor: colors.laruelGreen,
            border: `2px solid ${colors.laruelGreen}`,
            color: colors.white
        },
        
        '&:disabled': {
            border: `2px solid ${colors.cultured}`,
            color: colors.silver,
            backgroundColor: colors.white,
        },

        ['@media (hover: hover) and (pointer: fine)']: {
            '&:hover': {
                backgroundColor: colors.silver,
                border: `2px solid ${colors.silver}`,
                color: colors.white,
                cursor: 'pointer',
            },
        }
    }
})

type Props = {
    text: string;
    selected?: boolean;
} & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
const Chip = ({text, selected, ...rest}: Props) => {
    return (
        <StyledChip aria-label={selected ? 'selected' : ''} {...rest}>
            {text}
            {selected && <CloseIcon />}
        </StyledChip>
    )
}

export default Chip
