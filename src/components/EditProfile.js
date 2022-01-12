import { useState } from 'react'
import './EditProfile.css'
import { useProfileUpdate } from '../hooks/useProfileUpdate'


export const EditProfile = ({activePopup, setActivePopup}) => {


    const [home, setHome] = useState('')
    const [hobby, setHobby] = useState('')
    const [school, setSchool] = useState('')
    const [age, setAge] = useState('')
    const { updateProfile, isPending, error } = useProfileUpdate()

    const useSubmitUpdate = (e) => {
        e.preventDefault()
       
        updateProfile(home, hobby, school, age)
        setHome('')
        setSchool('')
        setHobby('')
        setAge('')
    } 

    
    const handleClick = () => {
        setActivePopup(prev => !prev)
    }
    return (
        <>
        
        {activePopup ? <div className="popup">
            
            <h2>Uzupełnij informacje o sobie:<button onClick={handleClick} className="exit-btn">X</button></h2>
            <form onSubmit={useSubmitUpdate} className="update-profile">
                <input 
                    type="date"
                    className="age-input"
                    placeholder="Wiek"
                    onChange={(e) => setAge(e.target.value)}
                    value={age}
                />
                <input 
                    type="text"
                    className="home-input"
                    placeholder="Miejsce zamieszkania"
                    onChange={(e) => setHome(e.target.value)}
                    value={home}
                />
                <input 
                    type="text"
                    className="hobby-input"
                    placeholder="Hobby"
                    onChange={(e) => setHobby(e.target.value)}
                    value={hobby}
                />
                <input 
                    type="text"
                    className="school-input"
                    placeholder="Wykształcenie"
                    onChange={(e) => setSchool(e.target.value)}
                    value={school}
                />
                
                    <button className="update-data-btn"> Zmień </button>
                   
                    { error && <p>{error}</p>} 
            </form>
        </div> : null}
        </>
    )
}
