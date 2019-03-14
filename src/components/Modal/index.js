/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import GoogleApiWrapper from '../Map'
class ModalComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <div>
        <Button color="secondary" className="btnModal" onClick={this.toggle}>
          {this.props.buttonLabel}
          
        </Button>
        
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>{this.props.titleRestaurant}</ModalHeader>
          <ModalBody>
            <GoogleApiWrapper address={this.props.address} title={this.props.titleRestaurant} />
          </ModalBody>
          <ModalFooter>
            {/*<Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}*/}
            <Button color="secondary" onClick={this.toggle}>Cerrar</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalComponent;