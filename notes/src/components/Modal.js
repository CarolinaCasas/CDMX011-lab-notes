import React from "react";
import "./styleModal.css"
import closeIcon from '../img/closeIcon.png';

const Modal =({children, state, changeState})=>{
    return(
        <>
        {state &&
    <div className="backModal">
        <div className="Modal">
        <img src={closeIcon} className="catLogo" alt="closeIcon" onClick={()=>changeState(false)} />
    {children}
        </div>
    </div>
    }
    </>
    );
}

export default Modal