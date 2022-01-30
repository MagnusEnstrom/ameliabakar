import React from 'react';
import styled from '@emotion/styled';
import LogoUrl from '../../assets/logo-oneline.svg'
import InstagramIcon from '../../assets/instagram.svg'
import EmailIcon from '../../assets/email.svg'
import colors from '../../lib/colors';
import typography from '../../lib/typography';
import Subscribe from '../subscribe/Subscribe';
import { Link } from 'gatsby';

const Logo = styled(LogoUrl)({
    border: 'none',
    height: '30px',
    gridArea: 'logo',
    placeSelf: 'center',
    marginBottom: '40px',
})

const Instagram = styled(InstagramIcon)({
    border: 'none',
    height: '24px',
    marginRight: '12px'
})

const ContactContainer = styled.div({
    ...typography.p,
    fontWeight: 600,
    display: 'flex',
    marginBottom: '20px',
    justifyContent: 'start',
    alignItems: 'center',
    marginLeft: '32px',
})
const ContactContainerInsta = styled(ContactContainer)({
    marginLeft: '30px',
    ['@media only screen and (min-width: 70ch)']: {
        marginBottom: '0px',
        alignSelf: 'end',
    }
})

const Email = styled(EmailIcon)({
    border: 'none',
    height: '24px',
    marginRight: '12px'
})

const StyledFooter = styled.div({
    backgroundColor: colors.cultured,
    padding: '50px 20px',
    display: 'grid',
    gridTemplateAreas: `
        "logo logo"
        "instagram instagram"
        "email email"
        "nyhetsbrev nyhetsbrev"
        "links links"
        "cookies cookies"
        "settings settings"
        "copyright copyright"
    `,

    ['@media only screen and (min-width: 70ch)']: {
        gridTemplateColumns: '1fr 1fr',
        gap: '0px 30px',
        gridTemplateAreas: `
            "logo logo"
            "instagram nyhetsbrev"
            "email nyhetsbrev"
            "links links"
            "settings cookies"
            "copyright copyright"
        `,
    }
});

const StyledA = styled.a({
    ...typography.p,
    fontWeight: 600,
    color: colors.jet,
    cursor: 'pointer',
    textDecoration: 'none',
    '&:hover': {
        color: colors.silver,
    }
});

const Nav = styled.nav({
    display: 'grid',
    padding: '10px',
    width: '100%',
    gap: '20px',
    gridTemplateColumns: '1fr max-content',
    gridArea: 'links',
    fontSize: '16px',
    fontWeight: 300,
    a: {
        ...typography.p,
        color: colors.jet,
        cursor: 'pointer',
        textDecoration: 'none',
    },
    '& a:hover': {
        color: colors.silver,
    },

    ['@media only screen and (min-width: 70ch)']: {
        display: 'flex',
        placeSelf: 'center',
        width: 'max-content',
        marginBottom: '50px',
    }
})

const Copyright = styled.p({
    ...typography.p,
    color: colors.silver,
    gridArea: 'copyright',
    marginTop: '50px',
    marginBottom: '50px',
    textAlign: 'center',

})

const StyledCookie = styled(Link)({
    marginTop: '40px',
    gridArea: 'cookies',
    ...typography.p,
    textDecoration: 'none',
    color: colors.silver,
    placeSelf: 'center',
    ['@media only screen and (min-width: 70ch)']: {
        placeSelf: undefined,
        justifySelf: 'start',
        margin: '0px',
    }
})
const StyledCookieSettings = styled(Link)({
    marginTop: '20px',
    ...typography.p,
    gridArea: 'settings',
    textDecoration: 'none',
    color: colors.silver,
    placeSelf: 'center',
    
    ['@media only screen and (min-width: 70ch)']: {
        placeSelf: undefined,
        justifySelf: 'end',
        margin: '0px',
    }
})

const StyledSubscribe = styled(Subscribe)({
    justifySelf: 'end',
})

const Footer = () => {
    return (
        <StyledFooter>
            <Logo />
            <ContactContainerInsta style={{gridArea: 'instagram'}}>
                <Instagram />
                <StyledA href={'https://www.instagram.com/ameliabakar.se/'} rel="noopener" target={'_blank'}>@ameliabakar.se</StyledA>
            </ContactContainerInsta>
            <ContactContainer style={{gridArea: 'email'}}>
                <Email />
                <StyledA href={'mailto:contact@ameliabakar.se'}>contact@ameliabakar.se</StyledA>
            </ContactContainer>

            <StyledSubscribe style={{gridArea: 'nyhetsbrev', marginTop: '20px', marginBottom: '30px'}} />
            <Nav>
                <Link to={'/'}>Hem</Link>
                <Link to={'/tips'}>Tips</Link>
                <Link to={'/recept'}>Recept</Link>
                <Link to={'/bestallningar'}>Beställningar</Link>
                <Link to={'/om-mig'}>Om mig</Link>
                <Link to={'/mina-sparade-recept'}>Mina sparade recept</Link>
            </Nav>

            <StyledCookie to={'/cookies'}>Cookies</StyledCookie>
            <StyledCookieSettings to={'/cookies-settings'}>Cookieinställningar</StyledCookieSettings>

            <Copyright>
                Copyright © {(new Date).getFullYear()} Amelia Bakar. All rights reserved
            </Copyright>
        </StyledFooter>
    )
}

export default Footer
