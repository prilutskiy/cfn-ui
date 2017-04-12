import React, { Component, PropTypes } from 'react';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPasswordVisible: false,
    };
    this.getInputStyle = this.getInputStyle.bind(this);
    this.getInputSize = this.getInputSize.bind(this);
  }

  togglePassword() {
    this.setState({ isPasswordVisible: !this.state.isPasswordVisible });
  }

  getInputStyle() {
    return this.props.primary ? 'input-primary' :
      this.props.success ? 'input-success' :
        this.props.info ? 'input-info' :
          this.props.warning ? 'input-warning' :
            this.props.danger ? 'input-danger' :
              'input-default';
  }
  getInputSize() {
    return this.props.xs ? 'input-xs' :
      this.props.sm ? 'input-sm' :
        this.props.lg ? 'input-lg' :
          this.props.xl ? 'input-xl' :
              'input-md';
  }

  render() {
    let { beforeIcon, afterIcon, type, disabled, inline, children, xs, sm, md, lg, xl, hint, ...otherProps } = this.props;
    afterIcon = this.props.type === 'password' ? `${!this.state.isPasswordVisible ? 'eye' : 'eye-slash'} clickable` : afterIcon;
    return (
      <div className={`input-container ${this.getInputStyle()} ${this.getInputSize()} ${inline ? 'input-container-inline' : ''} ${disabled ? 'disabled' : ''} ${beforeIcon ? 'has-before-icon' : ''} ${afterIcon ? 'has-after-icon' : ''}`}>
        <label>{otherProps.title}</label>
        <span className="input-wrapper">
          <span className="input-wrapper-input">
            <input {...otherProps} type={type === 'password' && this.state.isPasswordVisible ? 'text' : type} disabled={disabled} />
            {beforeIcon ? <i className={`before fa fa-${beforeIcon}`}></i> : null}
            {afterIcon ? <i className={`after fa fa-${afterIcon}`} onClick={() => this.props.type === 'password' ? this.togglePassword() : null}></i> : null}
            {children}
          </span>
          <small>{otherProps.hint}</small>
        </span>
      </div>
    );
  }
}

Input.propTypes = {
  beforeIcon: PropTypes.string,
  afterIcon: PropTypes.string,

  primary: PropTypes.bool,
  success: PropTypes.bool,
  info: PropTypes.bool,
  warning: PropTypes.bool,
  danger: PropTypes.bool,
  default: PropTypes.bool,

  xs: PropTypes.bool,
  sm: PropTypes.bool,
  md: PropTypes.bool,
  lg: PropTypes.bool,
  xl: PropTypes.bool,
}

export default Input;