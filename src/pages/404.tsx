import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Seo from '../components/seo'
import styled from '@emotion/styled'
import typography from '../lib/typography'
import P from '../components/typography/p/P'
import Primary from '../components/buttons/primary/Primary'
import InvisibleLink from '../components/Links/InvisibleLink'
import Breadcrumbs from '../components/breadcrumbs/Breadcrumbs'

const NotFoundHeader = styled.h1({
    ...typography.h5,
    marginBottom: '10px',
})
const EmptyHeader = styled.h2({
    ...typography.h1,
    marginTop: '10px',
    marginBottom: '20px',
})

const Container = styled.main({
    textAlign: 'center',
    margin: '10px',
})

const NotFoundPage = ({ data, location }) => {
    return (
        <Layout>
            <Seo title="404: Not Found" />
            <Breadcrumbs
                crumbs={[
                    { name: 'hem', to: '/' },
                    { name: '404', to: '/404' },
                ]}
            />
            <Container>
                <NotFoundHeader>404: Sidan kunde inte hittas</NotFoundHeader>
                <EmptyHeader>Oj, här var det tomt</EmptyHeader>
                <P>
                    Länken kan ha gått sönder, sidan kan ha tagits bort eller
                    flyttats till en ny plats. Besök gärna någon av våra andra
                    sidor istället
                </P>
                <InvisibleLink style={{ margin: '0px auto' }} to={'/'}>
                    <Primary>Hem</Primary>
                </InvisibleLink>
            </Container>
        </Layout>
    )
}

export default NotFoundPage

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
`
