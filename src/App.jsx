import React, { Component } from 'react';
import Button from './components/Button';
import Input from './components/Input';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    }
  }
  render() {
    return (
      <div className="App" style={{ textAlign: 'center' }}>
        <div>
          <Button xs >Button</Button>
          <Button link loading>Button</Button>
          <Button danger xs disabled>Button</Button>
          <Button success sm outline>Button</Button>
          <Button info>Button</Button>
          <Button warning lg>Button</Button>
          <Button primary xl>Button</Button>
        </div>
        <div>          
          <Input beforeIcon="user" type="text" placeholder="Enter your name"/>
        </div>
        <Button info>Click me!</Button>
      </div>
    );
  }
  onClick() {
    this.setState({ isLoading: true });
    setTimeout(() => this.setState({ isLoading: false }), 1000);
  }
}

export default App;
