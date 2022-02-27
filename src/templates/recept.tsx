import styled from '@emotion/styled'
import React, { useEffect, useRef, useState } from 'react'
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
import typography from '../lib/typography'
import Chip from '../components/chips/Chip'
import Vector from '../assets/Vector.svg'

const RecipeWrapper = styled.div({
    margin: '10px 10px 30px 10px',
    ['@media only screen and (min-width: 90ch)']: {
        paddingTop: '50px',
    },
    ['@media only screen and (min-width: 170ch)']: {
        margin: '0px 0px 30px 0px',
    },
})

const PageWrapper = styled.div({
    display: 'grid',
    maxWidth: '1360px',
    margin: '0px auto',
})

const StyledSearch = styled(SearchInputFilter)({
    margin: '0px 20px 20px 10px',
    width: '100%',
    maxWidth: '250px',
    ['@media only screen and (min-width: 90ch)']: {
        margin: '0px',
        placeSelf: 'center',
    },
})

const StyledH1 = styled(H1)({
    ...typography.h1,
    textAlign: 'center',
    margin: '20px',
    ['@media only screen and (min-width: 170ch)']: {
        margin: '20px 0px',
    },
})

const Lightbox = styled.div({
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    zIndex: 100,
    paddingLeft: '10%',
})
const FilterContainer = styled.div({
    height: '100%',
    padding: '25px 20px 0px 20px',
    backgroundColor: colors.white,
    display: 'flex',
    flexDirection: 'column',
})

const ChipContainer = styled.div({
    overflowY: 'scroll',
})

const SearchWrapper = styled.div({
    margin: '0px 10px 20px 0px',
    gap: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    ['@media only screen and (min-width: 90ch)']: {
        margin: '0px',
    },
})

const MobileFilter = styled(Fab)({
    padding: '0px',

    ['@media only screen and (min-width: 90ch)']: {
        display: 'none',
    },
})
const DesktopChipContainer = styled.div(
    ({ expanded }: { expanded: boolean }) => ({
        display: 'none',
        ['@media only screen and (min-width: 90ch)']: {
            width: '100%',
            display: 'block',
            maxHeight: expanded ? 'auto' : '100px',
            overflow: 'hidden',
        },
    })
)
const DesktopFilterArea = styled.div({
    padding: '0px 20px 0px 20px',
    flexDirection: 'column',

    display: 'none',
    ['@media only screen and (min-width: 90ch)']: {
        display: 'flex',
    },
    ['@media only screen and (min-width: 170ch)']: {
        padding: '0px',
    },
})

const TitleWrapper = styled.div({
    ['@media only screen and (min-width: 90ch)']: {
        display: 'flex',
        justifyContent: 'space-between',
        marginRight: '20px',
    },

    ['@media only screen and (min-width: 170ch)']: {
        margin: '0px',
    },
})

// const ClearAll = styled.span({
//     color: colors.silver,
//     textDecorationLine: 'underline',
//     alignSelf: 'center',
// })

const StyledRecipeFilter = styled(RecipeFilter)({
    rowGap: '20px',
})

