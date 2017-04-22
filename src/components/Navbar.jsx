import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NavbarBrandLogo extends Component {
  render() { return null; }
}
class NavbarBrandTitle extends Component {
  render() { return null; }
}
class NavbarLeftMenu extends Component {
  render() { return null; }
}
class NavbarRightMenu extends Component {
  render() { return null; }
}
class NavbarMenuItem extends Component {
  render() { return null; }
}

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.getSpecificChildren = this.getSpecificChildren.bind(this);
  }

  getSpecificChildren(childType) {
    const childrenArray = React.Children.toArray(this.props.children);
    const requiredChild = childrenArray.find(c => c.type === childType);
    return ((requiredChild || {}).props || {}).children;
  }

  render() {
    return (
      <div className="navbar">
        <div className="navbar-brand">
          <span className="navbar-brand-logo">
            {this.getSpecificChildren(NavbarBrandLogo)}
          </span>
          <h4 className="navbar-brand-title text-inverted">
            {this.getSpecificChildren(NavbarBrandTitle)}
          </h4>
        </div>
        <div className="navbar-content">
          <div className="navbar-menu">
            {
              React.Children.map(this.getSpecificChildren(NavbarLeftMenu), c => {
                return (
                  <span className="navbar-menu-item text-inverted" onClick={c.props.onClick}>
                    <span>{c.props.children}</span>
                  </span>
                )
              })
            }
          </div>
          <div className="navbar-menu">
            {
              React.Children.map(this.getSpecificChildren(NavbarRightMenu), c => {
                return (
                  <span className="navbar-menu-item">
                    <span>{c.props.children}</span>
                  </span>
                )
              })
            }
          </div>
        </div>
      </div>
    );
  }
}

Navbar.BrandLogo = NavbarBrandLogo;
Navbar.BrandTitle = NavbarBrandTitle;
Navbar.LeftMenu = NavbarLeftMenu;
Navbar.RightMenu = NavbarRightMenu;
Navbar.MenuItem = NavbarMenuItem;

const supportedChildTypes = [
  NavbarBrandLogo,
  NavbarBrandTitle,
  NavbarLeftMenu,
  NavbarRightMenu,
  NavbarMenuItem
];

NavbarLeftMenu.propTypes = NavbarRightMenu.propTypes = {
  children: (props, propName, componentName) =>
    React.Children
      .toArray(props[propName])
      .find(child => child.type !== NavbarMenuItem) && new Error(`${componentName} only accepts "<Navbar.MenuItem />" elements`),
}

Navbar.propTypes = {
  children: (props, propName, componentName) =>
    React.Children
      .toArray(props[propName])
      .find(child => supportedChildTypes.indexOf(child.type) === -1) && new Error(`${componentName} only accepts "<Navbar.BrandLogo />", "<Navbar.BrandTitle />", "<Navbar.BrandMenu />", "<Navbar.BrandMenuItem />" elements`),
}

export default Navbar;