import styled from '@emotion/styled'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import SEO from 'gatsby-plugin-wpgraphql-seo/dist/Seo'
import React from 'react'
import Breadcrumbs from '../components/breadcrumbs/Breadcrumbs'
import Layout from '../components/layout'
import H1 from '../components/typography/h1/H1'
import H2 from '../components/typography/h2/H2'
import P from '../components/typography/p/P'
import { TipsPageQuery } from '../graphql/types/ReceptContentType'

const StyledImg = styled.div({
    position: 'relative',
    aspectRatio: '2/3',
    '.gatsby-img': {
        width: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1,
    },
    ['@media only screen and (min-width: 90ch)']: {
        gridArea: 'img',
    },
})
const StyledArticle = styled.article({
    display: 'grid',
    textAlign: 'center',
    width: '100%',
    gridTemplateAreas: `
        "img text"
    `,

    ['@media only screen and (min-width: 90ch)']: {
        gridTemplateColumns: '1fr 1fr',
    },
})
const StyledMain = styled.main({
    display: 'grid',
    justifyContent: 'center',
    padding: '0px 10px',
    ['@media only screen and (min-width: 90ch)']: {
        padding: '0px 20px',
        maxWidth: '820px',
        margin: '0 auto 70px auto',
        'article:nth-of-type(even)': {
            gridTemplateAreas: `
                "text img"
            `,
            'div:last-of-type': {
                paddingRight: '50px',
            },
        },
        'article:nth-of-type(odd)': {
            'div:last-of-type': {
                paddingLeft: '50px',
            },
        },
    },
    ['@media only screen and (min-width: 170ch)']: {
        margin: '0px auto 100px auto',
    },
})

const StyledH2 = styled(H2)({
    margin: '30px 0px 20px 0px',
})

const TipContainer = styled.div({
    ['@media only screen and (min-width: 90ch)']: {
        placeSelf: 'center',
        gridArea: 'text',
        textAlign: 'start',
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

type Props = { pageContext: TipsPageQuery }

const tips = ({ pageContext }: Props) => {
    const tipsContent = pageContext.nodes.map(tip => {
        const image = getImage(tip.tips.image.localFile.childImageSharp)
        return (
            <StyledArticle key={tip.id}>
                <StyledImg>
                    <GatsbyImage
                        image={image}
                        alt={tip.title}
                        className="gatsby-img"
                        objectFit="cover"
                    />
                </StyledImg>
                <TipContainer>
                    <StyledH2>{tip.title}</StyledH2>
                    <P dangerouslySetInnerHTML={{ __html: tip.content }} />
                </TipContainer>
            </StyledArticle>
        )
    })

    return (
        <>
            <Layout>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <Breadcrumbs
                        style={{ margin: '20px 10px 0px 10px' }}
                        crumbs={[
                            { name: 'Hem', to: '/' },
                            { name: 'Tips', to: '/tips' },
                        ]}
                    />
                </div>
                <StyledMain>
                    <H1 style={{ textAlign: 'center', margin: '20px 0px' }}>
                        Tips
                    </H1>
                    <StyledP data-cy="description">
                        Har du någon gång undrat hur den där ... blev till? Här
                        samlar jag lite tips och trix som kan vara bra och kul
                        att känna till!
                    </StyledP>

                    {tipsContent}
                </StyledMain>
            </Layout>
        </>
    )
}

export default tips