const filterRecipes = (
    pageContext: ReceptPageQuery,
    activeFilters: string[]
) => {
    let afterFilter = pageContext.nodes

    activeFilters.forEach(filterTag => {
        afterFilter = afterFilter.filter(recipe => {
            const tags = recipe.tags.nodes.map(tag => tag.name)
            return tags.includes(filterTag)
        })
    })

    return afterFilter
}
type Props = { pageContext: ReceptPageQuery }
const recept = ({ pageContext, location }: Props & PageProps) => {
    const [expanded, setExpanded] = useState(false)
    const [deskExpanded, setDeskExpanded] = useState(false)

    const [filteredRecipes, setFilteredRecipes] = useState(pageContext.nodes)
    const [activeFilters, setActiveFilters] = useState<string[]>([])
    const [searchData, setSearchData] = useState<string[]>([])
    const [value, setValue] = useState(
        queryString.parse(location.search).q ?? ''
    )

    const filterRef = useRef<HTMLDivElement>(null)

    const handleFilterClick = (name: string) => {
        const includesName = activeFilters.includes(name)

        if (includesName) {
            return setActiveFilters(prev =>
                [...prev].filter(activeFilter => activeFilter !== name)
            )
        }
        setActiveFilters(prev => [...prev, name])
    }

    useEffect(() => {
        const afterFilter = filterRecipes(pageContext, activeFilters)
        setFilteredRecipes(afterFilter)
        if (!searchData.length && !value) return setFilteredRecipes(afterFilter)
        const found = afterFilter.filter(recipe =>
            searchData.includes(recipe.id)
        )
        setFilteredRecipes(found)
    }, [activeFilters, searchData])

    useEffect(() => {
        setValue(queryString.parse(location.search).q ?? value)
    }, [location.search])

    const clearFilterAndSearch = () => {
        setValue(''), setActiveFilters([])
    }
    return (
        <Layout>
            <PageWrapper>
                <Breadcrumbs
                    crumbs={[
                        { name: 'Hem', to: '/' },
                        { name: 'Recept', to: '/recept' },
                    ]}
                    style={{
                        width: '100%',
                    }}
                />
                <TitleWrapper>
                    <StyledH1>Recept</StyledH1>
                    <SearchWrapper>
                        <StyledSearch
                            value={value}
                            setValue={setValue}
                            getSearch={data =>
                                setSearchData(data.map(data => data.id))
                            }
                            placeholder={'Sök recept'}
                        />
                        <MobileFilter
                            onClick={() => setExpanded(true)}
                            aria-label={'show filter'}
                            variant={'filter'}
                        />
                    </SearchWrapper>
                </TitleWrapper>
                {expanded && (
                    <Lightbox
                        onClick={() => {
                            setExpanded(false)
                        }}
                    >
                        <FilterContainer
                            ref={filterRef}
                            onClick={e => {
                                e.preventDefault()
                                e.stopPropagation()
                            }}
                        >
                            <Close
                                onClick={() => setExpanded(false)}
                                aria-label={'close filter'}
                                style={{
                                    width: 'max-content',
                                    alignSelf: 'flex-end',
                                }}
                            />
                            <H2
                                style={{
                                    gridArea: 'title',
                                    placeSelf: 'start',
                                    margin: '6px 0px 20px 0px',
                                }}
                            >
                                Filtrera
                            </H2>
                            <ChipContainer>
                                <RecipeFilter
                                    activeFilters={activeFilters}
                                    handleFilterClick={handleFilterClick}
                                    recipes={filteredRecipes}
                                />
                            </ChipContainer>
                        </FilterContainer>
                    </Lightbox>
                )}
                <DesktopFilterArea onBlur={() => setDeskExpanded(false)}>
                    <DesktopChipContainer
                        expanded={activeFilters.length > 0 || deskExpanded}
                    >
                        <StyledRecipeFilter
                            activeFilters={activeFilters}
                            handleFilterClick={handleFilterClick}
                            recipes={filteredRecipes}
                        />
                    </DesktopChipContainer>
                    <div
                        style={{
                            display: 'flex',
                            gap: '30px',
                            marginTop: deskExpanded ? '20px' : '11px',
                        }}
                    >
                        {activeFilters.length === 0 && (
                            <Chip
                                style={{
                                    alignSelf: 'flex-start',
                                }}
                                onClick={() => setDeskExpanded(prev => !prev)}
                            >
                                {deskExpanded ? (
                                    <>
                                        <span>Visa mindre</span>{' '}
                                        <Vector
                                            style={{
                                                alignSelf: 'center',
                                                transform: 'rotate(180deg)',
                                            }}
                                        />
                                    </>
                                ) : (
                                    <>
                                        <span>Visa alla kategorier</span>{' '}
                                        <Vector
                                            style={{ alignSelf: 'center' }}
                                        />
                                    </>
                                )}
                            </Chip>
                        )}
                        {/* <ClearAll>Rensa filter</ClearAll> */}
                    </div>
                </DesktopFilterArea>
                {filteredRecipes.length === 0 && (
                    <>
                        <H2 style={{ textAlign: 'center', margin: '10px' }}>
                            Inga resultat hittades för din sökning {value}
                        </H2>
                        <Primary
                            style={{ placeSelf: 'center' }}
                            onClick={() => clearFilterAndSearch()}
                        >
                            Försök igen
                        </Primary>
                    </>
                )}
                <RecipeWrapper>
                    <RecipeGrid
                        data={filteredRecipes}
                        loadMore={true}
                        show={10}
                    />
                </RecipeWrapper>
            </PageWrapper>
        </Layout>
    )
}

export default recept
