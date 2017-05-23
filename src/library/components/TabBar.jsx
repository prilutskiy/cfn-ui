import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';

class TabBarItem extends Component {
  constructor(props) {
    super(props);
    this.getClasses = this.getClasses.bind(this);
  }
  getClasses() {
    const tabBarItem= 'tabbar-item';
    const active = this.props.active ? 'tabbar-item-active' : '';
    const existing = this.props.className;

    return [
      tabBarItem,
      active,
      existing
    ]
      .filter(_ => _)
      .join(' ');
  }
  render() {
    const { className, icon, title, active, ...otherProps } = this.props;
    return (
      <div className={this.getClasses()} {...otherProps}>
        <div className="tabbar-item-icon"><Icon name={this.props.icon} /></div>
        <div className="tabbar-item-label">{this.props.title}</div>
      </div>
    );
  }
  static propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    active: PropTypes.bool
  }
}

class TabBar extends Component {
  constructor(props) {
    super(props);
    this.getClasses = this.getClasses.bind(this);
    this.getStyle = this.getStyle.bind(this);
    this.styleMap = {
      default: 'tabbar-default',
      inverted: 'tabbar-default',
      primary: 'tabbar-primary',
      success: 'tabbar-success',
      info: 'tabbar-info',
      warning: 'tabbar-warning',
      danger: 'tabbar-danger',
    }
  }
  getStyle() {
    return Object.keys(this.styleMap).filter(s => this.props[s]).map(n => this.styleMap[n])[0] || this.styleMap.default;
  }
  getClasses() {
    const tabBarItem= 'tabbar';
    const style = this.getStyle();
    const existing = this.props.className;

    return [
      tabBarItem,
      style,
      existing
    ]
      .filter(_ => _)
      .join(' ');
  }
  render() {
    const { className, children, inverted, primary, success, info, warning, danger, ...otherProps } = this.props;
    return (
      <div className={this.getClasses()} {...otherProps}>
        { React.Children.toArray(this.props.children).filter(c => c.type === TabBarItem) }
      </div>
    );
  }
  static Item = TabBarItem;

  static propTypes = {
    default: PropTypes.bool,
    inverted: PropTypes.bool,
    primary: PropTypes.bool,
    success: PropTypes.bool,
    info: PropTypes.bool,
    warning: PropTypes.bool,
    danger: PropTypes.bool,
    children: (props, propName, componentName) => {
      const prop = props[propName];
      return React.Children
        .toArray(prop)
        .find(child => child.type !== TabBarItem) && new Error(`TabBar only accepts "<TabBar.Item />" elements`);
    },
  }
}

export default TabBar;