// custom typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

// normalize CSS across browsers
import './src/css/normalize.css'

// custom CSS styles
import './src/css/style.css'

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
const vh = window.innerHeight * 0.01
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`)
// We listen to the resize event
window.addEventListener('resize', () => {
    // We execute the same script as before
    const vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
})

import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import React from 'react'
import FirebaseAuthProvider from './src/context/FirebaseAuthContext2';

export const wrapPageElement = ({ element }) => {
    const queryClient = new QueryClient()

    return (
        <FirebaseAuthProvider>
            <QueryClientProvider client={queryClient}>
                {element}
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </FirebaseAuthProvider>
    )
}
