/* global $ */
import React, { Component } from 'react';

class Header extends Component {
  render = () => null;
}

class Content extends Component {
  render = () => null;
}

class Fly extends Component {
  constructor(props) {
    super(props); 
    this.styleMap = {
      default: 'fly-default',
      inverted: 'fly-inverted',
      primary: 'fly-primary',
      secondary: 'fly-secondary',
      success: 'fly-success',
      info: 'fly-info',
      warning: 'fly-warning',
      danger: 'fly-danger',
    }
    this.getClassSet = this.getClassSet.bind(this);
    this.getStyleClass = this.getStyleClass.bind(this);
    this.getSpecificChildren = this.getSpecificChildren.bind(this); 
    this._onOutsideClick = this._onOutsideClick.bind(this);
  }

  _onOutsideClick(e) {
    const $target = $(e.target);
    //if user clicks outside the fly (footer click is allowed) except for the background in boxed mode
    if (!($target.hasClass('fly') || $target.parents('.fly').length || $target.hasClass('footer') || $target.parents('.footer').length) && !$target.find('.app').length) {
      this._close();
    } else {
    }
  }

  getStyleClass() {
    return Object.keys(this.styleMap).filter(s => this.props[s]).map(n => this.styleMap[n])[0] || this.styleMap.default;
  }

  getClassSet() {
    const fly = 'fly';
    const style = this.getStyleClass();

    return [
      fly,
      style,
      this.props.show ? 'fly-opened' : ''
    ]
      .filter(_ => _)
      .join(' ');
  }

  getSpecificChildren(childType) {
    const childrenArray = React.Children.toArray(this.props.children);
    const requiredChild = childrenArray.find(c => c.type === childType);
    return ((requiredChild || {}).props || {}).children;
  }

  _close = () => this.props.onClose ? this.props.onClose() : null;

  _stopPropagation = (e) => {
    e.preventDefault();
    e.stopPropagation();
    return false;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.show) {
      setTimeout(() => {
        $(window).on('click', this._onOutsideClick)
      }, 0)
    } else {
      $(window).off('click', this._onOutsideClick);
    }
  }

  render() {
    return (
      <div className={this.getClassSet()} onWheel={this._stopPropagation} ref={r => this.flyRef = r}>
        <div className="fly-header">
          {this.getSpecificChildren(Header)}
          <i className="fa fa-times fly-dismiss" onClick={() => this._close()} />
        </div>
        <div className="fly-content">
          {this.getSpecificChildren(Content)}
        </div>
      </div>
    );
  }
}


Fly.Header = Header;
Fly.Content = Content;

const supportedChildrenTypes = [
  Header,
  Content,
]

Fly.propTypes = {
  children: (props, propName, componentName) =>
    React.Children
      .toArray(props[propName])
      .find(child => supportedChildrenTypes.indexOf(child.type) === -1) && new Error(`${componentName} only accepts following children: <${componentName}.Header />, <${componentName}.Content />`),
}
export default Fly;