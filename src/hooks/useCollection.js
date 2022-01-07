import { useEffect, useState, useRef } from "react"
import { projectFirestore  } from "../firebase/config"
import { useAuthContext } from "./useAuthContext"



export const useCollection = (collection, _orderBy) => {

    const { user } = useAuthContext()
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)

   
    const orderBy = useRef(_orderBy).current

    useEffect(() => {
        let ref = projectFirestore.collection(collection)


        if (orderBy) {
            ref = ref.orderBy(...orderBy)
        }

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

    }, [collection, orderBy])


    return { data, error } 
    
}
