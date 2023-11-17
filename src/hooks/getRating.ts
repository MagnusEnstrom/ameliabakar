import { doc, getDoc } from 'firebase/firestore'
import { useMutation, useQueries, useQuery } from '@tanstack/react-query'
import { useFirebaseAuthContext } from '../context/FirebaseAuthContext'
import { db } from '../lib/firebase/firebase'

type RecipeRating =
    | {
          numRatings: number
          avgRating: number
      }
    | undefined
type UserRating =
    | {
          rating: number
      }
    | undefined

export const getRatingQuerykeyFactory = {
    all: ['recipe'],
    id: (recipeId?: string, userId?: string) => [
        ...getRatingQuerykeyFactory.all,
        recipeId,
        userId,
    ],
}

const getRating = async (recipeId: string, uid: string) => {
    const recipeRatingDoc = await getDoc(doc(db, 'recipes', recipeId))
    const userRatingDoc = await getDoc(
        doc(db, 'recipes', recipeId, 'ratings', uid)
    )
    const recipeRating = recipeRatingDoc?.data() as RecipeRating
    const userRating = userRatingDoc?.data() as UserRating
    const data = {
        numRatings: recipeRating?.numRatings,
        avgRating: recipeRating?.avgRating,
        userRating: userRating?.rating,
    }
    return data
}

const useGetRating = (recipeId: string) => {
    const { user } = useFirebaseAuthContext()

    return useQuery({
        queryKey: getRatingQuerykeyFactory.id(recipeId, user?.uid),
        queryFn: () => getRating(recipeId, user?.uid),
        enabled: !!user?.uid,
    })
}

export default useGetRating
