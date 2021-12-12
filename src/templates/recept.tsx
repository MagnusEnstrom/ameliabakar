import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'
import Breadcrumbs from '../components/breadcrumbs/Breadcrumbs'
import Close from '../components/buttons/close/Close'
import Secondary from '../components/buttons/secondary/Secondary'
import Chip from '../components/chips/Chip'
import Fab from '../components/fab/Fab'
import RecipeFilter from '../components/filter/RecipeFilter'
import SearchInput from '../components/Form.tsx/SearchInput'
import Layout from '../components/layout'
import Latest from '../components/recipes/latest/Latest'
import RecipeGrid from '../components/recipes/recipeGrid/RecipeGrid'
import H1 from '../components/typography/h1/H1'
import H2 from '../components/typography/h2/H2'
import { ReceptPageQuery } from '../graphql/types/ReceptContentType'
import colors from '../lib/colors'

const RecipeWrapper = styled.div({
    margin: '10px 10px 30px 10px',
})

const PageWrapper = styled.div({
    display: 'grid',
})

const StyledSearch = styled(SearchInput)({
    margin: '0px 20px 20px 10px',
    width: '100%',
})


const Lightbox = styled.div({
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    zIndex: 100,

});
const FilterContainer = styled.div({
    marginLeft: '10%',
    height: '100%',
    padding: '25px 20px 0px 20px',
    backgroundColor: colors.white,
    display: 'grid',
    gridTemplateRows: 'max-content max-content 1fr',
    gridTemplateAreas: `
    "close"
    "title"
    "filter"
    `,
});

const ChipContainer = styled.div({
    overflowY: 'scroll',
})

const SearchWrapper = styled.div({
    margin: '0px 10px 20px 0px',
    gap: '10px',
    display: 'flex',
})

type Props = {pageContext: ReceptPageQuery}
const recept = ({pageContext}: Props) => {
    const [expanded, setExpanded] = useState(false);

    const [filteredRecipes, setFilteredRecipes] = useState(pageContext.nodes);
    const [activeFilters, setActiveFilters] = useState<string[]>([]);

    const handleFilterClick = (name: string) => {
        const includesName = activeFilters.includes(name);

        if(includesName) {
            return setActiveFilters(prev => [...prev].filter(activeFilter => activeFilter !== name));
        }
        setActiveFilters(prev => [...prev, name]);
    }

    useEffect(() => {
        let afterFilter = pageContext.nodes;
        
        activeFilters.forEach(filterTag => {
            afterFilter = afterFilter.filter(recipe => {
                const tags = recipe.tags.nodes.map(tag => tag.name);
                return tags.includes(filterTag)
            })
        })
        setFilteredRecipes(afterFilter);
    }, [activeFilters])

    return (
        <Layout>
            <PageWrapper>
                <Breadcrumbs style={{margin: '20px 10px 0px 10px'}} crumbs={[{name: 'Hem', to:'/'}, {name: 'Recept', to: '/recept'}]} />
                <H1 style={{ textAlign: 'center', margin: '20px' }}>Recept</H1>
                <SearchWrapper>
                    <StyledSearch placeholder={'Sök recept'} />
                    <Fab onClick={() => setExpanded(true)} aria-label={'show filter'} style={{padding: '0px'}} variant={'filter'} />
                </SearchWrapper>
                {expanded && 
                    <Lightbox>
                        <FilterContainer>
                            <Close onClick={() => setExpanded(false)} aria-label={'close filter'} style={{ gridArea: 'close', placeSelf: 'start end' }} />
                            <H2 style={{ gridArea: 'title', placeSelf: 'start', margin: '6px 0px 20px 0px'}} >Filtrera</H2>
                            <ChipContainer>
                                <RecipeFilter activeFilters={activeFilters} handleFilterClick={handleFilterClick} recipes={filteredRecipes} />
                            </ChipContainer>
                        </FilterContainer>
                    </Lightbox>
                }
                <RecipeWrapper>
                    <RecipeGrid data={filteredRecipes} loadMore={true} show={10} />
                </RecipeWrapper>
                
            </PageWrapper>
        </Layout>
    )
}

export default recept
