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
type NavStatus = "closed" | "search" | "links";

const StyledHeader = styled.header(({transparent, navStatus}: {transparent?: boolean, navStatus: NavStatus}) => {
    return {
    ...typography.nav,
    backgroundColor: navStatus === 'closed' ? transparent ? 'rgba(0, 0 ,0 ,0)' : colors.white : colors.white,
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


const Logo = styled(LogoUrl)(({noImg}: { noImg?: boolean}) => {
    return {
        border: 'none',
        height: '24px',
        width: '97px',
        gridArea: 'logo',
        'header[aria-expanded="false"] &': {
            filter: noImg ? 'brightness(0)' : 'brightness(100)'
        }
    }
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

const HamburgerIcon = styled(Hamburger)(({noImg}: { noImg?: boolean}) => {
    return {
        border: 'none',
        height: '24px',
        width: '24px',
        'header[aria-expanded="false"] &': {
            filter: noImg ? 'brightness(0)' : 'brightness(100)'
        }
    }
})
const CloseIcon = styled(Close)({
    border: 'none',
    height: '24px',
    width: '24px',
})
const HeartIcon = styled(Heart)(({noImg}: { noImg?: boolean}) => {
   return {
        border: 'none',
        height: '22.5px',
        width: '25px',
        marginRight: '31px',

        'header[aria-expanded="false"] &': {
            filter: noImg ? 'brightness(0)' : 'brightness(100)'
        }
    }
})
const SearchIcon = styled(Search)(({noImg}: { noImg?: boolean}) => {
    return {
        border: 'none',
        height: '24px',
        width: '24px',
        marginRight: '24px',

        'header[aria-expanded="false"] &': {
            filter: noImg ? 'brightness(0)' : 'brightness(100)'
        }
    }
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
    noImg?: boolean;
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
const Header = ({transparent, noImg, ...rest}: Props) => {
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
        <StyledHeader aria-expanded={navStatus !== 'closed'} navStatus={navStatus} transparent={true} {...rest}>
            <InvinsibleLink to={'/'}>
                <Logo noImg={noImg} />
            </InvinsibleLink>
            <IconWrapper>
                {navStatus === 'closed' && (
                    <InvinsibleButton onClick={onSearchClick}>
                        <SearchIcon noImg={noImg} />
                    </InvinsibleButton>
                )}
                <InvinsibleLink to={'/mina-recept'}>
                    <HeartIcon noImg={noImg} />
                </InvinsibleLink>
                <InvinsibleButton onClick={onBurgerclick}>
                    {navStatus !== 'closed' ? <CloseIcon /> : <HamburgerIcon noImg={noImg} />}
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
