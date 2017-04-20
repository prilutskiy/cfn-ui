import React, { Component } from 'react';

class Fly extends Component {
  constructor(props) {
    super(props);this.getSpecificChildren = this.getSpecificChildren.bind(this); this.styleMap = {
      default: 'fly-default',
      inverted: 'fly-inverted',
      primary: 'fly-primary',
      secondary: 'fly-secondary',
      success: 'fly-success',
      info: 'fly-info',
      warning: 'fly-warning',
      danger: 'fly-danger',
    }
    this.getClassSet = this.getClassSet.bind(this);
    this.getStyleClass = this.getStyleClass.bind(this);
  }

  getStyleClass() {
    return Object.keys(this.styleMap).filter(s => this.props[s]).map(n => this.styleMap[n])[0] || this.styleMap.default;
  }

  getClassSet() {
    const fly = 'fly';
    const style = this.getStyleClass();

    return [
      fly,
      style,
      this.props.show ? 'fly-opened' : 'fly-closed'
    ]
      .filter(_ => _)
      .join(' ');
  }

  getSpecificChildren(childType) {
    const childrenArray = React.Children.toArray(this.props.children);
    const requiredChild = childrenArray.find(c => c.type === childType);
    return ((requiredChild || {}).props || {}).children;
  }

  _close = () => this.props.onClose ? this.props.onClose() : null;

  _stopPropagation = (e) => {
    e.preventDefault();
    e.stopPropagation();
    return false;
  }

  render() {
    return (
      <div className={this.getClassSet()} onWheel={ this._stopPropagation }>
        <div className="fly-header">
          Application Settings
          <i className="fa fa-times" role="close" onClick={() => this._close()} />
        </div>
        <div className="fly-content"></div>
      </div>
    );
  }
}

export default Fly;