import { useMutation } from 'react-query'
import addToMailchimp from 'gatsby-plugin-mailchimp'

const subscribe = async (email: string) => {
    return addToMailchimp(email)
}

const useSubscribe = () => {
    return useMutation((email: string) => subscribe(email))
}

export default useSubscribe
