import Navbar from "../../components/Navbar"
import Menu from "../../components/Menu"
import Board from "../../components/Board"
import Chat from "../../components/Chat"
import './Home.css'
import NewPostForm from "./NewPostForm"
import { useAuthContext } from "../../hooks/useAuthContext"

export default function Home() {

    const { user } = useAuthContext()

    return (
        <div>
            <Navbar />
            <NewPostForm />
            <div className="container">
                <Menu />
                <Board uid={user.id}/>
                <Chat />
            </div>
                
        </div>
    
    )
}
