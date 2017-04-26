import React, { Component } from 'react';
import { RadioGroup } from './../library';

class RadioDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1
    };
    this.options = [
      {
        value: 1,
        label: 'First option'
      },
      {
        value: 2,
        label: 'Second option'
      }
    ]
  }

  render() {
    return (
      <div>
        <div>
          <RadioGroup value={this.state.value} onChange={(v) => this.setState({value: v})}>
            {
              this.options.map(o => {
                return (
                  <RadioGroup.Item key={o.value} value={o.value}>{o.label}</RadioGroup.Item>
                );
              })
            }
          </RadioGroup>
          <RadioGroup primary value={this.state.value} onChange={(v) => this.setState({value: v})}>
            {
              this.options.map(o => {
                return (
                  <RadioGroup.Item key={o.value} value={o.value}>{o.label}</RadioGroup.Item>
                );
              })
            }
          </RadioGroup>
          <RadioGroup success value={this.state.value} onChange={(v) => this.setState({value: v})}>
            {
              this.options.map(o => {
                return (
                  <RadioGroup.Item key={o.value} value={o.value}>{o.label}</RadioGroup.Item>
                );
              })
            }
          </RadioGroup>
          <RadioGroup info value={this.state.value} onChange={(v) => this.setState({value: v})}>
            {
              this.options.map(o => {
                return (
                  <RadioGroup.Item key={o.value} value={o.value}>{o.label}</RadioGroup.Item>
                );
              })
            }
          </RadioGroup>
          <RadioGroup warning value={this.state.value} onChange={(v) => this.setState({value: v})}>
            {
              this.options.map(o => {
                return (
                  <RadioGroup.Item key={o.value} value={o.value}>{o.label}</RadioGroup.Item>
                );
              })
            }
          </RadioGroup>
          <RadioGroup danger value={this.state.value} onChange={(v) => this.setState({value: v})}>
            {
              this.options.map(o => {
                return (
                  <RadioGroup.Item key={o.value} value={o.value}>{o.label}</RadioGroup.Item>
                );
              })
            }
          </RadioGroup>
        </div>
        <div>
          <RadioGroup disabled value={this.state.value} onChange={(v) => this.setState({value: v})}>
            {
              this.options.map(o => {
                return (
                  <RadioGroup.Item key={o.value} value={o.value}>{o.label}</RadioGroup.Item>
                );
              })
            }
          </RadioGroup>
          <RadioGroup disabled primary value={this.state.value} onChange={(v) => this.setState({value: v})}>
            {
              this.options.map(o => {
                return (
                  <RadioGroup.Item key={o.value} value={o.value}>{o.label}</RadioGroup.Item>
                );
              })
            }
          </RadioGroup>
          <RadioGroup disabled success value={this.state.value} onChange={(v) => this.setState({value: v})}>
            {
              this.options.map(o => {
                return (
                  <RadioGroup.Item key={o.value} value={o.value}>{o.label}</RadioGroup.Item>
                );
              })
            }
          </RadioGroup>
          <RadioGroup disabled info value={this.state.value} onChange={(v) => this.setState({value: v})}>
            {
              this.options.map(o => {
                return (
                  <RadioGroup.Item key={o.value} value={o.value}>{o.label}</RadioGroup.Item>
                );
              })
            }
          </RadioGroup>
          <RadioGroup disabled warning value={this.state.value} onChange={(v) => this.setState({value: v})}>
            {
              this.options.map(o => {
                return (
                  <RadioGroup.Item key={o.value} value={o.value}>{o.label}</RadioGroup.Item>
                );
              })
            }
          </RadioGroup>
          <RadioGroup disabled danger value={this.state.value} onChange={(v) => this.setState({value: v})}>
            {
              this.options.map(o => {
                return (
                  <RadioGroup.Item key={o.value} value={o.value}>{o.label}</RadioGroup.Item>
                );
              })
            }
          </RadioGroup>
        </div>
      </div>
    );
  }
}

export default RadioDemo;