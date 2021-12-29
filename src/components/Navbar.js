import { Link } from "react-router-dom"
import { useLogout } from "../hooks/useLogout"
import './Navbar.css'
import happy from '../img/happy.png'
import logoutImg from '../img/logout.png'

export default function Navbar() {

    const { logout } = useLogout()


    return (
        <nav className="navbar">
            <div className="logo-bar">
                <span className="title">_mySpace</span>
                <span className="search">
                <input 
                    type="text"
                    className="search-field"
                />
                </span>

            </div>
            <div className="profile-bar">
                <div className="user-container">
                    <img src={happy} className="photo-profile" alt="happy"/>
                    <span className="user-name">Michał</span>
                </div>
                    
                    <img src={logoutImg} className="logout-btn" alt="logout" onClick={logout}/>
                    
            </div>
               
            
        </nav>
    )
}
