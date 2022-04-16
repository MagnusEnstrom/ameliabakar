import { signInAnonymously, User } from 'firebase/auth'
import React, {
    createContext,
    FC,
    useContext,
    useEffect,
    useState,
} from 'react'
import { auth } from '../lib/firebase/firebase'
type ContextState = { user: User }

const FirebaseAuthContext = createContext<ContextState | undefined>(undefined)

const FirebaseAuthProvider: FC = ({ children }) => {
    const [user, setUser] = useState<User>(null)
    const value = { user }

    useEffect(() => {
        signInAnonymously(auth)
            .then(response => setUser(response.user))
            .catch(err => {
                // ignore
            })
        const unsubscribe = auth.onAuthStateChanged(setUser)
        return unsubscribe
    }, [])

    return (
        <FirebaseAuthContext.Provider value={value}>
            {children}
        </FirebaseAuthContext.Provider>
    )
}

const useFirebaseAuthContext = () => useContext(FirebaseAuthContext)

export { useFirebaseAuthContext, FirebaseAuthProvider as default }
