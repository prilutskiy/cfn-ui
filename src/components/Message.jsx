import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';
import Tooltip from './Tooltip';

class Content extends Component {
  render() { return null; }
}
class Extras extends Component {
  render() { return null; }
}

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showExtras: false
    };
    this.styleMap = {
      default: 'message-default',
      primary: 'message-primary',
      success: 'message-success',
      info: 'message-info',
      warning: 'message-warning',
      danger: 'message-danger',
    }
    this.getClassSet = this.getClassSet.bind(this);
    this.getStyleClass = this.getStyleClass.bind(this);
    this.getSpecificChildren = this.getSpecificChildren.bind(this);
  }

  getStyleClass() {
    return Object.keys(this.styleMap).filter(s => this.props[s]).map(n => this.styleMap[n])[0] || this.styleMap.default;
  }

  getClassSet() {
    const message = 'message';
    const style = this.getStyleClass();

    return [
      message,
      style,
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
    const expander = <Icon name="angle-down" className="clickable" onClick={() => this.setState({ showExtras: !this.state.showExtras })}></Icon>;
    const collapser = <Icon name="angle-up" className="clickable" onClick={() => this.setState({ showExtras: !this.state.showExtras })}></Icon>;

    const content = this.getSpecificChildren(Content);
    const extras = this.getSpecificChildren(Extras);
    return (
      <div className={this.getClassSet()}>
        <div className="message-content">
          {
            this.props.icon
              ?
              <div className="message-icon">
                <Icon name={this.props.icon} />
              </div>
              :
              null
          }
          <div className="message-summary">
            {content}
          </div>
          {
            extras
              ?
              <div className="message-toggle">
                {
                  !this.state.showExtras
                    ?
                    <Tooltip top text="Show More" trigger={expander} />
                    :
                    <Tooltip top text="Show Less" trigger={collapser} />

                }
              </div>
              :
              null
          }

        </div>
        <div className={`message-extras ${!this.state.showExtras ? 'message-extras-collapsed' : 'message-extras-expanded'}`}>
          {extras}
        </div>
      </div>
    );
  }
}


Message.Content = Content;
Message.Extras = Extras;

const supportedChildTypes = [
  Content,
  Extras,
];


Message.propTypes = {
  icon: PropTypes.string,
  children: (props, propName, componentName) =>
    React.Children
      .toArray(props[propName])
      .find(child => supportedChildTypes.indexOf(child.type) === -1) && new Error(`${componentName} only accepts "<${componentName}.Content />", "<${componentName}.Extras />", elements`),
}

export default Message;