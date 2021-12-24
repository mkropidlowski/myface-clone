import Navbar from "../../components/Navbar"
import Menu from "../../components/Menu"
import Board from "../../components/Board"
import Chat from "../../components/Chat"
import './Home.css'

export default function Home() {
    return (
        <div>
            <Navbar />
            <div className="container">
                <Menu />
                <Board />
                <Chat />
            </div>
                
        </div>
    
    )
}
