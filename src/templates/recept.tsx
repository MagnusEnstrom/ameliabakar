import styled from '@emotion/styled'
import React, { useState } from 'react'
import Secondary from '../components/buttons/secondary/Secondary'
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

const SearchWrapper = styled.div({
    margin: '0px 10px 20px 0px',
    gap: '10px',
    display: 'flex',
})

type Props = {pageContext: ReceptPageQuery}
const recept = ({pageContext}: Props) => {
    return (
        <Layout>
            <PageWrapper>
                <H1 style={{ textAlign: 'center', margin: '20px' }}>Recept</H1>
                <SearchWrapper>
                    <StyledSearch placeholder={'Sök recept'} />
                    <Fab style={{padding: '0px'}} variant={'filter'} />
                </SearchWrapper>
                <RecipeWrapper>
                    <Latest loadMore={true} show={10} />
                </RecipeWrapper>
                
            </PageWrapper>
        </Layout>
    )
}

export default recept
