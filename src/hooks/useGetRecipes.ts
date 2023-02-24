import { graphql, useStaticQuery } from 'gatsby'
import { ImageDataLike } from 'gatsby-plugin-image'

const isFast = (recipe: ReturnType<typeof useGetRecepies>[0]) => {
    if (recipe.singlePaketAfc.tidFormat === 'min') {
        return recipe.singlePaketAfc.tid <= 60
    }

    if (recipe.singlePaketAfc.tidFormat === 'h') {
        return recipe.singlePaketAfc.tid <= 1
    }

    return false
}

const useGetRecepies = () => {
    const { allWpRecept, allRating } = useStaticQuery<{
        allRating: {
            nodes: {
                id: string
                avgRating: number
                numRatings: number
                parent: {
                    id: string
                }
            }[]
        }
        allWpRecept: {
            nodes: {
                id: string
                uri: string
                title: string
                tags: {
                    nodes: {
                        name: string
                    }[]
                }
                singlePaketAfc: {
                    tidFormat: string
                    tid: number
                    images: {
                        localFile: {
                            childImageSharp: {
                                gatsbyImageData: ImageDataLike
                            }
                        }
                    }[]
                }
            }[]
        }
    }>(graphql`
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

    const allReceptSingleImage = allWpRecept.nodes.map(recept => {
        recept.singlePaketAfc.images = [recept.singlePaketAfc.images[0]]
        return recept
    })

    const recepieWithRating = allReceptSingleImage.map(recept => {
        const rating = allRating?.nodes?.find(
            rating => rating.parent?.id === recept.id
        )

        if (isFast(recept)) {
            recept.tags.nodes.push({ name: 'fast' })
        }
        return {
            ...recept,
            rating: rating ? rating : null,
        }
    })

    return recepieWithRating
}

export default useGetRecepies
