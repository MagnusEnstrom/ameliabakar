import { useMutation } from '@tanstack/react-query'
import addToMailchimp from 'gatsby-plugin-mailchimp'

const subscribe = async (email: string) => {
    return addToMailchimp(email)
}

const useSubscribe = () => {
    return useMutation({
        mutationFn: (email: string) => subscribe(email),
    })
}

export default useSubscribe
