import React, { Component } from 'react';

class Tag extends Component {
  constructor(props) {
    super(props);
    this.styleMap = {
      default: 'tag-default',
      primary: 'tag-primary',
      success: 'tag-success',
      info: 'tag-info',
      warning: 'tag-warning',
      danger: 'tag-danger',
    }
    this.getClassSet = this.getClassSet.bind(this);
    this.getStyleClass = this.getStyleClass.bind(this);
  }

  getStyleClass() {
    return Object.keys(this.styleMap).filter(s => this.props[s]).map(n => this.styleMap[n])[0] || this.styleMap.default;
  }

  getClassSet() {
    const tag = 'tag';
    const style = this.getStyleClass();
    const disabled =  this.props.disabled ? 'disabled' : '';

    return [
      disabled,
      tag,
      style,
    ]
      .filter(_ => _)
      .join(' ');
  }

  onClick() {
    if (this.props.disabled || !this.props.onRemove) {
      return;
    }
    this.props.onChange();
  }


  render() {
    return (
      <div className={this.getClassSet()}>
        {this.props.removable ? <i className="fa fa-times" onClick={() => this.onClick()} /> : null }
        {this.props.children}
      </div>
    );
  }
}

export default Tag;