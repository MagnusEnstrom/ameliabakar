import styled from '@emotion/styled'
import React, { FC } from 'react'
import colors from '../../../lib/colors'
import typography from '../../../lib/typography'

const ContentAreaButton = styled.button(({active}: {active?: boolean}) => {
    return {
        ...typography.button,
        border: 'none',
        backgroundColor: 'inherit',
        padding: '5px 0px',
        borderBottom: active ? `2px solid ${colors.laruelGreen}` : '2px solid rgba(0, 0, 0, 0)',
        cursor: 'pointer',
    }
})

type Props = {
    text: string;
    active?: boolean
} & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
const ContentNavItem = ({text, active, ...rest}: Props) => {
    return (
        <ContentAreaButton {...rest} active={active}>
            {text}
        </ContentAreaButton>
    )
}

export default ContentNavItem
