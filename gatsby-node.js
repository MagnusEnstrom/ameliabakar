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
    const { actions, graphql, reporter} = gatsbyUtilities

    await createAboutMePage(gatsbyUtilities);
    await createRecipeDetailPage(gatsbyUtilities);
    await createHomePage(gatsbyUtilities);
    await createReceptPage(gatsbyUtilities);
    await createTipsPage(gatsbyUtilities);
  
}

const createRecipeDetailPage = async ({ actions, graphql, reporter}) => {
    const result = await graphql(`
    {
        allWpRecept(sort: { fields: [date] order: DESC}) {
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
              tooltip
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
    reporter.error("There was an error fetching posts", result.errors)
  }
  
  const { allWpRecept } = result.data
  
  // Define the template to use
  const receptPost = require.resolve(`./src/templates/receptPost.tsx`)
  
  if (allWpRecept.nodes.length) {
    allWpRecept.nodes.map(recept => {
      actions.createPage({
        // It's best practice to use the uri field from WPGraphQL nodes when
        // building
        path: recept.uri,
        component: receptPost,
        context: recept,
      })
    })
  }
} 

const createHomePage = async ({ actions, graphql, reporter}) => {
    const result = await graphql(`
    {
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
                tooltip
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
        reporter.error("There was an error fetching posts", result.errors)
    }
  
    const { allWpRecept } = result.data
  
    // Define the template to use
    const home = require.resolve(`./src/templates/home.tsx`)
  
    actions.createPage({
        path: '/',
        component: home,
        context: allWpRecept,
    })
}

const createReceptPage = async ({ actions, graphql, reporter}) => {
    const result = await graphql(`
    {
        allWpRecept(sort: { fields: [date] order: DESC}) {
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
        reporter.error("There was an error fetching posts", result.errors)
    }
  
    const { allWpRecept } = result.data
  
    // Define the template to use
    const recept = require.resolve(`./src/templates/recept.tsx`)

    actions.createPage({
        // It's best practice to use the uri field from WPGraphQL nodes when
        // building
        path: '/recept',
        component: recept,
        context: allWpRecept,
    })
}
const createAboutMePage = async ({ actions, graphql, reporter}) => {
  
    // Define the template to use
    const aboutMe = require.resolve(`./src/templates/aboutMe.tsx`)

    actions.createPage({
        path: '/om-mig',
        component: aboutMe,
        context: {},
    })
}

const createTipsPage = async ({ actions, graphql, reporter}) => {

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
        reporter.error("There was an error fetching posts", result.errors)
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