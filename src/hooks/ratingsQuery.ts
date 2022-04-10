import { collection, getDocs } from 'firebase/firestore/lite'
import { useQuery } from 'react-query'
import { db } from '../lib/firebase/firebase'

const getRatings = async () => {
    const ratingsCol = collection(db, 'ratings')
    const ratingsSnapshot = await getDocs(ratingsCol)
    const ratingsList = ratingsSnapshot.docs.map(doc => doc.data())
    return ratingsList
}

const useGetRatings = () => {
    return useQuery('ratings', () => {
        return getRatings()
    })
}

export { useGetRatings }
