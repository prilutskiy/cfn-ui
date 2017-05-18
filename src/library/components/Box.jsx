import React, { Component } from 'react';

class BoxHeader extends Component {
  render() { return null; }
}
class BoxContent extends Component {
  render() { return null; }
}
class BoxFooter extends Component {
  render() { return null; }
}

class Box extends Component {
  constructor(props) {
    super(props);
    this.getSpecificChildren = this.getSpecificChildren.bind(this);
    this.styleMap = {
      default: 'box-default',
      inverted: 'box-inverted',
      primary: 'box-primary',
      success: 'box-success',
      info: 'box-info',
      warning: 'box-warning',
      danger: 'box-danger',
    }
    this.getClassSet = this.getClassSet.bind(this);
    this.getStyleClass = this.getStyleClass.bind(this);
  }

  getStyleClass() {
    return Object.keys(this.styleMap).filter(s => this.props[s]).map(n => this.styleMap[n])[0] || this.styleMap.default;
  }

  getClassSet() {
    const box = 'box';
    const style = this.getStyleClass();
    const link = this.props.link ? 'box-link' : '';

    return [
      box,
      style,
      link
    ]
      .filter(_ => _)
      .join(' ');
  }

  getSpecificChildren(childType) {
    const childrenArray = React.Children.toArray(this.props.children);
    const requiredChild = childrenArray.find(c => c.type === childType);
    return ((requiredChild || {}).props || {}).children;
  }

  render() {
    const footer = this.getSpecificChildren(BoxFooter);
    const header = this.getSpecificChildren(BoxHeader);
    return (
      <div className={this.getClassSet()}>
        {
          header
            ?
            <div className="box-header h5">
              {header}
            </div>
            :
            null
        }
        <div className="box-content">
          {this.getSpecificChildren(BoxContent)}
        </div>
        {
          footer
            ?
            <div className="box-footer text-default text-muted">
              {footer}
            </div>
            :
            null
        }
      </div>
    );
  }
}

Box.Header = BoxHeader;
Box.Content = BoxContent;
Box.Footer = BoxFooter;

const supportedChildTypes = [
  BoxHeader,
  BoxContent,
  BoxFooter
];

Box.propTypes = {
  children: (props, propName, componentName) =>
    React.Children
      .toArray(props[propName])
      .find(child => supportedChildTypes.indexOf(child.type) === -1) && new Error(`${componentName} only accepts "<Box.Header />", "<Box.Content />", "<Box.Footer />", elements`),
}

export default Box;