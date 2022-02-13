import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import Secondary from '../components/buttons/secondary/Secondary'
import H2Decoration from '../components/decoration/H2Decoration'
import Layout from '../components/layout'
import SubHome from '../components/subscribe/SubHome/SubHome'
import H2 from '../components/typography/h2/H2'
import P from '../components/typography/p/P'
import typography from '../lib/typography'
import PartyDrawSvg from '../assets/party-draw.svg'
import DeliveryDraw from '../assets/order-delivery-draw.svg'
import HangoutDraw from '../assets/hangout-draw.svg'
import Primary from '../components/buttons/primary/Primary'
import Popular from '../components/recipes/popular/Popular'
import Latest from '../components/recipes/latest/Latest'
import Tips from '../components/tips/Tips'
import HomeImg from './ameliabakar-home.jpeg'
import Avatar from '../components/avatar/avatar'
import InstagramLink from '../components/instagramLink/instagramLink'
import colors from '../lib/colors'
import Instagram from '../components/instagram/instagram'

const TextWrapper = styled.div({
    textAlign: 'center',
    display: 'grid',
    ['@media only screen and (min-width: 170ch)']: {
        alignSelf: 'center',
        justifySelf: 'start',
        padding: '0px 20px',
    }
})
const IntroWrapper = styled.div({
    textAlign: 'center',
    padding: '0px 0px 50px 0px',
    display: 'grid',
    ['@media only screen and (min-width: 70ch)']: {
        padding: '0px 0px 70px 0px',
    },
    ['@media only screen and (min-width: 170ch)']: {
        gridTemplateColumns: '2fr 1fr',
        padding: '0px 0px 100px 0px',
        gap: '100px',
    }

})

const TextWrapperSvg = styled.div({
    justifySelf: 'center',
    textAlign: 'center',
    padding: '0px 10px',
    maxWidth: '22ch',

})

const HomePageImg = styled.img({
    width: '100%',
    marginTop: '50px', 
    maxHeight: '480px',
    objectFit: 'cover',
})

const PartyDraw = styled(PartyDrawSvg)({
    placeSelf: 'center',
})
const Hangout = styled(HangoutDraw)({
    placeSelf: 'center',
})
const Delivery = styled(DeliveryDraw)({
    placeSelf: 'center',
})
const AreaWrapper = styled.section({
    display: 'grid',
    padding: '0px 10px',
    maxWidth: '1360px',
    ['@media only screen and (min-width: 70ch)']: {
        padding: '0px 20px',
    },
    ['@media only screen and (min-width: 170ch)']: {
        margin: '0 auto',
    }
});

const H3 = styled.h2({
    ...typography.h5
})

const StyledP = styled(P)({
    ['@media only screen and (min-width: 70ch)']: {
        maxWidth: '50ch',
        textAlign: 'start',
        justifySelf: 'center'
    }
})
const StyledH2Decoration = styled(H2Decoration)({
    margin: '0px 0px 30px 0px',
    ['@media only screen and (min-width: 70ch)']: {
        margin: '0px 0px 50px 0px',
    }
})
const StyledMyRecipesLink = styled(Link)({
    justifySelf: 'center', 
    margin: '30px 0px 0px 0px',
})
const HelloBakers = styled.div({
    textAlign: 'center',
    display: 'grid',
    
    padding: '50px 10px 50px 10px',
    
    ['@media only screen and (min-width: 90ch)']: {
        margin: '0 auto',
        padding: '120px 20px 50px 20px',
        justifySelf: 'center',
        maxWidth: '75ch',
        gap: '0px 100px',
        gridTemplateAreas: `
        "avatar title"
        "avatar text"
        "avatar text"
        "insta about"
        `
    },
    ['@media only screen and (min-width: 170ch)']: {
        padding: '50px 0px 30px 0px',
        gap: '0px',
        gridArea: 'hello',
        gridTemplateAreas: `
            "avatar"
            "title"
            "text"
            "text"
            "about"
            "insta"
        `
        
    }
})

const GridContainer = styled.div({
    display: 'grid',
})
const StyledAvatar = styled(Avatar)({
    justifySelf: 'center', 
    marginBottom: '21px',
    ['@media only screen and (min-width: 90ch)']: {
        alignSelf: 'end',
        gridArea: 'avatar'
    }
})
const StyledInstagramLink = styled(InstagramLink)({
    justifySelf: 'center', 
    ['@media only screen and (min-width: 90ch)']: {
        gridArea: 'insta'
    },
    ['@media only screen and (min-width: 170ch)']: {
        backgroundColor: colors.cultured,
        width: '100%',
        justifyContent: 'center',
        padding: '45px 0px',
        marginTop: '50px',
        svg: {
            height: '33px',
            width: '33px',
        },
        a: {
            fontSize: '28px',
            fontWeight: 700,
        },
    }
})
const HelloBakersP = styled(P)({

    ['@media only screen and (min-width: 90ch)']: {
        textAlign: 'start',
    }
})

const UtbudWrapper = styled.section({
    display: 'grid',
    ['@media only screen and (min-width: 90ch)']: {
        display: 'flex',
        placeSelf: 'center',
        justifyContent: 'space-between',
        width: '100%',
        padding: '20px 35px 0px 35px',
    }
});

