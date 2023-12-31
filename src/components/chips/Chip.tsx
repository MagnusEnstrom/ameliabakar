import styled from '@emotion/styled'
import React, { FC, useState } from 'react'
import colors from '../../lib/colors'
import radius from '../../lib/radius'
import typography from '../../lib/typography'
import Close from '../../assets/close-white.svg'

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
            color: colors.white,
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
        },
    }
})

type Props = {
    text?: React.ReactNode
    selected?: boolean
} & React.ButtonHTMLAttributes<HTMLButtonElement>
const Chip: FC<Props> = ({ text, selected, children, ...rest }) => {
    return (
        <StyledChip aria-label={selected ? 'selected' : undefined} {...rest}>
            {text}
            {children}
            {selected && <CloseIcon />}
        </StyledChip>
    )
}

export default Chip
