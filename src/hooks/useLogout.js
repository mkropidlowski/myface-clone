import { useState, useEffect } from 'react'
import { projectAuth, projectFirestore } from '../firebase/config'
import { useAuthContext } from './useAuthContext'

export const useLogout = () => {
    const [ isCanceled, setIsCanceled] = useState(false)
    const [ error, setError ] = useState(null)
    const [ isPending, setIsPending ] = useState(false)
    const { dispatch } = useAuthContext()

    const logout = async () => {
        setError(null)
        setIsPending(true)

        try {
            const { uid } = projectAuth.currentUser
            await projectFirestore.collection('users').doc(uid).update({ online: false })

            await projectAuth.signOut()

           
            dispatch({ type: 'LOGOUT'})
            
            if(!isCanceled) {
                setIsPending(false) 
                setError(null)    
            }
        } catch(err) {
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
    return { logout, error, isPending}


}