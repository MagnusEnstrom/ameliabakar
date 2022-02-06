import styled, { StyledComponent } from '@emotion/styled'
import { GatsbyLinkProps, Link } from 'gatsby'
import React from 'react'
import typography from '../../lib/typography'
import ArrowRight from '../../assets/arrow-right.svg'
import colors from '../../lib/colors'

const Container = styled(Link)({
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    textDecoration: 'none',
})

const Text = styled.span({
    ...typography.p,
    textDecoration: 'none',
    color: colors.jet,
    fontWeight: 700,
    '&:hover': {
        cursor: 'pointer',
    }
})

const Arrow = styled(ArrowRight)({
    height: '16px',
    width: '16px',
})

export type Props = {
      name: string; 
      to: string;
};

const TertiaryButton = ({name, to, ...rest}: Props) => {
    return (
        <Container to={to} {...rest}>
            <Text>{name}</Text>
            <Arrow />
        </Container>
    )
}

export default TertiaryButton
