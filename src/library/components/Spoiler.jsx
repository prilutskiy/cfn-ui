import React, { Component } from 'react';

class SpoilerHeader extends Component {
  render() {
    return null;
  }
}

class SpoilerContent extends Component {
  render() {
    return null;
  }
}

class Spoiler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false
    };
    this._onStateChange = this._onStateChange.bind(this);
  }

  _onStateChange() {
    if (this.isControlled) {
      this.props.onChange(!this.collapsed);
    } else {
      this.setState({ collapsed: !this.collapsed });
    }
  }

  get isControlled() {
    return this.props.collapsed !== undefined;
  }

  get collapsed() {
    return this.isControlled ? this.props.collapsed : this.state.collapsed;
  }

  render() {
    const allChildren = React.Children.toArray(this.props.children);
    const header = allChildren.find(c => c.type === SpoilerHeader);
    const content = allChildren.find(c => c.type === SpoilerContent);
    const { left, right, collapsed, onClick, ...otherProps } = this.props;
    return (
      <div className={`spoiler ${this.collapsed ? 'spoiler-collapsed' : ''}`} {...otherProps}>
        <div className="spoiler-header" onClick={this._onStateChange}>
          <i className="fa fa-angle-down"></i>
          {left ? null : <div className="spoiler-header-before"></div>}
          <div className="spoiler-header-content">
            {header.props.children}
          </div>
          {right ? null : <div className="spoiler-header-after"></div>}
        </div>
        <div className="spoiler-content">{content.props.children}</div>
      </div>
    );
  }
}

Spoiler.defaultProps = {
  onChange: () => { },
  children : (props, propName, componentName) => 
                React.Children
                  .toArray(props[propName])
                  .find(child => child.type !== SpoilerContent && child.type !== SpoilerHeader) && new Error(`Spoiler only accepts "<Spoiler.Header />", "<Spoiler.Content />" elements`),
}

Spoiler.Header = SpoilerHeader;
Spoiler.Content = SpoilerContent;

export default Spoiler;