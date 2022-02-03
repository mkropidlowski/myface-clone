import { useState, useEffect } from 'react'
import { projectFirestore } from '../firebase/config'
import { useAuthContext } from './useAuthContext'


export const useProfileUpdate = () => {
    const [ isCanceled, setIsCanceled] = useState(false)
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const { user } = useAuthContext()
    

    const updateProfile = async(home, hobby, school, age) => {
        setError(null)
        setIsPending(true)


    try {
      
        await projectFirestore.collection('users').doc(user.uid).update({ 
            user_id: user.uid,
            online: true,
            displayName: user.displayName,
            home,
            hobby,
            school,
            age
          })

     
        if(!isCanceled) {
            setIsPending(false) 
            setError(null)    
        }

    } catch (err) {
        if(!isCanceled){
            setError(err.message)
            isPending(false)    
        }
    }
    }
    useEffect(() => {
        return () => {
            setIsCanceled(true)
        
        }
    }, [])


    return { error, isPending, updateProfile }

}