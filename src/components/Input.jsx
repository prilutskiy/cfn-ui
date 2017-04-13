import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPasswordVisible: false,
    };
    this.sizeMap = {
      xs: 'input-xs',
      sm: 'input-sm',
      md: 'input-md',
      lg: 'input-lg',
      xl: 'input-xl'
    };
    this.styleMap = {
      default: 'input-default',
      disabled: 'disabled',
      primary: 'input-primary',
      success: 'input-success',
      info: 'input-info',
      warning: 'input-warning',
      danger: 'input-danger',
    }
    this.getClassSet = this.getClassSet.bind(this);
    this.getSizeClass = this.getSizeClass.bind(this);
    this.getStyleClass = this.getStyleClass.bind(this);
  }

  getSizeClass() {
    return Object.keys(this.sizeMap).filter(s => this.props[s]).map(n => this.sizeMap[n])[0] || this.sizeMap.md;
  }
  getStyleClass() {
    return Object.keys(this.styleMap).filter(s => this.props[s]).map(n => this.styleMap[n])[0] || this.styleMap.default;
  }

  getClassSet() {
    const existing = this.props.className;
    const input = 'input';
    const size = this.getSizeClass();
    const style = this.getStyleClass();

    return [
      existing,
      input,
      size,
      style,
      this.props.type === 'password' ? 'input-password' : '',
      this.props.icon ? 'input-icon' : ''
    ]
      .filter(_ => _)
      .join(' ');
  }

  render() {
    const { className, type, xs, sm, md, lg, xl, primary, success, disabled, info, warning, danger, ...otherProps } = this.props;
    const inputIcon = this.props.icon ? <i className={'input-icon-left fa fa-' + this.props.icon} /> : null;
    const passRevealerIcon =
      this.props.type === 'password'
        ?
        <i
          onClick={!disabled?() => this.setState({ isPasswordVisible: !this.state.isPasswordVisible }):null}
          className={'input-icon-right fa fa-' +
            (this.state.isPasswordVisible ? 'eye-slash' : 'eye') + (!disabled?' clickable':'')}
        />
        :
        null;
    return (
      <div className={this.getClassSet()}>
        <input {...otherProps} type={type === 'password' && this.state.isPasswordVisible ? 'text' : type} disabled={disabled}/>
        {inputIcon}
        {passRevealerIcon}
      </div>
    );
  }
}

Input.propTypes = {
  icon: PropTypes.string
};

Input.defaultProps = {

}

export default Input;