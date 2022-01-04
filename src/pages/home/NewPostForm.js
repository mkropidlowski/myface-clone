import { useState, useEffect } from 'react'
import './NewPostForm.css'
import { useFirestore } from '../../hooks/useFirestore'


export default function NewPostForm({ uid }) {


    const [postText, setPostText] = useState('')
    const { addDocument, response } = useFirestore('post')

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log({
            uid,
            postText,
    
        })

    }

    return (
        <form onSubmit={handleSubmit} className="new-post-form">
            <input 
                type="text"
                className="input-post-text"
                placeholder="O czym teraz myślisz?"
                onChange={(e) => setPostText(e.target.value)}
                value={postText}
            />
            <button className="add-post-btn"> + </button>
        </form>
    )
}
