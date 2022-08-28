import { graphql, useStaticQuery } from 'gatsby'
import { ImageDataLike } from 'gatsby-plugin-image'

const useGetorders = () => {
    const { allWpBestallning } = useStaticQuery<{
        allWpBestallning: {
            nodes: {
                id: string

                orderAFC: {
                    title: string
                    description: number
                    images: {
                        localFile: {
                            childImageSharp: {
                                gatsbyImageData: ImageDataLike
                            }
                        }
                    }[]
                    pricelist: {
                        name: string
                        description: string
                        price: number
                    }[]
                }
            }[]
        }
    }>(graphql`
        {
            allWpBestallning {
                nodes {
                    id
                    orderAFC {
                        title
                        description
                        images {
                            localFile {
                                childImageSharp {
                                    gatsbyImageData
                                }
                            }
                        }
                        pricelist {
                            name
                            description
                            price
                        }
                    }
                }
            }
        }
    `)

    return allWpBestallning.nodes
}

export default useGetorders
