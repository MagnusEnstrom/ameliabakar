import React, { useState } from 'react'
import { ReceptContent } from '../graphql/types/ReceptContentType'
import H2 from '../components/typography/h2/H2'
import styled from '@emotion/styled'
import ContentNavWrapper from '../components/navigation/contentNavWrapper/ContentNavWrapper'
import ContentNavItem from '../components/navigation/contentNavItem/ContentNavItem'
import DoLikeThis from '../components/doLikeThis/DoLikeThis'
import Ingredients from '../components/Ingredients/Ingredients'
import Fab from '../components/fab/Fab'
import Chip from '../components/chips/Chip'
import typography from '../lib/typography'
import InvisibleLink from '../components/Links/InvisibleLink'
import H3 from '../components/typography/h3/H3'
import Spoon from '../assets/spoon.svg'
import Glove from '../assets/glove.svg'
import Instagram from '../components/instagram/instagram'
import Footer from '../components/footer/Footer'
import RecipeCardHeader from '../components/header/RecipeCardHeader'
import RateRecipe from '../components/rateRecipe/RateRecipe'

const ChipArea = styled.div({
    display: 'flex',
    columnGap: '17.5px',
    flexWrap: 'wrap',
    margin: '32px 10px 0px 10px',
    rowGap: '10px',
    ['@media only screen and (min-width: 90ch)']: {
        margin: '32px 20px 0px 20px',
        gridColumn: '1 / -1',
    },
    ['@media only screen and (min-width: 170ch)']: {
        gridArea: '1 / 3 / 2 / 4',
    },
    '@media print': {
        display: 'none',
    },
})
const FabArea = styled.div({
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '20px',
    ['@media only screen and (min-width: 90ch)']: {
        gridArea: '1 / -1',
        display: 'grid',
        gridAutoFlow: 'column',
        gap: '2rem',
        justifySelf: 'end',
        marginRight: '20px',
    },

    ['@media only screen and (min-width: 170ch)']: {
        gridArea: '1 / 2 / 2 / 3',
        justifySelf: 'start',
    },

    '@media print': {
        display: 'none',
    },
})

const ContentArea = styled.div({
    ['@media only screen and (min-width: 90ch)']: {
        display: 'grid',
        maxWidth: '1360px',
        margin: '0px auto',
        gridTemplateColumns: 'repeat(2, 1fr)',
    },
    ['@media only screen and (min-width: 170ch)']: {
        gridTemplateColumns: 'repeat(3, 1fr)',
        columnGap: '30px',
    },
})

const FabWrapper = styled.div({
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    alignItems: 'center',
})

const FabText = styled.span({
    ...typography.badge,
    display: 'none',
    ['@media only screen and (min-width: 90ch)']: {
        display: 'block',
    },
})

const StyledH2 = styled(H2)({
    marginTop: '50px',
    textAlign: 'center',
    '@media print': {
        display: 'none',
    },
})

const StyledDoLikeThis = styled(DoLikeThis)(
    ({ activeNav }: { activeNav: ActiveNav }) => ({
        display: activeNav === 'detail' ? 'block' : 'none',
        ['@media only screen and (min-width: 90ch)']: {
            gridColumn: '1 / -1',
        },
        ['@media only screen and (min-width: 170ch)']: {
            display: 'block',
            margin: '0px',
            gridArea: '3 / 2 / 5 / 4',
            maxWidth: '70ch',
        },
    })
)
const StyledIngredients = styled(Ingredients)(
    ({ activeNav }: { activeNav: ActiveNav }) => ({
        display: activeNav === 'ingredienser' ? 'flex' : 'none',
        ['@media only screen and (min-width: 90ch)']: {
            gridColumn: '1 / -1',
        },
        ['@media only screen and (min-width: 170ch)']: {
            display: 'flex',
            margin: '0px',
            gridArea: '3 / 1 / 4 / 2',
        },
    })
)

const StyledContentNavWrapper = styled(ContentNavWrapper)({
    ['@media only screen and (min-width: 90ch)']: {
        gridColumn: '1 / -1',
    },
    ['@media only screen and (min-width: 170ch)']: {
        display: 'none',
    },
})

