import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: this.isControlled ? this.props.value : false
    };
    this.onClick = this.onClick.bind(this);
    this.getClassSet = this.getClassSet.bind(this);
    this.getStyleClass = this.getStyleClass.bind(this);
    this.styleMap = {
      default: 'checkbox-default',
      primary: 'checkbox-primary',
      success: 'checkbox-success',
      info: 'checkbox-info',
      warning: 'checkbox-warning',
      danger: 'checkbox-danger'
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value != null) {
      this.setState({ checked: nextProps.value });
    }
  }

  get isControlled() {
    return this.props.value != null;
  }

  onClick() {
    if (this.props.disabled) {
      return;
    }
    if (this.isControlled && this.props.onChange) {
      this.props.onChange(!this.state.checked)
    } else if (!this.isControlled) {
      this.setState({ checked: !this.state.checked });
    }
  }

  getStyleClass() {
    return Object.keys(this.styleMap).filter(k => this.props[k]).map(k => this.styleMap[k])[0] || this.styleMap.default;
  }

  getClassSet() {
    const checkbox = 'checkbox';
    const style = this.getStyleClass();
    const disabled = this.props.disabled ? 'disabled' : '';
    const checked = this.state.checked ? 'checked' : '';
    return [
      checkbox,
      checked,
      disabled,
      style
    ]
      .filter(_ => _)
      .join(' ');
  }

  render() {
    return (
      <span className={this.getClassSet()} onClick={() => this.onClick()}>
        <div className="checkbox-box">
          <span className="checkbox-check" />
        </div>
        <label className={`checkbox-label ${this.props.disabled?'text-muted':''}`}>{this.props.label}</label>
      </span>
    );
  }
}

Checkbox.propTypes = {
  blue: PropTypes.bool,
  red: PropTypes.bool,
  green: PropTypes.bool,
}

export default Checkbox;