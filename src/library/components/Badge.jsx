import React, { Component } from 'react';

class Badge extends Component {
  constructor(props) {
    super(props);
    this.styleMap = {
      default: 'badge-default',
      primary: 'badge-primary',
      success: 'badge-success',
      info: 'badge-info',
      warning: 'badge-warning',
      danger: 'badge-danger',
    }
    this.getClassSet = this.getClassSet.bind(this);
    this.getStyleClass = this.getStyleClass.bind(this);
  }

  getStyleClass() {
    return Object.keys(this.styleMap).filter(s => this.props[s]).map(n => this.styleMap[n])[0] || this.styleMap.default;
  }

  getClassSet() {
    const badge = 'badge';
    const style = this.getStyleClass();
    const disabled =  this.props.disabled ? 'disabled' : '';

    return [
      disabled,
      badge,
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
        {this.props.children}
      </div>
    );
  }
}

export default Badge;