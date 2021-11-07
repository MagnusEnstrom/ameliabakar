import React from "react"
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


const Title = styled(H2)({
    marginTop: '20px',

    textAlign: 'center',
})

const StyledP = styled(P)({
    textAlign: 'center',
    margin: '20px 10px',
})
type Props = {pageContext: ReceptContent}
const receptPost = ({pageContext}: Props) => {
    pageContext

    const images = pageContext?.singlePaketAfc?.images?.map((img) => {
        return img.localFile.childrenImageSharp[0].original.src
    })
  return (
    <Layout navImgs={images}>
        <Title>{pageContext.title}</Title>
        <ReceptInfo svarighetsgrad={pageContext.singlePaketAfc.svarighetsgrad} tid={pageContext.singlePaketAfc.tid} tidFormat={pageContext.singlePaketAfc.tidFormat} />
        <StyledP>{pageContext.singlePaketAfc.kortBeskrivning}</StyledP>
        {/* Betygsätt */}

        
        <pre>
            <code>
                {JSON.stringify(pageContext, null, 4)}
            </code>
        </pre>
    </Layout>
  )
}

export default receptPost;
