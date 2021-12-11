import styled from '@emotion/styled'
import React from 'react'
import { ReceptPageQuery } from '../../graphql/types/ReceptContentType'
import Chip from '../chips/Chip'

const FilterList = styled.div({
    display: 'flex',
    gap: '10px 30px',
    flexWrap: 'wrap',
})
type Props = {
    recipes: ReceptPageQuery['nodes'];
    handleFilterClick: (name: string) => void;
    activeFilters: string[];
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
const RecipeFilter = ({recipes, handleFilterClick, activeFilters, ...rest}: Props) => {
    // unique tags
    const tags = [...new Set(recipes.map(recipe => recipe.tags.nodes.map(tag => tag.name)).flatMap(tags => tags))].sort();
    return (
        <FilterList {...rest}>
            {tags.map(tag => <Chip 
            key={tag} 
            onClick={() => handleFilterClick(tag)} 
            selected={activeFilters.includes(tag)}
            style={{placeSelf: 'start'}} 
            text={tag} 
        />)}
        </FilterList>
    )
}

export default RecipeFilter
