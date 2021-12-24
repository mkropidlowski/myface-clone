import './Login.css'
import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(email, password)
    }

    return (
        <div className="box">
            <h1>_mySpace</h1>
            <form onSubmit={handleSubmit} className="form-box">
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
                    <button className="btn">Zaloguj</button>
                </span>
                    
                    <p><Link to="/signup" className="signup-btn">Zarejestruj się..</Link></p>
              
                </form>

        </div>
    )
}
