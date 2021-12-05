import styled from '@emotion/styled'
import { Link } from 'gatsby'
import React from 'react'
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
import HomeImg from './home.png'

const TextWrapper = styled.div({
    textAlign: 'center',
    padding: '0px 10px',
})

const TextWrapperSvg = styled.div({
    justifySelf: 'center',
    textAlign: 'center',
    padding: '0px 10px',
    maxWidth: '22ch'
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

const home = () => {
    return (
        <Layout isHomePage={true}>
            <AreaWrapper>
                <TextWrapper>
                    <HomePageImg src={HomeImg} />
                    <H2 style={{ marginTop: '30px' }}>Recept för alla!</H2>
                    <P>
                        Det finns alltid en anledning att baka. Här hittar du mina egna recept för alla typer av svårighetsgrader och varianter. 
                    </P>
                    <P style={{ marginBottom: '0px' }}>
                        Jag är en  självlärd hobbybakare som älskar att testa mig fram med olika smakkombinationer. Jag hoppas kunna inspirera dig med mina recept!
                    </P>
                </TextWrapper>
                <Link to={'/recept'} style={{ justifySelf: 'center', margin: '30px 0px 50px 0px' }}>
                    <Secondary>Här hittar du mina recept</Secondary>
                </Link>

                <H2Decoration style={{margin: '0px 10px 30px 10px'}} text={'Populära recept'} />
                <Popular style={{ margin: '0px 10px'}} />
                {/* render pick of amelia */}

                <TextWrapper>
                    <H2>Hej bakare!</H2>
                    <P>
                        Vad kul att du har hittat hit! Jag heter Amelia och jag är en hobbybakare från Umeå som brinner för kreativitet. Jag vill att köket ska vara en plats där nyfikenhet får verka fritt – en plats där man kan bli på bra humör! 
                    </P>
                    <P style={{ marginBottom: '0px' }} > 
                        Jag bakar allt från de enklaste småkakorna till mer avancerade tårtor och bakverk. På min hemsida vill jag att det ska finnas något för alla
                    </P>
                </TextWrapper>

                <Link to={'/om-mig'} style={{ justifySelf: 'center', margin: '30px 0px 50px 0px' }}>
                    <Secondary>Mer om mig</Secondary>
                </Link>
                
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
