import styled from '@emotion/styled'
import React from 'react'
import colors from '../../lib/colors'
import typography from '../../lib/typography'
import StarIcon from '../../assets/star-gold.svg'

const Star = styled(StarIcon)(() => {
    return {
        width: '16px',
        height: '16px',
    }
})

const RatingText = styled.span({

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
}
const Rating = ({rating}: Props) => {
    return (
        <RatingWrapper>
            <RatingText>{rating}</RatingText>
            <Star />
        </RatingWrapper>
    )
}

export default Rating
