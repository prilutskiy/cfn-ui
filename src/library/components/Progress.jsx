import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Progress extends Component {
  constructor(props) {
    super(props); 
    this.styleMap = {
      default: 'progress-default',
      inverted: 'progress-inverted',
      primary: 'progress-primary',
      success: 'progress-success',
      info: 'progress-info',
      warning: 'progress-warning',
      danger: 'progress-danger',
    }
    this.getClassSet = this.getClassSet.bind(this);
    this.getStyleClass = this.getStyleClass.bind(this);
  }

  getStyleClass() {
    return Object.keys(this.styleMap).filter(s => this.props[s]).map(n => this.styleMap[n])[0] || this.styleMap.default;
  }

  getClassSet() {
    const progress = 'progress';
    const style = this.getStyleClass();

    return [
      progress,
      style,
      this.props.animated?'progress-animated':''
    ]
      .filter(_ => _)
      .join(' ');
  }

  render() {
    return (
      <div className="progress-container">
        <div className={this.getClassSet()}>
          <div className="progress-bar" style={{ width: `${this.props.value}%` }} />
        </div>
      </div>
    );
  }
}

Progress.propTypes = {
  value: PropTypes.number.isRequired
}

export default Progress;