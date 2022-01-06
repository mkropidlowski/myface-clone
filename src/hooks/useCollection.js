import { useEffect, useState } from "react"
import { projectFirestore  } from "../firebase/config"



export const useCollection = (collection) => {

    const [data, setData] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        let ref = projectFirestore.collection(collection)

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


    return { document, error } 
    
}
