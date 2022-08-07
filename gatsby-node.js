const path = require(`path`)
const chunk = require(`lodash/chunk`)

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
            allWpRecept(sort: { fields: [date], order: DESC }) {
                nodes {
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
                        tips
                        tidFormat
                        tid
                        svarighetsgrad
                        saHarGorDu
                        kortBeskrivning
                        images {
                            localFile {
                                childrenImageSharp {
                                    original {
                                        src
                                    }
                                    fixed(width: 400, height: 400) {
                                        src
                                    }
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

    // Define the template to use
    const receptPost = require.resolve(`./src/templates/receptPost.tsx`)

    if (allWpRecept.nodes.length) {
        allWpRecept.nodes.map(recept => {
            const rating = allRating?.nodes?.find(
                rating => rating.parent?.id === recept.id
            )
            const receptWithRating = {
                ...recept,
                rating: rating ? rating : null,
            }
            actions.createPage({
                // It's best practice to use the uri field from WPGraphQL nodes when
                // building
                path: recept.uri,
                component: receptPost,
                context: receptWithRating,
            })
        })
    }
}

const createHomePage = async ({ actions, graphql, reporter }) => {
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
            allWpRecept {
                nodes {
                    id
                    uri
                    title
                    content
                    tags {
                        nodes {
                            name
                        }
                    }
                    singlePaketAfc {
                        tips
                        tidFormat
                        tid
                        svarighetsgrad
                        saHarGorDu
                        kortBeskrivning
                        images {
                            localFile {
                                childrenImageSharp {
                                    original {
                                        src
                                    }
                                    fixed(width: 400, height: 400) {
                                        src
                                    }
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

    // Define the template to use
    const home = require.resolve(`./src/templates/home.tsx`)

    allWpRecept.nodes = allWpRecept.nodes.map(recept => {
        const rating = allRating?.nodes?.find(
            rating => rating.parent?.id === recept.id
        )
        return ({
            ...recept,
            rating: rating ? rating : null,
        })
    })

    actions.createPage({
        path: '/',
        component: home,
        context: allWpRecept,
    })
}

const createReceptPage = async ({ actions, graphql, reporter }) => {
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
            allWpRecept(sort: { fields: [date], order: DESC }) {
                nodes {
                    id
                    uri
                    title
                    tags {
                        nodes {
                            name
                        }
                    }
                    singlePaketAfc {
                        tidFormat
                        tid
                        images {
                            localFile {
                                childrenImageSharp {
                                    original {
                                        src
                                    }
                                    fixed(width: 400, height: 400) {
                                        src
                                    }
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

    // Define the template to use
    const recept = require.resolve(`./src/templates/recept.tsx`)

    allWpRecept.nodes = allWpRecept.nodes.map(recept => {
        const rating = allRating?.nodes?.find(
            rating => rating.parent?.id === recept.id
        )
        return ({
            ...recept,
            rating: rating ? rating : null,
        })
    })

    actions.createPage({
        // It's best practice to use the uri field from WPGraphQL nodes when
        // building
        path: '/recept',
        component: recept,
        context: allWpRecept,
    })
}
const createSavedReceptPage = async ({ actions, graphql, reporter }) => {
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
            allWpRecept(sort: { fields: [date], order: DESC }) {
                nodes {
                    id
                    uri
                    title
                    tags {
                        nodes {
                            name
                        }
                    }
                    singlePaketAfc {
                        tidFormat
                        tid
                        images {
                            localFile {
                                childrenImageSharp {
                                    original {
                                        src
                                    }
                                    fixed(width: 400, height: 400) {
                                        src
                                    }
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

    // Define the template to use
    const savedRecipes = require.resolve(`./src/templates/savedRecipes.tsx`)

    allWpRecept.nodes = allWpRecept.nodes.map(recept => {
        const rating = allRating?.nodes?.find(
            rating => rating.parent?.id === recept.id
        )
        return ({
            ...recept,
            rating: rating ? rating : null,
        })
    })

    actions.createPage({
        // It's best practice to use the uri field from WPGraphQL nodes when
        // building
        path: '/mina-recept',
        component: savedRecipes,
        context: allWpRecept,
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
                    title
                    tips {
                        image {
                            localFile {
                                childImageSharp {
                                    original {
                                        src
                                    }
                                    fixed {
                                        src
                                    }
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
