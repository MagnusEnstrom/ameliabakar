import styled from '@emotion/styled'
import React from 'react'
import colors from '../../lib/colors'
import typography from '../../lib/typography'

const StyledHeader = styled.header({
    ...typography.nav,
    backgroundColor: colors.white,
})
const Header = () => {
    return (
        <StyledHeader>
            {/* logo */}
            {/* search */}
            {/* heart */}
            {/* hamburger */}
        </StyledHeader>
    )
}

export default Header
