import { graphql, useStaticQuery } from 'gatsby'
import { ImageDataLike } from 'gatsby-plugin-image'

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
        return {
            ...recept,
            rating: rating ? rating : null,
        }
    })

    return recepieWithRating
}

export default useGetRecepies