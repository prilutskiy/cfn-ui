import React, { Component } from 'react';
import Select from './../components/Select';

class SelectDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: null
    }
    this.handlSelectChange = (options) => this.setState({ values: options });
    this.options = [
      { value: 'one', label: 'One' },
      { value: 'two', label: 'Two' }
    ];
  }

  render() {
    return (
      <div>
        <div>
          <Select default value={this.state.values} onChange={(o) => this.handlSelectChange(o)} options={this.options} />
          <Select default icon="building" value={this.state.values} onChange={(o) => this.handlSelectChange(o)} options={this.options} />
          <Select default multi value={this.state.values} onChange={(o) => this.handlSelectChange(o)} options={this.options} />
          <Select default multi icon="building" value={this.state.values} onChange={(o) => this.handlSelectChange(o)} options={this.options} />
        </div>
        <div>
          <Select disabled primary value={this.state.values} onChange={(o) => this.handlSelectChange(o)} options={this.options} />
          <Select disabled primary icon="building" value={this.state.values} onChange={(o) => this.handlSelectChange(o)} options={this.options} />
          <Select disabled primary multi value={this.state.values} onChange={(o) => this.handlSelectChange(o)} options={this.options} />
          <Select disabled primary multi icon="building" value={this.state.values} onChange={(o) => this.handlSelectChange(o)} options={this.options} />
        </div>
        <div>
          <Select primary value={this.state.values} onChange={(o) => this.handlSelectChange(o)} options={this.options} />
          <Select primary icon="building" value={this.state.values} onChange={(o) => this.handlSelectChange(o)} options={this.options} />
          <Select primary multi value={this.state.values} onChange={(o) => this.handlSelectChange(o)} options={this.options} />
          <Select primary multi icon="building" value={this.state.values} onChange={(o) => this.handlSelectChange(o)} options={this.options} />
        </div>
        <div>
          <Select success value={this.state.values} onChange={(o) => this.handlSelectChange(o)} options={this.options} />
          <Select success icon="building" value={this.state.values} onChange={(o) => this.handlSelectChange(o)} options={this.options} />
          <Select success multi value={this.state.values} onChange={(o) => this.handlSelectChange(o)} options={this.options} />
          <Select success multi icon="building" value={this.state.values} onChange={(o) => this.handlSelectChange(o)} options={this.options} />
        </div>
        <div>
          <Select info value={this.state.values} onChange={(o) => this.handlSelectChange(o)} options={this.options} />
          <Select info icon="building" value={this.state.values} onChange={(o) => this.handlSelectChange(o)} options={this.options} />
          <Select info multi value={this.state.values} onChange={(o) => this.handlSelectChange(o)} options={this.options} />
          <Select info multi icon="building" value={this.state.values} onChange={(o) => this.handlSelectChange(o)} options={this.options} />
        </div>
        <div>
          <Select warning value={this.state.values} onChange={(o) => this.handlSelectChange(o)} options={this.options} />
          <Select warning icon="building" value={this.state.values} onChange={(o) => this.handlSelectChange(o)} options={this.options} />
          <Select warning multi value={this.state.values} onChange={(o) => this.handlSelectChange(o)} options={this.options} />
          <Select warning multi icon="building" value={this.state.values} onChange={(o) => this.handlSelectChange(o)} options={this.options} />
        </div>
        <div>
          <Select danger value={this.state.values} onChange={(o) => this.handlSelectChange(o)} options={this.options} />
          <Select danger icon="building" value={this.state.values} onChange={(o) => this.handlSelectChange(o)} options={this.options} />
          <Select danger multi value={this.state.values} onChange={(o) => this.handlSelectChange(o)} options={this.options} />
          <Select danger multi icon="building" value={this.state.values} onChange={(o) => this.handlSelectChange(o)} options={this.options} />
        </div>
        <div>
          <Select xs primary value={this.state.values} onChange={(o) => this.handlSelectChange(o)} options={this.options} />
          <Select sm primary icon="building" value={this.state.values} onChange={(o) => this.handlSelectChange(o)} options={this.options} />
          <Select md primary multi value={this.state.values} onChange={(o) => this.handlSelectChange(o)} options={this.options} />
          <Select lg primary multi icon="building" value={this.state.values} onChange={(o) => this.handlSelectChange(o)} options={this.options} />
          <Select xl primary multi icon="building" value={this.state.values} onChange={(o) => this.handlSelectChange(o)} options={this.options} />
        </div>
      </div>
    );
  }
}

export default SelectDemo;