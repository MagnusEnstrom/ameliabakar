import styled from '@emotion/styled'
import React from 'react'
import colors from '../../lib/colors'
import ShareSvg from '../../assets/share.svg'
import Print from '../../assets/print.svg'
import Heart from '../../assets/heart-red.svg'
import Copy from '../../assets/copy.svg'
import Filter from '../../assets/filter-vertical.svg'

const StyledFab = styled.button({
    width: '44px',
    height: '44px',
    borderRadius: '50%',
    backgroundColor: colors.white,
    border: 'none',
    boxShadow: '0px 8px 16px rgba(17, 17, 17, 0.04)',
    
    '&:hover': {
        backgroundColor: colors.cultured,
        boxShadow: 'none',
    }
})

type Props = {
    variant: 'share' | 'save' | 'print' | 'copy' | 'filter'
}

const Fab = ({variant}: Props) => {
    if(variant === 'save') {
        return (
            <StyledFab>
                <Heart />
            </StyledFab>
        )
    }
    if(variant === 'print') {
        return (
            <StyledFab>
                <Print />
            </StyledFab>
        )
    }
    if(variant === 'copy') {
        return (
            <StyledFab>
                <Copy />
            </StyledFab>
        )
    }
    if(variant === 'filter') {
        return (
            <StyledFab>
                <Filter />
            </StyledFab>
        )
    }
    return (
        <StyledFab>
            <ShareSvg />
        </StyledFab>
    )
}

export default Fab
