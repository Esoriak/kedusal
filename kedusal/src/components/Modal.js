import React, {Component} from 'react'
import ModalEffect from './ModalEffect'
import'./Modal.css'
class Modal extends Component {
    state = {
        isShowing: false
    }

    /*-- open modal--*/
    openModalHandler= () =>{
        this.setState({
            isShowing: true
        })
    }

    /*-- close modal --*/
    closeModalHandler=() =>{
        this.setState({
            isShowing: false
        })
    }
   render() {
    return(
        <div className="btn-modal">
            <button className="btn-form" onClick={this.state.isShowing ? this.closeModalHandler : this.openModalHandler}>
            <p>KEEP CALM AND USE THE FORCE</p>
            </button>
            <ModalEffect
                className="modal"
                show={this.state.isShowing}
                close={this.closeModalHandler}>
                
            </ModalEffect>

        </div>

    ) 
}

}

export default Modal