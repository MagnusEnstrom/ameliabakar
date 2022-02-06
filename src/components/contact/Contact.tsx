import styled from '@emotion/styled'
import React from 'react'
import colors from '../../lib/colors'
import typography from '../../lib/typography'
import Primary from '../buttons/primary/Primary'
import Label from '../Form/Label'
import Input from '../Form/Input'
import TextArea from '../Form/TextArea'
import H1 from '../typography/h1/H1'
import P from '../typography/p/P'
import EmailIcon from '../../assets/email.svg'

const ContactContainer = styled.div({
    ...typography.p,
    fontWeight: 600,
    display: 'flex',
    marginBottom: '40px',
    justifySelf: 'center',
    justifyContent: 'start',
    alignItems: 'center',
    ['@media only screen and (min-width: 170ch)']: {
        justifySelf: 'end',
    },
})

const StyledLabel = styled(Label)({
    width: '100%',
    display: 'block',
    textAlign: 'start',
    paddingLeft: '22px',
    marginBottom: '5px'
})

const StyledInput = styled(Input)({
    width: '100%',
})
const StyledTextArea = styled(TextArea)({
    width: '100%',
})

const Email = styled(EmailIcon)({
    border: 'none',
    height: '24px',
    marginRight: '12px'
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

const StyledContactArea = styled.aside({
    display: 'grid',
    padding: '30px 10px',
    textAlign: 'center',
    backgroundColor: colors.cultured,
    marginBottom: '50px',
    maxWidth: '1200px',
    margin: '0px auto 50px auto',
    
    ['@media only screen and (min-width: 90ch)']: {
        padding: '50px 10px',
        margin: '0px auto 70px auto',
    },
    ['@media only screen and (min-width: 170ch)']: {
        margin: '0px auto 100px auto',
        gridTemplateColumns: '1fr 1fr',
        gridTemplateAreas: `
        "text form"
        `,
        gap: '150px',
        padding: '50px 100px',
        
    },
})
const StyledForm = styled.form({
    maxWidth: '350px',
    justifySelf: 'center',
    width: '100%',
})

const ParagraphContainer = styled.div({
    ['@media only screen and (min-width: 90ch)']: {
        textAlign: 'start',
        maxWidth: '560px',
        margin: '0px auto',
    },
    ['@media only screen and (min-width: 170ch)']: {
    },
});

const TextContainer = styled.div({
    ['@media only screen and (min-width: 170ch)']: {
        gridArea: 'text',
    },
})

const RightSideContainer = styled.div({
    display: 'grid',
    ['@media only screen and (min-width: 170ch)']: {
        gridArea: 'form',
        maxWidth: '350px',
        justifySelf: 'end',
        minWidth: '350px',
    },
})

const StyledH1 = styled(H1)({
    margin: '0px 0px 20px 0px',
    ['@media only screen and (min-width: 170ch)']: {
        textAlign: 'start',
    },
})
const Contact = ({...rest}) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return (
        <StyledContactArea id={'kontakt'} {...rest}>
            <TextContainer>
                <StyledH1>Kontakt</StyledH1>
                <ParagraphContainer>
                    <P>Undrar du över något? Hur gjorde jag den där kupolen av granatäpple-pannacotta? Eller vill du ha hjälp med något inom bakning eller samarbeta    med mig?</P>
                    <P style={{ marginBottom: '30px'}}>Tveka inte att höra av dig!</P>
                </ParagraphContainer>
            </TextContainer>
            <RightSideContainer>
                <ContactContainer>
                    <Email />
                    <StyledA href={'mailto:contact@ameliabakar.se'}>contact@ameliabakar.se</StyledA>
                </ContactContainer>
                <StyledForm onSubmit={handleSubmit}>
                <div>
                    <StyledLabel htmlFor={'name'} >Namn</StyledLabel>
                    <StyledInput id={'name'} name={'name'} />
                </div>
                <div style={{ marginTop: '22px' }}>
                    <StyledLabel htmlFor={'email'} >Email</StyledLabel>
                    <StyledInput placeholder={'example@email.com'} type={'email'} id={'email'} name={'email'} />
                </div>
                <div style={{ marginTop: '22px' }}>
                    <StyledLabel htmlFor={'question'} >Fråga</StyledLabel>
                    <StyledTextArea placeholder={'Skriv vad du vill diskutera'} rows={6} id={'question'} name={'question'} />
                </div>

                    <Primary type={'submit'} style={{ width: '100%', marginTop: '30px', marginBottom: '0px'}}>Skicka</Primary>
                </StyledForm>
            </RightSideContainer>
        </StyledContactArea>
    )
}

export default Contact
