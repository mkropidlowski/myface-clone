import './Chat.css'
import userIcon from '../img/happy.png'
import dot from '../img/dot.png'

export default function Chat() {
    return (
        <div className="chat-container">
            <h3>Kontakty</h3>
            <ul>
                <li>
                    <span className="icon-circle"><img src={userIcon} alt="user"/><img src={dot} alt="dot" width="7px" height="7px"/></span>
                    <span className="chat-name">Jan Nowak</span>
                </li>
                <li>
                    <span className="icon-circle"><img src={userIcon} alt="user"/><img src={dot} alt="dot" width="7px" height="7px"/></span>
                    <span className="chat-name">Adam Adamiak</span>
                </li>
                <li>
                    <span className="icon-circle"><img src={userIcon} alt="user"/><img src={dot} alt="dot" width="7px" height="7px"/></span>
                    <span className="chat-name">Tomasz Smuda</span>
                </li>
                <li>
                    <span className="icon-circle"><img src={userIcon} alt="user"/></span>
                    <span className="chat-name">Alex Oslo</span>
                </li>
                <li>
                    <span className="icon-circle"><img src={userIcon} alt="user"/></span>
                    <span className="chat-name">Karim Benzyna</span>
                </li>
                <li>
                    <span className="icon-circle"><img src={userIcon} alt="user"/><img src={dot} alt="dot" width="7px" height="7px"/></span>
                    <span className="chat-name">Jajami Omate</span>
                </li>
        
            </ul>
        </div>
    )
}
