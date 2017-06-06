import React, { Component } from 'react';

class PrimaryTitle extends Component {
  render() { return null; }
}
class SubTitle extends Component {
  render() { return null; }
}
class Actions extends Component {
  render() { return null; }
}

class Logo extends Component {
  render() {
    return <img src={this.props.src} className="header-logo img-rounded img-lg m-r-sm" />
  }
}

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showExtras: false
    }
    this.getSpecificChildren = this.getSpecificChildren.bind(this);
  }

  getSpecificChildren(childType) {
    const childrenArray = React.Children.toArray(this.props.children);
    const requiredChild = childrenArray.find(c => c.type === childType);
    return ((requiredChild || {}).props || {}).children;
  }

  render() {
    const logo = React.Children.toArray(this.props.children).find(c => c.type === Logo);
    return (
      <div className="header">
        <div className="header-content">
          {logo}
          <div className="header-title">
            <h2 className="header-title-primary">{this.getSpecificChildren(PrimaryTitle)}</h2>
            <h5 className="header-title-secondary">{this.getSpecificChildren(SubTitle)}</h5>
          </div>
        </div>
        <div className="header-actions">
          {this.getSpecificChildren(Actions)}
        </div>
      </div>
    );
  }
}

const supportedChildTypes = [
  PrimaryTitle,
  SubTitle,
  Actions,
  Logo
];

Header.propTypes = {
  children: (props, propName, componentName) =>
    React.Children
      .toArray(props[propName])
      .find(child => supportedChildTypes.indexOf(child.type) === -1) && new Error(`Header only accepts "<Header.PrimaryTitle />", "<Header.SubTitle />", "<Header.Actions />", "<Header.Logo />" elements`),
}
Header.Logo = Logo;
Header.PrimaryTitle = PrimaryTitle;
Header.SubTitle = SubTitle;
Header.Actions = Actions;

export default Header;
