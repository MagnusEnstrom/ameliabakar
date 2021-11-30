import React from 'react';
import styled from '@emotion/styled';
import colors from '../../../lib/colors';
import Newsletter from '../../../assets/newsletter.svg'
import H2 from '../../typography/h2/H2';
import Input from '../../Form.tsx/Input';
import Primary from '../../buttons/primary/Primary';

const SubContainer = styled.form({
    backgroundColor: colors.cultured,
    display: 'grid',
    padding: '50px 20px 100px 20px',
});

const NewsletterIcon = styled(Newsletter)({
    height: '24px',
    placeSelf: 'center',
})

const SubHome = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }
    
    return (
        <SubContainer onSubmit={e => handleSubmit(e)}>
            <NewsletterIcon />
            <H2 style={{ textAlign: 'center', margin: '30px 0px 0px 0px' }}>Nyhetsbrev!</H2>
            <H2 style={{ textAlign: 'center', marginTop: '0px' }}>Missa inga uppdateringar, prenumerera på Amelias nyhetsbrev</H2>
            <Input style={{ marginBottom: '20px' }} placeholder={'E-mail adress'} />
            <Primary type={'submit'} style={{ placeSelf: 'center' }}>Prenumerera</Primary>
        </SubContainer>
    )
}

export default SubHome
