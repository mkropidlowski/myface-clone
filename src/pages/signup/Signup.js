import './Signup.css'
import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useSignup } from '../../hooks/useSignup'

export default function Signup() {
    
    const [name, setName] = useState('')
    // const [surname, setSurname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { signup, isPending, error } = useSignup()
    

    const handleSubmit = (e) => {
        e.preventDefault()
        signup(email, password, name)
    }

    return (
        <div className="box">
            <h1>_mySpace</h1>
            <form onSubmit={handleSubmit} className="form-box">
                <label>
                    <input 
                        type="text"
                        onChange={(e) => setName(e.target.value) }
                        value={name}
                        required
                        placeholder="Imię"
                    />
                </label>
                {/* <label>
                    <input 
                        type="text"
                        onChange={(e) => setSurname(e.target.value) }
                        value={surname}
                        required
                        placeholder="Nazwisko"
                    />
                </label> */}
                <label>
                    <input 
                        type="text"
                        onChange={(e) => setEmail(e.target.value) }
                        value={email}
                        required
                        placeholder="E-mail"
                    />
                </label>
                <label>
                    <input 
                        type="password"
                        onChange={(e) => setPassword(e.target.value) }
                        value={password}
                        required
                        placeholder="Hasło"
                    />
                </label>
                
                <span className="btn-right-pos">
                    {!isPending && <button className="btn-register">Załóż konto</button> }
                    {isPending && <button className="btn-register" disabled>Trwa rejestracja...</button>}
                    { error && <p>{error}</p>}  
                </span>
                 
                    <p><Link to="/" className="return-btn">Powrót do strony logowania..</Link></p>
                
                </form>
        </div>
    )
}

    

