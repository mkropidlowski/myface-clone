import './Chat.css'
import userIcon from '../img/happy.png'
import dot from '../img/dot.png'
import { useCollection } from '../hooks/useCollection'

export default function Chat() {


    const { data, error } = useCollection('users') 

    return (
        <div className="chat-container">
            <h3>Kontakty</h3>
            {error && <span>{error}</span>}
            <ul>
                {data && data.map(user => (
                        <li key={user.id}>
                        <span className="icon-circle"><img src={userIcon} alt="user"/>
                        {user.online && <img src={dot} alt="dot" width="7px" height="7px"/>}
                        </span>
                        <span className="chat-name">{user.displayName}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}
