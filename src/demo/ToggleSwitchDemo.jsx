import React, { Component } from 'react';
import ToggleSwitch from './../components/ToggleSwitch';

class ToggleSwitchDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: true
    }
  }

  render() {
    return (
      <div>
        <div>
          <ToggleSwitch />
          <ToggleSwitch primary />
          <ToggleSwitch success />
          <ToggleSwitch info />
          <ToggleSwitch warning />
          <ToggleSwitch danger />
        </div>
        <div>
          <ToggleSwitch disabled />
          <ToggleSwitch disabled primary />
          <ToggleSwitch disabled success />
          <ToggleSwitch disabled info />
          <ToggleSwitch disabled warning />
          <ToggleSwitch disabled danger />
        </div>
        <div>
          <ToggleSwitch value={this.state.value} onChange={(v) => this.setState({value: v})} />
          <ToggleSwitch value={this.state.value} onChange={(v) => this.setState({value: v})} primary />
          <ToggleSwitch value={this.state.value} onChange={(v) => this.setState({value: v})} success />
          <ToggleSwitch value={this.state.value} onChange={(v) => this.setState({value: v})} info />
          <ToggleSwitch value={this.state.value} onChange={(v) => this.setState({value: v})} warning />
          <ToggleSwitch value={this.state.value} onChange={(v) => this.setState({value: v})} danger />
        </div>
        <div>
          <ToggleSwitch value={this.state.value} disabled />
          <ToggleSwitch value={this.state.value} disabled primary />
          <ToggleSwitch value={this.state.value} disabled success />
          <ToggleSwitch value={this.state.value} disabled info />
          <ToggleSwitch value={this.state.value} disabled warning />
          <ToggleSwitch value={this.state.value} disabled danger />
        </div>
      </div>
    );
  }
}

export default ToggleSwitchDemo;