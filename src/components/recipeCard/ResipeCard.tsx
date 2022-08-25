import styled from '@emotion/styled'
import React, { useState } from 'react'
import { ReceptContent } from '../../graphql/types/ReceptContentType'
import typography from '../../lib/typography'
import Heart from '../../assets/heart-white.svg'
import ReceptTime from '../time/ReceptTime'
import colors from '../../lib/colors'
import ClockIcon from '../../assets/clock-white.svg'
import ClockIconBlack from '../../assets/clock.svg'
import Rating from '../rating/Rating'
import { Link } from 'gatsby'
import useSaveRecipe from '../../hooks/useSaveRecipe'
import useIsRecipeSaved from '../../hooks/useIsRecipeSaved'
import Difficulty from '../difficulty/Difficulty'
import P from '../typography/p/P'

const Time = styled.div({
    display: 'flex',
    gridTemplateColumns: 'min-content min-content',
    placeItems: 'center',
    gap: '7px',
    justifySelf: 'start',
    alignSelf: 'center',
})

const Clock = styled(ClockIcon)({
    display: 'none',
    height: '16px',
    width: '16px',
    ['@media only screen and (min-width: 90ch)']: {
        display: 'block',
    },
})
const ClockBlack = styled(ClockIconBlack)({
    display: 'none',
    height: '16px',
    width: '16px',
    ['@media only screen and (min-width: 90ch)']: {
        display: 'block',
    },
})

const TimeText = styled.span({
    ...typography.note,
    alignSelf: 'center',
})

const StyledLink = styled(Link)(({ variant }: { variant?: Variant }) => ({
    textDecoration: 'none',
    ['@media only screen and (min-width: 90ch)']: {
        gridTemplateColumns: '6fr 7fr',
        display: variant === 'vert' ? 'grid' : 'block',
    },
}))
const Card = styled.div(({ variant }: { variant?: Variant }) => {
    // 29 / 44
    return {
        aspectRatio: '2/3',
        minHeight: '220px',
        display: 'grid',
        gridTemplateRows: '1fr min-content',
        gridTemplateAreas: `
                 "Like"
                "content"
            `,
        ['@media only screen and (min-width: 90ch)']: {
            aspectRatio: variant === 'vert' ? '33/25' : '2/3',
        },
        position: 'relative',
        '.gatsby-img': {
            width: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: -1,
        },
    }
})

const Content = styled.div(({ variant }: { variant?: Variant }) => ({
    padding: '12px 20px',
    color: colors.white,
    display: 'grid',
    rowGap: '7px',
    gridTemplateAreas: `
    "Text Text"
    "Time Rating"
    `,
    background:
        'linear-gradient(360deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 89.71%)',

    ['@media only screen and (min-width: 90ch)']: {
        padding: '21px 20px',
        gridTemplateAreas: `
        "Text Text Text"
        "Time Diff Rating"
        `,

        display: variant === 'vert' ? 'none' : 'grid',
    },
}))

const HeartIcon = styled(Heart)({
    border: 'none',
    height: '22.5px',
    width: '25px',
})

const HeartButton = styled.button({
    alignSelf: 'start',
    margin: '13px 10px',
    justifySelf: 'end',
    gridArea: 'Like',
    backgroundColor: 'transparent',
    border: 'none',

    '&[aria-selected="true"] svg path': {
        fill: colors.red,
        stroke: colors.red,
    },

    ['@media only screen and (min-width: 90ch)']: {
        margin: '23px 19px',
    },
})

const CardText = styled.h2({
    ...typography.cardMobile,
    color: colors.white,
    margin: '0px',
    gridArea: 'Text',
    alignSelf: 'end',
    justifySelf: 'center',

    ['@media only screen and (min-width: 90ch)']: {
        ...typography.card,
    },
})

