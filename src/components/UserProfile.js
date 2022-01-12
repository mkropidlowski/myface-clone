import './UserProfile.css'

import Navbar from './Navbar'
import NewPostForm from '../pages/home/NewPostForm'

import { useAuthContext } from '../hooks/useAuthContext'
import { useEffect, useState } from "react"
import { projectFirestore  } from "../firebase/config"

import man from '../img/man-2.png'
import happy from '../img/happy.png'
import likeIcon from '../img/like.png'
import commentIcon from '../img/comment.png'
import { EditProfile } from './EditProfile'
import UserAbout from './UserAbout'

export default function UserProfile() {

    const { user } = useAuthContext()
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [activePopup, setActivePopup] = useState(false)

    console.log(user)

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
                    <span className="user">{ user.displayName }</span>
                    </div>
                    <div className='edit-profile-btn'>
                        <button className="btn-edit" onClick={handleClick}>Edytuj profil</button>
                    </div>

                </div>

                <div className="popup-container">
                    <EditProfile activePopup={activePopup} setActivePopup={setActivePopup}/>
                </div>
               

                <div className='profile-content'>     
                    <UserAbout />

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
                        <span><img src={happy} alt="profile" /><span className="profile-name">{post.username}</span></span>
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

                    </div>
                </div>
            </div>
            
        </>
    )
}
