import styled from '@emotion/styled'
import React from 'react'
import typography from '../../lib/typography'
import Hamburger from '../../assets/hamburger-menu-white.svg'
import Heart from '../../assets/heart-white.svg'
import Search from '../../assets/search-white.svg'
import LogoUrl from '../../assets/logo-white.svg'

const StyledHeader = styled.header(() => {
    return {
    ...typography.nav,
    backgroundColor: 'rgba(0, 0 ,0 ,0)',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    width: '100%',
    padding: '20px 10px',
}})

const Logo = styled(LogoUrl)({
    border: 'none',
    height: '24px',
    width: '97px',
})

const IconWrapper = styled.div({
    justifyContent: 'end',
    display: 'flex',
    alignItems: 'center',
})

const HamburgerIcon = styled(Hamburger)({
    border: 'none',
    height: '18px',
    width: '24px',
})
const HeartIcon = styled(Heart)({
    border: 'none',
    height: '22.5px',
    width: '25px',
    marginRight: '31px'
})
const SearchIcon = styled(Search)({
    border: 'none',
    height: '20px',
    width: '20px',
    marginRight: '24px',
})

const HeaderTransparent = () => {
    return (
        <StyledHeader>
            <Logo />
            <IconWrapper>
                <SearchIcon />
                <HeartIcon />
                <HamburgerIcon />
            </IconWrapper>
        </StyledHeader>
    )
}

export default HeaderTransparent;
