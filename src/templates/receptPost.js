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

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const receptPost = ({pageContext}) => {

  return (
    <Layout>
        <h1>Recept Post {pageContext.uri}</h1>
        <pre>
            <code>
                {JSON.stringify(pageContext, null, 4)}
            </code>
        </pre>
    </Layout>
  )
}

export default receptPost;
