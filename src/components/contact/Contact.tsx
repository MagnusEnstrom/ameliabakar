import styled from '@emotion/styled'
import React from 'react'
import colors from '../../lib/colors'
import typography from '../../lib/typography'
import Primary from '../buttons/primary/Primary'
import Label from '../Form.tsx/Label'
import Input from '../Form.tsx/Input'
import TextArea from '../Form.tsx/TextArea'
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
})
const StyledForm = styled.form({
    maxWidth: '350px',
    placeSelf: 'center',
    width: '100%',
})

const Contact = ({...rest}) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return (
        <StyledContactArea {...rest}>

            <H1 id={'kontakt'} style={{ margin: '0px 0px 20px 0px'}}>Kontakt</H1>
            <P>Undrar du över något? Hur gjorde jag den där kupolen av granatäpple-pannacotta? Eller vill du ha hjälp med något inom bakning eller samarbeta    med mig?</P>
            <P style={{ marginBottom: '30px'}}>Tveka inte att höra av dig!</P>
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
        </StyledContactArea>
    )
}

export default Contact
