import React, { useState } from "react"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"
import parse from "html-react-parser"

// We're using Gutenberg so we need the block styles
// these are copied into this project due to a conflict in the postCSS
// version used by the Gatsby and @wordpress packages that causes build
// failures.
// @todo update this once @wordpress upgrades their postcss version
import "../css/@wordpress/block-library/build-style/style.css"
import "../css/@wordpress/block-library/build-style/theme.css"

import Layout from "../components/layout"
import { ReceptContent } from "../graphql/types/ReceptContentType"
import H2 from "../components/typography/h2/H2"
import styled from "@emotion/styled"
import ReceptInfo from "../components/receptInfo/ReceptInfo"
import P from "../components/typography/p/P"
import ContentNavWrapper from "../components/navigation/contentNavWrapper/ContentNavWrapper"
import ContentNavItem from "../components/navigation/contentNavItem/ContentNavItem"
import DoLikeThis from "../components/doLikeThis/DoLikeThis"
import Ingredients from "../components/Ingredients/Ingredients"
import Regular from "../components/chips/regular/regular"
import Fab from "../components/fab/Fab"


const Title = styled(H2)({
    marginTop: '20px',

    textAlign: 'center',
})

const StyledP = styled(P)({
    textAlign: 'center',
    margin: '20px 10px',
})
const ChipArea = styled.div({
    display: 'flex',
    columnGap: '17.5px',
    flexWrap: 'wrap',
    margin: '32px 10px 0px 10px',
    rowGap: '10px',
})
const FabArea = styled.div({
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '20px',
})
type Props = {pageContext: ReceptContent}
const receptPost = ({pageContext}: Props) => {
    pageContext

    const images = pageContext?.singlePaketAfc?.images?.map((img) => {
        return img.localFile.childrenImageSharp[0].original.src
    })

    const [activeNav, setActiveNav] = useState<'ingredienser' | 'detail'>('ingredienser')
  return (
    <Layout navImgs={images}>
        <Title>{pageContext.title}</Title>
        <ReceptInfo svarighetsgrad={pageContext.singlePaketAfc.svarighetsgrad} tid={pageContext.singlePaketAfc.tid} tidFormat={pageContext.singlePaketAfc.tidFormat} />
        <StyledP>{pageContext.singlePaketAfc.kortBeskrivning}</StyledP>
        {/* Betygsätt */}

        <ContentNavWrapper>
            <ContentNavItem text={'Ingredienser'} onClick={() => setActiveNav('ingredienser')} active={activeNav === 'ingredienser'} />
            <ContentNavItem text={'Gör såhär'} onClick={() => setActiveNav('detail')} active={activeNav === 'detail'} />
        </ContentNavWrapper>

        {activeNav === 'detail' && <DoLikeThis saHarGorDu={pageContext.singlePaketAfc.saHarGorDu} />}
        {activeNav === 'ingredienser' && <Ingredients content={pageContext.content} />}
        <ChipArea>
            {pageContext.tags.nodes.map(tag => <Regular text={tag.name} />)}
        </ChipArea>
        <FabArea>
            <Fab variant={'save'} />
            <Fab variant={'share'} />
            <Fab variant={'print'} />
        </FabArea>
        <H2 style={{marginTop: '50px', textAlign: 'center'}}>Du kanske också gillar...</H2>
        {/* <pre >
            <code style={{ maxWidth: '100vw', overflow: 'scroll'}}>
                {JSON.stringify(pageContext, null, 4)}
            </code>
        </pre> */}
    </Layout>
  )
}

export default receptPost;
