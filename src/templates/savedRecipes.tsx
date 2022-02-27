import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'
import Breadcrumbs from '../components/breadcrumbs/Breadcrumbs'
import Primary from '../components/buttons/primary/Primary'
import Layout from '../components/layout'
import RecipeGrid from '../components/recipes/recipeGrid/RecipeGrid'
import H1 from '../components/typography/h1/H1'
import { ReceptPageQuery } from '../graphql/types/ReceptContentType'
import { PageProps } from 'gatsby'
import P from '../components/typography/p/P'
import InvisibleLink from '../components/Links/InvisibleLink'
import typography from '../lib/typography'

const RecipeWrapper = styled.div({
    margin: '0px 10px 30px 10px',
    ['@media only screen and (min-width: 90ch)']: {
        margin: '0px 20px 70px 20px',
    },
    ['@media only screen and (min-width: 170ch)']: {
        margin: '0px 0px 100px 0px',
    },
})

const PageWrapper = styled.div({
    display: 'grid',
    maxWidth: '1320px',
    margin: '0px auto',
})

const StyledH1 = styled(H1)({
    textAlign: 'center',
    margin: '20px',
    ['@media only screen and (min-width: 90ch)']: {
        margin: '30px 20px',
        ...typography.h1,
    },
})
const StyledP = styled(P)({
    textAlign: 'center',
    marginBottom: '30px',
    ['@media only screen and (min-width: 90ch)']: {
        marginBottom: '40px',
    },
})
type Props = { pageContext: ReceptPageQuery }
const savedRecipes = ({ pageContext, location }: Props & PageProps) => {
    const [filteredRecipes, setFilteredRecipes] = useState<
        ReceptPageQuery['nodes']
    >([])
    useEffect(() => {
        const storageString = localStorage.getItem('savedRecipes')
        if (!storageString) return
        const savedRecipes = JSON.parse(storageString) as string[]
        setFilteredRecipes(
            pageContext.nodes.filter(node => savedRecipes.includes(node.id))
        )
    }, [])

    return (
        <Layout>
            <PageWrapper>
                <Breadcrumbs
                    crumbs={[
                        { name: 'Hem', to: '/' },
                        { name: 'Mina sparade recept', to: '/mina-recept' },
                    ]}
                />
                {filteredRecipes.length === 0 ? (
                    <>
                        <StyledH1>
                            Dina sparade recept kommer att visas här
                        </StyledH1>
                        <StyledP>
                            Du har för närvarande inte några sparade recept
                        </StyledP>
                        <InvisibleLink
                            style={{
                                justifySelf: 'center',
                                marginBottom: '50px',
                            }}
                            to={'/recept'}
                        >
                            <Primary>Här hittar du mina recept</Primary>
                        </InvisibleLink>
                    </>
                ) : (
                    <>
                        <StyledH1>Mina sparade recept</StyledH1>
                        <RecipeWrapper>
                            <RecipeGrid
                                data={filteredRecipes}
                                show={10}
                                loadMore={true}
                            />
                        </RecipeWrapper>
                    </>
                )}
            </PageWrapper>
        </Layout>
    )
}

export default savedRecipes
