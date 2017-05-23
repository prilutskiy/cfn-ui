import React, { Component } from 'react';

class BoxHeader extends Component {
  render() {
    const { className, ...otherProps } = this.props;
    return (
      <div className={`box-header ${className || ''}`} {...otherProps}>
        {this.props.children}
      </div>
    );
  }
}
class BoxContent extends Component {
  render() {
    const { className, ...otherProps } = this.props;
    return (
      <div className={`box-content ${className || ''}`} {...otherProps}>
        {this.props.children}
      </div>
    );
  }
}
class BoxFooter extends Component {
  render() {
    const { className, ...otherProps } = this.props;
    return (
      <div className={`box-footer ${className || ''}`} {...otherProps}>
        {this.props.children}
      </div>
    );
  }
}

class Box extends Component {
  constructor(props) {
    super(props);
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

  render() {
    const children = React.Children.toArray(this.props.children).filter(c => [BoxHeader, BoxContent, BoxFooter].indexOf(c.type) !== -1);
    return (
      <div className={this.getClassSet()}>
        {children}
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