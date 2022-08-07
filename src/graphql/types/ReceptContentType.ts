export type ReceptContent = {
    id: string
    uri: string
    title: string
    content: string
    rating?: {
        avgRating: number
        numRatings: number
    } | null
    tags: {
        nodes: {
            name: 'string'
        }[]
    }
    singlePaketAfc: {
        tips: string
        tidFormat: 'min' | 'h'
        tid: number
        svarighetsgrad: 'Lätt' | 'Medel' | 'Svår'
        saHarGorDu: string
        kortBeskrivning: string
        images: {
            localFile: {
                childrenImageSharp: {
                    original: {
                        src: string
                    }
                    fixed: {
                        src: string
                    }
                }[]
            }
        }[]
    }
}

export type ReceptPageQuery = {
    nodes: {
        id: string
        uri: string
        title: string
        date: string
        rating?: {
            avgRating: number
            numRatings: number
        } | null
        tags: {
            nodes: {
                name: string
            }[]
        }
        singlePaketAfc: {
            tidFormat: 'min' | 'h'
            tid: number
            svarighetsgrad: 'Lätt' | 'Medel' | 'Svår'
            images: {
                localFile: {
                    childrenImageSharp: {
                        original: {
                            src: string
                        }
                        fixed: {
                            src: string
                        }
                    }[]
                }
            }[]
        }
    }[]
}

export type TipsPageQuery = {
    nodes: {
        id: string
        title: string
        content: string
        tips: {
            image: {
                localFile: {
                    childImageSharp: {
                        original: {
                            src: string
                        }
                        fixed: {
                            src: string
                        }
                    }
                }
            }
        }
    }[]
}

export type LocalSearchRecepies = {
    localSearchRecepies: {
        index: string
        store: {
            id: string
            slug: string
        }
    }
}
