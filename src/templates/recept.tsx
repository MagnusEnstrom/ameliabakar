import styled from '@emotion/styled'
import React, { useState } from 'react'
import Breadcrumbs from '../components/breadcrumbs/Breadcrumbs'
import Secondary from '../components/buttons/secondary/Secondary'
import Chip from '../components/chips/regular/Chip'
import Fab from '../components/fab/Fab'
import SearchInput from '../components/Form.tsx/SearchInput'
import Layout from '../components/layout'
import Latest from '../components/recipes/latest/Latest'
import H1 from '../components/typography/h1/H1'
import { ReceptPageQuery } from '../graphql/types/ReceptContentType'

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

const FilterContainer = styled.div({

});

const SearchWrapper = styled.div({
    margin: '0px 10px 20px 0px',
    gap: '10px',
    display: 'flex',
})

type Props = {pageContext: ReceptPageQuery}
const recept = ({pageContext}: Props) => {
    const [expanded, setExpanded] = useState(false);
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
                    <FilterContainer>
                        <Chip text={'Choklad'} />
                    </FilterContainer>
                }
                <RecipeWrapper>
                    <Latest loadMore={true} show={10} />
                </RecipeWrapper>
                
            </PageWrapper>
        </Layout>
    )
}

export default recept
