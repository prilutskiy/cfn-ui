import React, { Component } from 'react';

class ToggleSwitch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.isControlled ? this.props.value : false,
    }
    this.onClick = this.onClick.bind(this);
    this.getClassSet = this.getClassSet.bind(this);
    this.getStyleClass = this.getStyleClass.bind(this);
    this.styleMap = {
      default: 'toggle-switch-default',
      primary: 'toggle-switch-primary',
      success: 'toggle-switch-success',
      info: 'toggle-switch-info',
      warning: 'toggle-switch-warning',
      danger: 'toggle-switch-danger',
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value != null) {
      this.setState({ value: nextProps.value });
    }
  }

  onClick() {
    if (this.props.disabled) {
      return;
    }
    if (this.isControlled && this.props.onChange) {
      this.props.onChange(!this.state.value)
    } else if (!this.isControlled) {
      this.setState({ value: !this.state.value });
    }
  }

  get isControlled() {
    return this.props.value != null;
  }

  getStyleClass() {
    return Object.keys(this.styleMap).filter(s => this.props[s]).map(n => this.styleMap[n])[0] || this.styleMap.default;
  }

  getClassSet() {
    const toggleSwitch = 'toggle-switch';
    const value = this.state.value ? 'on' : 'off';
    const style = this.getStyleClass();

    return [
      toggleSwitch,
      value,
      this.props.disabled ? 'disabled' : '',
      style
    ]
    .filter(c => c)
    .join(' ');
  }

  render() {
    return (
      <span className={this.getClassSet()} onClick={() => this.onClick()}>
        <span className="toggle-switch-latch"/>      
      </span>
    );
  }
}

export default ToggleSwitch;