/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */
// You can delete this file if you're not using it

/**
 * You can uncomment the following line to verify that
 * your plugin is being loaded in your site.
 *
 * See: https://www.gatsbyjs.com/docs/creating-a-local-plugin/#developing-a-local-plugin-that-is-outside-your-project
 */

const { initializeApp } = require('firebase/app')
const {
    getFirestore,
    getDocs,
    doc,
    collection,
} = require('firebase/firestore')

exports.onPreInit = () =>
    console.log(
        'Loaded gatsby-starter-plugin ---_**_*_**__**___*_*_**_*_*__*_****__**_*__*_*_*_*_*'
    )

// constants for your GraphQL Post and Author types
const RATING_NODE_TYPE = `Rating`

exports.sourceNodes = async (
    { actions, createContentDigest, createNodeId, getNodesByType },
    { credentials }
) => {
    // Your web app's Firebase configuration
    const firebaseConfig = credentials

    // Initialize Firebase
    const app = initializeApp(firebaseConfig)
    const db = getFirestore(app)

    const { createNode } = actions

    const recipesRef = await collection(db, 'recipes')
    const recipeRatingDocs = await getDocs(recipesRef)

    // loop through data and create Gatsby nodes
    recipeRatingDocs.docs.forEach(ratingDoc => {
        const recipeRating = ratingDoc.data()
        createNode({
            ...recipeRating,
            id: createNodeId(`${ratingDoc.id}`),
            parent: ratingDoc.id,
            children: [],
            internal: {
                type: RATING_NODE_TYPE,
                content: JSON.stringify(recipeRating),
                contentDigest: createContentDigest(recipeRating),
            },
        })
    })

    return
}
