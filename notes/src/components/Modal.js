import Modals from'./Modals'
import './Modal.css'

function Modal(props){
    return(
        <div className='openModal'>
            <div className='modalContainer'>
            <button className='modalClose'>X</button>
                <Modals/>
            </div>
        </div>
    )
}

export default Modal;