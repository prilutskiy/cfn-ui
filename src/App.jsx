import React, { Component } from 'react';
import Button from './components/Button';

class App extends Component {
  render() {
    return (
      <div className="App" style={{ textAlign:'center' }}>
        <div>
        <Button>Button</Button>
        <Button primary>Button</Button>
        <Button success>Button</Button>
        <Button info>Button</Button>
        <Button warning>Button</Button>
        <Button danger>Button</Button>
        <Button link>Button</Button>
        </div>

        <div>
        <Button outline>Button</Button>
        <Button outline primary>Button</Button>
        <Button outline success>Button</Button>
        <Button outline info>Button</Button>
        <Button outline warning>Button</Button>
        <Button outline danger>Button</Button>
        <Button outline link>Button</Button>
        </div>

        <div>
        <Button primary xs>Button</Button>
        <Button primary sm>Button</Button>
        <Button primary>Button</Button>
        <Button primary lg>Button</Button>
        <Button primary xl>Button</Button>
        </div>

        <div>
        <Button loading>Button</Button>
        <Button block>Button</Button>
        <Button hidden>Button</Button>
        </div>
      </div>
    );
  }
}

export default App;
