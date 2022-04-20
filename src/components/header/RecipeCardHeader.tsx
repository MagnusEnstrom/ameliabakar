import styled from '@emotion/styled'
import React from 'react'
import typography from '../../lib/typography'
import colors from '../../lib/colors'
import ClockIconBlack from '../../assets/clock.svg'
import Rating from '../rating/Rating'
import Difficulty from '../difficulty/Difficulty'
import P from '../typography/p/P'
import Header from './Header'
import HeaderImgs from './HeaderImgs'
import Breadcrumbs from '../breadcrumbs/Breadcrumbs'

const TimeText = styled.span({
    ...typography.note,
    alignSelf: 'center',
})

const Wrapper = styled.div(() => ({
    textDecoration: 'none',
    display: 'block',
    marginTop: '20px',

    ['@media only screen and (min-width: 170ch)']: {
        marginTop: '0px',
        gridTemplateColumns: '6fr 7fr',
        display: 'grid',
        backgroundColor: colors.cultured,
    },
}))
const Card = styled.div(({ imgUrl }: { imgUrl: string }) => {
    return {
        minHeight: '220px',
        backgroundColor: colors.jet,
        backgroundImage: `url(${imgUrl})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        display: 'none',
        gridTemplateRows: '1fr min-content',
        gridTemplateAreas: `
        "Like"
        "content"
        `,
        aspectRatio: '33/25',
        ['@media only screen and (min-width: 170ch)']: {
            display: 'grid',
        },
    }
})

const CardText = styled.h2({
    ...typography.h1,
    color: colors.jet,
    margin: '0px',
    gridArea: 'Text',
    alignSelf: 'center',
    justifySelf: 'center',
    textAlign: 'center',
})

const StyledDifficulty = styled(Difficulty)(() => ({
    gridArea: 'Diff',
    justifySelf: 'center',
    ['@media only screen and (min-width: 90ch)']: {
        display: 'grid',
    },
}))

const Description = styled(P)({
    textAlign: 'center',
    margin: '0px',
    ['@media only screen and (min-width: 90ch)']: {
        textAlign: 'start',
    },
})

const OverveiwWrapper = styled.div({
    display: 'flex',
    gap: '65px',
    placeSelf: 'center',
})

const Time = styled.div({
    display: 'flex',
    gridTemplateColumns: 'min-content min-content',
    placeItems: 'center',
    gap: '7px',
    justifySelf: 'start',
    alignSelf: 'center',
})

const ClockBlack = styled(ClockIconBlack)({
    display: 'none',
    height: '16px',
    width: '16px',
    ['@media only screen and (min-width: 90ch)']: {
        display: 'block',
    },
})

const StyledTextArea = styled.div({
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    placeSelf: 'center',
    padding: '10px',
    gap: '22px',
    ['@media only screen and (min-width: 90ch)']: {
        padding: '20px',
    },
    ['@media only screen and (min-width: 170ch)']: {
        padding: '30px',
        gap: '32px',
    },
})

const StyledHeader = styled(Header)(
    ({ alwaysShow }: { alwaysShow?: boolean }) => ({
        display: alwaysShow ? 'grid' : 'none',
        ['@media only screen and (min-width: 170ch)']: {
            display: 'grid',
        },
    })
)
const StyledHeaderImgs = styled(HeaderImgs)({
    display: 'block',
    ['@media only screen and (min-width: 170ch)']: {
        display: 'none',
    },
})
const StyledBreadcrumbs = styled(Breadcrumbs)({
    display: 'none',
    ['@media only screen and (min-width: 170ch)']: {
        display: 'flex',
    },
})
type Props = {
    title: string
    tid: number
    tidFormat: string
    rating: number
    svarighetsgrad: 'Lätt' | 'Medel' | 'Svår'
    kortBeskrivning?: string
    imgUrl: string
    images?: string[]
    recipeId: string
} & React.HTMLAttributes<HTMLDivElement>

const RecipeCardHeader = ({
    tidFormat,
    id,
    rating,
    tid,
    title,
    svarighetsgrad,
    kortBeskrivning,
    imgUrl,
    images,
    recipeId,
    ...rest
}: Props) => {
    return (
        <div>
            <StyledHeader onlynav={true} alwaysShow={!images} />
            {images && <StyledHeaderImgs images={images} />}
            <StyledBreadcrumbs
                crumbs={[
                    { name: 'Hem', to: '/' },
                    { name: 'Recept', to: '/recept' },
                    { name: `${title}`, to: '/' },
                ]}
            />
            <Wrapper {...rest}>
                <StyledTextArea>
                    <CardText>{title}</CardText>
                    <OverveiwWrapper>
                        <Time>
                            <ClockBlack />
                            <TimeText>
                                {tid} {tidFormat === 'min' ? 'min' : 'h'}
                            </TimeText>
                        </Time>
                        <StyledDifficulty
                            diff={svarighetsgrad}
                            style={{ justifySelf: 'start' }}
                        />
                        <Rating
                            recipeId={recipeId}
                            style={{ gridArea: 'Rating', justifySelf: 'start' }}
                            rating={rating}
                        />
                    </OverveiwWrapper>
                    <Description>{kortBeskrivning}</Description>
                </StyledTextArea>
                <Card imgUrl={imgUrl} aria-label={'recept'} />
            </Wrapper>
        </div>
    )
}

export default RecipeCardHeader
