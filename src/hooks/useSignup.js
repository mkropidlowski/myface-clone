import { useState } from 'react'
import { projectAuth } from '../firebase/config'
import { useAuthContext } from './useAuthContext'


export const useSignup = () => {
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const { dispatch } = useAuthContext()

    const signup = async(email, password, name) => {
        setError(null)
        setIsPending(true)


    try {
        // próbda dodania usera
        const res = await projectAuth.createUserWithEmailAndPassword(email,password)

        if(!res) {
            throw new Error('COULD NOT COMPLETE SIGNUP')
        }

        await res.user.updateProfile({displayName: name})

        // dispatch login action 
        dispatch({type: 'LOGIN', payload: res.user})

        setError(null)
        setIsPending(false)

    } catch (err) {
        console.log(err.message)
        setError(err.message)
        setIsPending(false)
    }
    }


    return { error, isPending, signup }

}