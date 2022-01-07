import './Post.css'
import happy from '../img/happy.png'
import postImg from '../img/post.JPG'
import likeIcon from '../img/like.png'
import commentIcon from '../img/comment.png'
import { useAuthContext } from '../hooks/useAuthContext'


export default function Post({newPost}) {

    const { user } = useAuthContext()
    return (
        <>
           {newPost.map((post) => (
                        
                <div className="post" key={post.id}>
                    <div className="author-info">
                        <div className="header">
                        <span><img src={happy} alt="profile" /><span className="profile-name">{post.username}</span></span>
                        <span className="settings-btn">...</span>
                        </div>
                        
                        <p>16:00</p>
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

        </>
        
    )
}
