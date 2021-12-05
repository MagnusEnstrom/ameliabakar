import styled from '@emotion/styled'
import { Link } from 'gatsby'
import React from 'react'
import typography from '../../lib/typography'
import ArrowRight from '../../assets/arrow-right.svg'
import colors from '../../lib/colors'

const Container = styled.nav({
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
})

const CrumbArrowWrapper = styled.div({
    display: 'flex',
    gap: '20px',
    alignItems: 'center'
})
const Crumb = styled(Link)({
    ...typography.p,
    textDecoration: 'none',
    color: colors.jet,
    '&:hover': {
        cursor: 'pointer',
    }
})
const CurrentCrumb = styled.span({
    ...typography.p,
    display: 'block',
    textDecoration: 'none',
    color: colors.silver,
    '&:hover': {
        cursor: 'default',
    }
})
const Arrow = styled(ArrowRight)({
    height: '16px',
})

export type Props = {
  crumbs?: {
      name: string;
      to: string;
  }[]
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;

const Breadcrumbs = ({crumbs = [], ...rest}: Props) => {
    if(!crumbs.length) return null;
    return (
        <Container {...rest}>
            {crumbs.map((crumb, i, array) => {
                if(array.length === i + 1) {
                    return <CurrentCrumb key={i}>{crumb.name}</CurrentCrumb>
                }
                return (
                    <CrumbArrowWrapper key={i}>
                        <Crumb to={crumb.to}>{crumb.name}</Crumb>
                        <Arrow />
                    </CrumbArrowWrapper>
                );
            })}
        </Container>
    )
}

export default Breadcrumbs
