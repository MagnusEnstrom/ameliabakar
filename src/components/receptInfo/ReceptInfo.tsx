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
    Pick<ReceptContent, 'ratingsAverage'>
const ReceptInfo = ({
    tid,
    tidFormat,
    svarighetsgrad,
    ratingsAverage,
}: Props) => {
    return (
        <ReceptInfoBar>
            <ReceptTime time={tid} timeFormat={tidFormat} />
            <Difficulty diff={svarighetsgrad} />
            <Rating rating={ratingsAverage} />
        </ReceptInfoBar>
    )
}

export default ReceptInfo
