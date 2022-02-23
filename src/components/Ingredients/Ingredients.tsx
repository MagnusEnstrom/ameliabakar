import styled from '@emotion/styled'
import React from 'react'
import { ReceptContent } from '../../graphql/types/ReceptContentType'
import typography from '../../lib/typography'
import IngredientItem from '../ingredientItem/IngredientItem'

type Props = { content: ReceptContent['content'] }

const StyledIngredientsContainer = styled.div({
    display: 'flex',
    gap: '15px',
    margin: '0px 10px',
    flexDirection: 'column',
    ['@media only screen and (min-width: 90ch)']: {
        margin: '0px 20px',
        columnGap: '100px',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
})

const StyledStrong = styled.strong({
    ...typography.h5,
    p: {
        margin: '0px',
    },
})
const Ingredients = ({ content = '', ...rest }: Props) => {
    const splitedContent = content.split('\n')
    // const Ingredients = splitedContent.map((line, index) => {
    //     if(!line) return;
    //     if(line.includes('<strong>')) {
    //         return <StyledStrong key={index} dangerouslySetInnerHTML={{__html: line}} />
    //     }
    //     return <IngredientItem key={index} ingredient={line} />
    // })

    const IngredientGroups: { title: string; lines: string[] }[] = []

    splitedContent.forEach(line => {
        if (!line) return
        if (line.includes('<strong>')) {
            IngredientGroups.push({ title: line, lines: [] })
        } else {
            const group = IngredientGroups[IngredientGroups.length - 1]
            if (!group) {
                IngredientGroups.push({ title: line, lines: [] })
            } else {
                group.lines.push(line)
            }
        }
    })

    const IngredientsElements = IngredientGroups.map((group, i) => {
        return (
            <div key={i}>
                <StyledStrong
                    dangerouslySetInnerHTML={{ __html: group.title }}
                />
                {group.lines.map((line, i) => (
                    <IngredientItem key={i} ingredient={line} />
                ))}
            </div>
        )
    })

    return (
        <StyledIngredientsContainer {...rest}>
            {IngredientsElements}
        </StyledIngredientsContainer>
    )
}

export default Ingredients
