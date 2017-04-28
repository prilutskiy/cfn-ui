import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
  _onLinkClick = (e) => {
    e.preventDefault();
    this.props.onClick(e);
  }

  render() {
    return (
      <div className="navbar">
        {
          !(this.props.logo || this.props.title)
            ?
            null
            :
            <a className="navbar-brand" href="/" onClick={ this._onLinkClick }>
              <span className="navbar-brand-logo">
                {
                  this.props.logo
                    ?
                    <img src={this.props.logo} alt="Logo" />
                    :
                    null
                }
              </span>
              {
                this.props.title
                  ?
                  <h4 className="navbar-brand-title">
                    {this.props.title}
                  </h4>
                  :
                  null
              }
            </a>
        }
        <div className="navbar-content">
          <div className="navbar-menu">
            {
              React.Children.map(this.getSpecificChildren(NavbarLeftMenu), c => {
                return (
                  <span className="navbar-menu-item" onClick={c.props.onClick}>
                    {typeof c.props.children === 'string' ? <span>{c.props.children}</span> : c.props.children}
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
                    {typeof c.props.children === 'string' ? <span>{c.props.children}</span> : c.props.children}
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

Navbar.LeftMenu = NavbarLeftMenu;
Navbar.RightMenu = NavbarRightMenu;
Navbar.MenuItem = NavbarMenuItem;

const supportedChildTypes = [
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
  logo: PropTypes.string,
  title: PropTypes.string,
  onClick: PropTypes.func,
  children: (props, propName, componentName) =>
    React.Children
      .toArray(props[propName])
      .find(child => supportedChildTypes.indexOf(child.type) === -1) && new Error(`${componentName} only accepts "<${componentName}.LeftMenu />", "<${componentName}.RightMenu />" elements`),
}

export default Navbar;