import React, { Component } from 'react';

class Toast extends Component {
  constructor(props) {
    super(props);
  }

  _close = () => {
    if (this.props.onClose) {
      this.props.onClose();
    }
  }

  render() {
    return (
      <div className={'toast ' + (this.props.show?'toast-opened':'')}>
        <div className="toast-logo">
          <i className="fa fa-bell-o"></i>
        </div>
        <div className="toast-content">
          Lorem ipsum dolor sit amet
        </div>
        <div className="toast-dismiss" onClick={()=> this._close()}>
          <i className="fa fa-times"></i>
        </div>
      </div>
    );
  }
}

export default Toast;