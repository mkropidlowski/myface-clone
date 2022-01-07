import { useEffect, useState } from "react"
import { projectFirestore  } from "../firebase/config"
import { useAuthContext } from "./useAuthContext"



export const useCollection = (collection) => {

    const { user } = useAuthContext()
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        let ref = projectFirestore.collection(collection).orderBy('createdAt', 'desc')

        const unsub = ref.onSnapshot((snapshot) => {
            let result = []
            snapshot.docs.forEach(doc => {
                result.push({ ...doc.data(), id: doc.id})
            })
        
        
            setData(result)
            setError(null)
        }, (error) => {
            setError('Brak danych.')
        })


        return () => unsub()

    }, [collection])


    return { data, error } 
    
}
