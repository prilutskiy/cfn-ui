import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Crumb extends Component {
  render() { return null; }
}

class Breadcrumbs extends Component {
  _onLinkClick = (e) => {
    e.preventDefault();
    this.props.onClick(e);
  }
  render() {
    return (
      <div className="breadcrumbs">
        {
          React.Children.map(this.props.children, (c, i) => {
            return (
              i === (this.props.children.length || 1) - 1
              ?
              <span key={i} to={c.props.path} className="breadcrumbs-crumb">{c.props.title}</span>
              :
              <a key={i} href={c.props.path} onClick={ this._onLinkClick } className="breadcrumbs-crumb">{c.props.title}</a>
            );
          })
        }
      </div>
    );
  }
}

Crumb.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

Breadcrumbs.propTypes = {
  children: (props, propName, componentName) =>
    React.Children
      .toArray(props[propName])
      .find(child => child.type !== Crumb) && new Error(`${componentName} only accepts "<${componentName}.Crumb />" elements`),
}
Breadcrumbs.Crumb = Crumb;
export default Breadcrumbs;