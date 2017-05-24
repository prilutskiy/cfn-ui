import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TabSwitchItem extends Component {
  constructor(props) {
    super(props);
    this.getClassSet = this.getClassSet.bind(this);
  }

  getClassSet() {
    const item = 'tab-switch-item';
    const existing = this.props.className || '';
    const active = this.props.active ? 'tab-switch-item-active' : '';
    const disabled = this.props.disabled ? 'tab-switch-item-disabled' : '';

    return [
      existing,
      item,
      active, 
      disabled
    ]
      .filter(_ => _)
      .join(' ');
  }

  _itemClicked() {
    if (this.props.disabled) { return; }
    this.props.onClick();
  }

  render() {
    const { className, active, disabled, onClick, ...otherProps } = this.props;
    return (
      <div className={this.getClassSet()} {...otherProps} onClick={() => this._itemClicked()}>
        {this.props.children}
      </div>
    );
  }
}

TabSwitchItem.propTypes = {
  onClick: PropTypes.func,
}
TabSwitchItem.defaultProps = {
  onClick: () => {},
}

class TabSwitch extends Component {
  constructor(props) {
    super(props);
    this.styleMap = {
      default: 'tab-switch-default',
      primary: 'tab-switch-primary',
      success: 'tab-switch-success',
      info: 'tab-switch-info',
      warning: 'tab-switch-warning',
      danger: 'tab-switch-danger',
    }
    this.getClassSet = this.getClassSet.bind(this);
    this.getStyleClass = this.getStyleClass.bind(this);
  }

  getStyleClass() {
    return Object.keys(this.styleMap).filter(s => this.props[s]).map(n => this.styleMap[n])[0] || this.styleMap.default;
  }

  getClassSet() {
    const tabContainer = 'tab-switch';
    const style = this.getStyleClass();
    const existing = this.props.className || '';
    const compact = this.props.compact ? 'tab-switch-compact' : ''

    return [
      existing,
      tabContainer,
      style,
      compact
    ]
      .filter(_ => _)
      .join(' ');
  }

  render() {
    const items = React.Children.toArray(this.props.children).filter(c => c.type === TabSwitchItem);
    const { primary, success, info, warning, danger, className, ...otherProps } = this.props;
    return (
      <div className={this.getClassSet()} {...otherProps}>
        {items}
      </div>
    );
  }
}

TabSwitch.Item = TabSwitchItem;

export default TabSwitch;