const StyledDifficulty = styled(Difficulty)(() => ({
    display: 'none',
    gridArea: 'Diff',
    justifySelf: 'center',
    ['@media only screen and (min-width: 90ch)']: {
        display: 'grid',
    },
}))
const VertContent = styled.div({
    display: 'none',
    padding: '12px 20px',
    color: colors.jet,
    rowGap: '7px',

    ['@media only screen and (min-width: 90ch)']: {
        padding: '21px 20px',
        gridTemplateAreas: `
        "Text Text Text"
        "Time Diff Rating"
        `,
        display: 'grid',
    },
})

const Description = styled(P)({
    gridArea: 'short',
    textAlign: 'start',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: 3,
    lineClamp: 3,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    margin: '0px',
    alignSelf: 'end',
})

type Variant = 'card' | 'vert'

type Props = {
    title: string
    tid: number
    tidFormat: string
    rating?: number
    uri: string
    id: string
    svarighetsgrad: 'Lätt' | 'Medel' | 'Svår'
    variant?: Variant
    kortBeskrivning?: string
    children: React.ReactNode
}

const ResipeCard = ({
    tidFormat,
    rating,
    tid,
    title,
    uri,
    id,
    svarighetsgrad,
    variant = 'card',
    kortBeskrivning,
    children,
}: Props) => {
    const toggleRecipe = useSaveRecipe()
    const [checked, setChecked] = useState<boolean>()
    const handleClick = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        e.stopPropagation()
        e.preventDefault()
        setChecked(toggleRecipe(id))
    }

    const isSaved = useIsRecipeSaved(id)

    if (variant === 'card') {
        return (
            <StyledLink to={uri}>
                <Card aria-label={'recept'}>
                    <HeartButton
                        data-cy="heartButton"
                        onClick={e => handleClick(e)}
                        aria-selected={
                            typeof checked !== 'undefined' ? checked : isSaved
                        }
                    >
                        <HeartIcon />
                    </HeartButton>
                    <Content>
                        <CardText>{title}</CardText>
                        <Time>
                            <Clock />
                            <TimeText>
                                {tid} {tidFormat === 'min' ? 'min' : 'h'}
                            </TimeText>
                        </Time>
                        <StyledDifficulty diff={svarighetsgrad} />
                        <Rating
                            recipeId={id}
                            style={{ gridArea: 'Rating', justifySelf: 'end' }}
                            rating={rating}
                        />
                    </Content>
                    {children}
                </Card>
            </StyledLink>
        )
    }
    if (variant === 'vert') {
        return (
            <StyledLink variant="vert" to={uri}>
                <Card variant="vert" aria-label={'recept'}>
                    {children}
                    <HeartButton
                        data-cy="heartButton"
                        onClick={e => handleClick(e)}
                        aria-selected={
                            typeof checked !== 'undefined' ? checked : isSaved
                        }
                    >
                        <HeartIcon />
                    </HeartButton>
                    <Content variant="vert">
                        <CardText>{title}</CardText>
                        <Time>
                            <Clock />
                            <TimeText>
                                {tid} {tidFormat === 'min' ? 'min' : 'h'}
                            </TimeText>
                        </Time>
                        <StyledDifficulty diff={svarighetsgrad} />
                        <Rating
                            recipeId={id}
                            style={{ gridArea: 'Rating', justifySelf: 'end' }}
                            rating={rating}
                        />
                    </Content>
                </Card>
                <VertContent>
                    <div
                        style={{
                            gridArea: 'Text',
                            display: 'flex',
                            flexDirection: 'column',
                            justifySelf: 'start',
                            justifyContent: 'flex-end',
                        }}
                    >
                        <CardText
                            style={{
                                color: colors.jet,
                                textAlign: 'start',
                                width: '100%',
                                marginBottom: '10px',
                            }}
                        >
                            {title}
                        </CardText>
                        <Description>{kortBeskrivning}</Description>
                    </div>
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
                        recipeId={id}
                        style={{ gridArea: 'Rating', justifySelf: 'start' }}
                        rating={rating}
                    />
                </VertContent>
            </StyledLink>
        )
    }
}

export default ResipeCard
