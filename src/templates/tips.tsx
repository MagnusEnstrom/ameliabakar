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
import { ReceptPageQuery, TipsPageQuery } from '../graphql/types/ReceptContentType'

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

type Props = {pageContext: TipsPageQuery}

const tips = ({pageContext}: Props) => {

    const tipsContent = pageContext.nodes.map(tip => {
        console.log('tip', tip)
        return (
            <StyledArticle key={tip.id}>
                <StyledImg src={tip.tips.image.localFile.childImageSharp.original.src} />
                <StyledH2>{tip.title}</StyledH2>
                <P dangerouslySetInnerHTML={{ __html: tip.content }} />
            </StyledArticle>
        );
    });

    return (
        <Layout>
            <Breadcrumbs style={{margin: '20px 10px 0px 10px'}} crumbs={[{name: 'Hem', to:'/'}, {name: 'Tips', to: '/tips'}]} />
            <StyledMain>

                <H1 style={{ textAlign: 'center', margin: '20px 0px' }}>Tips</H1>
                <P data-cy="description" style={{ textAlign: 'center', margin: '0px 10px 30px 10px' }}>Har du någon gång undrat hur den där ... blev till? Här samlar jag lite tips och trix som kan vara bra och kul att känna till!</P>

                {tipsContent}            
            </StyledMain>
        </Layout>
    )
}

export default tips
