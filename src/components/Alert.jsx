import React, { Component } from 'react';
import Overlay from './Overlay';

class Alert extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      title: '',
      description: '',
      actions: []
    }
  }

  open = (config) => {
    this.setState({ ...config, show: true });
  }

  close = () => {
    this.setState({show: false});
  }

  _runAction = (action) => {
    this.close();
    action.onClick();
  };

  render() {
    return (
      <div>
        <Overlay page default show={this.state.show} />
        <div className={'alert ' + (this.state.show?'':'hidden')}>
          <i className="fa fa-times" role="close" onClick={() => this.close()} />
          <div className="alert-content">
            <div className="alert-content-title">{this.state.title}</div>
            <div className="alert-content-description">{this.state.description}</div>
          </div>
          <div className="alert-actions">
            {
              this.state.actions.map((a, i) => {
                return (
                  <div key={i} onClick={() => this._runAction(a)} className={`alert-action alert-action-${a.style||'default'}`}>{a.text}</div>
                );
              })
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Alert;