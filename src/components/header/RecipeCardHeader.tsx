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
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import Slider from '../slider/Slider'

const TimeText = styled.span({
    ...typography.note,
    alignSelf: 'center',
})

const Wrapper = styled.div(() => ({
    textDecoration: 'none',
    display: 'block',
    marginTop: '20px',
    maxHeight: '450px',

    ['@media only screen and (min-width: 170ch)']: {
        marginTop: '0px',
        gridTemplateColumns: '500px 1fr',
        display: 'grid',
        backgroundColor: colors.cultured,
    },
}))
const Card = styled.div(() => {
    return {
        overflow: 'hidden',
        width: '100%',
        display: 'none',

        '.gatsby-img': {
            height: '450px',
            top: 0,
            bottom: 0,
        },
        ['@media only screen and (min-width: 170ch)']: {
            display: 'block',
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
    images?: IGatsbyImageData[]
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
    images,
    recipeId,
    ...rest
}: Props) => {
    return (
        <div>
            <StyledHeader onlynav={true} />
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
                <Card aria-label={'recept'}>
                    <Slider>
                        {images &&
                            images.map(image => (
                                <div
                                    key={image.placeholder.fallback}
                                    style={{ maxHeight: '100%' }}
                                >
                                    <GatsbyImage
                                        image={image}
                                        alt={title}
                                        className="gatsby-img"
                                        objectFit="cover"
                                    />
                                </div>
                            ))}
                    </Slider>
                </Card>
            </Wrapper>
        </div>
    )
}

export default RecipeCardHeader
