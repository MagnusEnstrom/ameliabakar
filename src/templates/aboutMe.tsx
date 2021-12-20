import styled from '@emotion/styled'
import React from 'react'
import Breadcrumbs from '../components/breadcrumbs/Breadcrumbs'
import Secondary from '../components/buttons/secondary/Secondary'
import Contact from '../components/contact/Contact'
import Layout from '../components/layout'
import InvisibleLink from '../components/Links/InvisibleLink'
import TertiaryButton from '../components/tertiary/TertiaryButton'
import H1 from '../components/typography/h1/H1'
import H2 from '../components/typography/h2/H2'
import P from '../components/typography/p/P'

const StyledImg = styled.img({
    maxWidth: '100%',
    placeSelf: 'center',
})
const StyledArticle = styled.article({
    display: 'grid',
    textAlign: 'center',
    padding: '0px 10px',
    width: '100%',
})
const StyledMain = styled.main({
    display: 'grid',
    justifyContent: 'center',
})

const StyledTeriaryButton = styled(TertiaryButton)({
    placeSelf: 'center',
    marginBottom: '50px',
});

const StyledH2 = styled(H2)({
    margin: '30px 0px 20px 0px'
});

const StyledInvisibleLink = styled(InvisibleLink)({
    placeSelf: 'center',
    marginBottom: '50px',
    scrollBehavior: 'smooth',
})

const aboutMe = () => {
    return (
        <Layout>
            <Breadcrumbs style={{margin: '20px 10px 0px 10px'}} crumbs={[{name: 'Hem', to:'/'}, {name: 'Om mig', to: '/om-mig'}]} />
            <StyledMain>

            <H1 style={{ textAlign: 'center', margin: '20px 0px' }}>Min Story</H1>
            <P style={{ textAlign: 'center', margin: '0px 0px 30px 0xp' }}>Ameliabakar.se är min egna plattform för att uttrycka det jag tycker är roligast i hela världen - bakning!</P>
            <StyledInvisibleLink style={{ placeSelf: 'center', marginBottom: '50px' }} to={'#kontakt'}>
                <Secondary>Kontakta mig</Secondary>
            </StyledInvisibleLink>

            <StyledArticle>
                <StyledImg src={'/img/amelia.png'} alt='Amelia Lindgren'/>
                <StyledH2>Amelia Lindgren</StyledH2>
                <P>Jag är en Umeåtjej med stort intresse för bakning, matlagning och inredning. Jag har drivit min receptblogg sedan 2016 där jag har samlat allt från de enklaste småkakorna till mer avancerade tårtor och bakverk.</P>
                <P style={{ marginBottom: '30px' }}>Jag tycker att matlagning ska vara något för alla, där kreativitet och nyskapande får verka fritt! Jag brinner för nya uppfinningar och att skapa smakkombinationer, klassiska såväl som nya. Mitt mål är att du ska känna dig inspirerad när du läser mina recept!</P>
                <StyledTeriaryButton name={'Kontakt'} to={'#kontakt'} />
            </StyledArticle>
            <StyledArticle>
                <StyledImg src={'/img/insperation.png'} alt={`Amelia's insperation`}/>
                <StyledH2>Inspiration</StyledH2>
                <P>Jag drivs själv av inspiration och alla de duktiga kollegor som finns där ute. Ibland kan jag scrolla i timmar och bara njuta av alla fina bakverk som tittar fram. När jag själv bakar försöker jag att hitta nya vägar fram genom att sätta råvarorna i fokus och testa nya saker. Kanske en dammsugare gjord på Fizzy Pop-godis kan fungera?</P>
                <P>Jag tycker om att skapa vackra bakverk med de ingredienser som finns att tillgå just för dagen i mitt skafferi. Mina recept skriver jag själv och det mesta jag hittar på bygger på en lång serie av tester och tankar som snurrar i mitt huvud!</P>
            </StyledArticle>
            <StyledArticle>
                <StyledImg src={'/img/teknik.png'} alt={`3d skrivare`}/>
                <StyledH2>Teknik</StyledH2>
                <P>Som komplement till min bakning försöker jag att använda mig av modern teknik. Jag har en 3D-printer där vi modellerar olika typer av bakredskap som sedan kan printas ut och användas i vardagen. Jag printar ut olika typer av spritstyllar, redskap för tårtdekoration, fotograferingstillbehör och mycket annat.</P>
                <P>Samtliga bilder tar jag med min systemkamera på stativ. Bland det viktigaste när man ska ta bilder är att det är bra ljus, jag själv älskar naturligt dagsljus. Därför försöker jag att maximera mina bilder genom att flytta runt mitt stativ mellan nyfikna katter och fönsterbrädor för att kunna ta den ultimata bilden på bakverken!</P>
            </StyledArticle>
            <StyledArticle>
                <StyledImg src={'/img/bakning.png'} alt={`Tårta`}/>
                <StyledH2>Bakning</StyledH2>
                <P>För mig är bakning något som ska vara roligt. Jag hoppas att jag kan ge dig den glädje jag känner när jag bjuder vänner och familj på fika.</P>

                <P>Behöver du hjälp med något inom bakning, recept, fotografering eller annat kan du höra av dig till mig!</P>
                <P>Jag tar emot beställningar på bakverk såsom cupcakes, tårtor eller annat gott. Du väljer själv vad du behöver så hittar vi vägen framåt tillsammans!</P>
            </StyledArticle>
            </StyledMain>
            <Contact />
        </Layout>
    )
}

export default aboutMe
