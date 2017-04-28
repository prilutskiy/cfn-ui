import React, { Component } from 'react';

class FormGroupLabel extends Component {
  render() {
    return null;
  }
}
class FormGroupHint extends Component {
  render() {
    return null;
  }
}
class FormGroupBody extends Component {
  render() {
    return null;
  }
}
class FormGroupAddons extends Component {
  render() {
    return null;
  }
}

class FormGroup extends Component {
  constructor(props) {
    super(props);
    this.getSpecificChildren = this.getSpecificChildren.bind(this);
  }

  getSpecificChildren(childType){
    const childrenArray = React.Children.toArray(this.props.children);
    const requiredChild = childrenArray.find(c => c.type === childType);
    return ((requiredChild || {}).props || {}).children;
  }

  render() {
    return (
      <div className={`form-group ${this.props.inline?'form-group-inline':''}`}>
        <label className="form-group-label">
          {this.getSpecificChildren(FormGroupLabel)}
        </label>
        <div className="form-group-body">
          <div className="form-control">
            <div className="form-control-body">
              {this.getSpecificChildren(FormGroupBody)}
            </div>
            <div className="form-control-addons">
              {this.getSpecificChildren(FormGroupAddons)}
            </div>
          </div>
          <small className="form-control-hint">
            {this.getSpecificChildren(FormGroupHint)}
          </small>
        </div>
      </div>
    );
  }
}



FormGroup.Label = FormGroupLabel;
FormGroup.Hint = FormGroupHint;
FormGroup.Body = FormGroupBody;
FormGroup.Addons = FormGroupAddons;

const supportedChildrenTypes = [
  FormGroupLabel,
  FormGroupHint,
  FormGroupBody,
  FormGroupAddons
]

FormGroup.propTypes = {
  children: (props, propName, componentName) =>
    React.Children
      .toArray(props[propName])
      .find(child => supportedChildrenTypes.indexOf(child.type) === -1) && new Error(`${componentName} only accepts following children: <FormGroup.Label />, <FormGroup.Hint />, <FormGroup.Body />, <FormGroup.Addons />`),
}

export default FormGroup;