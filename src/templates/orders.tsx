import styled from '@emotion/styled'
import React from 'react'
import Breadcrumbs from '../components/breadcrumbs/Breadcrumbs'
import Secondary from '../components/buttons/secondary/Secondary'
import Contact from '../components/contact/Contact'
import Layout from '../components/layout'
import InvisibleLink from '../components/Links/InvisibleLink'
import H1 from '../components/typography/h1/H1'
import P from '../components/typography/p/P'
import typography from '../lib/typography'
import TruckSvg from '../assets/truck.svg'
import Order from '../components/order/Order'
import useGetorders from '../hooks/useGetOrders'

const PageWrapper = styled.div({
    display: 'grid',
    maxWidth: '1360px',
    margin: '0px auto',
    padding: '0px 10px',
    ['@media only screen and (min-width: 90ch)']: {
        padding: '0px 20px',
    },
    ['@media only screen and (min-width: 170ch)']: {
        padding: '0px',
    },
})

const StyledH1 = styled(H1)({
    ...typography.h1Mobile,
    textAlign: 'center',
    margin: '20px',
    ['@media only screen and (min-width: 90ch)']: {
        ...typography.h1,
    },
    ['@media only screen and (min-width: 170ch)']: {
        margin: '20px 0px',
    },
})

const StyledP = styled(P)({
    textAlign: 'center',
    marginBottom: '30px',
    maxWidth: '650px',
    justifySelf: 'center',
    ['@media only screen and (min-width: 90ch)']: {
        marginBottom: '50px',
    },
})

const Psst = styled(P)({
    fontWeight: 600,
    textAlign: 'center',
    marginBottom: '30px',
    maxWidth: '650px',
    justifySelf: 'center',
    ['@media only screen and (min-width: 90ch)']: {
        marginBottom: '50px',
    },
})

const TruckSpan = styled.span({
    width: '100%',
    marginBottom: '15px',
    display: 'block',
    ['@media only screen and (min-width: 90ch)']: {
        display: 'inline-block',
        marginBottom: '0px',
        marginRight: '13px',
        width: 'auto',
    },
})

const StyledInvisibleLink = styled(InvisibleLink)({
    placeSelf: 'center',
    marginBottom: '50px',
    scrollBehavior: 'smooth',
})

const orders = () => {
    const wpOrders = useGetorders()
    return (
        <Layout isHomePage={false}>
            <Breadcrumbs
                crumbs={[
                    { name: 'Hem', to: '/' },
                    { name: 'Recept', to: '/recept' },
                ]}
                style={{
                    width: '100%',
                }}
            />
            <PageWrapper>
                <StyledH1>Beställningar</StyledH1>
                <StyledP>
                    Är du sugen på något? Ska du anordna ett kalas? Jag kan fixa
                    fikat på nolltid! Jag är lösningsorienterad och uppfyller
                    gärna dina tankar och idéer. Hör gärna av dig till mig så
                    kan vi hitta en väg framåt.
                </StyledP>
                <Psst>
                    <TruckSpan>
                        <TruckSvg />
                    </TruckSpan>
                    Psst..! Jag kör självklart ut bakverk och tillbehör gratis
                    inom Umeå kommun!
                </Psst>

                <StyledInvisibleLink
                    style={{ placeSelf: 'center', marginBottom: '50px' }}
                    to={'#kontakt'}
                >
                    <Secondary>Kontakta mig</Secondary>
                </StyledInvisibleLink>
                {wpOrders?.map(order => {
                    return <Order key={order.id} {...order} />
                })}
            </PageWrapper>
            <Contact />
        </Layout>
    )
}

export default orders
