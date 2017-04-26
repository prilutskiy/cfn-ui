import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Crumb extends Component {
  render() { return null; }
}

class Breadcrumbs extends Component {
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
              <Link key={i} to={c.props.path} className="breadcrumbs-crumb">{c.props.title}</Link>
            );
          })
        }
      </div>
    );
  }
}

Crumb.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

Breadcrumbs.propTypes = {
  children: (props, propName, componentName) =>
    React.Children
      .toArray(props[propName])
      .find(child => child.type !== Crumb) && new Error(`${componentName} only accepts "<${componentName}.Crumb />" elements`),
}
Breadcrumbs.Crumb = Crumb;
export default Breadcrumbs;