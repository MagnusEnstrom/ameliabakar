import styled from '@emotion/styled'
import React, { useState } from 'react'
import Newsletter from '../../assets/newsletter.svg'
import useSubscribe from '../../hooks/subscribe'
import colors from '../../lib/colors'
import radius from '../../lib/radius'
import typography from '../../lib/typography'
import Primary from '../buttons/primary/Primary'
import Toast from '../toast/Toast'

const SubscribeWrapper = styled.div({
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '10px',
    maxWidth: '350px',
})
const IconWrapper = styled.div({
    ...typography.h2Mobile,
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
})

const NewsletterIcon = styled(Newsletter)({
    // border: 'none',
    height: '24px',
    // gridArea: 'logo',
    // placeSelf: 'center',
    // marginBottom: '40px',
})

const InputWrapper = styled.form({
    borderRadius: radius.button,
    display: 'grid',
    border: `2px solid ${colors.silver}`,
    backgroundColor: colors.white,
    position: 'relative',
    gridTemplateColumns: '1fr max-content',
})

const Input = styled.input({
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
    },
})

const ErrorMessage = styled.span({
    ...typography.note,
    display: 'block',
    color: colors.fireOpal,
    marginLeft: '23px',
    marginTop: '5px',
    // position: 'absolute',
})

const EMAIL_REGEX =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const Subscribe = ({
    ...rest
}: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
>) => {
    const [subscribeStatus, setSubscriobeStatus] = useState<'success' | 'idle'>(
        'idle'
    )

    const { mutate } = useSubscribe()
    const [error, setError] = useState<string | null>(null)
    const [value, setValue] = useState('')
    const handleSubmit = (e: React.FormEvent<HTMLDivElement>) => {
        e.preventDefault()
        setError('')
        const emailMatch = value.match(EMAIL_REGEX)
        console.log(emailMatch)
        if (!emailMatch || !emailMatch?.[0]) {
            return setError('Fel. Ange data i rätt format example@mail.com')
        }

        mutate(emailMatch?.[0], {
            onSuccess: () => {
                setValue('')
                return setSubscriobeStatus('success')
            },
        })
    }

    if (subscribeStatus === 'success') {
        return (
            <SubscribeWrapper {...rest} onSubmit={handleSubmit}>
                <IconWrapper>
                    <NewsletterIcon />
                    <span>Nyhetsbrev</span>
                </IconWrapper>
                <div>
                    <Toast
                        onClick={() => setSubscriobeStatus('idle')}
                        style={{ padding: '9.5px 25px' }}
                        variant={'subscribed'}
                    />
                </div>
            </SubscribeWrapper>
        )
    }
    return (
        <SubscribeWrapper {...rest} onSubmit={handleSubmit}>
            <IconWrapper>
                <NewsletterIcon />
                <span>Nyhetsbrev</span>
            </IconWrapper>
            <div>
                <InputWrapper>
                    <Input
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        type={'email'}
                        placeholder={'E-mail adress'}
                    />
                    {subscribeStatus === 'idle' && (
                        <>
                            <Primary
                                type={'submit'}
                                style={{ padding: '14px 25px' }}
                            >
                                Prenumerera
                            </Primary>
                        </>
                    )}
                </InputWrapper>
                <ErrorMessage>{error}</ErrorMessage>
            </div>
        </SubscribeWrapper>
    )
}

export default Subscribe
