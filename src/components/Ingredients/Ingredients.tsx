import styled from '@emotion/styled'
import React from 'react'
import { ReceptContent } from '../../graphql/types/ReceptContentType'
import typography from '../../lib/typography'
import IngredientItem from '../ingredientItem/IngredientItem'

type Props = {content: ReceptContent['content']}

const StyledIngredientsContainer = styled.div({
    display: 'grid',
    gap: '15px',
    margin: '0px 10px'
})

const StyledStrong = styled.strong({
    ...typography.h5,
    p: {
        margin: '0px',
    }
})
const Ingredients = ({content = ''}: Props) => {
    const splitedContent = content.split("\n");
    return (
        <StyledIngredientsContainer>
            {splitedContent.map((line, index) => {
                if(!line) return;
                if(line.includes('<strong>')) {
                    return <StyledStrong key={index} dangerouslySetInnerHTML={{__html: line}} />
                }
                return <IngredientItem key={index} ingredient={line} />
            })}
        </StyledIngredientsContainer>
    )
}

export default Ingredients
