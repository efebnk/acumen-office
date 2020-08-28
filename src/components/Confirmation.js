import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
class Confirmation extends Component {
  constructor(props) {
    super(props);
    this.hideModal = this.hideModal.bind(this);
    this.ok = this.ok.bind(this);
  }

  hideModal() {
    this.props.handle(false);
  }
  ok() {
    this.props.handle(true);
  }

  render() {
    return (
      <div>
        <Modal show={this.props.parentShow} onHide={this.hideModal}>
          <ModalHeader>
            <ModalTitle>Confirmation</ModalTitle>
          </ModalHeader>
          <ModalBody>Are you sure you want to reveal the city?</ModalBody>
          <ModalFooter>
            <button onClick={this.hideModal}>Cancel</button>
            <button onClick={this.ok}>Ok</button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Confirmation;
