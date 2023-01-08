import "./UserAbout.css";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useCollection } from "../../hooks/useCollection";

export default function UserAbout() {
    const { user } = useAuthContext();
    const { userdata, error } = useCollection("users", ["user_id", "==", user.uid]);

    return (
        <div className="about">
            <h2>O sobie</h2>
            {error && <span>{error}</span>}

            {userdata &&
                userdata.map((info) => (
                    <ul key={info.id}>
                        <li>
                            <p>
                                Data urodzenia: <span className="details-about">{info.age}</span>
                            </p>
                        </li>
                        <li>
                            <p>
                                Miejsce zamieszkania: <span className="details-about">{info.home}</span>
                            </p>
                        </li>
                        <li>
                            <p>
                                Hobby: <span className="details-about">{info.hobby}</span>
                            </p>
                        </li>
                        <li>
                            <p>
                                Wykształcenie: <span className="details-about">{info.school}</span>
                            </p>
                        </li>
                    </ul>
                ))}
        </div>
    );
}
