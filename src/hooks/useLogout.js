import { useState, useEffect } from 'react'
import { projectAuth } from '../firebase/config'
import { useAuthContext } from './useAuthContext'

export const useLogout = () => {
    const [ isCanceled, setIsCanceled] = useState(false)
    const [ error, setError ] = useState(null)
    const [ isPending, setIsPending ] = useState(null)
    const { dispatch } = useAuthContext()

    const logout = async () => {
        setError(null)
        setIsPending(true)

        try {

            await projectAuth.signOut()

            dispatch({ type: 'LOGOUT'})
            
            if(!isCanceled) {
                setIsPending(null) 
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