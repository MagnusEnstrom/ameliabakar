import styled from '@emotion/styled'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React, { useState } from 'react'
import { AllWpRecept } from '../../graphql/types/ReceptContentType'
import Secondary from '../buttons/secondary/Secondary'
import ResipeCard from '../recipeCard/ResipeCard'

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
const Wrapper = styled.div({
    display: 'grid',
})

const SimilarRecipes = ({
    show = 6,
    loadMore,
    tags,
    allWpRecept,
    ...rest
}: {
    show?: number
    loadMore?: boolean
    tags: string[]
    allWpRecept: AllWpRecept
} & React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
>) => {
    const [amount, setstate] = useState(show)

    const allSimilarWpRecept = allWpRecept.filter(recept => {
        return recept.tags.nodes.some(tag => tags.includes(tag.name))
    })
    const recipies = allSimilarWpRecept.slice(0, amount)
    const onClick = () => {
        setstate(prev => prev + 8)
    }

    return (
        <Wrapper>
            <RecipeGrid {...rest}>
                {recipies.map(recipe => {
                    const image = getImage(
                        recipe.singlePaketAfc.images[0].localFile
                            .childImageSharp
                    )
                    return (
                        <ResipeCard
                            kortBeskrivning={
                                recipe.singlePaketAfc.kortBeskrivning
                            }
                            variant="card"
                            svarighetsgrad={
                                recipe.singlePaketAfc.svarighetsgrad
                            }
                            uri={recipe.uri}
                            key={recipe.id}
                            rating={recipe?.rating?.avgRating}
                            id={recipe.id}
                            tid={recipe.singlePaketAfc.tid}
                            tidFormat={recipe.singlePaketAfc.tidFormat}
                            title={recipe.title}
                        >
                            <GatsbyImage
                                image={image}
                                alt={recipe.title}
                                className="gatsby-img"
                                objectFit="cover"
                            />
                        </ResipeCard>
                    )
                })}
            </RecipeGrid>
            {loadMore && amount < allSimilarWpRecept.length && (
                <Secondary
                    style={{ marginTop: '30px', placeSelf: 'center' }}
                    onClick={onClick}
                >
                    Ladda fler
                </Secondary>
            )}
        </Wrapper>
    )
}

export default SimilarRecipes
