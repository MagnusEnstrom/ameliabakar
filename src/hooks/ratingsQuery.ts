import { collection, getDocs } from 'firebase/firestore'
import { useQuery } from '@tanstack/react-query'
import { db } from '../lib/firebase/firebase'

const getRatings = async () => {
    const ratingsCol = collection(db, 'ratings')
    const ratingsSnapshot = await getDocs(ratingsCol)
    const ratingsList = ratingsSnapshot.docs.map(doc => doc.data())
    return ratingsList
}

const useGetRatings = () => {
    return useQuery({
        queryKey: ['ratings'],
        queryFn: () => {
            return getRatings()
        },
    })
}

export { useGetRatings }
