import { useState, useEffect } from 'react'
import './NewPostForm.css'
import { useFirestore } from '../../hooks/useFirestore'
import { useAuthContext } from '../../hooks/useAuthContext'
import { useCollection } from '../../hooks/useCollection'

export default function NewPostForm({ uid }) {

    const { user } = useAuthContext()
    const [postText, setPostText] = useState('')
    const { addDocument, response } = useFirestore('post')
  
    const { userdata } = useCollection(
      'users', ['displayName', '==', user.displayName]
    ) 

    let actuallSurname = []
    userdata && userdata.forEach(data => {
      actuallSurname = data.surname
    })
   
   

    const handleSubmit = (e) => {
        e.preventDefault()
        addDocument({
          username: user.displayName,
          actuallSurname,
          uid, 
          postText,
          like_count: 0,
          comment: 0,
          message: []
         
        })
      }
    
      // reset the form fields
      useEffect(() => {
      
        if (response.success) {
          setPostText('')
         
        }
      }, [response.success])
    

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
