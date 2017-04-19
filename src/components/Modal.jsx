import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Overlay from './Overlay';

class ModalHeader extends Component {
  render = () => null;
}
class ModalContent extends Component {
  render = () => null;
}
class ModalFooter extends Component {
  render = () => null;
}

class Modal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="modal" show={this.props.show}>
        <Overlay page show={this.props.show}/>
      </div>
    );
  }
}

const supportedChildTypes = [
  ModalHeader,
  ModalContent,
  ModalFooter
];

Modal.Header = ModalHeader;
Modal.Content = ModalContent;
Modal.Footer = ModalFooter;

Modal.propTypes = {
    children: (props, propName, componentName) =>
    React.Children
      .toArray(props[propName])
      .find(child => supportedChildTypes.indexOf(child.type) === -1) && new Error(`${componentName} only accepts "<${componentName}.Header />", "<${componentName}.Content />", "<${componentName}.Footer />" elements`),
}

export default Modal;