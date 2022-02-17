import './UserProfile.css'

import Navbar from './Navbar'
import NewPostForm from '../pages/home/NewPostForm'
import { PostComments }from './PostComments'
import { useAuthContext } from '../hooks/useAuthContext'
import { useEffect, useState } from "react"
import { projectFirestore  } from "../firebase/config"

import man from '../img/man-2.png'
import happy from '../img/happy.png'
import likeIcon from '../img/like.png'
import commentIcon from '../img/comment.png'
import { EditProfile } from './EditProfile'
import UserAbout from './UserAbout'
import { useCollection } from '../hooks/useCollection'


export default function UserProfile() {

    const { user } = useAuthContext()
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [activePopup, setActivePopup] = useState(false)
    const { userdata } = useCollection(
        'users', ['displayName', '==', user.displayName]
    ) 


    
    useEffect(() => {
        let ref = projectFirestore.collection('post').where("uid", '==', user.uid)

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

    
    const handleClick = () => {
        setActivePopup(prev => !prev)
    }

    return (
        <>
            <Navbar />
        
            <div className='container-profile'>
                <div className='header-profile'>
                    <div className="user-info">
                    <img src={man} className="photo" alt="happy"/>

                    {userdata && userdata.map(user => (
                        <span key={user.id} className="user">{ user.displayName } {user.surname }</span>       
                    ))}

                    </div>
                    <div className="about-mobile-version">
                        <UserAbout />
                    </div>
                    <div className='edit-profile-btn'>
                        <button className="btn-edit" onClick={handleClick}>Edytuj profil</button>
                    </div>

                </div>

                <div className="popup-container">
                    <EditProfile activePopup={activePopup} setActivePopup={setActivePopup}/>
                </div>
               

                <div className='profile-content'>     
    
                    <div className='profile-post'>

                {error && <p>{error}</p>}
            <div className="user-board-container">
                <div className="user-profile-style">
                    <NewPostForm uid={user.uid}/>
                </div>
                
                {data && data.map((post) => (
                        
                <div className="post" key={post.id}>
                    <div className="author-info">
                        <div className="header">
                        <span><img src={happy} alt="profile" /><span className="profile-name">{post.username} {post.actuallSurname}</span></span>
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

                    </div>
                </div>
            </div>
            
        </>
    )
}
