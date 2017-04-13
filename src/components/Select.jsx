import React, { Component } from 'react';
import ReactSelect from 'react-select';
import 'react-select/dist/react-select.css';

class Select extends Component {
  constructor(props) {
    super(props);
    this.sizeMap = {
      xs: 'select-xs',
      sm: 'select-sm',
      md: 'select-md',
      lg: 'select-lg',
      xl: 'select-xl'
    };
    this.styleMap = {
      default: 'select-default',
      disabled: 'disabled',
      primary: 'select-primary',
      success: 'select-success',
      info: 'select-info',
      warning: 'select-warning',
      danger: 'select-danger',
    }
    this.getClassSet = this.getClassSet.bind(this);
    this.getSizeClass = this.getSizeClass.bind(this);
    this.getStyleClass = this.getStyleClass.bind(this);
  }

  getSizeClass() {
    return Object.keys(this.sizeMap).filter(s => this.props[s]).map(n => this.sizeMap[n])[0] || this.sizeMap.md;
  }
  getStyleClass() {
    return Object.keys(this.styleMap).filter(s => this.props[s]).map(n => this.styleMap[n])[0] || this.styleMap.default;
  }

  getClassSet() {
    const existing = this.props.className;
    const select = 'react-select-wrapper';
    const size = this.getSizeClass();
    const style = this.getStyleClass();

    return [
      existing,
      select,
      size,
      style,
      this.props.icon ? 'select-icon' : ''
    ]
      .filter(_ => _)
      .join(' ');
  }

  render() {
    const { icon, primary, success, info, warning, danger, xs, sm, md, lg, xl, ...otherProps } = this.props;
    const selectIcon = this.props.icon ? <i className={'select-icon-left fa fa-' + this.props.icon} /> : null;
    return (
      <div className={this.getClassSet()}>
        <ReactSelect {...otherProps} />
        {selectIcon}
      </div>
    );
  }
}

export default Select;