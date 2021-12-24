
import beard from '../img/beard.png'
import frieds from '../img/friends.png'
import save from '../img/save.png'
import group from '../img/group.png'
import './Menu.css'

export default function Menu() {
    return (
        <div className="menu-container">
           <ul>
               <li><img src={beard} alt="profile"/><span className="hover-test">Michał Kropidłowski</span></li>
               <li><img src={frieds} alt="friends"/><span>Znajomi</span></li>
               <li><img src={group} alt="group"/><span>Grupy</span></li>
               <li><img src={save} alt="save"/><span>Zapisane</span></li>
           </ul>
        </div>
    )
}
