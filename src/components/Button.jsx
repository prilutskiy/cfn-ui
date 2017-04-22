import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Button extends Component {
  constructor(props) {
    super(props);
    this.generateClassSet = this.generateClassSet.bind(this);
    this.getType = this.getType.bind(this);
  }
  generateClassSet() {
    const type = this.getType();
    const size = this.getSize();
    const classSet = [
      'btn',
      type,
      size,
      this.props.loading ? 'btn-loading' : '',
      this.props.outline && type !== 'btn-link' && type !== 'btn-default' ? 'btn-outline' : '',
      this.props.block ? 'btn-block' : '',
      this.props.disabled || this.props.loading ? 'disabled' : '',
      this.props.hidden ? 'hidden' : ''
    ];
    return classSet.filter(_ => _).join(' ');
  }

  getSize() {
    return (this.props.xs ? 'btn-xs' :
      this.props.sm ? 'btn-sm' :
        this.props.lg ? 'btn-lg' :
          this.props.xl ? 'btn-xl' :
            this.props.md ? 'btn-md' :
              '') || 'btn-md';
  }

  getType() {
    return (this.props.primary ? 'btn-primary' :
      this.props.inverted ? 'btn-inverted' :
        this.props.success ? 'btn-success' :
          this.props.info ? 'btn-info' :
            this.props.warning ? 'btn-warning' :
              this.props.danger ? 'btn-danger' :
                this.props.link ? 'btn-link' :
                  this.props.default ? 'btn-default'
                    : '') || 'btn-default';
  }

  onClick(e) {
    return this.props.onClick && !this.props.disabled && !this.props.loading ? this.props.onClick(e) : false;
  }

  render() {
    const content = (
      <div>
        <i className={'fa fa-spinner fa-spin fa-fw ' + (!this.props.loading ? 'hidden' : '')}></i>
        <div className={'btn-content ' + (this.props.loading ? 'invisible' : '')}>
          {
            this.props.children
          }
        </div>
      </div>
    );
    const props = {
      className: this.generateClassSet() + (this.props.className ? ' ' + this.props.className : ''),
      style: this.props.style,
      onClick: (e) => this.onClick(e)
    }
    return this.props.href
      ?
      <Link to={this.props.href} {...props}>
        {content}
      </Link>
      :
      <div {...props}>
        {content}
      </div>
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