import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'
import colors from '../../lib/colors'
import radius from '../../lib/radius'
import SearchIcon from '../../assets/search.svg'
import { useFlexSearch } from 'react-use-flexsearch'
import { graphql, useStaticQuery } from 'gatsby'
import { LocalSearchRecepies } from '../../graphql/types/ReceptContentType'
import SearchInput from './SearchInput'


type Props = {
    getSearch: (data: {
        id: string;
        slug: string;
    }[]) => void;
    setValue: React.Dispatch<React.SetStateAction<string>>;
    
}

const SearchInputFilter = ({className, getSearch, value, setValue, ...rest}: Props & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) => {
    const data = useStaticQuery<LocalSearchRecepies>(graphql`
        {
            localSearchRecepies {
            index
            store
        }
     }
    `)
    
    const searchData = useFlexSearch(value, data.localSearchRecepies.index, data.localSearchRecepies.store) as {id: string; slug: string}[];

    useEffect(() => {
        if(!getSearch) return;
        getSearch(searchData);
    }, [searchData])

    return (
        <SearchInput {...rest}  className={className}  value={value} onChange={(e) => setValue(e.target.value)}  />   
    )
}

export default SearchInputFilter
