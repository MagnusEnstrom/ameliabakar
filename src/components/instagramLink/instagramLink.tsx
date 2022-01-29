import styled from '@emotion/styled';
import React from 'react';
import colors from '../../lib/colors';
import typography from '../../lib/typography';
import InstagramIcon from '../../assets/instagram.svg';


const Instagram = styled(InstagramIcon)({
    border: 'none',
    height: '24px',
    marginRight: '12px'
})

const ContactContainer = styled.div({
    ...typography.p,
    fontWeight: 600,
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
})

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

const InstagramLink = ({...rest}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
  return (
        <ContactContainer {...rest}>
                <Instagram />
                <StyledA href={'https://www.instagram.com/ameliabakar.se/'} rel="noopener" target={'_blank'}>ameliabakar.se</StyledA>
        </ContactContainer>

  );
};

export default InstagramLink;


