import Navbar from "../../components/navBar/Navbar";
import Menu from "../../components/menu/Menu";
import Chat from "../../components/chat/Chat";
import "./Home.css";
import NewPostForm from "./components/NewPostForm";
import { useAuthContext } from "../../hooks/useAuthContext";
import Post from "../../components/post/Post";

export default function Home() {
    const { user } = useAuthContext();
    return (
        <div>
            <Navbar />
            <NewPostForm uid={user.uid} />
            <div className="container">
                <Menu />
                <Post />
                <Chat />
            </div>
        </div>
    );
}
