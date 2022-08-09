import styled from '@emotion/styled'
import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import ResipeCard from '../../recipeCard/ResipeCard'

const RecipeGrid = styled.div({
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '10px',

    ['@media only screen and (min-width: 90ch)']: {
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '20px',
        'a:last-of-type': {
            display: 'none',
        },
    },
    ['@media only screen and (min-width: 170ch)']: {
        gap: '30px',
        gridTemplateColumns: 'repeat(4, 1fr)',
        'a:last-of-type': {
            display: 'block',
        },
    },
})

type PopularQuery = {
    allRating: {
        nodes: {
            rating?: {
                avgRating: number
                numRatings: number
            } | null
            parent: {
                id: string
            }
        }[]
    }
    allWpRecept: {
        nodes: {
            id: string
            uri: string
            title: string
            singlePaketAfc: {
                tidFormat: string
                tid: number
                svarighetsgrad: 'Lätt' | 'Medel' | 'Svår'
                images: {
                    localFile: {
                        childrenImageSharp: [
                            {
                                original: {
                                    src: string
                                }
                                fixed: {
                                    src: string
                                }
                            }
                        ]
                    }
                }[]
            }
        }[]
    }
}

const Popular = ({
    ...rest
}: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
>) => {
    const data: PopularQuery = useStaticQuery(graphql`
        {
            allRating {
                nodes {
                    id
                    avgRating
                    numRatings
                    parent {
                        id
                    }
                }
            }
            allWpRecept(sort: { fields: [date], order: DESC }) {
                nodes {
                    id
                    uri
                    title
                    singlePaketAfc {
                        tidFormat
                        tid
                        svarighetsgrad
                        images {
                            localFile {
                                childrenImageSharp {
                                    original {
                                        src
                                    }
                                    fixed(width: 400, height: 400) {
                                        src
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    `)

    data.allWpRecept.nodes = data.allWpRecept.nodes.map(recept => {
        const rating = data.allRating?.nodes?.find(
            rating => rating.parent?.id === recept.id
        )
        return {
            ...recept,
            rating: rating ? rating : null,
        }
    })

    const recipesWithRating = data.allWpRecept.nodes as [
        ...(PopularQuery['allWpRecept']['nodes'] &
            {
                rating?: {
                    avgRating: number
                    numRatings: number
                } | null
            }[])
    ]

    recipesWithRating.sort((a, b) => {
        if (a.rating?.avgRating) return 1
        if (a.rating?.avgRating > b.rating?.avgRating) return -1
        if (a.rating?.avgRating < b.rating?.avgRating) return 1
        return 0
    })
    const recipies = recipesWithRating.slice(0, 4)

    return (
        <RecipeGrid {...rest}>
            {recipies.map(recipe => {
                return (
                    <ResipeCard
                        svarighetsgrad={recipe.singlePaketAfc.svarighetsgrad}
                        uri={recipe.uri}
                        key={recipe.id}
                        id={recipe.id}
                        rating={recipe?.rating?.avgRating}
                        tid={recipe.singlePaketAfc.tid}
                        tidFormat={recipe.singlePaketAfc.tidFormat}
                        title={recipe.title}
                        url={
                            recipe.singlePaketAfc.images?.[0]?.localFile
                                .childrenImageSharp?.[0]?.original.src
                        }
                    />
                )
            })}
        </RecipeGrid>
    )
}

export default Popular
