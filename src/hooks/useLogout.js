import { useState } from 'react'
import { projectAuth } from '../firebase/config'
import { useAuthContext } from './useAuthContext'

export const useLogout = () => {
    const [ error, setError ] = useState(null)
    const [ isPending, setIsPending ] = useState(null)
    const { dispatch } = useAuthContext()

    const logout = async () => {
        setError(null)
        setIsPending(true)

        try {

            await projectAuth.signOut()

            dispatch({ type: 'LOGOUT'})

            setIsPending(null) 
            setError(null)

        } catch(err) {
            setError(err.message)
            isPending(false)
        }
    }

    return { logout, error, isPending}


}