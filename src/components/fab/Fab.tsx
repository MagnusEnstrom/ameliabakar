import styled from '@emotion/styled'
import React from 'react'
import colors from '../../lib/colors'
import ShareSvg from '../../assets/share.svg'
import Print from '../../assets/print.svg'
import Heart from '../../assets/heart-red.svg'
import HeartFilled from '../../assets/heart-fill-red.svg'
import Copy from '../../assets/copy.svg'
import Filter from '../../assets/filter-vertical.svg'

const StyledFab = styled.div({
    width: '44px',
    height: '44px',
    borderRadius: '50%',
    backgroundColor: colors.white,
    border: 'none',
    boxShadow: '0px 8px 16px rgba(17, 17, 17, 0.04)',
    placeItems: 'center',
    padding: '0px',
    minWidth: '44px',
    display: 'grid',
    minHeight: '44px',
    '&:hover': {
        backgroundColor: colors.cultured,
        boxShadow: 'none',
    },
})

type Props = {
    variant: 'share' | 'save' | 'saved' | 'print' | 'copy' | 'filter'
} & React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
>

const Fab = ({ variant, ...rest }: Props) => {
    if (variant === 'save') {
        return (
            <StyledFab {...rest}>
                <Heart />
            </StyledFab>
        )
    }
    if (variant === 'saved') {
        return (
            <StyledFab {...rest}>
                <HeartFilled />
            </StyledFab>
        )
    }
    if (variant === 'print') {
        return (
            <StyledFab {...rest}>
                <Print />
            </StyledFab>
        )
    }
    if (variant === 'copy') {
        return (
            <StyledFab {...rest}>
                <Copy />
            </StyledFab>
        )
    }
    if (variant === 'filter') {
        return (
            <StyledFab {...rest}>
                <Filter />
            </StyledFab>
        )
    }
    return (
        <StyledFab {...rest}>
            <ShareSvg />
        </StyledFab>
    )
}

export default Fab
