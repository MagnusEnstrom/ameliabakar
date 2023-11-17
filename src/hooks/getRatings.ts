import { collection, getDocs, onSnapshot, query } from 'firebase/firestore'
import { useEffect } from 'react'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { db } from '../lib/firebase/firebase'

type RecipeRating = {
    numRatings: number
    avgRating: number
    id: string
}

export const getRatingsQuerykey = ['ratings']

const getRatings = async () => {
    const recipesRef = await collection(db, 'recipes')
    const recipeRatingDocs = await getDocs(recipesRef)
    const ratings = recipeRatingDocs.docs.map(doc => ({
        ...doc.data(),
        id: doc.id,
    })) as RecipeRating[]

    return ratings
}

const useGetRatings = (id?: string) => {
    const client = useQueryClient()
    useEffect(() => {
        const q = query(collection(db, 'recipes'))

        const unsubscribe = onSnapshot(q, snapshot => {
            snapshot.docChanges().forEach(change => {
                const data = change.doc.data() as Omit<RecipeRating, 'id'>
                const queryData =
                    (client.getQueryData(
                        getRatingsQuerykey
                    ) as RecipeRating[]) || []

                const index = queryData.findIndex(
                    recipe => recipe.id === change.doc.id
                )
                if (!queryData.length) return
                const newRatings = [...queryData]
                newRatings.splice(index, 1, {
                    ...data,
                    id: change.doc.id,
                })

                client.setQueriesData(
                    { queryKey: getRatingsQuerykey },
                    newRatings
                )
            })
        })

        return () => {
            unsubscribe()
        }
    }, [])
    return useQuery({
        queryKey: getRatingsQuerykey,
        queryFn: () => getRatings(),
        select: data => data?.find(rating => rating.id === id),
    })
}

export default useGetRatings
