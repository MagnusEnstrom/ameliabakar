// require(`path`)
// require(`lodash/chunk`)
// This is a simple debugging tool
// dd() will prettily dump to the terminal and kill the process
// const { dd } = require(`dumper.js`)

/**
 * exports.createPages is a built-in Gatsby Node API.
 * It's purpose is to allow you to create pages for your site! 💡
 *
 * See https://www.gatsbyjs.com/docs/node-apis/#createPages for more info.
 */

exports.createPages = async gatsbyUtilities => {
    const { actions, graphql, reporter } = gatsbyUtilities

    await createAboutMePage(gatsbyUtilities)
    await createRecipeDetailPage(gatsbyUtilities)
    await createHomePage(gatsbyUtilities)
    await createReceptPage(gatsbyUtilities)
    await createTipsPage(gatsbyUtilities)
    await createSavedReceptPage(gatsbyUtilities)
    await ordersPage(gatsbyUtilities)
}

const createRecipeDetailPage = async ({ actions, graphql, reporter }) => {
    const result = await graphql(`
        {
            allRating {
                nodes {
                    id
                    avgRating
                    numRatings
                    parent {
                        id
                    }
                }
            }
            allWpRecept(sort: { date: DESC }) {
                nodes {
                    seo {
                        breadcrumbs {
                            text
                            url
                        }
                        canonical
                        cornerstone
                        focuskw
                        metaDesc
                        fullHead
                        metaKeywords
                        metaRobotsNofollow
                        metaRobotsNoindex
                        opengraphAuthor
                        opengraphDescription
                        opengraphModifiedTime
                        opengraphPublishedTime
                        opengraphPublisher
                        opengraphSiteName
                        opengraphUrl
                        opengraphTitle
                        opengraphType
                        readingTime
                        schema {
                            articleType
                            pageType
                            raw
                        }
                        title
                        twitterDescription
                        twitterTitle
                        opengraphImage {
                            altText
                            link
                            mimeType
                            mediaType
                            modified
                            slug
                        }
                    }
                    id
                    uri
                    title
                    date
                    content
                    tags {
                        nodes {
                            name
                        }
                    }
                    singlePaketAfc {
                        tidFormat
                        tid
                        svarighetsgrad
                        saHarGorDu
                        kortBeskrivning
                        images {
                            localFile {
                                childImageSharp {
                                    gatsbyImageData
                                }
                            }
                        }
                    }
                }
            }
        }
    `)
    if (result.errors) {
        reporter.error('There was an error fetching posts', result.errors)
    }

    const { allWpRecept, allRating } = result.data

    allWpRecept.nodes = allWpRecept.nodes.map(recept => {
        const rating = allRating?.nodes?.find(
            rating => rating.parent?.id === recept.id
        )
        return {
            ...recept,
            rating: rating ? rating : null,
        }
    })

    // Define the template to use
    const receptPost = require.resolve(`./src/templates/receptPost.tsx`)

    if (allWpRecept.nodes.length) {
        allWpRecept.nodes.map(recept => {
            actions.createPage({
                // It's best practice to use the uri field from WPGraphQL nodes when
                // building
                path: recept.uri,
                component: receptPost,
                context: {
                    recept,
                    allWpRecept: allWpRecept.nodes,
                },
            })
        })
    }
}

const createHomePage = async ({ actions }) => {
    const home = require.resolve(`./src/templates/home.tsx`)

    actions.createPage({
        path: '/',
        component: home,
        context: {},
    })
}

const ordersPage = async ({ actions }) => {
    const orders = require.resolve(`./src/templates/orders.tsx`)

    actions.createPage({
        path: '/bestallningar',
        component: orders,
        context: {},
    })
}

const createReceptPage = async ({ actions }) => {
    // Define the template to use
    const recept = require.resolve(`./src/templates/recept.tsx`)

    actions.createPage({
        // It's best practice to use the uri field from WPGraphQL nodes when
        // building
        path: '/recept',
        component: recept,
        context: {},
    })
}
const createSavedReceptPage = async ({ actions, graphql, reporter }) => {
    // Define the template to use
    const savedRecipes = require.resolve(`./src/templates/savedRecipes.tsx`)

    actions.createPage({
        // It's best practice to use the uri field from WPGraphQL nodes when
        // building
        path: '/mina-recept',
        component: savedRecipes,
        context: {},
    })
}
const createAboutMePage = async ({ actions, graphql, reporter }) => {
    // Define the template to use
    const aboutMe = require.resolve(`./src/templates/aboutMe.tsx`)

    actions.createPage({
        path: '/om-mig',
        component: aboutMe,
        context: {},
    })
}

const createTipsPage = async ({ actions, graphql, reporter }) => {
    const result = await graphql(`
        {
            allWpTip {
                nodes {
                    id
                    title
                    tips {
                        image {
                            localFile {
                                childImageSharp {
                                    gatsbyImageData
                                }
                            }
                        }
                    }
                    content
                }
            }
        }
    `)
    if (result.errors) {
        reporter.error('There was an error fetching posts', result.errors)
    }

    const { allWpTip } = result.data

    // Define the template to use
    const tips = require.resolve(`./src/templates/tips.tsx`)

    actions.createPage({
        path: '/tips',
        component: tips,
        context: allWpTip,
    })
}
