import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SideMenuItem extends Component {

  onClick(e) {
    e.preventDefault();
    const handler = this.props.onClick || (() => { });
    handler(e);
  }

  render() {
    return (
      <a href={this.props.href} onClick={e => this.onClick(e)} className="sidemenu-list-item">{this.props.children}</a>
    );
  }
}

class SideMenu extends Component {
  constructor(props) {
    super(props);
    this.getSpecificChildrenArray = this.getSpecificChildrenArray.bind(this);
    this.getClassSet = this.getClassSet.bind(this);
  }

  getSpecificChildrenArray(childType) {
    const childrenArray = React.Children.toArray(this.props.children);
    const requiredChildren = childrenArray.filter(c => c.type === childType);
    return requiredChildren;
  }

  getClassSet() {
    const sidemenu = 'sidemenu';
    const opened = this.props.show ? 'sidemenu-opened' : '';

    return [
      sidemenu,
      opened
    ]
      .filter(c => c)
      .join(' ');
  }

  render() {
    const logo = this.props.logo ? <img className="sidemenu-brand-logo" src={this.props.logo} alt="" /> : null;
    return (
      <div>
        <div className={'overlay overlay-page overlay-default ' + (this.props.show ? 'overlay-opened' : '')} onClick={this.props.onClose}>
        </div>
        <div className={this.getClassSet()}>
          <div className="sidemenu-header">
            <div className="sidemenu-brand">
              {logo}
              <h4 className="sidemenu-brand-title">{this.props.brand}</h4>
            </div>
            <div className="sidemenu-dismiss" onClick={this.props.onClose}>
              <i className="fa fa-times" />
            </div>
          </div>
          <div className="sidemenu-list">
            {
              this.getSpecificChildrenArray(SideMenuItem)
            }
          </div>
        </div>
      </div>
    );
  }
}

SideMenu.Item = SideMenuItem;

const supportedChildrenTypes = [
  SideMenuItem
]

SideMenu.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  brand: PropTypes.string.isRequired,
  children: (props, propName, componentName) =>
    React.Children
      .toArray(props[propName])
      .find(child => supportedChildrenTypes.indexOf(child.type) === -1) && new Error(`SideMenu only accepts following children: <SideMenu.Item />`),
}

export default SideMenu;