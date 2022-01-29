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

const TextWrapper = styled.div({
    textAlign: 'center',
    padding: '0px 10px',
    display: 'grid',
})

const TextWrapperSvg = styled.div({
    justifySelf: 'center',
    textAlign: 'center',
    padding: '0px 10px',
    maxWidth: '22ch',

})

const HomePageImg = styled.img({
    width: '100%',
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
const AreaWrapper = styled.main({
    display: 'grid',
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
    margin: '0px 10px 30px 10px',
    ['@media only screen and (min-width: 70ch)']: {
        margin: '0px 10px 50px 10px',
    }
})
const StyledMyRecipesLink = styled(Link)({
    justifySelf: 'center', 
    margin: '30px 0px 50px 0px',
    ['@media only screen and (min-width: 70ch)']: {
        margin: '30px 0px 70px 0px',
    }
})
const HelloBakers = styled.div({
    textAlign: 'center',
    padding: '0px 10px',
    display: 'grid',
    marginTop: '50px',
    marginBottom: '50px',
    ['@media only screen and (min-width: 90ch)']: {
        padding: '0px 35px',
        marginTop: '120px',
        justifySelf: 'center',
        maxWidth: '75ch',
        gap: '0px 100px',
        gridTemplateAreas: `
        "avatar title"
        "avatar text"
        "avatar text"
        "insta about"
        `
    }
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
    }
})
const HelloBakersP = styled(P)({
    ['@media only screen and (min-width: 90ch)']: {
        textAlign: 'start',
    }
})

const home = () => {
    return (
        <Layout isHomePage={true}>
            <AreaWrapper>
                <TextWrapper>
                    <HomePageImg style={{ marginTop: '50px' }} src={HomeImg} />
                    <H2 style={{ marginTop: '30px' }}>Recept för alla!</H2>
                    <StyledP>
                        Det finns alltid en anledning att baka. Här hittar du mina egna recept för alla typer av svårighetsgrader och varianter. 
                    </StyledP>
                    <StyledP style={{ marginBottom: '0px' }}>
                        Jag är en  självlärd hobbybakare som älskar att testa mig fram med olika smakkombinationer. Jag hoppas kunna inspirera dig med mina recept!
                    </StyledP>
                </TextWrapper>
                <StyledMyRecipesLink to={'/recept'}>
                    <Secondary>Här hittar du mina recept</Secondary>
                </StyledMyRecipesLink>

                <StyledH2Decoration text={'Populära recept'} />
                <Popular style={{ margin: '0px 10px 0px 10px'}} />
                {/* render pick of amelia */}

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

                
                <SubHome />

                <Tips />
                
                <H2Decoration style={{margin: '50px 10px 30px 10px'}} text={'Senaste recepten'} />
                <Latest style={{ margin: '0px 10px'}} />
                
                <Link to={'/recept'} style={{ justifySelf: 'center', margin: '30px 0px 50px 0px' }}>
                    <Secondary>Visa alla recept</Secondary>
                </Link>

                <H2Decoration style={{margin: '0px 10px'}} text={'Utbudet'} />

                <PartyDraw />
                <TextWrapperSvg>
                    <H3>Bakning</H3>
                    <P>
                        Jag kan baka till barnkalaset, baby showern eller bara till hemmakvällen
                    </P>
                </TextWrapperSvg>
                
                <Hangout />
                <TextWrapperSvg>
                    <H3>Konferenser</H3>
                    <P>
                        Jag fixar företagsfika till er konferens, after work eller andra trevligheter
                    </P>
                </TextWrapperSvg>

                <Delivery />
                <TextWrapperSvg>
                    <H3>Leveranser</H3>
                    <P>
                        Gratis utkörning av bakverk och godis inom Umeå kommun!
                    </P>
                </TextWrapperSvg>

                <Link to={'/om-bestallningar'} style={{ justifySelf: 'center', margin: '30px 0px 50px 0px' }}>
                    <Primary>Läs mer om beställningar</Primary>
                </Link>

                {/* Render instagram */}
            </AreaWrapper>
        </Layout>
    )
}

export default home