const MainArea = styled.section({
    display: 'block',

    ['@media only screen and (min-width: 170ch)']: {
        margin: '0 auto',
        maxWidth: '1360px',
        display: 'grid',
        gap: '110px',
        gridTemplateColumns: '2fr 1fr',
        gridTemplateAreas: `
        "Latest Info"
        `,
        paddingTop: '50px',
    }
    
})

const InfoArea = styled.div({
    ['@media only screen and (min-width: 170ch)']: {
        display: 'grid',
        gridArea: 'Info',
        alignSelf: 'start',
        gridTemplateAreas: `
            "hello"
            "tips"
            "newsletter"
        `
    
    }
})
const LatestArea = styled.div({
    display: 'grid',
    width: '100%',
    overflow: 'hidden',
    
    ['@media only screen and (min-width: 170ch)']: {
        gridArea: 'Latest',
    
    }
})

const LatestLink = styled(Link)({
    justifySelf: 'center', 
    margin: '30px 0px 50px 0px',
    ['@media only screen and (min-width: 170ch)']: {
        margin: '60px 0px 100px 0px',
    
    }
})

const StyledTips = styled(Tips)({
    ['@media only screen and (min-width: 170ch)']: {
        gridArea: 'tips',
        marginBottom: '30px',
    }
})
const StyledSubhome = styled(SubHome)({
    ['@media only screen and (min-width: 170ch)']: {
        gridArea: 'newsletter'
    }
})

const home = () => {
    return (
        <Layout isHomePage={true}>
            <AreaWrapper>
                <IntroWrapper>
                    <HomePageImg src={HomeImg} />
                    <TextWrapper>
                        <H2 style={{ marginTop: '30px' }}>Recept för alla!</H2>
                        <StyledP>
                            Det finns alltid en anledning att baka. Här hittar du mina egna recept för alla typer av svårighetsgrader och varianter. 
                        </StyledP>
                        <StyledP style={{ marginBottom: '0px' }}>
                            Jag är en  självlärd hobbybakare som älskar att testa mig fram med olika smakkombinationer. Jag hoppas kunna inspirera dig med mina recept!
                        </StyledP>
                        <StyledMyRecipesLink to={'/recept'}>
                            <Secondary>Här hittar du mina recept</Secondary>
                        </StyledMyRecipesLink>
                    </TextWrapper>
                </IntroWrapper>

                <StyledH2Decoration text={'Populära recept'} />
                <Popular style={{ justifySelf: 'center', width: '100%' }} />
                {/* render pick of amelia */}
            </AreaWrapper>

            <MainArea>

            <InfoArea>

                <HelloBakers>
                    <StyledAvatar />
                    <StyledInstagramLink />
                    <H2 style={{ marginTop: '21px'}}>Hej bakare!</H2>
                    <HelloBakersP>
                        Vad kul att du har hittat hit! Jag heter Amelia och jag är en hobbybakare från Umeå som brinner för kreativitet. Jag vill att köket ska vara en plats där nyfikenhet får verka fritt – en plats där man kan bli på bra humör! 
                    </HelloBakersP>
                    <HelloBakersP style={{ marginBottom: '30px' }} > 
                        Jag bakar allt från de enklaste småkakorna till mer avancerade tårtor och bakverk. På min hemsida vill jag att det ska finnas något för alla
                    </HelloBakersP>
                    <Link to={'/om-mig'} style={{ justifySelf: 'center', margin: '0px'}}>
                        <Secondary>Mer om mig</Secondary>
                    </Link>
                </HelloBakers>
                <StyledSubhome />

                <StyledTips />
            </InfoArea>
            <LatestArea>
                <H2Decoration style={{
                    padding: '50px 10px 30px 10px',
                    display: 'flex',
                   
                    
            }} text={'Senaste recepten'} />

                <Latest style={{ padding: '0px 10px'}} />
                
                <LatestLink to={'/recept'}>
                    <Secondary>Visa alla recept</Secondary>
                </LatestLink>
            </LatestArea>

            </MainArea>
            <AreaWrapper>
                
                <H2Decoration style={{margin: '0px 0px 30px 0px'}} text={'Utbudet'} />
                <UtbudWrapper>
                    <GridContainer>
                        <PartyDraw />
                        <TextWrapperSvg>
                            <H3>Bakning</H3>
                            <P>
                                Jag kan baka till barnkalaset, baby showern eller bara till hemmakvällen
                            </P>
                        </TextWrapperSvg>
                    </GridContainer>
                    <GridContainer>
                        <Hangout />
                        <TextWrapperSvg>
                            <H3>Konferenser</H3>
                            <P>
                                Jag fixar företagsfika till er konferens, after work eller andra trevligheter
                            </P>
                        </TextWrapperSvg>
                    </GridContainer>
                    <GridContainer>
                        <Delivery />
                        <TextWrapperSvg>
                            <H3>Leveranser</H3>
                            <P>
                                Gratis utkörning av bakverk och godis inom Umeå kommun!
                            </P>
                        </TextWrapperSvg>
                    </GridContainer>
                </UtbudWrapper>

                <Link to={'/om-bestallningar'} style={{ justifySelf: 'center', margin: '30px 0px 50px 0px' }}>
                    <Primary>Läs mer om beställningar</Primary>
                </Link>

            </AreaWrapper>
        </Layout>
    )
}

export default home
