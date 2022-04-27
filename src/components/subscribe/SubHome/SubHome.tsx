import React, { useState } from 'react'
import styled from '@emotion/styled'
import colors from '../../../lib/colors'
import Newsletter from '../../../assets/newsletter.svg'
import H2 from '../../typography/h2/H2'
import Primary from '../../buttons/primary/Primary'
import typography from '../../../lib/typography'
import Toast from '../../toast/Toast'
import radius from '../../../lib/radius'
import Input from '../../Form/Input'
import { handleSubmitFactory } from '../Subscribe'
import useSubscribe from '../../../hooks/subscribe'

const SubContainer = styled.div({
    backgroundColor: colors.cultured,
    display: 'grid',
    padding: '50px 20px 100px 20px',
    ['@media only screen and (min-width: 90ch)']: {
        padding: '50px 20px 50px 20px',
    },
    ['@media only screen and (min-width: 170ch)']: {
        padding: '100px 30px 100px 30px',
    },
})

const StyledH2 = styled(H2)({
    textAlign: 'center',
    placeSelf: 'center',
    ['@media only screen and (min-width: 90ch)']: {
        display: 'none',
        ...typography.h4,
    },
    ['@media only screen and (min-width: 170ch)']: {
        display: 'block',
        ...typography.h3,
    },
})
const TabletH2 = styled(H2)({
    display: 'none',
    placeSelf: 'center',
    margin: '0px',
    ['@media only screen and (min-width: 90ch)']: {
        display: 'block',
        ...typography.h4,
    },
    ['@media only screen and (min-width: 170ch)']: {
        display: 'none',
    },
})
const NewsletterIcon = styled(Newsletter)({
    height: '30px',
    width: '30px',
    ['@media only screen and (min-width: 90ch)']: {
        display: 'block',
        marginRight: '20px',
        alignSelf: 'center',
    },
    ['@media only screen and (min-width: 170ch)']: {
        height: '42px',
        width: '42px',
        display: 'block',
        marginRight: '0px',
        alignSelf: 'center',
    },
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
    },
    ['@media only screen and (min-width: 170ch)']: {
        display: 'none',
    },
})

const StyledInput = styled.input({
    borderRadius: radius.button,
    paddingLeft: '20px',
    border: 'none',
    lineHeight: 'inherit',
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
    },
})

const StyledPrimary = styled.button({
    ...typography.button,
    padding: '14px 40px 14px 40px',

    backgroundColor: colors.laruelGreen,
    color: colors.white,
    border: 'none',
    borderRadius: radius.button,

    '&:hover': {
        backgroundColor: colors.jet,
    },
    '&:disabled': {
        backgroundColor: colors.grey,
        color: colors.silver,
    },
    display: 'block',
    width: 'max-content',
    placeSelf: 'center',
    marginTop: '20px',
    ['@media only screen and (min-width: 90ch)']: {
        display: 'none',
    },
    ['@media only screen and (min-width: 170ch)']: {
        display: 'block',
    },
})
const StyledFormInput = styled(Input)({
    display: 'block',
    ['@media only screen and (min-width: 90ch)']: {
        display: 'none',
    },
    ['@media only screen and (min-width: 170ch)']: {
        display: 'block',
    },
})
const TabletContainer = styled.div({
    placeSelf: 'center',
    ['@media only screen and (min-width: 90ch)']: {
        display: 'flex',
        marginBottom: '40px',
    },
    ['@media only screen and (min-width: 170ch)']: {
        display: 'block',
        marginBottom: '0px',
    },
})

const ErrorMessage = styled.span({
    ...typography.note,
    display: 'block',
    color: colors.fireOpal,
    marginLeft: '23px',
    marginTop: '5px',
    justifySelf: 'center',
})

const SubHome = ({ ...rest }) => {
    const [subscribeStatus, setSubscriobeStatus] = useState<'success' | 'idle'>(
        'idle'
    )
    const { mutate } = useSubscribe()
    const [error, setError] = useState<string | null>(null)
    const [value, setValue] = useState('')
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        handleSubmitFactory({
            e,
            mutate,
            setError,
            setValue,
            value,
            setSubscriobeStatus,
        })
    }

    return (
        <SubContainer {...rest}>
            <TabletContainer>
                <NewsletterIcon />
                <TabletH2>
                    Nyhetsbrev! Missa inga uppdateringar, prenumerera på Amelias
                    nyhetsbrev
                </TabletH2>
            </TabletContainer>
            <StyledH2 style={{ margin: '30px 0px 0px 0px' }}>
                Nyhetsbrev!
            </StyledH2>
            <StyledH2 style={{ margin: '0px 0px 30px 0px' }}>
                Missa inga uppdateringar, prenumerera på Amelias nyhetsbrev
            </StyledH2>
            <StyledFormInput placeholder={'E-mail adress'} />
            <InputWrapper onSubmit={e => handleSubmit(e)}>
                <StyledInput
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    type={'email'}
                    placeholder={'E-mail adress'}
                />
                {subscribeStatus !== 'success' && (
                    <>
                        <Primary
                            type={'submit'}
                            style={{ padding: '14px 25px' }}
                        >
                            Prenumerera
                        </Primary>
                    </>
                )}
                {subscribeStatus === 'success' && (
                    <Toast
                        onClick={() => setSubscriobeStatus('idle')}
                        style={{ padding: '9.5px 25px' }}
                        variant={'subscribed'}
                    />
                )}
            </InputWrapper>
            <ErrorMessage>{error}</ErrorMessage>
            <StyledPrimary type={'submit'}>Prenumerera</StyledPrimary>
        </SubContainer>
    )
}

export default SubHome
