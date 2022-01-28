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
import { PageProps } from 'gatsby'
import P from '../components/typography/p/P'
import InvisibleLink from '../components/Links/InvisibleLink'

const RecipeWrapper = styled.div({
    margin: '0px 10px 30px 10px',
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
const savedRecipes = ({pageContext, location}: Props & PageProps) => {
    const [filteredRecipes, setFilteredRecipes] = useState<ReceptPageQuery['nodes']>([]);
    useEffect(() => {
        const storageString = localStorage.getItem('savedRecipes');
        console.log('storageString', storageString)
        if(!storageString) return;
        const savedRecipes = JSON.parse(storageString) as string[];
        console.log('saved', savedRecipes)
        setFilteredRecipes(pageContext.nodes.filter(node => savedRecipes.includes(node.id)))
    }, [])

    return (
        <Layout>
            <PageWrapper>
                <Breadcrumbs style={{margin: '20px 10px 0px 10px'}} crumbs={[{name: 'Hem', to:'/'}, {name: 'Mina sparade recept', to: '/mina-recept'}]} />
                {filteredRecipes.length === 0 ? (
                    <>
                        <H1 style={{ textAlign: 'center', margin: '20px' }}>Dina sparade recept kommer att visas här</H1>
                        <P style={{ textAlign: 'center', marginBottom: '30px' }}>Du har för närvarande inte några sparade recept</P>
                        <InvisibleLink style={{ justifySelf: 'center', marginBottom: '50px' }} to={'/recept'}>
                            <Primary>Här hittar du mina recept</Primary>
                        </InvisibleLink>
                    </>

                ) : (
                    <>
                        <H1 style={{ textAlign: 'center', margin: '20px' }}>Mina sparade recept</H1>
                        <RecipeWrapper>
                            <RecipeGrid data={filteredRecipes} show={10} loadMore={true} />
                        </RecipeWrapper>
                    </>
                )}
            </PageWrapper>
        </Layout>
    )
    
}

export default savedRecipes
