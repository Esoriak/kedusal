import React, {Component} from React


class Modal extends Component {
    state = {
        isShowing: false
    }

    /*-- open modal--*/
    openModalHandler() {
        this.setState({
            isShowing: true
        })
    }

    /*-- close modal --*/
    closeModalHandler() {
        this.setState({
            isShowing: false
        })
    }
   render() {
    return(
        <div className="btn-modal">
            <button className="btn-form" onClick={this.state.isShowing ? this.closeModalHandler : this.openModalHandler}>
            <img src="https://www.journaldugeek.com/wp-content/blogs.dir/1/files/2016/02/2048x1536-fit_deux-personnages-prochain-star-wars.jpg" className = "btn-image"/>
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