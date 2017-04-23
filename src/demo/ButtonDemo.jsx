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
          <Button default>Button</Button>
          <Button inverted>Button</Button>
          <Button primary>Button</Button>
          <Button success>Button</Button>
          <Button info>Button</Button>
          <Button warning>Button</Button>
          <Button danger>Button</Button>
        </div>
        <div>
          <Button link default>Button</Button>
          <Button link inverted>Button</Button>
          <Button link primary>Button</Button>
          <Button link success>Button</Button>
          <Button link info>Button</Button>
          <Button link warning>Button</Button>
          <Button link danger>Button</Button>
        </div>
        <div>
          <Button clean default className="invisible">Button</Button>
          <Button clean inverted>Button</Button>
          <Button clean primary>Button</Button>
          <Button clean success>Button</Button>
          <Button clean info>Button</Button>
          <Button clean warning>Button</Button>
          <Button clean danger>Button</Button>
        </div>
        <div>
          <Button disabled default>Button</Button>
          <Button disabled inverted>Button</Button>
          <Button disabled primary>Button</Button>
          <Button disabled success>Button</Button>
          <Button disabled info>Button</Button>
          <Button disabled warning>Button</Button>
          <Button disabled danger>Button</Button>
        </div>
        <div>
          <Button disabled link default>Button</Button>
          <Button disabled link inverted>Button</Button>
          <Button disabled link primary>Button</Button>
          <Button disabled link success>Button</Button>
          <Button disabled link info>Button</Button>
          <Button disabled link warning>Button</Button>
          <Button disabled link danger>Button</Button>
        </div>
        <div>
          <Button disabled clean default>Button</Button>
          <Button disabled clean inverted>Button</Button>
          <Button disabled clean primary>Button</Button>
          <Button disabled clean success>Button</Button>
          <Button disabled clean info>Button</Button>
          <Button disabled clean warning>Button</Button>
          <Button disabled clean danger>Button</Button>
        </div>
        <div>
          <Button loading default>Button</Button>
          <Button loading inverted>Button</Button>
          <Button loading primary>Button</Button>
          <Button loading success>Button</Button>
          <Button loading info>Button</Button>
          <Button loading warning>Button</Button>
          <Button loading danger>Button</Button>
        </div>
        <div>
          <Button loading link default>Button</Button>
          <Button loading link inverted>Button</Button>
          <Button loading link primary>Button</Button>
          <Button loading link success>Button</Button>
          <Button loading link info>Button</Button>
          <Button loading link warning>Button</Button>
          <Button loading link danger>Button</Button>
        </div>
        <div>
          <Button loading clean default>Button</Button>
          <Button loading clean inverted>Button</Button>
          <Button loading clean primary>Button</Button>
          <Button loading clean success>Button</Button>
          <Button loading clean info>Button</Button>
          <Button loading clean warning>Button</Button>
          <Button loading clean danger>Button</Button>
        </div>
      </div>
    );
  }
}

export default ButtonDemo;