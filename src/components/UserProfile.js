
import Navbar from './Navbar'
import Post from './Post'
import './UserProfile.css'
import man from '../img/man-2.png'
import { useAuthContext } from '../hooks/useAuthContext'
import { useCollection } from '../hooks/useCollection'


export default function UserProfile() {

     
    const { user } = useAuthContext()
    const { data, error } = useCollection(
        'post', ["uid", "==", user.uid], ['createdAt', 'desc']
    )
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
                        <button className="btn-edit">Edytuj profil</button>
                    </div>
                </div>

                <div className='profile-content'>     
                    <div className='about'>
                        <h2>Prezentacja</h2>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                    </div>        
                    <div className='profile-post'>
                        {data && <Post newPost={data}/>}
                    </div>
                </div>
            </div>
            
        </>
    )
}
