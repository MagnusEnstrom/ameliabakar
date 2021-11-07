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
})

type Props = Pick<ReceptContent['singlePaketAfc'], 'tid' | 'tidFormat' | 'svarighetsgrad'>
const ReceptInfo = ({tid, tidFormat, svarighetsgrad}: Props) => {
    return (
        <ReceptInfoBar>
            <ReceptTime time={tid} timeFormat={tidFormat} />
            <Difficulty diff={svarighetsgrad} />
            <Rating rating={4.2} />
        </ReceptInfoBar>
    )
}

export default ReceptInfo
