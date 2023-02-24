import styled from '@emotion/styled'
import React, { FC } from 'react'
import { ReceptPageQuery } from '../../graphql/types/ReceptContentType'
import Chip from '../chips/Chip'
import Flash from '../../assets/flash.svg'

const FlashSvg = styled(Flash)({})

const FilterList = styled.div({
    display: 'flex',
    gap: '10px 30px',
    flexWrap: 'wrap',
})
type Props = {
    recipes: ReceptPageQuery['nodes']
    handleFilterClick: (name: string) => void
    activeFilters: string[]
    amount?: number
} & React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
>
const RecipeFilter: FC<Props> = ({
    recipes,
    handleFilterClick,
    activeFilters,
    amount,
    children,
    ...rest
}) => {
    // unique tags
    const tags = [
        ...new Set(
            recipes
                .map(recipe => recipe.tags.nodes.map(tag => tag.name))
                .flatMap(tags => tags)
        ),
    ]
        .sort()
        .slice(0, amount ? amount : -1)
    return (
        <FilterList {...rest}>
            {tags.includes('fast') && (
                <Chip
                    onClick={() => handleFilterClick('fast')}
                    selected={activeFilters.includes('fast')}
                    style={{ placeSelf: 'start' }}
                    data-cy={'filterButton'}
                    text={
                        <span
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1ch',
                            }}
                        >
                            snabb
                            <FlashSvg />
                        </span>
                    }
                />
            )}
            {tags
                .filter(tag => tag !== 'fast')
                .map(tag => (
                    <Chip
                        key={tag}
                        onClick={() => handleFilterClick(tag)}
                        selected={activeFilters.includes(tag)}
                        style={{ placeSelf: 'start' }}
                        text={tag}
                        data-cy={'filterButton'}
                    />
                ))}
            {children}
        </FilterList>
    )
}

export default RecipeFilter
