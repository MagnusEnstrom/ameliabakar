import { doc, setDoc } from 'firebase/firestore/lite'
import { useMutation } from 'react-query'
import { useFirebaseAuthContext } from '../context/FirebaseAuthContext'
import { db } from '../lib/firebase/firebase'

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
    return useMutation((variables: AddRating) =>
        addRating(variables, user?.uid)
    )
}

export default useAddRating