const StyledH3Recipe = styled(H3)({
    display: 'none',
    ['@media only screen and (min-width: 170ch)']: {
        display: 'flex',
        gridArea: '2 / 1 / 3 / 2',
        gap: '14px',
    },
})
const StyledH3DoLikeTHis = styled(H3)({
    display: 'none',
    ['@media only screen and (min-width: 170ch)']: {
        gridArea: '2 / 2 / 3 / 4',
        display: 'flex',
        gap: '14px',
    },
})

const StyledSpoon = styled(Spoon)({
    maxHeight: '31.5px',
    maxWidth: '33px',
})
const StyledGlove = styled(Glove)({
    maxHeight: '27px',
    maxWidth: '37px',
})

const IconSpan = styled.span({
    display: 'grid',
    placeItems: 'center',
    width: 'max-content',
})

const StyleRateRecipe = styled(RateRecipe)({
    padding: '20px 10px 0px 10px',
    ['@media only screen and (min-width: 90ch)']: {
        gridColumn: '1 / 2',
    },

    ['@media only screen and (min-width: 170ch)']: {
        gridColumn: '1 / 2',
    },
})

type ActiveNav = 'ingredienser' | 'detail'
type Props = { pageContext: ReceptContent }
const receptPost = ({ pageContext }: Props) => {
    console.log(pageContext)

    const images = pageContext?.singlePaketAfc?.images?.map(img => {
        return img.localFile.childrenImageSharp[0].original.src
    })

    const [activeNav, setActiveNav] = useState<ActiveNav>('ingredienser')
    return (
        <div>
            <RecipeCardHeader
                rating={pageContext?.rating?.avgRating}
                recipeId={pageContext.id}
                svarighetsgrad={pageContext.singlePaketAfc.svarighetsgrad}
                tid={pageContext.singlePaketAfc.tid}
                tidFormat={pageContext.singlePaketAfc.tidFormat}
                kortBeskrivning={pageContext.singlePaketAfc.kortBeskrivning}
                title={pageContext.title}
                imgUrl={
                    pageContext.singlePaketAfc?.images?.[0]?.localFile
                        ?.childrenImageSharp?.[0]?.original?.src
                }
                images={images}
                style={{
                    maxWidth: '1360px',
                    margin: '0px auto',
                }}
            />

            {/* Betygsätt */}
            <ContentArea>
                <StyleRateRecipe pageContext={pageContext} />
                <StyledContentNavWrapper>
                    <ContentNavItem
                        text={'Ingredienser'}
                        onClick={() => setActiveNav('ingredienser')}
                        active={activeNav === 'ingredienser'}
                    />
                    <ContentNavItem
                        text={'Gör såhär'}
                        onClick={() => setActiveNav('detail')}
                        active={activeNav === 'detail'}
                    />
                </StyledContentNavWrapper>
                <StyledH3Recipe>
                    <IconSpan>
                        <StyledSpoon />
                    </IconSpan>
                    Ingredienser
                </StyledH3Recipe>
                <StyledIngredients
                    activeNav={activeNav}
                    content={pageContext.content}
                />
                <StyledH3DoLikeTHis>
                    <IconSpan>
                        <StyledGlove />
                    </IconSpan>
                    Gör så här
                </StyledH3DoLikeTHis>
                <StyledDoLikeThis
                    activeNav={activeNav}
                    saHarGorDu={pageContext.singlePaketAfc.saHarGorDu}
                />
                <ChipArea>
                    {pageContext.tags.nodes.map(tag => (
                        <InvisibleLink
                            key={tag.name}
                            to={`/recept?q=${tag.name}`}
                        >
                            <Chip key={tag.name} text={tag.name} />
                        </InvisibleLink>
                    ))}
                </ChipArea>
                <FabArea>
                    <FabWrapper>
                        <Fab variant={'save'} />
                        <FabText>Spara</FabText>
                    </FabWrapper>
                    <FabWrapper>
                        <Fab variant={'share'} />
                        <FabText>Dela</FabText>
                    </FabWrapper>
                    <FabWrapper onClick={() => window.print()}>
                        <Fab variant={'print'} />
                        <FabText>Skriv ut</FabText>
                    </FabWrapper>
                </FabArea>
            </ContentArea>
            <StyledH2>Du kanske också gillar...</StyledH2>
            <Instagram />
            <Footer />
        </div>
    )
}

export default receptPost
