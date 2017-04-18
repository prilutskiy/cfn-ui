import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Tooltip extends Component {
  constructor(props) {
    super(props);
    this.positionMap = {
      top: 'tooltip-top',
      right: 'tooltip-right',
      bottom: 'tooltip-bottom',
      left: 'tooltip-left'
    }
    this.getClassSet = this.getClassSet.bind(this);
    this.getPositionClass = this.getPositionClass.bind(this);
  }

  getPositionClass() {
    return Object.keys(this.positionMap).filter(s => this.props[s]).map(n => this.positionMap[n])[0] || this.positionMap.bottom;
  }

  getClassSet() {
    const tooltip = 'tooltip';
    const position = this.getPositionClass();

    return [
      tooltip,
      position,
      this.props.disabled ? 'disabled' : ''
    ]
    .filter(_=>_)
    .join(' ');
  }

  render() {
    return (
      <div className={this.getClassSet()}>
        <div className="tooltip-trigger">
          {this.props.trigger}
        </div>
        <div className="tooltip-body">
          {this.props.text}
        </div>
      </div>
    );
  }
}

Tooltip.propTypes = {
  trigger: PropTypes.element
}

export default Tooltip;