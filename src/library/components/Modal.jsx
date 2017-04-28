import React, { Component } from 'react';

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
    this.getSpecificChildren = this.getSpecificChildren.bind(this); this.styleMap = {
      default: 'modal-default',
      inverted: 'modal-inverted',
      primary: 'modal-primary',
      secondary: 'modal-secondary',
      success: 'modal-success',
      info: 'modal-info',
      warning: 'modal-warning',
      danger: 'modal-danger',
    }
    this.getClassSet = this.getClassSet.bind(this);
    this.getStyleClass = this.getStyleClass.bind(this);
  }

  getStyleClass() {
    return Object.keys(this.styleMap).filter(s => this.props[s]).map(n => this.styleMap[n])[0] || this.styleMap.default;
  }

  getClassSet() {
    const modal = 'modal';
    const style = this.getStyleClass();
    const wide = this.props.wide ? 'modal-wide' : '';

    return [
      modal,
      style,
      wide,
      this.props.show ? 'modal-opened' : ''
    ]
      .filter(_ => _)
      .join(' ');
  }

  getSpecificChildren(childType) {
    const childrenArray = React.Children.toArray(this.props.children);
    const requiredChild = childrenArray.find(c => c.type === childType);
    return ((requiredChild || {}).props || {}).children;
  }

  _cancel = () => {
    if (this.props.onCancel) {
      this.props.onCancel();
    }
  }

  _stopPropagation = (e) => {
    e.preventDefault();
    e.stopPropagation();
    return false;
  }

  render() {
    const header = this.getSpecificChildren(ModalHeader);
    const content = this.getSpecificChildren(ModalContent);
    const footer = this.getSpecificChildren(ModalFooter)
    return (
      <div className={`overlay overlay-page overlay-default ${this.props.show ? 'overlay-opened' : null}`}>
        <div className={this.getClassSet()} onWheel={this._stopPropagation}>
          <div className="modal-header">
            {header}
            <i className="fa fa-times modal-dismiss" onClick={() => this._cancel()} />
          </div>
          <div className="modal-content">
            {content}
          </div>
          {
            footer
              ?
              <div className="modal-footer">
                {this.getSpecificChildren(ModalFooter)}
              </div>
              :
              null
          }
        </div>
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