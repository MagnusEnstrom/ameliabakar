import styled from '@emotion/styled'
import React from 'react'
import colors from '../../lib/colors'
import radius from '../../lib/radius'

const StyledTextArea = styled.textarea({
    borderRadius: '10px',
    border: `2px solid ${colors.silver}`,
    fontWeight: 300,
    // width: '100%',
    fontSize: '16px',
    padding: '10px 10px 10px 20px',
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
const TextArea = ({...rest}: React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>) => {
    return (
        <StyledTextArea {...rest} />
    )
}

export default TextArea;
