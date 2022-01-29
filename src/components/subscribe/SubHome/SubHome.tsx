import React, { useState } from 'react';
import styled from '@emotion/styled';
import colors from '../../../lib/colors';
import Newsletter from '../../../assets/newsletter.svg'
import H2 from '../../typography/h2/H2';
import Primary from '../../buttons/primary/Primary';
import typography from '../../../lib/typography';
import Toast from '../../toast/Toast';
import radius from '../../../lib/radius';
import Input from '../../Form/Input';

const SubContainer = styled.form({
    backgroundColor: colors.cultured,
    display: 'grid',
    padding: '50px 20px 100px 20px',
    ['@media only screen and (min-width: 90ch)']: {
        padding: '50px 20px 50px 20px',
    }
});

const StyledH2 = styled(H2)({
    textAlign: 'center', 
    placeSelf: 'center',
    ['@media only screen and (min-width: 90ch)']: {
        display: 'none',
        ...typography.h4
    }
})
const TabletH2 = styled(H2)({
    display: 'none',
    placeSelf: 'center',
    margin: '0px',
    ['@media only screen and (min-width: 90ch)']: {
        display: 'block',
        ...typography.h4
    }
})
const NewsletterIcon = styled(Newsletter)({
    height: '24px',
    ['@media only screen and (min-width: 90ch)']: {
        display: 'block',
        marginRight: '20px',
        alignSelf: 'center',
    }
})

const InputWrapper = styled.form({
    borderRadius: radius.button,
    display: 'none',
    border: `2px solid ${colors.silver}`,
    backgroundColor: colors.white,
    position: 'relative',
    justifySelf: 'center',
    width: '350px',
    gridTemplateColumns: '1fr max-content',
    ['@media only screen and (min-width: 90ch)']: {
        display: 'grid',
    }
});

const StyledInput = styled.input({
    borderRadius: radius.button,
    paddingLeft: '20px',
    border: 'none',
    fontWeight: 300,
    width: '100%',
    fontSize: '16px',
    '::placeholder': {
        fontFamily: 'sans-serif',
        fontWeight: 300,
        fontSize: '16px',
        color: colors.silver,
    },
    ':focus-visible': {
        outline: 'none',
    }
})

const StyledPrimary = styled(Primary)({
    display: 'block',
    width: 'max-content',
    ['@media only screen and (min-width: 90ch)']: {
        display: 'none',
    }
})
const StyledFormInput = styled(Input)({
    display: 'block',
    ['@media only screen and (min-width: 90ch)']: {
        display: 'none',
    }
})
const TabletContainer = styled.div({
    placeSelf: 'center',
    ['@media only screen and (min-width: 90ch)']: {
        display: 'flex',
        marginBottom: '40px'
    }
})

const ErrorMessage = styled.span({
    ...typography.note,
    display: 'block',
    color: colors.fireOpal,
    marginLeft: '23px',
    marginTop: '5px',
    justifySelf: 'center',
})

const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const SubHome = () => {

    const [subscribeStatus, setSubscriobeStatus] = useState<'success' | 'idle'>('idle');
    const [error, setError] = useState<string | null>(null);
    const [value, setValue] = useState('');
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError('')
        const emailMatch = value.match(EMAIL_REGEX);
        if(!emailMatch) {
            return setError('Fel. Ange data i rätt format example@mail.com')
        }

        if(subscribeStatus !== 'success') {
            setValue('')
            return setSubscriobeStatus('success')
        }

        return setSubscriobeStatus('idle')
    }
    
    return (
        <SubContainer onSubmit={e => handleSubmit(e)}>
            <TabletContainer>
                <NewsletterIcon />
                <TabletH2>Nyhetsbrev! Missa inga uppdateringar, prenumerera på Amelias nyhetsbrev</TabletH2>
            </TabletContainer>
            <StyledH2 style={{margin: '30px 0px 0px 0px'}}>Nyhetsbrev!</StyledH2>
            <StyledH2 style={{ margin: '0px 0px 30px 0px', }}>Missa inga uppdateringar, prenumerera på Amelias nyhetsbrev</StyledH2>
            <StyledFormInput placeholder={'E-mail adress'} />
            <InputWrapper>
                    <StyledInput value={value} onChange={(e) => setValue(e.target.value)} type={'email'} placeholder={'E-mail adress'}  />
                    {subscribeStatus !== 'success' && 
                        <>
                            <Primary type={'submit'} style={{padding: '14px 25px'}}>Prenumerera</Primary>
                        </>
                    }
                    {subscribeStatus === 'success' && 
                        <Toast onClick={() => setSubscriobeStatus('idle')} style={{padding: '9.5px 25px'}} variant={'subscribed'} />
                    }
            </InputWrapper>
            <ErrorMessage>{error}</ErrorMessage>
            <StyledPrimary type={'submit'} style={{ placeSelf: 'center', marginTop: '20px' }}>Prenumerera</StyledPrimary>
        </SubContainer>
    )
}

export default SubHome
