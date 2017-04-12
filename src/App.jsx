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
          <Input

            beforeIcon="user"
            type="text"
            placeholder="Enter your name"
            title="Username"
            hint="Some description here Lorem ipsum dolor la la l al al all la.l la lla"
          >
            <Button info>Click me!</Button>
          </Input>
        </div>
      </div>
    );
  }
  onClick() {
    this.setState({ isLoading: true });
    setTimeout(() => this.setState({ isLoading: false }), 1000);
  }
}

export default App;
