import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'
import Breadcrumbs from '../components/breadcrumbs/Breadcrumbs'
import Close from '../components/buttons/close/Close'
import Primary from '../components/buttons/primary/Primary'
import Fab from '../components/fab/Fab'
import RecipeFilter from '../components/filter/RecipeFilter'
import SearchInputFilter from '../components/Form/SearchInputFilter'
import Layout from '../components/layout'
import RecipeGrid from '../components/recipes/recipeGrid/RecipeGrid'
import H1 from '../components/typography/h1/H1'
import H2 from '../components/typography/h2/H2'
import { ReceptPageQuery } from '../graphql/types/ReceptContentType'
import colors from '../lib/colors'
import queryString from 'query-string'

const RecipeWrapper = styled.div({
    margin: '10px 10px 30px 10px',
})

const PageWrapper = styled.div({
    display: 'grid',
})

const StyledSearch = styled(SearchInputFilter)({
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

const filterRecipes = (pageContext: ReceptPageQuery, activeFilters: string[]) => {
    let afterFilter = pageContext.nodes;

    activeFilters.forEach(filterTag => {
        afterFilter = afterFilter.filter(recipe => {
            const tags = recipe.tags.nodes.map(tag => tag.name);
            return tags.includes(filterTag)
        })
    })

    return afterFilter;
}
type Props = {pageContext: ReceptPageQuery}
const recept = ({pageContext}: Props) => {
    const [expanded, setExpanded] = useState(false);

    const [filteredRecipes, setFilteredRecipes] = useState(pageContext.nodes);
    const [activeFilters, setActiveFilters] = useState<string[]>([]);
    const [searchData, setSearchData] = useState<string[]>([]);
    const [value, setValue] = useState(queryString.parse(location.search).q ?? '')

    const handleFilterClick = (name: string) => {
        const includesName = activeFilters.includes(name);

        if(includesName) {
            return setActiveFilters(prev => [...prev].filter(activeFilter => activeFilter !== name));
        }
        setActiveFilters(prev => [...prev, name]);
    }

    useEffect(() => {
        const afterFilter = filterRecipes(pageContext, activeFilters)
        setFilteredRecipes(afterFilter);
        if(!searchData.length && !value ) return setFilteredRecipes(afterFilter);
        const found = afterFilter.filter(recipe => searchData.includes(recipe.id))
        setFilteredRecipes(found);
    }, [activeFilters, searchData])
    useEffect(() => {
        setValue(queryString.parse(location.search).q ?? value)
    }, [location.search])

    const clearFilterAndSearch = () => {
        setValue(''),
        setActiveFilters([])
    }
    return (
        <Layout>
            <PageWrapper>
                <Breadcrumbs style={{margin: '20px 10px 0px 10px'}} crumbs={[{name: 'Hem', to:'/'}, {name: 'Recept', to: '/recept'}]} />
                <H1 style={{ textAlign: 'center', margin: '20px' }}>Recept</H1>
                <SearchWrapper>
                    <StyledSearch value={value} setValue={setValue} getSearch={(data) => setSearchData(data.map(data => data.id))} placeholder={'Sök recept'} />
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
                {filteredRecipes.length === 0 && 
                <>
                    <H2 style={{ textAlign: 'center', margin: '10px' }}>Inga resultat hittades för din sökning "{value}"</H2>
                    <Primary style={{ placeSelf: 'center' }} onClick={() => clearFilterAndSearch()}>Försök igen</Primary>
                </>}
                <RecipeWrapper>
                    <RecipeGrid data={filteredRecipes} loadMore={true} show={10} />
                </RecipeWrapper>
                
            </PageWrapper>
        </Layout>
    )
}

export default recept
