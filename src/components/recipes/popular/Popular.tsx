import styled from '@emotion/styled'
import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import ResipeCard from '../../recipeCard/ResipeCard'

const RecipeGrid = styled.div({
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '10px',
})

type PopularQuery = {
    allWpRecept: {
        nodes: {
            id: string,
            uri: string,
            title:string,
            singlePaketAfc: {
                tidFormat: string,
                tid: number,
                images: 
                    {
                        localFile: {
                            childrenImageSharp: [
                                {
                                    original: {
                                        src: string
                                    },
                                    fixed: {
                                        src: string
                                    }
                                }
                            ]
                        }
                    }[]
            }
        }[]
    }
}

const Popular = ({...rest}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
    const data: PopularQuery = useStaticQuery(graphql`{
        allWpRecept(sort: { fields: [date] order: DESC}) {
          nodes {
            id
            uri
            title
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
      }`)
    
    
    const recipies = data.allWpRecept.nodes.slice(0, 4);

    return (
        <RecipeGrid {...rest}>
            {recipies.map(recipe => {
                return <ResipeCard uri={recipe.uri} key={recipe.id} id={recipe.id} rating={4.2} tid={recipe.singlePaketAfc.tid} tidFormat={recipe.singlePaketAfc.tidFormat} title={recipe.title} url={recipe.singlePaketAfc.images?.[0]?.localFile.childrenImageSharp?.[0]?.original.src} />
                
            })}
        </RecipeGrid>
    )
}

export default Popular
