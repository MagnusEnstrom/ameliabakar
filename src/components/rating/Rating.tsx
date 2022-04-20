import styled from '@emotion/styled'
import React from 'react'
import typography from '../../lib/typography'
import StarIcon from '../../assets/star-gold.svg'
import colors from '../../lib/colors'
import useGetRatings from '../../hooks/getRatings'
// import StarIcon from '../../assets/star-fill.svg'

const Star = styled(StarIcon)(({ rating }: { rating: number }) => {
    return {
        width: '16px',
        height: '16px',
        path: {
            fill: rating ? colors.honeyYellow : colors.silver,
        },
    }
})

const RatingText = styled.span({
    wordBreak: 'keep-all',
})

const RatingWrapper = styled.div({
    ...typography.note,
    display: 'grid',
    gridTemplateColumns: 'min-content min-content',
    placeItems: 'center',
    gap: '5px',
})
const DotWrapper = styled.div({
    display: 'grid',
    placeItems: 'center',
    gridTemplateColumns: 'repeat(3, min-content)',
    gap: '3px',
})
type Props = {
    rating: number
    recipeId: string
} & React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
>
const Rating = ({ rating: cacheRating, recipeId, ...rest }: Props) => {
    const { data } = useGetRatings(recipeId)

    const rating = data ? data.avgRating : cacheRating
    return (
        <RatingWrapper {...rest}>
            <RatingText>{rating ? rating : '-'}</RatingText>
            <Star rating={rating} />
        </RatingWrapper>
    )
}

export default Rating
