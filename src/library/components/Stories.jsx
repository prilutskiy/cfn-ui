import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Story extends Component {
  _onLinkClick = (e) => {
    e.preventDefault();
    this.props.onClick(e);
  }
  render = () => (
    <a className="story" onClick={ this._onLinkClick } href={this.props.href}>
      <div className="story-image">
        <img src={this.props.image} alt={this.props.title} />
      </div>
      <div className="story-title" title={this.props.title} >
        {this.props.title}
      </div>
    </a>
  );
}

Story.propTypes = {
  href: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

class Stories extends Component {
  render() {
    const children = React.Children.toArray(this.props.children).filter(c => c.type === Story);
    console.log(children)
    return (
      <div className="stories">
          {children}
      </div>
    );
  }
}

Stories.Story = Story;

Stories.propTypes = {
  children: (props, propName, componentName) =>
    React.Children
      .toArray(props[propName])
      .find(child => child.type !== Story) && new Error(`${componentName} only accepts "<${componentName}.Story />" elements`),
}

export default Stories;