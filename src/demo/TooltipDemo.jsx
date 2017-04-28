import React, { Component } from 'react';
import { Tooltip, Button } from './../library';

class TooltipDemo extends Component {
  render() {
    const btn = <Button primary>Button</Button>
    return (
      <div style={{marginTop: '60px'}}>
        <Tooltip top trigger={btn} text="Top tooltip" />
        <Tooltip right trigger={btn} text="Right tooltip" />
        <Tooltip trigger={btn} text="Bottom tooltip" />
        <Tooltip left trigger={btn} text="Left tooltip" />
      </div>
    );
  }
}

export default TooltipDemo;