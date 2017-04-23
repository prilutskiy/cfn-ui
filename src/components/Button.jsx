/* global $ */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Button extends Component {
  constructor(props) {
    super(props);
    this.styleMap = {
      default: 'button-default',
      inverted: 'button-inverted',
      primary: 'button-primary',
      success: 'button-success',
      info: 'button-info',
      warning: 'button-warning',
      danger: 'button-danger',
    }
    this.getClassSet = this.getClassSet.bind(this);
    this.getStyleClass = this.getStyleClass.bind(this);
  }

  getStyleClass() {
    return Object.keys(this.styleMap).filter(s => this.props[s]).map(n => this.styleMap[n])[0] || this.styleMap.default;
  }

  getClassSet() {
    const button = 'button';
    const block = this.props.block ? 'button-block' :'';
    const style = this.getStyleClass();
    const existing = this.props.className;

    return [
      button,
      style,
      block,
      existing,
    ]
      .filter(_ => _)
      .join(' ');
  }

  onClick(e) {
    return this.props.onClick && !this.props.disabled && !this.props.loading ? this.props.onClick(e) : false;
  }

  render() {
    const content = this.props.children;
    const props = {
      className: this.getClassSet(),
      onClick: (e) => this.onClick(e)
    }
    return this.props.href
      ?
      <Link to={this.props.href} {...props} ref={r => this.btn = r}>
        {content}
      </Link>
      :
      <a {...props} ref={r => this.btn = r}>
        {content}
      </a>
      ;
  }
}

Button.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object,

  default: PropTypes.bool,
  inverted: PropTypes.bool,
  primary: PropTypes.bool,
  success: PropTypes.bool,
  info: PropTypes.bool,
  warning: PropTypes.bool,
  danger: PropTypes.bool,
  link: PropTypes.bool,

  xs: PropTypes.bool,
  sm: PropTypes.bool,
  md: PropTypes.bool,
  lg: PropTypes.bool,
  xl: PropTypes.bool,

  loading: PropTypes.bool,
  outline: PropTypes.bool,
  block: PropTypes.bool,

  disabled: PropTypes.bool,
  hidden: PropTypes.bool
};
export default Button;