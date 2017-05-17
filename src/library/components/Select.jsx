import React, { Component } from 'react';

import Select2 from 'react-select2-wrapper';
import 'react-select2-wrapper/css/select2.css';


class Select extends Component {
  constructor(props) {
    super(props);
    this.styleMap = {
      default: 'select-default',
      primary: 'select-primary',
      success: 'select-success',
      info: 'select-info',
      warning: 'select-warning',
      danger: 'select-danger',
    }
    this.getClassSet = this.getClassSet.bind(this);
    this.getStyleClass = this.getStyleClass.bind(this);
  }

  getStyleClass() {
    return Object.keys(this.styleMap).filter(s => this.props[s]).map(n => this.styleMap[n])[0] || this.styleMap.default;
  }

  getClassSet() {
    const existing = this.props.className;
    const select = 'select';
    const style = this.getStyleClass();
    const highlighted = this.props.highlighted ? 'select-highlighted' : '';
    const disabled = this.props.disabled ? 'select-disabled' : '';
    const icon = this.props.icon ? 'select-icon' : '';

    return [
      existing,
      select,
      style,
      disabled,
      highlighted,
      icon,
    ]
      .filter(_ => _)
      .join(' ');
  }

  render() {
    const { icon, primary, success, info, warning, danger, xs, sm, md, lg, xl, ...otherProps } = this.props;
    const selectIcon = this.props.icon ? <i className={'select-icon-left fa fa-' + this.props.icon} /> : null;
    return (
      <div className="select"><Select2 {...otherProps} /></div>
    );
  }
}

export default Select;