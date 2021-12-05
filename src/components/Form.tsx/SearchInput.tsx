import styled from '@emotion/styled'
import React from 'react'
import colors from '../../lib/colors'
import radius from '../../lib/radius'
import SearchIcon from '../../assets/search.svg'


const StyledSearchIcon = styled(SearchIcon)({
    width: '24px',
    height: '24px',
    marginRight: '12px',
});

const StyledInput = styled.input({
    border: `none`,
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
const SearchInput = styled.div({
    display: 'flex',
    alignItems: 'center',
    borderRadius: radius.button,
    border: `2px solid ${colors.silver}`,
    fontWeight: 300,
    // width: '100%',
    fontSize: '16px',
    padding: '8px 10px 8px 20px',
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
const Input = ({className, ...rest}: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) => {
    return (
        <SearchInput className={className} >
            <StyledSearchIcon />
            <StyledInput {...rest} />
        </SearchInput>
    )
}

export default Input
