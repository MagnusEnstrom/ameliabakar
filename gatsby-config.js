require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
  })
/**
 * 👋 Hey there!
 * This file is the starting point for your new WordPress/Gatsby site! 🚀
 * For more information about what this file is and does, see
 * https://www.gatsbyjs.com/docs/gatsby-config/
 *
 */

module.exports = {
  /**
   * Adding plugins to this array adds them to your Gatsby site.
   *
   * Gatsby has a rich ecosystem of plugins.
   * If you need any more you can search here: https://www.gatsbyjs.com/plugins/
   */
  plugins: [
    {
        resolve: require.resolve(`./source-plugin`),
        options: {
            credentials: {
                apiKey: process.env.API_KEY,
                authDomain: process.env.AUTH_DOMAIN,
                projectId: process.env.PROJECT_ID,
                storageBucket: process.env.STORAGE_BUCKET,
                messagingSenderId: process.env.MESSAGE_SENDER_ID,
                appId: process.env.APP_ID,
            }
        }
    },
    
    {
        resolve: `gatsby-plugin-google-fonts`,
        options: {
            fonts: [
                `Lusitana\:700`,
                `Nunito\:300,400,600,700,800` // you can also specify font weights and styles
            ],
            display: 'swap'
        }
    },
    {
        resolve: 'gatsby-plugin-react-svg',
        options: {
            rule: {
                include: /assets/
            }
        }
    },
    {
      /**
       * First up is the WordPress source plugin that connects Gatsby
       * to your WordPress site.
       *
       * visit the plugin docs to learn more
       * https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-source-wordpress/README.md
       *
       */
      resolve: `gatsby-source-wordpress`,
      options: {
        // the only required plugin option for WordPress is the GraphQL url.
        url:
          process.env.WPGRAPHQL_URL ||
          `http://localhost:8000/graphql`,
        useACF: true,
        schema: {
            timeout: 9000000
        }
      },
    },

    /**
     * We need this plugin so that it adds the "File.publicURL" to our site
     * It will allow us to access static url's for assets like PDF's
     *
     * See https://www.gatsbyjs.org/packages/gatsby-source-filesystem/ for more info
     */
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/content/assets`,
      },
    },

    /**
     * The following two plugins are required if you want to use Gatsby image
     * See https://www.gatsbyjs.com/docs/gatsby-image/#setting-up-gatsby-image
     * if you're curious about it.
     */
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      // See https://www.gatsbyjs.com/plugins/gatsby-plugin-manifest/?=gatsby-plugin-manifest
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter WordPress Blog`,
        short_name: `GatsbyJS & WP`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`,
      },
    },

    // See https://www.gatsbyjs.com/plugins/gatsby-plugin-react-helmet/?=gatsby-plugin-react-helmet
    `gatsby-plugin-react-helmet`,

    /**
     * this (optional) plugin enables Progressive Web App + Offline functionality
     * To learn more, visit: https://gatsby.dev/offline
     */
    // `gatsby-plugin-offline`,

    {
        resolve: 'gatsby-plugin-local-search',
        options: {
          // A unique name for the search index. This should be descriptive of
          // what the index contains. This is required.
          name: 'recepies',
  
          // Set the search engine to create the index. This is required.
          // The following engines are supported: flexsearch, lunr
          engine: 'flexsearch',
  
          // Provide options to the engine. This is optional and only recommended
          // for advanced users.
          //
          // Note: Only the flexsearch engine supports options.
          engineOptions: {
            tokenize: 'full'
          },
  
          // GraphQL query used to fetch all data for the search index. This is
          // required.
          query: `
            {
                allWpRecept {
                    nodes {
                      id
                      link
                      slug
                      title
                      content
                      categories {
                        nodes {
                          name
                        }
                      }
                      singlePaketAfc {
                        svarighetsgrad
                        kortBeskrivning
                      }
                    }
                }
            }
          `,
  
          // Field used as the reference value for each document.
          // Default: 'id'.
          ref: 'id',
  
          // List of keys to index. The values of the keys are taken from the
          // normalizer function below.
          // Default: all fields
          index: ['id', 'slug', 'title', 'kortBeskrivning', 'svarighetsgrad'],
  
          // List of keys to store and make available in your UI. The values of
          // the keys are taken from the normalizer function below.
          // Default: all fields
          store: ['id', 'slug'],
  
          // Function used to map the result from the GraphQL query. This should
          // return an array of items to index in the form of flat objects
          // containing properties to index. The objects must contain the `ref`
          // field above (default: 'id'). This is required.
          normalizer: ({ data }) =>
            data.allWpRecept.nodes.map((node) => ({
              id: node.id,
              link: node.link,
              slug: node.slug,
              title: node.title,
              content: node.content,
              svarighetsgrad: node.singlePaketAfc.svarighetsgrad,
              kortBeskrivning: node.singlePaketAfc.kortBeskrivning,
            })),
        },
    },
    {
        resolve: `gatsby-source-instagram-all`,
        options: {
          access_token: process.env.ACCESS_TOKEN,
        }
   },
  ],
}
