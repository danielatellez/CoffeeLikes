import React, { Component } from 'react';
import Modal from 'react-modal';
import ResetRating from './ResetRating';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class AddNew extends Component {
 
  constructor(){
    super();
      
  this.state = { 
    modalIsOpen: false
  };

  this.openModal = this.openModal.bind(this);
  this.afterOpenModal = this.afterOpenModal.bind(this);
  this.closeModal = this.closeModal.bind(this);

  }

  openModal(){
    this.setState({modalIsOpen: true});
  }

  afterOpenModal(){
    this.subtitle.style.color = '#ff7b00';
  }

  closeModal(){
    this.setState({modalIsOpen: false});
}
  
render() {
  return (
    <div>
      <button onClick={this.openModal}>Add New</button>
      <Modal
        isOpen={this.state.modalIsOpen}
        onAfterOpen={this.afterOpenModal}
        onRequestClose={this.closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >

        <h2 ref={subtitle => this.subtitle = subtitle}>New Coffee Like</h2>
        
        <form>
          <input class='bottom-space' placeholder ='Coffee Shop Name' />

          <ResetRating />
        </form>
      </Modal>
    </div>
  );
}
}



export default AddNew;
