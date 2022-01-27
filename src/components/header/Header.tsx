import styled from '@emotion/styled'
import React, { FormEvent, useState } from 'react'
import colors from '../../lib/colors'
import typography from '../../lib/typography'
import Hamburger from '../../assets/hamburger-menu.svg'
import Heart from '../../assets/heart.svg'
import Search from '../../assets/search.svg'
import LogoUrl from '../../assets/logo.svg'
import Close from '../../assets/close.svg'
import { Link, navigate } from 'gatsby'
import SearchInput from '../Form/SearchInput'
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


const Logo = styled(LogoUrl)(() => {
    return {
        border: 'none',
        height: '24px',
        width: '97px',
        gridArea: 'logo',
        'header[aria-expanded="false"] &': {
            filter: 'brightness(100)'
        },
        'header[aria-expanded="false"] &.noimg ': {
            filter: 'brightness(0)'
        },
    }
})

const IconWrapper = styled.div({
    marginLeft: 'auto',
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

const HamburgerIcon = styled(Hamburger)(() => {
    return {
        border: 'none',
        height: '24px',
        width: '24px',
        'header[aria-expanded="false"] &': {
            filter: 'brightness(100)'
        },
        'header[aria-expanded="false"] &.noimg ': {
            filter: 'brightness(0)'
        },
    }
})
const CloseIcon = styled(Close)({
    border: 'none',
    height: '24px',
    width: '24px',
})
const HeartIcon = styled(Heart)(() => {
   return {
        border: 'none',
        height: '22.5px',
        width: '25px',
        marginRight: '31px',

        'header[aria-expanded="false"] &': {
            filter: 'brightness(100)'
        },
        'header[aria-expanded="false"] &.noimg ': {
            filter: 'brightness(0)'
        },
    }
})
const SearchIcon = styled(Search)(() => {
    return {
        border: 'none',
        height: '24px',
        width: '24px',
        marginRight: '24px',

        'header[aria-expanded="false"] &': {
            filter: 'brightness(100)'
        },
        'header[aria-expanded="false"] &.noimg ': {
            filter: 'brightness(0)'
        },
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

const SearchForm = styled.form({
    gridArea: 'search',
})

const StyledSearchInput = styled(SearchInput)({
    margin: '30px 35px 0px 35px',

})

type Props = {
    transparent?: boolean;
    onlynav?: boolean;
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
const Header = ({transparent, onlynav, ...rest}: Props) => {
    const [ navStatus, setNavStatus] = useState<'closed' | 'search' | 'links'>('closed')
    const [query, setQuery] = useState('');

    const onSearchClick = () => {
        setNavStatus('search')
    }
    const onBurgerclick = () => {
        if(navStatus !== 'closed') {
            return setNavStatus('closed')
        }
        setNavStatus('links')
    }

    const handleSearchSubmit = (e: FormEvent) => { 
        e.preventDefault();
        setNavStatus('closed')
        navigate(`/recept?q=${query}`)

    }
    return (
        <StyledHeader aria-expanded={navStatus !== 'closed'} navStatus={navStatus} transparent={true} {...rest}>
            <InvinsibleLink to={'/'}>
                <Logo className={onlynav ? 'noimg' : ''} />
            </InvinsibleLink>
            <IconWrapper>
                {navStatus === 'closed' && (
                    <InvinsibleButton data-cy={'searchIconHeader'} onClick={onSearchClick}>
                        <SearchIcon className={onlynav ? 'noimg' : ''} />
                    </InvinsibleButton>
                )}
                <InvinsibleLink to={'/mina-recept'}>
                    <HeartIcon className={onlynav ? 'noimg' : ''} />
                </InvinsibleLink>
                <InvinsibleButton onClick={onBurgerclick}>
                    {navStatus !== 'closed' ? <CloseIcon /> : <HamburgerIcon className={onlynav ? 'noimg' : ''} />}
                </InvinsibleButton>
            </IconWrapper>

            {navStatus === 'links' && (
                <>
                    <SearchForm onSubmit={handleSearchSubmit} role={'search'}>
                        <StyledSearchInput value={query} onChange={(e) => setQuery(e.target.value)} aria-label='search' name={'search'} placeholder={'sök...'} />
                    </SearchForm>
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
                <SearchForm onSubmit={handleSearchSubmit} role={'search'} >
                    <StyledSearchInput value={query} onChange={(e) => setQuery(e.target.value)} aria-label='search' name={'search'} placeholder={'sök...'} />
                </SearchForm>
            )}
        </StyledHeader>
    )
}

export default Header
