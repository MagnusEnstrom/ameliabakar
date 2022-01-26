import styled from '@emotion/styled'
import { graphql, useStaticQuery } from 'gatsby'
import React, { useState } from 'react'
import { ReceptPageQuery } from '../../../graphql/types/ReceptContentType'
import Secondary from '../../buttons/secondary/Secondary'
import ResipeCard from '../../recipeCard/ResipeCard'

const StyledRecipeGrid = styled.div({
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '10px',
})
const Wrapper = styled.div({
    display: 'grid',
    
})

type LatestQuery = {
    allWpRecept: {
        nodes: {
            id: string,
            uri: string,
            title:string,
            singlePaketAfc: {
                tidFormat: string,
                tid: number,
                images: 
                    {
                        localFile: {
                            childrenImageSharp: [
                                {
                                    original: {
                                        src: string
                                    },
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

type Props = {
    data: ReceptPageQuery['nodes'];
    show?: number, 
    loadMore?: boolean;
}

const RecipeGrid = ({ show = 6, loadMore, data, ...rest}: Props & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
    
    const [amount, setstate] = useState(show)
    const allRecipes = data;
    const recipies = data.slice(0, amount);

    const onClick = () => {
        setstate(prev => prev + 4);
    }


    return (
        <Wrapper>
            <StyledRecipeGrid {...rest}>
                {recipies.map(recipe => {
                    return <ResipeCard uri={recipe.uri} key={recipe.id} rating={4.2} tid={recipe.singlePaketAfc.tid} tidFormat={recipe.singlePaketAfc.tidFormat} title={recipe.title} url={recipe.singlePaketAfc.images?.[0]?.localFile.childrenImageSharp?.[0]?.original.src} />
                    
                })}
            </StyledRecipeGrid>
            {loadMore && (amount < allRecipes.length) && <Secondary data-cy={'loadmore'} style={{ marginTop: '30px', placeSelf: 'center' }} onClick={onClick}>Ladda fler</Secondary>}
        </Wrapper>
    )
}

export default RecipeGrid
