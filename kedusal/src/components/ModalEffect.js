import React from 'react'
import './ModalEffect.css'
import Formulaire from './Formulaire'
const ModalEffect = (props) => {
    return (
        <div>
            <div className="modal-wrapper"
                style={{
                    transform: props.show ? 'translateY(0vh)' : 'translateY(-200vh)',
                    opacity: props.show ? '1' : '0'
                }}>
                <div classeName="modal-body">
                <Formulaire/>
                </div>

            </div>
        </div>
    )
}

export default ModalEffect