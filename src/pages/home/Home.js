import Navbar from "../../components/Navbar"
import Menu from "../../components/Menu"
import Chat from "../../components/Chat"
import './Home.css'
import NewPostForm from "./NewPostForm"
import { useAuthContext } from "../../hooks/useAuthContext"
import Post from "../../components/Post"

export default function Home() {

    const { user } = useAuthContext()

    return (
        <div>
            <Navbar />

            <NewPostForm uid={user.uid}/>
            <div className="container">
                <Menu />
                <Post />
                <Chat />
            </div>
                
        </div>
    
    )
}
