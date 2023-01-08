import Navbar from "../../components/navBar/Navbar";
import Chat from "../../components/chat/Chat";
import "./Home.css";
import NewPostForm from "../home/components/NewPostForm";
import { useAuthContext } from "../../hooks/useAuthContext";
import Post from "../../components/post/Post";

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
