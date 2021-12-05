import styled from '@emotion/styled'
import React, { useState } from 'react'
import colors from '../../lib/colors'
import typography from '../../lib/typography'
import Hamburger from '../../assets/hamburger-menu.svg'
import Heart from '../../assets/heart.svg'
import Search from '../../assets/search.svg'
import LogoUrl from '../../assets/logo.svg'
import Close from '../../assets/close.svg'
import { Link } from 'gatsby'
import Input from '../Form.tsx/SearchInput'

const StyledHeader = styled.header(({transparent}: {transparent?: boolean}) => {
    return {
    ...typography.nav,
    backgroundColor: transparent ? 'rgba(0, 0 ,0 ,0)' : colors.white,
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateAreas: `
    "logo icons"
    "search search"
    "links links"
    `,
    width: '100%',
    padding: '20px 10px',
    color: transparent ? '#FFFFFF' : 'inherit',
}})

const Logo = styled(LogoUrl)({
    border: 'none',
    height: '24px',
    width: '97px',
    gridArea: 'logo',
})

const IconWrapper = styled.div({
    justifyContent: 'end',
    display: 'flex',
    alignItems: 'center',
    gridArea: 'icons'
})

const InvinsibleButton = styled.button({
    width: 'min-content',
    padding: '0px',
    margin: '0px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: 'none',
    backgroundColor: 'inherit',
});
const InvinsibleLink = styled(Link)({
    width: 'min-content',
    padding: '0px',
    margin: '0px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: 'none',
    backgroundColor: 'inherit',
});

const HamburgerIcon = styled(Hamburger)({
    border: 'none',
    height: '18px',
    width: '24px',
})
const CloseIcon = styled(Close)({
    border: 'none',
    height: '24px',
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
    height: '24px',
    width: '24px',
    marginRight: '24px',
})

const HeaderExpandedContent = styled.div({
    marginTop: '50px',
    display: 'grid',
    gridArea: 'links',
    gap: '40px',
    marginBottom: '90px',
})

const NavLink = styled(Link)({
    ...typography.nav,
    placeSelf: 'center',
    color: colors.jet,
    textDecoration: 'none',

})

const SearchInput = styled(Input)({
    gridArea: 'search',
    margin: '30px 35px 0px 35px',

})

type Props = {
    transparent?: boolean;
}
const Header = ({transparent}: Props) => {
    const [ navStatus, setNavStatus] = useState<'closed' | 'search' | 'links'>('closed')

    const onSearchClick = () => {
        setNavStatus('search')
    }
    const onBurgerclick = () => {
        if(navStatus !== 'closed') {
            return setNavStatus('closed')
        }
        setNavStatus('links')
    }
    return (
        <StyledHeader transparent={true}>
            <InvinsibleLink to={'/'}>
                <Logo />
            </InvinsibleLink>
            <IconWrapper>
                {navStatus === 'closed' && (
                    <InvinsibleButton onClick={onSearchClick}>
                        <SearchIcon />
                    </InvinsibleButton>
                )}
                <InvinsibleLink to={'/mina-recept'}>
                    <HeartIcon />
                </InvinsibleLink>
                <InvinsibleButton onClick={onBurgerclick}>
                    {navStatus !== 'closed' ? <CloseIcon /> : <HamburgerIcon />}
                </InvinsibleButton>
            </IconWrapper>

            {navStatus === 'links' && (
                <>
                    <SearchInput placeholder={'sök...'} />
                    <HeaderExpandedContent>
                        <NavLink to={'/'}>Hem</NavLink>
                        <NavLink to={'/recept'}>Recept</NavLink>
                        <NavLink to={'/om-mig'}>Om mig</NavLink>
                        <NavLink to={'/tips'}>Tips</NavLink>
                        <NavLink to={'/bestallningar'}>Beställningar</NavLink>
                        <NavLink to={'/mina-sparade-recept'}>Mina sparade recept</NavLink>
                    </HeaderExpandedContent>
                </>
            )}
            {navStatus === 'search' && (
                <SearchInput placeholder={'sök...'} />
            )}
        </StyledHeader>
    )
}

export default Header
