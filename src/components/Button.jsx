import React, { Component, PropTypes } from 'react';

class Button extends Component {
  constructor(props) {
    super(props);
    this.generateClassSet = this.generateClassSet.bind(this);
    this.getType = this.getType.bind(this);
  }
  generateClassSet(a) {
    const classSet = [
      'btn',
      this.getType(),
      this.getSize(),
      this.props.loading ? 'btn-loading' : '',
      this.props.outline&&!this.props.link&&!this.props.default ? 'btn-outline' : '',
      this.props.block ? 'btn-block' : '',
      this.props.disabled ? 'disabled' : '',
      this.props.hidden ? 'hidden' : ''
    ];
    return classSet.filter(_=>_).join(' ');
  }

  getSize() {
    return this.props.xs ? 'btn-xs' :
      this.props.sm ? 'btn-sm' :
      this.props.lg ? 'btn-lg' :
      this.props.xl ? 'btn-xl' :
      this.props.md ? 'btn-md' :
      '';
  }

  getType() {
    return this.props.primary ? 'btn-primary' :
      this.props.success ? 'btn-success' :
      this.props.info ? 'btn-info' :
      this.props.warning ? 'btn-warning' :
      this.props.danger ? 'btn-danger' :
      this.props.link ? 'btn-link' :
      this.props.default ? 'btn-default'
      : '';
  }

  render() {
    return (
      <div className={this.generateClassSet()}>{this.props.children}</div>
    );
  }
}

Button.propTypes = {
  default: PropTypes.bool,
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

Button.defaultProps = {
  default: true,
  md: true
}

export default Button;