import React from 'react'
import './ModalEffect.css'

const ModalEffect = (props) => {
    return (
        <div>
            <div className="modal-wrapper"
                style={{
                    transform: props.show ? 'translateY(0vh)' = 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}>
                <div classeName="modal-body">

                </div>

            </div>
        </div>
    )
}

export default ModalEffect