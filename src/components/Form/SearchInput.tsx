import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'
import colors from '../../lib/colors'
import radius from '../../lib/radius'
import SearchIcon from '../../assets/search.svg'
import { useFlexSearch } from 'react-use-flexsearch'
import { graphql, useStaticQuery } from 'gatsby'
import { LocalSearchRecepies } from '../../graphql/types/ReceptContentType'


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
const SearchInputComponent = styled.div({
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



const SearchInput = ({className, ...rest}:  & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) => {
    return (
        <SearchInputComponent className={className} >
            <StyledSearchIcon />
            <StyledInput {...rest} />
        </SearchInputComponent>
    )
}

export default SearchInput
