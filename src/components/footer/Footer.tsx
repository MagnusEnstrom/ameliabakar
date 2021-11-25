import React from 'react';
import styled from '@emotion/styled';
import LogoUrl from '../../assets/logo-oneline.svg'
import InstagramIcon from '../../assets/instagram.svg'
import EmailIcon from '../../assets/email.svg'
import colors from '../../lib/colors';
import typography from '../../lib/typography';

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
    padding: '50px 10px',
    display: 'grid',
    gridTemplateAreas: `
    "logo logo"
    "instagram instagram"
    "email email"
    "nyhetsbrev nyhetsbrev"
    "links links"
    "cookies cookies"
    "inställngar inställngar"
    "copyright copyright"
    `
})

const Footer = () => {
    return (
        <StyledFooter>
            <Logo />
            <ContactContainer style={{gridArea: 'instagram'}}>
                <Instagram />
                @ameliabakar.se
            </ContactContainer>
            <ContactContainer style={{gridArea: 'email'}}>
                <Email />
                contact@ameliabakar.se
            </ContactContainer>

            {/* nyhetsbrev */}
            {/* links */}
            {/* cookies */}
            {/* inställningar */}
            {/* copyright */}
        </StyledFooter>
    )
}

export default Footer
