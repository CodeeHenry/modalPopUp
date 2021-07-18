import React from 'react'
import './modal.css'
import Registration from '../pages/Registration'

function Modal() { 
 
    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn" >
                <button  > X </button>
                </div>
                <div className="title">
                    <h3>Please Register</h3>
                </div>
                <div className="Body"> < Registration /></div>
                <div className="footer"  > Cancel </div>
            </div>
        </div>
    )
}

export default Modal
