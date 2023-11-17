import styled from '@emotion/styled'
import React, { HTMLAttributes, useEffect, useState } from 'react'
import { ReceptContent } from '../../graphql/types/ReceptContentType'
import StarIcon from '../../assets/star-gold.svg'
import colors from '../../lib/colors'
import typography from '../../lib/typography'
import useAddRating from '../../hooks/addRating'
import { useQueryClient } from '@tanstack/react-query'
import useGetRatings from '../../hooks/getRatings'
import useGetRating from '../../hooks/getRating'

const RatingContainer = styled.div({
    display: 'flex',
    gap: '2px',
    alignItems: 'center',
    '&:hover svg': {
        path: {
            fill: colors.honeyYellow,
        },
    },
    '& svg:hover ~ svg': {
        path: {
            fill: 'rgba(0, 0, 0, 0)',
        },
    },
})
const Star = styled(StarIcon)(({ rating }: { rating: number }) => {
    return {
        width: '21px',
        height: '21px',
        path: {
            fill: 'rgba(0, 0, 0, 0)',
            stroke: colors.honeyYellow,
        },

        '&.filled': {
            path: {
                fill: colors.honeyYellow,
            },
        },
    }
})

const TotalRating = styled.p({
    ...typography.p,
    margin: '0px',
})

const FlexContainer = styled.div({
    width: 'max-content',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
})

const ThankYouMessage = styled.p({
    ...typography.note,
    margin: '0px',
})

const Wrapper = styled.div({
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    alignItems: 'center',
})

type Props = { pageContext: ReceptContent } & HTMLAttributes<HTMLDivElement>
const RateRecipe = ({ pageContext, ...rest }: Props) => {
    const { mutate } = useAddRating()
    const { data: ratings } = useGetRatings(pageContext.id)

    const [hasVoted, setHasVoted] = useState(false)
    const [error, setError] = useState('')

    const client = useQueryClient()

    const addRating = (rating: number) => {
        mutate(
            { rating, recipeId: pageContext.id },
            {
                onSettled: () => {
                    setError('')
                },
                onSuccess: () => {
                    setHasVoted(true)
                    client.invalidateQueries(['recipe'])
                },
                onError: () => {
                    setError('Något gick fel')
                },
            }
        )
    }
    const { data } = useGetRating(pageContext.id)

    const Stars = [1, 2, 3, 4, 5].map(number => {
        const filled =
            number <= Math.floor(data?.userRating || data?.avgRating || 0)
        return (
            <Star
                key={number}
                className={filled ? 'filled' : ''}
                onClick={() => addRating(number)}
            />
        )
    })

    useEffect(() => {
        if (data?.userRating) {
            setHasVoted(true)
        }
    }, [data?.userRating])
    return (
        <Wrapper {...rest}>
            <FlexContainer>
                <RatingContainer>{Stars}</RatingContainer>
                <TotalRating>({ratings?.numRatings || 0})</TotalRating>
            </FlexContainer>
            {error && <ThankYouMessage>{error}</ThankYouMessage>}
            {hasVoted && <ThankYouMessage>Tack för ditt betyg</ThankYouMessage>}
        </Wrapper>
    )
}

export default RateRecipe
