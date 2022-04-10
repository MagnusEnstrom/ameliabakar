import { doc, setDoc } from 'firebase/firestore/lite'
import { useMutation } from 'react-query'
import { useFirebaseAuthContext } from '../context/FirebaseAuthContext'
import { db } from '../lib/firebase/firebase'

const subscribe = async (email: string, uid: string) => {
    const response = await setDoc(doc(db, 'emails', uid), {
        email: email,
    })

    return response
}

const useSubscribe = () => {
    const { user } = useFirebaseAuthContext()
    return useMutation((email: string) => subscribe(email, user?.uid))
}

export default useSubscribe
