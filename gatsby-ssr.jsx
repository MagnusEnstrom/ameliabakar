import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import React from 'react'
import FirebaseAuthProvider from './src/context/FirebaseAuthContext'

const queryClient = new QueryClient()
export const wrapPageElement = ({ element }) => {
    return (
        <FirebaseAuthProvider>
            <QueryClientProvider client={queryClient}>
                {element}
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </FirebaseAuthProvider>
    )
}
