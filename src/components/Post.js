import './Post.css'
import happy from '../img/happy.png'
import likeIcon from '../img/like.png'
import commentIcon from '../img/comment.png'
import { useEffect, useState } from "react"
import { projectFirestore  } from "../firebase/config"
import { PostComments } from "./PostComments"


export default function Post() {
     
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
   
    useEffect(() => {
        let ref = projectFirestore.collection('post').orderBy('createdAt', 'desc')


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

    }, [])


    return (
         <div className="board-container">
            {error && <p>{error}</p>}
           {data && data.map((post) => (
                        
                      
                <div className="post" key={post.id}>
                    <div className="author-info">
                        <div className="header">
                        <span><img src={happy} alt="profile" /><span className="profile-name">{post.username} {post.actuallSurname} </span></span>
                        <span className="settings-btn">...</span>
                        </div>
                        
                    </div>
                    
                     <div className="post-data">
                        <p className="post-title">{post.postText}</p>
                   
                    <div className="like-section">
                        <p><img src={likeIcon} alt="likes" /> {post.like_count}</p> <p>{post.message.length} komentarzy</p>
                    </div>
                        
                    </div>
                   
                    <div className="comment-section-post">
                      
                           {post.message?.map((list, index) => (
                            <div className="comment-container" key={index}>
                            <p className="comment-username">{list.comment_username}: </p>
                            <p className="comment-text">{list.comment}</p>
                           </div>
                        
                         ))}
                 
                           
                       
                    </div>
                    <div>
                       <PostComments postKey={post.id} document={post.message}/> 
                    </div>
                </div> 
           ))} 

        </div>
                
    )
}
