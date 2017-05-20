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
    const clickable = !this.props.disabled ? 'clickable' : '';

    return [
      disabled,
      tag,
      style,
      clickable
    ]
      .filter(_ => _)
      .join(' ');
  }

  onClick() {
    if (this.props.disabled) {
      return;
    }
    this.props.onClick();
  }


  render() {
    const { className, onClick, ...otherProps } = this.props;
    return (
      <div className={this.getClassSet()} onClick={() => this.onClick()} {...otherProps}>
        {this.props.icon ? <i className={`fa fa-${this.props.icon}`} />  : null }
        {this.props.children}
      </div>
    );
  }
}

export default Tag;