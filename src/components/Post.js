import './Post.css'
import happy from '../img/happy.png'
import likeIcon from '../img/like.png'
import commentIcon from '../img/comment.png'
import { useEffect, useState } from "react"
import { projectFirestore  } from "../firebase/config"


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
                        {/* <div className="photo">
                            <img src={postImg} alt="post" className="post-photo-size"/>
                        </div> */}
                    <div className="like-section">
                        <p><img src={likeIcon} alt="likes" /> {post.like_count}</p> <p>{post.comment} komentarzy</p>
                    </div>
                        
                    </div>
                    <div className="like-comment-section">
                        <p><img src={likeIcon} alt="likes" /> Lubię to!</p>
                        <p><img src={commentIcon} alt="likes" /> Komentarz</p>
                    </div>
                    <>
                        <form className="comment-section">
                            <label><img src={happy} alt="profile" /></label>
                                <label>
                                <input 
                                    type="text"
                                    className="comment-value"
                                    placeholder="Napisz komentarz.."
                                />
                                </label>
                        </form>
                       
                    </>
                </div> 
           ))} 

        </div>
                
    )
}
