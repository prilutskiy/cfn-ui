import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPasswordVisible: false,
    };
    this.styleMap = {
      default: 'input-default',
      primary: 'input-primary',
      success: 'input-success',
      info: 'input-info',
      warning: 'input-warning',
      danger: 'input-danger',
    }
    this.getClassSet = this.getClassSet.bind(this);
    this.getStyleClass = this.getStyleClass.bind(this);
  }

  getStyleClass() {
    return Object.keys(this.styleMap).filter(s => this.props[s]).map(n => this.styleMap[n])[0] || this.styleMap.default;
  }

  getClassSet() {
    const existing = this.props.className;
    const input = 'input';
    const style = this.getStyleClass();
    const disabled = this.props.disabled ? 'input-disabled' : '';
    const block = this.props.block ? 'input-block' : '';

    return [
      existing,
      input,
      style,
      block,
      disabled,
      this.props.type === 'password' ? 'input-password' : '',
      this.props.icon ? 'input-icon' : '',
      this.props.highlighted ? 'input-highlighted' : ''
    ]
      .filter(_ => _)
      .join(' ');
  }

  render() {
    const { highlighted, className, type, xs, sm, md, lg, xl, primary, success, disabled, info, warning, danger, ...otherProps } = this.props;
    const inputIcon = this.props.icon ? <i className={'input-icon-left fa fa-' + this.props.icon} /> : null;
    const passRevealerIcon =
      this.props.type === 'password'
        ?
        <i
          onClick={!disabled ? () => this.setState({ isPasswordVisible: !this.state.isPasswordVisible }) : null}
          className={'input-icon-right fa fa-' +
            (this.state.isPasswordVisible ? 'eye-slash' : 'eye') + (!disabled ? ' clickable' : '')}
        />
        :
        null;
        return (
          <div className={this.getClassSet()}>
            <input {...otherProps} type={type === 'password' && this.state.isPasswordVisible ? 'text' : type} disabled={disabled} />
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