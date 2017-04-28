import React, { Component } from 'react';

class Navigation extends Component {
  render = () => null;
}

class Content extends Component {
  render = () => null;
}

class Footer extends Component {
  render = () => null;
}

class App extends Component {
  getClassSet = () => {
    const app = 'app';
    const boxed = this.props.boxed ? 'app-boxed' : '';
    const fixedNav = this.props.fixednav ? 'app-fixednav' : '';
    const fixedFooter = this.props.fixedfooter ? 'app-fixedfooter' : '';

    return [
      app,
      boxed,
      fixedNav,
      fixedFooter
    ]
      .filter(_ => _)
      .join(' ');
  }

  getSpecificChildren = (childType) => {
    const childrenArray = React.Children.toArray(this.props.children);
    const requiredChild = childrenArray.find(c => c.type === childType);
    return ((requiredChild || {}).props || {}).children;
  }

  render() {
    const navigation = this.getSpecificChildren(Navigation);
    const content = this.getSpecificChildren(Content);
    const footer = this.getSpecificChildren(Footer);
    return (
      <div className={this.getClassSet()}>
        {
          navigation
            ?
            <div className="app-navigation">
              {navigation}
            </div>
            :
            null
        }
        <div className="app-content">
          {content}
        </div>
        {
          footer
          ? 
          <div className="app-footer">
            {footer}
          </div>
          :
          null
        }
      </div>
    );
  }
}
const supportedChildTypes = [
  Navigation,
  Content,
  Footer
];

App.Navigation = Navigation;
App.Content = Content;
App.Footer = Footer;

App.propTypes = {
  children: (props, propName, componentName) =>
    React.Children
      .toArray(props[propName])
      .find(child => supportedChildTypes.indexOf(child.type) === -1) && new Error(`${componentName} only accepts "<${componentName}.Navigation />", "<${componentName}.Content />", "<${componentName}.Footer />" elements`),
}



export default App;