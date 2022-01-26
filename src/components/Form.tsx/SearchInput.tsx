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

type Props = {
    getSearch: (data: {
        id: string;
        slug: string;
    }[]) => void;
}

const Input = ({className, getSearch, ...rest}: Props & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) => {
    const data = useStaticQuery<LocalSearchRecepies>(graphql`
        {
            localSearchRecepies {
            index
            store
        }
     }
    `)
    
    const [value, setValue] = useState('')
    const searchData = useFlexSearch(value, data.localSearchRecepies.index, data.localSearchRecepies.store) as {id: string; slug: string}[];

    useEffect(() => {
        if(!getSearch) return;
        getSearch(searchData);
    }, [searchData])

    return (
        <SearchInput className={className} >
            <StyledSearchIcon />
            <StyledInput {...rest} value={value} onChange={(e) => setValue(e.target.value)} />
        </SearchInput>
    )
}

export default Input
