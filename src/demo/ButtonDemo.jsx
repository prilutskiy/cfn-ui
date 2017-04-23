import React, { Component } from 'react';
import Button from './../components/Button';

class ButtonDemo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <Button default href="/">Button</Button>
          <Button primary>Button</Button>
          <Button success>Button</Button>
          <Button info>Button</Button>
          <Button warning>Button</Button>
          <Button danger>Button</Button>
          <Button link>Button</Button>
        </div>
        <div>
          <Button disabled default>Button</Button>
          <Button disabled primary>Button</Button>
          <Button disabled success>Button</Button>
          <Button disabled info>Button</Button>
          <Button disabled warning>Button</Button>
          <Button disabled danger>Button</Button>
          <Button disabled link>Button</Button>
        </div>
        <div>
          <Button outline default>Button</Button>
          <Button outline primary>Button</Button>
          <Button outline success>Button</Button>
          <Button outline info>Button</Button>
          <Button outline warning>Button</Button>
          <Button outline danger>Button</Button>
          <Button outline link>Button</Button>
        </div>
        <div>
          <Button outline disabled default>Button</Button>
          <Button outline disabled primary>Button</Button>
          <Button outline disabled success>Button</Button>
          <Button outline disabled info>Button</Button>
          <Button outline disabled warning>Button</Button>
          <Button outline disabled danger>Button</Button>
          <Button outline disabled link>Button</Button>
        </div>
        <div>
          <Button loading default>Button</Button>
          <Button loading primary>Button</Button>
          <Button loading success>Button</Button>
          <Button loading info>Button</Button>
          <Button loading warning>Button</Button>
          <Button loading danger>Button</Button>
          <Button loading link>Button</Button>
        </div>
        <div>
          <Button xs outline loading default>Button</Button>
          <Button sm outline loading primary>Button</Button>
          <Button md outline loading success>Button</Button>
          <Button lg outline loading info>Button</Button>
          <Button xl outline loading warning>Button</Button>
          <Button outline loading danger>Button</Button>
          <Button outline loading link>Button</Button>
        </div>
      </div>
    );
  }
}

export default ButtonDemo;