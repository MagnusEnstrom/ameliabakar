import styled from '@emotion/styled'
import React from 'react'
import colors from '../../lib/colors'
import typography from '../../lib/typography'

const DiffDot = styled.div(({lightUp}: {lightUp?: boolean}) => {
    return {
        width: '8px',
        height: '8px',
        borderRadius: '50%',
        backgroundColor: lightUp ? colors.honeyYellow : colors.silver
    }
})

const DiffText = styled.span({

})

const DifficultyWrapper = styled.div({
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
    diff: 'Svår' | 'Medel' | 'Lätt'
}
const Difficulty = ({diff}: Props) => {
    console.log('diff', diff)
    return (
        <DifficultyWrapper>
            <DiffText>{diff}</DiffText>
            <DotWrapper>
                <DiffDot lightUp={true} />
                <DiffDot lightUp={(diff === 'Medel' || diff === 'Svår') ? true : false}/>
                <DiffDot lightUp={diff === 'Svår' ? true : false}/>
            </DotWrapper>
        </DifficultyWrapper>
    )
}

export default Difficulty
