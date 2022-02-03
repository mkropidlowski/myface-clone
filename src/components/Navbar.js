import { Link } from "react-router-dom"
import { useLogout } from "../hooks/useLogout"
import './Navbar.css'
import man from '../img/man-2.png'
import logoutImg from '../img/logout.png'
import { useAuthContext } from "../hooks/useAuthContext"



export default function Navbar() {

    const { logout } = useLogout() 
    const { user } = useAuthContext()


    return (
        <nav className="navbar">
            <div className="logo-bar">
                <Link to={'/'}>
                <span className="title">_mySpace</span>
                </Link>
                <span className="search">
                <input 
                    type="text"
                    className="search-field"
                />
                </span>

            </div>
            <div className="profile-bar">
                <Link to={`/userprofile/${user.uid}`}>
                <div className="user-container">
                    <img src={man} className="photo-profile" alt="happy"/>
                    <span className="user-name">{ user.displayName }</span>
                </div>
                </Link> 
                 <Link to={'/'}><img src={logoutImg} className="logout-btn" alt="logout" onClick={logout}/></Link>
                    
            </div>
               
            
        </nav>
    )
}
