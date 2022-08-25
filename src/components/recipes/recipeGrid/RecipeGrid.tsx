import styled from '@emotion/styled'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React, { useState } from 'react'
import { ReceptPageQuery } from '../../../graphql/types/ReceptContentType'
import Secondary from '../../buttons/secondary/Secondary'
import ResipeCard from '../../recipeCard/ResipeCard'

const StyledRecipeGrid = styled.div({
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '10px',

    ['@media only screen and (min-width: 90ch)']: {
        gridTemplateColumns: '1fr 1fr 1fr',
        gap: '20px',
    },
    ['@media only screen and (min-width: 170ch)']: {
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '30px',
    },
})
const Wrapper = styled.div({
    display: 'grid',
})

type Props = {
    data: ReceptPageQuery['nodes']
    show?: number
    loadMore?: boolean
}

const RecipeGrid = ({
    show = 6,
    loadMore,
    data,
    ...rest
}: Props &
    React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLDivElement>,
        HTMLDivElement
    >) => {
    const [amount, setstate] = useState(show)
    const allRecipes = data
    const recipies = data.slice(0, amount)

    const onClick = () => {
        setstate(prev => prev + 8)
    }

    return (
        <Wrapper>
            <StyledRecipeGrid {...rest}>
                {recipies.map(recipe => {
                    const image = getImage(
                        recipe.singlePaketAfc.images[0].localFile
                            .childImageSharp
                    )
                    return (
                        <ResipeCard
                            uri={recipe.uri}
                            svarighetsgrad={
                                recipe.singlePaketAfc.svarighetsgrad
                            }
                            key={recipe.id}
                            id={recipe.id}
                            rating={recipe?.rating?.avgRating}
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
            </StyledRecipeGrid>
            {loadMore && amount < allRecipes.length && (
                <Secondary
                    data-cy={'loadmore'}
                    style={{ marginTop: '30px', placeSelf: 'center' }}
                    onClick={onClick}
                >
                    Ladda fler
                </Secondary>
            )}
        </Wrapper>
    )
}

export default RecipeGrid
