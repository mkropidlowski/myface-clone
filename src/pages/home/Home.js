<<<<<<< HEAD
import Navbar from "../../components/navBar/Navbar";
import Menu from "../../components/menu/Menu";
import Chat from "../../components/chat/Chat";
import "./Home.css";
import NewPostForm from "./components/NewPostForm";
import { useAuthContext } from "../../hooks/useAuthContext";
import Post from "../../components/post/Post";
=======
import Navbar from "../../components/Navbar"
import Chat from "../../components/Chat"
import './Home.css'
import NewPostForm from "./NewPostForm"
import { useAuthContext } from "../../hooks/useAuthContext"
import Post from "../../components/Post"
>>>>>>> beda8fa05c0a419264f644e5ae31fd687973018c

export default function Home() {
    const { user } = useAuthContext();
    return (
        <div>
            <Navbar />
            <NewPostForm uid={user.uid} />
            <div className="container">
                
                <Post />
                <Chat />
            </div>
        </div>
    );
}
