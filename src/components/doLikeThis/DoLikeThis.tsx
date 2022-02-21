import styled from '@emotion/styled'
import React from 'react'
import { ReceptContent } from '../../graphql/types/ReceptContentType'
import typography from '../../lib/typography'

const SaHarGorDu = styled.div({
    ...typography.p,
    margin: '20px 10px',
    strong: {
        fontWeight: typography.h1.fontWeight,
    },
    h1: {
        ...typography.h1Mobile,
    },
    h2: {
        ...typography.h2Mobile,
    },
    h3: {
        ...typography.h3,
    },
    h4: {
        ...typography.h4,
    },
    h5: {
        ...typography.h5,
    },
    h6: {
        ...typography.h6,
    },
    p: {
        ...typography.p,
    },
    ['@media only screen and (min-width: 90ch)']: {
        margin: '20px 20px',
    },
})

type Props = {
    saHarGorDu: ReceptContent['singlePaketAfc']['saHarGorDu']
} & React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
>
const DoLikeThis = ({ saHarGorDu, ...rest }: Props) => {
    return (
        <SaHarGorDu
            {...rest}
            dangerouslySetInnerHTML={{ __html: saHarGorDu }}
        />
    )
}

export default DoLikeThis
