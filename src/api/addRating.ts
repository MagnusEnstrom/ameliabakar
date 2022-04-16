import { doc, setDoc } from 'firebase/firestore'
import { useMutation, useQueryClient } from 'react-query'
import { useFirebaseAuthContext } from '../context/FirebaseAuthContext2'
import { db } from '../lib/firebase/firebase'
import { getRatingsQuerykey } from './getRatings'
import { getRatingQuerykeyFactory } from './getRating'

type AddRating = {
    rating: number
    recipeId: string
}
const addRating = async (variables: AddRating, uid: string) => {
    const response = await setDoc(
        doc(db, 'recipes', variables.recipeId, 'ratings', uid),
        {
            rating: variables.rating,
        }
    )

    return response
}

const useAddRating = () => {
    const { user } = useFirebaseAuthContext()
    const client = useQueryClient()
    return useMutation(
        (variables: AddRating) => addRating(variables, user?.uid),
        {
            onSuccess: (data, variables) => {
                client.invalidateQueries(getRatingsQuerykey)
                client.invalidateQueries(getRatingQuerykeyFactory.all)
            },
        }
    )
}

export default useAddRating
