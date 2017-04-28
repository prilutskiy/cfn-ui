/* global $ */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

  _onLinkClick = (e) => {
    e.preventDefault();
    this.props.onClick(e);
  }

  getStyleClass() {
    return Object.keys(this.styleMap).filter(s => this.props[s]).map(n => this.styleMap[n])[0] || this.styleMap.default;
  }

  getClassSet() {
    const button = 'button';
    const link = this.props.link ? 'button-link' : '';
    const block = this.props.block ? 'button-block' :'';
    const style = this.getStyleClass();
    const existing = this.props.className;
    const clean = this.props.clean ? 'button-clean' : '';
    const disabled = this.props.disabled || this.props.loading ? 'button-disabled' : '';
    const loading = this.props.loading ? 'button-loading' : '';

    return [
      existing,
      button,
      style,
      block,
      link,
      clean,
      disabled,
      loading,
    ]
      .filter(_ => _)
      .join(' ');
  }

  onClick(e) {
    return this.props.onClick && !this.props.disabled && !this.props.loading ? this.props.onClick(e) : false;
  }

  render() {
    const content = <div className="button-content">{this.props.children}</div>
    const props = {
      className: this.getClassSet(),
      onClick: (e) => this.onClick(e)
    }
    return (
      <a {...props} ref={r => this.btn = r} href={this.props.href} onClick={ this._onLinkClick }>
        {content}
        { this.props.loading ? <i className="fa fa-spinner fa-spin fa-fw"></i> : null }
      </a>
    );
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