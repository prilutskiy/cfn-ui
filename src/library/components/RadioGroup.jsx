import React, { Component } from 'react';

class RadioGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.isControlled ? this.props.value : null,
    };
    this.getClassSet = this.getClassSet.bind(this);
    this.getStyleClass = this.getStyleClass.bind(this);
    this.styleMap = {
      default: 'radio-group-default',
      primary: 'radio-group-primary',
      success: 'radio-group-success',
      info: 'radio-group-info',
      warning: 'radio-group-warning',
      danger: 'radio-group-danger'
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value != null) {
      this.setState({ value: nextProps.value });
    }
  }

  get isControlled() {
    return this.props.value != null;
  }

  getStyleClass() {
    return Object.keys(this.styleMap).filter(k => this.props[k]).map(k => this.styleMap[k])[0] || this.styleMap.default;
  }

  getClassSet() {
    const radioGroup = 'radio-group';
    const style = this.getStyleClass();
    const inline = this.props.inline ? 'radio-group-inline' : '';

    return [
      radioGroup,
      style,
      inline,
      this.props.disabled ? 'diabled' : '',

    ]
      .filter(c => c)
      .join(' ');
  }

  onClick(value) {
    if (this.props.disabled) {
      return;
    }
    if (this.isControlled && this.props.onChange) {
      this.props.onChange(value)
    } else if (!this.isControlled) {
      this.setState({ value: value });
    }
  }

  render() {
    return (
      <div className={this.getClassSet()}>
        {
          React.Children.map(this.props.children, c => {
            return (
              <div 
                className={`radio ${c.props.value===this.state.value?'active':''} ${this.props.disabled||c.props.disabled?'disabled':''}`} 
                onClick={() => this.onClick(c.props.value)}
              >
                <div className="radio-box">
                  <div className="radio-check" />
                </div>
                <div className={`radio-label ${this.props.disabled?'text-default text-muted':''}`}>{c}</div>
              </div>
            );
          })
        }
      </div>
    );
  }
}

class RadioGroupItem extends Component {
  render() {
    return (
      <span>{this.props.children}</span>
    );
  }
}

RadioGroup.propTypes = {
  children: (props, propName, componentName) =>
    React.Children
      .toArray(props[propName])
      .find(child => child.type !== RadioGroupItem) && new Error(`${componentName} only accepts "<RadioGroup.Item />" elements`),
}

RadioGroup.Item = RadioGroupItem;
export default RadioGroup;