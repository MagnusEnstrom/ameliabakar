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
    alignItems: 'center',
    marginLeft: '4px',
})
const ContactContainerInsta = styled(ContactContainer)({
    marginLeft: '2px',
    ['@media only screen and (min-width: 90ch)']: {
        marginBottom: '0px',
        alignSelf: 'end',
    }
})

const Email = styled(EmailIcon)({
    border: 'none',
    height: '24px',
    marginRight: '12px'
})

const StyledFooter = styled.footer({
    margin: '0 auto',
    backgroundColor: colors.cultured,
    padding: '50px 20px',
    display: 'grid',
    gridTemplateAreas: `
    "logo logo"
    "EmailAndSocial EmailAndSocial"
    "links links"
    "cookies cookies"
    "copyright copyright"
    `,
    
    ['@media only screen and (min-width: 90ch)']: {
        maxWidth: '1360px',
        gridTemplateColumns: '1fr 1fr',
        gap: '0px 30px',
        gridTemplateAreas: `
            "logo logo"
            "EmailAndSocial EmailAndSocial"
            "links links"
            "cookies cookies"
            "copyright copyright"
        `,
    },
    
    ['@media only screen and (min-width: 170ch)']: {
        gridTemplateAreas: `
            "logo logo"
            "EmailAndSocial EmailAndSocial"
            "links links"
            "copyright cookies"
        `,
        paddingBottom: '100px',
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

    ['@media only screen and (min-width: 90ch)']: {
        display: 'flex',
        placeSelf: 'center',
        width: '100%',
        justifyContent: 'space-between',
        marginBottom: '50px',
        maxWidth: '800px'
    }
})

const Copyright = styled.p({
    ...typography.p,
    color: colors.silver,
    gridArea: 'copyright',
    marginTop: '50px',
    marginBottom: '50px',
    textAlign: 'center',
    
    ['@media only screen and (min-width: 170ch)']: {
        margin: '0px',
        justifySelf: 'start',
    }

})

const StyledCookie = styled(Link)({
    ...typography.p,
    margin: '0px',
    textDecoration: 'none',
    color: colors.silver,
    placeSelf: 'center',
    ['@media only screen and (min-width: 90ch)']: {
        placeSelf: undefined,
        justifySelf: 'start',
        margin: '0px',
    }
})
const StyledCookieSettings = styled(Link)({
    ...typography.p,
    margin: '0px',
    gridArea: 'settings',
    textDecoration: 'none',
    color: colors.silver,
    placeSelf: 'center',
    
    ['@media only screen and (min-width: 90ch)']: {
        placeSelf: undefined,
        justifySelf: 'end',
        margin: '0px',
    }
})

const StyledSubscribe = styled(Subscribe)({
})

const Container = styled.div({
    backgroundColor: colors.cultured,
    width: '100%',
})

const EmailAndSocialContainer = styled.div({
    display: 'grid',
    justifyContent: 'center',
    justifySelf: 'center',
    gridArea: 'EmailAndSocial',
    gridTemplateAreas: `
        "instagram"
        "email"
        "nyhetsbrev"
    `,
    ['@media only screen and (min-width: 90ch)']: {
        gridTemplateAreas: `
            "instagram nyhetsbrev"
            "email nyhetsbrev"
        `,
        width: '100%',
        justifyContent: 'space-between',
        maxWidth: '800px'
    }

});

const Cookies = styled.div({
    display: 'flex',
    flexDirection: 'column',
    gridArea: 'cookies',
    marginTop: '50px',
    gap: '20px',
    ['@media only screen and (min-width: 170ch)']: {
        gap: '30px',
        flexDirection: 'row',
        margin: '0px',
        justifySelf: 'end',
    }
})

const Footer = () => {
    return (
        <Container>
            <StyledFooter>
                <Logo />

                <EmailAndSocialContainer>
                    <ContactContainerInsta style={{gridArea: 'instagram'}}>
                        <Instagram />
                        <StyledA href={'https://www.instagram.com/ameliabakar.se/'} rel="noopener" target={'_blank'}>@ameliabakar.se</StyledA>
                    </ContactContainerInsta>
                    <ContactContainer style={{gridArea: 'email'}}>
                        <Email />
                        <StyledA href={'mailto:contact@ameliabakar.se'}>contact@ameliabakar.se</StyledA>
                    </ContactContainer>

                    <StyledSubscribe style={{gridArea: 'nyhetsbrev', marginTop: '20px', marginBottom: '30px'}} />
                </EmailAndSocialContainer>
                <Nav>
                    <Link to={'/'}>Hem</Link>
                    <Link to={'/tips'}>Tips</Link>
                    <Link to={'/recept'}>Recept</Link>
                    <Link to={'/bestallningar'}>Beställningar</Link>
                    <Link to={'/om-mig'}>Om mig</Link>
                    <Link to={'/mina-recept'}>Mina sparade recept</Link>
                </Nav>

                <Cookies>
                    <StyledCookie to={'/cookies'}>Cookies</StyledCookie>
                    <StyledCookieSettings to={'/cookies-settings'}>Cookieinställningar</StyledCookieSettings>
                </Cookies>

                <Copyright>
                    Copyright © {(new Date).getFullYear()} Amelia Bakar. All rights reserved
                </Copyright>
            </StyledFooter>
        </Container>
    )
}

export default Footer
