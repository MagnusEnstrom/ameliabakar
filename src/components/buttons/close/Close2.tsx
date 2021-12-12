import styled from '@emotion/styled';
import React from 'react';
import CloseIcon from '../../../assets/close.svg';

const InvinsibleButton = styled.button({
    border: 'none',
    backgroundColor: 'inherit',
    cursor: 'pointer',
})
const StyledCloseIcon = styled(CloseIcon)({
    '& svg': {
        height: '24px',
        width: '24px',
    }
})

const Close = ({...rest}: & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => {
    return (
        <InvinsibleButton {...rest}>
            <StyledCloseIcon />
        </InvinsibleButton>
    )
}

export default Close
