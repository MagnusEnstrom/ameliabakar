import styled from '@emotion/styled'
import React from 'react'
import { ReceptContent } from '../../graphql/types/ReceptContentType'
import Difficulty from '../difficulty/Difficulty'
import Rating from '../rating/Rating'
import ReceptTime from '../time/ReceptTime'

const ReceptInfoBar = styled.div({
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    placeItems: 'center',
    maxWidth: '600px',
    margin: '0px auto',
})

type Props = Pick<
    ReceptContent['singlePaketAfc'],
    'tid' | 'tidFormat' | 'svarighetsgrad'
> &
    Pick<ReceptContent, 'rating'> & {
        recipeId: string
    }
const ReceptInfo = ({
    tid,
    tidFormat,
    svarighetsgrad,
    rating,
    recipeId,
}: Props) => {
    return (
        <ReceptInfoBar>
            <ReceptTime time={tid} timeFormat={tidFormat} />
            <Difficulty diff={svarighetsgrad} />
            <Rating recipeId={recipeId} rating={rating?.avgRating} />
        </ReceptInfoBar>
    )
}

export default ReceptInfo
