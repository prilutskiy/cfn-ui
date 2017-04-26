import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Icon extends Component {
  render() {
    const {className, name, ...otherProps} = this.props;
    return (
      <i className={`fa fa-${name} ${className||''}`} {...otherProps}></i>
    );
  }
}

Icon.propTypes = {
  name: PropTypes.string.isRequired
}

export default Icon;