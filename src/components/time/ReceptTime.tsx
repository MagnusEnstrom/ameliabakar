import styled from '@emotion/styled'
import React from 'react'
import ClockIcon from '../../assets/clock.svg'
import typography from '../../lib/typography'

const Time = styled.div({
    display: 'grid',
    gridTemplateColumns: 'min-content auto',
    placeItems: 'center',
    gap: '7px',

})

const Clock = styled(ClockIcon)({
    height: '13px',
    width: '13px',
})

const TimeText = styled.span({
    ...typography.note,
})
type Props = {
    time: number;
    timeFormat: 'min' | 'h';
    disableIcon?: boolean
}
const ReceptTime = ({time, timeFormat, disableIcon}: Props) => {
    return (
        <Time>
            {!disableIcon && <Clock />}
            <TimeText>{time} {timeFormat === 'min' ? 'min' : 'h'}</TimeText>
        </Time>
    )
}

export default ReceptTime
