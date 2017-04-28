import React, { Component } from 'react';

class PrimaryTitle extends Component{
  render() { return null; }
}
class SubTitle extends Component{
  render() { return null; }
}
class Actions extends Component{
  render() { return null; }
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
    return (
      <div className="header">
        <div className="header-content">
          <div className="header-title">
            <h2 className="header-title-primary">{this.getSpecificChildren(PrimaryTitle)}</h2>
            <h5 className="header-title-secondary">{this.getSpecificChildren(SubTitle)}</h5>
          </div>
          <div className="header-actions">
            {this.getSpecificChildren(Actions)}
          </div>
        </div>
      </div>
    );
  }
}

const supportedChildTypes = [
  PrimaryTitle,
  SubTitle,
  Actions
];

Header.propTypes = {
    children: (props, propName, componentName) =>
    React.Children
      .toArray(props[propName])
      .find(child => supportedChildTypes.indexOf(child.type) === -1) && new Error(`${componentName} only accepts "<${componentName}.PrimaryTitle />", "<${componentName}.SubTitle />", "<${componentName}.Actions />" elements`),
}

Header.PrimaryTitle = PrimaryTitle;
Header.SubTitle = SubTitle;
Header.Actions = Actions;

export default Header;
