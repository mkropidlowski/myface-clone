import './EditProfile.css'

export const EditProfile = ({activePopup, setActivePopup}) => {
    return (
        <>
        
            {activePopup ? <div className="popup">Hello</div> : null}
        </>
    )
}
