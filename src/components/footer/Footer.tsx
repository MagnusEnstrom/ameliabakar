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
    `
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
})

const Copyright = styled.p({
    ...typography.p,
    color: colors.silver,
    gridArea: 'copyright',
    marginTop: '50px',
    marginBottom: '50px',
    textAlign: 'center',

})

const Footer = () => {
    return (
        <StyledFooter>
            <Logo />
            <ContactContainer style={{gridArea: 'instagram'}}>
                <Instagram />
                <StyledA href={'https://www.instagram.com/ameliabakar.se/'} target={'_blank'}>@ameliabakar.se</StyledA>
            </ContactContainer>
            <ContactContainer style={{gridArea: 'email'}}>
                <Email />
                <StyledA href={'mailto:contact@ameliabakar.se'}>contact@ameliabakar.se</StyledA>
            </ContactContainer>

            <Subscribe style={{gridArea: 'nyhetsbrev', marginTop: '20px', marginBottom: '30px'}} />
            <Nav>
                <Link to={'/'}>Hem</Link>
                <Link to={'/tips'}>Tips</Link>
                <Link to={'/resept'}>Recept</Link>
                <Link to={'/bestallningar'}>Beställningar</Link>
                <Link to={'/om-mig'}>Om mig</Link>
                <Link to={'/mina-sparade-recept'}>Mina sparade recept</Link>
            </Nav>

            <Link to={'/cookies'} style={{
                marginTop: '40px',
                gridArea: 'cookies',
                ...typography.p,
                textDecoration: 'none',
                color: colors.silver,
                placeSelf: 'center',
            }}>Cookies</Link>
            <Link to={'/cookies-settings'} style={{
                marginTop: '20px',
                ...typography.p,
                gridArea: 'settings',
                textDecoration: 'none',
                color: colors.silver,
                placeSelf: 'center',
            }}>Cookieinställningar</Link>

            <Copyright>
                Copyright © 2021 Amelia Bakar. All rights reserved
            </Copyright>

            {/* nyhetsbrev */}
            {/* links */}
            {/* cookies */}
            {/* inställningar */}
            {/* copyright */}
        </StyledFooter>
    )
}

export default Footer
